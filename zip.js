function isMinnesotaZip(code) {
    //All MN zip are between these: 55001 and 56763
    if (code >= 55001 && code <=56763) {
        return true
    } else {
        return false
    }
    //or  return code >= 55001 && code <= 56763;
}


console.log(isMinnesotaZip('55403'))
console.log(isMinnesotaZip('56763'))
console.log(isMinnesotaZip('55891'))
console.log(isMinnesotaZip('534234132412'))
console.log(isMinnesotaZip('554'))
