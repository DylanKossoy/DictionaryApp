import { fetchWord } from './fetchWord.js'
let searchButton = document.querySelector('.search-button')
let searchInput = document.querySelector('.search-input').value


searchButton.addEventListener('click', async () => {

    searchInput = document.querySelector('.search-input').value

    if(!searchInput) return

    let data = await fetchWord(searchInput)

    updateUI(data)

})










function updateUI(data) {

    let array = data[0]
    let word = document.querySelector('.word-selected')
    let wordDefinition = document.querySelector('.word-definition')


    console.log(array)

    word.textContent = array.word


}