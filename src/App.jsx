
import './App.css'
import Header from './haeader'
import Footer from './footer'

function App() {
  const blog = [
    {
      title: 'react tutorial',
      content: <p>lorem10</p>
    },
    {
      title: 'vue tutorial',
    content: "lorem 23"
    }, 
    {
      title: 'angular tutorial',
      content: "lorem 23"
    }, 
  ]

  // const displayBlog = ()=>{
    
  // }

  return (
    <div className='App'>
      <Header/>
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
      
      <Footer/>

    </div>
  )
}

export default App
