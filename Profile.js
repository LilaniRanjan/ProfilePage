import React from "react";
import "./style.css";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import EditIcon from '@material-ui/icons/Edit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import Modal from '@material-ui/core/Modal';
import EditPassword from "./EditPassword";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:'#e0e0e0',
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
  author: {
    display: "flex",
  },
  forms: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    },
  butclr:{
    backgroundColor:'#9e9e9e'
  },
  modelpaper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function App() {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [inputValue, setInputValue] = React.useState('');

   const [values, setValues] = React.useState({
    password: '',
  });

   const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const body = (
    <div style={modalStyle} className={classes.modelpaper}>
      <EditPassword />
    </div>
  );


  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}/>
        <Grid item xs={4} className={classes.paper}>
          <Paper className={classes.paper}>
          <Grid container>
            <Typography variant="h4" component="p" >
              <b>Edit Your profile..</b>
            </Typography>
            <br/>
            <br/>
            <br/>
          <Box className={classes.author}>
                  <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg" 
            className={classes.large} />
                  <Box ml={2}>
                    <form className={classes.forms} >
                      <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          className={classes.margin}
                          id="Edit Username"
                          label="User Name"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          className={classes.margin}
                          id="Email"
                          label="Edit Mail id"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl className={clsx(classes.margin, classes.textField)} >
                          <Button type="button" onClick={handleOpen} color="primary">
                          <FontAwesomeIcon icon={faEdit}/>
                            <u>Edit your Password..</u>
                          </Button>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                          >
                            {body}
                          </Modal>
                        </FormControl>
                      </Grid>
                      <Box>
                        <Box ml={2}>
                        <FormControl>
                          <Button href="" variant="contained" 
                          startIcon={<SaveIcon />}
                          className={classes.butclr}>
                            <span>Update Profile</span>
                          </Button>
                        </FormControl>
                        </Box>
                      </Box>
                    </Grid>
                    </form>
                  </Box>
                </Box>
          </Grid>
            
          </Paper>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
    </div>
  );
}
