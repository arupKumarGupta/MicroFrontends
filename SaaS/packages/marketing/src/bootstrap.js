import React from 'react' ;
import ReactDOM from 'react-dom';

import App from './App';
// mount function to start up the app

export const mount = (el) => {
  ReactDOM.render(
    <App/>,
    el
  );
};

// if in developement call mount immediately
if(process.env.NODE_ENV === 'development') {
  const el = document.getElementById('_marketing_dev_id_root');
  if(el) {
    mount(el);
  }
}

