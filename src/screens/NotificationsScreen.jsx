import { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Switch } from 'react-native';
import { navigateByDateValidity } from '../utils/navigation';
import { setStoreData, removeStoreData } from '../utils/storage';
import { setNotificatonSchedule, removeNotificatonSchedule, getNotificationPermission } from '../utils/functions';
import GradientBackground from '../components/GradientBackground';
import RoundedButton from '../components/RoundedButton';
import Toast from '../components/Toast';
import NotificationsScreenStyles from '../styles/notificationsScreenStyles';
import CommonStyles from '../styles/commonStyles';
import Colors from '../utils/colors';
import Constants from '../utils/constants';

const NotificationsScreen = ({ navigation, route }) => {
    const toastRef = useRef(null);
    const [hasNotification, setHasNotification] = useState(route.params?.notification);

    const handleClose = () =>
        navigateByDateValidity(navigation);

    const handleNotification = async () => {
        if (hasNotification) {
            setHasNotification(false);
            removeNotificatonSchedule();
            removeStoreData(Constants.notification_key);
        }
        else if (!hasNotification) {
            if (await getNotificationPermission()) {
                setHasNotification(true);
                setNotificatonSchedule(route.params?.date, route.params?.validity);
                setStoreData(true, Constants.notification_key);
            }
            else {
                toastRef.current.show('You must allow notifications.');
            };
        };
    };

    return (
        <GradientBackground>
            <SafeAreaView style={CommonStyles.closeView}>
                <RoundedButton
                    handlePress={handleClose}
                    isDisabled={false}
                    iconType={"close"}
                />
            </SafeAreaView>
            <View style={[CommonStyles.centerView, NotificationsScreenStyles.view]}>
                <View style={[CommonStyles.container, NotificationsScreenStyles.container]}>
                    <Text style={[CommonStyles.textWaltSmall, NotificationsScreenStyles.text]}>Notifications will only start 31 days before your chosen date.</Text>
                </View>
                <View style={[CommonStyles.container, NotificationsScreenStyles.container]}>
                    <Text style={[CommonStyles.textWaltSmall, NotificationsScreenStyles.text]}>Notifications {hasNotification ? 'Enabled' : 'Disabled'}</Text>
                    <Switch
                        trackColor={{ true: Colors.lightBlue, false: '#666' }}
                        thumbColor={hasNotification ? Colors.blue : '#444'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={handleNotification}
                        value={hasNotification}
                    />
                </View>
            </View>
            <Toast ref={toastRef} />
        </GradientBackground>
    );
};

export default NotificationsScreen;