import React, {Component} from 'react'
import {Header, Grid, Icon, Transition, Image} from 'semantic-ui-react'
import surBing from '../assets/surbing.jpg'
import {Fade} from 'react-reveal'

class MainPage extends Component{
    state = {
        headerVisible : false,
        subHeaderVisible : false
    }

    componentDidMount(){
        this.setState({headerVisible : true})
        setTimeout(() => {this.setState({subHeaderVisible : true})}, 800);
    }
    render() {
        return(
            <div className = "MainPage">
                <Grid centered style = {{backgroundColor : '#f7e8f6'}}>
                    <Grid.Row textAlign='center' style = {{height : '550px'}} >
                        <Grid.Column textAlign='center' >
                            <Transition animation='fade down' duration={2000} visible = {this.state.headerVisible}>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', marginTop : '200px',fontSize : '14em', color : "#bd83ce"}}>Hello</Header>
                            </Transition>
                            <Transition animation='fade up' duration={1500} visible = {this.state.subHeaderVisible}>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '2em', color : "#bd83ce"}}>Welcome to Minsuk's Portfolio</Header>
                            </Transition>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row textAlign='center'>
                        <Grid.Column textAlign='center'>
                            <Header style = {{fontWeight : 'lighter', marginTop : '50px', marginBottom : '50px', fontSize : '1.2em', color : "#bd83ce"}}>
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
                            <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '3em', color : "#bd83ce"}}></Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style = {{height : "200px", marginTop : "20px"}} columns = {1}>
                        <Grid.Column textAlign='center'>
                            <Fade bottom>
                                <Header style = {{ fontWeight : '200',fontFamily : 'Arial', fontSize : '`em', lineHeight : "30px" , color : "#bd83ce"}}>
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
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '3em', color : "#bd83ce"}}>Academic Background</Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style = {{height : "200px", marginTop : "20px"}} columns = {1}>
                            <Grid.Column textAlign='center'>
                                <Header style = {{ fontWeight : '200',fontFamily : 'Arial', color : "#bd83ce"}}>2015.03 ~ 2018.01<br/> 신일고등학교</Header>
                                <Header style = {{ fontWeight : '200',fontFamily : 'Arial', color : "#bd83ce"}}>2018.03 ~ ing<br/> 서울대학교 컴퓨터공학부</Header>
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
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '3em', color : "#bd83ce"}}>Projects</Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '2em', color : "#bd83ce"}}>1. surBing</Header>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '1.2em', color : "#bd83ce", marginTop : "-12px"}}>- Integrated Survey Platform -</Header>
                            </Grid.Column>
                        </Grid.Row>
                        
                        <Grid.Row style = {{marginTop : '20px'}}>
                            <Grid.Column textAlign='center'>
                            <Header style = {{fontWeight : '200',fontFamily : 'Arial', color : "#bd83ce"}}>
                                설문조사 폼의 제작, 실시, 설문 데이터의 공유를 통합적으로 제공하는 웹서비스
                            </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style = {{marginTop : '20px'}}>
                            <Grid.Column textAlign='center'>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : "1.4em",  color : "#bd83ce"}}>
                                Frameworks & Languages 
                                </Header>
                                <Header style = {{ fontWeight : '100',fontFamily : 'Arial', fontSize : "1.2em",  color : "#bd83ce"}}>
                                    <Icon name = "check" size = "small" />
                                    Frontend : React / js{' '}
                                </Header>
                                <Header style = {{marginTop : '-5px', fontWeight : '100',fontFamily : 'Arial', fontSize : "1.2em",  color : "#bd83ce"}}>
                                    <Icon name = "check" />
                                    Backend : Django / python
                                </Header>
                                <Header style = {{ fontWeight : '100',fontFamily : 'Arial', fontSize : "1.3em",  color : "#bd83ce"}}>
                                    Devoted as Full-Stack developer
                                </Header>
                                <Header style = {{ cursor : "pointer" , fontWeight : '100',fontFamily : 'Arial', fontSize : "1em",  color : "#bd83ce"}}
                                    onClick = {() => window.location = "https://github.com/jangsus1/swpp2019-team11"}
                                >
                                    <Icon name = "github" />
                                    https://github.com/jangsus1/swpp2019-team11
                                </Header>

                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                            <Image style = {{marginLeft : 'auto', marginRight : 'auto'}} size = "large" src = {surBing} />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row style = {{marginTop : "80px"}}>
                            <Grid.Column textAlign='center'>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '2em', color : "#bd83ce"}}>2. SNU Calendar</Header>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '1.2em', color : "#bd83ce", marginTop : "-12px"}}>- Official Event Management System-</Header>
                            </Grid.Column>
                        </Grid.Row>
                        
                        <Grid.Row style = {{marginTop : '20px'}}>
                            <Grid.Column textAlign='center'>
                            <Header style = {{fontWeight : '200',fontFamily : 'Arial', color : "#bd83ce"}}>
                                서울대학교 내의 공식 행사를 관리해주는 웹서비스
                            </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style = {{marginTop : '20px'}}>
                            <Grid.Column textAlign='center'>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : "1.4em",  color : "#bd83ce"}}>
                                Frameworks & Languages 
                                </Header>
                                <Header style = {{ fontWeight : '100',fontFamily : 'Arial', fontSize : "1.2em",  color : "#bd83ce"}}>
                                Frontend : React / js
                                </Header>
                                <Header style = {{marginTop : '-5px', fontWeight : '100',fontFamily : 'Arial', fontSize : "1.2em",  color : "#bd83ce"}}>
                                    <Icon name = "check" />
                                    Backend : Django / python
                                </Header>
                                <Header style = {{ fontWeight : '100',fontFamily : 'Arial', fontSize : "1.3em",  color : "#bd83ce"}}>
                                Devoting as Backend developer
                                </Header>
                                <Header style = {{ cursor : "pointer" , fontWeight : '100',fontFamily : 'Arial', fontSize : "1em",  color : "#bd83ce"}}
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
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '3em', color : "#bd83ce"}}>Others</Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style = {{marginTop : "10px"}}>
                            <Grid.Column textAlign='center'>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#bd83ce"}}>서울대학교 웹/앱 개발 동아리 WaffleStudio Programmer</Header>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#bd83ce", marginTop : "-12px"}}>2019 ~ ing</Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style = {{marginTop : "10px"}}>
                            <Grid.Column textAlign='center'>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#bd83ce"}}>서울대학교 컴퓨터공학부 18학번 대표</Header>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#bd83ce", marginTop : "-12px"}}>2018.09 ~ ing</Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#bd83ce"}}>서울대학교 공대노래패 단풍 Guitar</Header>
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#bd83ce", marginTop : "-12px"}}>2018 ~ 2019</Header>
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
                                <Header style = {{fontWeight : '100',fontFamily : 'Arial', fontSize : '3em', color : "#bd83ce"}}>Contact Me</Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row colums = {1} style = {{marginTop : "10px", marginBottom : "100px"}}>
                            <Grid.Column width = {16}>
                                <div style = {{width : 300, marginLeft : "auto", marginRight : "auto"}}>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#bd83ce", fontSize : "15px"}}>
                                        <Icon size = "small" name = "github"/>
                                        jangsus1
                                    </Header>
                                    <Header style = {{fontWeight : '100',fontFamily : 'Arial', color : "#bd83ce", fontSize : "15px"}}>
                                        <Icon size = "small" name = "mail"/>
                                        min99101511@naver.com
                                    </Header>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Fade>
            </div>
        )
    }
}

export default MainPage