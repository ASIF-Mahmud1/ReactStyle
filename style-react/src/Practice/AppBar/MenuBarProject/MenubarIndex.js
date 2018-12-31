import React, { Component } from 'react'
//import NavBar from './NavBar'
//import NavBar from './NavBar';
import Nav from './Nav'
//import CoursesList from './CourseList'
//import CoursesList from './CourseList'
import CoursesList from './Good'
class MenuBar extends Component {
  render() {
    return (
      <div>
      <Nav />
      <CoursesList />
      </div>
    )
  }
}
export default MenuBar
