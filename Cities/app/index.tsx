import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadAssets = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setIsLoaded(true);
      } catch (error) {
        console.error("Error loading assets:", error);
      }
    };

    preloadAssets();
  }, []);

  if (!isLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 50,
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
    width: 200, // Increased width
    height: 70, // Increased height
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
