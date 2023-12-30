import React from "react";
import { View, Pressable, Text, Image, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";

const MealIteam = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  // navigation,
  // handlePress,
  id,
}) => {
  const navigation = useNavigation();
  const handelOnPress = () => {
    navigation.navigate("Meal Detail", {
      mealId: id,
    });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.Pressed : null)}
        // onPress={handlePress.bind(this, title)}
        onPress={handelOnPress}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsItem}>{duration} MIN</Text>
          <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealIteam;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
   
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 15,
  },
  Pressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
