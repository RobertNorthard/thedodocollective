import React, { Component} from 'react'
import BeforeAfterSlider from 'react-before-after-slider'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from '../styles.module.css'
import Button from '@material-ui/core/Button';
import placeholder from '../placeholder.jpg'
 
class BeforeAfter extends Component {
  render () {

    


    const before = "https://source.unsplash.com/2ShvY8Lf6l0/800x599"
    const after = "https://source.unsplash.com/Dm-qxdynoEc/800x799"

    const aspectRatio = 16 / 9
    const widthC = Math.min(720 - 32, window.innerWidth)
    const heightC = Math.min(480, window.innerHeight)
    const heightR = widthC / aspectRatio
    const widthR = heightC * aspectRatio
          
    const width = Math.min(widthC, widthR)
    const height = Math.min(heightC, heightR)
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
                
              }
 
    return (


           <MuiThemeProvider>
            <div>
              <div
                className={styles.container}
              >
             <div>
              <BeforeAfterSlider
                className={styles.main}
                before={before}
                 after={after}
                beforeProps={imageProps}
                afterProps={imageProps}
                width={width}
                height={height}
              />
              <div className={styles.actions}>
                <Button 
                  color="primary"
                  label='Prev'
                  
                 >
                    Previous
                  </Button>
                <Button
                  color="secondary"
                  label='Next'
                   >
                    Next
                  </Button>
                
               </div>
               </div>
             </div>
             </div>
        
        </MuiThemeProvider>
    
    )
  }
}
export default BeforeAfter;