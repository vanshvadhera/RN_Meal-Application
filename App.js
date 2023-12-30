import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Button, View } from "react-native";
import CategoriesScreem from "./Screens/CategoriesScreem";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./Screens/MealsOverview";
// import { CATEGORIES } from "./data/dummy-data";
import MealDetails from "./Screens/MealDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import FavoritesScreen from "./Screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./Store/Context/Favorites-Context";
import { Provider } from "react-redux";
import store from "./Store/Redux/Store";

// import { Button } from "react-bootstrap";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreem}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Provider store={store}>
        {/* <FavoritesContextProvider> */}
          <NavigationContainer style={{ flex: 1 }}>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#351410" },
                headerTintColor: "white",
                contentStyle: { backgroundColor: "#3f2f35" },
              }}
            >
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                  // title: "All Categories",
                  // headerStyle: { backgroundColor: "#351410" },
                  // headerTintColor: "white",
                  // contentStyle: { backgroundColor: "#3f2f35" },
                }}
              />
              <Stack.Screen
                name="Meals Overview"
                component={MealsOverview}
                // options={({route, navigation}) => {
                //   const catId = route.params.categoryId;
                //   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
                //   return {
                //     title: selectedCategory.title,
                //   }

                // }}
              />
              <Stack.Screen
                name="Meal Detail"
                component={MealDetails}
                options={{
                  contentStyle: { backgroundColor: "white" },
                  // headerRight: () => {
                  //   return (
                  //     <View>
                  //       <Button title="Tap Me" />
                  //     </View>
                  //   );
                  // },
                }}
              />
            </Stack.Navigator>
            {/* <CategoriesScreem /> */}
          </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: "#fff",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// });
