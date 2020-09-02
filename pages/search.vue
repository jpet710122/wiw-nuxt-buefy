<template>
  <section class="box bg-light-gray">
    <p class="title is-5">Search for Testator</p>
    <b-field>
      <div class="control w-full">
        <b-input
          v-model="name"
          class="w-full"
          placeholder="Type Testator's full legal name as likely used in the Will"
          type="search"
          icon="magnify"
          icon-clickable
          @icon-click="startClickSrch(name)"
        >
        </b-input>
      </div>
      <div class="control">
        <b-button
          class="button is-primary is-inline"
          @click="startClickSrch(name)"
        >
          Search
        </b-button>
      </div>
    </b-field>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  name: 'search',
  data() {
    return {
      name: '',
    }
  },
  methods: {
    startClickSrch() {
      alert("Starting search...")
    },
  }
}
</script>

<style scoped>

</style>
