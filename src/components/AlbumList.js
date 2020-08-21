import React, { Component } from 'react';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
    state = { albums: [], artist: this.props.artist }
    componentDidMount(){
        let artistName = this.state.artist
        artistName.toLocaleLowerCase().split(' ').join('_')
        axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`,{headers:{
        "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key":process.env.APIKey
        }}).then(res => {
            this.setState({ albums: res.data.data });
        });
    }

    renderAlbums(){
        return this.state.albums.map( album => <AlbumDetail album = {album} key = {album.id} />)
    }

    render(){
        return (
            <>
                {this.renderAlbums()}
            </>
        );
    }
}
 
export default AlbumList;