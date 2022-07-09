// That's a temporary solution to ignore warnings.
// It's not a good solution, but it's a temporary one.
// Warning messages are coming from the use of old packages inside the Carousel and Pagination components.
import { LogBox } from "react-native";

if (__DEV__) {
    const ignoreWarns = [
        "ViewPropTypes will be removed from React Native",
    ];

    const warn = console.warn;
    console.warn = (...arg) => {
        for (const warning of ignoreWarns) {
            if (arg[0].startsWith(warning)) {
                return;
            }
        }
        warn(...arg);
    };

    LogBox.ignoreLogs(ignoreWarns);
}