import React from 'react';
import { ArticleStoreContext } from '../../article.store';
import { observer } from 'mobx-react-lite';
import ArticlePreview from '../ArticlePreview';
import styles from './index.module.css';
/*
 * Props of Component
 */
interface ComponentProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  totals: number;
  handleChangePageItem?: any;
}

const FilteredArticleList = (props: ComponentProps) => {
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
  } = props;

  /*
   * Set total page
   */
  // const totals: number = items.length;
  const maxPage: number = 4;
  const [totalPage, setTotalPage] = React.useState<number>(0);

  React.useEffect(() => {
    if (articleStore.resultArticleList) {
      setTotalPage(Math.ceil(totals / 2));
    }
  }, [articleStore.articleList, articleStore, totals]);
  return (
    <>
      <ul className={styles.grid}>
        {articleStore.resultArticleList && totals > 0 ? (
          articleStore.resultArticleList.map((item: any, index: number) => (
            <li key={index}>
              <ArticlePreview orderItem={item} />
            </li>
          ))
        ) : (
          <>
            <div className="message no-item">There is no item</div>
          </>
        )}
      </ul>
    </>
  );
};

export default observer(FilteredArticleList);
