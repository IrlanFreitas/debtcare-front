import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { Form, Input, Icon, Checkbox, Row, Col, Button } from "antd";
import authAction from "~/actions/authAction";
import "./Login.scss";
// import Messages from "~/helpers/enums/Messages";
import utils from "~/helpers/Utils";

import Constants from "~/helpers/enums/Constants";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const { form } = props;
  const { getFieldDecorator } = form;

  const loading = useSelector((state) => state.app.loading);

  function sendLogin(e) {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        dispatch(
          authAction.sendCredentials(values, redirectUser, "buttonLogin")
        );
      }
    });
  }

  function redirectUser(error) {
    if (error) {
      return;
    }
    props.history.replace("/");
    // utils.showTranslatedToast(Messages.MSG_LOGIN_SUCCESS, { autoClose: 2000 }, t?);
  }

  return (
    <>
      <p>{Constants.SUCCESSFUL_OPERATION}</p>

      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
        <Col style={{ minWidth: 426 }}>
          <Form onSubmit={sendLogin} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: Constants.INPUT_USERNAME }],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder={Constants.USERNAME}
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: Constants.INPUT_PASSWORD }],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder={Constants.PASSWORD}
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true,
              })(<Checkbox>{Constants.REMEMBER_ME}</Checkbox>)}

              <Button
                loading={loading.buttonLogin}
                htmlType="submit"
                type="primary"
                className="login-form-button"
              >
                {`loginForm:${Constants.LOGIN}`}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

const WrappedLogin = Form.create({ name: "loginform" })(LoginForm);
export default withRouter(WrappedLogin);
