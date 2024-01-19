import {files} from './data.js';

import { files } from "./data.js";

const conUnits = (unit, length) => {
	if (unit === "KB") {
		return length * 1024;
	} else if (unit === "MG") {
		return length * Math.pow(1024, 2);
	} else if (unit === "GB") {
		return length * Math.pow(1024, 3);
	} else {
		return length;
	}
};
