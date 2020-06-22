import React from 'react';
import ReactDOM from 'react-dom';
import {onSnapshot, getSnapshot, addMiddleware} from 'mobx-state-tree';
import App from './App';
import Group from './models/groupModel';

let initialState = {
  users: {
    1: {
      id: '1',
      name: 'Anna',
      gender: 'f'
    },
    2: {
      id: '2',
      name: 'Bob',
      gender: 'm'
    },
    3: {
      id: '3',
      name: 'Christan',
      gender: 'f'
    },
    4: {
      id: '4',
      name: 'David',
      gender: 'm'
    }
  }
};

if (localStorage.getItem('wishListApp')) {
  const json = JSON.parse(localStorage.getItem('wishListApp'));

  if (Group.is(json)) {
    initialState = json;
  }
}

let group = Group.create(initialState);

//log what the flow does at run time
addMiddleware(group, (call, next) => {
  console.log(`[${call.type}] ${call.name}`);
  return next(call);
});

const rootElement = document.getElementById('root');

function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App group={group}/>
    </React.StrictMode>,
    rootElement
  );
}

renderApp();

onSnapshot(group, snapshot => {
  localStorage.setItem('wishListApp', JSON.stringify(snapshot));
});

//模块热加载
if (module.hot) {
  module.hot.accept(['./App'], () => {
    renderApp();
  });

  module.hot.accept(['./models/groupModel'], () => {
    const snapshot = getSnapshot(group);
    group = Group.create(snapshot);
    renderApp();
  });
}
