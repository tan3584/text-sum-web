import { observer } from 'mobx-react-lite';
import React, { useRef } from 'react';
import WrapperTheme from '@/modules/theme/components/Wrapper';
import { ArticleStoreContext } from '../../article.store';
import { ArticleListDto } from '../../article.dto';
import { Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import FilteredArticleList from '../../components/FilteredArticleList';

const SearchPage = () => {
  const articleStore = React.useContext(ArticleStoreContext);
  let pageSize: number = 5;
  const { searchKeyword } = useParams() as any;
  const queryString = require('query-string');
  const parsed = queryString.parse(useLocation().search);
  const params = new URLSearchParams(useLocation().search);
  const searchKey = params.get('searchKeyword');
  /*
   * Get list by criteria
   */
  const [criteriaDto, setCriteriaDto] = React.useState<ArticleListDto>({
    skip: 0,
    take: pageSize,
    searchBy: '',
    searchKeyword: searchKey || '',
  });
  const isMounted = useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      articleStore.getFilteredArticle({
        skip: 0,
        take: pageSize,
        searchBy: '',
        searchKeyword: searchKey || '',
      });
    } else {
      articleStore.getFilteredArticle({
        skip: 0,
        take: pageSize,
        searchBy: '',
        searchKeyword: searchKey || '',
      });
      isMounted.current = true;
    }
  }, [articleStore, criteriaDto, searchKey, pageSize]);
  return (
    <>
      <WrapperTheme pageTitle={'Filtered'}>
        <FilteredArticleList totals={articleStore.totalResult} />
        <div className="btn-session">
          <Button
            onClick={() => {
              criteriaDto.take = pageSize + 5;
              pageSize += 5;
              articleStore.getFilteredArticle(criteriaDto);
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
export default observer(SearchPage);
