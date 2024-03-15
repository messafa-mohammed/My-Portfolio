

const  ToggleButton = ({setOpen}) => {
  return (
    <button onClick={()=> setOpen((p) => !p)}>
        Button
    </button>
  )
}

export default ToggleButton
