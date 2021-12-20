# bo-admin-starter

:smiley: 블록오디세이를 위한 React 관리자 Boilerplate v3입니다. :smiley:  
:bangbang: [프로젝트 설치 방법](https://github.com/BlockOdyssey/bo-admin-starter#project-installation "project-installation") & [사용 설명서](https://github.com/BlockOdyssey/bo-admin-starter#사용방법 "usage") :bangbang:

## Project Main Features

-   **UI COMPONENT** : [MUI](https://mui.com/ "MUI")
-   **STYLING** : [@mui/styles](https://mui.com/styles/basics/#getting-started "@mui/styles")
-   **HTTP CLIENT** : [axios](https://github.com/axios/axios "axios")
-   **SERVER STATE DATA MANAGEMENT** : [react-query](https://react-query.tanstack.com/ "react-query")
-   **ROUTING AND NAVIGATION** : [react-router-dom](https://reactrouter.com/web/guides/quick-start "react-router-dom")
-   **STATE MANAGEMENT** : [@reduxjs/toolkit](https://redux-toolkit.js.org/ "@reduxjs/toolkit")
-   **FORM** : [react-hook-form](https://react-hook-form.com/get-started "react-hook-form")
-   **FORM VALIDATION** : [yup](https://github.com/jquense/yup#usage "yup")
-   **TYPE CHECK** : [prop-types](https://github.com/facebook/prop-types "prop-types")
-   **DEVELOPMENT** : [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm "redux-devtools-extension")

## Project Extra Features

-   **Chart** : [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2 "react-chartjs-2")
-   **Editor** : [react-quill](https://github.com/zenoamaro/react-quill#api-reference "react-quill")
-   **Excel** : [react-excel-workbook](https://github.com/ClearC2/react-excel-workbook#example "react-excel-workbook")
-   **PopupState** : [material-ui-popup-state](https://github.com/jcoreio/material-ui-popup-state#material-ui-popup-state, "material-ui-popup-state")
-   **Select** : [react-select](https://react-select.com/home "react-select")

## Menu / Page

-   404
-   Login
-   Change Password
-   Change Info
-   Dashboard (Example Menu 1)
    -   Dashboard Detail
    -   Dashboard Upload
    -   Dashboard Edit
-   Example (Example Menu 2)
    -   Example Detail Modal
    -   Example Upload/Edit Modal
-   Components (Component Guide Menu)
    -   Search
    -   Table
    -   Form
    -   Modal
    -   Typography
    -   Button
-   Chart
    -   LineChart
    -   PieChart
    -   BubbleChart
    -   Doughnut Chart
    -   Stacked Bar Chart
    -   Vertical Bar Chart

[데모 확인하기](https://blockodyssey.github.io/bo-admin-starter "프로젝트 데모 웹페이지")

---

## Project Installation

<pre><code> $ npx bo-admin-starter projectname </code></pre>

:fire: `npm i bo-admin-starter` 명령어를 사용하면 프로젝트가 정상적으로 설치되지 않습니다. :fire:

## Getting Started

### Install Dependencies

 <pre><code> $ cd projectname

 $ npm install
</code></pre>

### Project Run

 <pre><code>$ npm start </code></pre>

---

## 사용방법

notion 페이지를 참고해주세요.

---

## Project Structure

```
.
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.test.js
    ├── api
    │   └── index.js
    ├── app
    │   ├── App.js
    │   ├── rootReducer.js
    │   └── store.js
    ├── common
    │   ├── button
    │   │   ├── DefaultButton.js
    │   │   ├── PageButton.js
    │   │   └── SubmitButton.js
    │   ├── editor
    │   │   └── index.js
    │   ├── excel
    │   │   └── index.js
    │   ├── form
    │   │   ├── CheckBox.js
    │   │   ├── DatePicker.js
    │   │   ├── ErrorMessage.js
    │   │   ├── Input.js
    │   │   ├── RadioButton.js
    │   │   └── Select.js
    │   ├── modal
    │   │   ├── DetailModal.js
    │   │   └── MessageModal.js
    │   ├── search
    │   │   ├── DatePicker.js
    │   │   ├── DateTermButton.js
    │   │   ├── SearchField.js
    │   │   ├── SearchRadio.js
    │   │   └── SearchSelect.js
    │   └── table
    │       ├── Button.js
    │       ├── CheckBox.js
    │       ├── RadioButton.js
    │       ├── Select.js
    │       ├── SingleSelect.js
    │       ├── SingleTextField.js
    │       └── TextField.js
    ├── components
    │   ├── Data.js
    │   ├── Image
    │   │   ├── ImageCarousel.js
    │   │   ├── UploadImage.js
    │   │   └── UploadImageCarousel.js
    │   ├── Search
    │   │   ├── DateTermSearch.js
    │   │   └── Search.js
    │   └── Table
    │       ├── Pagination.js
    │       ├── SelectionTable.js
    │       └── Table.js
    ├── features
    │   ├── 404
    │   │   └── index.js
    │   ├── admin
    │   │   ├── ChangeInfo.js
    │   │   └── ChangePassword.js
    │   ├── components
    │   │   ├── Button.js
    │   │   ├── Form.js
    │   │   ├── Modal.js
    │   │   ├── Search.js
    │   │   ├── Table.js
    │   │   └── Typography.js
    │   ├── example
    │   │   ├── Example.js
    │   │   ├── ExampleDetail.js
    │   │   └── ExampleUpload.js
    │   ├── login
    │   │   └── index.js
    │   └── summary
    │       ├── Dashboard.js
    │       ├── DashboardDetail.js
    │       ├── DashboardEdit.js
    │       └── DashboardUpload.js
    ├── hooks
    │   ├── useExcelDownload.js
    │   ├── useGetById.js
    │   ├── useGetList.js
    │   ├── useGetLists.js
    │   ├── useMenu.js
    │   ├── useMessage.js
    │   ├── usePageMove.js
    │   ├── useSearch.js
    │   └── useSearchParams.js
    ├── index.js
    ├── layout
    │   ├── Container
    │   │   ├── Container.js
    │   │   └── PageContainer.js
    │   ├── Header.js
    │   ├── Page
    │   │   ├── Buttons.js
    │   │   ├── Header.js
    │   │   └── Heading.js
    │   └── SideBar
    │       ├── Data.js
    │       └── index.js
    ├── routes
    │   └── Router.js
    ├── serviceWorker.js
    ├── setupTests.js
    ├── slices
    │   ├── loginSlice.js
    │   ├── menuSlice.js
    │   ├── modalSlice.js
    │   └── searchSlice.js
    ├── styles
    │   ├── customize
    │   │   ├── components
    │   │   │   ├── ImageCarouselStyles.js
    │   │   │   ├── ModalFormStyles.js
    │   │   │   ├── ModalStyles.js
    │   │   │   └── SearchStyles.js
    │   │   ├── layout
    │   │   │   └── LayoutStyles.js
    │   │   ├── select
    │   │   │   ├── FormSelectStyles.js
    │   │   │   └── TableSelectStyles.js
    │   │   └── table
    │   │       ├── DetailTableStyles.js
    │   │       └── SearchTableStyles.js
    │   └── theme
    │       ├── form.js
    │       ├── palette.js
    │       ├── search.js
    │       ├── textfield.js
    │       ├── theme.js
    │       └── typography.js
    └── utils
        └── common.js
```

## NPM Packages

-   [React v17](https://reactjs.org/docs/getting-started.html "react")
    -   [create-react-app](https://create-react-app.dev/docs/getting-started "create-react-app")
-   [react-router-dom v5](https://github.com/ReactTraining/react-router#readme "react-router-dom")
-   [Material-UI v5](https://mui.com/ "material-ui")
    -   [@mui/material](https://www.npmjs.com/package/@material-ui/lab "@mui/material")
    -   [@mui/lab](https://www.npmjs.com/package/@material-ui/icons "@mui/lab")
    -   [@mui/styles](https://www.npmjs.com/package/@material-ui/pickers "@mui/styles")
    -   [@mui/icons-material](https://www.npmjs.com/package/@material-ui/core "@mui/icons-material")
    -   [@emotion/react](https://www.npmjs.com/package/@material-ui/pickers "@emotion/react")
    -   [@emotion/styled](https://www.npmjs.com/package/@material-ui/pickers "@emotion/styled")
    -   [material-ui-popup-state v2](https://github.com/jcoreio/material-ui-popup-state#readme "material-ui-popup-state")
-   [@date-io](https://github.com/dmtrKovalenko/date-io#readme "@date-io")
    -   [@date-io/date-fns](https://www.npmjs.com/package/@date-io/date-fns "@date-io/date-fns")
-   [react-hook-form v6](https://www.react-hook-form.com/ "react-hook-form")
    -   [@hookform/resolvers](https://github.com/react-hook-form/resolvers "@hookform/resolvers")
    -   [yup](https://github.com/jquense/yup "yup")
-   redux
    -   [react-redux](https://github.com/reduxjs/react-redux "react-redux")
    -   [@reduxjs/toolkit](https://redux-toolkit.js.org/ "@reduxjs/toolkit")
    -   [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension "redux-devtools-extension")
-   [axios](https://github.com/axios/axios "axios")
-   [react-query](https://react-query.tanstack.com/ "react-query")
-   [date-fns](https://github.com/date-fns/date-fns#readme "date-fns")
-   [file-saver](https://github.com/eligrey/FileSaver.js#readme "file-saver")
-   [jszip](https://github.com/Stuk/jszip "jszip")
-   [prop-types](https://www.npmjs.com/package/prop-types "prop-types")
-   [chart.js](https://github.com/chartjs/Chart.js "chart.js")
-   [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2 "react-chartjs-2")
-   [react-excel-workbook](https://github.com/ClearC2/react-excel-workbook "react-excel-workbook")
-   [react-quill](https://github.com/zenoamaro/react-quill "react-quill")
-   [react-select](https://react-select.com/home "react-select")
-   [react-perfect-scrollbar](https://github.com/goldenyz/react-perfect-scrollbar "react-perfect-scrollbar")
-   Dev Dependencies
    -   [dotenv](https://github.com/motdotla/dotenv "dotenv")
    -   [env-cmd](https://github.com/toddbluhm/env-cmd "env-cmd")
    -   [prettier](https://github.com/prettier/prettier "prettier")
-   Extra Dependencies
    -   [edit-json-file](https://github.com/IonicaBizau/edit-json-file#readme "edit-json-file")
    -   [ncp](https://github.com/AvianFlu/ncp "ncp")
