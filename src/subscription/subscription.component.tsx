import { useEffect } from "react";

import { subscriptionService } from "subscription/subscription.service";
import { nudge } from "toast";

export const Subscription = () => {
	useEffect(() => {
		(async () => {
			const { count } = await subscriptionService.count();
			const line1 = `${20 + count} lojas`;
			const line2 = "se inscreveram recentemente";

			nudge(line1, line2);
		})();

		window.addEventListener("hashchange", () => {
			subscriptionService.updateCount();
		});
	}, []);

	return null;
};
