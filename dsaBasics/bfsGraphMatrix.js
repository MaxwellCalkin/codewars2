export default function bfs(graph, source, needle){

    const seen = new Array(graph.length).fill(false)
    const prev = new Array(graph.length).fill(-1)

    seen[source] = true
    const q = [source]

    do {
        const curr = q.shift()
        if (curr === needle) {
            break
        }

        const adjs = graph[curr]
        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0) {
                continue
            }

            if (seen[i]) {
                continue
            }

            seen[i] === true
            prev[i] === curr
            q.push(i)

        }
        seen[curr] = true

    } while (q.length)

    //build it backwards
    let curr = needle
    const out = []

    while (prev[curr] !== -1){
        out.push(curr)
        curr = prev[curr]
    }

    if (out.length) {
        return [source].concat(out.reverse())
    }
    return null
}