
import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';
import { Plane, Hotel, Car, X, Calendar, MapPin, CreditCard } from 'lucide-react';

type FlightBooking = {
  type: 'Flight';
  origin: string;
  destination: string;
  date: string;
  details: string;
  status: 'Confirmed' | 'Pending' | string;
  cost: string;
  seat: string;
  terminal: string;
};

type HotelBooking = {
  type: 'Hotel';
  name: string;
  location: string;
  checkIn: string;
  checkOut: string;
  status: 'Confirmed' | 'Pending' | string;
  cost: string;
  roomType: string;
  guests: number;
};

type CarBooking = {
  type: 'Car';
  provider: string;
  pickup: string;
  dropoff: string;
  status: 'Confirmed' | 'Pending' | string;
  cost: string;
  carType: string;
  duration: string;
};

type Booking = FlightBooking | HotelBooking | CarBooking;

const bookings: Booking[] = [
  {
    type: 'Flight',
    origin: 'DEL',
    destination: 'BOM',
    date: '2024-12-20',
    details: 'Indigo 6E 2045',
    status: 'Confirmed',
    cost: '₹8,500',
    seat: '12A',
    terminal: 'Terminal 3'
  },
  {
    type: 'Hotel',
    name: 'Taj Mahal Palace',
    location: 'Mumbai',
    checkIn: '2024-12-20',
    checkOut: '2024-12-25',
    status: 'Confirmed',
    cost: '₹25,000',
    roomType: 'Deluxe Room',
    guests: 2
  },
  {
    type: 'Car',
    provider: 'Avis',
    pickup: '2024-12-20',
    dropoff: '2024-12-25',
    status: 'Pending',
    cost: '₹3,500',
    carType: 'Sedan',
    duration: '5 days'
  }
];

const BookingDetailPopup = ({ booking, isOpen, onClose, theme }: any) => {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (booking.type) {
      case 'Flight':
        return <Plane className="w-5 h-5 text-[#FF4C39]" />;
      case 'Hotel':
        return <Hotel className="w-5 h-5 text-[#3B82F6]" />;
      case 'Car':
        return <Car className="w-5 h-5 text-[#10B981]" />;
      default:
        return null;
    }
  };

  return (
    <div className={`mt-3 p-4 rounded-2xl border ${theme === 'dark' ? 'bg-gray-800/60 border-gray-700/40' : 'bg-gray-50/80 border-gray-200'}`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>
          {booking.type} Details
        </h4>
        <button onClick={onClose} className={`p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}>
          <X className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
        </button>
      </div>
      <div className="space-y-3">
        <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-white/60'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-[#303036]'}`}>Booking Info</span>
            {getIcon()}
          </div>
          {booking.type === 'Flight' && (
            <>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>Route: {booking.origin} → {booking.destination}</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>Flight: {booking.details}</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>Seat: {booking.seat}</p>
            </>
          )}
          {booking.type === 'Hotel' && (
            <>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>Hotel: {booking.name}</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>Room: {booking.roomType}</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>Guests: {booking.guests}</p>
            </>
          )}
          {booking.type === 'Car' && (
            <>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>Provider: {booking.provider}</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>Type: {booking.carType}</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>Duration: {booking.duration}</p>
            </>
          )}
        </div>
        <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-white/60'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-[#303036]'}`}>Payment</span>
            <CreditCard className="w-4 h-4 text-[#FF4C39]" />
          </div>
          <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>Cost: {booking.cost}</p>
          <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>Status: {booking.status}</p>
        </div>
      </div>
    </div>
  );
};

const BookingCard = ({ booking, onClick }: { booking: Booking; onClick: () => void }) => {
  const { theme } = useTheme();
  const getIcon = () => {
    switch (booking.type) {
      case 'Flight':
        return <Plane className="w-5 h-5 text-[#FF4C39]" />;
      case 'Hotel':
        return <Hotel className="w-5 h-5 text-[#3B82F6]" />;
      case 'Car':
        return <Car className="w-5 h-5 text-[#10B981]" />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`w-full p-3 md:p-4 rounded-xl md:rounded-2xl hover:scale-[1.02] transition-all duration-200 text-left ${
        theme === 'dark'
          ? 'bg-gray-700/50 border border-gray-600/10 hover:bg-gray-700/70'
          : 'bg-white/60 border hover:bg-white/80'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
          <div
            className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 ${
              booking.type === 'Flight' ? 'bg-[#FF4C39]/10' : 
              booking.type === 'Hotel' ? 'bg-[#3B82F6]/10' : 'bg-[#10B981]/10'
            }`}
          >
            {getIcon()}
          </div>
          <div className="min-w-0 flex-1">
            <div className={`font-medium text-sm md:text-base truncate ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>
              {booking.type === 'Flight' && `${booking.origin} → ${booking.destination}`}
              {booking.type === 'Hotel' && booking.name}
              {booking.type === 'Car' && booking.provider}
            </div>
            <div className={`text-xs md:text-sm truncate ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
              {booking.type === 'Flight' && `On ${booking.date}`}
              {booking.type === 'Hotel' && `In ${booking.location}`}
              {booking.type === 'Car' && `Pickup on ${booking.pickup}`}
            </div>
          </div>
        </div>
        <div
          className={`text-xs font-medium px-2 py-1 rounded-lg md:rounded-xl flex-shrink-0 ${
            booking.status === 'Confirmed'
              ? 'bg-[#10B981]/10 text-[#10B981]'
              : 'bg-[#F59E0B]/10 text-[#F59E0B]'
          }`}
        >
          {booking.status}
        </div>
      </div>
    </button>
  );
};

const Bookings = () => {
  const { theme } = useTheme();
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  return (
    <div
      className={`rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] ${
        theme === 'dark'
          ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
          : 'bg-white/80 backdrop-blur-sm border border-white/40'
      }`}
    >
      <h3
        className={`text-base md:text-lg font-semibold ${
          theme === 'dark' ? 'text-white' : 'text-[#303036]'
        } mb-3 md:mb-4`}
      >
        Active Bookings
      </h3>
      <div className="space-y-2 md:space-y-3">
        {bookings.map((booking, index) => (
          <BookingCard key={index} booking={booking} onClick={() => setSelectedBooking(booking)} />
        ))}
      </div>
      
      {selectedBooking && (
        <BookingDetailPopup 
          booking={selectedBooking} 
          isOpen={!!selectedBooking} 
          onClose={() => setSelectedBooking(null)} 
          theme={theme}
        />
      )}
    </div>
  );
};

export default Bookings;
