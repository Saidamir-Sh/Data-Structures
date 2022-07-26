/*
Given a pointer to the head of a linked list, insert a new node before the head. The value in the new node should point to and the value should be replaced with a given value. Return a reference to the new head of the list. The head pointer given may be null meaning that the initial list is empty.
*/
function insertNodeAtHead(head, data) {
    
    if(head == null){
          return new SinglyLinkedListNode(data);
      }
      var node = new SinglyLinkedListNode(data);
      node.next = head;
      return node;
  }

  /*
  Reversing Linkeded List
  */

  function reversePrint(llist) {
    // Write your code here
  if (llist !== null) {
    reversePrint(llist.next);s
    console.log(llist.data)
  }
}

function reverse(llist) {
    // Write your code here
    let prev = null
    let current = llist
    let next = null
    
    if(current === null) {
        return null
    }
    
    while(current !== null) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    
    llist = prev
    return llist
}
