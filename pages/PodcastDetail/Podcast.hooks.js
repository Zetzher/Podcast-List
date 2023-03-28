import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { retrievePodcastInfo } from "../../resolvers";

const PodcastHooks = ({ setLoader }) => {
  const {
    state: { img, author, summary },
  } = useLocation();
  const { id } = useParams();
  const [podcast, setPodcast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoader(false);
    const retrieveInformation = async () => {
      await retrievePodcastInfo({ id, onSuccess: setPodcast });
      setLoading(false);
    };
    retrieveInformation();

    if (localStorage.getItem("summary") !== summary)
      localStorage.setItem("summary", summary);
    localStorage.setItem("img", img);
    localStorage.setItem("author", author);
  }, [id]);
  return { summary, podcast, loading };
};

export default PodcastHooks;
