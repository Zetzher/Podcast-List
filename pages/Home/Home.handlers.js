const searchContent = ({ list, searchedList, str }) =>
  searchedList.save(
    list.feed.entry.filter((data) =>
      data["im:name"].label.toLowerCase().includes(str)
    )
  );

const podcastListHandlers = ({ list, searchedList }) => ({
  handleSearchContent: ({ str }) => {
    searchContent({
      list,
      searchedList,
      str,
    });
  },
});

export default podcastListHandlers;
