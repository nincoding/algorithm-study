# 해시 베스트앨범
### 문제
1. 장르 별로 총 재생된 횟수가 가장 많은 장르부터 재생
2. 1번에서 정렬된 장르 별로 첫 번쨰, 두 번째로 가장 많이 재생된 순으로 재생해준다.
3. 입출력값

|genres|plays|return|
|:---:|:---:|:---:|
|["classic", "pop", "classic", "classic", "pop"]|[500, 600, 150, 800, 2500]|[4, 1, 3, 0]|


```javascript
function tableMaker(genres, plays){
  const table = {sum : {}};
  for (let i = 0 ; i < genres.length ; i++){
      if(table.hasOwnProperty(genres[i]) === false){
          table[`${genres[i]}`]= [plays[i]]
          table[`${genres[i]}idx`] = [i]
          table["sum"][`${genres[i]}`] =+ plays[i]
      } 
      else if (table[`${genres[i]}`].length > 1){
          table["sum"][`${genres[i]}`] += plays[i]
          if(table[`${genres[i]}`][1] < plays[i] && table[`${genres[i]}`][0] >= plays[i]){
              table[`${genres[i]}`][1] = plays[i]
              table[`${genres[i]}idx`][1] = i
          }
          else if(table[`${genres[i]}`][0] < plays[i] && table[`${genres[i]}`][1] < plays[i] ){
              
              [table[`${genres[i]}`][1] = table[`${genres[i]}`][0]] 
              [table[`${genres[i]}idx`][1] = table[`${genres[i]}idx`][0]] 
              table[`${genres[i]}`][0] = plays[i]
              table[`${genres[i]}idx`][0] = i
          }
          
      }
      else {
          if(table[`${genres[i]}`][0] < plays[i]){    
              table[`${genres[i]}`].unshift(plays[i])
              table[`${genres[i]}idx`].unshift(i)
              table['sum'][`${genres[i]}`] += plays[i]
          }
          else{
              table[`${genres[i]}`].push(plays[i])
              table[`${genres[i]}idx`].push(i)
              table['sum'][`${genres[i]}`] += plays[i]
          }
      }
  }
  return table
  }
  function solution(genres, plays) {
  var answer = [];
  const table = tableMaker(genres,plays);
  let arr = Object.keys(table.sum)
  if(arr.length > 1){
      arr.sort((a,b) => {
      return table.sum[b] - table.sum[a]
      })
  }


  for(let i = 0; i < arr.length ; i++){
      let j = 0
      while(table[`${arr[i]}idx`].length > j){
          answer.push(table[`${arr[i]}idx`][j])
          j++
      }

  }
  return answer
  }

```
## 해시 테이블 함수
예시
```js
const table = { 'classic' : [800 , 500],
                'sum' : { 'classic' : 1450 }
              }
```
```js
const table = {sum : {}};
    for (let i = 0 ; i < genres.length ; i++){
        if(table.hasOwnProperty(genres[i]) === false){ // 테이블에 장르가 없을 경우 장르 테이블을 만들고 sum에 장르별로 더해준다.
            table[`${genres[i]}`]= [plays[i]]
            table[`${genres[i]}idx`] = [i]
            table["sum"][`${genres[i]}`] =+ plays[i]
        } 
        else if (table[`${genres[i]}`].length > 1){  // 테이블 안에 장르가 2개 이상일 경우 크기를 비교하여 첫번쨰 두번째를 나눈다.
            table["sum"][`${genres[i]}`] += plays[i] // sum 값 합치기
              // 첫 번쨰 값보단 작고 두 번째 값보단 큰 경우 두 번쨰 값만 바꾸기
            if(table[`${genres[i]}`][1] < plays[i] && table[`${genres[i]}`][0] >= plays[i]){
                table[`${genres[i]}`][1] = plays[i]
                table[`${genres[i]}idx`][1] = i
            }
              // 원래 기존의 값 2개보다 큼으로, 기존 값 2개를 비교하고 큰 값은 두 번쨰 새로들어온 값은 첫 번째
            else if(table[`${genres[i]}`][0] < plays[i] && table[`${genres[i]}`][1] < plays[i] ){
                
                [table[`${genres[i]}`][1] = table[`${genres[i]}`][0]] 
                [table[`${genres[i]}idx`][1] = table[`${genres[i]}idx`][0]] 
                table[`${genres[i]}`][0] = plays[i]
                table[`${genres[i]}idx`][0] = i
            }
            
        }
        else {// 장르는 있지만 아직 첫 번째 값만 들어있는 경우
            if(table[`${genres[i]}`][0] < plays[i]){  // 기존에 있던 값보다 크면 앞에 넣어주기
                table[`${genres[i]}`].unshift(plays[i])
                table[`${genres[i]}idx`].unshift(i)
                table['sum'][`${genres[i]}`] += plays[i]
            }
            else{
                table[`${genres[i]}`].push(plays[i]) // 기존에 있던 값보다 작으면 뒤에 넣어주기
                table[`${genres[i]}idx`].push(i)
                table['sum'][`${genres[i]}`] += plays[i]
            }
        }
    }
    return table
    }
```

## 출력 
```js
function solution(genres, plays) {
    var answer = [];
    const table = tableMaker(genres,plays);
    let arr = Object.keys(table.sum) 

    if(arr.length > 1){         // table 안에 sum의 키값을 뽑아와 내림차순으로 장르를 정렬한다.
        arr.sort((a,b) => {
        return table.sum[b] - table.sum[a]
        })
    }


    for(let i = 0; i < arr.length ; i++){ // 장르별로 정렬된 arr을 통해 table에 있는 idx의 값들을 answer에 넣어준다.
        let j = 0
        while(table[`${arr[i]}idx`].length > j){ // 장르별로 1가지가 있을수도 있으니 while을 통해서 index overflow를 방지해준다.
            answer.push(table[`${arr[i]}idx`][j])
            j++
        }

    }
    return answer
    }


```

### 느낀 점
- map, set으로 풀 수 있지만 아직 이해도가 부족하여 객체로 바꿔서 풀었다......
- 가장 간략한 코드를 가져오기 했지만 아직 이해가 부족해서 다음 번에 설명해드릴게요....
