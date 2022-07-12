//🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 
/*----------------------------------- STACKS ----------------------------------- !!! */
// Dynamic DS
// Abstract Data type   
// functions : push(adds to the last), pop(removes last element), peek, length

var letters = [];

var word = 'racecar';
var rword = '';

//put letters of word into stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

//pop off the stack in reverse order || last item in the array  
for (var i = 0; i < word.length; i++) {
    rword += letters.pop(); // pops off each letter of the word and adds to rword var while looping
}

//checking  if it is a  palindrome or not
if(rword === word) {
    console.log(word + ' is palindrome')
} else {
    console.log(word + ' is not a palindrome')
}
 //🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 
/* ---------------------------------------- SETS !!!--------------------------------------- */
function mySet () {
    // var collection will hold the collection
    var collection = [];

    //this method will check the presence of the element and returns true or false 
    this.has = function(element) {
        return  (collection.indexOf(element) !== -1); // indexOf returns first index of specified value, if not found returns -1.
    };

    //this method returns all values in the set
    this.values = function() {
        return collection
    }

    //this method will add and elemnt to the set
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }

    //this method will remove an element from set
    this.remove = function(element) {
        if(this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1); // splice method adds and/or removes item from element. splice(index, howMany, item1, item2)
            return true;
        }
        return false;
    }

    //this method will return the size of the collection
    this.size = function () {
        return collection.length;   // in ES6 size is not a method it is property
    }
            // These methods not in implementions of ES6
       //👇  👇  👇  👇  👇  👇  👇  👇   👇  👇  👇  👇  👇  👇  👇  👇   
     
    //this method will return the union of the two sets
    this.union = function(otherSet) {
        var unionSet = new mySet(); // new empty Set obj
        var firstSet = this.values();
        var secondSet = otherSet.values(); // values of accepting set in params
        firstSet.forEach(function(e) {
            unionSet.add(e); // looping through set values and adding 'em into new UnionSet
        });
        secondSet.forEach(function(e) {
            unionSet.add(e);
        });
        return unionSet
    }

    //this method will return the common elements of two sets
    this.intersection = function (anotherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if(otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    //this method will return the differences of two sets as a new set
    this.difference = function (otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if(!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    //this method will test if the set is  a subset of a different set
    this.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        }); 
    }


}

 //🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 
/* ---------------------------------------- QUEUE !!!--------------------------------------- */
function Queue () {
    collection = [];
    
    //this method logs an array
    this.print = function() {
        console.log(collection);
    }

    //this method adds an element to the last of the array
    this.enqueue = function(element) {
        return collection.push(element);
    }

    //this method removes first element of the array
    this.dequeue = function (element) {
        return collection.shift(element);
    }

    //this method returns the element that given index
    this.front = function() {
        return collection[0];
    }

    //this method shows how many items  in array
    this.size = function() {
        return collection.length;
    }

    //this method will check whether array empty or not
    this.isEmpty = function () {
        return (collection.length === 0);
    }
}
                 // Priority Queue
       //👇  👇  👇  👇  👇  👇  👇  👇   👇  👇  👇  👇  👇  👇  👇  👇  
       function PriorityQueue() {
           var collection = [];
           
           this.printCollection = function() {
               (console.log(collection));
           }

           this.enqueue = function (element) {
               if (this.isEmpty()) {
                   collection.push(element);
               } else {
                   var added = false;
                   for (var i = 0; i<collection.length; i++) {
                       if (element[1] < collection[i][1]) { // checking properties
                            collection.splice(i, 0, element);
                            added = true;
                            break;
                       }
                   }
                   if (!added) {
                       collection.push(element);
                   }
               }
           }
       }

 //🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 
/* ------------------------------------ BINARY SEARCH TREE (BST) !!!--------------------------------- */

