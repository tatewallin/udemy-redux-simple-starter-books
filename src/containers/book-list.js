import React,{Component} from 'react';

//import the function connect from the react-redux lib
//this is the glue that will connect react to redux
import {connect} from 'react-redux';

import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">{book.title} </li>
            );
        });
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}


// anything returned from this function will end up as props on this container
// this.props.books gets books from state which is tied to the BooksReducer
function mapStateToProps(state){
    // state is the Redux global application state that is set in the rootReducer
    // function defines the props object using state
    // the props object is returned and is accessed via this.props...
    return{
        books: state.books
    };
}

// anything returned from this function will end up as props on this container
// this.props.selectBook will then call the selectBook Action
// wires the action to be dispatched to all the reducers
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed to all of our reducers (via the dispatch method???)
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote this component to a container
// the connect function from react-redux takes a props mapping function and a component, ties them together and produces a container
// whenever the state changes the container/component will re-render
export default connect(mapStateToProps, mapDispatchToProps)(BookList);