import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { retrievePodcastInfo } from "../../resolvers";

const PodcastHooks = () => {
  const {
    state: { summary },
  } = useLocation();
  const { id } = useParams();
  const [podcast, setPodcast] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    retrievePodcastInfo({ id, onSuccess: setPodcast });
    setLoading(false);
  }, [id]);

  return { summary, podcast, loading };
};

export default PodcastHooks;
