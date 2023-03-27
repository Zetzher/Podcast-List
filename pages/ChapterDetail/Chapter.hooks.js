import React from "react";
import { useLocation } from "react-router-dom";

const IndexHooks = () => {
  const {
    state: { description, previewUrl, trackName },
  } = useLocation();
  return { description, previewUrl, trackName };
};

export default IndexHooks;
