function bfs(head) {

    const q = [head]

    while (q.length) {

        const curr = q.shift()
        if(!curr) {
            continue
        }

        //search
        if(curr.value === needle) {
            return true
        }

        if(curr.left){
            q.push(curr.left)
        }
        if(curr.left){
            q.push(curr.right)
        }
    }

    return false

}