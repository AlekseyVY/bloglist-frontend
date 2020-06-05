import blogService from "../services/blogs";
import {useSelector} from "react-redux";



const AddBlog = async (blogObject) => {
    const blogs = useSelector(state => state.blogs)
    console.log(blogs)
    //blogFormRef.current.toggleVisibility()
    const result = await blogService.create(blogObject)
    blogs.concat(result)
    //setNotification(`new Blog: ${blogObject.title} by ${blogObject.author} at ${blogObject.url} successfully added to list.`)
    setTimeout(() => {
       // setNotification(null)
    }, 5000)
}



export default AddBlog
