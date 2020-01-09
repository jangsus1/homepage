import React, {Component, createRef} from 'react'
import {Header, Grid, Icon, Sticky, Ref} from 'semantic-ui-react'
import {Fade} from 'react-reveal'
import {Popover, OverlayTrigger} from 'react-bootstrap'
import Navbar from '../components/Navbar'


class MainPage extends Component{
    contextRef = createRef()
    state = {
        subHeaderVisible : false,
        active : false,
    }

    componentDidMount(){
        setTimeout(() => {this.setState({subHeaderVisible : true})}, 500);
    }

    copy = () => {
        const el = document.createElement('textarea')
        el.value = "min99101511@naver.com"
        document.body.appendChild(el);
        el.select()
        document.execCommand("copy")
        document.body.removeChild(el);
    }

    render() {
        return(
            <div>
                <div id = "main" className = "MainPage" style = {{minWidth : "300px", display : "block", position : "relative"}}>   
                    <Grid centered style = {{backgroundColor : '#eeeeee'}}>
                        <Grid.Row textAlign='center' style = {{height : '550px'}} >
                            <Grid.Column textAlign='center' >
                                
                                <Fade duration = {1500} top cascade>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', marginTop : '200px',fontSize : '10em', color : "#222831"}}>Hello</Header>
                                </Fade>
                                <Fade when = {this.state.subHeaderVisible} duration = {1000} bottom cascade>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '2em', color : "#222831"}}>Welcome to Minsuk's Portfolio</Header>
                                </Fade>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row textAlign='center'>
                            <Grid.Column textAlign='center'>
                                <Header style = {{fontWeight : 'lighter', marginTop : '50px', marginBottom : '50px', fontSize : '1.2em', color : "#222831"}}>
                                    <Header.Content>Scroll Down<Icon name ="angle double down"/></Header.Content>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row columns = {2} style = {{height : '130px', marginTop : "20px"}} divided>
                            <Grid.Column width={8}></Grid.Column>
                            <Grid.Column width={8}></Grid.Column>
                        </Grid.Row>
                        <Grid.Row style = {{marginTop : "-5px"}} columns = {1}>
                            <Grid.Column textAlign='center'>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '3em', color : "#222831"}}></Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style = {{height : "200px", marginTop : "20px"}} columns = {1}>
                            <Grid.Column textAlign='center'>
                                <Fade bottom>
                                    <Header style = {{ fontWeight : '200',fontFamily : 'Arial', lineHeight : "30px" , color : "#222831"}}>
                                        안녕하세요!<br/>
                                        저의 포트폴리오 사이트에 방문해주셔서 감사드립니다.<br/>
                                        개발을 배우는 동안 남긴 기록이 짧게나마 담겨있으니<br/>
                                        편하게 둘러보고 가시길 바랍니다.<br/>
                                    </Header>
                                </Fade>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Fade bottom cascade>
                        <Grid>
                            <Grid.Row columns = {2} style = {{height : '130px', marginTop : "20px"}} divided>
                                <Grid.Column width={8}></Grid.Column>
                                <Grid.Column width={8}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row style = {{marginTop : "-5px"}} columns = {1}>
                                <Grid.Column textAlign='center'>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '3em', color : "#222831"}}>Academic Background</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style = {{height : "200px", marginTop : "20px"}} columns = {1}>
                                <Grid.Column textAlign='center'>
                                    <Header style = {{ fontWeight : '200',fontFamily : 'Arial', color : "#222831"}}>2015.03 ~ 2018.01<br/> 신일고등학교</Header>
                                    <Header style = {{ fontWeight : '200',fontFamily : 'Arial', color : "#222831"}}>2018.03 ~ ing<br/> 서울대학교 컴퓨터공학부</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Fade>
                    <Fade bottom cascade>
                        <Grid>
                            <Grid.Row columns = {2} style = {{height : '130px', marginTop : "20px"}} divided>
                                <Grid.Column width={8}></Grid.Column>
                                <Grid.Column width={8}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row style = {{marginTop : "-5px"}} columns = {1}>
                                <Grid.Column textAlign='center'>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '3em', color : "#222831"}}>Projects</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign='center'>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '2em', color : "#222831"}}>1. surBing</Header>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '1.2em', color : "#222831", marginTop : "-12px"}}>- Integrated Survey Platform -</Header>
                                </Grid.Column>
                            </Grid.Row>
                            
                            <Grid.Row style = {{marginTop : '20px'}}>
                                <Grid.Column textAlign='center'>
                                <Header style = {{fontWeight : '200',fontFamily : 'Arial', color : "#222831"}}>
                                    설문조사 폼의 제작, 실시, 설문 데이터의 공유를 통합적으로 제공하는 웹서비스
                                </Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style = {{marginTop : '20px'}}>
                                <Grid.Column textAlign='center'>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : "1.4em",  color : "#222831"}}>
                                    Frameworks & Languages 
                                    </Header>
                                    <Header style = {{ fontWeight : '100',fontFamily : 'Arial', fontSize : "1.2em",  color : "#222831"}}>
                                        <Icon name = "check" size = "small" />
                                        Frontend : React / js{' '}
                                    </Header>
                                    <Header style = {{marginTop : '-5px', fontWeight : '100',fontFamily : 'Arial', fontSize : "1.2em",  color : "#222831"}}>
                                        <Icon name = "check" />
                                        Backend : Django / python
                                    </Header>
                                    <Header style = {{ fontWeight : '100',fontFamily : 'Arial', fontSize : "1.3em",  color : "#222831"}}>
                                        Devoted as Full-Stack developer
                                    </Header>
                                    <Header style = {{ cursor : "pointer" , fontWeight : '100',fontFamily : 'Arial', fontSize : "1em",  color : "#222831"}}
                                        onClick = {() => window.location = "https://github.com/jangsus1/swpp2019-team11"}
                                    >
                                        <Icon name = "github" />
                                        https://github.com/swsnu/swpp2019-team11
                                    </Header>

                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style = {{marginTop : "80px"}}>
                                <Grid.Column textAlign='center'>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '2em', color : "#222831"}}>2. SNU Calendar</Header>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '1.2em', color : "#222831", marginTop : "-12px"}}>- Official Event Management System-</Header>
                                </Grid.Column>
                            </Grid.Row>
                            
                            <Grid.Row style = {{marginTop : '20px'}}>
                                <Grid.Column textAlign='center'>
                                <Header style = {{fontWeight : '200',fontFamily : 'Arial', color : "#222831"}}>
                                    서울대학교 내의 공식 행사를 관리해주는 웹서비스
                                </Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style = {{marginTop : '20px'}}>
                                <Grid.Column textAlign='center'>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : "1.4em",  color : "#222831"}}>
                                    Frameworks & Languages 
                                    </Header>
                                    <Header style = {{ fontWeight : '100',fontFamily : 'Arial', fontSize : "1.2em",  color : "#222831"}}>
                                    Frontend : React / js
                                    </Header>
                                    <Header style = {{marginTop : '-5px', fontWeight : '100',fontFamily : 'Arial', fontSize : "1.2em",  color : "#222831"}}>
                                        <Icon name = "check" />
                                        Backend : Django / python
                                    </Header>
                                    <Header style = {{ fontWeight : '100',fontFamily : 'Arial', fontSize : "1.3em",  color : "#222831"}}>
                                    Devoting as Backend developer
                                    </Header>
                                    <Header style = {{ cursor : "pointer" , fontWeight : '100',fontFamily : 'Arial', fontSize : "1em",  color : "#222831"}}
                                        onClick = {() => window.location = "https://github.com/snucalendar"}
                                    >
                                        <Icon name = "github" />
                                        https://github.com/snucalendar
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Fade>
                    <Fade bottom cascade>
                        <Grid>
                            <Grid.Row columns = {2} style = {{height : '130px', marginTop : "20px"}} divided>
                                <Grid.Column width={8}></Grid.Column>
                                <Grid.Column width={8}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row style = {{marginTop : "-5px"}} columns = {1}>
                                <Grid.Column textAlign='center'>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '3em', color : "#222831"}}>Others</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style = {{marginTop : "10px"}}>
                                <Grid.Column textAlign='center'>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#222831"}}>서울대학교 웹/앱 개발 동아리 WaffleStudio Programmer</Header>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#222831", marginTop : "-12px"}}>2019 ~ ing</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style = {{marginTop : "10px"}}>
                                <Grid.Column textAlign='center'>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#222831"}}>서울대학교 컴퓨터공학부 18학번 대표</Header>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#222831", marginTop : "-12px"}}>2018.09 ~ ing</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign='center'>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#222831"}}>서울대학교 공대노래패 단풍 Guitar</Header>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#222831", marginTop : "-12px"}}>2018 ~ 2019</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Fade>
                    <Fade bottom cascade>
                        <Grid>
                            <Grid.Row columns = {2} style = {{height : '130px', marginTop : "20px"}} divided>
                                <Grid.Column width={8}></Grid.Column>
                                <Grid.Column width={8}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row style = {{marginTop : "-5px"}} columns = {1}>
                                <Grid.Column textAlign='center'>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '3em', color : "#222831"}}>Contact Me</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered colums = {3} style = {{marginTop : "10px", marginBottom : "100px"}}>
                                <Grid.Column textAlign = "center" style = {{display : "block", minWidth : "50px"}} width = {1}>
                                    <Icon onClick = {() => window.location = "https://github.com/jangsus1"} link size = "big" name = "github"/>
                                </Grid.Column >
                                <Grid.Column textAlign = "center"  style = {{display : "block", minWidth : "50px"}} width = {1}>
                                    <OverlayTrigger rootClose trigger = "click" placement = "top" 
                                        overlay = {
                                            <Popover>
                                                <Popover.Content>
                                                    Email Copied!
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Icon onClick = {this.copy} link size = "big" name = "mail" />
                                    </OverlayTrigger>
                                </Grid.Column>
                                <Grid.Column textAlign = "center" style = {{display : "block", minWidth : "50px"}} width = {1}>
                                    <Icon onClick = {() => window.location = "https://www.instagram.com/man_seogiii/"} link size = "big" name = "instagram"/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Fade>
                </div>
                    <Navbar />
                </div>
        )
    }
}

export default MainPage