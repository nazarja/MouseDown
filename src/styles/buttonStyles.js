import { StyleSheet } from 'react-native';
import Colors from '../utils/colors';
import Constants from '../utils/constants';

const ButtonStyles = StyleSheet.create({
    roundedButtonContainer: {
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        lineHeight: 34,
    },
    isDisabled: {
        opacity: .6,
    },
    flatButtonContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        alignSelf: 'center',
    },
    pressable: {
        borderRadius: 10,
        paddingHorizontal: 50,
        paddingVertical: 10,
        backgroundColor: Colors.blue,
    },
    flatButtonText: {
        alignSelf: 'center',
        fontFamily: Constants.mainFont,
        color: Colors.offWhite,
    },
    android_ripple: {
        color: Colors.lightBlue,
        borderless: true,
    },
});

export default ButtonStyles;