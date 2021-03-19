import React from "react";
import Select from "react-select";
import styles from "styles/customize/TableSelectStyles";

const options = [
    { value: "Y", label: "사용" },
    { value: "N", label: "미사용" }
];

export default function UseSelect({ useYn, handleSelect }) {
    const label = useYn === "Y" ? "사용" : "미사용";

    return <Select isClearable={false} isSearchable={false} styles={styles} defaultValue={{ value: useYn, label: label }} options={options} onChange={(e) => handleSelect("use", e.value)} />;
}