class Node {
    constructor (data, left = null, right = null) { // create a NODE class
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null; // create a root
    }
    /* ADD DATA TO THE NODE TREE */
    add(data) {
    const node = this.root;

    if(node === null) { 
        this.root = new Node(data); // check if node is empty, create a ROOT-NODE or ...
        return;
    } else {
        const searchTree = function(node) { // if node is  not empty execute the searchTree function
            if (data < node.data) {                         //check data is smaller than root-node and left is empty
                if(node.left === null) {                    // if both are correct assign the data as left child
                    node.left = new Node(data); 
                    return;
                } else if (node.left !== null) {            // if node.left is not empty execute searTree function again
                    return searchTree(node.left);                   
                }
            } else if (data > node.data) {
                if(node.right === null) {
                    node.right = new Node(data);            // check data is greater and right empty if both are correct assign as right child 
                    } else if (node.right !== null) {
                    return searchTree(node.right);          // else RECURRENCE
                }
            } else {
                return null;
            }
        }
        return searchTree(node);
    }
    };
    /* FIND MIN */
    findMin() {
        let current = this.root;
        while (current.left !== null) { // it will run until finds smallest left node 
            current = current.left;
        }
        return current.data;
    };
    /* FIND MAX */
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    };
    /* isPresent (FIND) */
    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left
            } else {
                current = current.right;
            }
        }
        return false;
    }
    /* REMOVE */
    remove (data) {
        const removeNode = function(node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                //node has no children
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node has no left child 
                if(node.left == null) {
                    return node.right;
                }
                // node has no right child
                if (node.right == null) {
                    return node.left;
                }
                // node has two children
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left
                }
                node.data = tempNode.data;
                node.right = removNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
                            // TRAVERSAL & HEIGHT
       //👇  👇  👇  👇  👇  👇  👇  👇   👇  👇  👇  👇  👇  👇  👇  👇 
       isBalanced() {
           return (this.findMinHeight() >= this.findMaxHeight() - 1);
       }
       findMinHeight(node = this.root) {
           if(node == null) {
               return -1;
           }
           let left = this.findMinHeight(node.left);
           let right = this.findMinHeight(node.right);
           if(left < right) {
               return left + 1;
           } else {
               return right + 1;
           };
       }
       findMaxHeight (node = this.root) {
           if(node == null) {
               return -1;
           }
           let left = this.findMaxHeight(node.left);
           let right = this.findMaxHeight(node.right);
           if(left > right) {
               return left + 1;
           } else {
               return right + 1;
           };
       } 
       inOrder() {
           if(this.root == null) {
               return null;
           } else {
               var result = new Array();
               function traverseInOrder (node) {
                   node.left && traverseInOrder(node.left);
                   result.push(node.data);
                   node.right && traverseInOrder(node.right);   
               }
               traverseInOrder(this.root);
               return result;
           }
       }
       preOrder() {
        if(this.root == null) {
            return null;
        } else {
            var result = new Array();
            function traversePreOrder (node) {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);   
            }
            traversePreOrder(this.root);
            return result;
        }
    }
    postOrder() {
        if(this.root == null) {
            return null;
        } else {
            var result = new Array();
            function traversePostOrder (node) {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);   
                result.push(node.data);
            }
            traversePostOrder(this.root);
            return result;
        }
    }
    levelOrder() {
        let result = [];
        let Q = []; 

        if (this.root != null) {
            Q.push(this.root);
            while (Q.length >0) {
                let node = Q.shift();
                result.push(node.data);

                if (node.left != null) {
                    Q.push(node.left);
                }
                if (node.right != null) {
                    Q.push(node.right);
                }
            };
            return result;
        } else {
            return null;
        }
    }    
}


const bst = new BST();
 

console.log(bst.findMinHeight()); // till the node without two children
console.log(bst.findMaxHeight()); // till the last node
console.log(bst.isBalanced()); // difference betweenn MinHeight and MaxHeight should be 0 or 1 in order to be balanced

//🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 
/* ------------------------------------------- HASH TABLES----- !!!--------------------------------- */
var hash =  (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) { 
        hash += string.charCodeAt(i); // take the uniCode for each symbol and add each other
    };
    return hash % max; // divide the total sum of uniCode and take the remainder as a index for the hash table
}
let HashTable = function() {
    let storage = [];
    const storageLimit = 4;
    // PRINTING HASH TABLE
    this.print = function () {
        console.log(storage);
    };
    // ADDING KEY INTO THE HASH TABLE
    this.add = function(key, value) { // take the key and value
        var index = hash(key, storageLimit); // put the key as a string and storageLimit as max into hash function || it gives us a index for a key
        if(storage[index] === undefined) { // check if the index is empty in array 
            storage[index] = [[key, value]]; // and then put the key and value into the given index
        } else {
            var inserted = false ;
            for (var i = 0; i < storage[index].length; i++) { // go through the each index after the storage[index]
                if (storage[index][i][0] === key) {  // if key  already exists 
                    storage[index][i][0] === value;  // update the value 
                    inserted = true;
                }
            }
            if (inserted = false) { // if key does not exists 
                storage[index].push([key, value]); // push the new item to the index (multiple entries to that bucket)
            }
        }
    };
    // REMOVING KEY
    this.remove = function (key) {
        var index = hash(key, storageLimit); // find the index of the key
        if (storage[index].length === 1 && storage[index][0][0] === key) { // check if there is only item in the bucket and the item in that key is same as key that you passed in 
            delete storage[index]; // delete the key in the given index
        } else { // however there is two item in the bucket do the following 
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };
    // LOOKING UP FOR A ITEM
    this.lookup = function (key) {
        var index = hash(key, storageLimit);    // find the index of the key

        if(storage[index] === undefined) { // of there is no key in the hash table return undefined
            return undefined;
        } else { // else go through an elemtn in each bucket
            for (var i = 0; i < storage[index].length; i++) {
                if(storage[index][i][0] === key) { // check if the key is inside the bucket
                    return storage[index][i][1]; // if it is , return to its value;
                }
            }
        }
    };
}
//🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 
/* ------------------------------------------- LINKED LIST !!!--------------------------------------- */
// ** Linked list is a collection of objects called nodes
// Dynamic Data Structure
// Undo functionality
// Browser Cache
// Polynomial addition
// Prioritised job Queues
// Implement other data structures like stacks, trees, queues and graphs
// Efficient Insertions and Deletions
// No random access
// NO waste of memory

function LinkedList() {
    var length = 0;
    var head = null;

    // creating new Node
    var Node = function (element) {
        this.element = element; // info 
        this.next = null; // link
    };

    this.size = function() {
        return length;
    };

    this.head = function() {
        return head;
    };

    this.add = function(element) {
        var node = new Node(element); // create a new empty Node object
        if (head === null) { 
            head = node; // if head is empty(there is no linked list yet), set the element as a head info
        } else {
            var currentNode = head; // start adding from the head node

            while(currentNode.next) {
                currentNode = currentNode.next; // jumping from node to node on list
            }
            currentNode.next = node; // once we get to the last item in the list we set the node 
        }
        length++ ; // and incerement the length;
    };

    this.remove = function(element) {
        var currentNode = head;
        var previousNode;

        if(currentNode.element === element) { // if the element we are trying to remove is equal to the element in the head
            head = currentNode.next;    // set the head nex node;
        } else {
            while (currentNode.element !== element) { // while the el we are removing is not equal to the element in the list 
                previousNode = currentNode;             // set the previous node to the head
                currentNode = currentNode.next          // and keep jumping from node to node untill we find the element;
            }
            previousNode.next = currentNode.next // skip the element we removed and point to the next element (DELETED)
        }
        length-- ; // Decerement the length;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.indexOf = function(element) {
        var currentNode = head; // start from the beginning
        var index = -1;

        while(currentNode) { //while it is not a null
            index++;         //index is equal to 0 for head
            if(currentNode.element === element) { // if the head info is equal to the element return index of ZERO 
                return index;
            }
            currentNode = currentNode.next; // if it's not, keep hopping from the node and restart the while loop;
        }
        return -1; // if the element is not in the list return  negative  one 
    };

    this.elementAt = function(index) {
        var currentNode = head;
        var count = 0;
 
        while(count < index) { // while we havent found the index we are searching for  increment count
            count++;
            currentNode = currentNode.next; // jumping from next node to node untill index is equal to the index
        }
        return currentNode.element;
    };

    this.addAt = function(index, element) {
        var node = new Node(element);

        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if(index > length) {
            return false; // if we pass a index that more than the length of the linked list return false
        } 
        if(index === 0) {
             node.next = currentNode; // if we trying to add a element to the head do the following
             head = node;
        } else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode; // hopping from node to node
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node; 
        }
        length++
    };

    this.removeAt = function(index) {
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if (index < 0 || index >= length) {
            return null;
        }
        if (index === 0) {
            head = currentNode.next; // if the index that we passed in equals to the head, set the next node as head
        } else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    }
}

//🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 
/* ------------------------------------- TRIE DATA STRUCTURE !!!----------------------------------- */
// used for storing character (like validating a word in a dictionary)
// prefix tree
// stores a data in steps (each step is node in trie)

let Node = function() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function() {
        this.end = true;
    };
    this.isEnd = function() {
        return this.end;
    };
}

