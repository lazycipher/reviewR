import * as React from 'react';
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationItem as NavigationItem,
    StyledNavigationList as NavigationList,
  } from 'baseui/header-navigation';
  import {StyledLink as Link} from 'baseui/link';
  import {Button} from 'baseui/button';

const NavBar = () => {
    return(
        <HeaderNavigation>
    <NavigationList align={ALIGN.left}>
      <NavigationItem>reviewR</NavigationItem>
    </NavigationList>
    <NavigationList align={ALIGN.center} />
    <NavigationList align={ALIGN.right}>
      <NavigationItem>
        <Link href="./login">Login</Link>
      </NavigationItem>
      <NavigationItem>
        <Link href="./signup">Sign up</Link>
      </NavigationItem>
      {/* <NavigationItem>
        <Link href="#">Tab Link Three</Link>
      </NavigationItem> */}
    </NavigationList>
    <NavigationList align={ALIGN.right}>
      <NavigationItem>
        <Button>Logout</Button>
      </NavigationItem>
    </NavigationList>
  </HeaderNavigation>
    )
  }
  
  export default NavBar;
