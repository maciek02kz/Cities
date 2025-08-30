import { View, Text, StyleSheet } from "react-native";

export default function Download() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Download</Text>
      <Text style={styles.content}>
        Download the Cities app from the App Store or Google Play.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
  },
});