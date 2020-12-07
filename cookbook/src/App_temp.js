import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import home from './home';
import bevmenu from './bevmenu';

class App extends React.Component
{
    render()
    {
        return(
            <Router> 
                    <div>  
                        <h1>Select your category</h1> 
                        <Route path="/" component={home} />
                        <Route path="/bevmenu" component={bevmenu} />  
                    </div>
              </Router>
        );
    }
}

export default App;