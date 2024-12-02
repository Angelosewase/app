import { Stack } from "expo-router";
import "../globals.css";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0d6efd", // Primary color (used for buttons and other components)
    accent: "#6c757d", // Accent color
    text: "#ffffff", // Default text color
  },
};

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* <PaperProvider theme={customTheme}>
        <Stack />
      </PaperProvider> */}
    </Stack>
  );
}
