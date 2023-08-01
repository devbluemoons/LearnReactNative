/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ToDoList from './components/toDoList/ToDoList';

function App() {
  // view
  return (
    <SafeAreaProvider>
      <ToDoList />
    </SafeAreaProvider>
  );
}

export default App;
