import React from 'react';
import { observer } from 'mobx-react-lite';

import { useTranslation } from 'react-i18next';
import { I18N } from '@/modules/lang/i18n.enum';

import {
  Form,
  Row,
  Col,
  Button,
  ButtonGroup,
  Container,
} from 'react-bootstrap';

import { Formik } from 'formik';
import * as yup from 'yup';
import bsCustomFileInput from 'bs-custom-file-input';
import { PHONE_REGEXP, NUMBER_REGEXP } from '@/libs/constants/rules.constants';
import Image from 'react-bootstrap/Image';
import { BUTTONVARIANT } from '@/libs/enums/button.enum';
import { AuthenticationStoreContext } from '@/modules/authentication.store';
import { REFERENCE_TYPE } from '@/modules/account/referenceType.enum';

/*
 * Props of Component
 */
interface ComponentProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  initialValues?: any;
  handleSubmitForm?: any;
  handleUploadCardFront?: any;
  handleUploadCardBack?: any;
  handleUploadAvatar?: any;
  handleDeleteFiles?: any;
  handleChangeType?: any;
  companyType?: boolean;
}

const UserAccountForm = (props: ComponentProps) => {
  const authStore = React.useContext(AuthenticationStoreContext);

  /*
   * Props of Component
   */
  const {
    style,
    className,
    children,
    initialValues,
    handleSubmitForm,
    handleUploadAvatar,
    handleDeleteFiles,
  } = props;

  /*
   * Translation
   */
  const { t } = useTranslation();
  const {
    VALIDATE_EMAIL,
    VALIDATE_PHONE,
    VALIDATE_NUMBER,
    BUTTONS_UPDATE,
    BUTTONS_CHOOSE_IMAGE,
    CUSTOMER_ADMIN_EMAIL,
    CUSTOMER_ADMIN_CONTACTNO,
    CUSTOMER_NAME,
    MESSAGES_IMAGE_SIZE,
    CUSTOMER_ADMIN_PROFILE_IMG,
  } = I18N;

  /*
   * Validation
   */
  const schema = yup.object({
    firstName: yup.string().notRequired(),
    email: yup.string().email(t(VALIDATE_EMAIL)).notRequired(),
    phoneNumber: yup
      .string()
      .matches(PHONE_REGEXP, t(VALIDATE_PHONE))
      .notRequired(),
    cardNo: yup
      .string()
      .matches(NUMBER_REGEXP, t(VALIDATE_NUMBER))
      .notRequired(),
  });

  const [avatar, setAvatar] = React.useState<string>('');

  // const [cardBack, setCardBack] = React.useState<string>('');

  React.useEffect(() => {
    bsCustomFileInput.init();
  });

  React.useEffect(() => {
    if (authStore.loggedUser) {
      setAvatar(authStore.loggedUser.avatarUrl);
    }
  }, [authStore.loggedUser]);

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          handleSubmitForm(values);
        }}
        initialValues={initialValues}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className={`form form-custom ${className ? className : ''}`}
            style={style}
          >
            {children}
            <Form.Row className="company-info">
              <Container fluid>
                <Row>
                  <Form.Group
                    as={Col}
                    xs={12}
                    lg={7}
                    controlId="email"
                    className="form-group-email"
                  >
                    <Form.Label className="form-label">
                      {t(CUSTOMER_ADMIN_EMAIL)}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      readOnly
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    xs={12}
                    lg={5}
                    controlId="firstName"
                    className="form-group-firstName"
                  >
                    <Form.Label className="form-label">
                      {t(CUSTOMER_NAME)}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={values.firstName ?? ''}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    as={Col}
                    xs={12}
                    lg={5}
                    controlId="phoneNumber"
                    className="form-group-phoneNumber"
                  >
                    <Form.Label className="form-label">
                      {t(CUSTOMER_ADMIN_CONTACTNO)}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={values.phoneNumber ?? ''}
                      onChange={handleChange}
                      isInvalid={!!errors.phoneNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phoneNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    as={Col}
                    xs={12}
                    lg={7}
                    controlId="avatarUrl"
                    className="form-group-avatarUrl"
                  >
                    <div className="form-image-wrapper">
                      <Form.Label className="form-label">
                        {t(CUSTOMER_ADMIN_PROFILE_IMG)}
                        <span className="image-size">
                          {t(MESSAGES_IMAGE_SIZE)}
                        </span>
                      </Form.Label>
                      {avatar && (
                        <div className="image">
                          <a
                            className="zoom-image"
                            href={avatar}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image src={`${avatar}`} />
                          </a>
                          <Button
                            className="btn-icon"
                            onClick={() => {
                              setAvatar('');
                              handleDeleteFiles(
                                REFERENCE_TYPE.USER_PROFILE_IMG
                              );
                            }}
                          >
                            <i className="ico ico-o-close"></i>
                          </Button>
                        </div>
                      )}
                      <Form.File
                        id="iconCompany"
                        label={t(BUTTONS_CHOOSE_IMAGE)}
                        onChange={handleUploadAvatar}
                        custom
                      />
                    </div>
                  </Form.Group>
                </Row>
                <ButtonGroup className="form-actions">
                  <Button variant={BUTTONVARIANT.PRIMARY} type="submit">
                    <span>{t(BUTTONS_UPDATE)}</span>
                    <i className="ico ico-update"></i>
                  </Button>
                </ButtonGroup>
              </Container>
            </Form.Row>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default observer(UserAccountForm);
