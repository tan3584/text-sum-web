import { observer } from 'mobx-react-lite';
import React from 'react';
import WrapperTheme from '@/modules/theme/components/Wrapper';
import { ArticleStoreContext } from '../../article.store';
import { useParams } from 'react-router-dom';
import ArticlePost from '../../components/Article';

const Article = () => {
  const articleStore = React.useContext(ArticleStoreContext);
  const { id } = useParams() as any;

  React.useEffect(() => {
    articleStore.getArticle(id);
  });
  return (
    <>
      <WrapperTheme pageTitle={'Articles'}>
        <ArticlePost />
      </WrapperTheme>
    </>
  );
};

export default observer(Article);
