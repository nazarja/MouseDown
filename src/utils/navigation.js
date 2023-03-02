import { checkDateValidity } from "./storage";
import Constants from "./constants";

export const navigateByDateValidity = async navigation => {
    const data = await checkDateValidity();
    
    switch (data?.validity) {
        case Constants.valid:
            return navigation.navigate('CountdownScreen', data);
        case Constants.expired:
            return navigation.navigate('FinalScreen', data);
        case Constants.unset:
            return navigation.navigate('CalendarScreen', data);
        default:
            return navigation.navigate('SplashScreen');
    };
};