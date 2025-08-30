import { Stack } from "expo-router";
import MenuBar from "./components/MenuBar";

export default function RootLayout() {
  return (
    <>
      <MenuBar />
      <Stack />
    </>
  );
}
