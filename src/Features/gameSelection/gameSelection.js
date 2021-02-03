import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';

const gameSelection = (props) => {
    const { navigation } = props;

    const levels = (level) => {
        return (
            <TouchableOpacity style={styles.levels} onPress={() =>( level == 1 ? navigation.navigate('Level1') : level == 2 ? navigation.navigate('Level2') : navigation.navigate('Level3'))} >
                {level == 1 ? (
                    <LottieView
                        source={require('../../assets/animation/data.json')}
                        autoPlay
                        loop
                        style={styles.animation}
                    />
                ) : (level == 2 ? (

                    <View style={{ flexDirection: 'row' }}>
                        <LottieView
                            source={require('../../assets/animation/data.json')}
                            autoPlay
                            loop
                            style={styles.animation}
                        />
                        <LottieView
                            source={require('../../assets/animation/data.json')}
                            autoPlay
                            loop
                            style={styles.animation}
                        />
                    </View>
                ) : (
                        <View style={{ flexDirection: 'row' }}>
                            <LottieView
                                source={require('../../assets/animation/data.json')}
                                autoPlay
                                loop
                                style={styles.animation}
                            />
                            <LottieView
                                source={require('../../assets/animation/data.json')}
                                autoPlay
                                loop
                                style={styles.animation}
                            />
                            <LottieView
                                source={require('../../assets/animation/data.json')}
                                autoPlay
                                loop
                                style={styles.animation}
                            />
                        </View>
                    ))}
            </TouchableOpacity>
        )
    }

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../assets/images/kamalaharris.jpg')}>
            <View style={styles.header}>
                <Text style={styles.headertxt}>SELECT LEVELS</Text>
            </View>

            <View style={styles.mainView}>
                <SafeAreaView backgroundColor={'#f4845f'} opacity={0.95} />
                {levels(1)}
                {levels(2)}
                {levels(3)}
            </View>
        </ImageBackground>
    );
};

export default gameSelection;
