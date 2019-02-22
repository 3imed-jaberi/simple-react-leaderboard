import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux' ;
import { mySort } from "../functions/sort";

/*  rgba(255, 181, 145, 0.5) */

class Loaderboard extends Component {

  state = {
    withScore : false
  }

  handleSortScoreChange = () => {
    if ( this.state.withScore ) {
       this.setState({ withScore : false })
    } else {
       this.setState({ withScore : true }) 
    }
   }

    
  render() {
    // console.log(this.state.withScore);
    
  const inscriptions = this.props.inscriptions;
  if (inscriptions !== undefined ){
    mySort(inscriptions,{ Score : this.state.withScore })
  //  console.log(inscriptions);
  }
  // pink in theard ..
    return (
            <div className="container" >  
              <table className="striped highlight centered responsive-table">
                <thead className="lighten-4" > 
                  <tr>
                      <th>First Name </th>
                      <th>Last Name</th>
                      <th>Class</th>
                      <th>Topic</th>
                      <th>Advancement</th>
                      <th>Realization of exercices</th>
                      <th className="btnSort" onClick={this.handleSortScoreChange}>SCORE</th>
                  </tr>
                </thead>          
                <tbody>
                    { 
                      inscriptions ?
                      inscriptions.map( ins => 
                        <tr key={ins.id}>
                          <td>{ins.firstName}</td>
                          <td>{ins.lastName}</td> 
                          <td>{ins.class}</td> 
                          <td>{ins.topic}</td> 
                          <td>{ins.advancement}pt</td> 
                          <td>{ins.realizationOfExercices}pt</td> 
                          <td>{ins.score}pt</td>                          
                        </tr>
                       ) : null
                    }
                </tbody>
              </table>  
            </div>  
    );
  };
};

const mapStateToProps = (state) => {
  // console.log(state.firestore.ordered);
    return {
        inscriptions : state.firestore.ordered.allRegistered 
    }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect ([
    { collection:'allRegistered' } // , orderBy : ['score']
  ])
)(Loaderboard) ;