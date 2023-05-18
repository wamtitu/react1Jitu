
function footer() {
    const date = new Date();

  const result1 = date.toLocaleDateString('en-GB')
  return (
    <div>
        <div style={{backgroundColor:'green', display:'flex', justifyContent:'space-between',borderRadius:'5%',margin:'5px'}} className='Footer'>
            <p>Author: Joseph Wamutitu</p>
            <p>{result1}</p>
        </div>
    </div>
  )
}

export default footer