// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import {ImgSearch} from '../../styles';

const useStyles = makeStyles({
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
    inputRoot: {
        width: '100%',
        height: '100%',
        borderRadius: '9999px',
        backgroundColor:'#203144',
        fontSize: '15px',
        color: 'white',
        display: 'flex'
    }, 
    root: {
        width: '40%',
        height: '35px',
        marginLeft: 'auto',
        marginTop: '3px',
        fontSize: '15px',
        color: 'white',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'none'
    },
    input: {
        width: '100%',
        height: '100%',
        fontSize: '15px',
        color: 'white',
        alignSelf: 'center',
        alignItems: 'center'

    },
    listbox: {
        color: 'white',
        backgroundColor:'#203144',
        
    },

    loading: {
      color: 'white',
      backgroundColor:'#203144',
    }

  });

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Asynchronous() {

  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

 

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('http://localhost:3333/search');
      await sleep(1e3); // For demo purposes.
      const pokemons = await response.json();

      if (active) {
        setOptions(Object.keys(pokemons).map((key) => pokemons[key]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  async function handleAttributes(id, e) {
    e.preventDefault();
    try{
        history.push({pathname: '/attributes',
                      state: { id: id}
        });
    } catch(err){
        alert('Something is wrong.')
    }
  }

  return (
    <Autocomplete
      id="search"
      open={open}
      classes={classes}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      onChange={(option, value, e) => {
         handleAttributes(value.id, option)
      }}
      renderOption={(option) => (
        <React.Fragment>
          <ImgSearch src={option.img_front}></ImgSearch>
          {option.name}
        </React.Fragment>
      )}

      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
