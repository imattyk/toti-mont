import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "carbon-components-react";

import {
  LogoFacebook20,
  LogoInstagram20,
  LogoLinkedin20,
} from "@carbon/icons-react";

class HeaderBar extends Component {
  render() {
    return (
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <Header aria-label="Toti Mont">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName element={Link} to="/" prefix="TOTI">
              Mont s.r.o.
            </HeaderName>
            <HeaderNavigation aria-label="Toti Mont">
              <HeaderMenuItem element={Link} to="/about">
                About
              </HeaderMenuItem>
            </HeaderNavigation>
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}
            >
              <SideNavItems>
                <HeaderSideNavItems>
                  <HeaderMenuItem element={Link} to="/about">
                    About
                  </HeaderMenuItem>
                </HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Facebook">
                <LogoFacebook20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Instagram">
                <LogoInstagram20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Linked in">
                <LogoLinkedin20 />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        )}
      />
    );
  }
}

export default HeaderBar;
