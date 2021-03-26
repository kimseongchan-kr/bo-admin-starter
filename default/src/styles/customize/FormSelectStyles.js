// 참고: https://react-select.com/styles#style-object
const customStyles = {
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#039BE5" : "#ffffff",
        color: "#333333",
        "&:hover": {
            backgroundColor: state.isSelected ? "#039BE5" : "#039be533"
        },
        height: 32,
        padding: "8px 10px"
    }),
    container: (provided) => ({
        ...provided,
        width: 120,
        height: 32,
        fontSize: 12,
        display: "inline-block"
    }),
    control: (provided) => ({
        ...provided,
        minHeight: 32,
        height: 32,
        lineHeight: 32,
        borderColor: "#3D393534",
        boxShadow: "unset",
        "&:hover": {
            borderColor: "#3D393534"
        }
    }),
    valueContainer: (provided) => ({
        ...provided,
        height: 32
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        padding: "2px 6px 2px 2px",
        width: 24
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        height: 32,
        padding: 0
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        alignSelf: "unset"
    })
};

export default customStyles;
