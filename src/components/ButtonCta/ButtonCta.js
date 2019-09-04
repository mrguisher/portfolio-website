import React, { Fragment } from 'react';

const ButtonCta = (props) => {
     return (
          <Fragment>
               <button className={props.className}>
                    {props.children}
               </button>
          </Fragment>
     );
};

export default ButtonCta;