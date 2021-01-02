import React from 'react';
import { observer } from 'mobx-react-lite';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { I18N } from '@/modules/lang/i18n.enum';

/*
 * Props of Component
 */
interface ComponentProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  handleFilter: any;
  filtered?: boolean;
  inittial?: string;
}

const FilterBy = (props: ComponentProps) => {
  /*
   * Props of Component
   */
  const {
    style,
    className,
    children,
    handleFilter,
    filtered = false,
    inittial = '',
  } = props;

  /*
   * Translation
   */
  const { t } = useTranslation();
  const { FILTER_SEARCHBY, FILTER_SEARCH } = I18N;

  return (
    <>
      <div className="item search">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleFilter(e);
          }}
        >
          <Form.Group
            className={`block-filter ${filtered ? 'filtered' : ''} ${
              className ? className : ''
            }`}
            style={style}
          >
            <div className="group">
              <Form.Control
                size="lg"
                type="text"
                placeholder={t(FILTER_SEARCH)}
                name="search"
              />
              {/* <Button type="submit">
                <i className="ico ico-o-next"></i>
              </Button> */}
            </div>
          </Form.Group>
          {children}
        </Form>
      </div>
    </>
  );
};

export default observer(FilterBy);
