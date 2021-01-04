import React from 'react';
import styles from './blog-post.module.css';
import { format, differenceInDays, parseISO } from 'date-fns';
import sampleBlog from '@/themes/user/asset/images/sampleBlog.jpg';
import { observer } from 'mobx-react';
import { ArticleStoreContext } from '../../article.store';

interface ComponentProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  data?: any;
}

const ArticlePost = (props: ComponentProps) => {
  const { style, className, children, title, data } = props;

  const articleStore = React.useContext(ArticleStoreContext);
  console.log(articleStore.article);
  // const handleDate = (date: any) => {
  //   const pattern = 'EEEE, d MMM, yyyy';
  //   const result = parseISO(date);
  //   const output = format(result, pattern);
  //   setTime(output);
  // };
  // const [time, setTime] = React.useState<string>('');

  // React.useEffect(() => {
  //   // handleDate(articleStore.article.createdDate);
  // });
  // <article className={styles.root}>
  //   {sampleBlog && (
  //     <div className={styles.mainImage}>
  //       <img src={sampleBlog} alt={''} />
  //     </div>
  //   )}
  //   <div className={styles.grid}>
  //     <div className={styles.mainContent}>
  //       <h1 className={styles.title}>{item.subject}</h1>
  //       {item.description && <p>{item.description}</p>}
  //     </div>
  //     <aside className={styles.metaContent}>
  //       {item.createdAt && <div className={styles.publishedAt}>{time}</div>}
  //       {/* {authors && <AuthorList items={authors} title="Authors" />} */}
  //       {/* {categories && ( */}
  //       <div className={styles.categories}>
  //         <h3 className={styles.categoriesHeadline}>Categories</h3>
  //         <ul>
  //           {/* {categories.map((category) => (
  //                 <li key={category._id}>{category.title}</li>
  //               ))} */}
  //         </ul>
  //       </div>
  //       {/* )} */}
  //     </aside>
  //   </div>
  // </article>;

  return (
    <>
      <article className={styles.root}>
        {sampleBlog && (
          <div className={styles.mainImage}>
            <img src={sampleBlog} alt={''} />
          </div>
        )}
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>123</h1>
            <p>12312312</p>
          </div>
          <aside className={styles.metaContent}>
            {/* {data.createdAt && <div className={styles.publishedAt}>{time}</div>} */}
            {/* {authors && <AuthorList items={authors} title="Authors" />} */}
            {/* {categories && ( */}
            <div className={styles.categories}>
              <h3 className={styles.categoriesHeadline}>Categories</h3>
              <ul>
                {/* {categories.map((category) => (
                  <li key={category._id}>{category.title}</li>
                ))} */}
              </ul>
            </div>
            {/* )} */}
          </aside>
        </div>
      </article>
      ;
    </>
  );
};

export default observer(ArticlePost);
