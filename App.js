import React from 'react';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

import CaptureButton from 'app/components/CaptureButton';

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
    }
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted'
    });
  }

  snap = async() => {
    if(this.camera) {
      let photo  = await this.camera.takePictureAsync();
      console.log(photo);
    }
  }
  
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container }>
          <Camera
            style={styles.camera}
            type={this.state.type}
            ref = {ref => {
              this.camera = ref;
            }}
          >
          </Camera>
          <CaptureButton snap={this.snap} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  camera: {
    width:Dimensions.get('window').width,
    height: Dimensions.get('window').width * 4 / 3,
  }
});

export default App
