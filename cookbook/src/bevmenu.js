import React from 'react';
import bevdata from './bevmenu.json';
import './image_align.css';

class bevmenu extends React.Component {  
  render() {  
    return (
	<body>
		<img src="/images/bev.png"></img>  
		{bevdata.map((bevdetails, index) => {
			return <div>
				<h1>{bevdetails.id}) <a href={bevdetails.url}>{bevdetails.name}</a></h1>
				<p>Recipe: {bevdetails.recipe}</p>
				</div>
		})}
	</body>
    )  
  }  
}  

export default bevmenu