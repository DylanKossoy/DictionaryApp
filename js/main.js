import { fetchWord } from './fetchWord.js'
let searchButton = document.querySelector('.search-button')
let searchInput = document.querySelector('.search-input').value


searchButton.addEventListener('click', async () => {

    searchInput = document.querySelector('.search-input').value

    if(!searchInput) return

    let data = await fetchWord(searchInput)

    updateUI(data)

})


document.addEventListener('keydown', async ({ keyCode }) => {
    searchInput = document.querySelector('.search-input').value
    if(keyCode === 13 && searchInput) {
        let data = await fetchWord(searchInput)

        updateUI(data)
    }

    
    searchInput = ''

})












function updateUI(data) {

    let array = data[0]
    let word = document.querySelector('.word-selected')
    let wordDefinition = document.querySelector('.word-definition')
    let searchInput = document.querySelector('.search-input').value


    console.log(array)

    word.textContent = array.word.toUpperCase()
    wordDefinition.textContent = ''
    console.log(array)

    array.meanings.forEach(meaning => {
        meaning.definitions.forEach(def => {
            wordDefinition.textContent += def.definition;
        })
    })

  


    


}