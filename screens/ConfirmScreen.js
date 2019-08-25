import React from 'react';
import {decode as atob, encode as btoa} from 'base-64';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Button } from 'react-native';


function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach((b) => binary += String.fromCharCode(b));

  return window.btoa(binary);
};

class ConfirmScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Select Region to Scan',
    headerStyle: {
      backgroundColor: '#0003C7',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      grayscale: null
    }
  }

  processImage = (photo) => {

    fetch('https://tranquil-atoll-18580.herokuapp.com/scan', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      body: JSON.stringify({
        'image': photo.base64
      })
    })
    .then(response => response.json())
    .then((response) => {

      console.log(response);

      const image = response.image;

      this.props.navigation.navigate('Result', {image});
    })
    .catch(error => console.log(error));
  }

  render() {
    const { navigation } = this.props;
    const photo = navigation.getParam('photo', {});
    const { uri } = photo;
    return (
      <View style={styles.container}>
        <Image 
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width * 4 / 3
          }} 
          source={{uri}} />
          <TouchableOpacity style={styles.confirmBtn}>
            <Button style={{padding: "2.5 5"}} title="Confirm Selection" onPress={this.processImage(photo)} />
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  confirmBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
  }
});

export default ConfirmScreen