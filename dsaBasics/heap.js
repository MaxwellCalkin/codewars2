
class MinHeap {
    constructor(length, data) {
        this.data = []
        this.length = 0
    }

    insert(value){
        this.data[this.length] = value
        this.#heapifyUp(this.length)
        this.length++
    }

    delete(value) {
        if (this.length === 0) {
            return -1
        }

        const out = this.data[0]

        this.length--

        if(this.length === 0) {
            this.data = []
            return out
        }

        this.data[0] = this.data[this.length]
        this.#heapifyDown(0)
        return out
    }

    #heapifyDown(idx) {
        const lIndx = this.#leftChild(idx)
        const rIndx = this.#rightChild(idx)
        
        if (idx >= this.length || lIdx >= this.length) {
            return
        }

        const lV = this.data[lIdx]
        const rV = this.data[rIdx]
        const v = this.data[idx]

        if(lV > rV && v > rV) {
            this.data[idx] = rV
            this.data[rIdx] = v
            this.#heapifyDown(rIdx)
        } else if (rV > lV && v > lV) {
            this.data[idx] = lV
            this.data[lIdx] = v
            this.#heapifyDown(lIdx)
        }

    }

    #heapifyUp(idx) {
        if (idx === 0) {
            return
        }

        const p = this.#parent(idx)
        const parentV = this.data[p]
        const v = this.data[idx]

        if(parentV > v) {
            this.data[idx] = parentV
            this.data[p] = v
            this.#heapifyUp(p)
        }
    }

    #parent(idx) {
        return Math.floor((idx -1) / 2)
    }

    #leftChild(idx) {
        return 2 * idx + 1
    }

    #rightChild(idx) {
        return 2 * idx + 2
    }
}