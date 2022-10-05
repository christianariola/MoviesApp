import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MoviesScreen from "../screens/MoviesScreen";
import SearchScreen from "../screens/SearchScreen";
import TVShowsScreen from "../screens/TVShowsScreen";

const Tab = createMaterialTopTabNavigator();

const TabNavs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { textTransform: "none", fontWeight: '600', fontSize: 14 },
                tabBarIndicatorStyle: {
                    backgroundColor: "#2c3e50",
                    height: 4,
                },
                tabBarActiveTintColor: '#2c3e50',
            }}
        >
            <Tab.Screen name="Movies" component={MoviesScreen} />
            <Tab.Screen name="Search Results" component={SearchScreen} />
            <Tab.Screen name="TV Shows" component={TVShowsScreen} />
        </Tab.Navigator>
    );
};

export default TabNavs;
