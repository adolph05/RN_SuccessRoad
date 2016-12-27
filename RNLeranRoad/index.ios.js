/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//noinspection JSUnresolvedVariable
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, TextInput,ScrollView,image
} from 'react-native';


//================================================================
//state学习
class Blink extends Component {
  constructor (props){
    super(props);
    this.state= {showText:true};

    setInterval(()=>{
      this.setState({showText:!this.state.showText});
    },1000);
  }
  render(){
    let display = this.state.showText ? this.props.text :'';
    return (
        <Text>{display}</Text>
    );
  }

}
 class LearnState extends Component {

  render(){
    return(
      <View>
        <Blink text = '这是第一行'/>
        <Blink text = '这是第二行'/>
        <Blink text = '这是第三行'/>
        <Blink text = '这是第四行'/>

      </View>


    );
  }
}

//================================================================
//style 样式学习
//js对大小写敏感，使用文本需大写
//居后的样式比居前的样式优先级高
export class LearnStyle extends Component {

    render(){
        return(
            <View>

              <Text style={styles.red}> just red</Text>
              <Text style={styles.bigblue}> just bigblue</Text>

              <Text style={[styles.bigblue, styles.red]}>bigblue ,then red</Text>
              <Text style={[styles.red, styles.bigblue]}> red ,then bigblue</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue:{
        color:'blue',
        fontWeight:'bold',
        fontSize:30,
    },
    red:{
        color:'red',
    }
});

// TextInput*/
class LearnTextInput extends Component {
    constructor(props){
        super(props);
        this.state={text:''};
    }
    render(){
        return(
            <View style={{padding:10}}>
                <TextInput style={{height:30,width:100}}
                 placeholder="输入内容"
                onChangeText = {(text)=> this.setState({text})}/>
                <Text style={{padding:10,fontSize:30}}>
                      {this.state.text.split('').map((content)=>content&&'你好').join(' ')}
                </Text>
            </View>


        );
    }
}
//================================================================
// //scrollView*/
class LeranScrollView extends Component {

    render(){
        return(
            <ScrollView>
                <Text style = {{fontSize:96}}>Scroll me plz</Text>
                <Image source={require('img!imgwildGrass.png')}/>
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Text style={{fontSize:96}}>If you like</Text>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Text style={{fontSize:96}}>Scrolling down</Text>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Text style={{fontSize:96}}>What's the best</Text>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Text style={{fontSize:96}}>Framework around?</Text>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                {/*<Image source={require('./img/imgwildGrass.png')}/>*/}
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>


        );
    }
}

AppRegistry.registerComponent('RNLeranRoad', () => LeranScrollView);
//================================================================
// //默认学习*/
// class flexDemo extends Component {
//
//     render(){
//         return(
//             <View>
//
//
//             </View>
//
//
//         );
//     }
// }