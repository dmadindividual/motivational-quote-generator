
const authorText = document.getElementById('author')
const btn = document.getElementById('btn')
const quotes = document.getElementById('quotes')
const tagContent = document.getElementById('tag')

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'd52f93173amsh41b3168700a95cfp1702cfjsn42a7de51b779',
//         'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
//     }
// };

// fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=2', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

function random() {
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            authorText.textContent = data.author
            quotes.textContent = data.content
            tagContent.textContent = data.tags

        }).catch((error) => {
            console.log('error')
        })
}

random()
btn.addEventListener('click', () => {
    random()
})