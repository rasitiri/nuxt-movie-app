<template>
  <div>
    <div class="px-20 pt-12">
      <h1
        class="uppercase tracking-wider text-orange-500 text-lg font-semibold"
      >
        Popular Actors (Today)
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
      >
        <actor-card
          v-for="actor in actorsToday"
          :id="actor.id"
          :key="actor.id"
          :profile-path="actor.profile_path"
          :name="actor.name"
          :popularity="actor.popularity"
        ></actor-card>
      </div>
    </div>
    <div class="px-20 pt-12">
      <h1
        class="uppercase border-t border-gray-800 pt-12 tracking-wider text-orange-500 text-lg font-semibold"
      >
        Popular Actors (This week)
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
      >
        <actor-card
          v-for="actor in actorsWeek"
          :id="actor.id"
          :key="actor.id"
          :profile-path="actor.profile_path"
          :name="actor.name"
          :popularity="actor.popularity"
        ></actor-card>
      </div>
    </div>
  </div>
</template>

<script>
import ActorCard from '../components/ActorCard'

export default {
  components: { ActorCard },
  data() {
    return {
      actorsToday: '',
      actorsWeek: '',
    }
  },
  mounted() {
    this.getActorsToday()
    this.getActorsThisWeek()
  },
  methods: {
    async getActorsToday() {
      const res = await this.$axios.get(
        `/trending/person/day?api_key=c26a114b77533a5023489c45b4fb3423`
      )
      this.actorsToday = res.data.results
    },
    async getActorsThisWeek() {
      const res = await this.$axios.get(
        `/trending/person/week?api_key=c26a114b77533a5023489c45b4fb3423`
      )
      this.actorsWeek = res.data.results
    },
  },
}
</script>
