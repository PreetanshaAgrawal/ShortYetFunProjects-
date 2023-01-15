const searchWords = (word) => {
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '39d562b8a1mshacc90137af20981p133098jsn0cbf42798afe',
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
};

fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`, options)
    .then(response => response.json())
    .then(response => {
        meaning.innerHTML = response.definition;
        console.log(response)
        console.log(response.word)
    }
    )
    .catch(err => console.error(err));
}

search.addEventListener('click', (e) =>{
    e.preventDefault();
    searchWords(searchWord.value)
});