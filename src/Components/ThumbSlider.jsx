import React from 'react'
import {Link} from 'react-router-dom'

const ThumbSlider = ({thumbs}, props) => {
	const thumbsList = thumbs.map((thumb, i)=>{
		return (
			<li key={i}>
				<Link>
					<img src={thumb} alt='style thumbnail'/>
				</Link>
			</li>
		)
	})
	return(
		<section>
			<ul>
				{thumbsList}
			</ul>
		</section>
	)
}
export default ThumbSlider