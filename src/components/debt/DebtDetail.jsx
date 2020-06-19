import React, { useEffect } from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";

export default function DebtsDetail() {
    const dispatch = useDispatch();
    const debts = useSelector((state) => state.debt.debts);
  
    //   useEffect(() => {
    //     dispatch(debtsAction.list("waitDebts"));
    //   }, [dispatch]);
  
    return (
      <>
        <Row gutter={[8, 8]}>
          <Col span={12}>Nome</Col>
          <Col span={6}>Cpf</Col>
          <Col span={6}>Telefone</Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Col span={12}>Nome Dívida</Col>
          <Col span={12}>Pagamentos</Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Col span={12}>Forma de Pagamento</Col>
          <Col span={12}>Investidores</Col>
        </Row>
      </>
    );
  }
  