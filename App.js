import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Divider, Spin, Typography } from "antd";
import { ChapterDetail, Home, PodcastDetail } from "./pages/index.js";
import "./index.scss";

const { Title } = Typography;

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="app-header">
        <Link to="/" className="app-header-link">
          <Title level={3} style={{ color: "#4991D5" }}>
            Podcaster
          </Title>
        </Link>
        <Spin className="app-header-loader" spinning={loading} />
      </div>
      <Divider />
      <Routes>
        <Route path="/" element={<Home setLoading={setLoading} />} />
        <Route path="/podcast/:id" element={<PodcastDetail setLoading={setLoading} />} />
        <Route
          path="/podcast/:id/episode/:episodeId"
          element={<ChapterDetail setLoading={setLoading} />}
        />
      </Routes>
    </>
  );
};

export default App;
