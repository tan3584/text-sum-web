import React from 'react';
import { observer } from 'mobx-react-lite';
import logo from '@/modules/theme/assets/images/logo.svg';
import SwitchLanguages from '@/modules/lang/components/SwitchLanguages';

/*
 * Props of Component
 */
interface ComponentProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

const OnePage = (props: ComponentProps) => {
  /*
   * Props of Component
   */
  const { style, className, children, title } = props;

  return (
    <>
      <div
        className={`wrapper one-page ${className ? className : ''}`}
        style={style}
      >
        <div className="main">
          <header className="header">
            <a href="/" title="Tada Truck" className="logo">
              <img alt="Tada Truck" src={logo} />
            </a>
            <SwitchLanguages />
            <div className="header-title">{title}</div>
          </header>
          {children}
        </div>
      </div>
    </>
  );
};

export default observer(OnePage);
