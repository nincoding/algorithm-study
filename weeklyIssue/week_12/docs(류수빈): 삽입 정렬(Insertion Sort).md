# ✏️ 삽입 정렬(Insertion Sort)
## 삽입 정렬 작동원리
![](https://velog.velcdn.com/images/rsuubinn/post/df83af68-4f4f-4b08-bb31-e04c7795238a/image.png)
배열 [5, 3, 4, 1, 2] 이 있다고 생각해본다.
시작은 배열의 *두번째* 요소인 3부터 시작한다.
3을 기준으로 왼쪽에는 정렬된 요소들을 오른쪽에는 정렬해야할 요소들이 위치한다.

3을 5와 비교 했을 때 3은 5보다 작기 때문에 5 앞으로 이동한다.

![](https://velog.velcdn.com/images/rsuubinn/post/848914d5-c923-4c74-80fc-a8953ea5365b/image.png)
이제 4를 비교할 차례이다.
4를 기준으로 왼쪽 요소 차례대로 비교한다.
5보다 작기 때문에 다음 요소인 3과 비교한다.
3보다 크기 때문에 4가 위치할 자리는 3과 5사이 이다.

![](https://velog.velcdn.com/images/rsuubinn/post/aadba4c1-06b3-46d6-a989-4f857d95474b/image.png)
이제 1를 비교할 차례이다.
1를 기준으로 왼쪽 요소 차례대로 비교한다.
5보다 작기 때문에 다음 요소인 4와 비교한다.
4보다 작기 때문에 다음 요소인 3과 비교한다.
3보다 작기 때문에 다음 요소와 비교 해야 하는데 다음 요소가 존재하지 않기 때문에 1이 위치할 자리는 맨 앞이다.

![](https://velog.velcdn.com/images/rsuubinn/post/0a06b4c7-3505-48af-b1ff-4c4d87e97ae8/image.png)
이제 2를 비교할 차례이다.
2를 기준으로 왼쪽 요소 차례대로 비교한다.
5보다 작기 때문에 다음 요소인 4와 비교한다.
4보다 작기 때문에 다음 요소인 3과 비교한다.
3보다 작기 때문에 다음 요소인 1과 비교한다.
1보다 크기 때문에 2가 위치할 자리는 1과 3사이 이다.

![](https://velog.velcdn.com/images/rsuubinn/post/de50b314-ec53-436d-992c-df4f377784fa/image.png)

이런 식으로 진행하면 정렬이 끝나게 된다.
이것이 바로 <span style="color:indianred">삽입 정렬(Insertion Sort)</span> 이다.


## 삽입 정렬 의사코드

* 배열의 두번째 요소부터 시작한다.
* 두번째 요소부터 시작해서 앞에 있는 값과 비교한다. 그리고 필요하다면 바꾼다.
* 다음 요소로 계속 진행하고 순서가 잘못된 경우 정렬된 부분(즉, 왼쪽)을 반복하여 올바른 위치에 요소를 배치합니다.
* 배열이 정렬될 때 까지 반복한다.




## 삽입 정렬 코드
```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 20]);
````

```javascript
function insertionSort(arr){
  for(let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];
    let index = i - 1;
    while(index >= 0 && arr[index] > currentNum){
      arr[index + 1] = arr[index];
      index--;
    }
    arr[index + 1] = currentNum;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 20]);
````

## 삽입 정렬 성능
* Best Case: O(n)
  * 삽입 정렬은 완전히 무작위인 배열보다 거의 정렬되어 있는 배열에서 더 빠르다.
    *  온라인에서 실시간으로 데이터를 받고 있고 이를 모아서 정렬해야 하는 코드를 작성해야 할 때, 삽입 정렬은 배열의 한 쪽에 정렬된 부분을 두고 한 번에 하나씩 요소들을 삽입하는 바익이기 때문에 이런 경우 사용하는 것이 적절할 수 있다.
* Worst Case: O(n^2)

## 참고
* [JavaScript 알고리즘 & 자료구조 마스터클래스](https://www.udemy.com/course/best-javascript-data-structures)
* [[JS 알고리즘] 삽입 정렬(Insertion sort)](https://velog.io/@jangws/9.-%EC%82%BD%EC%9E%85-%EC%A0%95%EB%A0%ACInsertion-sort)
