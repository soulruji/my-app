import React from 'react';
import PropTypes from 'prop-types';


function Movie ({title, year, rating}) {
	return (
		<div>
			<h3>{title}</h3>
			<p>{year}</p>
			<p>{rating}</p>
		</div>
	);
};



Movie.propTypes = {
	title: PropTypes.string.isRequired,
	year:  PropTypes.string.isRequired,
	rating:  PropTypes.number.isRequired,
}


export default Movie;