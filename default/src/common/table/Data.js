//  메뉴별 필요한 버튼
//      true -> 필요
//      false -> 사용안함
const perMenuButton = {
    Dashboard: { add: true, delete: true, excel: false },
    Summary: { add: false, delete: false, excel: true },
    Example: { add: true, delete: false, excel: false }
};

export { perMenuButton };
