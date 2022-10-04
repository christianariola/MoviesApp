import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
      <StatusBar style="auto" />
    </NativeBaseProvider>

  );
}
