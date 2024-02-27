import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStyles } from './styles/GlobalStyles.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles/>
    <App/>
  </>
)