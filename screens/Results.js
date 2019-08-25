import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


class Result extends React.PureComponent{
  constructor(props){
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const photo = navigation.getParam('image', {});
    return(
      <View style={styles.buttonContainer}>
        <Image 
        source={{uri: `data:image/jpeg;base64,${photo}`}} 
        style={{flex:1, width: Dimensions.get('window').width, height: Dimensions.get('window').width * 4 / 3}} 
        resizeMode="contain" />
      </View>
    )
  }
}

export default Result

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