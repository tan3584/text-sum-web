import { ArticleListDto, CreateArticleDto } from './article.dto';
import http from '@/libs/services';
import { prepareGetQuery } from '@/libs/utils/routes.util';

class ArticleService {
  private _getPrefix = () => {
    return 'api/topic';
  };

  Prefix: string = this._getPrefix();

  public async createArticle(data: CreateArticleDto) {
    const result = await http.post(`${this.Prefix}`, data);
    return result.data?.result;
  }

  public async getNewArticle(criteriaDto: ArticleListDto) {
    const result = await http.get(
      `${this.Prefix}/new${prepareGetQuery({
        ...criteriaDto,
      })}`
    );
    return result.data?.result;
  }
}
export default new ArticleService();
