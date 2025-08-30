import { ScrollView, Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* App Images Section */}
      <View style={styles.imageSection}>
        <Text style={styles.sectionTitle}>Welcome to Cities</Text>
        <Image
          source={require("../assets/images/app-screenshot1.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/images/app-screenshot2.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/images/app-screenshot3.png")}
          style={styles.image}
        />
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About the App</Text>
        <Text style={styles.aboutText}>
          Cities is your go-to app for exploring and discovering amazing places
          around the world. Navigate through the app to find hidden gems, plan
          your trips, and share your experiences with others.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  imageSection: {
    marginBottom: 30,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
  aboutSection: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
});
