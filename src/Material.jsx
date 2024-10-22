
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
export default function Material(){
    return (
        <>
         <h1>Material UI Demo</h1>
         <Button variant="contained">
          Click me!
          </Button>
         <Button variant="contained" disabled>Click me 2!</Button>
         <Button variant="contained" color="error">Error</Button>
         <Button 
          variant="contained" 
          color="success" 
          size="small">
          click me!
          </Button>
          <Button 
          variant="contained" 
          color="success" 
          size="large"
          startIcon={<DeleteIcon />}>
          Delete
          </Button>
    
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Alert severity="warning">This is a warning Alert.</Alert>
          <Alert severity="error">This is an error Alert.</Alert>
        </>
      )
}