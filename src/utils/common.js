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

export const format = (type, date) => {
    let datefm = new Date(date);

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

    if (type === "월간") {
        return [year, month].join("-");
    }

    if (type === "time") {
        let date = [year, month, day].join("-");
        return date + " " + [hour, minutes, seconds].join(":");
    }

    if (type === "excel") {
        return [year, month, day, hour, minutes, seconds].join("");
    }

    return [year, month, day].join("-");
};

export const calculateDate = (today, month) => {
    let caltoday = new Date(today);
    caltoday.setMonth(caltoday.getMonth() - month);

    if (today.getDate() !== caltoday.getDate()) {
        caltoday.setDate(0);
    }

    return caltoday;
};

export const handleDateClick = (name, months) => {
    const curDate = new Date();
    let prevDate = "";
    let dateObj = {};

    if (name === "today") {
        dateObj.startDate = format("일간", curDate);
        dateObj.endDate = format("일간", curDate);
        return dateObj;
    } else if (name === "week") {
        prevDate = new Date(curDate).setDate(curDate.getDate() - 7);
    } else if (name === "month") {
        prevDate = calculateDate(curDate, months);
    } else if (name === "reset") {
        dateObj.startDate = null;
        dateObj.endDate = null;
        return dateObj;
    }

    if (name !== "today" && name !== "reset") {
        dateObj.startDate = format("일간", prevDate);
        dateObj.endDate = format("일간", curDate);
        return dateObj;
    }
};

export const enableScroll = () => (document.body.style.overflowY = "auto");
export const disableScroll = () => (document.body.style.overflowY = "hidden");

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
