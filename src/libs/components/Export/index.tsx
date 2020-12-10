import React from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Row, Col } from 'react-bootstrap';
import ExportData from '@/libs/components/ExportData';
import { ExportingToDto } from '@/libs/dto/ExportingTo.dto';
/*
 * Props of Component
 */
interface ComponentProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  exportingLabel?: string;
  exportingTo?: ExportingToDto[];
  exportingItems?: string[];
}

const Export = (props: ComponentProps) => {
  /*
   * Props of Component
   */
  const {
    style,
    className,
    children,
    exportingLabel,
    exportingTo,
    exportingItems,
  } = props;

  return (
    <>
      <Container
        fluid
        className={`block-filters ${className ? className : ''}`}
        style={style}
      >
        <Row>
          {exportingLabel && exportingTo && (
            <Col xs={12} md={12}>
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

export default observer(Export);
