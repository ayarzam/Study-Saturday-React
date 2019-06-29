import React from 'react';
import ReactDOM from 'react-dom'
import Students from '../../db/models/students'

class Main extends React.Component{
  constructor(){
    super()
    this.state= {
      Students: Students,
    }
  }
 render() {
   return (
   <div>
     <h1>Hello!</h1>
   </div>
   )
 }
}
