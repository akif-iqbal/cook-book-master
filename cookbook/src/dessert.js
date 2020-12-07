import React from 'react';
import des_data from './dessert.json';
import './image_align.css';

class dessert extends React.Component {  
  render() {  
    return (  
      <body>  
        <img src="/images/dessert.png"></img> 
		{des_data.map((des_details, index) => {
			return <div>
				<h1>{des_details.id}) <a href={des_details.url}>{des_details.name}</a></h1>
				<p>Recipe: {des_details.recipe}</p>
				</div>
		})}
      </body>
    )  
  }  
}  

export default dessert