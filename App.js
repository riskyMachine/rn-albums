/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import InputField from './src/components/InputField';
import Card from './src/components/Card';
import CardSection from './src/components/CardSection';
import Button from './src/components/Button';


class App extends Component {
  state = { artist: '', fetched: false }

  toggleState(){
    if(this.state.fetched == false){
      this.setState({fetched: true})
    }else{
      this.setState({fetched: false})
    }
  }

  renderAlbums(){
    if(this.state.fetched == true){
      this.state.fetched = false
      return <AlbumList artist={this.state.artist}/>;
    }
    return <View></View>
  }
  
  render(){
    return (
      <>
        <Header headerText = {'Albums!'} />
        <ScrollView>
          <Card>
            <CardSection>
              <InputField 
              placeholder="artist..."
              value = {this.state.artist}
              onChangeText={text => this.setState({artist: text})}
              label = "Artist"
              />
            </CardSection>
            <CardSection>
              <Button onPress={this.toggleState.bind(this)}>
                Search
              </Button>
            </CardSection>
          </Card>
          {this.renderAlbums()}
        </ScrollView>
      </>
    );
  }
}

export default App;