# 7. Store を使ってみる

Store を使ってデータの呼び出しと保存を行いましょう。

![](/store.png)

## 1. Store とは？

Nuxt の状態管理ツール。ほぼ Vuex と思ってもらって良いと思います。  
データをここに入れておくことで、pages/、componets/などいろいろな場所から自由に呼び出すことができます。

アーキテクチャは[Flux](https://github.com/facebook/flux/tree/master/examples/flux-concepts)を採用しています。  
MVC モデルの課題を解消する新しいデータ管理の考え方です。  
（Flux については[こちらの記事](https://qiita.com/knhr__/items/5fec7571dab80e2dcd92)が分かりやすかったです。）

![](/flux.png)

## 2. state 作成

データをオブジェクトや配列の形で保持しておきたいときは state に記入します。  
MarkdownEditr の初期値を作成してみましょう。

次の操作を行ってください。

- store/memos.js を次の通り編集する
  - L4 ～ L51 のコメントアウトを解除

`code.7-1` _store/memos.js_

```js{4-51}
// データ格納
export const state = () => ({
  list: [
    {
      id: 'id1',
      data: {
        title: '# ハンズオン~Nuxt編~',
        timestamp: '2021-04-20 19:30',
        text: `# ハンズオ~Nuxt編~

    ## **コンテンツ**

    ### **ハンズオン形式でアプリ作成の流れを学ぼう！**

    ![](https://github.com/MarkingCloud/handson-markdowne-editor/raw/image/nuxt_20210406_1903.png)

    今回から新年度の新たな試みとして、**3部構成のシリーズイベント**を行います！
    このシリーズでは「爆速アプリ開発」などの記事でよく見かける **Nuxt.js × Firebase** の組み合わせと、
    CI/CDツールの **GitHub Actions** を使って、マークダウンエディタを題材にアプリ作成のハンズオンを行います。

    今回は **Nuxt編** ！
    初見だと混乱しがちな機能を整理しつつ、一緒にフロントエンドの機能を作成していきましょう！

    ハンズオンでは以下のサービスを使う予定です。

    - GCP Cloud Shell Editor
    - Vue.js
    - Nuxt.js

    （※ Vue, Nuxt に詳しめの方には物足りない内容になります。ご了承ください。）

    **第2弾はこちら！** → [【Nuxt×Firebase×GitHubActions】アプリ作成ハンズオン〜Firebase〜編](https://markingcloud.connpass.com/event/208934/)
    **第3弾はこちら！** → [【Nuxt×Firebase×GitHubActions】アプリ作成ハンズオン〜CI/CD編〜](https://markingcloud.connpass.com/event/208935/)`,
      },
    },
    {
      id: 'id2',
      data: {
        title: 'title',
        timestamp: '2021-04-21 19:30',
        text: 'test text 1\n',
      },
    },
    {
      id: 'id3',
      data: {
        title: 'title',
        timestamp: '2021-04-22 19:30',
        text: 'test text 2\n',
      },
    },
  ],
})
```

- pages/index.vue を次の通り編集する
  - L17 ～ L22 のコメントアウトを解除

`code.7-2` _pages/index.vue_

```vue{4-9}
<script>
export default {
  // 処理結果を変数へ格納
  computed: {
    memos() {
      // store/memos.js/listを取得
      return this.$store.state.memos.list
    },
  },
}
</script>
```

初期値が入力されたことで、カードが出現します。

![](/compleat.png)

ポイントは`this.$store.state`で、Store へアクセスできるところです。

ここでも**import などの呼び出しの処理は不要**です。

## 3. mutations/actions 作成

state の値を編集するために mutations と actions を作成します。  
Flux ではデータの整合性を保つため、state を直接編集することができません。

- action → mutations → state
- mutations → state

のどちらかでデータを編集する必要があります。

![](/vuex.png)

次の操作を行ってください。

- store/memos.js を次の通り編集する
  - L57 ～ L70 のコメントアウトを解除
  - L75 ～ L79 のコメントアウトを解除

`code.7-3` _store/memos.js_

```js{3-16,21-25}
// データを操作する(同期的処理)
export const mutations = {
  // ID検索と編集/要素追加
  save(state, { id, data }) {
    const target = state.list.find((item) => item.id === id)
    if (target) {
      target.data = data
    } else {
      state.list.push({ id, data })
    }
  },
  // 要素削除
  remove(state, id) {
    const index = state.list.findIndex((item) => item.id === id)
    state.list.splice(index, 1)
  },
}

// 非同期処理を実行する
export const actions = {
  // list更新＆DB通信を模して1秒待機
  async saveLocalMemo(context, { newid, newdata }) {
    context.commit('save', { id: newid, data: newdata })
    await new Promise((resolve) => setTimeout(resolve, 1000))
  },
}
```

コレで state の中を編集できるようになりました！  
再度ページを更新してサービスの動作確認を行ってみてください。  
更新した値が反映されたり、カードの追加/削除機能が実装できているはずです。
