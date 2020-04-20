import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";


import CircularProgress from '@material-ui/core/CircularProgress';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from '@material-ui/core/Button';

import BeforeAfterSlider from 'react-before-after-slider'

import images from './images'
import styles from './styles.module.css'


function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  state = {
    index: 0
  }

  render () {
    const {
      index
    } = this.state

    const current = images[index]

    const aspectRatio = 16 / 9
    const widthC = Math.min(720 - 32, window.innerWidth)
    const heightC = Math.min(480, window.innerHeight)

    const heightR = widthC / aspectRatio
    const widthR = heightC * aspectRatio

    const width = Math.min(widthC, widthR)
    const height = Math.min(heightC, heightR)

    console.log(index, current)

    const imageProps = {
      fallback: placeholder,
      showPreview: true,
      loader: (
        <CircularProgress
          className={styles.loading}
          color='#fff'
          size={24}
          thickness={2.5}
        />
      )
    };
  
  return (
    <div className="App">
     
      Hello dodo 1
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
            }
}

export default App;