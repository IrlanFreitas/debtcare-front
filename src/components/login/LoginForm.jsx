import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { Form, Input, Row, Col, Button } from "antd";
import authAction from "~/actions/authAction";
import "./Login.scss";
import utils from "~/helpers/Utils";
import { Link } from "react-router-dom";
import DividaZeroLogo from "~/assets/images/divida-zero-logo.svg";

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.app.loading);

  const sendLogin = (values) => {
    dispatch(authAction.sendCredentials(values, redirectUser, "buttonLogin"));
  };

  const redirectUser = (error) => {
    if (error) {
      utils.showToast(error.message, "error");
      return;
    }
    history.replace("/usuarios");
    utils.showToast("Logado com sucesso", "success");
  };

  return (
    <>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh", backgroundColor: "#1D4970" }}
      >
        <Col style={{ width: "20vw" }}>
          <img
            src={DividaZeroLogo}
            alt="Logo dívida zero"
            style={{ width: "100%" }}
          />

          <Form
            onFinish={sendLogin}
            onFinishFailed={() => {}}
            className="login-form"
            layout="vertical"
          >
            <Form.Item
              label="Usuário"
              name="username"
              style={{ marginBottom: 10 }}
              rules={[
                { required: true, message: "O campo Usuário é necessário" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="password"
              rules={[
                { required: true, message: "O campo Senha é necessário" },
              ]}
            >
              <Input type="password" placeholder={"Digite aqui"} />
            </Form.Item>

            <Form.Item>
              <div>
                <Link to="/forgotPasswrd" className="esqueciMinhaSenha">
                  esqueci minha senha
                </Link>
              </div>
              <Button
                loading={loading.buttonLogin}
                htmlType="submit"
                className="btnEntrar"
              >
                <span>Entrar</span>
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default withRouter(LoginForm);
