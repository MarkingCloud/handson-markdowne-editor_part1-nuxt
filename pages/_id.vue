<template>
  <v-row>
    <v-col cols="12">
      <div class="markdown">
        <editor ref="toastuiEditor" height="75vh" />
        <viewer />
      </div>
    </v-col>
    <v-col cols="12">
      <!-- <v&#45;btn color="primary" :loading="loading" @click="saveDb"> SAVE </v&#45;btn> -->
      <v-btn color="primary" :loading="loading" @click="save"> SAVE </v-btn>
      <v-btn color="error" @click="back"> BACK </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { Editor, Viewer } from '@toast-ui/vue-editor'

export default {
  components: {
    editor: Editor,
    viewer: Viewer,
  },
  data() {
    return {
      id: this.$route.params.id,
      loading: false,
    }
  },
  computed: {
    initial() {
      const list = this.$store.state.memos.list
      const target = list.find((item) => item.id === this.id)
      return target
    },
  },
  mounted() {
    if (this.initial) {
      this.$refs.toastuiEditor.invoke('setMarkdown', this.initial.data.text)
    }
  },
  methods: {
    //   async readDb() {
    //     const ref = this.$fire.firestore.collection('markdowns').doc(this.id)
    //     try {
    //       const doc = await ref.get()
    //       if (doc.exists) this.$refs.toastuiEditor.invoke('setMarkdown', doc.data().text)
    //     } catch (e) {
    //       alert(e)
    //     }
    //   },
    save() {
      console.log('test')
    },
    back() {
      window.location.href = '/'
    },
    //   async saveDb() {
    //     const saveText = this.$refs.toastuiEditor.invoke('getMarkdown')
    //     const saveTitle = saveText.substring(0, saveText.indexOf('\n') > 0 ? saveText.indexOf('\n') : saveText.length)
    //     const saveTime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' })
    //     const db = this.$fire.firestore.collection('markdowns').doc(this.id)
    //     try {
    //       this.loading = true
    //       await db.set({
    //         text: saveText,
    //         title: saveTitle,
    //         timestamp: saveTime,
    //       })
    //       this.loading = false
    //     } catch (e) {
    //       alert(e)
    //       this.loading = false
    //     }
    //   },
  },
}
</script>

<style>
* {
  font-family: auto;
}
</style>
