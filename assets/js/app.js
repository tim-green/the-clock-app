
//const
const background = document.querySelector('.background')
const author = document.querySelector(".author")
const icon = document.querySelector('.icon')
const details = document.querySelector('.details');
const period = document.querySelector(".period");
const expand = document.querySelector('.expand');

// function to get quotefunction getQuote() {    axios.get('https://api.quotable.io/random').then((quotesRes) => {    const chosenQuote = quotesRes.data      document.getElementById("quote").textContent = chosenQuote.content;            if (chosenQuote.author == null) {          author.textContent = 'Unknown author'      } else {          author.textContent = chosenQuote.author;      }    }).catch((err) => console.error(err))  }// function to get quote
function getQuote() {
    axios.get('https://api.quotable.io/random').then((quotesRes) => {
    const chosenQuote = quotesRes.data
  
    document.getElementById("quote").textContent = chosenQuote.content;
      
      if (chosenQuote.author == null) {
          author.textContent = 'Unknown author'
      } else {
          author.textContent = chosenQuote.author;
      }
    }).catch((err) => console.error(err))
  }

