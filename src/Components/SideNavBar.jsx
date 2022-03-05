import React from 'react';
import { Nav } from 'react-bootstrap';
import { TiGift } from 'react-icons/ti';
import './sidebarStyle.scss';

function SideNavBar() {
  return (
    <Nav className="d-md-block bg-custom sidebar">
      <div> Hi </div>
      <div className="sidebar-sticky"></div>
      <Nav.Item className="sidenav-item shadow-md">
        <Nav.Link href="/home">
          <TiGift size={30} color={'black'} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="shadow-md">
        <Nav.Link eventKey="link-1">
          <TiGift size={30} color={'black'} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="shadow-md" eventKey="link-2">
          <TiGift size={30} color={'black'} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="shadow-md">
        <TiGift size={30} color={'black'} />
      </Nav.Item>
    </Nav>
  );
}

export default SideNavBar;
