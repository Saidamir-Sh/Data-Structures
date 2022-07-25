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