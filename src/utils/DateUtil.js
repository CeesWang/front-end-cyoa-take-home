const LOCALE = 'en-US';
const dateOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true};

export const getTimeNowInDateFormat = () => {
    const jsDate = new Date();
    return jsDate.toISOString().slice(0, 19).replace('T', ' ');
}

// Weekday, Month Day, Year, Hour:Minute am/pm, ex: Friday, May 12, 2023 at 3:32 AM
export const convertDateTimeToString = (dateTime) => {
    const date = new Date(dateTime);
    const timezoneOffset = date.getTimezoneOffset() * 60 * 1000;
    const newDate = new Date(date.getTime() - timezoneOffset);
    const dateString = newDate.toLocaleDateString(LOCALE, dateOptions);
    const timeString = newDate.toLocaleTimeString(LOCALE, timeOptions);
    return `${dateString} at ${timeString}`;
}