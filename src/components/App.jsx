import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router,Routes, Route  }  from "react-router-dom";
import {Actors, Movies, MovieInformation, Profile, Navbar} from './index'
import useStyles from "./styles";
const app = () =>{ 
  const classes = useStyles()
  return (
    <Router>
    <CssBaseline />
    <Navbar/>
  <div className={classes.root}>
    <main className={classes.content}>
    <div className={classes.toolbar} ></div>
       <Routes>
        <Route path="/" element={<Movies/>}/>
        <Route path="/movie/:id" element={<MovieInformation/>}/>
        <Route path="/actors/:id" element={<Actors/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
      </Routes>
    </main>
  </div>
  </Router>
  );
}
 
export default app
