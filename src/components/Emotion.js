import React, { Component } from 'react'
import { Text, View,Image,Dimensions, TouchableOpacity } from 'react-native'
import {Col,Row, Grid} from 'react-native-easy-grid'

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class Emotion extends Component {

    data= [
        {id:1, img: require('../assets/imgs/emoji/e1.png')},
        {id:2, img: require('../assets/imgs/emoji/e2.png')},
        {id:3, img: require('../assets/imgs/emoji/e3.png')},
        {id:4, img: require('../assets/imgs/emoji/e4.png')},
        {id:5, img: require('../assets/imgs/emoji/e5.png')}
    ]

    state={
      iconCurrent: { id:3, img: require('../assets/imgs/emoji/e3.png')}
    }

    renderIcon= () =>{
        return this.data.map((list,index) => {
            return <Col key={index} >
                <TouchableOpacity onPress={()=>{this.changeIcon(list)}}>
            <Image style={{width:'100%',height:'40%'}} resizeMode="stretch" source={list.img}></Image>
            </TouchableOpacity>
          </Col>
        })
    }

    changeIcon = (newIcon)=> {
        this.setState({
        iconCurrent: newIcon
    })
    }

    render() {
        return (
            <Grid>
                <Row style={{flex:2 }}>    
                <Image style={{justifyContent:'center',marginLeft:'25%'}} source={this.state.iconCurrent.img}></Image>
                </Row>

                <Row style={{flex:4, marginRight:'10%',marginLeft:'10%'}}>
                    {this.renderIcon()}           
                </Row>
            </Grid>
        )
    }
}
