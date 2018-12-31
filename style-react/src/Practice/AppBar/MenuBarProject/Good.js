// This component is responsible for retrieving course data
// from the Contentful back-end service and displaying the list of courses to the user.

import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import Course from './Course'
const SPACE_ID = 's6rih7je9jdg'
const ACCESS_TOKEN = "70ed42d5d703f8f78b66b6af478e2d6c0d5b8a7429216818fcb3538c9aae59b7"
const client = contentful.createClient({
    space: SPACE_ID ,
    accessToken: ACCESS_TOKEN
})
class CoursesList extends Component {
    state = {
        courses: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getCourses()
    }
    getCourses = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({courses: response.items})
            console.log(this.state.courses)
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }
    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCourses()
    }
    render() {
        return (
            <div>
                { this.state.courses ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Courses"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}
export default CoursesList;


//
// import React from 'react'
//
// const Amazing =()=>{
//   return(
//     <di>
//       I am Amazing -- Young Jezzy
//     </di>
//   )
// }
// export default Amazing
