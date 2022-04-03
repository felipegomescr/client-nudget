import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import { App } from "App";
import { reportWebVitals } from "reportWebVitals";

const container = document.createElement("div");
const root = createRoot(container);

document.body.append(container);

root.render(
	<React.StrictMode>
		<App />
		<Toaster />
	</React.StrictMode>
);

reportWebVitals();
