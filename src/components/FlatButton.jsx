import { View, Text, Pressable } from 'react-native';
import ButtonStyles from '../styles/buttonStyles';
import CommonStyles from '../styles/commonStyles';

const FlatButton = ({ handlePress, buttonText }) => {
    return (
        <View style={ButtonStyles.flatButtonContainer}>
            <Pressable
                onPress={handlePress}
                style={[ButtonStyles.pressable, CommonStyles.shadow, CommonStyles.elevation]}
                android_ripple={ButtonStyles.android_ripple}
            >
                <Text style={ButtonStyles.flatButtonText}>{buttonText}</Text>
            </Pressable>
        </View>
    );
};

export default FlatButton;