import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../styles/theme";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Finder</Text>

      <Text style={styles.description}>
        Search delicious recipes from around the world.
      </Text>

      <TouchableOpacity 
        style={[styles.button, theme.shadow.medium]}
        onPress={() => navigation.navigate("Recipes")}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>🔍 Search Recipes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
  },
  title: {
    ...theme.typography.h1,
    color: theme.primary,
    textAlign: "center",
    marginBottom: theme.spacing.md,
    textShadowColor: "rgba(0,0,0,0.1)",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  description: {
    ...theme.typography.body,
    color: theme.textSecondary,
    textAlign: "center",
    marginBottom: theme.spacing.xl,
    lineHeight: 24,
    paddingHorizontal: theme.spacing.md,
  },
  button: {
    backgroundColor: theme.primary,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.xl,
    minWidth: 240,
  },
  buttonText: {
    color: theme.surface,
    ...theme.typography.h3,
    textAlign: "center",
  },
});
