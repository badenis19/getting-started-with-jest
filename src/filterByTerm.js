function filterByTerm(inputArr, searchTerm) {
    if (!inputArr.length) throw Error("inputArr cannot be empty"); 
    if (searchTerm == "") {
        return "searchTerm cannot be empty";
    } else {
        const regex = new RegExp(searchTerm, "i");
        return inputArr.filter(function (arrayElement) {
            return arrayElement.url.match(regex);
        });
    }
}

module.exports = filterByTerm;