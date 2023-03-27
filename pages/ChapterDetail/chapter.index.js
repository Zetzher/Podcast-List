import React from "react";
import { Card, Col, Divider, Typography } from "antd";
import hooks from "./Chapter.hooks";
import CardInfo from "../../components/CardInfo/CardInfo.index";
import "./Chapter.index.scss";

const { Meta } = Card;
const { Paragraph, Title } = Typography;

const ChapterIndex = () => {
  const { description, previewUrl, trackName } = hooks();
  return (
    <section className="chapter-container">
      <Col span={6}>
        <CardInfo />
      </Col>
      <Col span={16} className="chapter-item-audio">
        <Card>
          <Meta
            title={<Title level={4}>{trackName}</Title>}
            description={
              <Paragraph
              >
                <span dangerouslySetInnerHTML={{ __html: description }}></span>
              </Paragraph>
            }
          />
          <Divider />
          <audio src={previewUrl} controls="controls" preload={true}></audio>
        </Card>
      </Col>
    </section>
  );
};

export default ChapterIndex;
