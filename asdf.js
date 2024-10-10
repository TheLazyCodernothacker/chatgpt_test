const axios = require('axios').default;

const options = {
	method: 'POST',
	url: 'https://api.edenai.run/v2/text/code_generation',
	headers: {
		authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzk5NDgyZTAtNjQyYy00YjA2LTkwNzEtY2M0NTVlNTkyMzRkIiwidHlwZSI6ImFwaV90b2tlbiJ9.fecmOEh58epIkoMtLsco7FhwUUpKPFM30FKzoomtYko',
	},
	data: {
		providers: 'openai',
		prompt: '',
		instruction: 'Write a function in python that calculates fibonacci',
		temperature: 0.1,
		max_tokens: 500,
	},
};

axios
	.request(options)
	.then((response) => {
		console.log(response.data);
	})
	.catch((error) => {
		console.error(error);
	});
