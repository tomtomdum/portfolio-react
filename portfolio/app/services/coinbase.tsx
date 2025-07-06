// /lib/getCoinbaseSpotPrice.ts
import axios from "axios";
import type { Coin } from "../models/coin";

/**
 * Fetches the current spot price of a given crypto from Coinbase.
 * @param cryptoName e.g., "BTC", "ETH"
 * @returns a Promise resolving to a Coin object
 * @throws if the network request fails or the data isn’t in the expected shape
 */
export async function getCoinbaseSpotPrice(cryptoName: string): Promise<Coin> {
  // Build the URL, upper-casing the symbol for consistency
  const symbol = cryptoName.toUpperCase();
  const url = `https://api.coinbase.com/v2/prices/${symbol}-USD/spot`;

  // Tell Axios that we expect { data: Coin } back
  const response = await axios.get<{ data: Coin }>(url);

  // Log the exact Coin object we care about
  console.log("Fetched coin:", response.data.data);
  // Expected output:
  // Fetched coin: { base: "BTC", currency: "USD", amount: "61432.23" }

  // Return the nested `.data` so callers get a plain Coin
  return response.data.data;
}
