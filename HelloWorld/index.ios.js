/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';
import {AppRegistry, Text} from 'react-native';


export  default class HelloWorld extends Component {
    render() {
        return (
            <Text>rHello world!</Text>
        );
    }
}

// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
