
import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class ImageCarousel extends Component {
    constructor(props){
        super(props)
        this.state ={
          CurrentImage : 0
        }
      }
      Forwardimage=()=>{
        if(this.state.CurrentImage < 2){
          this.setState({CurrentImage:this.state.CurrentImage+1})
        }else{
            this.setState({CurrentImage:0})
        }
      }
      Backwardimage=()=>{
        if(this.state.CurrentImage > 0){
          this.setState({CurrentImage:this.state.CurrentImage-=1})
        }else{
            this.setState({CurrentImage:2})
        }
      }
      render() {
        return (
          <div className="Body">
            
              <div onClick={this.Forwardimage} className="Backward" >
                <ArrowBackIosIcon/>
            
            </div>                      
                <div className="Heading">
                    {images[this.state.CurrentImage].title}
                </div>                
                <img src={images[this.state.CurrentImage].img} alt="main-body-image" />
                <div className="Subtitle">
                    {images[this.state.CurrentImage].subtitle}
                </div>         
            
              <div  onClick={this.Backwardimage} className="Forward">
                  <ArrowForwardIosIcon/>
              </div>
            </div>
         
        );
    }    
}

export default ImageCarousel;

