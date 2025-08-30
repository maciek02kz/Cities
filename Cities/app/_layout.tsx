// This is used to to define the root layout of the app.

import { Stack } from "expo-router";
import MenuBar from "./components/MenuBar";

export default function RootLayout() {
  return (
    <>
      {/* Display MenuBar on all pages */}
      <MenuBar />
      <Stack
        screenOptions={{
          headerShown: false, // Hide the default Expo Router header
        }}
      />
    </>
  );
}
