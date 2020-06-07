import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries';
import Bookdetails from './Bookdetails';

class BookList extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected:null
        }
    }
    displayBooks(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading...</div>);
        }else{
            return data.books.map(book =>{
                return(
                    <li key={book.id} onClick={(e)=> {this.setState({selected: book.id})}}>{ book.name }</li>
                );
            })
        }


    }
  render(){
      return(
        <div>
            <ul id="book-list">
                { this.displayBooks() }
            </ul>
            <Bookdetails bookid={this.state.selected}/>
        </div>
      ) 
  }
}
export default graphql(getBooksQuery)(BookList);