let Trie = function() {
    this.root = new Node(); 

    this.add = function(input, node = this.root) { // recusrive function (repeatable)
        if(input.length === 0) { // if we are at the end of word (input we passed in) return end = true
            node.setEnd();
            return;
        } else if (!node.keys.has(input[0])) { // if the beginning of the node doesnt have the first letter if the word we passed in 
           node.keys.set(input[0], new Node()); // create a new node with first letter of the input word
           return this.add(input.substr(1), node.keys.get(input[0])); // recusrive, it again calls the function add and passes each letter of the input
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        }
    };

    this.isWord = function(word) {
        let node = this.root;
        while (word.length > 1) { // while the there is one char at least in word, do the following ... 
            if(!node.keys.has(word[0])) { //  check if the first letter doesnt exists in the trie return false
                return false;
            } else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    };

    this.print = function() {
        let words = new Array();
        let search = function (node, string) {
            if(node.keys.size != 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                };
                if(node.isEnd) {
                    words.push(string);
                };
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            }
        }
        search(this.root, new String());
        return words.length > 0 ? words:null;
    };
};

//🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 
/* ------------------------------------- HEAP DATA STRUCTURE !!!----------------------------------- */
// it has some similarity with binary search tree but the order is little different (MAxHeap & MinHeap)
// each node has at least 2 child nodes
// left child : i * 2       \
// right child: i * 2 +1     -- index starts from 1 
// parent: i / 2            /

let MinHeap = function () {
    let heap = [null];

    this.insert = function (num) {
        heap.push(num); // push that number onto the heap  
        if (heap.length > 2) { // if there is more than one item in the heap 
            let idx = heap.length - 1; // we are finding last index in the heap
            while(heap[idx] < heap[Math.floor(idx/2)]) { // while the last item in the array less than parent node (i/2)
                if(idx >= 1) { // then if it reaches the highest root in the node 
                    [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]]; // swaping them ES6 feature (destructuring)
                    if(Math.floor(idx/2) > 1) { // parent node is more than the root node
                        idx = Math.floor(idx/2) // index is equal to parent node 
                    } else { // keep switching the node to its parent node while loop as long as it is smaller than parent node
                        break;  // else break the loop
                    }
                }
            };
        };
    };

    this.remove = function() {
        let smallest = heap[1]; // first node
        if(heap.length > 2) {  //  if we have more than one element in the heap
            heap[1] = heap[heap.length - 1];  // first node is equal to the last in elemnt in the heap
            heap.splice(heap.length - 1);    //  removes the last elemnt place after we remove it first node
            if (heap.length == 3) {         //   if there is only two numbers in the tree
                if(heap[1] > heap[2]) {    //    if  1 is bigger than 2 swap them 
                    [heap[1], heap[2]] = [heap[2], heap[1]];    //  Destructuring
                }
                return smallest;
            } 
            let i = 1;
            let left = 2 * i;
            let right = 2 * i +1;
            while(heap[i] >= heap[left] || heap[i] >= heap[right]) {
                if(heap[left] < heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * i;
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                }
                left = 2 * i;
                right = 2 * i + 1;
                if (heap[left] == undefined || heap[right] == undefined) {
                    break;
                }
            }
        } else if (heap.length == 2) { // if there is only one element in tree
            heap.splice(1, 1); // cut off the left element
        } else {
            return null;
        }
        return smallest
    };

    this.sort = function() {
        let result = new Array();
        while (heap.length > 1) {
            result.push(this.remove()); // remove the top element in the heap , and push that element into the reesult
        }
        return result;
    };
}

//🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 🔻 
/* ------------------------------------- GRAPH DATA STRUCTURE !!!----------------------------------- */
// USES of GRAPHS >> Navigation system, social networks, and other more
// Direct Graphs and Undirect Grapphs
// nodes/vertices ... edges - connection between them 
/*
            ADJACENY LIST 
              A---B---C
            Node A: node B
            Node B: node A, C
            Node C: node B
    
    var undirectedGraph = {
        NodeA: ['NodeB'],
        NodeB: ['NodeA', "NodeC"],
        NodeC: ["NodeB"]
    }

            ADJACENY MATRIX
            2D array with same number of the element

    var adjMat = [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0]
    ]

            INCIDENCE MATRIX
    columns = edges , rows = nodes/vertices 
*/ 