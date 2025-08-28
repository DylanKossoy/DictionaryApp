



export async function fetchWord(word) {

    console.log(word)
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    let options = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    }


    let response = await fetch(url, options)


    if(response.status === 200) {
        let data = await response.json()
        

        return data
    } else {
        console.log(response.status)
    }
}