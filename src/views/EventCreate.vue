<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex' // to map state into computed properties

export default {
  computed: {
    localComputed() {
      return console.log('other Computed property')
    },
    ...mapState(['user', 'categories'])
  }
}
</script>

<style scoped></style>
