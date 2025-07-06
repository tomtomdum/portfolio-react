'use client';
import Dashboard from './crypto-dashboard/dashboard';
import { useEffect, useState } from 'react';
import { getCoinbasePrice } from './services/coinbase';

export default function Home() {
	return (
		<>
			<Dashboard />
		</>
	);
}
