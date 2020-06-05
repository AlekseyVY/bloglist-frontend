import React from 'react'
import {useSelector} from "react-redux";
import BlogToggle from "./BlogToggle";
import Toggable from "./Toggable";
import BlogForm from "./BlogForm";




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
          <h2>Add blogs to list:</h2>
          {blogForm()}
          <h2>Blogs:</h2>
          {blogs.sort(compare).map(blog => <BlogToggle key={blog.id} blog={blog}/>)}
        </div>
)}

export default BlogList
