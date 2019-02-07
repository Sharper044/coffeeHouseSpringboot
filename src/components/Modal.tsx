import Modal from '@material-ui/core/Modal';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 'none',
    padding: theme.spacing.unit * 4,
    position: 'absolute',
    width: theme.spacing.unit * 50,
  },
}));

const PatrickModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const close = () => {
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={close}
      className={classes.modal}
    >
      <div className={classes.paper}>
        <Typography variant="h6" id="modal-title">
          Patrick's Message
        </Typography>
        <Typography variant="subtitle1" id="simple-modal-description">
          To avoid repetition, before posting a question please check to see if someone else has already posted it and, if so, join in developing that question. If your question is not currently represented by an open question, create a new question. - Patrick Byrne
        </Typography>
      </div>
    </Modal>
  );
};

export default PatrickModal;