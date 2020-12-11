import React from 'react';
import { observer } from 'mobx-react-lite';
// import Menu from '@/modules/theme/components/Menu';
// import { adminMenu } from '@/modules/theme/constants/theme.constants';
import TopMenu from '@/modules/theme/components/TopMenu';
import PageTitle from '@/libs/components/PageTitle';
import { LanguageStoreContext } from '@/modules/lang/lang.store';

interface ComponentProps {
  children?: React.ReactNode;
  pageTitle?: string;
  pageSubTitle?: string;
  showCurrentDate?: boolean;
}

const WrapperTheme = (props: ComponentProps) => {
  const langStore = React.useContext(LanguageStoreContext);

  /*
   * Props of Component
   */
  const { children, pageTitle, pageSubTitle, showCurrentDate = true } = props;

  React.useEffect(() => {}, [langStore, langStore.activeLanguage]);

  return (
    <>
      <div className={`page-wrapper ${langStore.activeLanguage}`}>
        {/* <Menu /> */}
        <div className="main">
          <TopMenu />
          {pageTitle && (
            <PageTitle
              title={pageTitle}
              subTitle={pageSubTitle}
              showCurrentDate={showCurrentDate}
            />
          )}
          {children}
        </div>
      </div>
    </>
  );
};

export default observer(WrapperTheme);
