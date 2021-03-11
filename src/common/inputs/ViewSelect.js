import React from "react";
import Select from "react-select";
import customStyles from "styles/customize/TableSelectStyles";

const options = [
    { value: "Y", label: "활성화" },
    { value: "N", label: "비활성화" }
];

export default function UseSelect({ viewYn, handleSelect }) {
    const label = viewYn === "Y" ? "활성화" : "비활성화";

    return <Select isClearable={false} isSearchable={false} styles={customStyles} defaultValue={{ value: viewYn, label: label }} options={options} onChange={(e) => handleSelect("view", e.value)} />;
}
