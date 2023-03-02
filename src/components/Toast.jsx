import { useImperativeHandle, forwardRef } from 'react';
import { Platform } from 'react-native';
import{ BaseToast } from 'react-native-toast-message';
import ToastMessage from 'react-native-toast-message';
import ToastStyles from '../styles/toastStyles';

const Toast = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        show(text) {
            ToastMessage.show({
                type: 'info',
                position: 'top',
                text1: text,
                topOffset: Platform.OS === 'ios' ? 50 : 45,
            });
        }
    }), []);

    const toastConfig = {
        info: (props) => (
            <BaseToast
                {...props}
                style={ToastStyles.toast}
                text1Style={ToastStyles.toastText}
            />
        ),
    };

    return <ToastMessage config={toastConfig} />;
});

export default Toast;