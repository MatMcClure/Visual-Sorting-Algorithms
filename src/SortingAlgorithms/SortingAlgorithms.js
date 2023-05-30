//MERGE SORTER ANIMATIONS
export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper (
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
)   {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++]; 
        } else {
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}

//BUBBLE SORTER ANIMATIONS
export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    bubbleSortHelper(auxiliaryArray, animations);
    return animations;
  }

  function bubbleSortHelper(array, animations) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Push indices of elements being compared
        animations.push([j, j + 1]);
        // Push the same indices to revert their color
        animations.push([j, j + 1]);
        if (array[j] > array[j + 1]) {
          // Swap elements
          animations.push([j, array[j + 1]]);
          animations.push([j + 1, array[j]]);
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        } else {
          // Elements are in the correct order, no swap
          animations.push([j, array[j]]);
          animations.push([j + 1, array[j + 1]]);
        }
      }
    }
  }
  


//QUICK SORTER ANIMATIONS
export function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      const pivotIndex = partition(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }
  
  function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
  }
