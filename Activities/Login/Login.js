import React from 'react'
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native'


class Login extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.main_container}>
                <View style={styles.logo_container}>
                    <Image source={require('../../Images/Login/logo_bouteilles_noBackground.png')}
                           style={styles.logo}
                    />
                    <Text style={styles.logo_text}>EASER</Text>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <TouchableOpacity style={styles.FBButton}
                                      onPress={()=> {
                                          this.props.navigation.navigate("Home");
                                          console.log(this.props.navigation)
                                      }}
                    >
                        <Image
                            source={require('../../Images/Login/facebook-logo-small.png')}
                            style={styles.fBLogo}
                        />
                        <Text style={styles.text_connexion}>Connexion</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate("Map")
                                }}
                >
                    <Text style={styles.text_pq_fb}>Pourquoi uniquement par Facebook ?</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#0e0d4b',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo_container:{
        width:340,
        height:340,
        alignItems: 'center'

    },
    logo:{
        width:240,
        height:240,
        resizeMode: 'contain'
    },
    logo_text:{
        fontSize:40,
        margin:22,
        color: 'white',
        fontFamily:'OratorStd',
        fontWeight: 'bold'
    },
    FBButton:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#294b9d',
        marginHorizontal:75,
        marginTop:80,
        height:38,
        width:270,
        borderRadius:4
    },
    fBLogo:{
        width: 30,
        height: 30,
    },
    text_connexion:{
        color:'white',
        fontSize: 21,
       fontFamily: 'WeblySleekUILight',
      //  fontWeight: 'bold'

        // justifyContent:'center',
    },
    text_pq_fb:{
      //  textDecorationLine:'underline',
        color:'grey',
        margin:10,
        fontSize: 9,
        marginBottom:80
    }
})
export default Login;
