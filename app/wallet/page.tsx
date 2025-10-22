'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Transaction {
  id: string;
  type: 'debit' | 'credit';
  title: string;
  subtitle: string;
  amount: number;
  date: string;
  time: string;
  paymentMethod: string;
}

export default function WalletPage() {
  const [activeNav, setActiveNav] = useState('wallet');
  const balance = 22883.25;

  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'debit',
      title: 'JFK to CDG: One Way Trip',
      subtitle: 'Airfly Wallet',
      amount: -1204.75,
      date: 'Dec 22, 2023',
      time: '09:41:20 AM',
      paymentMethod: 'Airfly Wallet',
    },
    {
      id: '2',
      type: 'debit',
      title: 'JFK to CDG: One Way Trip',
      subtitle: 'Airfly Wallet',
      amount: -3490.50,
      date: 'Dec 22, 2023',
      time: '09:41:15 AM',
      paymentMethod: 'Airfly Wallet',
    },
    {
      id: '3',
      type: 'debit',
      title: 'JFK to CDG & Return: Round...',
      subtitle: 'Airfly Wallet',
      amount: -2268.00,
      date: 'Dec 20, 2023',
      time: '14:25:37 PM',
      paymentMethod: 'Airfly Wallet',
    },
    {
      id: '4',
      type: 'credit',
      title: 'Top Up Wallet',
      subtitle: 'PayPal',
      amount: 5000.00,
      date: 'Dec 19, 2023',
      time: '19:20:49 PM',
      paymentMethod: 'PayPal',
    },
    {
      id: '5',
      type: 'debit',
      title: 'LGA to HND: One Way Trip',
      subtitle: 'VISA',
      amount: -1450.25,
      date: 'Dec 18, 2023',
      time: '20:46:53 PM',
      paymentMethod: 'VISA',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600">
      {/* Mobile Header - Only on small screens */}
      <header className="flex items-center justify-between px-4 py-4 md:hidden">
        <Link href="/flights">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeftIcon />
          </button>
        </Link>
        <h1 className="text-xl font-bold text-white">Wallet</h1>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <SearchIcon />
        </button>
      </header>

      {/* Desktop Layout */}
      <div className="md:flex md:h-screen">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex md:w-64 lg:w-72 md:flex-col bg-gray-900/95 backdrop-blur-lg border-r border-gray-700">
          {/* Logo & Brand */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center">
                <span className="text-2xl">✈️</span>
              </div>
              <span className="text-xl font-bold text-gray-100">AirFly</span>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4 space-y-2">
            <Link href="/flights">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-gray-300 hover:bg-gray-800 hover:text-gray-100">
                <HomeIcon active={false} />
                <span className="font-medium">Home</span>
              </button>
            </Link>
            <button
              onClick={() => setActiveNav('explore')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-gray-300 hover:bg-gray-800 hover:text-gray-100"
            >
              <ExploreIcon />
              <span className="font-medium">Explore</span>
            </button>
            <button
              onClick={() => setActiveNav('bookings')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-gray-300 hover:bg-gray-800 hover:text-gray-100"
            >
              <TicketIcon />
              <span className="font-medium">My Bookings</span>
            </button>
            <button
              onClick={() => setActiveNav('saved')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-gray-300 hover:bg-gray-800 hover:text-gray-100"
            >
              <BookmarkIcon />
              <span className="font-medium">Saved</span>
            </button>
            <button
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all bg-gray-200 text-gray-900 shadow-lg"
            >
              <WalletIconActive />
              <span className="font-medium">Wallet</span>
            </button>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-300">
                <div className="h-full w-full bg-gray-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-100">Andrew Ainsley</p>
                <p className="text-xs text-gray-400">View Profile</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 md:overflow-y-auto">
          {/* Desktop Top Bar */}
          <div className="hidden md:flex items-center justify-between px-8 py-6 bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
            <div>
              <h1 className="text-2xl font-bold text-gray-100">My Wallet</h1>
              <p className="text-gray-400 mt-1">Manage your balance and transactions</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/notifications">
                <button className="relative p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <BellIcon />
                  <span className="absolute top-2 right-2 h-2 w-2 bg-gray-400 rounded-full"></span>
                </button>
              </Link>
              <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <SettingsIcon />
              </button>
            </div>
          </div>

          <div className="px-4 md:px-8 py-6 md:py-8 pb-24 md:pb-8">
            {/* Wallet Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 p-6 md:p-8 shadow-2xl overflow-hidden mb-8">
              {/* Card Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <h2 className="text-xl md:text-2xl font-bold text-white">Andrew Ainsley</h2>
                  <div className="flex gap-2">
                    <div className="w-10 h-6 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-white">MC</span>
                    </div>
                    <div className="w-10 h-6 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-white">VI</span>
                    </div>
                    <div className="w-10 h-6 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-white">AE</span>
                    </div>
                    <div className="w-10 h-6 bg-white/20 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-white">JC</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-white/80 text-sm mb-2">Your balance</p>
                  <p className="text-4xl md:text-5xl font-bold text-white">${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>

                <button className="px-6 md:px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Top Up
                </button>
              </div>
            </div>

            {/* Transaction History */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-100">Transaction History</h2>
                <Link href="/transactions">
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-100 transition-colors">
                    <span className="text-sm font-medium">View All</span>
                    <ChevronRightIcon />
                  </button>
                </Link>
              </div>

              <div className="space-y-3">
                {transactions.map((transaction) => (
                  <TransactionCard key={transaction.id} transaction={transaction} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-white/10 md:hidden">
        <div className="flex items-center justify-around py-3">
          <Link href="/flights">
            <button className="flex flex-col items-center gap-1">
              <HomeIcon active={false} />
              <span className="text-xs text-white/60">Home</span>
            </button>
          </Link>
          <button className="flex flex-col items-center gap-1">
            <BookmarkIcon />
            <span className="text-xs text-white/60">Saved</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <TicketIcon />
            <span className="text-xs text-white/60">Bookings</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <WalletIconActive />
            <span className="text-xs font-medium text-blue-500">Wallet</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <UserIcon />
            <span className="text-xs text-white/60">Account</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

function TransactionCard({ transaction }: { transaction: Transaction }) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-5 flex items-center justify-between hover:bg-gray-800/80 transition-all cursor-pointer border border-gray-700/50">
      <div className="flex-1">
        <h3 className="text-base md:text-lg font-semibold text-gray-100 mb-1">{transaction.title}</h3>
        <p className="text-sm text-gray-400 mb-2">
          {transaction.date} · {transaction.time}
        </p>
        <p className="text-xs text-gray-500">{transaction.paymentMethod}</p>
      </div>
      <div className="text-right">
        <p className={`text-lg md:text-xl font-bold ${transaction.type === 'credit' ? 'text-green-400' : 'text-gray-100'}`}>
          {transaction.type === 'credit' ? '+' : '-'} ${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );
}

// Icon Components
function ArrowLeftIcon() {
  return (
    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function HomeIcon({ active = false }: { active?: boolean }) {
  return (
    <svg className={`h-6 w-6 ${active ? 'text-gray-900' : 'text-gray-400'}`} fill={active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function ExploreIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  );
}

function WalletIconActive() {
  return (
    <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
