# bo-admin-starter

:smiley: 블록오디세이를 위한 React용 관리자 페이지 Boilerplate입니다. :smiley:   
:bangbang: [프로젝트 설치 방법](https://github.com/BlockOdyssey/bo-admin-starter#project-installation "project-installation") & [사용 설명서](https://github.com/BlockOdyssey/bo-admin-starter#사용방법 "usage") :bangbang:

## Project Main Features

-   **UI COMPONENT** : [MATERIAL-UI](https://material-ui.com/ "material-ui")
-   **STYLING** : [@material-ui/styles](https://material-ui.com/styles/basics/ "@material-ui/styles")
-   **HTTP CLIENT** : [axios](https://github.com/axios/axios "axios")
-   **ROUTING AND NAVIGATION** : [react-router-dom](https://reactrouter.com/web/guides/quick-start "react-router-dom")
-   **STATE MANAGEMENT** : [Redux Toolkit](https://redux-toolkit.js.org/ "redux-toolkit"), [redux-persist](https://github.com/rt2zz/redux-persist#basic-usage "redux-persist")
-   **FORM** : [react-hook-form](https://react-hook-form.com/get-started "react-hook-form")
-   **FORM VALIDATION** : [yup](https://github.com/jquense/yup#usage "yup")
-   **TYPE CHECK** : [prop-types](https://github.com/facebook/prop-types "prop-types")

## Project Extra Features

-   **Date picker** : [material-ui pickers](https://material-ui-pickers.dev/demo/datepicker "material-ui pickers")
-   **Editor** : [react-quill](https://github.com/zenoamaro/react-quill#api-reference "react-quill")
-   **Excel** : [react-excel-workbook](https://github.com/ClearC2/react-excel-workbook#example "react-excel-workbook")
-   **Modal** : [react-modal](https://github.com/reactjs/react-modal#react-modal "react-modal")
-   **PopupState** : [material-ui-popup-state](https://github.com/jcoreio/material-ui-popup-state#material-ui-popup-state, "material-ui-popup-state")
-   **Select** : [react-select](https://react-select.com/home "react-select")

## 프로젝트 구조
- Header
- Menu
- 404
- Login
- ChangePassword
- ChangeInfo
- Summary
    - Dashboard
        - 기간 검색 (DatePicker), 성별 검색 (SearchSelect), 조회조건+검색 input (SearchField), 조회 버튼
        - SelectionTable + Table Sort, Table Filter
        - 사용여부 (UseSelect), 메인노출(ViewSelect), 노출순서 (SortOrder)
        - Detail Modal, Edit Modal (+ react-hook-form)
        - Pagination, 추가 버튼, 삭제 버튼
        - Message Modal, Confirm Modal
    - Summary
        - API 연결 Example
        - 조회조건 + 검색 input (SearchField), 조회버튼
        - Table
        - 사용여부 (UseSelect)
        - Pagination, 엑셀 다운로드 버튼
        - Message Modal
- Example
    - Example
        - 기간단위 (SearchSelect), 기간 검색 (DatePicker), 조회버튼
        - Table + Table Sort, Table Filter
        - 사용여부 (UseSelect), 메인 노출 (ViewSelect), Cell Edit (TextField), 수정버튼 (EditButton), 삭제버튼 (DeleteButton)
        - Detail Modal, Edit Modal (+ react-quill 에디터)
        - Pagination, 추가 버튼
        - Message Modal, Confirm Modal
- Components
    - Search
    - Table
    - Form
    - Modal
    - Typography
    - Button

[확인하기](https://github.com/BlockOdyssey/bo-admin-starter#project-structure "프로젝트 구조")

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

> Data.js 파일 작성 방법   
> Data.js 적용 방법

### Search (검색)

> 하나의 메뉴 - 하나의 검색 파일 (Search.js)

```javascript
//  Data.js
//  자세한 사용방법은 features/summary/components/Search.js를 확인해주세요.
//  **메뉴별 필요한 검색 Components**
//      필요한 경우 -> true
//      사용하지 않는 경우 -> false

//  Summary = 폴더명
//  Dashboard, Summary = 파일명/메뉴명

const summarySearchComponents = {
    Dashboard: {
        date: true,             //  Date Picker 사용
        selects: true,          //  검색 select 사용
        searchType: true,       //  조회조건 select 사용
        searchKeyword: true     //  검색어 사용
    },
    Summary: {
        date: false,            //  Date Picker 미사용
        selects: false,         //  검색 select 미사용
        searchType: true,       //  조회조건 select 사용
        searchKeyword: true     //  검색어 사용
    }
};

//  메뉴별 검색 조건
const summarySearchType = {
    Dashboard: ["gender"],      //  Dashboard는 성별을 검색할 수 있는 Select가 필요
    Summary: []                 //  Summary는 추가적인 검색이 필요 없음
};

//  select별 Options
const summarySearchOptions = {
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

const summarySearchCaption = { gender: "성별" };
```

### Table (테이블)

> 하나의 메뉴 - Selection Table (checkbox가 포함된 테이블) & Table (기본 테이블)   
> 자세한 내용은 features/summary/components/Table.js   
> 또는 features/summary/components/SelectionTable.js를 확인해주세요.

```javascript
//  Data.js

//  **테이블 필터 설정하는 방법**
//      컬럼마다 필요한 필터 작성
//      hobby, music = 테이블 컬럼명

const summaryFilter = {
    hobby: ["game", "book", "bicycle", "movie"],
    music: ["classic", "jazz", "pop", "rap"]
};

//  메뉴별 default 정렬
//      있는 경우 -> 해당 컬럼명
//      없는 경우 -> ""

const summaryDefaultSort = {
    Dashboard: "name",
    Summary: ""
};
     

//  **테이블의 THEAD 부분 설정**
//      테이블 컬럼명 + 필터 설정 + 정렬 설정
//      필터/정렬이 필요하면 -> true
//      아니면 -> false

//  id = DB에서 가져오는 데이터명과 동일
//  label = 테이블 컬럼명

//  Summary = 폴더명
//  Dashboard, Summary = 파일명/메뉴명
//  DashboardDetail = Dashboard + DetailModal

const summaryHeadCell = {
    Dashboard: [
        { id: "name", numeric: false, disablePadding: true, sort: true, filter: false, label: "이름" }
    ],
    Summary: [
        { id: "name", numeric: false, disablePadding: true, sort: false, filter: false, label: "이름" }
    ],
    DashboardDetail: [
        { id: "name", numeric: false, disablePadding: true, sort: false, filter: false, label: "이름" }
    ]
};
```

## common 폴더 사용 방법

> 자주 사용된 components   

> props를 통해서 전달받아야 하는 값만 넘겨주면 추가적인 설정없이 사용 가능   
> prop-types를 사용해서 전달받는 값의 타입을 작성   
> 참고: https://ko.reactjs.org/docs/typechecking-with-proptypes.html

-   button
-   editor
-   excel
-   form
-   menu
-   modal
-   search
-   table

### button 폴더

> 테이블 하단에 있는 버튼 / 모달에서 사용되는 버튼   
> styles/theme/button.js 파일에서 스타일링 확인해주세요.

-   AddButton.js
-   CloseButton.js
-   DeleteButton.js
-   EditButton.js
-   MsgConfirmButton.js

### editor 폴더

> react-quill 에디터 사용 (+ 이미지 업로드)   
> 자세한 사용방법은 common/editor/index.js에서 확인해주세요.   
> 이미지 업로드 참고: https://github.com/quilljs/quill/issues/1400

### form 폴더

> react-hook-form 사용
> 자세한 사용방법은 features/summary/modal/DashboardEditModal.js를 확인해주세요.
> 참고: https://github.com/react-hook-form/react-hook-form/blob/master/app/src/controller.tsx

-   Checkbox
-   RadioButton
-   Select
-   Input

### modal 폴더

> Alert / Confirm을 대신하는 모달   
> 자세한 사용방법은 features/summary/Dashboard.js에서 확인해주세요.

-   MessageConfirm
-   MessageModal

### search 폴더

> 검색에서 사용되는 input, select, date picker

-   DatePicker
-   SearchField
-   SearchSelect

> 기간 검색 파일 (통계 페이지에서 사용)   
> 자세한 내용은 common/search/DateTermSearch.js에서 확인해주세요.

-   DateTermSearch

### table 폴더

> 테이블에서 자주 사용되는 사용여부 select, 노출여부 select...   
> 테이블 pagination   
> 수정, 삭제 버튼   

> 자세한 사용방법은 features/summary/components/SelectionTable.js    
> 또는 features/summary/components/Table.js를 확인해주세요.

-   DeleteButton
-   EditButton
-   Pagination
-   SortOrder
-   TextField
-   UseSelect
-   ViewSelect

```javascript
//  자세한 내용은 common/table/Pagination.js를 확인해주세요.
//  테이블 하단에 버튼을 추가하는 방법
//      1. common/table/Data.js 생성
//      2. 메뉴마다 필요한 버튼을 작성

//  Dashboard, Summary, Example = 메뉴명
//  메뉴별 필요한 버튼 이름과 사용여부를 작성
//      true -> 사용
//      false -> 미사용

const perMenuButton = {
    Dashboard: { add: true, delete: true, excel: false },
    Summary: { add: false, delete: false, excel: true },
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

### 검색 파일 생성

> features/summary/components/Search.js 와 features/summary/Dashboard.js 파일을 먼저 확인하기

| 순서 | 파일 / 폴더 |                                                                                  기능                                                                                  |
| :--: | :---------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  1   |   Data.js   | Data.js 파일 생성하고 [프로젝트 사용방법](https://github.com/BlockOdyssey/bo-admin-starter#사용방법 "프로젝트 사용방법")에서 Search 부분 보면서 파일 작성하기 |
|  2   | components  |                                                           features > 내가 생성한 폴더 > components 폴더 생성                                                           |
|  3   |  Search.js  |                                                                          Search.js 파일 생성                                                                           |

### 테이블을 추가할 때

> features/summary/components/Table.js 아니면 SelectTable.js와 features/summary/Dashboard.js 파일을 먼저 확인하기

| 순서 |         파일 / 폴더          |                                                                                 기능                                                                                  |
| :--: | :--------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  1   |           Data.js            | Data.js 파일 생성하고 [프로젝트 사용방법](https://github.com/BlockOdyssey/bo-admin-starter#사용방법 "프로젝트 사용방법")에서 Table 부분 보면서 파일 작성하기 |
|  2   |          components          |                                                          features > 내가 생성한 폴더 > components 폴더 생성                                                           |
|  3   | SelectionTable.js / Table.js |                                           Checkbox가 필요하다면 SelectTable.js, 기본 테이블이 필요하다면 Table.js 파일 생성                                           |
|  4   |          Filter.js           |                                                             테이블 필터가 필요하다면 Filter.js 파일 생성                                                              |

***
## Project Structure

```
.
├── README.md                                   # 사용 설명서
├── jsconfig.json                               # 프로젝트 환경 설정
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html                              # 폰트 설정 (link)
└── src
    ├── api                                     # API 
    │   ├── Api.js                                  # axios 설정 파일
    │   └── Url.js                                  # URL
    ├── app                                     # APP
    │   ├── App.js                                  # PublicRoutes, PrivateRoutes 구분
    │   ├── rootReducer.js                          # reducer 설정
    │   └── store.js                                # redux-persist 설정, store 설정
    ├── assets
    │   ├── Fonts                               # 폰트
    │   └── Images                              # 이미지
    │       └── img_logout.png
    ├── common                                  # COMMON
    │   ├── button                                  # BUTTON
    │   │   ├── AddButton.js                            # 추가 모달 여는 버튼
    │   │   ├── CloseButton.js                          # 모달 닫기 버튼
    │   │   ├── DeleteButton.js                         # 삭제 버튼
    │   │   ├── EditButton.js                           # 수정 모달 수정 버튼
    │   │   └── MsgConfirmButton.js                     # 확인 버튼
    │   ├── editor                                  # 에디터
    │   │   └── index.js                                
    │   ├── excel                                   # 엑셀
    │   │   └── index.js
    │   ├── form                                    # FORM
    │   │   ├── Checkbox.js                             # 체크박스
    │   │   ├── Input.js                                # input
    │   │   ├── RadioButton.js                          # 라디오 버튼
    │   │   └── Select.js                               # select
    │   ├── menu                                    # MENU
    │   │   └── MenuRedux.js                            # Menu Dispatch
    │   ├── modal                                   # MODAL
    │   │   ├── MessageConfirm.js                       # window.confirm()
    │   │   └── MessageModal.js                         # alert()
    │   ├── search                                  # 검색
    │   │   ├── Data.js                                 # 검색 관련 설정 파일
    │   │   ├── DatePicker.js                           # Date Picker (시작일, 종료일)
    │   │   ├── DateTermSearch.js                       # 기간 검색 (일간/월간, 시작일, 종료일, 조회버튼)
    │   │   ├── SearchField.js                          # 조회조건 + 검색 input
    │   │   └── SearchSelect.js                         # 검색 조건 select
    │   └── table                                   # table
    │       ├── Data.js                                 # 테이블 버튼 관련 설정 파일
    │       ├── DeleteButton.js                         # 삭제 버튼
    │       ├── EditButton.js                           # 수정 버튼
    │       ├── Pagination.js                           # Pagination + Button
    │       ├── SortOrder.js                            # 노출순서 input
    │       ├── TextField.js                            # 사용자 입력 input
    │       ├── UseSelect.js                            # 사용여부 select
    │       └── ViewSelect.js                           # 노출여부 select
    ├── features
    │   ├── 404                                     # 404 Page
    │   │   └── index.js
    │   ├── admin                                   # 관리자
    │   │   ├── ChangeInfo.js                           # 관리자 정보 변경
    │   │   └── ChangePassword.js                       # 관리자 비밀번호 변경
    │   ├── components                              # Components (common 폴더에 있는 components)
    │   │   ├── Button.js                               # Buttons 페이지
    │   │   ├── Form.js                                 # Form의 input 페이지
    │   │   ├── Modal.js                                # Modal 페이지
    │   │   ├── Search.js                               # 검색 페이지
    │   │   ├── Table.js                                # 테이블 페이지
    │   │   └── Typography.js                           # Typography 페이지
    │   ├── example                                 # Example
    │   │   ├── Data.js                                 # Example 폴더의 테이블과 검색 관련 설정 파일
    │   │   ├── Example.js                              # Example 메뉴 파일
    │   │   ├── components                              # Example에서 사용하는 Components
    │   │   │   ├── Filter.js                               # Table Filter
    │   │   │   └── Table.js                                # Table (Checkbox없는 기본 테이블)
    │   │   └── modal                                   # Modal
    │   │       ├── DetailModal.js                          # 상세 모달
    │   │       └── EditModal.js                            # 추가/수정 모달
    │   ├── login                                   # 로그인
    │   │   └── index.js
    │   └── summary                                 # Summary
    │       ├── Dashboard.js                            # Dashboard 메뉴 파일
    │       ├── Data.js                                 # Summary 폴더의 테이블과 검색 관련 설정 파일
    │       ├── Summary.js                              # Summary 메뉴 파일
    │       ├── components                              # Dashboard, Summary에서 사용하는 Components
    │       │   ├── Filter.js                               # Table Filter
    │       │   ├── Search.js                               # 검색
    │       │   ├── SelectionTable.js                       # Table (Checkbox 있는)
    │       │   └── Table.js                                # Table (Checkbox 없는)
    │       └── modal                                   # Modal
    │           ├── DashboardEditModal.js                   # Dashboard의 추가/수정 모달
    │           ├── DetailModal.js                          # 상세 모달
    │           └── SummaryEditModal.js                     # Summarydml 추가/수정 모달
    ├── hoc                                         # Base Container
    │   └── index.js            
    ├── index.js
    ├── layout                                      # 레이아웃
    │   ├── Header.js                                   # 헤더 (+ 정보변경/비밀번호 수정/로그아웃)
    │   └── Menubar.js                                  # 메뉴 (Navigation)
    ├── routes                                      # 라우터
    │   └── Router.js
    ├── slices                                      # Slices (redux-toolkit createSlice)
    │   ├── exampleSlice.js                             # Example 폴더의 slice 파일
    │   ├── loginSlice.js                               # 로그인 slice 파일
    │   ├── menuSlice.js                                # 메뉴 slice 파일
    │   ├── modalSlice.js                               # modal slice 파일
    │   ├── searchSlice.js                              # 검색 slice 파일
    │   └── summarySlice.js                             # Summary 폴더의 slice 파일
    ├── styles                                      # Styles
    │   ├── customize                                   # makeStyles / react-select 커스터마이징
    │   │   ├── FilterStyles.js                             # 테이블 필터
    │   │   ├── FormSelectStyles.js                         # react-select 모달창용 style
    │   │   ├── LayoutStyles.js                             # 레이아웃 style
    │   │   ├── ModalFormStyles.js                          # 추가/수정 모달에서 사용된 form style
    │   │   ├── SearchSelectStyles.js                       # react-select 검색용 style
    │   │   ├── SearchStyles.js                             # 검색 style
    │   │   └── TableSelectStyles.js                        # react-select 테이블용 style
    │   └── theme                                       # ThemeProvider 
    │       ├── button.js                                   # 버튼
    │       ├── form.js                                     # form
    │       ├── search.js                                   # 검색
    │       ├── textfield.js                                # input
    │       ├── theme.js                                    # global theme 설정
    │       └── typography.js                               # font 관련 설정
    └── utils                                       # Utils
        └── CommonFunction.js                           # 공용 함수
```
