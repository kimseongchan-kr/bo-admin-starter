// 메뉴별 필요한 검색 Components
// 필요한 경우 -> true
// 사용하지 않는 경우 -> false

// 만약 date : true
// 해당 메뉴에서 날짜 검색하는 Component가 필요하는 의미
const summarySearchComponents = {
    Dashboard: {
        date: true,
        selects: true,
        searchType: true,
        searchKeyword: true
    },
    Summary: {
        date: false,
        selects: false,
        searchType: true,
        searchKeyword: true
    }
};

// 메뉴별 검색 조건
// Dashboard는 성별을 검색할 수 있는 Select가 필요
// Summary는 추가적인 검색이 필요 없음
const summarySearchType = {
    Dashboard: ["gender"],
    Summary: []
};

// select별 Options
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

// 테이블에서 필터가 필요한 컬럼의 필터 조건들
// calories, carbs = 테이블 컬럼명
const summaryFilter = {
    calories: ["cupcake", "cake", "cookie", "macaroon"],
    carbs: ["example1", "example2", "example3", "example4"]
};

//  메뉴별 default 정렬
//      있는 경우 -> 해당 컬럼 명
//      없는 경우 -> ""
const summaryDefaultSort = {
    Dashboard: "name",
    Summary: ""
};

// 테이블 컬럼명 + 필터 설정 + 정렬 설정
// 필터/정렬이 필요하면 -> true
// 아니면 -> false
// id는 DB에서 가져오는 데이터명과 같아야 함
// label이 테이블 컬럼명
// Dashboard, Summary, DashboardDetail은 메뉴 이름
const summaryHeadCell = {
    Dashboard: [
        { id: "name", numeric: false, disablePadding: true, sort: true, filter: false, label: "디저트" },
        { id: "calories", numeric: true, disablePadding: false, sort: false, filter: true, label: "칼로리" },
        { id: "fat", numeric: true, disablePadding: false, sort: false, filter: false, label: "지방" },
        { id: "carbs", numeric: true, disablePadding: false, sort: false, filter: true, label: "탄수화물" },
        { id: "protein", numeric: true, disablePadding: false, sort: false, filter: false, label: "프로틴" },
        { id: "useYn", numeric: false, disablePadding: false, sort: false, filter: false, label: "사용여부" },
        { id: "viewYn", numeric: false, disablePadding: false, sort: false, filter: false, label: "메인노출" },
        { id: "sortOrder", numeric: true, disablePadding: false, sort: false, filter: false, label: "노출순서" }
    ],
    Summary: [
        { id: "name", numeric: false, disablePadding: true, sort: false, filter: false, label: "디저트" },
        { id: "calories", numeric: true, disablePadding: false, sort: false, filter: false, label: "칼로리" },
        { id: "fat", numeric: true, disablePadding: false, sort: false, filter: false, label: "지방" },
        { id: "carbs", numeric: true, disablePadding: false, sort: false, filter: false, label: "탄수화물" },
        { id: "protein", numeric: true, disablePadding: false, sort: false, filter: false, label: "프로틴" },
        { id: "useYn", numeric: false, disablePadding: false, sort: false, filter: false, label: "사용여부" },
        { id: "regdate", numeric: false, disablePadding: false, sort: false, filter: false, label: "등록일" }
    ],
    DashboardDetail: [
        { id: "name", numeric: false, disablePadding: true, sort: true, filter: false, label: "디저트" },
        { id: "calories", numeric: true, disablePadding: false, sort: false, filter: true, label: "칼로리" },
        { id: "fat", numeric: true, disablePadding: false, sort: false, filter: false, label: "지방" },
        { id: "carbs", numeric: true, disablePadding: false, sort: false, filter: true, label: "탄수화물" },
        { id: "protein", numeric: true, disablePadding: false, sort: false, filter: false, label: "프로틴" },
        { id: "useYn", numeric: false, disablePadding: false, sort: false, filter: false, label: "사용여부" },
        { id: "viewYn", numeric: false, disablePadding: false, sort: false, filter: false, label: "메인노출" }
    ]
};

// 샘플용 데이터
// 삭제 필수
const sampleRowData = [
    { key: 1, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", sortOrder: 1, regdate: "2020-02-02" },
    { key: 2, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", sortOrder: 1, regdate: "2020-02-02" },
    { key: 3, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", sortOrder: 1, regdate: "2020-02-02" },
    { key: 4, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", sortOrder: 1, regdate: "2020-02-02" },
    { key: 5, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", sortOrder: 1, regdate: "2020-02-02" },
    { key: 6, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", sortOrder: 1, regdate: "2020-02-02" },
    { key: 7, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", sortOrder: 1, regdate: "2020-02-02" }
];

// 샘플용 데이터
// 삭제 필수
const sampleDetailData = [
    { key: 1, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 2, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 3, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 4, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 5, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 6, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 7, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" }
];

export { summarySearchComponents, summarySearchType, summarySearchOptions, summarySearchCaption, summaryFilter, summaryDefaultSort, summaryHeadCell, sampleRowData, sampleDetailData };
