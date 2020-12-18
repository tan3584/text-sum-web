import { observer } from 'mobx-react-lite';
import React from 'react';
import WrapperTheme from '@/modules/theme/components/Wrapper';
import { ArticleStoreContext } from '../../article.store';
import { ArticleListDto } from '../../article.dto';
import NewArticleList from '../../components/NewArticlelist';

const NewArticlePage = () => {
  const articleStore = React.useContext(ArticleStoreContext);
  const pageSize: number = 5;
  /*
   * Get list by criteria
   */
  const [criteriaDto] = React.useState<ArticleListDto>({
    skip: 0,
    take: pageSize,
    orderBy: 'id',
    orderDirection: 'DESC',
    searchBy: '',
    searchKeyword: '',
  });

  React.useEffect(() => {
    articleStore.getNewArticle(criteriaDto);
  });
  return (
    <>
      <WrapperTheme pageTitle={'Articles'}>
        <NewArticleList totals={articleStore.totalArticle} />
      </WrapperTheme>
    </>
  );
};

export default observer(NewArticlePage);
