import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import userAction from "~/actions/userAction";

const columns = [
  {
    title: "Cpf",
    dataIndex: "cpf",
    key: "cpf",
    render: (text) => (
      <span>
        {text?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
      </span>
    ),
  },
  {
    title: "Nome",
    dataIndex: "nome",
    key: "nome",
  },
  {
    title: "Telefone",
    dataIndex: "telefone",
    key: "telefone",
  },
  {
    title: "Tipo",
    dataIndex: "tipo",
    key: "tipo",
  },
];

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(userAction.list("waitUsers"));
  }, [dispatch]);

  return (
    <>
      <Table rowKey="id" columns={columns} dataSource={users} />
    </>
  );
}
