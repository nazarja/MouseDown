import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "./constants";

export const getStoreData = async () => {
    try {
        const dateData = await AsyncStorage.getItem(Constants.date_key);
        const notificationData = await AsyncStorage.getItem(Constants.notification_key);

        return dateData != null
            ? {
                date: JSON.parse(dateData),
                validity: new Date(JSON.parse(dateData)) >= Date.now()
                    ? Constants.valid
                    : Constants.expired,
                notification: notificationData !== null
            }
            : { data: null, validity: Constants.unset, notificationData: notificationData !== null };
    } catch (error) { return null; }
};

export const setStoreData = async (data, key) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        return null;
    }
};

export const removeStoreData = async key => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) { return null; };
};

export const checkDateValidity = async () => {
    return await getStoreData();
};