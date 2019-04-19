// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class WhyFb extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text>You have to connect with facebook  to  enjoy a better experience</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    }
})

export default WhyFb
