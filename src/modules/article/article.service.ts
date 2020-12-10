import { CreateArticleDto } from './article.dto';
import http from '@/libs/services';

class ArticleService {
  private _getPrefix = () => {
    return 'api/topic';
  };

  accountPrefix: string = this._getPrefix();

  public async createArticle(data: CreateArticleDto) {
    const result = await http.post(`${this.accountPrefix}`, data);
    return result.data?.result;
  }
}
export default new ArticleService();
