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
-   **Type Checking** : [prop-types](https://github.com/facebook/prop-types "prop-types")

## Project Extra Features

-   **Editor** : [react-quill](https://github.com/zenoamaro/react-quill#api-reference "react-quill")
-   **Excel** : [react-excel-workbook](https://github.com/ClearC2/react-excel-workbook#example "react-excel-workbook")
-   **Modal** : [react-modal](https://github.com/reactjs/react-modal#react-modal "react-modal")
-   **PopupState** : [material-ui-popup-state](https://github.com/jcoreio/material-ui-popup-state#material-ui-popup-state, "material-ui-popup-state")
-   **Select** : [react-select](https://react-select.com/home "react-select")

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

//  Search.js
//  SAMPLE CODE
//  features/summary/components/Search.js 파일을 확인해주세요.

import DateSearchPickers from "common/search/DatePicker";       // Date Picker
import SearchSelects from "common/search/SearchSelect";         // 검색 Select
import SearchField from "common/search/SearchField";            // 조회조건 + 검색어

import { summarySearchComponents as componentExists, summarySearchType as searchCondition, summarySearchOptions as options, summarySearchCaption as caption } from "features/summary/Data";

export default function SummarySearch() {
    return (
        //  날짜 검색 있을 경우
        {componentExists[menu].date && (
            <DateSearchPickers  />
        )}

        //  검색 조건 select (성별...)
        {componentExists[menu].selects && (
            <SearchSelects />
        )}

        //  조회조건 + 검색어
        {componentExists[menu].searchKeyword && (
            <SearchField  />
        )}

        //  검색 조회 버튼
        <Button variant="contained" onClick={handleSubmit}>
            조회
        </Button>
    );
}
```

### Table (테이블)

> 하나의 메뉴 - Selection Table(checkbox가 포함된 테이블) & Table(기본 테이블)   
> 자세한 내용은 features/summary/components/Table.js 또는 features/summary/components/SelectionTable.js를 확인해주세요.

```javascript
//  Data.js

//  **테이블 필터 설정하는 방법**
//      테이블에서 필터가 필요한 컬럼의 필터 조건들
//      hobby, music = 테이블 컬럼명

const summaryFilter = {
    hobby: ["game", "book", "bicycle", "movie"],
    music: ["classic", "jazz", "pop", "rap"]
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
> styles/theme/button.js 파일에서 스타일링 확인

-   AddButton.js
-   CloseButton.js
-   DeleteButton.js
-   EditButton.js
-   MsgConfirmButton.js

```javascript
// SAMPLE CODE

// 새로운 데이터를 추가하는 모달을 띄어주는 추가 버튼
// onOpen이라는 function이 필요
function AddButton({ onOpen }) {
    return (
        // styles/theme/button.js 파일에서 버튼에 대한 style 확인 및 수정 가능
        <ThemeProvider theme={theme}>
            <IconButton onClick={onOpen}>
                <CheckOutlined style={{ color: "#039BE5" }} />
                추가
            </IconButton>
        </ThemeProvider>
    );
}

// 전달받는 데이터의 유효성 검증
// 참고: https://ko.reactjs.org/docs/typechecking-with-proptypes.html
AddButton.propTypes = {
    onOpen: PropTypes.func.isRequired
};
```

### editor 폴더

> react-quill 에디터 사용방법 (+ 이미지 업로드)

```javascript
// SAMPLE CODE

export default function Editor({ contents, setContents }) {
    const quillRef = React.useRef(null);

    // 에디터 내용 변경
    const handleChange = (value) => {
        setContents(value);
    };

    // 이미지 업로드
    const imageCallBack = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        // 이미지만 선택할 수 있도록
        input.setAttribute("accept", "image/*");
        input.click();
        input.onchange = async function () {
            // 파일 체크
            const file = input.files ? input.files[0] : null;
            if (file) {
                // 서버로 이미지를 업로드 Example
                const formData = new FormData();
                formData.append("files", file);

                let headers = {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data"
                };

                // 서버로 이미지를 upload한 다음
                // 이미지의 URL을 에디터에 삽입
                await axios
                    .post("http://localhost:3000/upload", formData, { headers })
                    .then((res) => {
                        let quill = quillRef.current.getEditor();
                        const range = quill.getSelection(true);

                        let path = res.data.result;
                        let imageSrc = "http://localhost:3000/" + path; //이미지의 URL
                        quill.insertEmbed(range.index, "image", imageSrc, "user");
                    })
                    .catch((err) => {
                        alert("에러가 발생했습니다.");
                        console.log("error:: ", err);
                    });
            } else {
                alert("이미지를 선택해주세요.");
                return;
            }
        };
    };

    // 에디터 toolbar 설정
    const modules = useMemo(() => ({
            toolbar: {
                container: [
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ size: ["small", false, "large", "huge"] }, { color: [] }],
                    [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
                    ["link", "image"],
                    ["clean"]
                ],
                handlers: {
                    image: imageCallBack
                }
            },
            clipboard: { matchVisual: false }
    }), [] );

    const formats = ["bold", "italic", "underline", "strike", "blockquote", "size", "color", "list", "link", "image", "align"];

    return <ReactQuill ref={quillRef} placeholder="내용을 입력해주세요." theme="snow" value={contents} onChange={handleChange} formats={formats} modules={modules} />;
}
```

### form 폴더

> react-hook-form을 사용할 때
> 자세한 사용방법은 features/summary/modal/DashboardEditModal.js를 확인해주세요.

-   Checkbox
-   RadioButton
-   Select
-   Input

```javascript
// SAMPLE CODE

// input type="text" / input type="number"
function Input({ name, defaultValue, control, classes, inputType }) {
    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            control={control}
            render={({ onChange, value }) => (
                <TextField
                    className={classes.textInput}
                    id={`outline-${name}`}
                    label=""
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                    type={inputType}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            )}
        />
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    control: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    inputType: PropTypes.string.isRequired
};

// DashboardEditModal.js
<Input inputType="text" name="fat" defaultValue={form.fat} control={control} classes={classes} />

```

### modal 폴더

> Alert / Confirm을 대신하는 모달   
> 자세한 사용방법은 features/summary/Dashboard.js에서 확인해주세요.

-   MessageConfirm
-   MessageModal

```javascript
// SAMPLE CODE

// window.confirm() 메서드처럼
// 확인과 취소 버튼이 있고
// 메세지를 보여줌
function ConfirmModal({ onClose, handleDelete }) {
    return (
        <Modal isOpen={msgConfirmOpen} onRequestClose={onClose} style={modalStyles} contentLabel="Message Modal" onAfterOpen={disableScroll} onAfterClose={enableScroll}>
            <Typography variant="body1" display="block" color="inherit" className={classes.message}>
                {message}
            </Typography>
            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <ThemeProvider theme={theme}>
                        <IconButton onClick={onClose}>
                            <Close style={{ color: "#DE5D5D" }} />
                            취소
                        </IconButton>
                        <IconButton onClick={handleDelete}>
                            <CheckOutlined />
                            확인
                        </IconButton>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </Modal>
    );
}
```

```javascript
// SAMPLE CODE

// alert() 메서드처럼
// 메세지를 보여주고
// 닫기 버튼이 있음
function MessageModal({ onClose }) {
    return (
        <Modal isOpen={msgOpen} onRequestClose={onClose} style={modalStyles} contentLabel="Message Modal" onAfterOpen={disableScroll} onAfterClose={enableScroll}>
            <Typography variant="body1" display="block" color="inherit" className={classes.message}>
                {message}
            </Typography>
            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <CloseButton onClose={onClose} text="닫기" />
                </Grid>
            </Grid>
        </Modal>
    );
}
```

### search 폴더

> 검색에서 사용되는 input, select, date picker

-   DatePicker
-   SearchField
-   SearchSelect

> 기간 검색 파일 (통계 페이지에서 사용)

-   DateTermSearch

```javascript
//  SAMPLE CODE
//  자세한 내용은 common/search/DateTermSearch.js에서 확인해주세요.

import DateSearchPickers from "common/search/DatePicker";
import SearchSelect from "common/search/SearchSelect";
import { DateTermSearchOptions as options } from "common/search/Data";

export default function DateTermSearch({  }) {
    return (
        // 검색 select
        <SearchSelect />

        // Date Picker
        <DateSearchPickers />

        // 조회 버튼
        <Button variant="contained" onClick={handleSubmit}>
            조회
        </Button>
    );
}
```

### table 폴더

> 테이블에서 자주 사용되는 사용여부 select, 노출여부 select...   
> 테이블 pagination   
> 수정, 삭제 버튼   
> 자세한 사용방법은 features/summary/components/SelectionTable.js 또는 features/summary/components/Table.js를 확인해주세요.

-   DeleteButton
-   EditButton
-   Pagination
-   SortOrder
-   TextField
-   UseSelect
-   ViewSelect

```javascript
// 테이블 하단에 버튼을 추가하는 방법
// 1. common/table/Data.js 생성
// 2. 메뉴마다 필요한 버튼을 작성

// Dashboard, Summary, Example = 메뉴명
// 메뉴별 필요한 버튼 이름과 사용여부를 작성
// true -> 사용
// false -> 미사용

const PerMenuButton = {
    Dashboard: { add: true, delete: true, excel: false },
    Summary: { add: false, delete: false, excel: true },
    Example: { add: true, delete: false, excel: false }
};

// common/table/Pagination.js 파일에서
// PerMenuButton을 import
import { PerMenuButton as buttons } from "common/table/Data";

function TablePaginationActions() {
    return (
        <div>
            {buttons[menu].add && <AddButton onOpen={onOpen} />}
            {buttons[menu].delete && <DeleteButton onConfirm={onConfirm} />}
            {buttons[menu].excel && <ExcelExport />}
        </div>
    );
}
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
    ├── api
    │   ├── Api.js
    │   └── Url.js
    ├── app
    │   ├── App.js
    │   ├── rootReducer.js
    │   └── store.js
    ├── assets
    │   ├── Fonts
    │   └── Images
    │       └── img_logout.png
    ├── common
    │   ├── button
    │   │   ├── AddButton.js
    │   │   ├── CloseButton.js
    │   │   ├── DeleteButton.js
    │   │   ├── EditButton.js
    │   │   └── MsgConfirmButton.js
    │   ├── editor
    │   │   └── index.js
    │   ├── excel
    │   │   └── index.js
    │   ├── form
    │   │   ├── Checkbox.js
    │   │   ├── Input.js
    │   │   ├── RadioButton.js
    │   │   └── Select.js
    │   ├── menu
    │   │   └── MenuRedux.js
    │   ├── modal
    │   │   ├── MessageConfirm.js
    │   │   └── MessageModal.js
    │   ├── search
    │   │   ├── Data.js
    │   │   ├── DatePicker.js
    │   │   ├── DateTermSearch.js
    │   │   ├── SearchField.js
    │   │   └── SearchSelect.js
    │   └── table
    │       ├── Data.js
    │       ├── DeleteButton.js
    │       ├── EditButton.js
    │       ├── Pagination.js
    │       ├── SortOrder.js
    │       ├── TextField.js
    │       ├── UseSelect.js
    │       └── ViewSelect.js
    ├── features
    │   ├── 404
    │   │   └── index.js
    │   ├── admin
    │   │   ├── ChangeInfo.js
    │   │   └── ChangePassword.js
    │   ├── example
    │   │   ├── Data.js
    │   │   ├── Example.js
    │   │   ├── components
    │   │   │   ├── Filter.js
    │   │   │   └── Table.js
    │   │   └── modal
    │   │       ├── DetailModal.js
    │   │       └── EditModal.js
    │   ├── login
    │   │   └── index.js
    │   └── summary
    │       ├── Dashboard.js
    │       ├── Data.js
    │       ├── Summary.js
    │       ├── components
    │       │   ├── Filter.js
    │       │   ├── Search.js
    │       │   ├── SelectionTable.js
    │       │   └── Table.js
    │       └── modal
    │           ├── DashboardEditModal.js
    │           ├── DetailModal.js
    │           └── SummaryEditModal.js
    ├── hoc
    │   └── index.js
    ├── index.js
    ├── layout
    │   ├── Header.js
    │   └── Menubar.js
    ├── routes
    │   └── Router.js
    ├── slices
    │   ├── exampleSlice.js
    │   ├── loginSlice.js
    │   ├── menuSlice.js
    │   ├── modalSlice.js
    │   ├── searchSlice.js
    │   └── summarySlice.js
    ├── styles
    │   ├── customize
    │   │   ├── ButtonStyles.js
    │   │   ├── DefaultStyles.js
    │   │   ├── FilterStyles.js
    │   │   ├── FormSelectStyles.js
    │   │   ├── LayoutStyles.js
    │   │   ├── ModalFormStyles.js
    │   │   ├── SearchSelectStyles.js
    │   │   ├── SearchStyles.js
    │   │   └── TableSelectStyles.js
    │   └── theme
    │       ├── button.js
    │       ├── search.js
    │       ├── table.js
    │       ├── textfield.js
    │       ├── theme.js
    │       └── typography.js
    └── utils
        └── CommonFunction.js
```
