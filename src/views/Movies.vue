<template>
	<div class="text-left font-sans">
		<div>
			<h1 @click="fetchMovies('')" class="font-bold text-2xl text-center mb-5 text-black-50 hover:text-green-500 cursor-pointer">무비 앱🎥</h1>
			<div class="text-right mb-10 font-bold ">
				<a @click="fetchMovies('rating')" class="text-black-50 hover:text-green-500 cursor-pointer">평점순</a> |	
				<a @click="fetchMovies('title')" class="text-black-50 hover:text-green-500 cursor-pointer">제목순</a> | 
				<a @click="fetchMovies('year')" class="text-black-50 hover:text-green-500 cursor-pointer">최신순</a>
			</div>
		</div>

		<div v-if="movies">
			<div v-for="movie in movies" :key="movie.id" class="mb-20">
				<a class="bg-white text-black-50 hover:bg-gray-500 hover:text-white mb-3 p-2 block text-lg rounded" :href="movie.url">
					{{ movie.title }} ({{ movie.year }}) {{ movie.rating >= 9 ? '👍🏻' : '' }}
				</a>
				<div class="flex">
					<img
						class="flex-3 w-auto h-80 text-left border-4 border-solid border-gray-600 rounded"
						:src="movie.large_cover_image"
						:alt="movie.title"
					/>
					<div class="flex-3 ml-4">
						<div class="rating" :class="getRatingClass(movie.rating)">
							평점: {{ movie.rating ? movie.rating + ' / 10점' : '정보없음' }}
						</div>
						<div>
							장르: {{ movie.genres ? movie.genres.join(', ') : '정보없음' }}
						</div>
						<div>
							상영시간: {{ movie.runtime ? movie.runtime + '분' : '정보없음' }}
						</div>
						<!-- <div>요약: <span v-tooltip="{ content: movie.summary, trigger: 'click' }">{{ truncateSummary(movie.summary) || '정보없음' }}</span></div> -->
						<div>
							요약:
							<!-- <span v-if="showFullSummary" v-tooltip="{ content: movie.summary, trigger: 'click' }">
								{{ truncateSummary(movie.summary) || '정보없음' }}
								<button @click="toggleSummaryVisibility">more</button>
							</span> -->
							<span>
								{{ showFullSummary.get(movie.id) ? movie.summary : truncateSummary(movie.summary) || '정보없음' }}
								<a class="cursor-pointer text-blue-800" v-if="shouldShowMoreLink(movie.summary) && !showFullSummary.get(movie.id)" @click="toggleSummaryVisibility(movie)">open</a>
								<a class="cursor-pointer text-blue-800" v-if="showFullSummary.get(movie.id)" @click="toggleSummaryVisibility(movie, false)">close</a>
							</span>
							<!-- <span v-else>{{ movie.summary || '정보없음' }}</span> -->
						</div>
						<div>
							토렌트:
							<span v-if="movie.torrents">
								<a class="text-blue-800 active:text-red-800"
									v-for="(tor, idx) in movie.torrents"
									:key="idx"
									:href="tor.url"
								>
									#{{ idx + 1 }}
								</a>
							</span>
							<span v-else>정보없음</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const movies = ref()
const showFullSummary = ref(new Map());

const toggleSummaryVisibility = (movie, expand = true) => {
  showFullSummary.value.set(movie.id, expand);
};

const getRatingClass = (rating: number) => {
  if (rating >= 9) {
    return 'good'
  } else if (rating >= 7) {
    return 'notBad'
  } else {
    return 'bad'
  }
}

const fetchMovies = async (sortBy: string) => {
  try {
    const response = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?sort_by=${sortBy}`
    );
    const moviesData = response.data;
    movies.value = moviesData.data.movies;
    console.log('movies: ', movies.value);
  } catch (error) {
    console.log('Error fetching movies: ', error);
  }
};

onMounted(async () => {
  console.log('Mounted!!');
  // Default fetch, e.g., 평점순
  await fetchMovies('rating');
});

const truncateSummary = (summary: string) => {
  return summary.length > 400 ? `${summary.slice(0, 400)} ... ` : summary
};

const shouldShowMoreLink = (summary: string) => {
  return summary.length > 400;
}; 

</script>

<style lang="scss" scoped>
.good {
  color: #fc74fd;
	font-weight: bold;
}

.notBad {
  color: #ff681f;
}

.bad {
  color: #4cb9fa;
}
</style>
