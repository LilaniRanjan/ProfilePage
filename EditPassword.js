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
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';







const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:'#e0e0e0',
    textAlign:"center"
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
}));





export default function App() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const [inputValue, setInputValue] = React.useState('');

   const [values, setValues] = React.useState({
    password: '',
  });

   const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.paper}>
          <Paper className={classes.paper}>
          <Typography variant="h4" component="p" >
              <b>Edit Your profile..</b>
            </Typography>
            <br/>
            <br/>
            <br/>
               <Grid item xs={12}>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                          <InputLabel 
                          htmlFor="standard-adornment-password">Enter Your old password</InputLabel>
                          <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Grid>
                      <br/>
                      <br/>
                       <Grid item xs={12}>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                          <InputLabel 
                          htmlFor="standard-adornment-password">Enter your New Password</InputLabel>
                          <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Grid>
                      <br/>
                      <br/>
                       <Grid item xs={12}>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                          <InputLabel 
                          htmlFor="standard-adornment-password">Reenter your New Password</InputLabel>
                          <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                        <br/>
                        <br/>
                        <Box>
                        <Box ml={2}>
                        <FormControl>
                          <Button href="" variant="contained" 
                          startIcon={<SaveIcon />}
                          className={classes.butclr}>
                            <span>Save All Changes</span>
                          </Button>
                        </FormControl>
                        </Box>
                      </Box>
                      </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
