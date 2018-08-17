import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import '../Styles/AlbumItem.css';

const AlbumItem = (props) => {

  return (
    <Col xs="12" sm="4" className="single-album">
      <h4> {props.index + 1}</h4>
      <img src={props.album["im:image"][2].label} width={171} />
      <div className="caption">
        <div className="album-name">{props.album.title.label}</div>
        <div className="artist-name">{props.album["im:artist"].label}</div>
      </div>
    </Col>
  )

}
 export default AlbumItem;
