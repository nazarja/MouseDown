import { Text, View, Pressable, SafeAreaView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import HeaderStyles from '../styles/headerStyles';
import Colors from '../utils/colors';

const Header = ({ navigation, route }) => {

    const handleCalendarPress = () => {
        navigation.navigate('CalendarScreen', route.params);
    }

    const handleNoticationsPress = () => {
        navigation.navigate('NotificationsScreen', route.params);
    }

    return (
        <View style={[HeaderStyles.outerHeaderView]}>
            <SafeAreaView>
                <View style={[HeaderStyles.innerHeaderView]}>
                    <Pressable onPress={handleNoticationsPress}>
                        <EvilIcons name={'bell'} size={34} color={Colors.offWhite} />
                    </Pressable>
                    <Text style={[HeaderStyles.headerText]}>MouseDown</Text>
                    <Pressable onPress={handleCalendarPress}>
                        <EvilIcons name={'calendar'} size={34} color={Colors.offWhite} />
                    </Pressable>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Header;