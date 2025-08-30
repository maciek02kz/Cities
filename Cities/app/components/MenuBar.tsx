import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function MenuBar() {
  const router = useRouter();

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.menuItem}>HOME</Text>
      </TouchableOpacity>
      <Text style={styles.separator}>/</Text>
      <TouchableOpacity onPress={() => router.push("/about")}>
        <Text style={styles.menuItem}>ABOUT US</Text>
      </TouchableOpacity>
      <Text style={styles.separator}>/</Text>
      <TouchableOpacity onPress={() => router.push("/download")}>
        <Text style={styles.menuItem}>DOWNLOAD CITIES</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  menuItem: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginHorizontal: 10,
  },
  separator: {
    fontSize: 16,
    color: "#aaa",
  },
});