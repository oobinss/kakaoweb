import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle` 

*, *::before, *::after {
  box-sizing: border-box;
  padding:0;
  margin:0;
  
}

body {
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  width:100%;
  display:grid;
  background-color: grey;
}

h2, p {
  margin: 0;
}

h2 {
  font-size: 1.5rem;
}

p {
  font-size: 1rem;
}
`

export default GlobalStyles
