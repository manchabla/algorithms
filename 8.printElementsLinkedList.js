

function printLinkedList(head) {
    if (head) {
        console.log(head.data)
        printLinkedList(head.next)
    }
}