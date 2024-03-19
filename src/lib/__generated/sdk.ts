import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Album of the song [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/album) */
export type Album = Entry & {
  __typename?: 'Album';
  artist?: Maybe<Artist>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<AlbumLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Album of the song [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/album) */
export type AlbumArtistArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ArtistFilter>;
};


/** Album of the song [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/album) */
export type AlbumInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Album of the song [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/album) */
export type AlbumLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Album of the song [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/album) */
export type AlbumNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Album of the song [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/album) */
export type AlbumReleaseDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Album of the song [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/album) */
export type AlbumSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AlbumCollection = {
  __typename?: 'AlbumCollection';
  items: Array<Maybe<Album>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AlbumFilter = {
  AND?: InputMaybe<Array<InputMaybe<AlbumFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AlbumFilter>>>;
  artist?: InputMaybe<CfArtistNestedFilter>;
  artist_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  releaseDate?: InputMaybe<Scalars['DateTime']>;
  releaseDate_exists?: InputMaybe<Scalars['Boolean']>;
  releaseDate_gt?: InputMaybe<Scalars['DateTime']>;
  releaseDate_gte?: InputMaybe<Scalars['DateTime']>;
  releaseDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  releaseDate_lt?: InputMaybe<Scalars['DateTime']>;
  releaseDate_lte?: InputMaybe<Scalars['DateTime']>;
  releaseDate_not?: InputMaybe<Scalars['DateTime']>;
  releaseDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AlbumLinkingCollections = {
  __typename?: 'AlbumLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AlbumLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AlbumOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** This is the artist page information, and actual artist information [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/artist) */
export type Artist = Entry & {
  __typename?: 'Artist';
  content?: Maybe<ArtistContent>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ArtistLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  songsCollection?: Maybe<ArtistSongsCollection>;
  sys: Sys;
};


/** This is the artist page information, and actual artist information [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/artist) */
export type ArtistContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the artist page information, and actual artist information [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/artist) */
export type ArtistInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the artist page information, and actual artist information [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/artist) */
export type ArtistLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This is the artist page information, and actual artist information [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/artist) */
export type ArtistNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** This is the artist page information, and actual artist information [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/artist) */
export type ArtistSongsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ArtistSongsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongFilter>;
};

export type ArtistCollection = {
  __typename?: 'ArtistCollection';
  items: Array<Maybe<Artist>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ArtistContent = {
  __typename?: 'ArtistContent';
  json: Scalars['JSON'];
  links: ArtistContentLinks;
};

export type ArtistContentAssets = {
  __typename?: 'ArtistContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ArtistContentEntries = {
  __typename?: 'ArtistContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ArtistContentLinks = {
  __typename?: 'ArtistContentLinks';
  assets: ArtistContentAssets;
  entries: ArtistContentEntries;
  resources: ArtistContentResources;
};

export type ArtistContentResources = {
  __typename?: 'ArtistContentResources';
  block: Array<ArtistContentResourcesBlock>;
  hyperlink: Array<ArtistContentResourcesHyperlink>;
  inline: Array<ArtistContentResourcesInline>;
};

export type ArtistContentResourcesBlock = ResourceLink & {
  __typename?: 'ArtistContentResourcesBlock';
  sys: ResourceSys;
};

export type ArtistContentResourcesHyperlink = ResourceLink & {
  __typename?: 'ArtistContentResourcesHyperlink';
  sys: ResourceSys;
};

export type ArtistContentResourcesInline = ResourceLink & {
  __typename?: 'ArtistContentResourcesInline';
  sys: ResourceSys;
};

export type ArtistFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArtistFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArtistFilter>>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  songs?: InputMaybe<CfSongNestedFilter>;
  songsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ArtistLinkingCollections = {
  __typename?: 'ArtistLinkingCollections';
  albumCollection?: Maybe<AlbumCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ArtistLinkingCollectionsAlbumCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ArtistLinkingCollectionsAlbumCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ArtistLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ArtistLinkingCollectionsAlbumCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ArtistOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ArtistSongsCollection = {
  __typename?: 'ArtistSongsCollection';
  items: Array<Maybe<Song>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum ArtistSongsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  album?: Maybe<Album>;
  albumCollection?: Maybe<AlbumCollection>;
  artist?: Maybe<Artist>;
  artistCollection?: Maybe<ArtistCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  song?: Maybe<Song>;
  songCollection?: Maybe<SongCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAlbumArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAlbumCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AlbumOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlbumFilter>;
};


export type QueryArtistArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryArtistCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ArtistOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ArtistFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QuerySongArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySongCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SongOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  urn: Scalars['String'];
};

/** Song page with all the information [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/song) */
export type Song = Entry & {
  __typename?: 'Song';
  album?: Maybe<Entry>;
  content?: Maybe<SongContent>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<SongLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Song page with all the information [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/song) */
export type SongAlbumArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Song page with all the information [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/song) */
export type SongContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Song page with all the information [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/song) */
export type SongInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Song page with all the information [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/song) */
export type SongLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Song page with all the information [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/song) */
export type SongNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Song page with all the information [See type definition](https://app.contentful.com/spaces/ajkg91lqedzt/content_types/song) */
export type SongSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SongCollection = {
  __typename?: 'SongCollection';
  items: Array<Maybe<Song>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SongContent = {
  __typename?: 'SongContent';
  json: Scalars['JSON'];
  links: SongContentLinks;
};

export type SongContentAssets = {
  __typename?: 'SongContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SongContentEntries = {
  __typename?: 'SongContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SongContentLinks = {
  __typename?: 'SongContentLinks';
  assets: SongContentAssets;
  entries: SongContentEntries;
  resources: SongContentResources;
};

export type SongContentResources = {
  __typename?: 'SongContentResources';
  block: Array<SongContentResourcesBlock>;
  hyperlink: Array<SongContentResourcesHyperlink>;
  inline: Array<SongContentResourcesInline>;
};

export type SongContentResourcesBlock = ResourceLink & {
  __typename?: 'SongContentResourcesBlock';
  sys: ResourceSys;
};

export type SongContentResourcesHyperlink = ResourceLink & {
  __typename?: 'SongContentResourcesHyperlink';
  sys: ResourceSys;
};

export type SongContentResourcesInline = ResourceLink & {
  __typename?: 'SongContentResourcesInline';
  sys: ResourceSys;
};

export type SongFilter = {
  AND?: InputMaybe<Array<InputMaybe<SongFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SongFilter>>>;
  album_exists?: InputMaybe<Scalars['Boolean']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SongLinkingCollections = {
  __typename?: 'SongLinkingCollections';
  artistCollection?: Maybe<ArtistCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type SongLinkingCollectionsArtistCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SongLinkingCollectionsArtistCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SongLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SongLinkingCollectionsArtistCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SongOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type _Node = {
  _id: Scalars['ID'];
};

export type CfArtistNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfArtistNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfArtistNestedFilter>>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  songsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSongNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSongNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSongNestedFilter>>>;
  album_exists?: InputMaybe<Scalars['Boolean']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ImageFieldsFragment = { __typename: 'Asset', title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } };

export type SitemapPagesFieldsFragment = { __typename?: 'Query', songCollection?: { __typename?: 'SongCollection', items: Array<{ __typename?: 'Song', slug?: string | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null };

export type SitemapPagesQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type SitemapPagesQuery = (
  { __typename?: 'Query' }
  & SitemapPagesFieldsFragment
);

export type SongFieldsFragment = { __typename: 'Song', internalName?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, content?: { __typename?: 'SongContent', json: any } | null };

export type SongQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type SongQuery = { __typename?: 'Query', songCollection?: { __typename?: 'SongCollection', items: Array<(
      { __typename?: 'Song' }
      & SongFieldsFragment
    ) | null> } | null };

export type SongCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<InputMaybe<SongOrder>> | InputMaybe<SongOrder>>;
  where?: InputMaybe<SongFilter>;
}>;


export type SongCollectionQuery = { __typename?: 'Query', songCollection?: { __typename?: 'SongCollection', items: Array<(
      { __typename?: 'Song' }
      & SongFieldsFragment
    ) | null> } | null };

export const ImageFieldsFragmentDoc = gql`
    fragment ImageFields on Asset {
  __typename
  sys {
    id
  }
  title
  description
  width
  height
  url
  contentType
}
    `;
export const SitemapPagesFieldsFragmentDoc = gql`
    fragment sitemapPagesFields on Query {
  songCollection(limit: 100, locale: $locale) {
    items {
      slug
      sys {
        publishedAt
      }
    }
  }
}
    `;
export const SongFieldsFragmentDoc = gql`
    fragment SongFields on Song {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  slug
  content {
    json
  }
}
    `;
export const SitemapPagesDocument = gql`
    query sitemapPages($locale: String!) {
  ...sitemapPagesFields
}
    ${SitemapPagesFieldsFragmentDoc}`;
export const SongDocument = gql`
    query song($slug: String!, $locale: String, $preview: Boolean) {
  songCollection(
    limit: 1
    where: {slug: $slug}
    locale: $locale
    preview: $preview
  ) {
    items {
      ...SongFields
    }
  }
}
    ${SongFieldsFragmentDoc}`;
export const SongCollectionDocument = gql`
    query songCollection($locale: String, $preview: Boolean, $limit: Int, $order: [SongOrder], $where: SongFilter) {
  songCollection(
    limit: $limit
    locale: $locale
    preview: $preview
    order: $order
    where: $where
  ) {
    items {
      ...SongFields
    }
  }
}
    ${SongFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    sitemapPages(variables: SitemapPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SitemapPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SitemapPagesQuery>(SitemapPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sitemapPages', 'query');
    },
    song(variables: SongQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SongQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SongQuery>(SongDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'song', 'query');
    },
    songCollection(variables?: SongCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SongCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SongCollectionQuery>(SongCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'songCollection', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;