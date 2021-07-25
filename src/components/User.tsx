import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import Card from './UI/Card';

interface UserProps {
  name: string;
  species: string;
  image: string;
  onSelect: Function
}

const User = (props: UserProps) => {
  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.user}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContianer}>
              <Image style={styles.image} source={{uri: props.image}} />
            </View>
            <View style={styles.details}>
              <Text style={styles.text} >{props.name}</Text>
              <Text style={styles.text}>{props.species}</Text>
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    height: 300,
    margin: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    paddingTop: 20,
    alignItems: 'center',
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContianer: {
    width: '100%',
    height: '80%',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // overflow: 'hidden',
  },
  text: {
      fontSize: 20 
  }
});

export default User;
