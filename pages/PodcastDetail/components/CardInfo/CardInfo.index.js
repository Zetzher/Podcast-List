import React from "react";
import { Card } from "antd";
import { Typography } from "antd";

const { Meta } = Card;
const { Title } = Typography;

const CardInfo = ({ image, summary, title }) => {
  return (
    <Card cover={<img src={image} />} bordered={false}>
      <Meta
        title={<Title level={4}>{title}</Title>}
        description={<Title level={5}>{summary}</Title>}
      />
    </Card>
  );
};

export default CardInfo;
