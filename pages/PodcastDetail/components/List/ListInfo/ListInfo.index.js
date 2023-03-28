import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { Typography } from "antd";

const { Text } = Typography;


const ListInfo = ({ info, setLoading }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "trackName",
      key: "trackname",
      render: (
        text,
        { collectionId, trackId, description, previewUrl, trackName },
        i
      ) => (
        <Link
          key={i}
          to={`/podcast/${collectionId}/episode/${trackId}`}
          state={{ description, previewUrl, trackName }}
          onClick={() => setLoading(true)}
        >
          <Text level={5}>{text}</Text>
        </Link>
      ),
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
