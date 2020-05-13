import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { Form, Input, Icon, Row, Col, Button } from "antd";
import authAction from "~/actions/authAction";
import "./Login.scss";
// import Messages from "~/helpers/enums/Messages";
import utils from "~/helpers/Utils";

import Constants from "~/helpers/enums/Constants";

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  // const [form] = Form.useForm();

  const loading = useSelector((state) => state.app.loading);

  const sendLogin = values => {
    // e.preventDefault();
    // form.formvalidateFields((err, values) => {
    //   if (!err) {
        dispatch(
          authAction.sendCredentials(values, redirectUser, "buttonLogin")
        );
      // }
    // });
  }

  const redirectUser = (error) => {
    if (error) {
      return;
    }
    history.replace("/");
    utils.showTranslatedToast("Logado com sucesso", { autoClose: 2000 });
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
          <Form onFinish={sendLogin} onFinishFailed={() => {}} className="login-form">
            <Form.Item
              name="username"
              rules={[{ required: true, message: Constants.INPUT_USERNAME }]}
            >
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder={"Login"}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: Constants.INPUT_PASSWORD }]}
            >
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder={"Senha"}
              />
            </Form.Item>
            <Form.Item >

              <Button
                loading={loading.buttonLogin}
                htmlType="submit"
                type="primary"
                className="login-form-button"
              >
                Logar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default withRouter(LoginForm);
