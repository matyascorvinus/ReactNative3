import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styleEmpire.container}>
          <Text style = {styleEmpire.headerFont}>Galactic Schedule</Text>                                                           

          <Image style={{width: 200, height: 200}}  source = {require ('/StarWars_Football_Matches/800px-Flag_of_the_First_Galactic_Empire.svg.png')}/>
          <Text style = {styleEmpire.headerFont1}>Emperor's World Cup</Text>   

          <View style = {styleEmpire.bigMatch}> 
              <View style = {styleEmpire.match} >
                    <Text style = {styleEmpire.timer}> July 1st 4ABY </Text>
                    <View style = {styleEmpire.teams} >
                      <Text style = {styleEmpire.normalFont}> The Empire </Text>
                      <Image style= {{width:20, height:20}} source = {require ('/StarWars_Football_Matches/240px-Emblem_of_the_First_Galactic_Empire.svg.png')}/>
                      
                      <Image style= {{width:20, height:20}} source = {require ('/StarWars_Football_Matches/Rebel_Alliance_logo.svg.png')}/>
                      <Text style = {styleEmpire.normalFont}> Rebel Alliance </Text>
                    </View>
              </View>

              



            </View>
           <View style = {styleEmpire.bigMatch}> 
                    <View style = {styleEmpire.match} >
                      <Text style = {styleEmpire.timer}> July 2st 4ABY </Text>
                      <View style = {styleEmpire.teams} >
                        <Text style = {styleEmpire.normalFont}> Darth Vader </Text>
                        <Image style= {{width:20, height:20}} source = {require ('/StarWars_Football_Matches/darth_vader_PNG14.png')}/>
                        
                        <Image style= {{width:20, height:20}} source = {require ('/StarWars_Football_Matches/Darth_Sidious_Render.png')}/>
                        <Text style = {styleEmpire.normalFont}> Darth Sidious </Text>
                    </View>
              </View>
              </View>
      </View>
    );
  }
}

const styleEmpire = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(212, 0, 0)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },

  headerFont:
  {
    color: 'white',
    fontSize: 20,
  },
   headerFont1:
  {
    color: 'white',
    fontSize: 25,
  },
  normalFont:
  {
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  match:
  {
    flexDirection: 'row',
    height: 80,
    width: 350,
    backgroundColor: 'rgb(116,15,15)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
   
  }, 
  bigMatch:
  {
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
   timer: {
    color: 'white',
    fontSize: 14,
    
  },
   teams: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});
