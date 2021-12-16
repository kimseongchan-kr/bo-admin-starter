import { Dashboard, Settings, Build, BarChart } from "@mui/icons-material";

const MenuData = {
    public: [
        {
            setCaption: true,
            caption: "홈",
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
            siblings: [
                {
                    num: 1,
                    menu: "example",
                    menuTitle: "Example",
                    icon: <Settings />,
                    path: "/example"
                }
            ]
        },
        {
            setCaption: true,
            caption: "컴포넌트",
            siblings: [
                {
                    num: null,
                    menu: "components",
                    menuTitle: "Components",
                    icon: <Settings />,
                    subMenus: [
                        {
                            num: 2,
                            menu: "components",
                            menuTitle: "Search",
                            icon: <Build />,
                            path: "/search"
                        },
                        {
                            num: 3,
                            menu: "components",
                            menuTitle: "Table",
                            icon: <Build />,
                            path: "/table"
                        },
                        {
                            num: 4,
                            menu: "components",
                            menuTitle: "Form",
                            icon: <Build />,
                            path: "/form"
                        },
                        {
                            num: 5,
                            menu: "components",
                            menuTitle: "Modal",
                            icon: <Build />,
                            path: "/modal"
                        },
                        {
                            num: 6,
                            menu: "components",
                            menuTitle: "Typography",
                            icon: <Build />,
                            path: "/typography"
                        },
                        {
                            num: 7,
                            menu: "components",
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
                    icon: <BarChart />,
                    path: "/chart-table"
                }
            ]
        }
    ],
    private: [
        {
            setCaption: true,
            caption: "홈",
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
