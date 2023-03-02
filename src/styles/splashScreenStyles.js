import { StyleSheet, Dimensions } from 'react-native';

const SplashScreenStyles = StyleSheet.create({
    view: {
        marginTop: (Dimensions.get('window').height / 100) * 15,
        marginBottom: (Dimensions.get('window').height / 100) * 5,
        justifyContent: 'space-between',
    },
    mickeyLogo: {
        resizeMethod: 'auto',
        resizeMode: 'contain',
        width: 40,
        opacity: .6,
    }
});

export default SplashScreenStyles;