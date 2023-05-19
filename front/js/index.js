const api = 'http://localhost:3000/game/'

const list = document.getElementById('containerListGames');

function cardGameGet(item) {
  return `
  
    <li class="gameItem">
      <div class="imageGame">
        <img src="./assets/games/game1.webp" alt="">
      </div>

      <div class="contentGame">
        <h1>${item.name}</h1>

        <div class="informationGame">
          <span>${item.type}</span>
          <span>${item.date}</span>
        </div>

      </div>
    </li>
  
  
  
  `
}


// try {

//   fetch(api)
//     .then((response) => response.json())
//     .then((data) => data.games)
//     .then((games) => {
//       games.map((game) => {
//         list.innerHTML += cardGameGet(game)
//       })
//     })



// } catch (err) {
//   console.error(err + "a")

//   list.innerHTML = '<h1>Houve um error na lista de games</h1>'
// }

fetch(api)
  .then((response) => response.json())
  .then((data) => {
    if (data && data.games && data.games.length > 0) {
      data.games.forEach((game) => {
        list.innerHTML += cardGameGet(game);
      });
    } else {
      list.innerHTML = '<h1>Não foram encontrados jogos disponíveis.</h1>';
      // ou, se preferir exibir um card padrão:
      // list.innerHTML = cardGameGet(defaultGame);
    }
  })
  .catch((err) => {
    console.error(err);
    list.innerHTML = '<h1>Ocorreu um erro ao obter a lista de jogos.</h1>';
    // ou, se preferir exibir um card padrão:
    // list.innerHTML = cardGameGet(defaultGame);
  });