/* const element = document.createElement('h1');
element.innerText = "Hello, Platzi Badges!";

const container = document.getElementById('app');

container.appendChild(element);
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faSearch);

//with JSX
//const jsx = <h1>Hello, Platzi Bagdes from React!</h1>

//with  React.createElement method
//const element = React.createElement('h1',{}, 'Hola, soy los children!');

//const name = "Samar";

//with  React.createElement method
//const anchor = React.createElement('a', {href:'https://platzi.com'}, "Ir a Platzi!");

//const element = React.createElement("h1", {}, `Hola soy ${name}`);

//with JSX
//const sum = () => 3 + 3;

//const jsx = <h1>Hola soy, {sum()}</h1>

/* const jsx= (
<div>
    <h1>Hola, Soy Samar</h1>
    <p>Soy ingeniera Full Stack</p>
</div>
); */
//ReactDOM.render(__que_quieres_renderizar, __donde_quieres_renderizarlo__);

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
