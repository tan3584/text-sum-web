import React from 'react';
import { ArticleStoreContext } from '../../article.store';

/*
 * Props of Component
 */
interface ComponentProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  totals: number;
  handleChangePageItem: any;
  current: number;
}

const NewArticlePage = (props: ComponentProps) => {
  const articleStore = React.useContext(ArticleStoreContext);

  /*
   * Props of Component
   */
  const {
    style,
    className,
    children,
    title,
    totals,
    handleChangePageItem,
    current,
  } = props;

  /*
   * Set total page
   */
  // const totals: number = items.length;
  const maxPage: number = 4;
  const [totalPage, setTotalPage] = React.useState<number>(0);

  React.useEffect(() => {
    console.log(articleStore.articleList);
    if (articleStore.articleList) {
      setTotalPage(Math.ceil(totals / 2));
    }
  }, [articleStore.articleList, articleStore, totals]);
  return <>123</>;
};

export default NewArticlePage;
