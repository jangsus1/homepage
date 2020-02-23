import React, {Component} from 'react'
import { Grid, Header } from "semantic-ui-react";
import './BlogMainPage.css'


class BlogMainPage extends Component {

    state = {

    }

    render(){
        return(
            <div className = "BlogMainPage">
                <Grid centered>
                    <Grid.Row columns = "1" >
                        <Grid.Column textAlign = 'center' id='blogHeader'>
                            <Header id = 'blogHeaderText' size = "huge">Tech Blog</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                    
                </Grid>
            </div>
        )
    }

}

export default BlogMainPage