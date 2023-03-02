
export const fadeIn = ref => {
    let opacity = 0.0;
    const interval = setInterval(() => {
        if (opacity >= 1.0)
            clearInterval(interval);

        if (opacity > .1) opacity += .01;
        else opacity += .005;

        ref.setNativeProps({
            style: {
                opacity: opacity
            }
        });
    }, 1);
};


