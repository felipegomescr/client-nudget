import axios from "axios";

type Count = {
	minimumStockAlert: number;
	stock: number;
};

const apiPrefix = "low-stock";

export const lowStockService = {
	count: async (productId: string, storeUrl: string) => {
		const { data } = await axios.get<Count>(apiPrefix, {
			params: {
				productId,
				storeUrl,
			},
		});

		return data;
	},
};
