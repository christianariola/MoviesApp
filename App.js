import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import AppStack from "./navigation/AppStack"

export default function App() {
    return (
        <NativeBaseProvider>
            <AppStack />
            <StatusBar style="light" />
        </NativeBaseProvider>
    );
}
