import { useEffect } from "react";

import { productViewService } from "product-view/product-view.service";
import { nudge } from "toast";

const isProductPage =
	document.documentElement.classList.contains("page-product");

export const ProductView = () => {
	useEffect(() => {
		(async () => {
			new MutationObserver(async (_, mutationObserver) => {
				const sessionId = document.documentElement.getAttribute("data-session");

				if (isProductPage && sessionId) {
					mutationObserver.disconnect();

					const productUrl = window.location.href;
					const count = await productViewService.count(productUrl, sessionId);

					if (count > 0) {
						nudge(
							`${count} pessoa${
								count === 1 ? " está" : "s estão"
							} vendo este produto agora.`
						);
					}

					productViewService.updateCount(productUrl, sessionId);
				}
			}).observe(document.documentElement, {
				attributes: true,
			});
		})();
	}, []);

	return null;
};
