import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
    );
};

export default AppStack;
