import React from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Row, Col } from 'react-bootstrap';
import FilterBy from '@/libs/components/FilterBy';
import ExportData from '@/libs/components/ExportData';
import { ExportingToDto } from '@/libs/dto/ExportingTo.dto';
/*
 * Props of Component
 */
interface ComponentProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  handFilter: any;
  exportingLabel?: string;
  exportingTo?: ExportingToDto[];
  exportingItems?: string[];
  filtered?: boolean;
}

const FilterExport = (props: ComponentProps) => {
  /*
   * Props of Component
   */
  const {
    style,
    className,
    children,
    handFilter,
    exportingLabel,
    exportingTo,
    exportingItems,
    filtered = false,
  } = props;

  return (
    <>
      <Container
        fluid
        className={`block-filters ${className ? className : ''}`}
        style={style}
      >
        <Row>
          <Col xs={12} md={6}>
            <FilterBy handleFilter={handFilter} filtered={filtered} />
          </Col>
          {exportingLabel && exportingTo && (
            <Col xs={12} md={6}>
              <ExportData
                label={exportingLabel}
                exportingTo={exportingTo}
                exportingItems={exportingItems}
              />
            </Col>
          )}
        </Row>
        {children && <Row>{children}</Row>}
      </Container>
    </>
  );
};

export default observer(FilterExport);
