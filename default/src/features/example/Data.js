const exampleFilter = {
    calories: ["cupcake", "cake", "cookie", "macaroon"],
    carbs: ["example1", "example2", "example3", "example4"]
};

const exampleDefaultSort = {
    Example: "name"
};

const exampleHeadCell = {
    Example: [
        { id: "name", numeric: false, disablePadding: true, sort: true, filter: false, label: "디저트" },
        { id: "calories", numeric: true, disablePadding: false, sort: false, filter: true, label: "칼로리" },
        { id: "fat", numeric: true, disablePadding: false, sort: false, filter: false, label: "지방" },
        { id: "carbs", numeric: true, disablePadding: false, sort: false, filter: true, label: "탄수화물" },
        { id: "protein", numeric: true, disablePadding: false, sort: false, filter: false, label: "프로틴" },
        { id: "useYn", numeric: false, disablePadding: false, sort: false, filter: false, label: "사용여부" },
        { id: "viewYn", numeric: false, disablePadding: false, sort: false, filter: false, label: "메인노출" },
        { id: "textExample", numeric: false, disablePadding: false, sort: false, filter: false, label: "사용자 입력" },
        { id: "status", numeric: false, disablePadding: false, sort: false, filter: false, label: "관리" }
    ],
    ExampleDetail: [
        { id: "name", numeric: false, disablePadding: true, sort: true, filter: false, label: "디저트" },
        { id: "calories", numeric: true, disablePadding: false, sort: false, filter: true, label: "칼로리" },
        { id: "fat", numeric: true, disablePadding: false, sort: false, filter: false, label: "지방" },
        { id: "carbs", numeric: true, disablePadding: false, sort: false, filter: true, label: "탄수화물" },
        { id: "protein", numeric: true, disablePadding: false, sort: false, filter: false, label: "프로틴" },
        { id: "useYn", numeric: false, disablePadding: false, sort: false, filter: false, label: "사용여부" },
        { id: "viewYn", numeric: false, disablePadding: false, sort: false, filter: false, label: "메인노출" }
    ]
};

const sampleRowData = [
    { key: 1, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", textExample: "사용자 입력" },
    { key: 2, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", textExample: "사용자 입력" },
    { key: 3, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", textExample: "사용자 입력" },
    { key: 4, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", textExample: "사용자 입력" },
    { key: 5, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", textExample: "사용자 입력" },
    { key: 6, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", textExample: "사용자 입력" },
    { key: 7, name: "Cupcake", calories: 1111, fat: 5.5, carbs: 144, protein: 1.2, useYn: "Y", viewYn: "Y", textExample: "사용자 입력" }
];

const sampleDetailData = [
    { key: 1, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 2, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 3, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 4, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 5, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 6, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 7, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" }
];

export { exampleFilter, exampleDefaultSort, exampleHeadCell, sampleRowData, sampleDetailData };
