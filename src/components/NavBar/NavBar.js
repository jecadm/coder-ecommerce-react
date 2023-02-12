import React from "react";

import estilo from 'styled-components';

function NavBar() {
  return (
    <div>
      <NavBarCont>
        <h2>Esto inicia</h2>
      </NavBarCont>
    </div>
  );
}

export default NavBar;

const NavBarCont = estilo.nav;
