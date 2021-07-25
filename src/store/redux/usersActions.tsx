import { FetchUserReturnValue } from "./IUser";

export const SET_USERS = 'SET_USERS';

export const fetchUsers: FetchUserReturnValue = (page) => {
  return async dispatch => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`,
    );
    if (!response.ok) {
      throw new Error('something went wrong!');
    }
    const resData = await response.json();
    dispatch({type: SET_USERS, users: resData.results});
  };
};
