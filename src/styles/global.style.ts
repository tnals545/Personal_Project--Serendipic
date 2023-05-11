import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    html {
      /* 1rem = 10px로 사용 => 16px(default) * 62.5% = 10px = 1rem */
      font-size: 62.5%;
      font-family: "Alkatra";
    }

    a{
      text-decoration: none;
      color: inherit;
    }
    
    *{
      box-sizing: border-box;
    }

    body {
      background-color: black;
      overflow: hidden;
    }

    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;

      border: none;
      text-align: center;
    }

    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }

    content-visibility : auto;

    header {
      width: 100%;
      height: 10vmin;
      position: relative;
    }

    main {
      width: 100%;
      height: 80vmin;
      position: relative;
    }

    footer {
      width: 100%;
      height: 10vmin;
      position: relative;
    }

    &.bg-img {
      object-fit: cover;
    }

    &.blur {
      filter: blur(1.5rem);
    }
`;
