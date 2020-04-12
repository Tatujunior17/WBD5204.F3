import React, {Component, Fragment} from 'react';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: [],
            number: 3
        }

        this.addNumber = this.addNumber.bind(this);
    }

    addNumber(event){
        this.setState({
            number: event.target.value
        })
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                let posts = data.map(post => {

                    if(post.userId == this.state.number){
                        return(
                            <div key = {post.userId}>
                                <h4>Numéro: {post.userId}</h4>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        )
                    }

                })
                this.setState({
                    post: posts
                })
            })
    }

    render(){
        return(
            <Fragment>
                <div class = "post">
                    {this.state.post}
                </div>
            </ Fragment>
        )

    }
}

export default Blog;
