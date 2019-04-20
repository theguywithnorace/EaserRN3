import React from 'react'
import { StyleSheet, View, Text,  } from 'react-native'
import {IndicatorViewPager,PagerTabIndicator, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager'
import Swiper from './Swiper'
import Map from './Map'

class Home extends React.Component {


    _renderTabIndicator() {
        let tabs = [{
            iconSource: require('../Images/Login/icone_map.png'),
            selectedIconSource: require('../Images/Login/icone_map.png'),
        },{
            iconSource: require('../Images/Login/fire.png'),
            selectedIconSource: require('../Images/Login/fire.png'),


        },{
            iconSource: require('../Images/Login/message.png'),
            selectedIconSource: require('../Images/Login/message.png'),

        }];
        return <PagerTabIndicator tabs={tabs} />;
    }

    render() {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{flex:1,  backgroundColor:'white'}}
                    indicator={this._renderTabIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Map/>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Swiper/>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    }
})

export default Home
