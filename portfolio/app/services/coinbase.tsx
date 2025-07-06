// /lib/getCoinbasePrice.ts
import axios from "axios";

/**
 * Fetches the current spot price of a given crypto from Coinbase.
 * @param cryptoName e.g., "BTC", "ETH"
 * @returns { price: number, currency: string } or null if failed
 */
export async function getCoinbasePrice(cryptoName: string) {
	try {
		const res = await axios.get(`https://api.coinbase.com/v2/prices/${cryptoName}-USD/spot`);
		const amount = parseFloat(res.data.data.amount);
		const currency = res.data.data.currency;          

		return { price: amount, currency };
	} catch (err) {
		console.error("Failed to fetch price:", err);
		return null;
	}
}
