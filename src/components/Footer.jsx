import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Footerstyle>
      <div className="footer">
        <p>Copyright © 2023 Vansion, vanjay316@gmail.com</p>
      </div>
    </Footerstyle>
  );
}

export default Footer;
const Footerstyle = styled.div`
  .footer {
    width: 100%;
    background-color: #1a1a1a;
  }
  p {
    font-size: 0.4vh;
    padding: 0.1vw 1vw;

    color: #828282;
  }
`;
