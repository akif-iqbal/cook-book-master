import React from 'react';
import mcdata from './main_course.json';
import './image_align.css';

class main_course extends React.Component {  
  render() {  
    return (  
      <body>  
        <img src="/images/main_course.png"></img> 
		{mcdata.map((mcdetails, index) => {
			return <div>
				<h1>{mcdetails.id}) <a href={mcdetails.url}>{mcdetails.name}</a></h1>
				<p>Recipe: {mcdetails.recipe}</p>
				</div>
		})}
      </body>
    )  
  }  
}  

export default main_course