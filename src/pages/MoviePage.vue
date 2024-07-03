<script lang="ts" setup>
import { ref, watchEffect, computed, onMounted } from "vue";
import type { Ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
import Layout from "../components/layout/Layout.vue";
import MoviePlayer from "../components/base/MoviePlayer.vue";
import MovieMeta from "../components/base/MovieMeta.vue";
import EpisodeList from "../components/base/EpisodeList.vue";
import { getMovieDetail } from "../services/movieService";
import type {
  MovieDetailResponse,
} from "../services/types";
const props = defineProps<{
  slug: string;
  ep?: string;
}>();
const movieResponse: MovieDetailResponse = await getMovieDetail(props.slug);
const { movie, episodes } = movieResponse;
const currentEpLink: Ref<string> = ref('');
const currentEpNum: Ref<number> = ref(0);

watchEffect(() => {
  let ep = props.ep ? episodes[0].server_data.find(episode => episode.slug === props.ep) : episodes[0].server_data[0];
  if (ep) {
    currentEpLink.value = ep.link_m3u8;
    currentEpNum.value = episodes[0].server_data.indexOf(ep);
  } else {
    alert("Chưa có tập phim này");
    router.push({ name: route.name, params: { ...route.params, ...{ ep: episodes[0].server_data[0].slug } }, force: true });
  }
})
const verified_url = computed(async () => {
  if (movie.poster_url) {
    return movie.poster_url;
  } else {
    const photoPlaceholder = await import("../assets/photo.svg?url");
    return photoPlaceholder.default;
  }
})
const poster_url : Ref<string> = ref('')
onMounted(async () => {
  poster_url.value = await verified_url.value;
});

</script>

<template>
  <Layout>
    <MoviePlayer class="movie-player" :link="currentEpLink" :thumb="movie.thumb_url" />
    <div class="movie-info">
      <div class="movie-info__episodes">
        <strong class="movie-info__episodes-title">Danh sách tập</strong>
        <EpisodeList class="movie-info__episodes-list" :episodes="episodes[0]" :currentEp="currentEpNum" :totalEp="parseInt(movie.episode_total)" />
      </div>
      <h2 class="movie-info__title">{{ movie.name }}</h2>
      <div class="movie-info__content">
        <div class="movie-info__left">
          <div class="movie-info__poster">
            <img class="movie-info__poster-img" :src="poster_url" :alt="movie.name" lazy="loading" />
          </div>
        </div>
        <div class="movie-info__right">
          <MovieMeta :movie="movie" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.movie-info {
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  display: block;
  margin: 0 auto;

  &__title {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 20px;
  }

  &__content {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }

  &__left {
    flex: 0 0 30%;
  }

  &__right {
    flex: 0 0 70%;
  }

  &__poster {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__poster-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__episodes {
    margin-top: 20px;
  }

  &__episodes-title {
    font-size: 1.2rem;
    font-weight: 600;
  }

  &__episodes-list {
    margin-top: 20px;
  }
}
</style>