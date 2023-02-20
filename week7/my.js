/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42579#qna
 *  feat(PGS): LV_3 해시_베스트앨범 
 */

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

