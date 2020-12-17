import { observer } from 'mobx-react-lite';
import React from 'react';
import WrapperTheme from '@/modules/theme/components/Wrapper';
import ArticleForm from '@/modules/article/components/ArticleForm';
import { CreateArticleDto } from '@/modules/article/article.dto';
import { ArticleStoreContext } from '@/modules/article/article.store';

const CreateArticlePage = () => {
  const articleStore = React.useContext(ArticleStoreContext);
  const [initData, setInitData] = React.useState<any>();

  const handleSave = async (values: any) => {
    const createArticleData: CreateArticleDto = {
      subject: values.subject,
      description: values.description,
    };
    articleStore.setCreateArticleForm(createArticleData);
    const result = await articleStore.createArticle();
    if (result) {
      console.log('success', result);
    }
  };

  return (
    <>
      <WrapperTheme pageTitle={'Create article'}>
        <ArticleForm handleSubmitForm={handleSave} initialValues={initData} />
      </WrapperTheme>
    </>
  );
};

export default observer(CreateArticlePage);
