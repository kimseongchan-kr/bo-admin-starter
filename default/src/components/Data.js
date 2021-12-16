import * as yup from "yup";

const dailyFormat = "yyyy/MM/dd";
const monthlyFormat = "yyyy/MM";

const searchComponent = {
    Dashboard: {
        date: true,
        dateSelect: false,
        radio: true,
        selects: true,
        searchType: true,
        searchKeyword: true
    },
    Example: {
        date: false,
        radio: false,
        selects: false,
        searchType: false,
        searchKeyword: false
    },
    SearchComponent: {
        date: true,
        dateSelect: true,
        radio: true,
        selects: true,
        searchType: true,
        searchKeyword: true
    },
    Chart: {
        date: false,
        radio: false,
        selects: false,
        searchType: false,
        searchKeyword: false
    },
    ChartTable: {
        date: false,
        radio: false,
        selects: false,
        searchType: false,
        searchKeyword: false
    }
};

const searchCaption = { gender: "성별", useYn: "판매여부", dessert: "디저트", sweets: "캔디", food: "음식", drink: "음료" };

const searchType = {
    Dashboard: ["gender", "useYn", "dessert", "sweets", "food", "drink"]
};

const searchRadioRow = {
    Dashboard: [["sweets", "food"], ["drink"]]
};

const searchSelect = {
    Dashboard: [["gender", "useYn"], ["dessert"]]
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
    dessert: [
        { value: "", label: "전체" },
        { value: "cupcake", label: "컵케이크" },
        { value: "cake", label: "케이크" }
    ],
    sweets: [
        { value: "", label: "전체" },
        { value: "candy", label: "캔디" },
        { value: "chocolate", label: "초콜릿" }
    ],
    food: [
        { value: "", label: "전체" },
        { value: "hamburger", label: "햄버거" },
        { value: "fried chicken", label: "치킨" }
    ],
    drink: [
        { value: "", label: "전체" },
        { value: "tea", label: "티" },
        { value: "water", label: "물" }
    ],
    searchType: {
        Dashboard: [
            { value: "all", label: "전체" },
            { value: "id", label: "아이디" },
            { value: "name", label: "이름" },
            { value: "tel", label: "연락처" }
        ],
        SearchComponent: [
            { value: "all", label: "전체" },
            { value: "id", label: "아이디" },
            { value: "name", label: "이름" },
            { value: "tel", label: "연락처" }
        ]
    },
    sort: [
        { value: "latest", label: "최신 등록순" },
        { value: "oldest", label: "오래된 등록순" }
    ],
    term: [
        { value: "daily", label: "일간" },
        { value: "monthly", label: "월간" }
    ],
    dateType: [
        { value: "regDate", label: "등록일" },
        { value: "modDate", label: "수정일" }
    ]
};

const searchParams = {
    Dashboard: {
        startDate: "startDate",
        endDate: "endDate",
        gender: "gender",
        useYn: "useYn",
        dessert: "dessert",
        food: "food",
        sweets: "sweets",
        drink: "drink",
        searchType: "searchType",
        searchKeyword: "searchKeyword",
        sort: "sort",
        pageNumber: "pageNumber",
        pageShow: "pageShow"
    },
    Example: {
        term: "term",
        startDate: "startDate",
        endDate: "endDate",
        pageNumber: "pageNumber",
        pageShow: "pageShow"
    },
    Chart: {
        term: "term",
        startDate: "startDate",
        endDate: "endDate"
    },
    ChartTable: {
        term: "term",
        startDate: "startDate",
        endDate: "endDate"
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
        { id: "regDate", label: "등록일" }
    ],
    ExampleDetail: [
        { id: "name", label: "디저트" },
        { id: "calories", label: "칼로리" },
        { id: "fat", label: "지방" },
        { id: "carbs", label: "탄수화물" },
        { id: "protein", label: "프로틴" },
        { id: "useYn", label: "사용여부" },
        { id: "viewYn", label: "메인노출" }
    ],
    ChartTable: Array.from(Array(50)).map((_, index) => {
        return { id: `caloreis${index}`, label: `Day ${parseInt(index) + 1}` };
    })
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
    addButton: { Dashboard: false, Example: true },
    addTopButton: { Dashboard: true, Example: false },
    deleteButton: { Dashboard: true, Example: false },
    excelButton: { Dashboard: true, Example: false }
};

const schema = {
    Dashboard: yup.object().shape({
        category: yup.object().shape({
            value: yup.string().required()
        }),
        name: yup.string().required(),
        description: yup.string().required(),
        quantity: yup.number().min(0).positive().required(),
        useYn: yup.string().required()
    }),
    ChangeInfo: yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        phone: yup.string().required(),
        image: yup
            .mixed()
            .required()
            .test("image", "이미지를 선택해주세요", (value) => {
                return value.length > 0;
            })
    })
};

// 샘플 데이터
const sampleRowData = [
    { idx: 1, name: "Cheese Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    { idx: 2, name: "Strawberry Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    { idx: 3, name: "Chocolate Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    { idx: 4, name: "Peanut Butter Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    { idx: 5, name: "Banana Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    {
        idx: 6,
        name: "White Chocolate Cupcake",
        calories: 1111,
        fat: 5.5,
        carbs: 144,
        protein: 1.2,
        useYn: "Y",
        useYnText: "사용",
        viewYn: "Y",
        viewYnText: "노출",
        sortOrder: 1,
        regdate: "2020-02-02"
    },
    { idx: 7, name: "Fruits Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" }
];

// 샘플 데이터
const sampleChartData = [
    { idx: 1, name: "Cheese Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    { idx: 2, name: "Strawberry Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    { idx: 3, name: "Chocolate Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" },
    { idx: 4, name: "Peanut Butter Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", useYnText: "사용", viewYn: "Y", viewYnText: "노출", sortOrder: 1, regdate: "2020-02-02" }
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
    description: "This is a Strawberry Chocolate Cupcake.",
    ingredients: "chocolate, strawberry, cheese",
    useYn: "Y",
    useYnText: "사용",
    viewYn: "Y",
    viewYnText: "노출",
    regDate: "2021-08-31"
};

export {
    dailyFormat,
    monthlyFormat,
    searchParams,
    tableSelectOptions,
    searchComponent,
    searchRadioRow,
    searchSelect,
    searchType,
    searchOption,
    searchCaption,
    buttons,
    headCell,
    sampleRowData,
    sampleChartData,
    sampleDetailData,
    sampleData,
    schema
};
