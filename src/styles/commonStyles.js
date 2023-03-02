import { StatusBar, Platform, StyleSheet } from 'react-native';
import Colors from '../utils/colors';
import Constants from '../utils/constants';

const CommonStyles = StyleSheet.create({
    fullScreen: {
        flex: 1,
    },
    closeView: {
        alignItems: 'flex-end',
        marginHorizontal: 15,
        marginVertical: 15,
        marginTop: Platform.OS === 'ios' ?  60 : StatusBar.currentHeight + 25,
    },
    centerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    container: {
        paddingVertical: 30,
        margin: 30,
        width: 290,
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: Colors.fadedWhite,
        alignItems: 'baseline',
    },
    textWhite: {
        color: Colors.white,
    },
    textDisneyLarge: {
        color: Colors.white,
        fontFamily: Constants.disneyFont,
        fontSize: 60,
        lineHeight: 60 * 1.2,
        textAlign: 'center',
    },
    textDisneyMedium: {
        color: Colors.white,
        fontFamily: Constants.disneyFont,
        fontSize: 30,
        lineHeight: 30 * 1.1,
        textAlign: 'center',
    },
    textDisneySmall: {
        color: Colors.white,
        fontFamily: Constants.disneyFont,
        fontSize: 25,
        lineHeight: 25 * 1.1,
        textAlign: 'center',
    },
    textWaltSmall: {
        color: Colors.white,
        fontFamily: Constants.mainFont,
        fontSize: Platform.OS === 'ios' ? 17 : 15,
        textAlign: 'center',
    },
    noOpacity: {
        opacity: 0,
    },
    textColorLight: {
        color: Colors.white,
    },
    textColorDark: {
        color: Colors.black,
    },
    shadow: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: Colors.shadow,
        shadowOpacity: .4,
        shadowRadius: 3,
    },
    elevation: {
        shadowColor: Colors.shadow,
        elevation: 15,
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 7.5,
    }
});

export default CommonStyles;