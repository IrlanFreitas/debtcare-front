import React from "react";
import {
  Form,
  Input,
  Button,
  Tooltip,
  Table,
  Row,
  Col,
  Card,
  DatePicker,
} from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import debtsAction from "~/actions/debtsAction";
import "./DebtsForm.scss";
import locale from "antd/es/date-picker/locale/pt_BR";
import moment from "moment";
import { SaveOutlined, UserAddOutlined, LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const columns = [
  {
    title: "Investidor",
    dataIndex: "investidor",
    key: "investidor",
  },

  {
    title: "Valor investido",
    dataIndex: "valorInvestido",
    key: "valorInvestido",
    render: (text, record, idx) => (
      <>
        {text?.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })}
      </>
    ),
  },
  {
    title: "Porcentagem",
    dataIndex: "porcentagem",
    key: "porcentagem",
    render: (text, record, idx) => <>{text} %</>,
  },
  {
    title: "Lucro",
    dataIndex: "lucro",
    key: "lucro",
    render: (text, record, idx) => (
      <>
        {text?.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })}
      </>
    ),
  },
];

export default function DebtsForm() {
//   const dispatch = useDispatch();
//   const debts = useSelector((state) => state.debt.debts);
  const history = useHistory();
  const investidores = [];
  const { RangePicker } = DatePicker;

  //   useEffect(() => {
  //     dispatch(debtsAction.list("waitDebts"));
  //   }, [dispatch]);

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  const salvarDivida = (values) => {
    console.log("Success:", values);
  };

  return (
    <>
      <Button
        type="primary"
        style={{ marginBottom: "10px" }}
        icon={<LeftOutlined />}
        onClick={() => history.goBack()}
      >
        Voltar
      </Button>

      <Card className="form">
        <Form layout={"vertical"} onFinish={salvarDivida}>
          <Row
            gutter={[8, 8]}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span className="titulo"> Dados Básicos</span>
            <Form.Item
              style={{
                margin: 0,
              }}
            >
              <Tooltip title="Salvar" placement="left">
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="circle"
                  icon={<SaveOutlined />}
                />
              </Tooltip>
            </Form.Item>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={6}>
              <Form.Item label="CPF" name="cpfDevedor">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>Nome</Col>
            <Col span={12}>Telefone</Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Form.Item label="Nome da Dívida" name="nomeDivida">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={8}>
              <Form.Item label="Valor original" name="valorOriginal">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Valor pago" name="valorPago">
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Valor final cliente" name="valorFinalCliente">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={6} className="dados_basicos_valores">
              <span>Redução da Dívida</span>
              {`R$ 1.4410,23`}
            </Col>
            <Col span={6} className="dados_basicos_valores">
              <span>Redução para o cliente</span>
              {`R$ 705,11`}
            </Col>
            <Col span={6} className="dados_basicos_valores">
              <span>Lucro plataforma 60%</span>
              {`R$ 705,11`}
            </Col>
            <Col span={6} className="dados_basicos_valores">
              <span>Lucro investidores 40%</span>
              {`R$ 705,11`}
            </Col>
          </Row>
          <Row gutter={[8, 8]} className="titulo">
            Forma de Pagamento
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={6}>
              <Form.Item label="Data da entrada" name="dataEntrada">
                <DatePicker locale={locale} format={"DD/MM/YYYY"} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Entrada" name="valorEntrada">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Form.Item
                label="Data da primeira e última parcela"
                name="dataPrimeiraUltimaParcela"
              >
                <RangePicker
                  style={{ width: "100%" }}
                  locale={locale}
                  format={"DD/MM/YYYY"}
                  disabledDate={disabledDate}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Valor da parcela" name="valorParcela">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Row gutter={[8, 8]} className="titulo">
          Investidores
        </Row>
        <Form
          layout={"horizontal"}
          onFinish={(values) => {
            console.log(values);
          }}
        >
          <Row gutter={[8, 8]} style={{alignItems: "baseline"}}>
            <Col span={6}>
              <Form.Item label="Cpf" name="investidor">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Valor investido" name="valorInvestido">
                <Input />
              </Form.Item>
            </Col>
            <Col
              span={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Form.Item
                style={{
                  margin: 0,
                }}
              >
                <Tooltip title="Adicionar">
                  <Button
                    type="primary"
                    htmlType="submit"
                    shape="circle"
                    icon={<UserAddOutlined />}
                  />
                </Tooltip>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Row gutter={[8, 8]}>
          <Col span={6} className="dados_basicos_valores">
            <span>Valor investido</span>
            {`R$ 1.4410,23`}
          </Col>
          <Col span={6} className="dados_basicos_valores">
            <span>Lucro investido</span>
            {`R$ 705,11`}
          </Col>
          <Col span={6} className="dados_basicos_valores">
            <span>Ganho %</span>
            {`R$ 705,11`}
          </Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Table
              style={{ width: "100%" }}
              rowKey="id"
              columns={columns}
              dataSource={investidores}
              locale={{ emptyText: "Sem dados" }}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
}
