(() => {
    document.getElementById('run').addEventListener('click', function  () {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1050')
            .then(response => response.json())
            .then((data) => Pokemon(data));

        function Pokemon(data) {
            let pokemon = data.results.map((data, index) => ({
                id: index + 1,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                name: data.name
            }));
                for (let i = 0; i < pokemon.length; i++) {
                    let input = document.getElementById('pokemon-id_name').value
                    let temp = document.querySelector('#tpl-pokemon').content.cloneNode(true)
                    if (input == pokemon[i].id || input == pokemon[i].name) {
                        document.getElementById('target').innerHTML = ' '
                        temp.querySelector('.name').innerHTML = "Name: " + pokemon[i].name
                        temp.querySelector('.id').innerHTML = "Id#: " + pokemon[i].id
                        temp.querySelector('.img').src = pokemon[i].image
                        target.appendChild(temp)
                    }

                }
            }
    })
})();