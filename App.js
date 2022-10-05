import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box } from "native-base";
import Header from "./components/layout/Header";
import AppStack from "./navigation/AppStack"

export default function App() {
    return (
        <NativeBaseProvider>
            <Header />
            <AppStack />
            <StatusBar style="light" />
        </NativeBaseProvider>
    );
}
