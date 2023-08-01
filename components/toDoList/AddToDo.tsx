import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

function AddToDo() {
  // state
  const [text, setText] = useState<string>('');

  // variable
  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../../assets/icons/add_white/add_white.png')} />
    </View>
  );

  // event
  const onPress = () => {
    setText('');
    Keyboard.dismiss();
  };

  // view
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="type to do"
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>
              {button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
}

// style
const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddToDo;
