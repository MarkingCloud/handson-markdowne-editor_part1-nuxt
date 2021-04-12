// データ格納
export const state = () => ({
  list: [
    {
      id: 'id1',
      data: {
        title: '# ハンズオン~Nuxt編~',
        timestamp: '2021-04-20 19:30',
        text: `# ハンズオン~Nuxt編~

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
  // 要素追加
  add(state, { id, data }) {
    state.list.push({ id, data })
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
