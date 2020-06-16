import React, { useEffect } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import debtsAction from "~/actions/debtsAction";

const columns = [
  {
    title: "Nome",
    dataIndex: "nome",
    key: "nome",
  },
  {
    title: "Descrição",
    dataIndex: "descricao",
    key: "descricao",
  },
  {
    title: "Devedor",
    dataIndex: "devedor",
    key: "devedor",
  },
  {
    title: "Instituição",
    dataIndex: "instituição",
    key: "instituição",
  },
];

export default function DebtsList() {
  const dispatch = useDispatch();
  const debts = useSelector((state) => state.debt.debts);

  useEffect(() => {
    dispatch(debtsAction.list("waitDebts"));
  }, [dispatch]);

  return (
    <>
      <Row gutter={[24, 8]}>
        <Col span={24}>
          <Form layout="inline" style={{ width: "100%" }}>
            <Form.Item label="Nome">
              <Input />
            </Form.Item>
            <Form.Item label="Devedor">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Buscar</Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary"> Nova Dívida</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={24}>
          <Table
            style={{ width: "100%" }}
            rowKey="id"
            columns={columns}
            dataSource={debts}
          />
        </Col>
      </Row>
    </>
  );
}
