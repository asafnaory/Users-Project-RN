import React from 'react';
import {render} from '@testing-library/react-native';
import {mockData} from './utils';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { UsersNavigator } from '../navigation/UserNavigator';


// beforeAll(() => {
  //   beforeAll(() => (global.fetch = jest.fn()));
  // jest.spyOn(React, 'useEffect').mockImplementation(f => f());
// });

// afterEach(() => {
//   jest.restoreAllMocks();
// });

describe('Testing react navigation', () => {
  test('page contains the header and 10 items', async () => {
    const initialState = {
      todos: [
        { id: 1, text: 'Sing something', date: new Date() },
        { id: 2, text: 'Dance something', date: new Date() },
        { id: 3, text: 'Sleep something', date: new Date() },
        { id: 4, text: 'Sleep something', date: new Date() },
      ],
    }; 
    const store = configureStore(initialState);

    const component = (
      <Provider store={store}>
        <UsersNavigator />
      </Provider>
    );

    const { getAllByText } = render(component);
    const todoElems = getAllByText(/something/i);

    expect(todoElems.length).toEqual(4);

    // const component = (
    //   <Provider store={store}>
    //   <NavigationContainer>
    //     <UsersNavigator />
    //   </NavigationContainer>
    // </Provider>
    // );

    // const { findByText, findAllByText } = render(component);

    // const header = await findByText('All Users');
    // const items = await findAllByText(/Item number/);

    // expect(header).toBeTruthy();
    // expect(items.length).toBe(3);
  });
});
