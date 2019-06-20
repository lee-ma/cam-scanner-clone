import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Button } from 'react-native';

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
      coordinates: null
    }
  }

  processImage = () => {
    console.log(photo);
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
            <Button style={{padding: "2.5 5"}} title="Confirm Selection" onPress={this.processImage} />
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