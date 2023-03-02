import * as Notifications from 'expo-notifications';
import Constants from "./constants";

export const parseNumber = int => {
    int = int.toString();
    return int.length === 1
        ? '0' + int
        : int;
};

export const parseDate = date => {
    if (!date) date = new Date();
    return `${date.getFullYear()}-${parseNumber(date.getMonth() + 1)}-${parseNumber(date.getDate() + 1)}`;
};

export const parseDateToGMTString = date => {
    date = new Date(date).getTime() + (1 * 60 * 60 * 1000);
    return new Date(date).toUTCString().slice(0, -7)
};

export const isNumberSingular = number =>
    String(number).length === 1 ? `0${number}` : number;

export const isTextSingular = number =>
    number === 1 ? '' : 's';

export const getNotificationPermission = async () => {
    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('mousedown', {
            name: 'MouseDown',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    };

    const { status } = await Notifications.getPermissionsAsync();

    if (status === 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted')
            return false;
    };

    return true;
};

export const setNotificatonSchedule = async (date, validity) => {
    if (Constants.valid === validity) {
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: false,
            }),
        });

        let { notificationDate, endDate } = parseNotificationDates(null, date);
        const daysBetween = daysBetweenDates(notificationDate, endDate);

        if (daysBetween > 31) {
            const newNotificationDate = new Date(endDate.setDate(endDate.getDate() - 31));
            const newDates = parseNotificationDates(newNotificationDate, date)
            notificationDate = newDates.notificationDate;
            endDate = newDates.endDate;
        };

        while (notificationDate < endDate) {
            createScheduledNotification(notificationDate, `The magic begins in ${daysUntilNotificationsEnd(notificationDate, endDate)} days`);
            notificationDate.setDate(notificationDate.getDate() + 1);
        }

        createScheduledNotification(endDate, `The magic begins now, the wait is over :)`)
    };
};

export const createScheduledNotification = (notificationDate, notificationText) => {
    Notifications.scheduleNotificationAsync({
        content: {
            title: 'MouseDown',
            body: notificationText,
        },
        trigger: {
            date: new Date(notificationDate),
        },
    });
};

export const parseNotificationDates = (notificationDate=null, endDate) => {
    notificationDate =  notificationDate === null ? new Date() : new Date(notificationDate);
    notificationDate.setDate(notificationDate.getDate() + 1);
    notificationDate.setHours(9);
    notificationDate.setMinutes(0);
    notificationDate.setSeconds(0);
    return { notificationDate, endDate: new Date(endDate) };
};

export const removeNotificatonSchedule = () =>
    Notifications.cancelAllScheduledNotificationsAsync();

export const daysUntilNotificationsEnd = (notificationDate, endDate) =>
    Math.floor((endDate - notificationDate) / (1000 * 60 * 60 * 24))

export const scheduledNotificationsData = async () => {
    const scheduled = await Notifications.getAllScheduledNotificationsAsync();
    return scheduled.map(s => new Date(s.trigger.value)).sort((a, b) => a > b).map(s => s.toString());
};

export const daysBetweenDates = (notificationDate, endDate) =>{
    let difference = notificationDate.getTime() - endDate.getTime();
    return Math.abs(Math.ceil(difference / (1000 * 3600 * 24)));
};






