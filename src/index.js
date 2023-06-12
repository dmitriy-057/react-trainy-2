import React from 'react';
// // В Реакт 18 импорт ReactDOM не нужен
// import ReactDOM from 'react-dom';
import './index.css';
// Для темизации;
import { ThemeProvider } from '@emotion/react';
import {theme} from './components-2/utils/theme';
// для относительного импорта
// import App from './App';
//для именованого импорта
import { App2 } from './App2';
// Особенность Реакт 18
import { createRoot } from 'react-dom/client';

//Реакт 18
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
  <App2 />
  </ThemeProvider>
  )

//Реакт 17
// ReactDOM.render(
// <React.StrictMode>
// <App />
//     {/* <App2 /> */}
// </React.StrictMode>,
// document.querySelector("#root")
// );

