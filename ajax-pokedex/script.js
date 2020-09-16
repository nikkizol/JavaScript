(() => {
    document.getElementById('run').addEventListener('click', function () {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1050')
            .then(response => response.json())
            .then((data) => Pokemon(data))
            .catch(function () {
                console.error("error");
            });

        async function Pokemon(data) {
            try {
                let pokemon = await data.results.map((data, index) => ({
                    name: data.name,
                    id: index + 1,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                }));
                for (let i = 0; i < pokemon.length; i++) {
                    let input = document.getElementById('pokemon-id_name').value

                    if (input == pokemon[i].id || input == pokemon[i].name) {
                        document.querySelector('.name').innerHTML = "Name: " + pokemon[i].name
                        document.querySelector('.id').innerHTML = "Id#: " + pokemon[i].id
                        document.querySelector('.img').src = pokemon[i].image
                        document.querySelector('.evo').innerHTML = 'prev evo: is baby'
                        document.querySelector('.id_prev').innerHTML = ""
                        document.querySelector('.img_prev').style.display = "none";

                    }
                }
            } catch (error) {
                console.error(error)
            }

            let input = document.getElementById('pokemon-id_name').value
            fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
                .then(response => response.json())
                .then((data) => Poke(data))
                .catch(() => {
                    console.error("error")
                });

            function Poke(data) {
                let randArr = []
                let moves = []
                for (let i = 0; i < 4; i++) {
                    randArr.push(Math.floor(Math.random() * data.moves.length))
                }
                for (let i = 0; i < 4; i++) {
                    moves.push(data.moves[randArr[i]].move.name)
                }
                let unique = [...new Set(moves)]
                document.querySelector('.moves').innerHTML = "Moves: " + unique.join(', ')
            }

            fetch(`https://pokeapi.co/api/v2/pokemon-species/${input}`)
                .then(response => response.json())
                .then(data1 => {
                    fetch(data1.evolves_from_species.url)
                        .then(response1 => response1.json())
                        .then(data2 => {
                            let path = data2.name;
                            // let evolutionArr = [];
                            // for (let i = 0; i < path.evolves_to.length; i++) {
                            //     evolutionArr.push(path.evolves_to[i].species.name);
                            //     console.log(evolutionArr)
                            //
                            document.querySelector('.evo').innerHTML = "prev evo: " + path
                            // }


                            fetch(`https://pokeapi.co/api/v2/pokemon/${path}`)
                                .then(response => response.json())
                                .then((data3) => {
                                    let id = data3.id
                                    let img = data3.sprites.front_default
                                    document.querySelector('.id_prev').innerHTML = "Id#: " + id
                                    document.querySelector('.img_prev').style.display = "inline";
                                    document.querySelector('.img_prev').src = img

                                }).catch(() => {
                                console.error("error")
                            });
                        }).catch(() => {
                        console.error("error")
                    });
                }).catch(() => {
                console.error("Oops, looks like there is no prev evo")
            })
        }
    })

})();


