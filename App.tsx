// App.tsx
import React from "react";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import SwipableCard from "./src/components/SwipableCard";
import AnimatedList from "./src/components/AnimatedList";
import Gallery from "./src/components/Gallery";
import FadeInCard from "./src/components/FadeInCard";

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>React Native Animations & Optimization</Text>

      <View style={styles.section}>
        <Text style={styles.title}>Swipable Card</Text>
        <SwipableCard />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Animated List</Text>
        <AnimatedList />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Image Gallery</Text>
        <Gallery />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Fade In Card</Text>
        <FadeInCard />
      </View>

      <Button title="Reload" onPress={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
});

export default App;
