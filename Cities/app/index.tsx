import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MenuBar from "./components/MenuBar";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Menu */}
      <MenuBar />

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.title}>
          Track and share your favorite cities with your friends
        </Text>
        <Text style={styles.subtitle}>
          DOWNLOAD NOW ON THE APP STORE AND PLAY STORE
        </Text>

        {/* App Store Buttons */}
        <View style={styles.storeButtons}>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/app-store.png")}
              style={styles.storeButton}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/google-play.png")}
              style={styles.storeButton}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* App Screenshot */}
      <View style={styles.screenshotSection}>
        <Image
          source={require("../assets/images/app-screenshot-phone.png")}
          style={styles.phoneImage}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 50, // Add padding to prevent content from being cut off
  },
  heroSection: {
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 30,
  },
  storeButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
  },
  storeButton: {
    width: 150,
    height: 50,
    resizeMode: "contain",
    marginHorizontal: 10,
  },
  screenshotSection: {
    alignItems: "center",
  },
  phoneImage: {
    width: 300,
    height: 600,
    resizeMode: "contain",
  },
});
