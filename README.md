# π algorithm-study
**μκ³ λ¦¬μ¦ κ΄λ ¨ λ¬Έμ  νμ΄μ μμ€ μ½λ λ° μ€λͺ μ μ₯μ**

## π μ€ν°λ μ°Έμ¬λ°©λ² λ° κ·μΉ

1. μ΄ μ μ₯μλ₯Ό μμ μ κΉνλΈ μ μ₯μλ‘ `fork` νλ€.
2. `μμ μ ν΄λ`μ ν΄κ²°ν λ¬Έμ μ μμ€ μ½λλ₯Ό `μ»¨λ²€μμ λ§κ²` μμ λ‘­κ² μλ‘λ νλ€.(νμΌμ js λ§ νμ©) 
3. κ°μΈ ν΄λ λ΄λΆλ μμ λ‘­κ² μΆκ°, μμ μ΄ κ°λ₯νλ€.
4. λ§€μ£Ό μ€ν°λ μμ μ  `weeklyIssue ν΄λ`μ `μ»¨λ²€μμ λ§κ² λ°ν ν  md νμΌ`μ μλ‘λ νλ€.(λ§κ°κΈ°κ° μ£Όμ)

## π νμΌ μλ‘λ λ°©μ

1. [κΉνλΈ GUI λ°©μ](https://github.com/nincoding/algorithm-study/blob/main/docs/GUI%20%EB%B0%A9%EC%8B%9D%20%ED%8C%8C%EC%9D%BC%20%EC%97%85%EB%A1%9C%EB%93%9C.md)μ μ΄μ©νκ±°λ [PR λ°©μ](https://github.com/nincoding/algorithm-study/blob/main/docs/PR%20%EB%B0%A9%EC%8B%9D%20%ED%8C%8C%EC%9D%BC%20%EC%97%85%EB%A1%9C%EB%93%9C.md)μ μ΄μ©νλ€.
2. PRλ‘ λ³΄λΌ μ μμ μ  `κΉνλΈμμ΄λμ λμΌν λΈλμΉ`λ₯Ό μλ‘ μμ±ν λ€ μ€ν°λ μ λ κΉμ§ μ΄ μ μ₯μλ‘ PRμμ²­μ λ³΄λΈλ€.
3. PR μ λͺ©μ `[λ³ΈμΈμ΄λ¦] nμ£Όμ°¨_nλ¬Έμ ` λ‘ μμ±νλ€.

## β¨ νμΌ μ»¨λ²€μ 

- κ°μΈ ν΄λμ μΆκ°λλ νμΌμ `js νμΌ`λ§ νμ©νλ€.
- νμΌλͺ μμ±μ `ν΄λΉνλ«νΌ_λ¬Έμ μ λͺ©` μΌλ‘ μμ±νλ€.
- weeklyIssue ν΄λμλ `md νμΌ`λ§ νμ©νλ©° μμμ μμ λ‘­κ² μμ± κ°λ₯νλ€.(μμ μ΄ ν΄μ€ν λ§ν¬λ§ μ²¨λΆν΄λ κ°λ₯)

## β¨ μ»€λ° μ»¨λ²€μ

### β κ°μΈ ν΄λ νμΌ push λ° μΆκ° μ

> κ°μΈ ν΄λμ νμΌ μ»€λ° μ»¨λ²€μμ `μμ±(λ²μ): μ λͺ©κ³Ό μΆμ²λ§ν¬`λ‘ ν΅μΌνλ€.

1. μμ±μ `feat`μΌλ‘ ν΅μΌνλ€.
2. λ²μλ `()`κ΄νΈ μμ ν΄λΉ λ¬Έμ μ νλ«νΌ(μλ ν΅μΌλͺ μ°Έκ³ )μ κΈ°μ¬νλ€.

- **νλ«νΌ ν΅μΌ**
  - BOJ: λ°±μ€
  - PGS: νλ‘κ·Έλλ¨Έμ€
  - CPT: μ½λμ€νμ΄μΈ  μ½νλ¦Ώ
  - ETC: κ·Έ μΈ

3. μ λͺ©μλ μμ `λ λ²¨/ν°μ΄/ν€μλ μ€ νλ`λ₯Ό κΈ°μ¬ν λ€ `_`λ‘ κ΅¬λΆμ§μ΄ `ν΄λΉ λ¬Έμ μ μ λͺ©`μ μμ±νλ€.

- νλ‘κ·Έλλ¨Έμ€ λ λ²¨ μμ
  - lv.0, λ λ²¨0, ...

- λ°±μ€ ν°μ΄ μμ(λ¬Έμ μ λμ΄λ)
  - λΈλ‘ μ¦4, κ³¨λ1, ...

4. μ€λ°κΏμ ν λ€ ν΄λΉ λ¬Έμ μ μ£Όμλ§ν¬λ₯Ό λΆμ¬λ£λλ€.(λ¬Έμ μ μ£Όμλ§ν¬κ° μλ€λ©΄ μλ΅κ°λ₯)

- μ»¨λ²€μ μ¬μ© μμ

```
//gitμ μ¬μ©ν μ»€λ° μμ
git commit -m "feat(${νλ«νΌ}): ${λ λ²¨/ν°μ΄/ν€μλ μ€ ν1}_${λ¬Έμ μ μ λͺ©}
//μ€λ°κΏ ν body μμ±
${λ¬Έμ μ λ§ν¬ μ£Όμ/μλ€λ©΄ μλ΅κ°λ₯}"

```

### β weeklyIssue ν΄λ νμΌ push λ° μΆκ° μ

- ν΄λΉ μ£Όμ°¨μ λ§λ ν΄λμ μ λ¦¬ν md νμΌμ μ»¨λ²€μμ λ§κ² μΆκ°νλ€.

- md νμΌμ μ»¨λ²€μμ μλμ λ§κ² μμ±νλ€.

```
"docs(${λ³ΈμΈμ μ΄λ¦}): ${νλ«νΌ}_${λ λ²¨/ν°μ΄/ν€μλ μ€ 1}_${λ¬Έμ μμ λͺ©}

${λ¬Έμ μ λ§ν¬ μ£Όμ/μλ€λ©΄ μλ΅κ°λ₯}"
```
