export const formatDate = (date) => {
    let month = date.getMonth() + 1
    let year = date.getFullYear();
    let day = date.getDate()

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    return `${day}/${month}/${year}`;
}