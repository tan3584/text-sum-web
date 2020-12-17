import React from 'react';
import { observer } from 'mobx-react-lite';
import { Form, Col, Button, ButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { I18N } from '@/modules/lang/i18n.enum';
import { Formik } from 'formik';
import * as yup from 'yup';

/*
 * Props of Component
 */
interface ComponentProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  handleSubmitForm: any;
  initialValues?: any;
  required?: any;
}

const ArticleForm = (props: ComponentProps) => {
  /*
   * Props of Component
   */
  const {
    style,
    className,
    children,
    handleSubmitForm,
    initialValues = {
      subject: '',
      description: '',
    },
  } = props;

  /*
   * Translation
   */
  const { t } = useTranslation();
  const { VALIDATE_REQUIRED, ACCOUNT_EMAIL, PLACEHOLDER_EMAIL } = I18N;

  /*
   * Validation
   */
  const schema = yup.object({
    subject: yup.string().required(t(VALIDATE_REQUIRED)),
    description: yup.string(),
  });

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          handleSubmitForm(values);
        }}
        initialValues={initialValues}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <Form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className={`form form-register ${className ? className : ''}`}
            style={style}
          >
            {children}
            <Form.Row>
              <Form.Group
                as={Col}
                md="12"
                controlId="subject"
                className="form-group-subject"
              >
                <i className="ico ico-user-subject"></i>
                <Form.Label>{'subject'}</Form.Label>

                <Form.Control
                  type="text"
                  placeholder={t(PLACEHOLDER_EMAIL)}
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  isInvalid={!!errors.subject}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.subject}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group
                as={Col}
                md="12"
                controlId="description"
                className="form-group-description"
              >
                <i className="ico ico-description"></i>
                <Form.Label>{'description'}</Form.Label>
                <Form.Control
                  type="text-area"
                  placeholder={'description'}
                  value={values.description}
                  onChange={handleChange}
                  isInvalid={!!errors.description}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <ButtonGroup className="form-actions">
              <Button variant="primary" type="submit">
                <span>{'submit'}</span>
                <i className="ico ico-plus"></i>
              </Button>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default observer(ArticleForm);
