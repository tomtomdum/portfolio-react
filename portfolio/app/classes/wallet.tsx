import { Coin } from '../models/coin';

export class Wallet {
	// ✅ Use the primitive `number`, not the `Number` wrapper type
	constructor(
		private cash: number,
		private coins: Coin[] = []
	) {}

	/** Read-only access to cash */
	get balance(): number {
		return this.cash;
	}

	/** Read-only list of holdings */
	get holdings(): ReadonlyArray<Coin> {
		return this.coins;
	}

	/** Buy `qty` units at the given coin price */
	buy(coin: Coin, qty: number): void {
		const cost = coin.amount * qty;
		if (cost > this.cash) throw new Error('Insufficient funds');
		this.cash -= cost;
		this.coins.push(new Coin(coin.base, coin.amount, coin.currency));
	}
}
