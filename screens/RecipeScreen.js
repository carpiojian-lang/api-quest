import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet
} from "react-native";
import { theme } from "../styles/theme";

export default function RecipeScreen() {

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchRecipes = async () => {
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );

      const data = await response.json();

      setRecipes(data.meals || []);

    } catch (error) {
      setErrorMsg("Failed to fetch recipes. Check your connection.");
    }

    setLoading(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search for delicious recipes..."
          placeholderTextColor={theme.textSecondary}
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />

        <TouchableOpacity 
          style={[styles.searchButton, theme.shadow.medium]}
          onPress={fetchRecipes}
          disabled={loading}
        >
          <Text style={styles.searchButtonText}>{loading ? "Searching..." : "🔍 Search"}</Text>
        </TouchableOpacity>

        {errorMsg ? (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{errorMsg}</Text>
          </View>
        ) : null}

        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={theme.primary} />
          </View>
        )}

        {recipes.length === 0 && !loading && search ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No recipes found</Text>
            <Text style={styles.emptyText}>Try different keywords</Text>
          </View>
        ) : (
          <FlatList
            data={recipes}
            keyExtractor={(item) => item.idMeal}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={[styles.card, theme.shadow.medium]}>
                <Image
                  source={{ uri: item.strMealThumb }}
                  style={styles.image}
                  resizeMode="cover"
                />
                <View style={styles.cardContent}>
                  <Text style={styles.name} numberOfLines={1}>{item.strMeal}</Text>
                  {item.strCategory && <Text style={styles.category}>{item.strCategory}</Text>}
                </View>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    shadowColor: theme.shadow.medium.shadowColor,
    ...theme.shadow.medium,
  },
  searchButton: {
    backgroundColor: theme.primary,
    paddingVertical: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  searchButtonText: {
    color: theme.surface,
    ...theme.typography.h3,
    fontWeight: "700",
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  errorContainer: {
    backgroundColor: "rgba(239,68,68,0.1)",
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: theme.error,
  },
  error: {
    color: theme.error,
    ...theme.typography.body,
    fontWeight: "600",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: theme.spacing.xl,
  },
  emptyTitle: {
    ...theme.typography.h2,
    color: theme.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  emptyText: {
    ...theme.typography.caption,
    color: theme.textSecondary,
    textAlign: "center",
  },
  listContent: {
    paddingBottom: theme.spacing.lg,
  },
  card: {
    backgroundColor: theme.surface,
    marginVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
  },
  cardContent: {
    padding: theme.spacing.md,
  },
  name: {
    ...theme.typography.h3,
    color: theme.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  category: {
    ...theme.typography.caption,
    color: theme.textSecondary,
  },
});
