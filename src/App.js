import React, { Component, useState, useCallback } from "react";
import ReactDOM from 'react-dom'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from '@material-ui/core/Button';

import BeforeAfterSlider from 'react-before-after-slider'
import placeholder from './placeholder.jpg'
import images from './images'
import styles from './styles.module.css'
import aboutus from "./components/about";


class App extends Component {

  state = {
    index: 0
  }
 
  render(){
    const {
            index
          } = this.state
          const photos = [

            {
              src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
              width: 4,
              height: 3
            },
            {
              src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
              width: 1,
              height: 1
            }
          ];

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
                color='secondary'
                size={24}
                thickness={2.5}
              />
            )
            
          };

    return (
  
      <div className="App">
       Hello
       <MuiThemeProvider>
       <div>
          <div
            className={styles.container}
          >
            <div>
              <h3>
                Before After Demo slide
                <Gallery photos={photos} />;
                      
              </h3>
              <BeforeAfterSlider
                className={styles.main}
                before={current.before.src}
                after={current.after.src}
                beforeProps={imageProps}
                afterProps={imageProps}
                width={width}
                height={height}
              />
              <div className={styles.actions}>
                <Button 
                  color="primary"
                  label='Prev'
                  
                  onClick={this._onSelectPrev} >
                    Previous
                  </Button>
                <Button
                  color="secondary"
                  label='Next'
                  onClick={this._onSelectNext} >
                    Next
                  </Button>
                
              </div>
            </div>
          </div>
        </div>
        
        </MuiThemeProvider>
      </div>   
    );
    
  }

  _onSelectPrev = () => {
    let index = this.state.index - 1
    if (index < 0) index = images.length - 1

    this.setState({ index })
  }

  _onSelectNext = () => {
    let index = this.state.index + 1
    if (index >= images.length) index = 0

    this.setState({ index })
  }

}
          
export default App;