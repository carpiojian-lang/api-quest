import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet
} from "react-native";

export default function RecipeScreen() {

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );

      const data = await response.json();

      setRecipes(data.meals || []);

    } catch (error) {
      alert("Error fetching data");
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Search recipe..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <Button title="Search" onPress={fetchRecipes} />

      {loading && <ActivityIndicator size="large" />}

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Image
              source={{ uri: item.strMealThumb }}
              style={styles.image}
            />

            <Text style={styles.name}>{item.strMeal}</Text>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },

  card: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 10
  },

  image: {
    width: "100%",
    height: 150
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  }

});
