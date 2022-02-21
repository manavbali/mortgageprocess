import logo from './logo.svg';
import './App.css';
import './MainPage';
import MainPage from './MainPage';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className="App">
        <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Mortage Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <h1>Customize your home mortgage</h1>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
