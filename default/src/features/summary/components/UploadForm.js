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

function UploadForm({ control, errors }) {
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
                                defaultValue={{ value: "", label: "카테고리를 선택해주세요" }}
                                control={control}
                                options={[
                                    { value: "", label: "카테고리를 선택해주세요" },
                                    { value: "Cupcake", label: "Cupcake" },
                                    { value: "Cookie", label: "Cookie" }
                                ]}
                            />
                            {errors.category && <ErrorMessage text="카테고리를 선택해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>디저트명</th>
                        <td>
                            <Input inputType="text" name="name" defaultValue="" fullWidth control={control} />
                            {errors.name && <ErrorMessage text="디저트명을 입력해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>색상</th>
                        <td>
                            <Input inputType="text" name="color" defaultValue="" control={control} />
                            {errors.color && <ErrorMessage text="색상을 입력해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>수량</th>
                        <td>
                            <Input inputType="number" name="quantity" defaultValue="" control={control} />
                            {errors.quantity && <ErrorMessage text="수량을 입력해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>디저트 소개</th>
                        <td>
                            <Input inputType="text" name="description" defaultValue="" multiline rows={10} control={control} />
                            {errors.description && <ErrorMessage text="디저트 소개를 입력해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>재료 선택</th>
                        <td>
                            <CheckBox
                                options={[
                                    { defaultValue: false, name: "ingredients_1", label: "chocolate" },
                                    { defaultValue: false, name: "ingredients_2", label: "strawberry" },
                                    { defaultValue: false, name: "ingredients_3", label: "cheese" },
                                    { defaultValue: false, name: "ingredients_4", label: "others" }
                                ]}
                                control={control}
                            />
                            {errors.ingredients && <ErrorMessage text="재료를 선택해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>칼로리</th>
                        <td>
                            <Input inputType="number" name="calories" defaultValue="" control={control} />
                            {errors.calories && <ErrorMessage text="칼로리를 입력해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>지방</th>
                        <td>
                            <Input inputType="number" name="fat" defaultValue="" control={control} />
                            {errors.fat && <ErrorMessage text=" 지방을 입력해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>프로틴</th>
                        <td>
                            <Input inputType="number" name="protein" defaultValue="" control={control} />
                            {errors.protein && <ErrorMessage text="프로틴을 입력해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>탄수화물</th>
                        <td>
                            <Input inputType="number" name="carbs" defaultValue="" control={control} />
                            {errors.carbs && <ErrorMessage text="탄수화물을 입력해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>노출 여부</th>
                        <td>
                            <RadioButton name="viewYn" defaultValue="" control={control} options={tableSelectOptions.viewYn} />
                            {errors.viewYn && <ErrorMessage text="노출 여부를 선택해주세요." />}
                        </td>
                    </tr>
                    <tr>
                        <th>판매 여부</th>
                        <td>
                            <RadioButton name="useYn" defaultValue="" control={control} options={tableSelectOptions.useYn} />
                            {errors.useYn && <ErrorMessage text="판매 여부를 선택해주세요." />}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

UploadForm.propTypes = {
    control: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default UploadForm;
