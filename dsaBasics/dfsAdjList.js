function walk(graph, curr, needle, seen, path){
    
    if (seen[curr]) {
        return false
    }
    
    seen[curr] = true
    
    //pre
    path.push(curr)
    if (curr === needle) {
        return true
    }

    //recurse
    const list = graph[curr]
    for (let i = 0; i < list.length; i++) {
        const edge = list[i]

        if (walk(graph, edge.to, needle, seen, path)) {
             return true
        }
    }
    
    //post
    path.pop()
}

function dfs(graph, source, needle) {
    const seeen = new Array(graph.length).fill(false)
    const path = []

    walk(graph, source, needle, seen, path)

    if (path.length === 0){
        return null
    }

    return path
}