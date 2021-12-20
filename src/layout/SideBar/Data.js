import { Dashboard, Article, Settings, Build, BarChart, TableChart, SettingsSuggest } from "@mui/icons-material";

const MenuData = {
    private: [
        {
            setCaption: true,
            caption: "홈",
            menu: ["dashboard"],
            siblings: [
                {
                    num: 0,
                    menu: "dashboard",
                    menuTitle: "Dashboard",
                    icon: <Dashboard />,
                    path: "/"
                }
            ]
        },
        {
            setCaption: true,
            caption: "예시",
            menu: ["example"],
            siblings: [
                {
                    num: 1,
                    menu: "example",
                    menuTitle: "Example",
                    icon: <Article />,
                    path: "/example"
                }
            ]
        },
        {
            setCaption: true,
            caption: "컴포넌트",
            menu: ["components", "common"],
            siblings: [
                {
                    num: null,
                    menu: "components",
                    menuTitle: "Components",
                    icon: <Settings />,
                    subMenus: [
                        {
                            num: 2,
                            menuTitle: "Search",
                            icon: <Build />,
                            path: "/search"
                        },
                        {
                            num: 3,
                            menuTitle: "Table",
                            icon: <Build />,
                            path: "/table"
                        }
                    ]
                },
                {
                    num: null,
                    menu: "common",
                    menuTitle: "Common",
                    icon: <SettingsSuggest />,
                    subMenus: [
                        {
                            num: 4,
                            menuTitle: "Form",
                            icon: <Build />,
                            path: "/form"
                        },
                        {
                            num: 5,
                            menuTitle: "Modal",
                            icon: <Build />,
                            path: "/modal"
                        },
                        {
                            num: 6,
                            menuTitle: "Typography",
                            icon: <Build />,
                            path: "/typography"
                        },
                        {
                            num: 7,
                            menuTitle: "Button",
                            icon: <Build />,
                            path: "/button"
                        }
                    ]
                }
            ]
        },
        {
            setCaption: true,
            caption: "차트",
            menu: ["chart"],
            siblings: [
                {
                    num: 8,
                    menu: "chart",
                    menuTitle: "Chart",
                    icon: <BarChart />,
                    path: "/chart"
                },
                {
                    num: 9,
                    menu: "chart",
                    menuTitle: "Chart with Table",
                    icon: <TableChart />,
                    path: "/chart-table"
                }
            ]
        }
    ],
    public: [
        {
            setCaption: true,
            caption: "홈",
            menu: ["dashboard"],
            siblings: [
                {
                    num: 0,
                    menu: "dashboard",
                    menuTitle: "Dashboard",
                    icon: <Dashboard />,
                    path: "/"
                }
            ]
        }
    ]
};

export default MenuData;
