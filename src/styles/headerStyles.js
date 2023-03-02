import { StyleSheet, StatusBar, Platform } from 'react-native';
import Colors from '../utils/colors';
import Constants from '../utils/constants';

const HeaderStyles = StyleSheet.create({
    outerHeaderView: {
        zIndex: 5,
        backgroundColor: Colors.fadedWhite,
    },
    innerHeaderView: {
        marginTop:  StatusBar.currentHeight,
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    headerText: {
        fontFamily: Constants.disneyFont,
        fontSize: Platform.OS === 'ios' ? 25 : 23,
        lineHeight: Platform.OS === 'ios' ? 25 * 1.1 : 23 * 1.1,
        color: Colors.offWhite,
    },
});

export default HeaderStyles;