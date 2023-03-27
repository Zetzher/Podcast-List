import React from "react";
import hooks from "./Podcast.hooks";
import { Col } from "antd";
import CardInfo from "../../components/CardInfo/CardInfo.index";
import { Header, ListInfo } from "./components";
import "./Podcast.index.scss";

const PodcastIndex = () => {
  const { summary, podcast, loading } = hooks();
  console.log(podcast);
  return (
    <section className="podcast-container">
      {!loading && (
        <>
          <Col span={6}>
            <CardInfo
              title={podcast?.results[0].artistName}
              image={podcast?.results[0].artworkUrl600}
              summary={summary}
            />
          </Col>
          <Col span={16} className="podcast-header">
            <Header count={podcast?.resultCount} />
            <ListInfo info={podcast.results.slice(1, podcast.results.length)} />
          </Col>
        </>
      )}
    </section>
  );
};

export default PodcastIndex;
