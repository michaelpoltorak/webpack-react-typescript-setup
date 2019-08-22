if (module.hot) {
    module.hot.accept();
}
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;