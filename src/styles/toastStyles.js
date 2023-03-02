import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../utils/colors';
import Constants from '../utils/constants';

const ToastStyles = StyleSheet.create({
    toast: {
        borderLeftColor: Colors.blue,
        borderRadius: 10,
        width: (Dimensions.get('window').width / 100) * 80,
        alignSelf: 'flex-start',
        marginLeft: 15,
        height: 50,
    },
    toastText: {
        fontFamily: Constants.mainFont,
        fontSize: 14,
    },
});

export default ToastStyles;