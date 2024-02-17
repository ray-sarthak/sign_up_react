import React from "react"; 

import { render } from 'react-dom';
import App from "./components/App";
import "./style.css";

const domNode = document.getElementById('root');
render(<App />, domNode);
