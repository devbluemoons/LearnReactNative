import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

/**
 * @description 빈 영역
 */
function Empty() {
  // variable
  // const source = {uri: 'https://via.placeholder.com/750'};

  // view
  return (
    <View style={styles.block}>
      <Image
        source={require('../../assets/images/young_and_happy.png')}
        style={styles.image}
        resizeMode="center"
      />
      <Text style={styles.description}>Nothing to do</Text>
    </View>
  );
}

// style
const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    // backgroundColor: 'gray',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});

export default Empty;
