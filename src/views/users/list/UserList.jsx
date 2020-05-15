import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Tag, Space } from "antd";
import userAction from "~/actions/userAction";

const columns = [
  {
    title: "Cpf",
    dataIndex: "cpf",
    key: "cpf",
    render: (text) => (
      <span>{text?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</span>
    ),
  },
  {
    title: "Nome",
    dataIndex: "nome",
    key: "nome",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Telefone",
    dataIndex: "Telefone",
    key: "Telefone",
  },
  
];

export default function UserList() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  useEffect(() => {
    dispatch(userAction.list("waitUsers"));
  }, [dispatch]);

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
