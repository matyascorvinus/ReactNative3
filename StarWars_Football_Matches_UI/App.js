import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry} from 'react-native';
import SuperComponent from './SuperComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styleEmpire.container}>
          <Text style = {styleEmpire.headerFont}>Galactic Schedule</Text>                                                           

          <Image style={{width: 200, height: 200}}  source = {require ('./800px-Flag_of_the_First_Galactic_Empire.svg.png')}/>
          <Text style = {styleEmpire.headerFont1}>Emperor's World Cup</Text>   
         
           <SuperComponent time='July 1st 4ABY' name1 ='Darth Vader' source1 = {DarthVader} source2 = {DarthSidious} name2 = 'Darth Sidious'/> 
       
      </View>
    );
  }
}
const DarthSidious = 
	 require ('./Darth_Sidious_Render.png') 

const DarthVader = 
  require ('./darth_vader_PNG14.png')


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
    borderRadius: 10,
   
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
