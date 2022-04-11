import { useEffect } from "react";

import { nudge } from "toast";

export const PageView = () => {
	useEffect(() => {
		setTimeout(() => {
			const min = 2;
			const max = 3;
			const count = Math.floor(Math.random() * (max - min + 1)) + min;
			const line1 = `${count} lojas`;
			const line2 = "estão interessadas na Nudger";

			nudge(line1, line2);
		}, 1000);
	}, []);

	return null;
};
