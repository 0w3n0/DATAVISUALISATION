const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b8d5d3c278msh58e2dbfa94cc971p1f8cbajsn3ba0266d23f3',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

fetch('https://moviesdatabase.p.rapidapi.com/actors', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));