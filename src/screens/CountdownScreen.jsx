import { useState, useEffect, useRef, useCallback } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { isNumberSingular, isTextSingular, parseDateToGMTString } from '../utils/functions';
import Header from '../components/Header';
import GradientBackground from '../components/GradientBackground';
import CountdownScreenStyles from '../styles/CountdownScreenStyles';
import CommonStyles from '../styles/commonStyles';
import Constants from '../utils/constants';

const CountdownScreen = ({ navigation, route }) => {
    let intervalRef = useRef(null);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [hasEnded, setHasEnded] = useState(false);

    const [date, setDate] = useState({
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
    });

    const parseTime = useCallback(() => {
        const userDate = new Date(route.params.date + ':00 UTC');
        const diff = userDate - Date.now();

        setDate({
            ...date,
            days: Math.floor(diff / Constants.day),
            hours: Math.floor((diff % Constants.day) / Constants.hour),
            mins: Math.floor((diff % Constants.hour) / Constants.min),
            secs: Math.floor((diff % Constants.min) / Constants.sec)
        });

        if (!hasLoaded)
            setHasLoaded(true);

        if (new Date() >= userDate)
            setHasEnded(true);
    }, [route.params?.date]);

    useEffect(() => {
        let interval = intervalRef.current;
        interval = setInterval(parseTime, 1000);

        if (hasEnded) {
            clearInterval(interval);
            navigation.navigate('FinalScreen', route.params);
        };

        return () => clearInterval(interval);
    }, [route.params?.date, hasEnded]);

    return (
        <GradientBackground>
            <Header navigation={navigation} route={route} />
            <SafeAreaView style={[CommonStyles.centerView]}>
                {
                    hasLoaded
                        ? (
                            <>
                                <View style={[CountdownScreenStyles.container]}>
                                    <Text style={[CommonStyles.textWaltSmall]}>
                                        {parseDateToGMTString(route.params?.date)}
                                    </Text>
                                </View>
                                <View style={CountdownScreenStyles.container}>
                                    {
                                        [[date.days, 'Day'], [date.hours, 'Hour'], [date.mins, 'Min'], [date.secs, 'Sec']]
                                            .map(([num, text], index) => (
                                                <View key={index} style={[CountdownScreenStyles.textContainer]}>
                                                    <Text style={[CountdownScreenStyles.numbers]}>
                                                        {isNumberSingular(num)}
                                                    </Text>
                                                    <Text style={[CountdownScreenStyles.text]}>
                                                        {text}{isTextSingular(num)}
                                                    </Text>
                                                </View>
                                            ))
                                    }
                                </View>
                                <View style={[CountdownScreenStyles.container]}>
                                    <Text style={[CommonStyles.textDisneyMedium]}>Disneyland Paris</Text>
                                </View>
                            </>
                        )
                        : null
                }
            </SafeAreaView>
        </GradientBackground>
    );
};

export default CountdownScreen;