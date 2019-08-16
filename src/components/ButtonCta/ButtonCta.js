import React, { Fragment } from 'react';

const ButtonCta = (props) => {
     return (
          <Fragment>
               <button className={props.className} onClick={props.onClick}>
                    {props.children}
               </button>
          </Fragment>
     );
};

export default ButtonCta;