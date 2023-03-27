import React from "react";
import { Card } from "antd";
import { Typography } from "antd";

const { Meta } = Card;
const { Paragraph, Title } = Typography;

const CardInfo = () => {
  const summary = localStorage.getItem("summary");
  const author = localStorage.getItem("author");
  const img = localStorage.getItem("img");
  return (
    <Card cover={<img src={img} />} bordered={false}>
      <Meta
        title={<Title level={4}>{author}</Title>}
        description={
          <Paragraph
            level={5}
            ellipsis={{ rows: 5, expandable: true, symbol: "more" }}
          >
            {summary}
          </Paragraph>
        }
      />
    </Card>
  );
};

export default CardInfo;
