import { saveAs } from "file-saver";

export const queryToString = (query) => {
    const keys = Object.keys(query);

    let result = "?";
    keys.forEach((q) => {
        if (query[q]) {
            result += `${q}=${encodeURIComponent(query[q])}&`;
        }
    });

    result = result.substr(0, result.length - 1);
    return result;
};

export const queryToObject = (search) => {
    let params = {};
    let keywords = search.split("?");

    keywords = keywords[1];
    keywords = keywords && keywords.split("&");

    if (keywords) {
        keywords.forEach((variable) => {
            let pair = variable.split("=");
            params[pair[0]] = decodeURIComponent(pair[1]);
        });
    }

    return params;
};

// 현재 메뉴에서 사용되는 검색 필터 리스트 구하기
// searchStates : 현재 searchSlice에 있는 모든 값
// searchParams : 현재 메뉴에서 사용할 검색 필터 이름들
export const getCurrentSearchParams = (searchStates, searchParams) => {
    let currentList = {};

    Object.keys(searchStates).map((key) => {
        if (searchParams[key]) {
            currentList[key] = searchStates[key];
        }
        return currentList;
    });

    // 현재 메뉴에서 사용할 검색 필터 object
    return currentList;
};

// 날짜 형식 변환
export const format = (type, date) => {
    const datefm = new Date(date);
    let formattedDate = "";

    let day = "" + datefm.getDate();
    let month = "" + (datefm.getMonth() + 1);
    let year = "" + datefm.getFullYear();

    if (day.length < 2) day = "0" + day;
    if (month.length < 2) month = "0" + month;

    let hour = "" + datefm.getHours();
    let minutes = "" + datefm.getMinutes();
    let seconds = "" + datefm.getSeconds();

    if (hour.length < 2) hour = "0" + hour;
    if (minutes.length < 2) minutes = "0" + minutes;
    if (seconds.length < 2) seconds = "0" + seconds;

    if (type === "monthly") {
        formattedDate = [year, month].join("-");
    } else if (type === "time") {
        formattedDate = [year, month, day].join("-") + " " + [hour, minutes, seconds].join(":");
    } else if (type === "excel") {
        formattedDate = [year, month, day, hour, minutes, seconds].join("");
    } else {
        formattedDate = [year, month, day].join("-");
    }

    return formattedDate;
};

// 날짜 계산
export const calculateDate = (today, month) => {
    let caltoday = new Date(today);
    caltoday.setMonth(caltoday.getMonth() - month);

    if (today.getDate() !== caltoday.getDate()) {
        caltoday.setDate(0);
    }

    return caltoday;
};

// 기간 검색 버튼 클릭 (오늘, 1주일, 1개월, 3개월, 6개월, 기간 초기화)
export const handleDateClick = (name, months) => {
    const curDate = new Date();
    let prevDate = "";
    let dateObj = { startDate: null, endDate: null };

    if (name === "today") {
        dateObj.startDate = format("daily", curDate);
        dateObj.endDate = format("daily", curDate);
    } else if (name === "week") {
        prevDate = new Date(curDate).setDate(curDate.getDate() - 7);
    } else if (name === "month") {
        prevDate = calculateDate(curDate, months);
    } else if (name === "reset") {
        dateObj.startDate = null;
        dateObj.endDate = null;
    }

    if (name === "week" || name === "month") {
        dateObj.startDate = format("daily", prevDate);
        dateObj.endDate = format("daily", curDate);
    }

    return dateObj;
};

export const isEmpty = (value) => {
    if (
        value === "" ||
        value === null ||
        value === "null" ||
        value === undefined ||
        value === "undefined" ||
        value === "INVALID" ||
        (value !== null && Array.isArray(value) && value.length === 0) ||
        (value !== null && typeof value === "object" && Object.keys(value).length === 0)
    ) {
        return true;
    } else {
        return false;
    }
};

// Form 에서 사용하는 메시지들
export const getMessageText = (type) => {
    let message = "";
    if (type === "delete") {
        message = "이미지를 삭제하시겠습니까?";
    } else if (type === "editCancel") {
        message = "목록으로 돌아가시겠습니까? 입력된 정보는 수정되지 않습니다.";
    } else if (type === "uploadCancel") {
        message = "목록으로 돌아가시겠습니까? 입력된 정보는 저장되지 않습니다.";
    } else if (type === "reset") {
        message = "입력한 내용을 삭제하시겠습니까?";
    } else if (type === "image download" || type === "excel download") {
        message = "파일 다운로드 요청 중 문제가 발생하였습니다. 잠시 후 다시 시도해주세요.";
    } else if (type === "fail") {
        message = "잘못된 요청입니다.";
    } else if (type === "submit") {
        message = "입력한 정보를 등록하시겠습니까?";
    } else if (type === "editSubmit") {
        message = "정보를 수정하시겠습니까?";
    } else if (type === "no image") {
        message = "하나 이상의 이미지 파일을 선택해주세요";
    }

    return message;
};

// 이미지 URL로부터 이미지 파일을 가지고 와서 Base 64 String으로 변환하기
const getBase64Image = (imgUrl) => {
    return new Promise((resolve, reject) => {
        let img = new Image();

        img.onload = () => {
            let canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height);

            let dataURL = canvas.toDataURL("image/jpeg").replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
            resolve(dataURL); // return the base64 string
        };
        img.onerror = () => reject(imgUrl);

        img.setAttribute("crossOrigin", "anonymous");
        img.src = imgUrl;
    });
};

// 이미지 Zip File 다운로드하기
export const handleZipDownload = async (images) => {
    let zip = require("jszip")();
    let message = "";

    for (let i in images) {
        let errorMessage = "";
        if (images[i]) {
            // File Extension 확인 (.jpg, .png)
            let extension = ".jpg";
            if (images[i].img_detail.endsWith(".jpg")) {
                extension = ".jpg";
            } else if (images[i].img_detail.endsWith(".png")) {
                extension = ".png";
            }

            // 이미지 주소를 넘기고 base 64 string 값을 zip 파일에 추가하기
            await getBase64Image(images[i].img_detail)
                .then((imgData) => {
                    zip.file(`사진_${parseInt(i) + 1}${extension}`, imgData, { base64: true });
                })
                .catch((err) => {
                    console.log("Error Downloading the File:: ", err);
                    errorMessage = `${parseInt(i) + 1}번째 사진 다운로드에 실패하였습니다.`;
                });
            message += errorMessage;
        }
    }

    // 생성한 Zip 파일 다운로드
    zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "이미지_파일.zip");
    });

    return message;
};
