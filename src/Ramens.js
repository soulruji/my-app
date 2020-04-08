import React from 'react';
import PropTypes from 'prop-types';


function Ramens ({name, url, count}) {
	return (
		<div>
			<h3>{name}</h3>
			<p>{count}</p>
			<img src={url}  alt={name} />
		</div>
	);
};



Ramens.propTypes = {
	name: PropTypes.string.isRequired,
	url:  PropTypes.string.isRequired,
	count:  PropTypes.number.isRequired,
}


export default Ramens;