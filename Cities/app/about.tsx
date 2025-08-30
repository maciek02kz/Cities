import { View, Text, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.content}>
        Learn more about the Cities app and our mission to help you explore the world.
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