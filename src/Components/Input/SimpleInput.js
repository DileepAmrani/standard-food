
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        disabled={props.disabled}
        id="outlined-full-width"
        label={props.label}
        style={{ margin: 8 }}
        placeholder={props.placeholder}
        fullWidth
        disabled='false'
        value={props.value}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
 
    </form>
  );
}