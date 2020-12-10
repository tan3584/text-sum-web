import { observable, action } from 'mobx';
import accountService from 'modules/account/account.service';
import React from 'react';
import { CreateArticleDto } from './article.dto';
import articleService from './article.service';

class ArticleStore {
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
}

export default new ArticleStore();

export const ArticleStoreContext = React.createContext(new ArticleStore());
