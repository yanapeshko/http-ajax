/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
import getRefs from './get-refs';

const refs=getRefs();

refs.searchForm.addEventListener('submit', onSearch)


function onSearch(e){
  e.preventDefault();

  const form=e.currentTarget;
  const searchQuery=form.elements.query.value;

API.fetchPokemon(searchQuery)
.then(renderPokemonCard)
.catch(onFetchError)
.finally(()=>form.reset());
}



function renderPokemonCard(pokemon){
  const markup=pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML=markup;
}

function onFetchError(error){
  alert('Oops, something is going wrong!');
}



const url='https://newsapi.org/v2/everything?q=tesla';
const options={
  headers:{
    'X-Api-Key': '2cb1f6a129e341208656bdf150fd7b47'
  },
};

fetch(url, options)
.then(r=>r.json())
.then(console.log);