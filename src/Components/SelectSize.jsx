import React from 'react'

const SelectSize = ({sizes}) => {
	console.log('size selector', sizes)
	const sizeList = sizes.map((size)=>{
		return(
			<li>
				<div>
					{size}
				</div>
			</li>
		)
	})
	return(
		<div>
			<div>Select Size</div>
			<ul>
				{sizeList}
			</ul>
		</div>
	)
}
export default SelectSize
