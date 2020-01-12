import React, {Component} from 'react'
import './Navbar.css'

import {Grid, Header} from 'semantic-ui-react'
import Burger from 'react-css-burger'
class Navbar extends Component {

    state = {
      active : false
    }

    hamburgerToggle = () => {
      if(this.state.active){
        document.getElementById("menu").style.display = "none";
        document.getElementById("container").style.pointerEvents = "none";
        document.getElementById("container").style.backdropFilter = "blur(0px)"
        
      }
      else{
        document.getElementById("menu").style.display = "block";
        document.getElementById("container").style.pointerEvents = "all";
        document.getElementById("container").style.backdropFilter = "blur(10px)"
      }
      this.setState({active : !this.state.active})
      
    }

    menuClick = (number) => {
      if(number==1){
        window.location.assign('/homepage')
      }
      else if(number==2){
        window.location.assign('/homepage/blog')
      }
      else{
        window.location.assign('/homepage/project')
      }
    }


    render(){
    return(
      <div id = "container" className = "Navbar" style = {{margin:0}}>
      <Grid >
        <Grid.Row id = "burger" columns={1}>
          <Grid.Column>
          <Burger
            id = "burger"
            onClick={this.hamburgerToggle}
            active={this.state.active}
            style = {{float : "right", outline : "none"}}
            burger="slider"
            color="black"
            hoverOpacity={0.8}
            scale={1.2}
          />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id = "menu">
          <Grid.Column>
            <Grid padded textAlign = "center">
              <Grid.Row centered columns = {1}>
                <Grid.Column textAlign = "center" >
                <Header id = "Item" onClick = {() => this.menuClick(1)} className = "menuItem" size = "huge" style = {{marginTop : 50}}>Home</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              <Grid.Column textAlign = "center" >
                <Header id = "Item" onClick = {() => this.menuClick(2)} className = "menuItem" size = "huge" style = {{marginTop : 50}}>Blog</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              <Grid.Column textAlign = "center" >
                <Header id = "Item" onClick = {() => this.menuClick(3)} className = "menuItem" size = "huge" style = {{marginTop : 50}}>Project</Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id = "blank">
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div >
    )
    }
}

export default Navbar


