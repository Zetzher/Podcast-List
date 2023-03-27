import { useEffect, useState } from "react";
import handlers from "./Home.handlers";
import { retrievePodcastList } from "../../resolvers";

const IndexHooks = () => {
  const [list, setList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  useEffect(() => {
    retrievePodcastList({ onSuccess: setList });
  }, []);

  const { handleSearchContent } = handlers({
    list,
    searchedList: { list: searchedList, save: setSearchedList },
  });
  return {
    list,
    searchedList,
    handleSearchContent,
  };
};

export default IndexHooks;
