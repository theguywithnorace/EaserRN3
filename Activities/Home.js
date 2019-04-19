import React from 'react'
import { StyleSheet, View, Text,  } from 'react-native'
import {IndicatorViewPager,PagerTabIndicator, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager'

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
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
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
