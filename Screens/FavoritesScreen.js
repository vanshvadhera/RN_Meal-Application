// import React, { useContext } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../Store/Context/Favorites-Context";
import MealIteam from "../Components/MealIteam";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  // const favoriteContext = useContext(FavoritesContext);
  // const displayMeals = MEALS.filter((meal) =>
  //   favoriteContext.ids.includes(meal.id)
  // );

  const favoritesMealIds = useSelector((state) => state.FavoriteStore.ids);
  const displayMeals = MEALS.filter((meal) =>
    favoritesMealIds.includes(meal.id)
  );

  if (displayMeals.length === 0) {
    return (
      <View
        style={[
          styles.container,
          { alignItems: "center", flex: 1, justifyContent: "center" },
        ]}
      >
        <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>
          No Favorites Meals Found. Start Adding Some!
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <MealIteam
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            // handlePress={handleNavigation}
            id={itemData.item.id}
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
