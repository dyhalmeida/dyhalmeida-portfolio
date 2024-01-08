import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

   :root {
     --white: #FFFFFF;
     --gray-100: #F0F0F0;
     --gray-200: #1F1F1F;
     --gray-300: #9CA3AF;
     --green: #00FF00; 
     --box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
   }
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Poppins', sans-serif;
     
     ::-webkit-scrollbar {
       width: 7px;
       height: 5px;
       transition: 0.3s;
     }

     ::-webkit-scrollbar-thumb {
       background: var(--green);
       border-radius: 10px;
     }

     ::-webkit-scrollbar-track {
       background: var(--primary);
       border-radius: 10px;
     }
   }

   body {
     font-family: 'Poppins', sans-serif;
   }

   button {
     cursor: pointer;
   }

   a {
     color: inherit;
     text-decoration: none;
   }

   ul {
     list-style: none;
   }

   img {
     width: 100%;
     max-width: 100%;
   }

 ${({ theme }) => css`
   body {
     background-color: ${theme.colors.primary};
     color: ${theme.colors.text};
   }
 `}
`
