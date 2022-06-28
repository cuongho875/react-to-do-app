import React from 'react'

import Filters from './Filters';
import ButtonWrappers from './ButtonWrappers';
export default function Footer(props) {
  return (
    <footer>
        <div className="footer-left">
          <ButtonWrappers {...props}/>
        </div>
        <div className="count-item">
                <div>{props.count} Items left</div>
        </div>
        <div className="footer-right">
          <Filters {...props}/>
        </div>
    </footer>
  )
}
