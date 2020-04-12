import React, {Component, Fragment} from 'react';

class Formulaire extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nom: '',
            commentaire: ''
        }
    }

    handleNomChange = event => {
        this.setState({
            nom: event.target.value
        })
    }

    handleCommentaireChange = event => {
        this.setState({
            commentaire: event.target.value
        })
    }


    handleSubmit = event => {
        alert(`${this.state.nom} ${this.state.commentaire}`)
        event.preventDefault()
    }

    render() {
        const { nom, commentaire } = this.state;
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Nom </label>
                        <input
                            type="text"
                            value={nom}
                            onChange={this.handleNomChange}
                        />
                    </div>
                    <div>
                        <label>Commentaire</label>
                        <textarea
                            value={commentaire}
                            onChange={this.handleCommentaireChange}
                        />
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </ Fragment>
        )
    }
}

export default Formulaire;
