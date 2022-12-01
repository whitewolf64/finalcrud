import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  } 

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
    background-size: cover;
    background-image:
  url('https://journalmetro.com/wp-content/uploads/2020/11/ACK_UCS16199_XOne_Screenshots_1920x1080_5_US.png?w=1920');
`;

export default Global;