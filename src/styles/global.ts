import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
:focus{
   
}
body{
    background: ${(props) => props.theme.Secondary};
    color: ${(props) => props.theme.Primary};
    -webkit-font-smoothing: antialiased;
    /* transition: background-color 0.9s ease; */
    
    
    
}

body,input,textarea,button{
    font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 1rem;
}

   
`
