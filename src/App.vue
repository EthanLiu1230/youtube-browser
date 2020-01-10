<template>
  <div class="container">
    <SearchBar @termChange="onTermChange" />
    <VideoList :videos="videos" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import VideoList from "@/components/VideoList";

const API_KEY = "AIzaSyAZwFTpGX6M39GmX9fhHOO9_mRSnAcFtSQ";
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
    }
  }
};
</script>
