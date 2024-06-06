## 概要
フロントエンド開発環境  
[https://ja.vitejs.dev/guide/](https://ja.vitejs.dev/guide/)  
  
### 推奨環境
```
Node.js: Version 16以上
```
  
### 基本操作
```
## 任意の場所でこのリポジトリをインストール
git clone https://github.com/chikara-karasawa/vite-app.git

## リポジトリに移動
cd vite-app

## 依存関係をインストール
npm i

## 動作チェック (開発サーバーを立ち上げてみる)
npm run dev
```
ライブサーバーが立ち上がり簡易サイトの表示が確認できればOK  
  
### srcディレクトリ構成
```
src
├── assets
│   ├── scripts
│   │   ├── modules
│   │   │   └── loadingAnimation.js
│   │   ├── pages
│   │   │   └── about.js
│   │   └── main.js
│   └── styles
│       ├── base
│       │   ├── _base.scss
│       │   └── _reset.scss
│       ├── layouts
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   └── _main.scss
│       ├── modules
│       │   └── _loading-animation.scss
│       ├── pages
│       │   ├── _about.scss
│       │   └── _top.scss
│       ├── utils
│       │   ├── _mixins.scss
│       │   ├── _size.scss
│       │   └── _variables.scss
│       └── style.scss
├── components
│   ├── footer.ejs
│   ├── header.ejs
│   └── loading-animation.ejs
├── pages
│   └── about.html
├── public
│   └── images
│       ├── common
│       │   ├── facebook.svg
│       │   ├── instagram.svg
│       │   ├── sample.svg
│       │   ├── x-twitter.svg
│       │   └── youtube.svg
│       ├── pc
│       │   ├── bummy_1020x480.png
│       │   └── dummy_500x350.png
│       └── sp_tab
│           ├── dummy_340x280.png
│           ├── dummy_780x420.png
│           └── dummy_780x600.png
└── index.html
```
* assets: CSS(SCSS), JS格納ディレクトリ
* components: ejs(HTMLテンプレート)格納ディレクトリ
* pages: 下層ページ格納ディレクトリ
* public: 圧縮したくないファイル群を格納するディレクトリ
  
## 納品物の作成
```
## ビルドコマンド
npm run build
```
  
## distディレクトリ構成
```
dist
├── assets
│   ├── scripts
│   │   ├── pages
│   │   │   └── about.js
│   │   └── main.js
│   └── styles
│       └── style.css
├── images
│   ├── common
│   │   ├── facebook.svg
│   │   ├── instagram.svg
│   │   ├── sample.svg
│   │   ├── x-twitter.svg
│   │   └── youtube.svg
│   ├── pc
│   │   ├── bummy_1020x480.png
│   │   └── dummy_500x350.png
│   └── sp_tab
│       ├── dummy_340x280.png
│       ├── dummy_780x420.png
│       └── dummy_780x600.png
├── pages
│   └── about.html
├── index.html
└── modulepreload-polyfill.js
```
※modulepreload-polyfill.js はデフォルトで自動生成される
  