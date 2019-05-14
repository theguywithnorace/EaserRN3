import React from "react";
import {
    Linking,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import RNLocation from "react-native-location";
import MapView from "./Map";
import {PROVIDER_GOOGLE} from "react-native-maps";

const repoUrl = "https://github.com/timfpark/react-native-location";

class Test extends React.PureComponent {
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

    _stopUpdatingLocation = () => {
        this.locationSubscription && this.locationSubscription();
        this.setState({ location: null });
    };

    _openRepoUrl = () => {
        Linking.openURL(repoUrl).catch(err =>
            console.error("An error occurred", err)
        );
    };

    render() {
        const { location } = this.state;
        return (
            <ScrollView style={styles.container}>
                <SafeAreaView style={styles.innerContainer}>
                    <View style={styles.main_container}>

                        <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={styles.map}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0111,
                            }}
                        >
                        </MapView>
                    </View>

                    <View style={styles.row}>
                        <TouchableHighlight
                            onPress={this._startUpdatingLocation}
                            style={[styles.button, { backgroundColor: "#126312" }]}
                        >
                            <Text style={styles.buttonText}>Start</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress={this._stopUpdatingLocation}
                            style={[styles.button, { backgroundColor: "#881717" }]}
                        >
                            <Text style={styles.buttonText}>Stop</Text>
                        </TouchableHighlight>
                    </View>

                    {location && (
                        <React.Fragment>
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
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CCCCCC"
    },
    innerContainer: {
        marginVertical: 30
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    repoLink: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "bold",
        color: "#0000CC",
        textDecorationLine: "underline"
    },
    row: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginTop: 5,
        marginBottom: 5
    },
    detailBox: {
        padding: 15,
        justifyContent: "center"
    },
    button: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    buttonText: {
        fontSize: 30,
        color: "#FFFFFF"
    },
    valueTitle: {
        fontFamily: "Futura",
        fontSize: 12
    },
    detail: {
        fontSize: 15,
        fontWeight: "bold"
    },
    largeDetail: {
        fontSize: 20
    },
    json: {
        fontSize: 12,
        fontFamily: "Courier",
        textAlign: "center",
        fontWeight: "bold"
    },
    full: {
        width: "100%"
    },
    half: {
        width: "50%"
    },
    third: {
        width: "33%"
    },
    main_container: {
        flex: 1,
        height: 400,
        width: 400,
    },
    map: {
        flex:1
        //   ...StyleSheet.absoluteFillObject,
    },
});
export default Test
