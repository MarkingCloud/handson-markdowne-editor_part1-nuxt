<template>
  <v-app>
    <v-app-bar dark color="orange" :clipped-left="clipped" fixed app>
      <v-icon class="mx-2">mdi-cloud-outline</v-icon>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer dark color="orange" :absolute="!fixed" app>
      <span>© 2021 MarkingCloud</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      title: 'Markdown Editor',
    }
  },
}
</script>
