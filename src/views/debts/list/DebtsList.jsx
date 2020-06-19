import React, { useEffect } from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import debtsAction from "~/actions/debtsAction";
import { Link } from 'react-router-dom'

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
    title: "Endividado",
    dataIndex: "endividado",
    key: "endividado",
  },
  {
    title: "Valor Total",
    dataIndex: "valor_total",
    key: "valor_total",
    render: (text, record, idx) => (
      <>
        {" "}
        {text.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })}
      </>
    ),
  },
  {
    title: "Valor Negociado",
    dataIndex: "valor_negociado",
    key: "valor_negociado",
    render: (text, record, idx) => (
      <>
        {" "}
        {text.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })}
      </>
    ),
  },
  {
    title: "Valor a Pagar",
    dataIndex: "valor_a_pagar",
    key: "valor_a_pagar",
    render: (text, record, idx) => (
      <>
        {" "}
        {text.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })}
      </>
    ),
  },
  {
    title: "Instituição",
    dataIndex: "instituicao",
    key: "instituicao",
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
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card>
            <Form>
              <Row justify={"space-between"} align={"middle"} gutter={[8, 0]}>
                <Col span={8}>
                  <Form.Item label="Nome">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Endividado">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Row justify={"end"} gutter={[8, 0]}>
                    <Col>
                      <Form.Item>
                        <Button type="primary">Buscar</Button>
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item>
                        <Button type="primary"> <Link to="/dividas/form" style={{color: "#fff"}} > Nova Dívida </Link></Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <Table
              style={{ width: "100%" }}
              rowKey="id"
              columns={columns}
              dataSource={debts}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
