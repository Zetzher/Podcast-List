import React from "react";
import { Card } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const Header = ({ count }) => {
  return (
    <Card size="small">
      <Title level={3}>Episodes: {count}</Title>
    </Card>
  );
};

export default Header;
