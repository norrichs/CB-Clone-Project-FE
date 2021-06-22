import React from 'react'

const SelectSize = ({sizes, handleSelectSizeShown}) => {
	console.log('size selector', sizes)
	const sizeList = sizes.map((size,i)=>{
		return(
			<li key={i}>
				<div className="size-item">
					{size}
				</div>
			</li>
		)
	})
	return(
		<>
		<div className="cover-screen" onClick={handleSelectSizeShown}></div>
		<div className="size-menu">
			
			<ul>
				<li><div className="size-item">Select Size</div></li>
				{sizeList}
			</ul>
		</div>
		</>
	)
}
export default SelectSize
