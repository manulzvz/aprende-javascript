// Recursive Solution

function mergeSort(arr) {
    // Base case: if the array has 0 or 1 elements, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Step 1: Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Step 2: Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Step 3: Merge the sorted halves and return the result
    return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays into one sorted array
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // Compare elements from each half and build the sorted array
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // If there are remaining elements in left or right, add them to the result
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3,2,1,13,8,5,0,1]));