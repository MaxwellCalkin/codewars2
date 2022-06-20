// Description
// Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

// if X[i] > X[j] then X[i] = X[i] - X[j]

// When no more transformations are possible, return its sum ("smallest possible sum").

const gcd = (a,b)=>a?gcd(b%a,a):b
function solution(numbers) {
  return numbers.reduce(gcd)*numbers.length
}


















// function solution(numbers){
//     const numLen = numbers.length
//     if (numLen === 1){
//         return numbers[0]
//     }
//     let numMin = Math.min(...numbers)
//     for(let i = 0; i < numLen; i++){
//         if(numbers[i] != numMin){
//             if(numbers[i]%numMin != 0){
//                 numbers[i] = numbers[i]%numMin
//                 if(numbers[i]<numMin){
//                     numMin = numbers[i]
//                 }
//             }else if(numbers[i]%numMin === 0){
//                 numbers[i] -= numMin * (Math.round(numbers[i]/numMin) - 1)
//             }
//         }
//         if(number[i] === 1){
//             return numLen
//         }
//     }
//     return numMin*numLen
// }




// def solution(a):
//     L = len(a)
//     if L == 1:
//         return a[0]
//     m=min(a)
//     for i in range(L):
//         if a[i] != m:
//             if a[i] % m != 0:
//                 a[i] = a[i]%m
//                 if a[i]<m:
//                     m=a[i]
//             elif a[i] % m == 0:
//                 a[i] -= m * (a[i] // m - 1)
//         if a[i]==1:
//             return 1*L
//     return m*L






// function solution(numbers) {
//     const n = numbers.length
//     let done = false
//     while(!done){
//         numbers.sort((a,b)=>b-a)
//         done = true
//         for(let i = 0; i < numbers.length; i++){
//             while(numbers[i] > numbers[i+1]){
//                 numbers[i] -= numbers[i+1]
//                 done = false
//             }
//         }
//     }
//     return numbers.reduce((a,b)=>a+b, 0)



solution([6,9,21])

// def solution2(arr):
//     N = len(arr)
//     end = False
//     while not end:
//         arr = sorted(arr, reverse=True)
//         end = True
//         for i in range(1, N):
//             while arr[i-1] > arr[i]:
//                 arr[i-1] -= arr[i]
//                 end = False
//     return sum(arr)


// def solution(a):
//     N = len(a)
//     end = False
//     while not end:
//         a = sorted(a, reverse=True)
//         small = min(a)
//         end = True
//         for i in range(1, N):
//             if a[i-1] > small:
//                 a[i-1] = a[i-1]%small if a[i-1]%small !=0 else small
//                 end = False
//     return sum(a)





// function solution(numbers) {
//     let numSet = new Set()
//     numbers.forEach(x=>numSet.add(x))
//     while(numSet.size > 1){
//         let minIndex = numbers.indexOf(Math.min(...numbers))
//         let maxIndex = numbers.indexOf(Math.max(...numbers))
//         numbers[maxIndex] = numbers[maxIndex] - numbers[minIndex]
//         numSet.clear()
//         numbers.forEach(x=>numSet.add(x))  
//     }
//     return numbers.reduce((acc,c)=>acc+c,0)
  
//   }