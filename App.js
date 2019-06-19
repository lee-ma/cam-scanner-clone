import React from 'react';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

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
  
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container }>
          <Camera style={styles.camera} type={this.state.type}>
          </Camera>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  type:
                    this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                });
              }}>
                <Text style={{ fontSize: 18, marginBottom: 10 }}> Flip </Text>
              </TouchableOpacity>
            </View>
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
