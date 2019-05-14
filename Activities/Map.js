import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import RNLocation from "react-native-location";


class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            location: null
        };
    }

    componentWillMount() {
        RNLocation.configure({
            distanceFilter: 2.0
        });

        RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
                detail: "fine",
                rationale: {
                    title: "Location permission",
                    message: "We use your location to demo the library",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel"
                }
            }
        }).then(granted => {
            if (granted) {
                this._startUpdatingLocation();
            }
        });
    }

    _startUpdatingLocation = () => {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
            locations => {
                this.setState({ location: locations[0] });
            }
        );
    };

    componentWillUnmount(): void {
        this.locationSubscription && this.locationSubscription();
        this.setState({ location: null });
    }

    render() {
        const {location} = this.state
      //  console.log(location.latitude)
        return (
            <View style={styles.main_container}>
                {location && (
                    <React.Fragment>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    initialRegion={{
                        latitude:location.latitude,
                        longitude:location.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0111,
                    }}
                >
                    <Marker
                        coordinate={{latitude: location.latitude, longitude: location.longitude}}
                    />

                    {console.log(location.latitude)}
                </MapView>

                        <View style={{ alignItems: "flex-start" }}>
                            <View style={styles.row}>
                                <View style={[styles.detailBox, styles.half]}>
                                    <Text style={styles.valueTitle}>Latitude</Text>
                                    <Text style={styles.detail}>{location.latitude}</Text>
                                </View>

                                <View style={[styles.detailBox, styles.half]}>
                                    <Text style={styles.valueTitle}>Longitude</Text>
                                    <Text style={styles.detail}>{location.longitude}</Text>
                                </View>
                            </View>

                            <View style={styles.row}>
                                <View style={[styles.detailBox, styles.full]}>
                                    <Text style={styles.json}>{JSON.stringify(location)}</Text>
                                </View>
                            </View>
                        </View>
                    </React.Fragment>
                )}
                 </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    map: {
        flex:1
     //   ...StyleSheet.absoluteFillObject,
    },
})

export default Map
