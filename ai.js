// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";
const {promises: fsp, write} = require('fs');
const {join} = require('path');
require('dotenv').config();
const {GoogleGenerativeAI} = require('@google/generative-ai');
async function test() {
	const genAI = new GoogleGenerativeAI(process.env.API_KEY);
	const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});
	let prompt = `Create a video with remotion.js with the root file being Root.tsx. Your output needs to be in this JSON format: (your response should only be this. Double check your response before submitting. Don't forget you can always change the default values in the JSON.)
    {
  "files": {
    "Root.tsx": "import { Composition } from \"remotion\";\r\nimport { MyComposition } from \"./Composition\";\r\n\r\nexport const RemotionRoot: React.FC = () => {\r\n  return (\r\n    <>\r\n      <Composition\r\n        id=\"MyComp\"\r\n        component={MyComposition}\r\n        durationInFrames={60}\r\n        fps={30}\r\n        width={1280}\r\n        height={720}\r\n      />\r\n    </>\r\n  );\r\n};",
    "Composition.tsx": "file content",
  },
  "modules": [], //put any additional modules needed here
  "images": [], //put any images needed here
  "svgs": [] //put any svgs needed here
}
        `;
	while (true) {
		const result = await askPrompt(model, prompt);
		const output = result.response.text();
		const json = JSON.parse(output.split('```json')[1].split('```')[0]);
		console.log(json);
		for (const key in json.files) {
			writeFile(json.files[key], key);
		}

		// const fileLines = output.split('\n');
		// let compFiles = getChunk('<*FILES*>', fileLines).split('<*NEXTCOMP*>');
		// for (let file of compFiles) {
		// 	let lines = file.split('\n');
		// 	let fileName = lines[1].split(' ')[1];
		// 	let content = lines.slice(2).join('\n');
		// 	console.log(fileName, content);
		// 	await writeFile(content, fileName);
		// }
		// let modules = getChunk('<*MODULES*>', fileLines).split('\n');
		// let images = getChunk('<*IMAGES*>', fileLines).split('\n');
		// let svgs = getChunk('<*SVGS*>', fileLines).split('\n');
		break;
	}
}

async function askPrompt(model, prompt) {
	const result = await model.generateContent(prompt);
	return result;
}
async function writeFile(content, fileName) {
	try {
		await fsp.writeFile(join(process.cwd(), 'src', fileName), content);
		console.log('Created ' + fileName + ' successfully');
	} catch (error) {
		console.log('Failed to create ' + fileName + ': ' + error.message, 'error');
	}
}
test();
