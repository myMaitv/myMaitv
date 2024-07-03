<script lang="ts" setup>
import { ref, onBeforeUnmount, onBeforeMount } from "vue";
import type { Ref } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/layout/Layout.vue";
import Loading from "../components/base/Loading.vue";
import MoviePlayer from "../components/base/MoviePlayer.vue";
import { getMovieDetail } from "../services/movieService";
import type {
  MovieDetailResponse,
  MovieEpisode,
  MovieDetail,
} from "../services/types";
const props = defineProps<{
  slug: string;
  ep?: string;
}>();
const router = useRouter();
const movieResponse: MovieDetailResponse = await getMovieDetail(props.slug);
const episodes: MovieEpisode[] = movieResponse.episodes;
const movie: MovieDetail = movieResponse.movie;
console.log(movie);
</script>

<template>
  <Layout> </Layout>
</template>

<style lang="scss" scoped>
</style>