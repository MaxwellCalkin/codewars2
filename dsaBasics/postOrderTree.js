function walk(curr, path){
    if (!curr) {
        return path
    }

    //pre
    //recurse
    walk(curr.left, path)
    walk(curr.right, path)
    
    //post
    path.push(curr.value)
    return path
}


function inOrderSearch(head){

    return walk(head, [])

}