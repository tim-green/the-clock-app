
//const
const background = document.querySelector('.background')
const author = document.querySelector(".author")
const icon = document.querySelector('.icon')
const details = document.querySelector('.details');
const period = document.querySelector(".period");
const expand = document.querySelector('.expand');

// function to get quote
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

    // get time and setup it
    if(minute < 10){
        minute = "0" + minute
        }
      
      if (hour === 0) {
        hour = 12
        period.textContent = "am";
      } else if (hour === 12) {
        period.textContent = "pm";
      } else if (hour > 12) {
        hour -= 12;
        period.textContent = "pm";
      } else {
        period.textContent = "am";
        }
        document.querySelector(".time-now").textContent = `${hour}:${minute}`;

    //update the time
    let interval = (60 - (new Date()).getSeconds()) * 1000 + 5;
    setTimeout(getTime,interval)
}

// function to get the time zone from worldtimeapi
function getTimeZone() {
    axios.get('https://worldtimeapi.org/api/ip')
    .then((regionRes) => {
      const region = regionRes.data;
      //Local timezone
      document.querySelector('.region').textContent = region.abbreviation
      //Details
      document.getElementById('timezone').textContent = region.timezone;
      document.getElementById('year-day').textContent = region.day_of_year;
      document.getElementById('week-day').textContent = region.day_of_week;
      document.getElementById('week-number').textContent = region.week_number;
    })
    .catch(err => console.error(err));
  }

// function to get location from the user IP no.
function getLocation() {
    axios.get('https://freegeoip.app/json/')
    .then((locationRes) => {
      const ipLocation = locationRes.data;
      const regionName = ipLocation.region_name;
      const countryCode = ipLocation.country_code;
      document.querySelector('.currently_location').textContent = `in ${regionName}, ${countryCode}`;
    })
    .catch(err => console.error(err));
  }

  getTime();
  getQuote();
  getTimeZone();
  getLocation()

//   the event listeners
function showDetails() {
    document.querySelector('.top-widgets').classList.toggle('transform');
    details.classList.toggle('transform');
    
    if (expand.firstChild.nodeValue === "More") {
      expand.firstChild.nodeValue = "Less"
    } else {
      expand.firstChild.nodeValue = "More"
    }
  
    const arrow = document.querySelector('.arrow');
    arrow.classList.toggle('rotate');
  }
  expand.addEventListener('click', showDetails);

//   get the random quote
document.getElementById('refresh').addEventListener('click', getQuote)