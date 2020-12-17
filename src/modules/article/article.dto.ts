export interface CreateArticleDto {
  subject: string;
  description: string;
}

export interface ArticleListDto {
  skip?: number;
  take?: number;
  orderBy?: string;
  orderDirection?: 'ASC' | 'DESC';
  searchBy?: string;
  searchKeyword?: string;
}
