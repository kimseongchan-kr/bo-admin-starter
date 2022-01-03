import React from "react";
import PropTypes from "prop-types";

import useStyles from "styles/customize/components/ModalFormStyles";
import SingleTextField from "common/table/SingleTextField";
import Select from "common/table/SingleSelect";
import RadioButton from "common/table/RadioButton";
import CheckBox from "common/table/CheckBox";
import Editor from "common/editor";

const options = [
    { value: "", label: "디저트를 선택해주세요" },
    { value: "Cupcake", label: "Cupcake" },
    { value: "Cookie", label: "Cookie" },
    { value: "Snack", label: "Snack" }
];

function UploadForm({ newData, category, ingredients, contents, setContents, handleChange, handleSelect, handleIngredients }) {
    const classes = useStyles();

    return (
        <>
            <table className={classes.table}>
                <colgroup>
                    <col width="20%" />
                    <col width="80%" />
                </colgroup>
                <tbody>
                    <tr>
                        <th>디저트명</th>
                        <td>
                            <SingleTextField inputType="text" name="name" value={newData.name} handleChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>카테고리</th>
                        <td className={classes.selectContent}>
                            <Select name="category" value={category} options={options} handleSelect={handleSelect} />
                        </td>
                    </tr>
                    <tr>
                        <th>칼로리</th>
                        <td>
                            <SingleTextField inputType="number" name="calories" value={newData.calories} handleChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>판매여부</th>
                        <td>
                            <RadioButton
                                name="useYn"
                                value={newData.useYn}
                                options={[
                                    { value: "Y", label: "판매" },
                                    { value: "N", label: "미판매" }
                                ]}
                                handleChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>재료</th>
                        <td>
                            <CheckBox
                                options={[
                                    { name: "ingredients1", value: ingredients.ingredients1, label: "Chocolate" },
                                    { name: "ingredients2", value: ingredients.ingredients2, label: "Strawberry" },
                                    { name: "ingredients3", value: ingredients.ingredients3, label: "Cheese" }
                                ]}
                                handleChange={handleIngredients}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={classes.table}>
                <tbody>
                    <tr>
                        <th>디저트 설명</th>
                    </tr>
                    <tr className={classes.editorRow}>
                        <td>
                            <Editor contents={contents} setContents={setContents} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

UploadForm.propTypes = {
    newData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        useYn: PropTypes.string.isRequired
    }).isRequired,
    category: PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired,
    ingredients: PropTypes.shape({
        ingredients1: PropTypes.bool.isRequired,
        ingredients2: PropTypes.bool.isRequired,
        ingredients3: PropTypes.bool.isRequired
    }).isRequired,
    contents: PropTypes.string.isRequired,
    setContents: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired,
    handleIngredients: PropTypes.func.isRequired
};

export default UploadForm;
