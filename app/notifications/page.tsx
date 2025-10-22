'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Notification {
  id: string;
  icon: string;
  title: string;
  description: string;
  time: string;
  isRead: boolean;
  type: 'feature' | 'security' | 'flight' | 'offer' | 'payment';
}

export default function NotificationsPage() {
  const [activeNav, setActiveNav] = useState('home');
  const [notifications] = useState<Notification[]>([
    {
      id: '1',
      icon: 'check',
      title: 'New Feature Alert!',
      description: 'Discover exciting new app features. Enhance your travel experience today!',
      time: '09:41 AM',
      isRead: false,
      type: 'feature',
    },
    {
      id: '2',
      icon: 'shield',
      title: 'Enable 2-Factor Authentication',
      description: 'Use 2-factor authentication for multiple layers of security on your account.',
      time: '14:45 PM',
      isRead: false,
      type: 'security',
    },
    {
      id: '3',
      icon: 'plane',
      title: 'Your Flight Update!',
      description: 'Flight to Tokyo (HND) on time at gate B12. Safe travels!',
      time: '09:40 AM',
      isRead: false,
      type: 'flight',
    },
    {
      id: '4',
      icon: 'tag',
      title: 'Exclusive Offer Unlocked!',
      description: "Congrats! You've unlocked a 15% discount on your next flight booking with Airfly. Start planning your adventure today!",
      time: '20:26 PM',
      isRead: false,
      type: 'offer',
    },
    {
      id: '5',
      icon: 'card',
      title: 'Multiple Payment Updates!',
      description: 'Now you can add a credit card for flight tickets payments.',
      time: '16:34 PM',
      isRead: false,
      type: 'payment',
    },
  ]);

  const groupedNotifications = {
    today: notifications.slice(0, 1),
    yesterday: notifications.slice(1, 3),
    'Dec 20, 2023': notifications.slice(3, 5),
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
        <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
          <BellIcon />
        </button>
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
            <Link href="/flights">
              <button
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-gray-300 hover:bg-gray-800 hover:text-gray-100"
              >
                <HomeIcon active={false} />
                <span className="font-medium">Home</span>
              </button>
            </Link>
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
            <button
              onClick={() => setActiveNav('wallet')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeNav === 'wallet'
                  ? 'bg-gray-200 text-gray-900 shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-gray-100'
              }`}
            >
              <WalletIcon />
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
              <h1 className="text-2xl font-bold text-gray-100">Notifications</h1>
              <p className="text-gray-400 mt-1">Stay updated with your latest activities</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <BellIcon />
                <span className="absolute top-2 right-2 h-2 w-2 bg-gray-400 rounded-full"></span>
              </button>
              <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <SettingsIcon />
              </button>
            </div>
          </div>

          <div className="px-4 md:px-8 py-6 md:py-8 pb-24 md:pb-8">
            {/* Today Section */}
            {groupedNotifications.today.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Today</h2>
                <div className="space-y-3">
                  {groupedNotifications.today.map((notification) => (
                    <NotificationCard key={notification.id} notification={notification} />
                  ))}
                </div>
              </div>
            )}

            {/* Yesterday Section */}
            {groupedNotifications.yesterday.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Yesterday</h2>
                <div className="space-y-3">
                  {groupedNotifications.yesterday.map((notification) => (
                    <NotificationCard key={notification.id} notification={notification} />
                  ))}
                </div>
              </div>
            )}

            {/* Dec 20, 2023 Section */}
            {groupedNotifications['Dec 20, 2023'].length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Dec 20, 2023</h2>
                <div className="space-y-3">
                  {groupedNotifications['Dec 20, 2023'].map((notification) => (
                    <NotificationCard key={notification.id} notification={notification} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation - Hidden on desktop */}
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
            <WalletIcon />
            <span className="text-xs text-white/60">Wallet</span>
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

function NotificationCard({ notification }: { notification: Notification }) {
  return (
    <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 flex items-start gap-4 hover:bg-gray-800/80 transition-all cursor-pointer border border-gray-700/50 group">
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center group-hover:border-gray-600 transition-colors">
        <NotificationIcon type={notification.type} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base md:text-lg font-semibold text-gray-100">{notification.title}</h3>
          {!notification.isRead && (
            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
          )}
        </div>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-3">{notification.description}</p>
        <span className="text-xs md:text-sm text-gray-500">{notification.time}</span>
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0 self-center">
        <ChevronRightIcon />
      </div>
    </div>
  );
}

// Icon Components
function NotificationIcon({ type }: { type: string }) {
  const iconClasses = "h-6 w-6 md:h-7 md:w-7 text-gray-300";

  switch (type) {
    case 'feature':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      );
    case 'security':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'flight':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      );
    case 'offer':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      );
    case 'payment':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      );
    default:
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      );
  }
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
    <svg className="h-5 w-5 text-gray-500 group-hover:text-gray-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
