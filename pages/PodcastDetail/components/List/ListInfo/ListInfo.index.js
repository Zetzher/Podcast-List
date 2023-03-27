import React from "react";
import { Table } from "antd";
import { Typography } from "antd";

const { Text } = Typography;

const columns = [
  {
    title: "Title",
    dataIndex: "trackName",
    key: "trackname",
    render: (text) => <Text level={5}>{text}</Text>,
  },
  {
    title: "Date",
    dataIndex: "releaseDate",
    key: "releasedate",
    render: (data) => new Date(data).toLocaleDateString("en-GB"),
  },
  {
    title: "Duration",
    dataIndex: "trackTimeMillis",
    key: "tracktimemillis",
    render: (time) => new Date(time).toISOString().slice(11, 19),
  },
];

const ListInfo = ({ info }) => {
  return (
    <span style={{ position: "relative", top: 10 }}>
      <Table
        className="table-container"
        size="small"
        columns={columns}
        dataSource={info}
      />
    </span>
  );
};

export default ListInfo;
