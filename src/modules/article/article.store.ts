import { observable, action } from 'mobx';
import React from 'react';
import { ArticleListDto, CreateArticleDto } from './article.dto';
import articleService from './article.service';

class ArticleStore {
  @observable articleList: any[] = [];
  @observable totalArticle: number = 0;
  @observable resultArticleList: any[] = [];
  @observable totalResult: number = 0;
  @observable createArticleForm: CreateArticleDto = {
    subject: '',
    description: '',
  };

  @action
  async setCreateArticleForm(data: CreateArticleDto) {
    this.createArticleForm = data;
  }

  @action
  async createArticle() {
    const data = await articleService.createArticle(this.createArticleForm);
    return data;
  }

  @action
  async getNewArticle(criteriaDto: ArticleListDto) {
    const result = await articleService.getNewArticle(criteriaDto);
    this.articleList = result[0];
    this.totalArticle = result[1];
  }

  @action
  async getFilteredArticle(criteriaDto: ArticleListDto) {
    const result = await articleService.getFilteredArticle(criteriaDto);
    this.resultArticleList = result[0];
    this.totalResult = result[1];
  }
}

export default new ArticleStore();

export const ArticleStoreContext = React.createContext(new ArticleStore());
