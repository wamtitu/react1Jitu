
function Blog() {
    const blog = [
        {
          title: 'React tutorial',
          content:'Welcome this is a vue js course, if you are interested join the discoured community to buy the course'
        },
        {
          title: 'Vue tutorial',
          content: "Welcome this is a vue js course, if you are interested join the discoured community to buy the course "
        }, 
        {
          title: 'Javascript tutorial',
          content: "Welcome this is an javascript course, if you are interested join the discoured community to buy the course"
        },  
        {
          title: 'Angular tutorial',
          content: "Welcome this is an Angular js course, if you are interested join the discoured community to buy the course"
        }, 
        {
          title: 'CSS tutorial',
          content: "Welcome this is an Css course, if you are interested join the discoured community to buy the course"
        },
      ]
    
      // const displayBlog = ()=>{
        
      // }
  return (
    <div>
        <div className='Blogs'>
        <div className='theBlog'>
          {blog.map((blogItem, index)=>(
          <div key ={index}>
            <div className='content'>
            <h4>{blogItem.title}</h4>
            <p>{blogItem.content}</p>
            </div>
          </div>
          ))}
        </div>
        <div className='theTitle'>
          {blog.map((blogItem, index)=>(
          <div key ={index}>
            <h4>{blogItem.title}</h4>
          </div>
          
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Blog