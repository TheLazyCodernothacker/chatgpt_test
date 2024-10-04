// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";
const {promises: fsp, write} = require('fs');
const {join} = require('path');
require('dotenv').config();
const util = require('util');
const {exec} = require('node:child_process');

const {GoogleGenerativeAI} = require('@google/generative-ai');
const {Building} = require('lucide-react');
let error = true;
async function test() {
	const genAI = new GoogleGenerativeAI(process.env.API_KEY);
	const model = genAI.getGenerativeModel({model: 'gemini-1.5-pro'});
	let prompt = `Create a video with remotion.js with the root file being Root.tsx. Your output needs to be in this JSON format: (your response should only be this. Double check your response before submitting. Don't forget you can always change the default values in the JSON. MAKE SURE IMPORTS ARE CORRECT AND THE MODULES YOU USE EXIST or else no tip! Try to use as little remotion.js functions and modules and stule with HTML tailwindcss as possible.) Make it a one minute video explaining AP CS units and concepts, make it really beautiful MAKE SURE YOU USE THE REMOTION FEATURES CORRECTLY. DOUBLE CHECK CAPITALIZATION IN IMPORTS:
    {
  "files": {
    "Root.tsx": "import { Composition } from \"remotion\";\r\nimport \".tailwind.css\";\r\nimport { MyComposition } from \"./Composition\";\r\n\r\nexport const RemotionRoot: React.FC = () => {\r\n  return (\r\n    <>\r\n      <Composition\r\n        id=\"MyComp\"\r\n        component={MyComposition}\r\n        durationInFrames={60}\r\n        fps={30}\r\n        width={1280}\r\n        height={720}\r\n      />\r\n    </>\r\n  );\r\n};",
    "Composition.tsx": "file content",
  },
  "modules": [], //put any additional modules needed here
  "images": [], //put any images needed here
  "svgs": [] //put any svgs needed here
}
        `;
	const chat = model.startChat({
		history: [],
		generationConfig: {
			maxOutputTokens: 100000,
		},
	});

	while (error) {
		console.log(prompt);
		const result = await chat.sendMessageStream(prompt);
		const output = (await result.response).text();
		let json;
		try {
			console.log(output.split('```json')[1].split('```')[0]);
			json = JSON.parse(output.split('```json')[1].split('```')[0]);
		} catch (error) {
			console.log('Failed to parse JSON: ' + error.message);
			prompt =
				'Failed to parse JSON (make sure output is in VALID JSON): ' +
				error.message;
			continue;
		}

		for (const key in json.files) {
			await writeFile(json.files[key], key);
		}
		let error = false;
		console.log('Building...');
		await exec('npm run build', (e, stdout, stderr) => {
			console.log('built');
			if (e) {
				error = e;
				console.log('fail');
				prompt = 'Failed to build: ' + e + ' fix the error and try again';
			} else {
				error = false;
				console.log('success');
			}
		});
	}
}

async function writeFile(content, fileName) {
	try {
		await fsp.writeFile(join(process.cwd(), 'src', fileName), content);
		console.log('Created ' + fileName + ' successfully');
	} catch (error) {
		console.log(
			'Failed to create ' + fileName + ': ' + error.message,
			'error. Do not forget to only respond with the JSON',
		);
	}
}
test();
