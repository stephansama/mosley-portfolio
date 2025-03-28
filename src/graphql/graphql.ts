/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  /** References another document, used as a foreign key */
  Reference: { input: any; output: any; }
};

export type Collection = {
  __typename?: 'Collection';
  documents: DocumentConnection;
  fields?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  format?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  templates?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};


export type CollectionDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  first?: InputMaybe<Scalars['Float']['input']>;
  folder?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

/** A relay-compliant pagination connection */
export type Connection = {
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type Document = {
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<DocumentNode>;
};

export type DocumentFilter = {
  layout?: InputMaybe<LayoutFilter>;
  post?: InputMaybe<PostFilter>;
};

export type DocumentMutation = {
  layout?: InputMaybe<LayoutMutation>;
  post?: InputMaybe<PostMutation>;
};

export type DocumentNode = Folder | Layout | Post;

export type DocumentUpdateMutation = {
  layout?: InputMaybe<LayoutMutation>;
  post?: InputMaybe<PostMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type ImageFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Layout = Document & Node & {
  __typename?: 'Layout';
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  profile?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type LayoutConnection = Connection & {
  __typename?: 'LayoutConnection';
  edges?: Maybe<Array<Maybe<LayoutConnectionEdges>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type LayoutConnectionEdges = {
  __typename?: 'LayoutConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Layout>;
};

export type LayoutFilter = {
  profile?: InputMaybe<ImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type LayoutMutation = {
  profile?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  createDocument: DocumentNode;
  createFolder: DocumentNode;
  createLayout: Layout;
  createPost: Post;
  deleteDocument: DocumentNode;
  updateDocument: DocumentNode;
  updateLayout: Layout;
  updatePost: Post;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']['input'];
  relativePath: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  params: DocumentMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateFolderArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateLayoutArgs = {
  params: LayoutMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  params: PostMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  params: DocumentUpdateMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdateLayoutArgs = {
  params: LayoutMutation;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdatePostArgs = {
  params: PostMutation;
  relativePath: Scalars['String']['input'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

export type Post = Document & Node & {
  __typename?: 'Post';
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
  body?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type PostConnection = Connection & {
  __typename?: 'PostConnection';
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
};

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Post>;
};

export type PostFilter = {
  body?: InputMaybe<RichTextFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostMutation = {
  body?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  collection: Collection;
  collections: Array<Collection>;
  document: DocumentNode;
  getOptimizedQuery?: Maybe<Scalars['String']['output']>;
  layout: Layout;
  layoutConnection: LayoutConnection;
  node: Node;
  post: Post;
  postConnection: PostConnection;
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryLayoutArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLayoutConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LayoutFilter>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type RichTextFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  basename: Scalars['String']['output'];
  breadcrumbs: Array<Scalars['String']['output']>;
  collection: Collection;
  extension: Scalars['String']['output'];
  filename: Scalars['String']['output'];
  hasReferences?: Maybe<Scalars['Boolean']['output']>;
  path: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  template: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']['input']>;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
