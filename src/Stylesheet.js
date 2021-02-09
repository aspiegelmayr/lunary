import React from "react"
import {Tab, Nav, Col, Row} from "react-bootstrap"

class Stylesheet extends React.Component {
    render(){
        return(
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="intro">Introduction</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="structure">Structure</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="colors">Fonts & Colors</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="layout">Layout</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="code-conventions">Code Conventions</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="intro">
                    <h3 id="stylesheet-title">What is Lunary?</h3>
                    <p id="desc">
                        Lunary is a web shop for clothes. It features a selection of items which are arranged in different categories. Customers are provided with
                        a description of the item as well as available sizes. They can choose one of the items and buy it.
                        <br/>
                        The website has been implemented using ReactJS and React-Bootstrap for styling.
                        React-Bootstrap can be installed via npm by executing the following command in the project folder:
                        <div id="code-bg">
                            <code style={{color: "white"}}>npm i react-bootstrap </code>
                        </div>
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="structure">
                    <h3 id="stylesheet-title">Structure</h3>
                    <p id="desc">
                        The js and css files are in the src folder. For images and fonts there are separate folders within the src folder.
                        <br/>
                        
                        <div id="code-bg">
                            <code style={{color: "white"}}>npm i react-bootstrap </code>
                        </div>
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="colors">
                  <h3 id="stylesheet-title">Fonts</h3>
                    <p id="desc">
                        For headings, the font <a href="https://www.dafont.com/de/sketch-gothic-school.font">Sketch Gothic School</a>, size 40px, is used.
                        <p id="title">AaBbCcDdEeFfGgHhIiJjKkLlMm
                        <br/>NnOoPpQqRrSsTtUuVvWwXxYyZz</p>
                        <br/>
                        Since this font is not available by default, it has to be downloaded and imported into the React project folder. 
                        A separate folder <i>fonts</i> was created within the src folder. Then the font can be imported into the index.css file: 

                        <div id="code-bg">
                            <code>
                                font-family: "SketchGothicSchool";
                                src: local("SketchGothicSchool"),
                                url("./fonts/sketchgothicschool.ttf") format("truetype");
                                font-weight: normal;
                            </code>
                        </div>

                        After this, the font can be used like any other:
                        <div id="code-bg">
                            <code>
                                font-family: "SketchGothicSchool";
                            </code>
                        </div>
                        <br/><br/>
                        For other text, the font Franklin Gothic Medium is used. This font is already available in the React project and does not have to be
                        installed manually.
                        </p>
                        <br/> <hr/>

                        <h3 id="stylesheet-title">Colors</h3>
                        <p id="desc">
                            Lunary uses mostly darker colors. In this section, the color codes and the usage of each color are listed. <br/><br/>
                            <b style={{color: "#222529"}}>#222529</b><br/>
                                This dark gray is used for the navigation bar and card backgrounds. It is by default used in Bootstrap's dark theme.
                            <div id="code-bg">
                                <code>
                                    color: "#222529";
                                </code>
                            </div>
                            or, using Bootstrap:
                            <div id="code-bg">
                                <code>
                                    bg="dark"
                                </code>
                            </div>
                            <br/>
                            <b style={{color: "#FFFFFF"}}>#FFFFFF</b><br/>
                            White is used for text, because it is well readable on black and gray backgrounds.
                            <div id="code-bg">
                                <code>
                                    color: "#FFFFFF";
                                </code>
                            </div>
                            or 
                            <div id="code-bg">
                                <code>
                                    color: "white";
                                </code>
                            </div><br/>
                            <b>#808080</b><br/>
                            This gray color is used for the background and the small text below each clothing item indicating the available sizes.
                            <div id="code-bg">
                                <code>
                                    color: "#808080";
                                </code>
                            </div>
                            
                        </p>

                  </Tab.Pane>
                  <Tab.Pane eventKey="layout">
                    <h3 id="stylesheet-title">Layout</h3>
                    <p id="desc">
                        On top of the site is a navigation bar, which allows the user to navigate between different tabs. The navigation bar was set up using the
                        Bootstrap Navbar component.

                        For the spaces where the items on sale are displayed, Cards are used with the following options:
                        <div id="code-bg">
                            <code>
                                variant="dark";
                                text="white";
                            </code>
                        </div>
                        Each card has an image showing the item, a text with the item's description, and a footer with the available sizes.
                        Three cards are placed in one row next to each other, using a Card.Group component.
                        <br/>
                        Button and link components are white and underlined, with a font size of 12px.
                        <div id="code-bg">
                            <code>
                                color: white;
                                font-size: 12px;
                                text-decoration: underline;;
                            </code>
                        </div>
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="code-conventions">
                    <h3 id="stylesheet-title">Code Conventions</h3>
                    <p id="desc">
                        If an element contains other elements, indents are made using the tab key, which is equal to four spaces. 
                        <br/> 
                        In the CSS files, the BEM naming conventions are followed. BEM stands for Block-Element-Modifier. A <b>Block</b> is a component that can be used on its own. An <b>Element</b>
                        is a part of a block and cannot be used alone (e.g. a list item), and a <b>Modifier</b> is the state which a component has (e.g. disabled).
                        An example for the use of the BEM naming conventions is: 
                        <div id="code-bg">
                            <code>
                                .dropdownitem--state--focus
                            </code>
                        </div>
                        Using this structure makes the CSS files easily readable and understandable.
                        For any other CSS class or ID names that contain multiple words, the words are separated using a hyphen (-).
                        <div id="code-bg">
                            <code>
                                #clothes-cards
                            </code>
                        </div>
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        )
    }    
}

export default Stylesheet