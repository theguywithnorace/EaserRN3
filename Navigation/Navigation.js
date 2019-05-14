import React from 'react'
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation'
import Login from "../Activities/Login/Login"
import WhyFb from "../Activities/Login/WhyFb";
import Home from "../Activities/Home";
import Swiper from "../Activities/Swiper";

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
        screen:Swiper,
        navigationOptions: {
        },
    }
    });

export default createAppContainer(TestStackNavigator)
