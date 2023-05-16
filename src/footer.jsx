import './Footer.css'
const Footer =()=>{

    const date = new Date();

  const result1 = date.toLocaleDateString('en-GB')
    return(
        <div className='Footer'>
            <p>Joseph Wamutitu</p>
            <p>{result1}</p>
        </div>
    )
        
}
export default Footer;