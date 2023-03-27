import React from "react";
import { Card } from "antd";
import { Typography } from "antd";

const { Meta } = Card;
const { Paragraph,Title } = Typography;

const CardInfo = ({ image, summary, title }) => {
  return (
    <Card cover={<img src={image} />} bordered={false}>
      <Meta
        title={<Title level={4}>{title}</Title>}
        description={<Paragraph level={5} ellipsis={{ rows: 5, expandable: true, symbol: 'more' }}>{summary}</Paragraph>}
      />
    </Card>
  );
};

export default CardInfo;
