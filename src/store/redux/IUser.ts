import {SET_USERS} from './usersActions';

type ActionTypes = typeof SET_USERS;

export interface IUser {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginOrLocation;
  location: OriginOrLocation;
  image: string;
  episode?: string[] | null;
  url: string;
  created: string;
}
export interface OriginOrLocation {
  name: string;
  url: string;
}

export interface UserState {
  users: IUser[];
}

export interface UsersAction {
  type: ActionTypes;
  users: {users: IUser[]};
}

export type FetchUserReturnValue = (page:number) => (dispatch: any) => Promise<void>;

export type UsersReducerReturnValue = (state: UserState, action: UsersAction) => UserState | { users: { users: IUser[]; }; }

