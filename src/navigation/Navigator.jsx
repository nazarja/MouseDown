
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import CountdownScreen from '../screens/CountdownScreen';
import FinalScreen from '../screens/FinalScreen';
import CalendarScreen from '../screens/CalendarScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const Navigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer initialRouteName="SplashScreen">
            <Stack.Navigator>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CountdownScreen"
                    component={CountdownScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FinalScreen"
                    component={FinalScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CalendarScreen"
                    component={CalendarScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="NotificationsScreen"
                    component={NotificationsScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
