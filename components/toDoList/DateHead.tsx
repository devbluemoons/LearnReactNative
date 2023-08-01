import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

/**
 * @description date head
 */
function DateHead() {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const currentTime = `${year}년 ${month}월 ${day}일`;

  // hook
  const {top} = useSafeAreaInsets();

  // view
  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{currentTime}</Text>
      </View>
    </>
  );
}

// style
const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
