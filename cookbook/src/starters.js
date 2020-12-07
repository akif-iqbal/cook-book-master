import React from 'react';
import starter_data from './starters.json';
import './image_align.css';

class starters extends React.Component {  
  render() {  
    return (  
      <body>  
        <img src="/images/starters.png"></img> 
		{starter_data.map((starter_details, index) => {
			return <div>
                <h1>{starter_details.id}) <a href={starter_details.url}>{starter_details.name}</a></h1>
				<p>Recipe: {starter_details.recipe}</p>
				</div>
		})}
      </body>
    )  
  }  
}  

export default starters