#코플릿 15_flattenArr

```
function flattenArr(arr) {

  if(arr.length === 0){
    return [];
  }

  let newArr = []

  for(let i = 0; i < arr.length ; i++){

    if(Array.isArray(arr[i])){
      let a = flattenArr(arr[i]);
      newArr.push(...a)
    } else {
      newArr.push(arr[i])
    }

  }

  return newArr

}
```
