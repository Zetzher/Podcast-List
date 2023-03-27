import React from "react";
import { useLocation } from "react-router-dom";

const ChapterHooks = () => {
  const {
    state: { title, img, summary, previewUrl },
  } = useLocation();

  return { title, img, summary, previewUrl };
};

export default ChapterHooks;
