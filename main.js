import './style.css'
import './quote'
import { getQuoteEventListener} from './quote'
      
document.querySelector('#app').innerHTML = `
<div>
    <img src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2Fsimpsons.PNG?1497481539770" class="logo" alt="The Simpson Logo" />

  <div class="quoteBlock">
    <div class="img">
      
    </div>
    <div class="q">
      <h1>Quote of the day</h1>
      <blockquote id="quote"></blockquote>
      <p id="name"></p>
    </div>
  </div>

  <div class="card">
    <button id="getQuote" type="button">Get another quote</button>
  </div>
</div>
`

getQuoteEventListener(document.querySelector('#getQuote'))
