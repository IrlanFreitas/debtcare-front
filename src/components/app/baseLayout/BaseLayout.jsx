import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./BaseLayout.scss";
import authAction from "~/actions/authAction";

const { Header, Sider, Content } = Layout;

const Authenticated = ({ children }) => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);

  function handleMenuClick(e) {
    console.log("click left button", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" onClick={() => dispatch(authAction.logout())} icon={<LogoutOutlined />}>
        Deslogar
      </Menu.Item>
    </Menu>
  );

  const toggle = () => setCollapsed(!collapsed);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />

        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/dashboard">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/usuarios">Usuários</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header
          className="site-layout-background header"
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => {
                toggle();
              },
            }
          )}
          <Dropdown overlay={menu} trigger={["click"]}>
            <Avatar
              size="large"
              style={{ marginRight: 10, cursor: "pointer" }}
              icon={<UserOutlined />}
            />
          </Dropdown>
        </Header>

        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

const Anonymous = (props) => {
  return (
    <Layout>
      <Content style={{ minHeight: "100vh" }}>{props.children}</Content>
    </Layout>
  );
};

export default { Authenticated, Anonymous };
