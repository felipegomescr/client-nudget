import { useEffect } from "react";

import { lowStockService } from "low-stock/low-stock.service";
import { nudge } from "toast";

const isProductPage =
	document.documentElement.classList.contains("page-product");

export const LowStock = () => {
	useEffect(() => {
		(async () => {
			new MutationObserver(async (_, mutationObserver) => {
				const container = document.getElementById("form_comprar");

				if (container) {
					const actionUrl = container.getAttribute("action") || "";
					const actionUrlSearchParams = new URLSearchParams(actionUrl);
					const productId = actionUrlSearchParams.get("IdProd");

					if (isProductPage && productId) {
						mutationObserver.disconnect();

						const storeUrl = window.location.origin;
						const { minimumStockAlert, stock } = await lowStockService.count(
							productId,
							storeUrl
						);

						if (stock < minimumStockAlert) {
							nudge(
								`Apenas ${stock} unidade${
									stock === 1 ? " disponível" : "s disponíveis"
								}!`
							);
						}
					}
				}
			}).observe(document.body, {
				childList: true,
			});
		})();
	}, []);

	return null;
};
