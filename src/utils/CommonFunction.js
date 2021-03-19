export const format = (type, date, time) => {
    let datefm = new Date(date);

    let day = "" + datefm.getDate();
    let month = "" + (datefm.getMonth() + 1);
    let year = "" + datefm.getFullYear();

    if (day.length < 2) day = "0" + day;
    if (month.length < 2) month = "0" + month;

    if (time) {
        let hour = "" + datefm.getHours();
        let minutes = "" + datefm.getMinutes();
        let seconds = "" + datefm.getSeconds();

        if (hour.length < 2) hour = "0" + hour;
        if (minutes.length < 2) minutes = "0" + minutes;
        if (seconds.length < 2) seconds = "0" + seconds;

        let date = [year, month, day].join("-");
        date = date + " " + [hour, minutes, seconds].join(":");
        return date;
    }

    if (type === "월간") {
        return [year, month].join("-");
    }

    return [year, month, day].join("-");
};

export const enableScroll = () => (document.body.style.overflowY = "auto");
export const disableScroll = () => (document.body.style.overflowY = "hidden");
