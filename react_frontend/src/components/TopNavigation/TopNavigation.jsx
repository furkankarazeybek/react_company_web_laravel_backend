import React, { Component, Fragment } from 'react'
import { Navbar,Nav,NavDropdown, NavLink } from 'react-bootstrap'
import whiteLogo from '../../asset/image/arslan_white.png';
import blackLogo from '../../asset/image/arslan_black.png';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';


class TopNavigation extends Component {

  constructor(props){
       super();
       this.state={
        navBarTitle:"navTitle",
        navBarLogo: [whiteLogo], // object
        navVariant:"dark",
        navBarBack:"navBackground",
        navBarItem:"navItem",
        tabTitle:props.title
   }
  }

  onScroll=()=>{
    if(window.scrollY>100){
         this.setState({navBarTitle:'navTitleScroll',navBarLogo:[blackLogo],navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll',navVariant:"light"})

    }else if(window.scrollY<100){

         this.setState({navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBarBack:'navBackground',navBarItem:'navItem',navVariant:"dark"})
    }
}

       componentDidMount(){
            window.addEventListener('scroll',this.onScroll)
       }


  render() {
       return (
             <Fragment>
         <title>{this.state.tabTitle }</title>         
   <Navbar className={this.state.navBarBack} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVariant}>
<Navbar.Brand className={this.state.navBarTitle} href="/"><img id="navImg" src={this.state.navBarLogo} />  </Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
 <Nav className="mr-auto">
   
 </Nav>
 <Nav id="navAll" style={{align:"right"}}>
      <Nav.Link id="navBarStyle" className={this.state.navBarItem} href="/">ANASAYFA</Nav.Link>
      <Nav.Link id="navBarStyle" className={this.state.navBarItem} href="/about">HAKKIMIZDA</Nav.Link>
      <Nav.Link id="navBarStyle" className={this.state.navBarItem}  href="service">HİZMETLERİMİZ</Nav.Link>
      <Nav.Link id="navBarStyle" className={this.state.navBarItem} href="/application">STAJ İMKANI</Nav.Link>
      <Nav.Link id="navBarStyle" className={this.state.navBarItem} href="/portfolio">ÜRÜNLERİMİZ</Nav.Link>
      <Nav.Link id="navBarStyle" className={this.state.navBarItem} href="/contact">İLETİŞİM</Nav.Link>
  
    
 </Nav>
</Navbar.Collapse>
</Navbar>

             </Fragment>
       )
  }
}

export default TopNavigation