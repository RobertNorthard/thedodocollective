import React, { Component, useState, useCallback } from "react";
import ReactDOM from 'react-dom'
import { render } from "react-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Button from '@material-ui/core/Button';

import BeforeAfterSlider from 'react-before-after-slider'
import placeholder from './placeholder.jpg'
import images from './images'
import styles from './styles.module.css'

class Playground extends Component {


render() {
    state = {
        index: 0
      }
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
                    color='secondary'
                    size={24}
                    thickness={2.5}
                  />
                )
                
              };
    return (
        <div>
             <MuiThemeProvider>
       <div>
          <div
            className={styles.container}
          >
            <div>
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
    )
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
export default Playground
