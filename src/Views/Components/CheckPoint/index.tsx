import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export function CheckPoint() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View>
      <View>
        <Checkbox value={isChecked} onValueChange={setChecked} />
        <Text>Normal checkbox</Text>
      </View>
      <View>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : '#f21'}
        />
        <Text>Custom colored checkbox</Text>
      </View>
      <View>
        <Checkbox disabled value={isChecked} onValueChange={setChecked} />
        <Text>Disabled checkbox</Text>
      </View>
      
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />

    </View>
  );
}

