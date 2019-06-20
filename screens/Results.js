import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ResultImage = ({ snap }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.cameraIcon}
      onPress={snap}>
      <Text style={styles.text}><MaterialCommunityIcons name="circle-slice-8" size={48} color="white"/></Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  cameraIcon: {
    display: "flex",
    height: "100%",
    alignItems: "center",
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