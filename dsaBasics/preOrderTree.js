function walk(curr, path){
    if (!curr) {
        return path
    }

    //pre
    path.push(curr.value)
    
    //recurse
    walk(curr.left, path)
    walk(curr.right, path)
    
    //post
    return path
}


function preOrderSearch(head){

    return walk(head, [])

}