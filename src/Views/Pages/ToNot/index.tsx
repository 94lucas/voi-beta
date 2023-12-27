
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';

export function ToNot() {

  return (
    <SafeAreaView>
        <Text>To Not</Text>
        <View>
          <TouchableOpacity>
              <Octicons name="diff-added" size={24} color="black" />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}


