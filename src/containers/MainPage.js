import React, {Component} from 'react'
import {Header, Grid, Icon, Transition, GridColumn} from 'semantic-ui-react'

class MainPage extends Component{
    state = {
        headerVisible : false,
        subHeaderVisible : false
    }

    componentDidMount(){
        this.setState({headerVisible : true})
        setTimeout(() => {this.setState({subHeaderVisible : true})}, 1000);
    }
    render() {
        return(
            <div className = "MainPage">
                <Grid centered style = {{backgroundColor : '#f7e8f6'}}>
                    <Grid.Row textAlign='center' style = {{height : '700px'}} >
                        <Grid.Column textAlign='center' >
                            <Transition animation='fade down' duration={2000} visible = {this.state.headerVisible}>
                                <Header style = {{fontWeight : 'lighter',fontFamily : 'Arial , Arial Rounded, sans-serif', marginTop : '250px',fontSize : '14em', color : "#bd83ce"}}>Hello</Header>
                            </Transition>
                            <Transition animation='fade up' duration={2000} visible = {this.state.subHeaderVisible}>
                                <Header style = {{fontWeight : 'lighter',fontFamily : 'Arial , Arial Rounded, sans-serif', fontSize : '2em', color : "#bd83ce"}}>Welcome to Minsuk's homepage</Header>
                            </Transition>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign='center'>
                        <Grid.Column textAlign='center'>
                            <Header style = {{fontWeight : 'lighter', marginTop : '50px', marginBottom : '50px', fontSize : '1.5em', color : "#bd83ce"}}>
                                <Header.Content>Scroll Down<Icon name ="angle double down"/></Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row columns = {1}>
                        <Grid.Column>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default MainPage