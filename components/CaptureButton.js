import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default CaptureButton = ({ snap }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.cameraIcon}
      onPress={snap}>
      <Text style={styles.text}><MaterialCommunityIcons name="circle-slice-8" size={64} color="white"/></Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  cameraIcon: {
    display: "flex",
    height: "100%",
  },
  text: {
    height: "auto",
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#000"
  }
})