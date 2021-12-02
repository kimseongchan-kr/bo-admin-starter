// 참고: https://react-select.com/styles#style-object
import { palette } from "styles/theme/palette";

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        height: 32,
        padding: "6px 10px",
        color: palette.text["primary"],
        backgroundColor: state.isSelected ? palette.primary["main"] : palette.neutral["white"],
        "&:hover": {
            backgroundColor: state.isSelected ? palette.primary["main"] : palette.primary["opacity0.2"]
        }
    }),
    container: (provided) => ({
        ...provided,
        width: 80,
        height: 32,
        fontSize: 12,
        margin: "0 auto"
    }),
    control: (provided) => ({
        ...provided,
        minHeight: 32,
        height: 32,
        lineHeight: "32px",
        boxShadow: "unset",
        borderColor: palette.border["main"],
        "&:hover": {
            borderColor: palette.border["main"]
        }
    }),
    valueContainer: (provided) => ({
        ...provided,
        height: 32
    }),
    singleValue: (provided) => ({
        ...provided,
        width: "calc(100% - 8px)"
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        width: 24,
        padding: "2px 6px 2px 2px"
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        height: 32,
        padding: 0
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        alignSelf: "unset"
    }),
    menuList: (provided) => ({
        ...provided,
        padding: 0
    })
};

export default customStyles;
