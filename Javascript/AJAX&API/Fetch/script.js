const URL = 'https://catfact.ninja/facts?limit=3'
fetch(URL)
    .then((response)=>{
        // We get data in chunks so we first read the entire
        // data and then return it
        return response.json();
    })
    .then((result)=>{
        // console.log(result.data);
        const facts =  result.data;
        facts.forEach(fact => {
            console.log(fact);
        });
    })