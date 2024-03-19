import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { client, previewClient } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';
import { getServerSideTranslations } from '@src/pages/utils/get-serverside-translations';

const SongPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { song } = props;
  return (
    <div>
      song name: <div>{song.internalName}</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale, draftMode: preview }) => {
  if (!params?.slug || !locale) {
    return {
      notFound: true,
      revalidate: revalidateDuration,
    };
  }

  const gqlClient = preview ? previewClient : client;

  try {
    const songData = await gqlClient.song({ slug: params.slug.toString(), locale, preview });

    const song = songData.songCollection?.items[0];

    if (!song) {
      return {
        notFound: true,
        revalidate: revalidateDuration,
      };
    }

    return {
      revalidate: revalidateDuration,
      props: {
        ...(await getServerSideTranslations(locale)),
        previewActive: !!preview,
        song,
      },
    };
  } catch {
    return {
      notFound: true,
      revalidate: revalidateDuration,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const dataPerLocale = locales
    ? await Promise.all(locales.map(locale => client.songCollection({ locale, limit: 10 })))
    : [];

  const paths = dataPerLocale
    .flatMap((data, index) =>
      data.songCollection?.items.map(song =>
        song?.slug
          ? {
              params: {
                slug: song.slug,
              },
              locale: locales?.[index],
            }
          : undefined,
      ),
    )
    .filter(Boolean);

  return {
    paths,
    fallback: 'blocking',
  };
};
export default SongPage;
