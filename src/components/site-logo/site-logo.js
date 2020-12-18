import React from 'react';
import './site-logo.scss';

// export default ({ classNames }) => (
//     <div className={`site-logo--wrapper ${ classNames.wrapper }`}>
//         <span class="site-logo--archgako">ARCHGAKÒ</span>
//         <span class="site-logo--sign">architecture and interior design</span>
//     </div>
// )

function SiteLogo(props) {
    return (
        <div className={` ${ props.wrapper } site-logo--wrapper`}>
        <span class={` ${ props.archgako } site-logo--archgako`}>ARCHGAKÒ</span>
        <span class={` ${ props.sign } site-logo--sign`}>architecture and interior design</span>
     </div>
    )

  }

export default SiteLogo;