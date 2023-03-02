import { useEffect, useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { parseDate, parseDateToGMTString, setNotificatonSchedule } from '../utils/functions';
import { setStoreData } from '../utils/storage';
import { navigateByDateValidity } from '../utils/navigation';
import Toast from '../components/Toast';
import DatePicker from 'react-native-modern-datepicker';
import GradientBackground from '../components/GradientBackground';
import FlatButton from '../components/FlatButton';
import RoundedButton from '../components/RoundedButton';
import CalendarScreenStyles from '../styles/calendarScreenStyles';
import CommonStyles from '../styles/commonStyles';
import Constants from '../utils/constants';
import Colors from '../utils/colors';

const CalendarScreen = ({ navigation, route }) => {
    const toastRef = useRef(null);
    const [subheadingText, setSubheadingText] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [dateTime, setDateTime] = useState(null);
    const [userDate, setUserDate] = useState(route.params?.date ?? parseDate());

    useEffect(() => {
        if (route.params?.validity === Constants.unset) {
            setSubheadingText('Pick a date and time');
        }
        else {
            setIsDisabled(false);
            setSubheadingText(parseDateToGMTString(route.params?.date));
        };
    }, []);

    const handleClose = () => {
        if (!isDisabled)
            return navigateByDateValidity(navigation);

        toastRef.current.show('Please select a date to continue.');
    };

    const handlePress = () => {
        setStoreData(dateTime, Constants.date_key);
        setUserDate(dateTime);
        setSubheadingText(parseDateToGMTString(dateTime));
        setIsDisabled(false);
        if (route.params?.notification)
            setNotificatonSchedule(dateTime, Constants.valid)

        toastRef.current.show('Date Saved.');
    };

    return (
        <GradientBackground>
            <SafeAreaView style={CommonStyles.closeView}>
                <RoundedButton
                    handlePress={handleClose}
                    isDisabled={isDisabled}
                    iconType={"close"}
                />
            </SafeAreaView>
            <View style={[CommonStyles.centerView, CommonStyles.shadow, CommonStyles.elevation, CalendarScreenStyles.calendarView]}>
                <View>
                    <Text style={CalendarScreenStyles.heading}>When does the magic begin?</Text>
                    <Text style={CalendarScreenStyles.subheading}>{subheadingText}</Text>
                </View>
                <View>
                    <DatePicker
                        mode="datepicker"
                        minuteInterval={5}
                        minimumDate={new Date().toISOString()}
                        maximumDate={String(new Date().getFullYear() + 2)}
                        current={userDate}
                        selected={userDate}
                        onSelectedChange={date => setDateTime(date)}
                        options={{
                            backgroundColor: Colors.offWhite,
                            textHeaderColor: Colors.lighterBlack,
                            textDefaultColor: Colors.lighterBlack,
                            selectedTextColor: Colors.offWhite,
                            mainColor: Colors.pink,
                            textSecondaryColor: Colors.purple,
                            borderColor: 'transparent',
                            defaultFont: Constants.mainFont,
                            headerFont: Constants.mainFont,
                            textFontSize: 14,
                        }}
                        style={CalendarScreenStyles.datePicker}
                    />
                    <FlatButton
                        handlePress={handlePress}
                        buttonText={"confirm"}
                    />
                </View>
                <View>
                    <Image
                        style={CalendarScreenStyles.logoLarge}
                        source={require('../assets/img/logoLarge.png')}
                    />
                </View>
            </View>
            <Toast ref={toastRef} />
        </GradientBackground>
    );
};

export default CalendarScreen;