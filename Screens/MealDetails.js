import React, { useLayoutEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../Store/Context/Favorites-Context";
import { useDispatch, useSelector } from "react-redux";
// import { CATEGORIES } from "../data/dummy-data";
import { storeActions } from "../Store/Redux/Store";

const MealDetails = ({ route, navigation }) => {
  // const favoriteContext = useContext(FavoritesContext);
  const favoriteMealId = useSelector((state) => state.FavoriteStore.ids); 
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsfav = favoriteContext.ids.includes(mealId);
  const mealIsfav = favoriteMealId.includes(mealId);

  const handlePress = () => {
    console.log("selectedMeal", selectedMeal.title);
    if (mealIsfav) {
      // favoriteContext.removeFavorite(mealId);
      dispatch(storeActions.removeFavorite({ id: mealId }));
    }
    if (!mealIsfav) {
      // favoriteContext.addFavorite(mealId);
      dispatch(storeActions.addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerBackTitle: "Back",
      headerRight: () => {
        return (
          <View>
            {mealIsfav ? (
              <Button title="Remove Favourite" onPress={handlePress} />
            ) : (
              <Button title="Favourite" onPress={handlePress} />
            )}
          </View>
        );
      },
    });
  }, [navigation, handlePress]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.outerContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailsItem}>{selectedMeal.duration} MIN</Text>
          <Text style={styles.detailsItem}>
            {selectedMeal.complexity.toUpperCase()}
          </Text>
          <Text style={styles.detailsItem}>
            {selectedMeal.affordability.toUpperCase()}
          </Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Ingrediantes</Text>
        </View>
        {selectedMeal.ingredients.map((ingrediant) => (
          <View style={styles.textOuterContainer} key={ingrediant}>
            <View style={styles.textContainer}>
              <Text>{ingrediant}</Text>
            </View>
          </View>
        ))}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Steps</Text>
        </View>
        {selectedMeal.steps.map((step) => (
          <View style={styles.textOuterContainer} key={step}>
            <View style={styles.textContainer}>
              <Text>{step}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  outerContainer: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    padding: 16,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontWeight: "bold",
    fontSize: 13,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
    borderBottomWidth: 1,
  },
  subTitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    alignSelf: "center",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    maxWidth: "80%",
    height: 33,
    justifyContent: "center",
    backgroundColor: "#e2b497",
    marginVertical: 4,
    padding: 8,
    borderRadius: 8,
    marginHorizontal: "10%",
  },
  textOuterContainer: {
    align: "center",
    flex: 1,
  },
});
