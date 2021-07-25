import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useDispatch, useSelector} from 'react-redux';
import { fetchUsers } from '../store/redux-toolkit/usersSlice'

import * as usersActions from '../store/redux/usersActions';
import User from '../components/User';
import {RootState} from '../../App';
import store from '../store/redux-toolkit/store';


const UsersOverviewScreen = props => {
  const [page, setPage] = useState(1);
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  const loadUsers = useCallback(async () => {
    //redux toolkit 
    await dispatch(fetchUsers(page))

    //redux 
    // await dispatch(usersActions.fetchUsers(page));

  }, [dispatch, page]);

  useEffect(() => {
    loadUsers();
  }, [dispatch, loadUsers, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const selectItemHandler = (id, name) => {
    props.navigation.navigate('UserDetails', {
      userId: id,
      userName: name
    });
  };

  return (
    <SafeAreaView>
      <FlatList
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        // onRefresh={() => onRefresh()}
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={itemData => (
          <User
            name={itemData.item.name}
            image={itemData.item.image}
            species={itemData.item.species}
            onSelect={() => {
              selectItemHandler(itemData.item.id, itemData.item.name);
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export const screenOptions = () => {
  return {
    headerTitle: 'All Users',
  };
};

const styles = StyleSheet.create({
  overviewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UsersOverviewScreen;
