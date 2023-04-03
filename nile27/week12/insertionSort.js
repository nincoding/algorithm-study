/**
 * feat(CPT) : 삽입정렬_insertionSort.
 * 삽입정렬
 */



const insertionSort = function (arr, callback = (el) => el) {  
  for (let i = 1 ; i < arr.length; i++){
    let x = callback(arr[i])
    for(let j = i-1 ; j >= 0 ; j--){
      if(x < callback(arr[j])) [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
      else break;
    }      
  }
  return arr

};
