function estSubsets(arr) {
    let setArray = new Set(arr)
    let result = 2 ** setArray.size - 1
    return result
}