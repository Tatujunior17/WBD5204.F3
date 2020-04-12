import React, {Component, Fragment} from 'react';
import { Player } from 'video-react';

class Accueil extends Component {
    render(){
        return(
            <Fragment>
                <div>
                    <Player
                        playsInline
                        poster="/assets/poster.png"
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices quis purus ut ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse dui nulla, euismod sed lorem non, iaculis mattis sem. Donec molestie sit amet ligula vel volutpat. Nullam vulputate massa vitae finibus molestie. In pretium, augue non fringilla pharetra, nunc orci tempus tellus, vitae semper massa lectus consequat quam. Aliquam eu augue laoreet, ultrices mi non, gravida dui. Duis ut bibendum risus. Nam at ligula fermentum, tempus dui sed, venenatis nibh. Suspendisse leo erat, tempor at nibh a, vestibulum consequat eros.</p>
                </div>
            </ Fragment>
        )

    }
}

export default Accueil;

