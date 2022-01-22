/* ---------------------------------------- QUEUE !!!--------------------------------------- */
function Queue () {
    collection = []

    //this method logs an array
    this.print = function() {
        console.log(collection)
    }

    //this method adds an element to the last of the array
    this.enqueue = function(element) {
        return collection.push(element)
    }

    // this method removes the first element of the array
    this.dequeue = function(element) {
        return collection.shift(element)
    }

    // this method returns element that given index
    this.front = function() {
        return collection[0]
    }

    // this method how many items in array
    this.size = function() {
        return collection.length
    }

    // this method will check whether array empty or not
    this.isEmpty = function() {
        return (collection.length === 0)
    }
}


// Priority Queue

function PriorityQueue() {

    let collection = []

    this.printCollection = function() {
        (console.log(collection))
    }

    this.enqueue = function (element) {
        if(this.isEmpty()) {
            collection.push(element)
        } else {
            let added = false
            for(let i = 0; i < collection.length; i++) {
                if(element[1] < collection[i][1]) {
                    collection.splice(i, 0, element)
                    added = true
                    break
                }
            }
            if(!added) {
                collection.push(element)
            }
        }
    }
}