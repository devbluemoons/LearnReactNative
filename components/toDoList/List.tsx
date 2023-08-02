import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ToDoItem from './ToDoItem';

/**
 * @description 목록
 */
function List({todos, onToggle, onRemove}: any) {
  // view
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <ToDoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}

// style
const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default List;
