// Code your solution here
function findMatching(array, name) {
    //returns all driver matching name.toLowerCase()
    //if no drivers ==> []
    return array.filter((element) => element.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(array, string) {
    return array.filter(element => element.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(array, string) {
    return array.filter(element => element.name === string)
}