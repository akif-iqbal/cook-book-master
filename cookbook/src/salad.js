import React from 'react';
import sal_data from './salad.json';
import './image_align.css';

class salad extends React.Component {  
  render() {  
    return (  
      <body>  
        <img src="/images/salad.png" id="food"></img> 
		{sal_data.map((sal_details, index) => {
			return <div>
				<h1><img src="/images/bullet.png" id="bullets"></img> <a href={sal_details.url}>{sal_details.name}</a></h1>
				<p>Recipe: {sal_details.recipe}</p>
				</div>
		})}
      </body>
    )  
  }  
}  

export default salad