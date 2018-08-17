import React from 'react';

import axios from 'axios';

import { Container, Row, Col } from 'reactstrap';

import AlbumItem from './AlbumItem';

import '../Styles/AlbumList.css';

export default class AlbumList extends React.Component {
  state = {
    albums: []
  }

  componentDidMount() {
    axios.get(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
      .then(res => {
        console.log(res);
        const albums = res.data.feed.entry;

        this.setState({ albums });
      })
  }

  render() {
    return (
      <Container>
        <Row className="albums-row">
          { this.state.albums.map((album, index) =>
            <AlbumItem album={album} index={index} />
          )}
        </Row>
      </Container>

    )
  }
}
