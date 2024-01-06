<template>
	<div class="text-left font-sans">
		<div>
			<h1 class="font-bold text-2xl text-center mb-10">무비 앱🎥</h1>
		</div>

		<div v-if="movies">
			<div v-for="movie in movies" :key="movie.id" class="mb-20">
				<a class="bg-gray-500 text-slate-50 hover:text-pink-500 mb-3 block text-lg" :href="movie.url">
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
						<div>요약: {{ movie.summary || '정보없음' }}</div>
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

const getRatingClass = (rating: number) => {
  if (rating >= 9) {
    return 'good'
  } else if (rating >= 7) {
    return 'notBad'
  } else {
    return 'bad'
  }
}

onMounted(async () => {
  console.log('Mounted!!')
  try {
    const response = await axios.get(
      'https://yts.mx/api/v2/list_movies.json'
      // 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    )
    const moviesData = response.data;
    movies.value = moviesData.data.movies
    console.log('movies: ', movies.value)
  } catch (error) {
    console.log('Error fetching movies: ', error)
  }
})
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
