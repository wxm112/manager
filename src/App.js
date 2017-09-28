import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducters';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;

