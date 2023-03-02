import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../utils/colors';
import CommonStyles from '../styles/commonStyles';

const GradientBackground = ({ children }) => {
    return (
        <>
            <StatusBar style={"light"} />
            <LinearGradient
                style={CommonStyles.fullScreen}
                colors={[Colors.purple, Colors.pink]}
                start={{ x: 0.3, y: 0.6 }}
                end={{ x: 0.9, y: 0.05 }}
            >
                {children}
            </LinearGradient>
        </>
    );
};

export default GradientBackground;