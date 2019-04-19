import React from 'react'
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation'
import Login from "../Activities/Login"
import WhyFb from "../Activities/WhyFb";
import Home from "../Activities/Home";

const TestStackNavigator = createStackNavigator({

    Login: {
        screen: Login,
        navigationOptions: {
            header:null
        },
    },
    WhyFb:{
        screen:WhyFb
    },
    Home:{
        screen:Home,
        navigationOptions: {
        },
    }
    });

export default createAppContainer(TestStackNavigator)
