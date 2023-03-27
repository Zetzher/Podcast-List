import React from "react";
import hooks from "./Podcast.hooks";
import { CardInfo } from "./components";

const PodcastIndex = () => {
  const { summary, podcast, loading } = hooks();
  !loading && console.log(podcast?.results)
  return (
    <section>
      {/* <CardInfo title={podcast?.results[0].artistName} description={summary} /> */}
    </section>
  );
};

export default PodcastIndex;
