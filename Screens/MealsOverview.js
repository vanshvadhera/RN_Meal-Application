import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealIteam from "../Components/MealIteam";
import { useLayoutEffect } from "react";

const MealsOverview = ({ route, navigation }) => {
  const catIt = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    // return mealItem.categoryIds.indexOf(catIt) >= 0;
    return mealItem.categoryIds.includes(catIt);
  });
  // const handleNavigation = (data) => {
  //   console.log("Handle Navigation Pressed", data);
  //   navigation.navigate("Meal Detail", {
  //     mealTitle: data,
  //   });
  // };

  const categoryTitle = CATEGORIES.find((cat) => cat.id === catIt).title;
  // Wrong Way to do this
  // navigation.setOptions({
  //   title: categoryTitle,
  // });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
      headerBackTitle: "Back",
    });
  });

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

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
