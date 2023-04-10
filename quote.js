console.log('imported quote.js')

// Retrieve a quote with fetch after DOM Content Loaded
document.addEventListener('DOMContentLoaded', getQuote)

const quoteSimpsons = async() => {
  
    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const data = await res.json()
    
    const quote= data[0].quote
    const character= data[0].character
    const image = data[0].image
   
    document.querySelector('#quote').innerHTML = `
    "${quote}"    
    `
    document.querySelector('#name').innerHTML = `
    -- ${character}
      `   
    document.querySelector('.img').innerHTML = `
    <img id="image" src=  ${image} >
    `   
}


// Click Event that retrieve a new quote
export function getQuoteEventListener(element){
    element.addEventListener('click', getQuote)
}


function getQuote()
{          
    quoteSimpsons();    
}
