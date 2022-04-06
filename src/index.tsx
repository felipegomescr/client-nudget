import axios from "axios";
import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import { App } from "App";
import { reportWebVitals } from "reportWebVitals";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const container = document.createElement("div");
const root = createRoot(container);

document.body.append(container);

root.render(
	<React.StrictMode>
		<App />
		<Toaster position="bottom-left" reverseOrder />
	</React.StrictMode>
);

reportWebVitals();
