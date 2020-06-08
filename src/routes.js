import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./screens/Main";
import List from "./screens/List";

import Header from "./Components/Header";

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      headerMode="screen"
      mode="modal"
      screenOptions={{
        headerStyle: {
          height: 80,
        },
        header: ({ previous, navigation }) => {
          return <Header previous={previous} navigation={navigation} />;
        },
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};

export default Routes;

/*

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      List,
    },
    {
      defaultNavigationOptions: (navigation) => ({
        header: <Header {...navigation} />,
      }),
    }
  )
);

*/
