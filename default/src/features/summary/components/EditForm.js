import React from "react";
import PropTypes from "prop-types";

import useStyles from "styles/customize/table/DetailTableStyles";
import Heading from "layout/page/Heading";
import Input from "common/form/Input";
import FormSelect from "common/form/Select";
import CheckBox from "common/form/CheckBox";
import RadioButton from "common/form/RadioButton";
import ErrorMessage from "common/form/ErrorMessage";

import { tableSelectOptions } from "components/Data";

function EditForm({ control, data, errors }) {
    const classes = useStyles();

    return (
        <div className={classes.tableContainer}>
            <Heading type="default" text="디저트 정보 입력" />
            <table className={classes.table}>
                <colgroup>
                    <col width="20%" />
                    <col width="80%" />
                </colgroup>
                <tbody>
                    <tr>
                        <th>카테고리</th>
                        <td>
                            <FormSelect
                                name="category"
                                defaultValue={{ value: data?.category || "", label: data?.category || "카테고리를 선택해주세요" }}
                                control={control}
                                options={[
                                    { value: "", label: "카테고리를 선택해주세요" },
                                    { value: "cupcake", label: "Cupcake" },
                                    { value: "cookie", label: "Cookie" }
                                ]}
                            />
                            {errors.category && <ErrorMessage text="카테고리를 선택해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>디저트명</th>
                        <td>
                            <Input inputType="text" name="name" defaultValue={data?.name || ""} fullWidth control={control} />
                            {errors.name && <ErrorMessage text="디저트명을 입력해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>수량</th>
                        <td>
                            <Input inputType="number" name="quantity" defaultValue={data?.quantity || ""} control={control} />
                            {errors.quantity && <ErrorMessage text="수량을 입력해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>디저트 소개</th>
                        <td>
                            <Input inputType="text" name="description" defaultValue={data?.description || ""} multiline rows={10} control={control} />
                            {errors.description && <ErrorMessage text="디저트 소개를 입력해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>재료 선택</th>
                        <td>
                            <CheckBox
                                options={[
                                    { defaultValue: data?.ingredients.includes("chocolate"), name: "ingredients_1", label: "Chocolate" },
                                    { defaultValue: data?.ingredients.includes("strawberry"), name: "ingredients_2", label: "Strawberry" },
                                    { defaultValue: data?.ingredients.includes("cheese"), name: "ingredients_3", label: "Cheese" },
                                    { defaultValue: data?.ingredients.includes("others"), name: "ingredients_4", label: "Others" }
                                ]}
                                control={control}
                            />
                            {errors.ingredients && <ErrorMessage text="재료를 선택해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>판매 여부</th>
                        <td>
                            <RadioButton name="useYn" defaultValue={data?.useYn || "Y"} control={control} options={tableSelectOptions.useYn} />
                            {errors.useYn && <ErrorMessage text="판매 여부를 선택해주세요." />}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

EditForm.propTypes = {
    control: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default EditForm;
