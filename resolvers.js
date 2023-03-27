import axios from "axios";

const retrievePodcastList = async ({ onSuccess }) => {
  const response = await axios.get(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  if(response?.data){
    onSuccess(response.data)
  }
};

const retrievePodcastInfo = async ({ id, onSuccess }) => {
    const response = await axios.get(`https://itunes.apple.com/lookup?id=${id}&media=podcast
    &entity=podcastEpisode&limit=20`);
    if(response?.data){
        onSuccess(response.data);
    }
}

export { retrievePodcastList, retrievePodcastInfo };
