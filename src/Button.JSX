import MuiButton from '@mui/material/Button';

function ButtonGroup() {
  return (
    <div>
      <MuiButton variant="contained">
        Submit
      </MuiButton>

      <MuiButton variant="outlined">
        Cancel
      </MuiButton>

      <MuiButton variant="text">
        Learn More
      </MuiButton>
    </div>
  );
}

export default ButtonGroup;
