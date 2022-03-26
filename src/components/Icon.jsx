
function Icons(props) {
  return (
    <>
        <li><img src={'/assets/'+props.icon+'.svg'} alt={props.icon+'-icon'} /></li>
    </>
  )
}

export default Icons