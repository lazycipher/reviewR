import * as React from 'react';
import { HeaderNavigation, ALIGN,
    StyledNavigationItem as NavigationItem,
    StyledNavigationList as NavigationList,
  } from 'baseui/header-navigation';
import {StyledLink as Link} from 'baseui/link';
import {Button} from 'baseui/button';
import firebase from '../firebase';
import { withRouter } from 'react-router-dom';
import './Style.css';

const NavBar = (props) => {
    return (firebase.getCurrentUsername())? (
      <div className="navBar">
        <HeaderNavigation>
        <NavigationList align={ALIGN.left}>
          <NavigationItem>
            <Link href="./reviewR">reviewR</Link>
            </NavigationItem>
        </NavigationList>
        
        <NavigationList align={ALIGN.center} />
        
        <NavigationList align={ALIGN.right}>
          <NavigationItem>
            <Link href="./login">Add Review</Link>
          </NavigationItem>
          <NavigationItem>
            <Button onClick={logout} >Logout</Button>
          </NavigationItem>
        </NavigationList>
      </HeaderNavigation>
      </div>
    ) : (
      <div className="navBar">
        <HeaderNavigation>
          <NavigationList align={ALIGN.left}>
            <NavigationItem>
              <Link href="/">reviewR</Link>
            </NavigationItem>
          </NavigationList>

          <NavigationList align={ALIGN.center} />

          <NavigationList align={ALIGN.right}>
            <NavigationItem>
            <Link href="./login">Login</Link>
            </NavigationItem>
            <NavigationItem>
            <Link href="./signup">Signup</Link>
            </NavigationItem>
          </NavigationList>
        </HeaderNavigation>
      </div>
      )
    
    async function logout() {
      await firebase.logout()
      props.history.push('/')
    }
  }
  
  export default withRouter(NavBar);
