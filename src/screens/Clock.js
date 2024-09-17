import React from 'react';
import {View, Text} from 'react-native';

const Clock = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          fontWeight: '500',
          color: 'black',
          marginTop: 20,
          marginLeft: 20,
        }}>
        Clock
      </Text>
    </View>
  );
};

export default Clock;
