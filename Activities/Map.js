import React from 'react'
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import RNLocation from "react-native-location";


class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            location: null,
            region:{},
        };
        this.centeringMap = false;
        this.firstLocationUpdate = true;
        this.region={};
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
                console.log("Compnent Will Mount")
            }
        });
    }

    _startUpdatingLocation = () => {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
            locations => {
                if (!this.centeringMap) {                   //to stop charging the position when changing the region
                    if (this.centerMap || this.firstLocationUpdate) {
                        console.log("in update function with centeringMap, this.centerMap : ");
                        console.log("this.centerMap : " + this.centerMap)
                        console.log("this.firstLocationUpdate : " + this.firstLocationUpdate)
                        this.setState({
                            location: locations[0],

                        });
                        this.region = {
                            latitude: locations[0].latitude,
                            longitude: locations[0].longitude,
                            latitudeDelta: 0.02,
                            longitudeDelta: 0.0222,
                        }
                        this.centerMap = false;
                        this.firstLocationUpdate = false;
                    } else {
                        this.setState({
                            location: locations[0],
                        })
                    }
                }
            }
        );
    };

    _centerMap(){
        this.centerMap=true;
        console.log("centerMap pressed");
        console.log(this.centerMap)
        this._startUpdatingLocation();
    }



    componentWillUnmount(): void {
        this.locationSubscription && this.locationSubscription();
        this.setState({ location: null });
    }

    onRegionChange = (region) => {
        this.region = region;
        this.centeringMap=true;
        console.log("centerMap pressed");
    }

    onRegionChangeComplete = (region) => {
        this.centeringMap=false;
        console.log("RRRegionChangeComplete")
    }

    render() {
        const {location} = this.state
        console.log("RENDERING - this.centerMap : " + this.centerMap + " + location : " + location)
        console.log("this.firstLocationUpdate : " + this.firstLocationUpdate)
        console.log("region : lat " + this.state.region.latitude +"/ long "+ this.state.region.longitude)
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
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.0222,
                    }}
                    region={this.region}
                   onRegionChange={this.onRegionChange}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                >
                    <Marker
                        coordinate={{latitude: location.latitude, longitude: location.longitude}}
                    />

                    {console.log(location.latitude)}

                    <TouchableOpacity
                        style={styles.centeringButton}
                        onPress={()=>{this._centerMap()}}
                    >
                    </TouchableOpacity>
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
    centeringButton:{
        //...StyleSheet.absoluteFillObject,
        flex:1,
        position:'absolute',
        width: 50,
        height:50,
        padding:12,
        borderColor: '#fafafa',
        borderWidth: 5,
        borderRadius: 25,
      //  justifyContent: 'flex-end',
     //   alignItems: 'flex-end',
        backgroundColor: 'white',

}
})

export default Map
