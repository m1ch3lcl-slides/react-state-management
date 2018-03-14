import React from 'react';
import { render } from 'react-dom';
import Presentation from './presentation';
import './index.css';

const App = () => <Presentation />;

console.log(window.Prism);

render(<App />, document.getElementById('root'));
