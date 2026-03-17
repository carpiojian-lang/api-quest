import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Finder</Text>

      <Text style={styles.description}>
        Search delicious recipes from around the world.
      </Text>

      <Button
        title="Search Recipes"
        onPress={() => navigation.navigate("Recipes")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  },

  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30
  }
});
