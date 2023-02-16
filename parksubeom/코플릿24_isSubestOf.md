# 코플릿: 23 bubbleSort
<br/>

- **문제 설명**<br/>
두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

- **제한사항**<br/>
base, sample 내에 중복되는 요소는 없다고 가정합니다.

- **수도코드**<br/>
   1 base 배열안에 saple의 '모든' 요소가 포함 되는지 여부를 리턴하면된다.
   2 나에겐 상범 선생님이 전수해주신 전설의 'set객체' 님님님이 계시다.
   3 base배열과 sample 배열을 합쳐준다
   4 set객체안에 두 배열을 합친 새로운배열을 넣어준다.(ㅋㅋ넌이제 죽었다)
   5 set객체는 중복된 값을 허용하지 않으므로 중복값을 모두 제거해준다.
   6 만약 부분집합이라면, sample배열의 모든요소가 base배열의 요소와  일치할테니 sample배열은 삭제된다.
   7 즉 base.length 와 set.size가 같다면 부분집합이므로 true, set.size가 다르다면 중복되지 않는 값이 있다는거니까 false.

<br/>

```
const isSubsetOf = function (base, sample) {
    const set = new Set([...sample,...base]);
  const result = set.size === base.length ? true : false 
  return result
};
```

- **시행착오**<br/>
    - 없었다.
    - 아니? 있었다.
    - 당연히 또 메서드쓰면 너~무쉬운거같아서 급지인줄알고 포문으로 돌면서 노가다 할 뻔 했지만 메서드 제한이 없었다.
    - 메서드 봉인없이 날 어떻게 막을건데 ?
  
