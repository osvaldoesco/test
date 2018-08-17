import React from 'react';

import axios from 'axios';

import { Container, Row, Col } from 'reactstrap';

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
          <Col xs="12" sm="4" className="single-album">
            <h4> {index + 1}</h4>
            <img src={album["im:image"][2].label} width={170} />
            <div className="album-name">{album.title.label}</div>
            <div className="artist-name">{album["im:artist"].label}</div>
            </Col>)}
        </Row>
      </Container>

    )
  }
}
