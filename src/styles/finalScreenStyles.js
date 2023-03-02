import { StyleSheet, Dimensions, Platform, StatusBar  } from 'react-native';
import Colors from '../utils/colors';
import Constants from '../utils/constants';

const FinalScreenStyles = StyleSheet.create({
    finalScreenView: {
        justifyContent: 'flex-end',
        top: 35,
    },
    finalScreenImage: {
        opacity: .175,
        resizeMethod: 'auto',
        resizeMode: 'cover',
        width: Dimensions.get('window').width + 90,
        height: Platform.OS === 'ios' ? Dimensions.get('window').height - 150 : Dimensions.get('window').height - 125,
        marginLeft: 90,
        alignSelf: 'flex-end',
    },
    finalScreenConfetti: {
        opacity: .8,
        position: 'absolute',
        zIndex: 4,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Platform.OS === 'ios' ? Dimensions.get('window').height - 85: Dimensions.get('window').height - (StatusBar.currentHeight + 20),
    },
    finalScreenTextView: {
        position: 'absolute',
        zIndex: 1,
        justifyContent: 'space-around',
        width: Dimensions.get('window').width - 25,
        height: Dimensions.get('window').height,
    },
    finalScreenText: {
        alignSelf: 'center',
        color: Colors.offWhite,
        fontFamily: Constants.disneyFont,
    },
    finalScreenDate: {
        alignSelf: 'center',
        color: Colors.offWhite,
        fontFamily: Constants.mainFont,
        fontSize: 22,
        lineHeight: 22 * 1.1,
        marginTop: 20,
    },
    finalScreenTopText: {
        fontSize: 40,
        lineHeight: 40 * 1.1,
    },
    finalScreenBottomText: {
        fontSize: 43,
        lineHeight: 43 * 1.1,
    },
    logoLarge: {
        resizeMethod: 'auto',
        resizeMode: 'contain',
        width: 180,
        height: 100,
        alignSelf: 'center',
    },
});

export default FinalScreenStyles;