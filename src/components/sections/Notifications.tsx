import React, { useState, useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import clsx from 'clsx';
import { CheckCircle2, DollarSign, Plane, AlertTriangle } from 'lucide-react';

type NotificationsProps = {
  onUnreadCountChange?: (count: number) => void;
  mode?: 'panel' | 'all';
  onViewAll?: () => void;
};

const notificationsData = [
  {
    id: '1',
    category: 'approvals',
    title: 'Travel Request Approved',
    message: 'Your trip to San Francisco has been approved.',
    timestamp: '5 min ago',
    isRead: false,
    iconType: <CheckCircle2 className="text-green-500" />,
  },
  {
    id: '2',
    category: 'expenses',
    title: 'Expense Report Submitted',
    message: 'Your expense report for the last trip has been submitted.',
    timestamp: '1 hour ago',
    isRead: false,
    iconType: <DollarSign className="text-blue-500" />,
  },
  {
    id: '3',
    category: 'travel',
    title: 'Flight Itinerary Updated',
    message: 'Your flight to San Francisco has been updated.',
    timestamp: '2 hours ago',
    isRead: true,
    iconType: <Plane className="text-yellow-500" />,
  },
  {
    id: '4',
    category: 'alerts',
    title: 'System Maintenance',
    message: 'The system will be down for maintenance tonight.',
    timestamp: '1 day ago',
    isRead: true,
    iconType: <AlertTriangle className="text-red-500" />,
  },
];

const Notifications = ({ onUnreadCountChange, mode = 'panel', onViewAll }: NotificationsProps) => {
  const { theme } = useTheme();
  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, isRead: true })));
  };

  const handleClearRead = () => {
    setNotifications(notifications.filter((notification) => !notification.isRead));
  };

  const handleNotificationClick = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const visibleNotifications = useMemo(() => {
    if (mode === 'panel') {
      return notifications.slice(0, 4);
    }
    const filtered =
      filter === 'All'
        ? notifications
        : notifications.filter((n) => n.category === filter.toLowerCase());
    const searched = filtered.filter(
      (n) =>
        n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        n.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return searched;
  }, [notifications, mode, filter, searchTerm]);

  const unreadCount = useMemo(
    () => notifications.filter((notification) => !notification.isRead).length,
    [notifications]
  );

  React.useEffect(() => {
    if (onUnreadCountChange) {
      onUnreadCountChange(unreadCount);
    }
  }, [unreadCount, onUnreadCountChange]);

  return (
    <div
      className={clsx(
        'w-full rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200',
        theme === 'dark'
          ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
          : 'bg-white/80 backdrop-blur-sm border border-white/40'
      )}
    >
      <div className="p-4 pb-6">
        <div className="flex justify-between items-center">
          <h3
            className={clsx(
              'text-lg font-medium',
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            )}
          >
            Notifications
          </h3>
          <button onClick={handleMarkAllAsRead} className="text-sm font-medium text-blue-600">
            Mark all as read
          </button>
        </div>
        {mode === 'all' && (
          <>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search notifications..."
                className={clsx(
                  'w-full px-3 py-2 rounded-md',
                  theme === 'dark'
                    ? 'bg-gray-700/80 border border-gray-600/40 text-white'
                    : 'border border-gray-300'
                )}
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap gap-3">
                {['All', 'Approvals', 'Expenses', 'Travel', 'Alerts'].map((label) => (
                  <button
                    key={label}
                    onClick={() => handleFilterChange(label)}
                    className={clsx(
                      'text-sm font-medium px-3 py-1 rounded-md',
                      filter === label
                        ? 'bg-blue-50 text-blue-600'
                        : theme === 'dark'
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
        {/* Scrollable list area */}
        <div className={clsx('mt-4 overflow-y-auto scrollbar-thin pr-1', mode === 'panel' ? 'max-h-72' : 'max-h-[60vh]') }>
          <ul
            className={clsx(
              'divide-y',
              theme === 'dark' ? 'divide-gray-700/40' : 'divide-gray-200'
            )}
          >
            {visibleNotifications.map((notification) => (
              <li
                key={notification.id}
                onClick={() => handleNotificationClick(notification.id)}
                className={clsx(
                  'py-4 flex cursor-pointer',
                  theme === 'dark' ? 'hover:bg-gray-700/20' : 'hover:bg-gray-50'
                )}
              >
                <div className="text-2xl">{notification.iconType}</div>
                <div className="ml-3">
                  <p
                    className={clsx(
                      'text-sm font-medium',
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    )}
                  >
                    {notification.title}
                  </p>
                  <p
                    className={clsx(
                      'text-sm',
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    )}
                  >
                    {notification.message}
                  </p>
                  <p
                    className={clsx(
                      'text-xs',
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    )}
                  >
                    {notification.timestamp}
                  </p>
                </div>
                {!notification.isRead && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full ml-auto"></div>
                )}
              </li>
            ))}
          </ul>
          {mode === 'panel' && (
            <div className="p-3 text-center">
              <button onClick={onViewAll} className="text-sm font-medium text-blue-600">View All Notifications</button>
            </div>
          )}
        </div>
        <div
          className={clsx(
            'p-4 flex justify-between items-center',
            theme === 'dark' ? 'border-t border-gray-700/40' : 'border-t border-gray-200'
          )}
        >
          <p
            className={clsx(
              'text-sm',
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            )}
          >
            Total: {notifications.length}, Unread: {unreadCount}
          </p>
          <button onClick={handleClearRead} className="text-sm font-medium text-red-600">
            Clear read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
