import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  name: string;
};

function Greeting({name}: Props) {
  return (
    <View>
      <Text>Hello~ {name}</Text>
    </View>
  );
}

export default Greeting;
