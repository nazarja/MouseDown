import { StyleSheet } from 'react-native';
import Colors from '../utils/colors';
import Constants from '../utils/constants';

const CalendarStyles = StyleSheet.create({
    calendarView: {
        backgroundColor: Colors.offWhite,
        marginBottom: 30,
        marginHorizontal: 15,
        borderRadius: 25,
        paddingVertical: 20,
        justifyContent: 'space-around',
    },
    heading: {
        fontSize: 22,
        fontFamily: Constants.mainFont,
        color: Colors.black,
        paddingTop: 20,
        paddingBottom: 10,
    },
    subheading: {
        textAlign: 'center',
        fontFamily: Constants.mainFont,
        marginTop: 10,
        color: Colors.black,
        fontSize: 16,
    },
    datePicker: {
        borderRadius: 10,
        width: 300
    },
    logoLarge: {
        resizeMethod: 'auto',
        resizeMode: 'contain',
        width: 200,
    }
});

export default CalendarStyles;