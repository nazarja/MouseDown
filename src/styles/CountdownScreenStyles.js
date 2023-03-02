import { StyleSheet } from 'react-native';
import Colors from '../utils/colors';
import Constants from '../utils/constants';

const CountdownScreenStyles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        margin: 30,
        width: 290,
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: Colors.fadedWhite,
        justifyContent: 'flex-end',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
    },
    numbers: {
        textAlign: 'right',
        width: 120,
        color: Colors.offWhite,
        fontSize: 60,
        lineHeight: 60 * 1.1,
        marginVertical: 5,
        fontFamily: Constants.mainFont,
    },
    text: {
        color: Colors.offWhite,
        fontSize: 30,
        lineHeight: 30 * 1.1,
        fontFamily: Constants.disneyFont,
    }
});

export default CountdownScreenStyles;