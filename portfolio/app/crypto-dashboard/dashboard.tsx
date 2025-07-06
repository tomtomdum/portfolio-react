// app/crypto-dashboard/page.tsx (or wherever your Dashboard lives)
'use client';

import type { Coin } from '@/models/coin';

import { useEffect, useState } from 'react';

import { getCoinbaseSpotPrice } from '../services/coinbase'; // Adjust the import path as needed

export default function Dashboard() {
	const [coin, setCoin] = useState<Coin>({
		amount: '',
		base: '',
		currency: '',
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getCoinbaseSpotPrice('btc')
			.then((data) => {
				setCoin(data);
			})
			.catch((err) => {
				console.error('Failed to load price:', err);
				// you could set an error state here if you want
			})
			.finally(() => {
				setLoading(false); // ← unload spinner once done
			});
	}, []);

	return (
		<main className="p-4">
			<h1 className="text-xl font-bold mb-4">BTC Price (Coinbase)</h1>

			{loading ? (
				<p>Loading…</p>
			) : (
				<p>
					{coin.base}: ${Number(coin.amount).toLocaleString()} {coin.currency}
				</p>
			)}
		</main>
	);
}
