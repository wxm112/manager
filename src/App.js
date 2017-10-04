import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducters';
import Router from './Router';
import LoginForm from './components/LoginForm';

class App extends React.Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDoE-LgnD4b-OJtYhm0t0KoZwoS9Z7lR4Y',
            authDomain: 'manager-53a03.firebaseapp.com',
            databaseURL: 'https://manager-53a03.firebaseio.com',
            projectId: 'manager-53a03',
            storageBucket: '',
            messagingSenderId: '743354228841'
          };
          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;

