import React from 'react'
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation'
import Login from "../Activities/Login/Login"
import WhyFb from "../Activities/Login/WhyFb";
import Home from "../Activities/Home";
import Test from "../Activities/Test";

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
            headerLeft: null,
            title:'Easer'
        },
    },
    Test:{
        screen:Test,
        navigationOptions: {
        },
    }
    });

export default createAppContainer(TestStackNavigator)
