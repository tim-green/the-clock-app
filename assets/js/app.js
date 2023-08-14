
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

// function to get the time
function getTime() {
    let currentTime = new Date();
    let hour = currentTime.getHours()
    let minute = currentTime.getMinutes();

    //get the time of the day
    let greet = '';
    if (hour >= 5 && hour <= 11) {
      greet = 'orning';
    } else if (hour >= 12 && hour <= 17) {
      greet = 'afternoon';
    } 
    else {
      greet = 'evening';
    }
      document.querySelector('.currently__greeting').textContent = `good ${greet}`

    //get the background and icon
    if (hour >= 5 && hour <= 17 ) {
		background.classList.add('day');
		icon.src = 'assets/images/icon-sun.svg';
		icon.setAttribute("alt", "sun icon");
	} else {
		background.classList.add('night');
		icon.src = 'assets/images/icon-moon.svg';
		icon.setAttribute("alt", "moon icon");
		details.style.color = '#fff';
		details.style.background = 'rgba(0, 0, 0, 0.75)';
	}

