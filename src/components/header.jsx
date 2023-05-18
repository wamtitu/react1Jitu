import { Link } from "react-router-dom"
import {FaHome, FaBookMedical, FaAirbnb} from 'react-icons/fa'

function header() {
  return (
    <>
    <div>
        <ul style={{display: 'flex', gap:'20%', listStyle:'none',borderBottom:'1px solid black', padding:'15px', borderRadius:'8%'}}>
            <li>
              <Link style={{display:'flex',justifyContent:'center', textDecoration:'none', color:'black'}} to = "/"><FaHome/>Home</Link>
            </li>
            <li>
              <Link style={{display:'flex',justifyContent:'center', textDecoration:'none', color:'black'}} to = "/about"><FaAirbnb/>About</Link>
            </li>
            <li>
              <Link style={{display:'flex',justifyContent:'center', textDecoration:'none', color:'black'}} to = "/blogs"><FaBookMedical/>Blogs</Link>
            </li>
        </ul>
    </div>
    <div>
        <h2>UPSET BLOGS</h2>
    </div>
    </>
  )
}

export default header