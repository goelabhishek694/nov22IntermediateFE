// // task 

// // we are callins same api again n again -> same res -> to save cost and optimize (fast result) we can store the response 

// // caching is -> memoization

// // 1. i make the call , i store the result for first tme and then for subsequent call , i first check my cache 

// // 2. i am going to store the result, for a limited amount of time 

// const api='';
// const expiry=2*24*60*60*1000; //2days in ms

// const createCachedFetch=(expiry)=>{
//     const cache={};
//     return async function(){
//         if(cache(url)){
//             const cachedData=cache[url];
            
//         }
//     }
// }


// const cachedFetch=createCachedFetch(expiry);

// cachedFetch(api).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })


/***
 * Problem statement -> cachedFetch(timer);
 * */


function cachedFetch(expirey) {
    // Cached data storage
    const cache = {};
    return async function cachedFetch(url) {
        // Check if data is available in cache
        if (cache[url]) {
            const cachedData = cache[url];
            const cacheTime = cachedData.timestamp;
            const currentTime = new Date().getTime();
            if (currentTime - cacheTime < expirey * 60 * 1000) {
                return cachedData.data;
            }
        }

        // Data not in cache or cache expired, fetch and cache
        try {
            const response = await fetch(url);
            const data = await response.json();

            // Store data in cache
            cache[url] = {
                data,
                timestamp: new Date().getTime()
            };

            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    };
}

const cachedFetch = createCachedFetch(10000);
// Example usage
const apiUrl = 'https://api.example.com/data';

cachedFetch(apiUrl)
    .then(data => {
        // Handle the fetched data
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });