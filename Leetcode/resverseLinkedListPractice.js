const reverseList = (head) => {

    const previous = null
    const current = head

    while(current) {

        const next = current.next
        current.next = previous
        previous = current
        current = current.next

    }

    return previous

}