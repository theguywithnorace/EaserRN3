import React from 'react'
import { StyleSheet, View, Text,  } from 'react-native'
import {IndicatorViewPager,PagerTabIndicator, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager'

class Home extends React.Component {



    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }

    render() {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{flex:1}}
                    indicator={this._renderDotIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>Map</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>Profiles</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>Messages</Text>
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
