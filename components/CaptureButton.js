import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default CaptureButton = ({ snap }) => (
  <View>
    <TouchableOpacity
      onPress={snap}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}> Take Picture </Text>
    </TouchableOpacity>
  </View>
);