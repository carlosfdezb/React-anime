/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

import { BASE_COLOR, SECONDARY_COLOR, HIGH_COLOR, HEADER_COLOR } from './DarkMode';

const GlobalStyle = createGlobalStyle`
    html {
            box-sizing: border-box;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
           
    }
    
    *, *::before, *::after {
            box-sizing: inherit;
    }
    
    ul, li, h1, h2, h3, p, button {
            margin: 0;
    }
    ul {
            list-style: none;
    }
    button {
            background: transparent;
            border: 0;
            outline: 0;
    }
    body {
            background: ${BASE_COLOR};

            overflow-x: hidden;
            color: white;
            height: 100vh;
            margin: 0 auto;
            width: 100%;
    }
    
    /* width */
        ::-webkit-scrollbar {
          width: 15px;
          height: 10px;
        }

      /* Handle on hover */
      ::-webkit-scrollbar:hover {
          background: ${SECONDARY_COLOR};
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: ${HIGH_COLOR};
        }
    
    @media (min-width: 1000px) {
            /* width */
            ::-webkit-scrollbar{
              background-color: ${BASE_COLOR};
          }
          ::-webkit-scrollbar-track{
              background-color: ${SECONDARY_COLOR};
          }
          ::-webkit-scrollbar-thumb{
              background-color: ${HIGH_COLOR};
          }
    }

    #app {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
            overflow-x: hidden;
            min-height: 100vh;
            padding-bottom: 10px;
    }
    /* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}
#nprogress .bar {
 background: rgba(251,96,255,1);
 background: linear-gradient(90deg, rgba(0,212,255,1) 6%, rgba(251,96,255,1) 35%, rgba(255,96,209,1) 68%, rgba(116,0,186,1) 100%);
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
}
/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px rgba(251,96,255,1), 0 0 5px rgba(251,96,255,1);
  opacity: 1.0;
  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}
/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}
#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-top-color: rgba(251,96,255,1);
  border-left-color: rgba(251,96,255,1);
  border-radius: 50%;
  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}
.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}
.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}
@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`;

export default GlobalStyle;
