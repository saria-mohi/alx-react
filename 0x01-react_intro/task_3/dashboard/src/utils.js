// Create a function named getFullYear that will return the current year
const getFullYear = () => {
    let year =new Date().getFullYear();
    return year;
}

//Create a function named getFooterCopy:
//It accepts one argument isIndex(boolean). When true, the function should return Holberton School. When false, the function should return Holberton School main dashboard

const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return "Holberton School";
    } else {
        return "Holberton School main dashboard";
    }
}
// Create a function named getLatestNotification that returns the following string: <strong>Urgent requirement</strong> - complete by EOD
const getLatestNotification = () => {
    return "<strong>Urgent requirement</strong> - complete by EOD";
}  


module.exports = {
	getFooterCopy,
	getFullYear,
    getLatestNotification
};
