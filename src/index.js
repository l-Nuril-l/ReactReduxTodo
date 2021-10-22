import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import Create from './components/Create';
import Edit from './components/Edit';
import Archive from './components/Archive';
import './TodoItem.css'
import { Provider } from 'react-redux';
import { store } from './store/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <main className='App-header'>
          <Route exact path='/' component={App}></Route>
          <Route path='/Create' component={Create}></Route>
          <Route path='/Edit/:id' component={Edit}></Route>
          <Route path='/Archive' component={Archive}></Route>
        </main>
      </Router>
    </Provider>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
