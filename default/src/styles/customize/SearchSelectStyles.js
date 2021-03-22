const customStyles = {
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#039BE5" : "#ffffff",
        color: "#333333",
        "&:hover": {
            backgroundColor: state.isSelected ? "#039BE5" : "#039be533"
        },
        height: 40,
        padding: "12px 10px"
    }),
    container: (provided) => ({
        ...provided,
        width: 120,
        height: 40,
        fontSize: 12
    }),
    control: (provided) => ({
        ...provided,
        height: 40,
        lineHeight: 40,
        borderColor: "#3D393534",
        boxShadow: "unset",
        "&:hover": {
            borderColor: "#3D393534"
        }
    }),
    valueContainer: (provided) => ({
        ...provided,
        height: 40
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        padding: "2px 6px 2px 2px",
        width: 24
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        height: 40,
        padding: 0
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        alignSelf: "unset"
    })
};

export default customStyles;
