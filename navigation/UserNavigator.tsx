import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserDetailsScreen from '../src/screens/UserDetailsScreen';
import UsersOverviewScreen from '../src/screens/UsersOverviewScreen';
import {screenOptions as overviewScreenOptions} from '../src/screens/UsersOverviewScreen';
import {screenOptions as userDetailsScreenOptions} from '../src/screens/UserDetailsScreen';
import {screenOptions as userDetailsWebviewScreenOptions} from '../src/screens/UserDetailesWebviewScreen';
import UserDetailesWebviewScreen from '../src/screens/UserDetailesWebviewScreen';

const UsersStackNavigator = createStackNavigator();
export const UsersNavigator = () => {
  return (
    <UsersStackNavigator.Navigator>
      <UsersStackNavigator.Screen
        name="UsersOverview"
        component={UsersOverviewScreen}
        options={overviewScreenOptions}
      />
      <UsersStackNavigator.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={userDetailsScreenOptions}
      />
      <UsersStackNavigator.Screen
        name="UserDetailesWebview"
        component={UserDetailesWebviewScreen}
        options={userDetailsWebviewScreenOptions}
      />
    </UsersStackNavigator.Navigator>
  );
};
