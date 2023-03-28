import { useEffect, useState } from "react";
import axios from "axios";
import handlers from "./Home.handlers";
import { retrievePodcastList } from "../../resolvers";

const IndexHooks = () => {
  const [list, setList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  useEffect(() => {
    retrievePodcastList({ onSuccess: setList, axios });
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
