import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
--background-color: #1F1F27;
  --white-color-first: #F6F7FB;
  --white-color-second: #C7CCDC;
  --white-color-third: #FFFFFF;
  --grey: #474759;
  --red-color: #FE4566;
  --green-color: #60C470;
  --gradient-green-color: #B0E8B9;
    --grey-color: #383847;
    --gradient-grey-color: #2D2D38;
    --grey-border-color: #80848F;
    --grey-light-color: #56566B;
}

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color);
  }

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: var(--white-color-first);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

button {
  cursor: pointer;
}

input[type="radio"] {
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
}

  a {
    text-decoration: none;
  }

  .container {
    max-width: 320px;


      @media screen and (min-width: 768px) and (max-width: 1279px) {
      max-width: 768px;

    }

    @media screen and (min-width: 1280px) {
      max-width: 1280px;
  }
}
`;
