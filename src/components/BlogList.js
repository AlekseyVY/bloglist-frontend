import React from 'react'
import {useSelector} from "react-redux";
import BlogToggle from "./BlogToggle";
import Toggable from "./Toggable";
import BlogForm from "./BlogForm";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";




const BlogList = () => {
    const blogs = useSelector(state => state.blogs)



  const blogFormRef = React.createRef()

  const compare = (a, b) => {
    if(a.likes < b.likes){
      return 1
    } else if(a.likes > b.likes){
      return -1
    } else {
      return 0
    }
  }

  const blogForm = () => (
      <Toggable label={'add blog'} ref={blogFormRef}>
        <BlogForm />
      </Toggable>
  )

    return (
        <div>
                <br />
          {blogForm()}
          <TableContainer>
              <Table>
                  <TableBody>
          {blogs.sort(compare).map(blog => <TableRow hover={true} key={blog.id}><BlogToggle key={blog.id} blog={blog}/></TableRow>)}
                  </TableBody>
              </Table>
        </TableContainer>
        </div>
)}

export default BlogList
