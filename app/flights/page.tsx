'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FlightsPage() {
  const [tripType, setTripType] = useState<'one-way' | 'round-trip' | 'multi-city'>('one-way');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [seats, setSeats] = useState('1');
  const [flightClass, setFlightClass] = useState('Economy');
  const [activeNav, setActiveNav] = useState('home');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // 頁面載入後 1 秒顯示通知
    const showTimer = setTimeout(() => {
      setShowNotification(true);
    }, 1000);

    // 5 秒後自動隱藏
    const hideTimer = setTimeout(() => {
      setShowNotification(false);
    }, 6000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleSearch = () => {
    console.log({ tripType, origin, destination, departureDate, returnDate, seats, flightClass });
  };

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600">
      {/* Mobile Header - Only on small screens */}
      <header className="flex items-center justify-between px-4 py-4 md:hidden">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-white">
            <div className="h-full w-full bg-gray-200" />
          </div>
          <div>
            <p className="text-sm text-white/90">Good morning! 👋</p>
            <h1 className="text-lg font-semibold text-white">Andrew Ainsley</h1>
          </div>
        </div>
        <Link href="/notifications">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
            <BellIcon />
          </button>
        </Link>
      </header>

      {/* Desktop Layout */}
      <div className="md:flex md:h-screen">
        {/* Desktop Sidebar - Only on medium+ screens */}
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
            <button
              onClick={() => setActiveNav('home')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeNav === 'home'
                  ? 'bg-gray-200 text-gray-900 shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-gray-100'
              }`}
            >
              <HomeIcon active={activeNav === 'home'} />
              <span className="font-medium">Home</span>
            </button>
            <button
              onClick={() => setActiveNav('explore')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeNav === 'explore'
                  ? 'bg-gray-200 text-gray-900 shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-gray-100'
              }`}
            >
              <ExploreIcon />
              <span className="font-medium">Explore</span>
            </button>
            <button
              onClick={() => setActiveNav('bookings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeNav === 'bookings'
                  ? 'bg-gray-200 text-gray-900 shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-gray-100'
              }`}
            >
              <TicketIcon />
              <span className="font-medium">My Bookings</span>
            </button>
            <button
              onClick={() => setActiveNav('saved')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeNav === 'saved'
                  ? 'bg-gray-200 text-gray-900 shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-gray-100'
              }`}
            >
              <BookmarkIcon />
              <span className="font-medium">Saved</span>
            </button>
            <Link href="/wallet">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-gray-300 hover:bg-gray-800 hover:text-gray-100">
                <WalletIcon />
                <span className="font-medium">Wallet</span>
              </button>
            </Link>
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
              <h1 className="text-2xl font-bold text-gray-100">Good morning, Andrew! 👋</h1>
              <p className="text-gray-400 mt-1">Where would you like to go today?</p>
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
            {/* Search Card - Different layout for desktop vs mobile */}
            <div className="rounded-3xl bg-gray-100 md:bg-white backdrop-blur-sm p-6 md:p-8 shadow-2xl">
              {/* Trip Type Tabs */}
              <div className="mb-6 flex gap-2 md:gap-3">
                <button
                  onClick={() => setTripType('one-way')}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all md:px-8 md:py-3 md:text-base ${
                    tripType === 'one-way'
                      ? 'bg-gray-800 text-gray-100 shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  One-Way
                </button>
                <button
                  onClick={() => setTripType('round-trip')}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all md:px-8 md:py-3 md:text-base ${
                    tripType === 'round-trip'
                      ? 'bg-gray-800 text-gray-100 shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Round Trip
                </button>
                <button
                  onClick={() => setTripType('multi-city')}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all md:px-8 md:py-3 md:text-base ${
                    tripType === 'multi-city'
                      ? 'bg-gray-800 text-gray-100 shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Multi-City
                </button>
              </div>

              {/* Mobile: Vertical Form Layout */}
              <div className="md:hidden space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-gray-700 font-medium">From</label>
                  <div className="flex items-center gap-3 rounded-2xl bg-transparent border-2 border-gray-300 px-4 py-4">
                    <PlaneIcon dark />
                    <input
                      type="text"
                      placeholder="Origin"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 border-none focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="mb-2 block text-sm text-gray-700 font-medium">To</label>
                  <div className="flex items-center gap-3 rounded-2xl bg-transparent border-2 border-gray-300 px-4 py-4">
                    <PlaneIcon rotate dark />
                    <input
                      type="text"
                      placeholder="Destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 border-none focus:outline-none focus:ring-0"
                    />
                  </div>
                  <button
                    onClick={handleSwap}
                    className="absolute -top-2 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 shadow-lg hover:bg-black transition-all"
                  >
                    <SwapIcon />
                  </button>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-700 font-medium">Departure Date</label>
                  <div className="flex items-center gap-3 rounded-2xl bg-transparent border-2 border-gray-300 px-4 py-4">
                    <CalendarIcon dark />
                    <input
                      type="text"
                      placeholder="Select date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 border-none focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-2 block text-sm text-gray-700 font-medium">Passengers</label>
                    <div className="flex items-center gap-3 rounded-2xl bg-transparent border-2 border-gray-300 px-4 py-4">
                      <PassengerIcon dark />
                      <input
                        type="text"
                        placeholder="1"
                        value={seats}
                        onChange={(e) => setSeats(e.target.value)}
                        className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 border-none focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-gray-700 font-medium">Class</label>
                    <div className="flex items-center gap-3 rounded-2xl bg-transparent border-2 border-gray-300 px-4 py-4">
                      <SeatIcon dark />
                      <input
                        type="text"
                        placeholder="Economy"
                        value={flightClass}
                        onChange={(e) => setFlightClass(e.target.value)}
                        className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 border-none focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSearch}
                  className="w-full rounded-2xl bg-gray-900 py-4 text-base font-semibold text-gray-100 shadow-lg hover:bg-black transition-colors"
                >
                  Search Flights
                </button>
              </div>

              {/* Desktop: Horizontal Form Layout */}
              <div className="hidden md:block space-y-6">
                {/* Row 1: Origin & Destination */}
                <div className="grid grid-cols-2 gap-6 relative">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">From</label>
                    <div className="flex items-center gap-3 rounded-2xl bg-transparent border-2 border-gray-300 px-5 py-4 hover:border-gray-600 focus-within:border-gray-800 transition-colors">
                      <PlaneIcon dark />
                      <input
                        type="text"
                        placeholder="Origin City or Airport"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 border-none focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">To</label>
                    <div className="flex items-center gap-3 rounded-2xl bg-transparent border-2 border-gray-300 px-5 py-4 hover:border-gray-600 focus-within:border-gray-800 transition-colors">
                      <PlaneIcon rotate dark />
                      <input
                        type="text"
                        placeholder="Destination City or Airport"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 border-none focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>
                  {/* Swap Button - Desktop Position */}
                  <button
                    onClick={handleSwap}
                    className="absolute top-[52px] left-1/2 -translate-x-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-gray-800 shadow-lg hover:bg-black transition-all hover:scale-110 z-10"
                  >
                    <SwapIcon />
                  </button>
                </div>

                {/* Row 2: Dates, Passengers, Class */}
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Departure</label>
                    <div className="flex items-center gap-3 rounded-2xl bg-transparent border-2 border-gray-300 px-5 py-4 hover:border-gray-600 focus-within:border-gray-800 transition-colors">
                      <CalendarIcon dark />
                      <input
                        type="text"
                        placeholder="Select date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 border-none focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Return</label>
                    <div className="flex items-center gap-3 rounded-2xl bg-transparent border-2 border-gray-300 px-5 py-4 hover:border-gray-600 focus-within:border-gray-800 transition-colors">
                      <CalendarIcon dark />
                      <input
                        type="text"
                        placeholder="Select date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 border-none focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Passengers</label>
                    <div className="flex items-center gap-3 rounded-2xl bg-transparent border-2 border-gray-300 px-5 py-4 hover:border-gray-600 focus-within:border-gray-800 transition-colors">
                      <PassengerIcon dark />
                      <input
                        type="text"
                        placeholder="1"
                        value={seats}
                        onChange={(e) => setSeats(e.target.value)}
                        className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 border-none focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Class</label>
                    <div className="flex items-center gap-3 rounded-2xl bg-transparent border-2 border-gray-300 px-5 py-4 hover:border-gray-600 focus-within:border-gray-800 transition-colors">
                      <SeatIcon dark />
                      <input
                        type="text"
                        placeholder="Economy"
                        value={flightClass}
                        onChange={(e) => setFlightClass(e.target.value)}
                        className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 border-none focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="w-full md:w-auto md:px-16 rounded-2xl bg-gray-900 py-4 text-lg font-semibold text-gray-100 shadow-lg hover:bg-black transition-all hover:shadow-xl"
                >
                  Search Flights
                </button>
              </div>
            </div>

            {/* Special Offers Section */}
            <div className="mt-8 md:mt-12">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl md:text-3xl font-bold text-gray-100">Special Offers</h2>
                  <p className="text-gray-400 mt-1 hidden md:block">Don't miss out on these amazing deals!</p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-100 transition-colors backdrop-blur-sm">
                  <span className="text-sm md:text-base font-medium">View All</span>
                  <ChevronRightIcon />
                </button>
              </div>

              {/* Offers Grid - Better desktop layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="rounded-3xl bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 p-6 md:p-8 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative z-10">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-2">25% OFF</h3>
                    <p className="text-lg md:text-xl font-semibold text-gray-200 mb-3">Limited Time Offer!</p>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
                      Unlock a world of savings and adventure with AirFly! For a limited time only.
                    </p>
                    <button className="px-6 py-2 bg-gray-200 text-gray-900 rounded-full font-medium hover:bg-white transition-colors">
                      Book Now
                    </button>
                  </div>
                  <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64">
                    <div className="relative w-full h-full opacity-20 group-hover:opacity-30 transition-opacity">
                      <div className="absolute inset-0 bg-gray-900 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Additional offer cards for desktop */}
                <div className="hidden md:block rounded-3xl bg-gradient-to-br from-gray-600 via-gray-500 to-gray-400 p-6 md:p-8 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative z-10">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-2">FREE</h3>
                    <p className="text-lg md:text-xl font-semibold text-gray-200 mb-3">Extra Baggage</p>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
                      Book business class and get free additional baggage allowance.
                    </p>
                    <button className="px-6 py-2 bg-gray-200 text-gray-900 rounded-full font-medium hover:bg-white transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="hidden lg:block rounded-3xl bg-gradient-to-br from-gray-500 via-gray-400 to-gray-300 p-6 md:p-8 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative z-10">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">2 FOR 1</h3>
                    <p className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Partner Special</p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                      Bring a friend and fly together for the price of one ticket.
                    </p>
                    <button className="px-6 py-2 bg-gray-900 text-gray-100 rounded-full font-medium hover:bg-black transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Destinations - Desktop Only */}
            <div className="hidden md:block mt-12">
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Popular Destinations</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {['Paris', 'Tokyo', 'New York', 'Dubai'].map((city) => (
                  <div key={city} className="rounded-2xl bg-gray-800 backdrop-blur-sm p-6 hover:bg-gray-700 transition-all cursor-pointer hover:scale-105 duration-300 border border-gray-700">
                    <div className="h-32 bg-gray-700 rounded-xl mb-4"></div>
                    <h3 className="text-xl font-semibold text-gray-100 mb-1">{city}</h3>
                    <p className="text-gray-400 text-sm">From $599</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation - Hidden on desktop */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-white/10 md:hidden">
        <div className="flex items-center justify-around py-3">
          <button className="flex flex-col items-center gap-1">
            <HomeIcon active />
            <span className="text-xs font-medium text-blue-600">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <BookmarkIcon />
            <span className="text-xs text-white/60">Saved</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <TicketIcon />
            <span className="text-xs text-white/60">Bookings</span>
          </button>
          <Link href="/wallet">
            <button className="flex flex-col items-center gap-1">
              <WalletIcon />
              <span className="text-xs text-white/60">Wallet</span>
            </button>
          </Link>
          <button className="flex flex-col items-center gap-1">
            <UserIcon />
            <span className="text-xs text-white/60">Account</span>
          </button>
        </div>
      </nav>

      {/* Notification Toast - Desktop: Bottom Right / Mobile: Top Center */}
      {showNotification && (
        <div
          className={`fixed z-50 animate-slide-in ${
            // Desktop: 右下角
            'md:bottom-8 md:right-8 md:top-auto md:left-auto md:translate-x-0 ' +
            // Mobile: 頂部中央
            'top-20 left-4 right-4 md:w-96'
          }`}
        >
          <Link href="/notifications">
            <div className="bg-gray-900/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-gray-700 cursor-pointer hover:bg-gray-800/95 transition-all hover:scale-[1.02] group">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600/20 border-2 border-blue-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold text-gray-100">New Feature Alert!</h3>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShowNotification(false);
                      }}
                      className="flex-shrink-0 p-1 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <svg className="h-4 w-4 text-gray-400 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-2">
                    Discover exciting new app features. Enhance your travel experience today!
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Just now</span>
                    <span className="text-xs text-blue-400 font-medium group-hover:text-blue-300">View →</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

// Icon Components
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

function PlaneIcon({ rotate = false, dark = false }: { rotate?: boolean; dark?: boolean }) {
  return (
    <svg
      className={`h-6 w-6 ${dark ? 'text-gray-500' : 'text-white/70'} ${rotate ? 'rotate-90' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}

function SwapIcon() {
  return (
    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  );
}

function CalendarIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg className={`h-6 w-6 ${dark ? 'text-gray-500' : 'text-white/70'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function PassengerIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg className={`h-6 w-6 ${dark ? 'text-gray-500' : 'text-white/70'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function SeatIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg className={`h-6 w-6 ${dark ? 'text-gray-500' : 'text-white/70'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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

function WalletIcon() {
  return (
    <svg className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
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
