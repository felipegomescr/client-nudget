import axios from "axios";

type Count = {
	count: number;
};

const apiPrefix = "subscription";

export const subscriptionService = {
	count: async () => {
		const { data } = await axios.get<Count>(apiPrefix);

		return data;
	},
	updateCount: () => {
		return axios.post(apiPrefix);
	},
};
