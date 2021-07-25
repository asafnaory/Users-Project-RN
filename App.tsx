import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import { Reducer } from 'redux';
import store from './src/store/redux-toolkit/store'


import {usersReducer} from './src/store/redux/userReducer';
import {UsersNavigator} from './navigation/UserNavigator';
import {NavigationContainer} from '@react-navigation/native';

const rootReducer = combineReducers({
  users: usersReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <UsersNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
