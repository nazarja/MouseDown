import { Pressable } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import CommonStyles from '../styles/commonStyles';
import ButtonStyles from '../styles/buttonStyles';

const RoundedButton = ({ handlePress, iconType, isDisabled }) => {
    return (
        <Pressable
            onPress={handlePress}
            style={isDisabled ? ButtonStyles.isDisabled : null}
        >
            <EvilIcons style={[ButtonStyles.roundedButtonContainer, CommonStyles.shadow, CommonStyles.elevation]} name={iconType} size={34} color="black" />
        </Pressable>
    );
};

export default RoundedButton;