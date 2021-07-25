import {UserState, IUser} from './IUser';
import {SET_USERS} from './usersActions';

const initState: {users: IUser[]} = {
  users: [],
};
export const usersReducer /*: UsersReducerReturnValue */ = (
  state: UserState = initState,
  action,
) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: state.users.concat(action.users),
      };
    default:
      return state;
  }
};

// export type UsersReducer = ReturnType<typeof usersReducer>;
