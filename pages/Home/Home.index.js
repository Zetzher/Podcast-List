import React from "react";
import hooks from "./Home.hooks";
import { List } from "./components/index";
import "./Home.index.scss";

const Index = ({ setLoading }) => {
  const { list, searchedList, handleSearchContent } = hooks();
  return (
    <List
      info={searchedList.length > 0 ? searchedList : list.feed?.entry}
      handleSearch={handleSearchContent}
      setLoading={setLoading}
    />
  );
};

export default Index;
