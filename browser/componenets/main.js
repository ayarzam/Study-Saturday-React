import React from 'react';
import axios from 'axios';
// import Student from '../../db/models/students'

export default class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      students: []
    }
  }
  async componentDidMount(){
    const response = await axios.get('/student')
    const studentData = response.data;
    this.setState({
      students: studentData,

    })
  }

  render() {
    console.log(this.state.students)
    return (
      <table id="container">
        <tbody>
          <tr>
            <th><h1>Students</h1></th>
          </tr>
          <tr><th>Name</th></tr>
          {
            this.state.students.map(student => {
              return (
              <tr key={student.id}>
                <td>{student.fullName}</td>
              </tr>
              )
            })
          }
        </tbody>
      </table>

    )
  }
}
