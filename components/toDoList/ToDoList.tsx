import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import DateHead from './DateHead';
import AddToDo from './AddToDo';
import Empty from './Empty';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

/**
 * @description 할 일 목록
 */
function ToDoList() {
  // view
  return (
    <SafeAreaView edges={['bottom']} style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.select({ios: 'padding'})}
        style={styles.avoid}>
        <DateHead />
        <Empty />
        <AddToDo />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// style
const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default ToDoList;
