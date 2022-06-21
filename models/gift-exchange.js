const { BadRequestError } = require("../utils/errors");
class giftExchange {

    static  pairs (names) {
        let namesCopy = names
        let randomName = [];
        if (names.length % 2 != 0) {
            throw new Error(BadRequestError); 
        }
        while (namesCopy.length != 0){
            let curr = Math.floor(Math.random() * namesCopy.length);
            let tempArr = [namesCopy[curr]]
            namesCopy.splice(curr, 1)
            curr = Math.floor(Math.random() * namesCopy.length);
            tempArr.push(namesCopy[curr])
            namesCopy.splice(curr, 1)
            randomName.push(tempArr)

        }
        return randomName;
    }
    static  traditional (names) {
        let namesCopy = names
        let randomName = [];
        let randomNum = Math.random() * namesCopy.length
        let strings =[""]
        if (names.length % 2 != 0) {
            throw new Error(BadRequestError); 
        }
        while (namesCopy.length != 0){
            let curr = Math.floor(Math.random() * namesCopy.length);
            let currName = namesCopy[curr]
            namesCopy.splice(curr, 1)
            randomName.push(currName)
            
        }
        firstName = randomName[0]
        for (let i=0; i < randomName.length; i++) {
            if (i != randomName.length-1) {
                let currString = randomName[i] + " is giving a gift to " + randomName[i+1]
                strings.push(currString)
            } else {
                let currString = randomName[i] + " is giving a gift to " + firstName
                strings.push(currString)
            }
        }
        return strings
    }
        



}

module.exports = giftExchange