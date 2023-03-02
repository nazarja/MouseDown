import { useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { navigateByDateValidity } from '../utils/navigation';
import { fadeIn } from '../utils/animations';
import GradientBackground from '../components/GradientBackground';
import SplashScreenStyles from '../styles/splashScreenStyles';
import CommonStyles from '../styles/commonStyles';

const SplashScreen = ({ navigation }) => {
    const opacityRef = useRef(null);

    useEffect(() => {
        fadeIn(opacityRef.current);

        setTimeout(() => {
            navigateByDateValidity(navigation);
        }, 5000);
    }, []);

    return (
        <GradientBackground>
            <SafeAreaView ref={opacityRef} style={[CommonStyles.centerView, CommonStyles.noOpacity, SplashScreenStyles.view]}>
                <View>
                    <Text style={[SplashScreenStyles.logo, CommonStyles.textDisneyLarge]}>MouseDown</Text>
                </View>
                <View>
                    <Image
                        style={[SplashScreenStyles.mickeyLogo]}
                        source={require('../assets/img/logo.png')}
                    />
                </View>
            </SafeAreaView>
        </GradientBackground>
    );
};

export default SplashScreen;