import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './index.module.css';
import sampleBlog from '@/themes/user/asset/images/sampleBlog.jpg';
import responsiveTitle3 from '@/styles/typography.module.css';
import { cn } from '@/libs/helpers/helpers';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
/*
 * Props of Component
 */
interface ComponentProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  orderItem?: any;
}

const ArticlePreview = (props: ComponentProps) => {
  const handleDate = (date: any) => {
    const pattern = 'EEEE, d MMM, yyyy';
    const result = parseISO(date);
    const output = format(result, pattern);
    setTime(output);
  };

  const [time, setTime] = React.useState<string>('');

  React.useEffect(() => {
    handleDate(orderItem.createdDate);
  });
  /*
   * Props of Component
   */
  const { style, className, children, title, orderItem } = props;
  return (
    <>
      <Link className={styles.inList} to={''}>
        <div className={styles.leadMediaThumb}>
          <img src={sampleBlog} alt={''} />
        </div>
        <div className={styles.text}>
          <h3 className={cn(responsiveTitle3, styles.title)}>
            {orderItem.subject}
          </h3>
          <div className={styles.excerpt}>
            <p>{orderItem.description}</p>
          </div>
          <div className={styles.date}>{time}</div>
        </div>
      </Link>
    </>
  );
};
export default observer(ArticlePreview);
