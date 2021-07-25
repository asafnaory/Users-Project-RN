import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import User from '../src/components/User';
import configureStore from 'redux-mock-store';


beforeAll(() => {
    beforeAll(() => (global.fetch = jest.fn()));
  jest.spyOn(React, 'useEffect').mockImplementation(f => f());
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('test', () => {
  const mockStore = configureStore();
  let store;

  it('test', async () => {
    const { getAllByText } = await render(
        <User  
        name= 'Test name'
        image= 'Test image'
        species= 'Test species'
        onSelect={() => {
            return 'onSelect'
        }}
        />
    );

    expect(getAllByText('Test name').length).toBe(1);
    expect(getAllByText('Test species').length).toBe(1);
  });
});
