# 5. Pages を使ってみる

Pages/を編集してメインになるページを表示しましょう。

<img :src="$withBase('/page.png')">

## 1. ローカルで立ち上げてみる

Nuxt の web サーバ機能を使ってローカルでアプリを立ち上げてみましょう。

次の操作を行って下さい。

- 次のコマンドを実行する。

`code.5-1` _coludshell_

```properties
npm run dev
```

- 出力された URL をクリックする。

<img :src="$withBase('/dev.png')">

:::warning 注意
URL は copy&past せずクリックしてください
:::

以下のようなページが表示されます。

まだ Pages/の中身が空なので、メインになるページが表示されません。

<img :src="$withBase('/404.png')">

## 2. Index ページ作成

index.html に当たるページを作成してみましょう。

次の操作を行ってください。

- web サーバーにしている shell はそのままで、新しいタブを開く。

<img :src="$withBase('/tab.png')">

- 次のコマンドを実行して作業ディレクトリを移動する。

`code.5-2` _coludshell_

```properties
cd ~/cloudshell_open/handson-markdowne-editor_part1-nuxt/
```

- 次のコマンドを実行して index.vue ファイルを作成する。

`code.5-3` _coludshell_

```properties
mv pages/index.vue.markingcloud pages/index.vue
```

- 開いているページをリロードする。

次のようなページが生成されます。

URL のルート(‘/')に index.vue が割り当てられました。

<img :src="$withBase('/index.png')">

## 3. HOME ページ作成（静的ルーティング）

index 以外のページを作成してみましょう。

次の操作を行って下さい。

- 次のコマンドを実行して home.vue ファイルを作成する。

`code.5-4` _coludshell_

```properties
mv pages/home.vue.markingcloud pages/home.vue
```

- 開いているページにて URL に「ルート URL/home」を打ち込み移動する。

<img :src="$withBase('/url.png')">

次のようなページが生成されます。

<img :src="$withBase('/home.png')">

Nuxt では pages/の中に作成した**ファイル名がそのまま URL のパス**となり、  
その**パスへのルーティングは自動で生成されます**。  
試しに他の名前にファイル名を変更してみましょう。

次の操作を行って下さい。

- 次のコマンドを実行しする。

`code.5-5` _coludshell_

```properties
mv pages/home.vue pages/hoge.vue
```

開いているページへ反映されるはずです。

## 4. Editor ページ作成（動的ルーティング）

Editor ページとして動的な ID に対応するページを作成してみましょう。

次の操作を行って下さい。

- 次のコマンドを実行して\_id.vue ファイルを作成する。

`code.5-6` _coludshell_

```properties
mv pages/_id.vue.markingcloud pages/_id.vue
```

- 開いているページにて URL に「ルート URL/適当な値」を打ち込み移動する。

次のようなページが生成されます。

<img :src="$withBase('/id.png')">

Nuxt では**アンダーバー(‘\_')を付けたファイルが動的な URL に対応**します。  
**動的なルーティングのパスも自動で生成**されています。  
このルーティングの自動生成は Nuxt の大きな特徴です。

ここまででメインコンテンツに必要なページは作成し終わりました。
