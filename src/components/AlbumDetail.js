import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({album}) => {
        const { artist, title, preview: url } = album;
        return (
            <Card>
                <CardSection>
                    <View style = {styles.thumbnailContainerStyle} >
                        <Image 
                            style = {styles.thumbnailStyle} 
                            source = {{uri: artist.picture_small}}
                        />
                    </View>
                    <View style = {styles.headerContentStyle}>
                        <Text style = {styles.headerTextStyle} >{title}</Text>
                        <Text>{artist.name}</Text>
                    </View>
                </CardSection>
    
                <CardSection>
                    <Image style = {styles.imageStyle} source = {{uri: album.album.cover_medium}}/>
                </CardSection>
    
                <CardSection>
                    <Button onPress={() => Linking.openURL(url)}>
                        Preview
                    </Button>
                </CardSection>            
            </Card>
        );
    }

const styles = StyleSheet.create({
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle:{
        height: 300,
        flex: 1,
        width: null,
        marginLeft: 10,
        marginRight: 10
    }
});

export default AlbumDetail;