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

const NewArticleList = (props: ComponentProps) => {
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
    if (articleStore.articleList) {
      setTotalPage(Math.ceil(totals / 2));
    }
  }, [articleStore.articleList, articleStore, totals]);
  return (
    <>
      <ul className={styles.grid}>
        {articleStore.articleList && totals > 0 ? (
          articleStore.articleList.map((item: any, index: number) => (
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

export default observer(NewArticleList);
