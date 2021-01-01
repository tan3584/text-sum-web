import { FilterByDto } from '@/libs/dto/FilterBy.dto';
import { FILTER_TYPE } from '@/libs/enums/filter.enum';
import { I18N } from '@/modules/lang/i18n.enum';
import { observer } from 'mobx-react';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next/*';

interface ComponentProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  label?: string;
  filters: FilterByDto[];
  handleFilter: any;
  filtered?: boolean;
  handleResetFilter?: any;
}

const FilterBy = (props: ComponentProps) => {
  /*
   * Props of Component
   */
  const {
    style,
    className,
    children,
    label,
    filters,
    handleFilter,
    filtered = false,
    handleResetFilter,
  } = props;

  /*
   * Translation
   */
  const { t } = useTranslation();
  const { FILTER_SEARCHBY, FILTER_SEARCH } = I18N;

  return (
    <>
      <div className="group">
        <Form.Control
          size="lg"
          type="text"
          placeholder={t(FILTER_SEARCH)}
          name="search"
        />
        <Button type="submit">
          <i className="ico ico-o-next"></i>
        </Button>
      </div>
    </>
  );
};
export default observer(FilterBy);
