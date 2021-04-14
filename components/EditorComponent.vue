<template>
  <div>
    <!-- エディタ画面 -->
    <editor ref="toastuiEditor" height="80vh" />
    <!-- プレビュー画面 -->
    <viewer />
    <!-- SAVE, BACKボタン -->
    <div class="mt-4">
      <v-btn color="primary" :loading="loading" @click="save"> SAVE </v-btn>
      <v-btn color="error" @click="back"> BACK </v-btn>
    </div>
  </div>
</template>

<script>
import { Editor, Viewer } from '@toast-ui/vue-editor'

export default {
  // コンポーネントの呼び出し
  components: {
    editor: Editor,
    viewer: Viewer,
  },
  // 変数
  data() {
    return {
      id: this.$route.params.id,
      loading: false,
    }
  },
  // 計算した値をとる変数
  computed: {
    initial() {
      const list = this.$store.state.memos.list
      const target = list.find((item) => item.id === this.id)
      return target
    },
  },
  // ページ読み込み時に毎回実行する処理
  mounted() {
    if (this.initial) {
      this.$refs.toastuiEditor.invoke('setMarkdown', this.initial.data.text)
    }
  },
  // 関数定義
  methods: {
    async save() {
      // 実行中アニメーション開始
      this.loading = true
      // 引数定義
      const saveText = this.$refs.toastuiEditor.invoke('getMarkdown')
      const saveTitle = saveText.substring(0, saveText.indexOf('\n'))
      const saveTime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' })
      try {
        // store/mamos.js/saveLocalMemoを実行
        await this.$store.dispatch('memos/saveLocalMemo', {
          newid: this.id,
          newdata: {
            text: saveText,
            title: saveTitle,
            timestamp: saveTime,
          },
        })
      } catch (e) {
        alert(e)
        this.loading = false
      }
      // 実行中アニメーション終了
      this.loading = false
    },
    back() {
      this.$router.push('/')
    },
  },
}
</script>
