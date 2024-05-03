import { createGlobalStyle } from 'styled-components';

export const GlobalStylesDatepicker = createGlobalStyle`

.react-datepicker {
border: none;
border-radius: 30px;
}

.react-datepicker__header {
border-radius: 30px;

}

.react-datepicker__header {
  background: linear-gradient(118.06deg, #58BB67 3.05%, #368342 125.62%);
  color: white;
  /* border-radius: 30px; */
}

  .react-datepicker__month-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    width: 252px;
    height: 258px;
    background: linear-gradient(118.06deg, #58BB67 3.05%, #368342 125.62%);
    border-radius: 30px;
  }

  .react-datepicker__current-month {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.42;
    text-transform: uppercase;
    color: var(--white-color-first);
  }

  .react-datepicker__day-name {
color:var(--white-color-first)
  }
  
  .react-datepicker__day {
    color:rgba(246, 247, 251, 0.7);
  }

  .react-datepicker__triangle {
display: none;
  }
  /* .react-datepicker__day--selected {
    border-radius: 50%;
    background-color: white;
    color:rgba(65, 150, 79, 1);
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: white;
    color:rgba(65, 150, 79, 1);
  } */

  .react-datepicker__navigation-icon::before {
    border-color: white;
    top:7px;
  }
   
  .react-datepicker__navigation:hover *::before {
    border-color: white;
} 
  
  `