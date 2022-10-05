import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavs from "./TabNavs";
import ShowDetailsScreen from "../screens/ShowDetailsScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Movies App"
                    component={TabNavs}
                    options={{
                        headerStyle: {
                            backgroundColor: '#2c3e50',
                        },
                        headerTintColor: '#ffffff'
                    }}
                />
                <Stack.Screen
                    name="ShowDetails"
                    component={ShowDetailsScreen}
                    options={{
                        headerBackTitle: "Back to List",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;
