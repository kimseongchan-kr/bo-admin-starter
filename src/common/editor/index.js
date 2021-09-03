import React, { useMemo } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const useStyles = makeStyles(() => ({
    editorContainer: {
        width: "100%",
        height: 441,
        "& .ql-toolbar.ql-snow + .ql-container.ql-snow": {
            height: 400
        },
        " & .ql-snow .ql-tooltip": {
            zIndex: 9999,
            transform: "translate(100px, 10px)"
        }
    }
}));

export default function Editor({ contents, setContents }) {
    const classes = useStyles();
    const quillRef = React.useRef(null);

    const handleChange = (value) => {
        setContents(value);
    };

    const imageCallBack = () => {
        // 이미지 업로드 참고: https://github.com/quilljs/quill/issues/1400

        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
        input.onchange = async function () {
            const file = input.files ? input.files[0] : null;
            console.log("custom 이미지 업로드", file);
            if (file) {
                // 서버로 이미지를 업로드 Example
                const formData = new FormData();
                formData.append("files", file);

                let headers = {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data"
                };

                // 서버로 이미지를 upload한 다음
                // 이미지의 URL을 에디터에 삽입
                await axios
                    .post("http://localhost:3000/upload", formData, { headers })
                    .then((res) => {
                        const quill = quillRef.current.getEditor();
                        const range = quill.getSelection(true);
                        let path = res.data.result;
                        let imageSrc = "http://localhost:3000/" + path; //이미지의 URL
                        quill.insertEmbed(range.index, "image", imageSrc, "user");
                    })
                    .catch((err) => {
                        alert("에러가 발생했습니다.");
                        console.log("error:: ", err);
                    });
            } else {
                alert("이미지를 선택해주세요");
                return;
            }
        };
    };

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ size: ["small", false, "large", "huge"] }, { color: [] }],
                    [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
                    ["link", "image"],
                    ["clean"]
                ],
                handlers: {
                    image: imageCallBack
                }
            },
            clipboard: { matchVisual: false }
        }),
        []
    );

    const formats = ["bold", "italic", "underline", "strike", "blockquote", "size", "color", "list", "link", "image", "align"];

    return (
        <div className={classes.editorContainer}>
            <ReactQuill ref={quillRef} placeholder="내용을 입력해주세요." theme="snow" value={contents} onChange={handleChange} formats={formats} modules={modules} />
        </div>
    );
}
