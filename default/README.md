# bo-admin-starter

:smiley: 블록오디세이를 위한 React 관리자 Boilerplate v2입니다. :smiley:   
:bangbang: [프로젝트 설치 방법](https://github.com/BlockOdyssey/bo-admin-starter#project-installation "project-installation") & [사용 설명서](https://github.com/BlockOdyssey/bo-admin-starter#사용방법 "usage") :bangbang:

## Project Main Features

-   **UI COMPONENT** : [MATERIAL-UI](https://material-ui.com/ "material-ui")
-   **STYLING** : [@material-ui/styles](https://material-ui.com/styles/basics/ "@material-ui/styles")
-   **HTTP CLIENT** : [axios](https://github.com/axios/axios "axios")
-   **ROUTING AND NAVIGATION** : [react-router-dom](https://reactrouter.com/web/guides/quick-start "react-router-dom")
-   **STATE MANAGEMENT** : [Redux Toolkit](https://redux-toolkit.js.org/ "redux-toolkit")
-   **FORM** : [react-hook-form](https://react-hook-form.com/get-started "react-hook-form")
-   **FORM VALIDATION** : [yup](https://github.com/jquense/yup#usage "yup")
-   **TYPE CHECK** : [prop-types](https://github.com/facebook/prop-types "prop-types")
-   **DEVELOPMENT** : [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm "redux-devtools-extension")
## Project Extra Features

-   **Date Picker** : [material-ui pickers](https://material-ui-pickers.dev/demo/datepicker "material-ui pickers")
-   **Editor** : [react-quill](https://github.com/zenoamaro/react-quill#api-reference "react-quill")
-   **Excel** : [react-excel-workbook](https://github.com/ClearC2/react-excel-workbook#example "react-excel-workbook")
-   **Modal** : [react-modal](https://github.com/reactjs/react-modal#react-modal "react-modal")
-   **PopupState** : [material-ui-popup-state](https://github.com/jcoreio/material-ui-popup-state#material-ui-popup-state, "material-ui-popup-state")
-   **Select** : [react-select](https://react-select.com/home "react-select")

## Menu / Page
- 404
- Login
- Change Password
- Change Info
- Dashboard (Example Menu 1)
    - Dashboard Upload
    - Dashboard Detail
- Example (Example Menu 2)
    - Example Upload Modal
    - Example Detail Modal
- Components
    - Search
    - Table
    - Form
    - Modal
    - Typography
    - Button

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

### Data.js 파일 작성 방법

#### Search (검색)
```javascript
//  자세한 사용방법: components/Search.js

//  Data.js

//  **메뉴별 필요한 검색 Components**
//      필요한 경우 -> true
//      사용하지 않는 경우 -> false

//  Dashboard, Summary = 파일명/메뉴명
const searchComponents = {
    Dashboard: {
        date: true,             //  Date Picker 사용
        radio: true,            //  검색 radio button 사용
        selects: true,          //  검색 select 사용
        searchType: true,       //  조회조건 select 사용
        searchKeyword: true     //  키워드 검색 사용
    },
    Summary: {
        date: false,            //  Date Picker 미사용
        radio: true,            //  검색 radio button 사용
        selects: false,         //  검색 select 미사용
        searchType: true,       //  조회조건 select 사용
        searchKeyword: true     //  키워드 검색 사용
    },
    Example: {
        date: false,            //  Date Picker 미사용
        radio: true,            //  검색 radio button 사용
        selects: false,         //  검색 select 미사용
        searchType: true,       //  조회조건 select 사용
        searchKeyword: true     //  키워드 검색 사용
    },
};

//  메뉴별 검색 조건 설정
const searchCaption = { gender: "성별", useYn: "판매여부" };

//  메뉴별 검색 조건 설정
//  Dashboard -> 성별, 사용여부를 검색할 수 있는 Select가 필요
const searchType = {
    Dashboard: ["gender", "useYn"]
};

//  [["gender", "useYn"]] 
//      -> "gender" 와 "userYn" => 1 row
//  [["gender"], ["useYn"]] 
//      -> gender => 1 row
//      -> useYn => 1 row
const searchRadioRow = {
    Dashboard: [["gender", "useYn"], ["useYn"]]
};

const searchSelect = {
    Dashboard: [["gender", "useYn"], ["gender"]]
};

//  Select별 options
const searchOptions = {
    gender: [
        { value: "전체", label: "전체" },
        { value: "M", label: "M" },
        { value: "F", label: "F" }
    ],
    searchType: [
        { value: "전체", label: "전체" },
        { value: "아이디", label: "아이디" },
        { value: "이름", label: "이름" },
        { value: "연락처", label: "연락처" }
    ],
    term: [
        { value: "일간", label: "일간" },
        { value: "월간", label: "월간" }
    ]
};

// location.search을 위한 설정
// useSearchParams에서 사용
const searchParams = {
    Dashboard: {
        startDate: "startDate",
        endDate: "endDate",
        gender: "gender",
        useYn: "useYn",
        searchType: "searchType",
        searchKeyword: "searchKeyword",
        sort: "sort",
        pageNumber: "pageNumber",
        pageShow: "pageShow"
    },
    Example: {
        startDate: "startDate",
        endDate: "endDate",
        pageNumber: "pageNumber",
        pageShow: "pageShow"
    }
};
```

#### Table (테이블)

```javascript
//  자세한 사용방법 : components/Table.js   
//  또는 components/SelectionTable.js

//  Data.js

//  Dashboard, Summary = 파일명/메뉴명
//  DashboardDetail = Dashboard + DetailModal

//  **테이블의 THEAD 부분 설정**
//  id = 컬럼 아이디
//  label = 컬럼명
const headCell = {
    Dashboard: [
        { id: "name", label: "이름" }
    ],
    Summary: [
        { id: "name", label: "이름" }
    ],
    DashboardDetail: [
        { id: "name", label: "이름" }
    ]
};

// 검색 결과 테이블 (리스트)에서 사용하는 Select component의 options   
const tableSelectOptions = {
    viewYn: [
        { label: "노출", value: "Y" },
        { label: "미노출", value: "N" }
    ],
    useYn: [
        { label: "사용", value: "Y" },
        { label: "미사용", value: "N" }
    ]
};
```

### common 폴더 사용 방법

#### 재사용할 수 있는 components   

> prop-types를 사용해서 전달받는 값의 타입을 작성   
>   
> 참고: https://ko.reactjs.org/docs/typechecking-with-proptypes.html

-   button
-   editor
-   excel
-   form
-   menu
-   modal
-   search
-   table

#### button 폴더

> 테이블 하단/상단에 있는 버튼 / 모달에서 사용하는 버튼   
> 업로드 페이지에서 사용하는 submit 버튼   
> 페이지 이동 버튼   
>    
> styles/theme/button.js 파일에서 스타일을 확인해주세요.

-   DefaultButton.js
-   PageButton.js
-   SubmitButton.js

#### editor 폴더

> react-quill 에디터 사용 (+ 이미지 업로드)   
> 자세한 사용방법 : common/editor/index.js   
>    
> 이미지 업로드 참고: https://github.com/quilljs/quill/issues/1400

#### form 폴더

> react-hook-form 사용   
> 자세한 사용방법 : features/summary/DashboardUpload.js   
>    
> 참고: https://github.com/react-hook-form/react-hook-form/blob/master/app/src/controller.tsx

-   CheckBox
-   RadioButton
-   Select
-   Input

#### modal 폴더

> Alert / Confirm을 대신하는 모달  
> 상세 조회 모달    

-   ConfirmModal
-   DetailModal
-   MessageModal

#### search 폴더

> 검색에서 사용되는 button, textfield, select, radio button, date picker

-   DatePicker
-   DateTermButton
-   SearchField
-   SearchRadio
-   SearchSelect

#### table 폴더

> 검색 결과 테이블에서 자주 사용되는 select / textfield   
>   
> 상세 페이지 / 모달에서 사용할 수 있는 singleSelect / textfield / checkbox / radio button   
>   
> 테이블 pagination   
> 수정, 삭제 버튼   

> 자세한 사용방법 : components/SelectionTable.js    
> 또는 components/Table.js

-   Button
-   CheckBox
-   Pagination
-   RadioButton
-   Select
-   SingleSelect
-   SingleTextField
-   TextField

```javascript
//  자세한 사용방법 : common/table/Pagination.js

// Data.js

//  테이블 하단에 버튼을 추가하는 방법
//      1. components/Data.js에 추가
//      2. 메뉴마다 필요한 버튼 작성

//  메뉴(페이지)별 필요한 버튼
//      true -> 필요
//      false -> 사용안함

//  만약 검색 위에 생성하고 싶으면 [buttonName]Top 이렇게 설정 추가
//  그리고 components/Search.js 파일에 버튼 import
const buttons = {
    Dashboard: { add: false, addTop: true, delete: true, excel: true },
    Example: { add: true, delete: false, excel: false }
};

```

## Project Flow

### 새로운 메뉴 파일 생성

| 순서 | 파일 / 폴더 |                      기능                      |
| :--: | :---------: | :--------------------------------------------: |
|  1   |  features   |        폴더 생성 -> 매뉴명.js 파일 생성        |
|  2   |   slices    |          메뉴이름+Slices.js 파일 생성          |
|  3   |     app     | rootReducer.js 파일에 새로 생성한 reducer 추가 |
|  4   | components  | Data.js파일에 검색, 테이블에 대한 설정 추가 |


***
## Project Structure

```
.
├── README.md                                   # 사용 설명서
├── jsconfig.json                               # 프로젝트 환경 설정
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html                              # 폰트 설정 (link)
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.test.js
    ├── api                                     # API 
    │   ├── Api.js                                  # axios 설정 파일
    │   └── Url.js                                  # URL
    ├── app                                     # APP
    │   ├── App.js                                  # PublicRoutes, PrivateRoutes 구분
    │   ├── rootReducer.js                          # reducer 설정
    │   └── store.js                                # store 설정
    ├── assets
    │   └── images                              # Images
    │       └── logout.png
    ├── common                                  # Common
    │   ├── button                                  # Button Component
    │   │   ├── DefaultButton.js                    
    │   │   ├── PageButton.js
    │   │   └── SubmitButton.js
    │   ├── editor                                  # 에디터
    │   │   └── index.js
    │   ├── excel                                   # 엑셀(CSV) 파일 다운로드 버튼
    │   │   └── index.js
    │   ├── form                                    # Form Component (with react-hook-form)
    │   │   ├── CheckBox.js
    │   │   ├── Input.js
    │   │   ├── RadioButton.js
    │   │   └── Select.js
    │   ├── modal                                   # Modal Component
    │   │   ├── ConfirmModal.js                         # 확인 모달 (Confirm)
    │   │   ├── DetailModal.js                          # 상세 조회 모달
    │   │   └── MessageModal.js                         # 메시지 모달
    │   ├── search                                  # Search Component
    │   │   ├── DatePicker.js                           # 기간 검색
    │   │   ├── DateTermButton.js                       # 기간 검색 버튼
    │   │   ├── SearchField.js                          # 검색 조건 + 검색어
    │   │   ├── SearchRadio.js                          # 검색 radio button
    │   │   └── SearchSelect.js                         # 검색 select
    │   └── table                                   # Table Component (검색 결과 테이블 / 상세 / 추가/수정 테이블)
    │       ├── Button.js                               
    │       ├── CheckBox.js
    │       ├── Pagination.js
    │       ├── RadioButton.js
    │       ├── Select.js                               # 검색 결과 테이블에서 사용
    │       ├── SingleSelect.js                         # 추가/수정 / 모달창 에서 사용
    │       └── TextField.js
    ├── components                                  # Components
    │   ├── Data.js                                     # 검색, 테이블 설정 파일
    │   ├── DateTermSearch.js                           # 기간 검색 
    │   ├── Search.js                                   # 일반 검색
    │   ├── SelectionTable.js                           # Checkbox가 있는 테이블
    │   └── Table.js                                    # Checkbox가 없는 일반 테이블
    ├── features                                    # Features
    │   ├── 404                                         # 404 페이지
    │   │   └── index.js
    │   ├── admin                                       # 관리자 페이지
    │   │   ├── ChangeInfo.js
    │   │   └── ChangePassword.js
    │   ├── components                                  # Components 예제 페이지
    │   │   ├── Button.js
    │   │   ├── Form.js
    │   │   ├── Modal.js
    │   │   ├── Search.js
    │   │   ├── Table.js
    │   │   └── Typography.js
    │   ├── example                                     # Example
    │   │   ├── Example.js
    │   │   ├── ExampleDetailModal.js
    │   │   └── ExampleUploadModal.js
    │   ├── login                                       # 로그인
    │   │   └── index.js
    │   └── summary                                     # Summary
    │       ├── Dashboard.js
    │       ├── DashboardDetail.js
    │       └── DashboardUpload.js
    ├── hooks                                       # Hooks                                           
    │   ├── useErrorMsg.js                              # 에러 메시지 노출
    │   ├── useMenu.js                                  # 메뉴/페이지 설정
    │   └── useSearchParams.js                          # 검색 설정
    ├── index.js
    ├── layout                                      # Layout
    │   ├── CollapsedMenubar.js                         # Menubar v1
    │   ├── Container.js
    │   ├── Header.js
    │   └── SingleMenubar.js                            # Menubar v2
    ├── routes                                      # Routes
    │   └── Router.js                                   # Rotuer
    ├── serviceWorker.js
    ├── setupTests.js
    ├── slices                                      # Slices
    │   ├── commonSlice.js                              # 공용
    │   ├── exampleSlice.js
    │   ├── loginSlice.js                               # 로그인
    │   ├── menuSlice.js                                # 메뉴
    │   ├── modalSlice.js                               # 모달
    │   ├── searchSlice.js                              # 검색
    │   └── summarySlice.js
    ├── styles                                      # Styles
    │   ├── customize                                   # 커스터마이징
    │   │   ├── components                                  # Components
    │   │   │   ├── FormStyles.js
    │   │   │   ├── ModalFormStyles.js
    │   │   │   ├── ModalStyles.js
    │   │   │   └── SearchStyles.js
    │   │   ├── layout                                      # Layout
    │   │   │   └── LayoutStyles.js
    │   │   ├── select                                      # react-select 스타일
    │   │   │   ├── FormSelectStyles.js
    │   │   │   └── TableSelectStyles.js
    │   │   └── table                                       # Table
    │   │       ├── DetailTableStyles.js
    │   │       └── SearchTableStyles.js
    │   └── theme                                       # material-ui theme
    │       ├── button.js
    │       ├── form.js
    │       ├── palette.js                                  # 색상 설정 파일
    │       ├── search.js
    │       ├── textfield.js
    │       ├── theme.js
    │       └── typography.js
    └── utils                                           # Utils
        └── common.js                                       # 공용 함수
```

## NPM Packages
-   [React v17](https://reactjs.org/docs/getting-started.html "react")
-   [react-router-dom v5](https://github.com/ReactTraining/react-router#readme "react-router-dom")
-   [Material-UI v4](https://material-ui.com/ "material-ui")
    - [@material-ui/core](https://www.npmjs.com/package/@material-ui/core "@material-ui")
    - [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons "@material-ui/icons")
    - [@material-ui/lab](https://www.npmjs.com/package/@material-ui/lab "@material-ui/lab")
    - [@material-ui/pickers v3.2.10](https://www.npmjs.com/package/@material-ui/pickers "@material-ui/pickers")
    - [material-ui-popup-state](https://github.com/jcoreio/material-ui-popup-state#readme "material-ui-popup-state")
-   [@date-io](https://github.com/dmtrKovalenko/date-io#readme "@date-io")
    - [@date-io/core](https://www.npmjs.com/package/@date-io/core "@date-io/core")
    - [@date-io/date-fns](https://www.npmjs.com/package/@date-io/date-fns "@date-io/date-fns")
-   [react-hook-form v6](https://www.react-hook-form.com/ "react-hook-form")
    - [@hookform/resolvers](https://github.com/react-hook-form/resolvers "@hookform/resolvers")
    - [yup](https://github.com/jquense/yup "yup")
-   redux
    -   [react-redux](https://github.com/reduxjs/react-redux "react-redux")
    -   [@reduxjs/toolkit](https://redux-toolkit.js.org/ "@reduxjs/toolkit")
    -   [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension "redux-devtools-extension")
-   [axios](https://github.com/axios/axios "axios")
-   [date-fns](https://github.com/date-fns/date-fns#readme "date-fns")
-   [file-saver](https://github.com/eligrey/FileSaver.js#readme "file-saver")
-   [prop-types](https://www.npmjs.com/package/prop-types "prop-types")
-   [react-excel-workbook](https://github.com/ClearC2/react-excel-workbook "react-excel-workbook")
-   [react-modal](https://github.com/reactjs/react-modal "react-modal")
-   [react-quill](https://github.com/zenoamaro/react-quill "react-quill")
-   [react-select](https://react-select.com/home "react-select")
-   [edit-json-file](https://github.com/IonicaBizau/edit-json-file#readme "edit-json-file")
-   [ncp](https://github.com/AvianFlu/ncp "ncp")