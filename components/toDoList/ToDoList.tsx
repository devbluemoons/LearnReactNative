import React, {useState} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import DateHead from './DateHead';
import AddToDo from './AddToDo';
import Empty from './Empty';
import List from './List';

/**
 * @description 할 일 목록
 */
function ToDoList() {
  // state
  const [todos, setTodos] = useState<any>([
    {id: 1, text: 'golang', done: true},
    {id: 2, text: 'docker', done: false},
    {id: 3, text: 'k8s', done: false},
  ]);

  // event
  const onInsert = (text: string) => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map((todo: any) => todo.id)) + 1 : 1;

    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
  };

  const onToggle = (id: string) => {
    const nextTodos = todos.map((todo: any) =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );

    setTodos(nextTodos);
  };

  const onRemove = (id: string) => {
    const nextTodos = todos.filter((todo: any) => todo.id !== id);
    setTodos(nextTodos);
  };

  // view
  return (
    <SafeAreaView edges={['bottom']} style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.select({ios: 'padding'})}
        style={styles.avoid}>
        <DateHead />
        {todos.length === 0 ? (
          <Empty />
        ) : (
          <List todos={todos} onToggle={onToggle} onRemove={onRemove} />
        )}
        <AddToDo onInsert={onInsert} />
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
