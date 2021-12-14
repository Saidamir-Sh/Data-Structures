/* SETS */
/*A set is a data structure that can STORE ANY NUMBER OF UNIQUE VALUE in any order you so wish. 
Set's are different from arrays in the sense that they only allow non-repeated, unique values within them.*/
function mySet () {
    var collection = [1, 2, 3, 4, 5]

    // check the element presence and returnsn true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1) // negative array index returns undefined
    }
    console.log(has(6))

    // returns all elements in the set
    this.value = function(element) {
        return collection
    }
    console.log(value())

    // add element to the set
    this.add = function (element) {
        if(!this.has(element)) {
            collection.push(element)
            return true
        } 
        return false
    }
    console.log(add(6))

    this.remove = function (element) {
        if(this.has(element)) {
            index = collection.indexOf(element)
            collection.splice(index, 1) // splice(start, deleteCount, item1)
            return true
        } 
        return false
    }
    console.log(remove(1))

    


}
mySet()