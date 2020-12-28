import { observer } from 'mobx-react-lite';
import React from 'react';
import WrapperTheme from '@/modules/theme/components/Wrapper';
import { ArticleStoreContext } from '../../article.store';
import { ArticleListDto } from '../../article.dto';
import NewArticleList from '../../components/NewArticlelist';
import { Button } from 'react-bootstrap';

const NewArticlePage = () => {
  const articleStore = React.useContext(ArticleStoreContext);
  let pageSize: number = 5;
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
  }, [articleStore, criteriaDto]);
  return (
    <>
      <WrapperTheme pageTitle={'Articles'}>
        <NewArticleList totals={articleStore.totalArticle} />
        <div className="btn-session">
          <Button
            onClick={() => {
              criteriaDto.take = pageSize + 5;
              pageSize += 5;
              articleStore.getNewArticle(criteriaDto);
            }}
          >
            <span>{'more'}</span>
            <i className="ico"></i>
          </Button>
        </div>
      </WrapperTheme>
    </>
  );
};

export default observer(NewArticlePage);
