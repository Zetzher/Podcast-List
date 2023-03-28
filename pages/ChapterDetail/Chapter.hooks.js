import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const IndexHooks = ({ setLoading }) => {
  const {
    state: { description, previewUrl, trackName },
  } = useLocation();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);
  return { description, previewUrl, trackName };
};

export default IndexHooks;
