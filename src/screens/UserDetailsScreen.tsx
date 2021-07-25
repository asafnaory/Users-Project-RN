import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../App';

type RootStackParamList = {
  UserDetailesWebview: {userId: number; userName: string};
};
type Props = StackScreenProps<RootStackParamList, 'UserDetailesWebview'>;
type typeGoToWebviewHandler = (userId: number, userName: string) => void;

const UserDetailsScreen = ({route, navigation}: Props) => {
  const userId = route.params.userId;
  const userName = route.params.userName;
  const selectedUser = useSelector((state: RootState) =>
    state.users.users.find(prod => prod.id === userId),
  );

  const goToWebviewHandler: typeGoToWebviewHandler = (userId, userName) => {
    navigation.navigate('UserDetailesWebview', {
      userId: userId,
      userName: userName,
    });
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedUser.image}} />
      <Text style={styles.text}>Name: {selectedUser.name}</Text>
      <Text style={styles.text}>Status: {selectedUser.status}</Text>
      <Text style={styles.text}>Species: {selectedUser.species}</Text>
      <Text style={styles.text}>Ggender: {selectedUser.gender}</Text>
      <Text style={styles.text}>Plant: {selectedUser.origin.name}</Text>
      <Button
        title="Go to webview"
        onPress={() => goToWebviewHandler(userId, userName)}
      />
    </ScrollView>
  );
};

export const screenOptions = ({route, navigation}) => {
  return {
    headerTitle: route.params.userName,
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
});
export default UserDetailsScreen;
