<template>
  <div class="mt-8">
    <nuxt-link :to="`/people-detail/${id}`">
      <img
        v-if="profilePath"
        :src="`https://image.tmdb.org/t/p/w200/${profilePath}`"
        class="hover:opacity-75 transition ease-in-out duration-150"
      />
      <img
        v-else
        :src="`https://via.placeholder.com/200x300.png/5c615e/d9dedb?text=${name}`"
        class="hover:opacity-75 transition ease-in-out duration-150"
      />
    </nuxt-link>
    <div class="mt-2">
      <nuxt-link :to="`/people-detail/${id}`" class="mt-2 hover:text-gray-300">
        <div class="flex flex-wrap">{{ name }}</div>
      </nuxt-link>
      <div class="flex items-center text-gray-400 text-sm mt-1">
        <svg class="fill-current text-orange-500 w-4" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <path
              d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
              data-name="star"
            />
          </g>
        </svg>
        <span class="ml-1">{{ popularity }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    profilePath: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    popularity: {
      type: Number,
      required: true,
    },
  },
}
</script>
