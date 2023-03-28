import axios from "axios";

const retrievePodcastList = async ({ onSuccess }) => {
  const response = await axios.get(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  if (response?.data) {
    if (
      new Date().getTime() >
        new Date(JSON.parse(localStorage.getItem("lastSavedData"))).getTime() +
          86400 ||
      !localStorage.getItem("lastSavedData")
    ) {
      localStorage.setItem("podcastDataLocal", JSON.stringify(response?.data));
      localStorage.setItem("lastSavedData", JSON.stringify(new Date()));
      return onSuccess(response?.data);
    } else {
      return onSuccess(JSON.parse(localStorage.getItem("podcastDataLocal")));
    }
  }
};

const retrievePodcastInfo = async ({ id, onSuccess }) => {
  const response =
    await axios.get(`https://itunes.apple.com/lookup?id=${id}&media=podcast
    &entity=podcastEpisode&limit=20`);
  if (response?.data) {
    onSuccess(response.data);
  }
};

export { retrievePodcastList, retrievePodcastInfo };
