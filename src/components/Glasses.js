import React, { Component } from 'react'
import { Text, View, Image ,Dimensions, TouchableOpacity} from 'react-native'
import {Grid,Col,Row} from 'react-native-easy-grid'

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class Glasses extends Component {
    state={
      glassCurrent:   { id: 6, price: 30, name: 'PRADA P9700', url: require(`../assets/imgs/glassesImage/v6.png`), desc: `Light pink square lenses define these 
sunglasses,ending with a mother of pearl effect tip. ` },
    }

     arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: require('../assets/imgs/glassesImage/v1.png'), desc: `Light pink square lenses define these 
sunglasses,ending with a mother of pearl effect tip.` },
        { id: 2, price: 40, name: 'GUCCI G8759H', url: require(`../assets/imgs/glassesImage/v2.png`), desc: `Light pink square lenses define these 
sunglasses,ending with a mother of pearl effect tip.` },
        { id: 3, price: 50, name: 'DIOR D6700HQ', url: require('../assets/imgs/glassesImage/v3.png'), desc: `Light pink square lenses define these 
sunglasses,ending with a mother of pearl effect tip. ` },
        { id: 4, price: 60, name: 'DIOR D6005U', url: require('../assets/imgs/glassesImage/v4.png'), desc: `Light pink square lenses define these 
sunglasses,ending with a mother of pearl effect tip.` },
        { id: 5, price: 70, name: 'PRADA P8750', url: require('../assets/imgs/glassesImage/v5.png'), desc: `Light pink square lenses define these 
sunglasses,ending with a mother of pearl effect tip.` },
         { id: 6, price: 80, name: 'PRADA P9700', url: require(`../assets/imgs/glassesImage/v6.png`), desc: `Light pink square lenses define these 
sunglasses,ending with a mother of pearl effect tip. ` },
        { id: 7, price: 30, name: 'FENDI F8750', url: require('../assets/imgs/glassesImage/v7.png'), desc: `Light pink square lenses define these 
sunglasses,ending with a mother of pearl effect tip.` },
        { id: 8, price: 90, name: 'FENDI F8500', url: require('../assets/imgs/glassesImage/v8.png'), desc: `Light pink square lenses define these 
sunglasses,ending with a mother of pearl effect tip. ` },
        { id: 9, price: 30, name: 'FENDI F4300', url: require('../assets/imgs/glassesImage/v9.png'), desc: `Light pink square lenses define these 
sunglasses,ending with a mother of pearl effect tip.` },
       ];

       renderItem =() =>{
           return this.arrProduct.map((glassItem,index) =>{
               return  <Col key={index} style={{backgroundColor:'white', width:widthDevice/3, height:75}}>
               <TouchableOpacity onPress={()=>{this.changeGlassItem(glassItem)}}>
              <View>
                   <Image source={glassItem.url} resizeMode="stretch" style={{width:widthDevice/4, height:50, margin:'10%', marginTop:'15%'}}/>
               </View>    
                {/* dùng cách truyền props qua cho component con là: Glasses */}
               
               </TouchableOpacity>
           </Col>
           })
       }

changeGlassItem= (newGlassItem) => {
    this.setState({
        glassCurrent:newGlassItem
    })
}

    render() {
        return (
              <Grid>
                  <Row style={{flex:6}}>
                      <Image style={{ marginLeft:'-4%', marginTop:'5%',height:'100%'}} resizeMode='stretch' source={require('../assets/imgs/glassesImage/model.jpg')}></Image>
                      <Image source={this.state.glassCurrent.url} resizeMode='stretch' style={{position:'absolute', height:'14%', width:'60%', marginLeft:'20%', marginTop:'27%'}}/>
                 <View style={{position:'absolute',width:widthDevice, height:'30%',backgroundColor:'rgba(156, 156, 156,0.7)', bottom:0 }}>
                    <Text style={{fontSize:30, marginLeft:'2%', color:'green'}}>{this.state.glassCurrent.name}</Text>
                     <Text style={{fontSize:30, marginLeft:'2%', color:'rgb(255, 228, 181)'}}>{this.state.glassCurrent.price}$</Text>
                     <Text style={{fontSize:17, marginLeft:'2%', color:'white'}}>{this.state.glassCurrent.desc}</Text>
                 </View>
                  </Row >
                   
                  <Row style={{flexWrap:'wrap', flex:4}}>
                      {this.renderItem()}
                  </Row>

              </Grid>
  
        )
    }
}
