import React from 'react';
//Stylesheet
import '../style/footer.css'

export default function Footer() {
  return <div className='footer'>
      <div>
      <span>DIGITAL PRODUCT DESIGN</span> REMOTE WORK <span>UX DESIGN</span> DISTRIBUTED TEAMS <span>CREATIVITY</span> STRATEGY <span>SUSPENSE</span> GROWTH
      </div>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis<br/>
                eu velit tempus erat egestas efficitur. In hac habitasse platea<br/>
                dictumst. Fusce a nunc eget ligula suscipit finibus
            </p>
            <div className='links'>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">RSS</a>
            </div>
            
            <p className='copyright'>© 2020-2021 Nordic Rose Co.<br/>
                All rights reserved. 
            </p>
  </div>;
}