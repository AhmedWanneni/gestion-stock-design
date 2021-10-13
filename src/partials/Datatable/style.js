import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    "display": "flex",
    "gap": "1rem",
    justifyContent: "center"
  },
  genreContainer: {
    "display": "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
    padding: "0.5rem"
  },
  topRoot: {
    "display": "flex",
    justifyContent: "space-between",
  },

  paper: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  control: {
    padding: theme.spacing(2),
  },
  genreWrap: {
    "display": "flex",
    flexDirection: "row !important",
    ">&:nth-child(2)": {
      "display": "flex"
    },
  title: {
    color:'#000000'
  }
    
  }
}));