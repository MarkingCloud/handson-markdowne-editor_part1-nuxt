# 4. 事前準備

## 1. Cloud Shell で開く

Cloud Shell を開いてコードをクローンしましょう。

<img :src="$withBase('/cloud-shell.png')">

::: tip Cloud Shell とは

- GCP のサービスの一つ
- ブラウザでアクセス可能な、クラウドベースの統合開発環境(IDE)
- Github と連携することで簡単に開発環境を構築可能！

:::

[**Cloud Shell でリポジトリを開く**](https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https://github.com/MarkingCloud/handson-markdowne-editor_part1-nuxt.git)

上のリンクをクリックすると Cloud Shell が開き、リポジトリをクローンしてコードを取得してきます。

ディレクトリ構成はこんな感じになっています。

```shell{4-8,14-18,21-23}
handson-markdowne-editor_part1-nuxt
├── README.md
├── assets/
├── 'components/   <----------- ページを構成するコンポーネント'
│   ├── CardComponent.vue
│   ├── EditorComponent.vue
│   ├── NewCardComponent.vue
│   └── README.md
├── layouts/
├── middleware/
├── nuxt.config.js
├── package-lock.json
├── package.json
├── 'pages/        <----------- コンテンツのメインとなるページ'
│   ├── README.md
│   ├── _id.vue.markingcloud
│   ├── home.vue.markingcloud
│   └── index.vue.markingcloud
├── plugins/
├── static/
└── 'store/        <----------- データを保存したり取り出したりする'
    ├── README.md
    └── memos.js
```

::: warning うまく開かない場合は

うまく開かない場合は [**Cloud Shell**](https://shell.cloud.google.com/) に移動してから以下打ち込んでください。

`code.4-1` _coludshell_

```properties
mkdir cloudshell_open
cd cloudshell_open
git clone https://github.com/MarkingCloud/handson-markdowne-editor_part1-nuxt.git
cd handson-markdowne-editor_part1-nuxt
```

:::

## 2. npm モジュールのインストール

node のバージョンを揃えます。

以下コマンドを実行して、バージョンが v14.15.0 となっていることを確認しください。

`code.4-2` _coludshell_

```properties
nvm install v14.15.0
nvm use v14.15.0
node --version
```

npm モジュールをインストールします。

次のコマンドを実行してください。

`code.4-3` _coludshell_

```properties
npm install
```
