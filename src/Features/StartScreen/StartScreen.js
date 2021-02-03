import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';

const StartScreen = (props) => {
  const { navigation } = props;
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/kamalaharris.jpg')}>
      <View style={styles.mainView}>
      <SafeAreaView backgroundColor={'#f4845f'} opacity={0.95} />
      <View style={styles.header}>
        <Text style={styles.subheaderText}>Let's Know something about Kamala Harris</Text>
      </View>

      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={[styles.button, {position: 'absolute', bottom: 20}]}
          onPress={() => navigation.navigate('GameSelection')}>
          <Text style={styles.txt}>Wanna Play</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;
