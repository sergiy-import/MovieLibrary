import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Movie from '../pages/Movie';
import { colors } from '@mui/material';
import { blue } from '@mui/material/colors';
// import logo from '../../dist/img/logo.webp';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #3756f7',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div>
      <Button onClick={handleOpen}>Push for contacts</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className='modaltext' id="modal-modal-title" variant="h6" component="h2">
            Send your mail
          </Typography>
          <h1 className='modaltext'>1600 Pennsylvania Avenue NW, Washington, DC 20500</h1>
          {/* <img>srs={logo}</img> */}
          <Typography className='modaltext' id="modal-modal-description" sx={{ mt: 2 }}>
            tel. +1 202-456-1111
          </Typography>
          <Movie/>
        </Box>
      </Modal>
    </div>
  );
}