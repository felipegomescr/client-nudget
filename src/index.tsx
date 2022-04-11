import axios from "axios";
import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import type {} from "styled-components/cssprop";

import { App } from "App";
import { reportWebVitals } from "reportWebVitals";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const container = document.createElement("div");
document.body.append(container);

document.head.innerHTML += `
	<link href="https://fonts.googleapis.com" rel="preconnect">
	<link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
`;

const root = createRoot(container);

root.render(
	<React.StrictMode>
		<App />
		<Toaster position="bottom-left" reverseOrder />
	</React.StrictMode>
);

reportWebVitals();
