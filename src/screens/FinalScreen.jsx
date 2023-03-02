import { useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { parseDateToGMTString } from '../utils/functions';
import Header from '../components/Header';
import GradientBackground from '../components/GradientBackground';
import FinalScreenStyles from '../styles/finalScreenStyles';
import CommonStyles from '../styles/commonStyles';
import Confetti from 'react-native-confetti';
import Colors from '../utils/colors';

const FinalScreen = ({ navigation, route }) => {
    let confettiView;
    const confetti = useRef(null);

    useEffect(() => {
        if (confettiView)
            confettiView.startConfetti();

        return () => {
            if (confettiView)
                confettiView.stopConfetti();
        }
    });

    return (
        <GradientBackground>
            <Header navigation={navigation} route={route} />
            <SafeAreaView style={[CommonStyles.centerView, FinalScreenStyles.finalScreenView]}>
                <View>
                    <Image
                        style={[FinalScreenStyles.finalScreenImage]}
                        source={require('../assets/img/castleFaded.png')}
                    />
                </View>
                <View style={[FinalScreenStyles.finalScreenConfetti]}>
                    <Confetti
                        ref={confetti => confettiView = confetti}
                        confettiCount={100}
                        timeOut={0}
                        untilStopped={false}
                        duration={4500}
                        colors={[Colors.confettiBlue, Colors.confettiGreen, Colors.confettiOrange, Colors.confettiPink, Colors.confettiPurple, Colors.confettiRed, Colors.confettiYellow]}
                        size={1}
                        bsize={1}
                    />
                </View>
                <View style={[CommonStyles.centerView, FinalScreenStyles.finalScreenTextView]}>
                    <View>
                        <View>
                            <Text style={[CommonStyles.textShadow, FinalScreenStyles.finalScreenText, FinalScreenStyles.finalScreenTopText]}>
                                The wait is over
                            </Text>
                        </View>
                        <View>
                            <Text style={[CommonStyles.textShadow, FinalScreenStyles.finalScreenDate]}>
                                {parseDateToGMTString(route.params?.date).slice(0, -6)}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={[CommonStyles.textShadow, FinalScreenStyles.finalScreenText, FinalScreenStyles.finalScreenBottomText]}>
                                The magic has begun
                            </Text>
                        </View>
                        <Image
                            style={FinalScreenStyles.logoLarge}
                            source={require('../assets/img/disneylandParisWhiteLogo.png')}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </GradientBackground>
    );
};

export default FinalScreen;