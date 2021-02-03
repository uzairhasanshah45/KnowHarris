import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from '../StartScreen/styles';

const FailedScreen = (props) => {
  const { navigation } = props;
  const { level } = props.route.params
  const nextpage = level === 1 ? 'Level1' : level === 2 ? 'Level2' : 'Level3';
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/fail.jpg')}>
      <View style={styles.mainView}>
        <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />
        <View style={styles.successHeader}>
          <Text style={styles.headerText}>Sorry</Text>
        </View>
        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/animation/failed.json')}
            autoPlay
            loop
            style={styles.animation2}
          />
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(nextpage)}>
            <Text style={styles.txt}>Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('GameSelection')}>
            <Text style={styles.txt}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default FailedScreen;
