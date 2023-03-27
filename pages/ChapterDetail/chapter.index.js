import React from "react";
import hooks from "./Chapter.hooks";
import { Col } from "antd";
import CardInfo from "../../components/CardInfo/CardInfo.index";
import "./Chapter.index.scss";

const ChapterIndex = () => {
  const { title, img, summary, previewUrl } = hooks();

  return (
    <section className="chapter-container">
      <Col span={6}>
        <CardInfo title={title} image={img} summary={summary} />
      </Col>
      <Col span={16}></Col>
    </section>
  );
};

export default ChapterIndex;
