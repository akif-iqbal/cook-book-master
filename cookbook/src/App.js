import React from 'react'
import {BrowserRouter as Router,NavLink,Route, Switch} from "react-router-dom";
import home from './home';
import bevmenu from './bevmenu';
import dessert from './dessert';
import main_course from './main_course';
import salad from './salad';
import starters from './starters';

function App(){
    return(
        <Router>
            <div classname="App">
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><NavLink exact activeClassName="active" to="/" style={{fontFamily: "cursive"}}>Home</NavLink></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><NavLink exact activeClassName="active" to="/bevmenu" style={{fontFamily: "cursive"}}>Beverages</NavLink></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><NavLink exact activeClassName="active" to="/dessert" style={{fontFamily: "cursive"}}>Dessert</NavLink></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><NavLink exact activeClassName="active" to="/main_course" style={{fontFamily: "cursive"}}>Main Course</NavLink></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><NavLink exact activeClassName="active" to="/salad" style={{fontFamily: "cursive"}}>Salad</NavLink></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><NavLink exact activeClassName="active" to="/starters" style={{fontFamily: "cursive"}}>Starters</NavLink></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </tr>
                    </tbody>
                </table>
                <hr/>

                <Switch>
                    <Route exact path="/" component={home}/>
                    <Route path="/bevmenu" component={bevmenu} /> 
                    <Route path="/dessert" component={dessert} />
                    <Route path="/main_course" component={main_course} />
                    <Route path="/salad" component={salad} />
                    <Route path="/starters" component={starters} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;