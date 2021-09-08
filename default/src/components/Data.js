// README.MD 확인하기

const searchComponent = {
    Dashboard: {
        date: true,
        radio: true,
        selects: true,
        searchType: true,
        searchKeyword: true
    },
    Example: {
        date: false,
        radio: false,
        selects: false,
        searchType: true,
        searchKeyword: true
    }
};

const searchCaption = { gender: "성별", useYn: "판매여부" };

const searchType = {
    Dashboard: ["gender", "useYn"]
};

const searchRadioRow = {
    Dashboard: [["gender", "useYn"], ["useYn"]]
};

const searchSelect = {
    Dashboard: [["gender", "useYn"], ["gender"]]
};

const searchOption = {
    gender: [
        { value: "", label: "전체" },
        { value: "M", label: "M" },
        { value: "F", label: "F" }
    ],
    useYn: [
        { value: "", label: "전체" },
        { label: "판매", value: "Y" },
        { label: "미판매", value: "N" }
    ],
    searchType: [
        { value: "", label: "전체" },
        { value: "id", label: "아이디" },
        { value: "name", label: "이름" },
        { value: "tel", label: "연락처" }
    ],
    sort: [
        { value: "latest", label: "최신 등록순" },
        { value: "oldest", label: "오래된 등록순" }
    ],
    term: [
        { value: "daily", label: "일간" },
        { value: "monthly", label: "월간" }
    ],
    dateType: [
        { value: "reg_dt", label: "등록일" },
        { value: "mod_dt", label: "수정일" }
    ]
};

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

const headCell = {
    Dashboard: [
        { id: "name", label: "디저트" },
        { id: "calories", label: "칼로리" },
        { id: "fat", label: "지방" },
        { id: "carbs", label: "탄수화물" },
        { id: "protein", label: "프로틴" },
        { id: "useYn", label: "사용여부" },
        { id: "viewYn", label: "메인노출" },
        { id: "sortOrder", label: "노출순서" },
        { id: "status", label: "관리" }
    ],
    Example: [
        { id: "name", label: "디저트" },
        { id: "calories", label: "칼로리" },
        { id: "fat", label: "지방" },
        { id: "carbs", label: "탄수화물" },
        { id: "protein", label: "프로틴" },
        { id: "useYn", label: "사용여부" },
        { id: "viewYn", label: "메인노출" },
        { id: "textExample", label: "사용자 입력" }
    ],
    ExampleDetail: [
        { id: "name", label: "디저트" },
        { id: "calories", label: "칼로리" },
        { id: "fat", label: "지방" },
        { id: "carbs", label: "탄수화물" },
        { id: "protein", label: "프로틴" },
        { id: "useYn", label: "사용여부" },
        { id: "viewYn", label: "메인노출" }
    ]
};

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

const buttons = {
    Dashboard: { add: false, addTop: true, delete: true, excel: true },
    Example: { add: true, delete: false, excel: false }
};

// 샘플 데이터
const sampleRowData = [
    { idx: 1, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    { idx: 2, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    { idx: 3, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    { idx: 4, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    { idx: 5, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    { idx: 6, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    { idx: 7, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" }
];

// 샘플 데이터
const sampleDetailData = [
    { idx: 1, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "노출" },
    { idx: 2, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "노출" },
    { idx: 3, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "노출" },
    { idx: 4, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "노출" },
    { idx: 5, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "노출" },
    { idx: 6, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "노출" },
    { idx: 7, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "노출" }
];

// 샘플 데이터
const sampleData = {
    idx: 1,
    name: "Strawberry Chocolate Cupcake",
    category: "cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    quantity: 7,
    color: "white",
    ingredients: "chocolate, strawberry, cheese",
    useYn: "Y",
    useYnText: "사용",
    viewYn: "Y",
    viewYnText: "노출",
    regDate: "2021-08-31"
};

export { searchParams, tableSelectOptions, searchComponent, searchRadioRow, searchSelect, searchType, searchOption, searchCaption, buttons, headCell, sampleRowData, sampleDetailData, sampleData };
