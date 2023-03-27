import React from "react";
import hooks from "./Podcast.hooks";
import { Col } from "antd";
import { CardInfo, Header, ListInfo } from "./components";
import "./Podcast.index.scss";

const PodcastIndex = () => {
  const { summary, podcast, loading } = hooks();
  console.log(podcast);
  return (
    <section className="podcast-container">
      {!loading && (
        <>
          <Col span={4}>
            <CardInfo
              title={podcast?.results[0].artistName}
              image={podcast?.results[0].artworkUrl600}
              summary={summary}
            />
          </Col>
          <Col span={18} className="podcast-header">
            <Header count={podcast?.resultCount} />
            <ListInfo />
          </Col>
        </>
      )}
    </section>
  );
};

export default PodcastIndex;
