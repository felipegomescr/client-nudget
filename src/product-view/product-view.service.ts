import axios from "axios";
import type { ObjectId } from "bson";

type Count = number;

type UpdateCount = {
	_id: ObjectId;
	productUrl: string;
	sessionId: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

const apiPrefix = "product-view";

export const productViewService = {
	count: async (productUrl: string, sessionId: string) => {
		const { data } = await axios.get<Count>(apiPrefix, {
			params: {
				productUrl,
				sessionId,
			},
		});

		return data;
	},
	updateCount: async (productUrl: string, sessionId: string) => {
		const { data } = await axios.post<UpdateCount>(apiPrefix, {
			productUrl,
			sessionId,
		});

		return data;
	},
};
