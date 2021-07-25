import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { IUser } from '../redux/IUser';

type SliceState = {users: IUser[]; status: string};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (page: number) => {
  const users = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`,
  );
  const usersJson = await users.json()
  return usersJson 
});

const initialState: SliceState =  {users: [], status: null}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) =>  {
    builder.addCase(fetchUsers.pending, (state, {payload}) => {
      state.status = 'loading';
    }),
    builder.addCase(fetchUsers.fulfilled, (state, {payload}) => {
      state.users = state.users.concat(payload.results);
      state.status = 'success';
    }),
    builder.addCase(fetchUsers.rejected, (state, {payload}) => {
      state.status = 'failed';
    })
  },
  reducers:{}
});

export default usersSlice.reducer;
