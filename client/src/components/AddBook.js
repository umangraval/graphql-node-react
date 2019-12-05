import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {flowRight as compose} from 'lodash';
import {getAuthorQuery} from '../queries/queries';
import {addbookmutation} from '../queries/queries';


class AddBook extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            genre:'',
            authorid:''
        }
    }
    displayAuthors(){
        var data = this.props.getAuthorQuery;
        if(data.loading){
            return(<option>Loading authors...</option>);
        }else{
            return data.authors.map(author =>{
                return(
                    <option key={author.id} value={author.id }>{author.name}</option>
                );
            })
        }
    }
    submitForm(e){
        e.preventDefault();
        this.props.addbookmutation({
            variables:{
                name:this.state.name,
                gender:this.state.genre,
                authorid:this.state.authorid
            }
        });
    }

    render(){
        return (
            <form id="addBook" onSubmit={this.submitForm.bind(this)}>
                 <div className="field">
                    <label>Book Name:</label>
                    <input type="text" onChange={(e)=> this.setState({name:e.target.value })}/>
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e)=> this.setState({genre:e.target.value })}/>
                </div>

                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e)=> this.setState({authorid:e.target.value })}>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(getAuthorQuery,{name:"getAuthorQuery"}),
    graphql(addbookmutation,{name:"addbookmutation"}),
    )(AddBook);