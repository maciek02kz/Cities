import { View, Text, StyleSheet } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <Text style={styles.content}>
        Reach out to us at support@citiesapp.com for any inquiries.
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