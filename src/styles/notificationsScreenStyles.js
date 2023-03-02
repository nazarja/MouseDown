import { StyleSheet } from 'react-native';

const NotificationsScreenStyles = StyleSheet.create({
    view: {
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    container: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        width: 180,
        textAlign: 'center',
        lineHeight: 20,
    }
});

export default NotificationsScreenStyles;