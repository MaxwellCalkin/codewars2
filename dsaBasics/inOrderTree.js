function walk(curr, path){
    if (!curr) {
        return path
    }

    //pre
    //recurse
    walk(curr.left, path)
    path.push(curr.value)
    walk(curr.right, path)
    
    //post
    return path
}


function inOrderSearch(head){

    return walk(head, [])

}