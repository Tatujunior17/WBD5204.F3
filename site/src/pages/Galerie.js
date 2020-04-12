import React, {Component, Fragment} from 'react';

import image1 from '../images/image1.jpg';


class Galerie extends Component {
    render(){
        return(
            <Fragment>
                <div>
                    <img src={image1} alt="Logo" />;
                    <img src={image1} alt="Logo" />;
                    <img src={image1} alt="Logo" />;
                </div>
            </ Fragment>
        )

    }
}

export default Galerie;
