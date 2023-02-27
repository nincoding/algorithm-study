function solution(cacheSize, cities) {
    cities = cities.map((city) => city.toLowerCase());
    let answer = 0
    let set = new Set(cities);
    let cache = []
    if(cacheSize === 0) return cities.length * 5
    if(cacheSize > cities.length){
        if(set.size === cities.length ) return set.size * 5
        else return (set.size * 5) + (cities.length - set.size)
    }
    
    for(let i = 0 ; i < cities.length; i++){
        if(!cache.includes(cities[i])) {
            answer += 5
        }
         else{
            cache.splice(cache.indexOf(cities[i]),1)
            answer +=1
        }
        cache.push(cities[i])
        
        if(cache.length > cacheSize) cache.shift()

       
    }
    return answer;        
}
    
    
    
    

