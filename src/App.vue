<template>
  <div class="container">
    <SearchBar @termChange="onTermChange" />

    <VideoList :videos="videos" @videoSelect="onVideoSelect"/>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import VideoList from "@/components/VideoList";

const API_KEY = "AIzaSyCa5V18oX-xXA3VqVJFe9jX27ZfZeRksas";
import axios from "axios";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList
  },
  data() {
    return {
      videos: []
    };
  },
  methods: {
    onTermChange(searchTerm) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        })
        .then(response => {
          this.videos = response.data.items;
        });
    },
    onVideoSelect(video) {
      console.log(video)
    }
  }
};
</script>
