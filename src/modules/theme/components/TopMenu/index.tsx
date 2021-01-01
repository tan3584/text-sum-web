import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import { LogoDto } from '@/libs/dto/Logo.dto';
import logoSvg from '@/modules/theme/assets/images/logo.svg';
import SwitchLanguages from '@/modules/lang/components/SwitchLanguages';
import NotificationSummary from '@/modules/notification/components/Summary';
import AccountSummary from '@/modules/account/components/AccountSummary';
import { USER_ROUTERS } from '@/modules/router.enum';
import FilterBy from '@/libs/components/FilterBy';
import { pageSizeOptions } from '@/libs/constants/paging.constants';
import { FilterByDto } from '@/libs/dto/FilterBy.dto';
import {
  ArticleListDto,
  FilterArticleListDto,
} from '@/modules/article/article.dto';
import { ArticleStoreContext } from '@/modules/article/article.store';
import { reaction } from 'mobx';
import { prepareGetQuery } from '@/libs/utils/routes.util';
/*
 * Props of Component
 */
interface ComponentProps {
  className?: string;
  logo?: LogoDto;
}

const TopMenu = (props: ComponentProps) => {
  const articleStore = React.useContext(ArticleStoreContext);
  const history = useHistory();

  /*
   * Setting filters
   */
  // const filters: FilterByDto[] = [
  //   {
  //     key: 'email',
  //     label: 'topic',
  //   },
  //   {
  //     key: 'phoneNumber',
  //     label: 'description',
  //   },
  // ];

  /*
   * Props of Component
   */
  const {
    className,
    logo = {
      className: '',
      url: logoSvg,
      alt: 'Logo',
    },
  } = props;

  /*
   * Seleted ids in grid
   */
  const [filtered, setFiltered] = React.useState<boolean>(false);

  /*
   * Get list by criteria
   */
  const [criteriaDto, setCriteriaDto] = React.useState<FilterArticleListDto>({
    skip: 0,
    take: +pageSizeOptions[0],
  });

  const [inittial, setInitial] = React.useState<string>('');

  /*
   * Action of search button
   * @param: any e
   * @param: FilterByDto filterType
   * @return: void
   */
  const handleFilter = async (e: any) => {
    await setCriteriaDto({
      skip: 0,
      take: +pageSizeOptions[0],
      searchKeyword: e.target.search.value,
    });
  };

  // const getFiltered = () => {
  //   articleStore.getNewArticle(criteriaDto);
  // };
  /*
   * Setting logo responsive
   */
  const isMobile = useMediaQuery({
    query: '(max-width: 991px)',
  });
  const isMounted = useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      history.push(
        `/filter${prepareGetQuery({
          ...criteriaDto,
        })}`
      );
    } else {
      isMounted.current = true;
    }
  }, [criteriaDto, history]);

  return (
    <>
      <div className={`top-menu ${className ? className : ''}`}>
        {isMobile && (
          <div
            onClick={() => {
              history.push(USER_ROUTERS.SETUP);
            }}
            className="logo-menu"
          >
            <img
              className={logo.className ? logo.className : ''}
              src={logo.url ? logo.url : ''}
              alt={logo.alt ? logo.alt : 'Logo'}
            />
          </div>
        )}
        <FilterBy handleFilter={handleFilter} filtered={filtered} />
        <NotificationSummary />
        <AccountSummary />
        <SwitchLanguages />
      </div>
    </>
  );
};

export default observer(TopMenu);
