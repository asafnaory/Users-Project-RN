import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';

type RootStackParamList = {
  UserDetailsWebviewProps: {userId: number; userName: string};
};
type Props = StackScreenProps<RootStackParamList, 'UserDetailsWebviewProps'>;

const UserDetailesWebviewScreen = ({route, navigation}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const userId = route.params.userId;

  return (
    <View style={styles.mainView}>
      <WebView
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoadEnd={() => {
          setIsLoading(false);
        }}
        source={{
          uri: `https://rickandmortyapi.com/api/character/${userId}`,
        }}
        style={{marginTop: 20}}
      />
      {isLoading && (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator
            color="#009688"
            size="large"
            style={styles.spinner}
          />
        </View>
      )}
    </View>
  );
};
export const screenOptions = ({route, navigation}) => {
  return {
    headerTitle: `${route.params.userName} Webview data`,
  };
};
const styles = StyleSheet.create({
  mainView: {flex: 1},
  spinnerContainer: {flex: 10, backgroundColor: 'white'},
  spinner: {
    position: 'absolute',
    left: 200,
    top: 300,
  },
});

export default UserDetailesWebviewScreen;
