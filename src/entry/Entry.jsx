import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import Navigator from "../navigation/Navigator";
import GradientBackground from '../components/GradientBackground';

const App = () => {
    const [fontsLoaded] = useFonts({
        'waltograph': require('../assets/fonts/waltograph.otf'),
        'avenir': require('../assets/fonts/avenir.otf'),
    });

    return (
        <GradientBackground>
            {
                fontsLoaded
                    ? <Navigator />
                    : null
            }
        </GradientBackground>
    );
};

export default registerRootComponent(App);