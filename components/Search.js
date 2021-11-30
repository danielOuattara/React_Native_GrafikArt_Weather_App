import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            city: 'Montpellier'            
        }
        this.setCity = this.setCity.bind(this);
    }

    setCity = (city) => {
        this.setState({city})
    }
    

    render() {
        return (
            <View>
                {/* <Text>Enter a city : </Text> */}
                <TextInput 
                   multiline
                   style={styles.input} 
                   value={this.state.city}
                   onChangeText={this.setCity}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
      input: {
          height: 40,
          borderColor: 'grey',
          borderWidth: 1
      }

})
