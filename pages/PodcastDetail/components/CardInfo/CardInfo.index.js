import React from "react";
import { Typography } from 'antd';

const { Title } = Typography;

const CardInfo = ({ summary, title }) => {
  return (
    <div>
      <Title level={4}>{title}</Title>
      <Title level={5}>{summary}</Title>
    </div>
  );
};

export default CardInfo;
