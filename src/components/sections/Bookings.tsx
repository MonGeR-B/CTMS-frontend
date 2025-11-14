
import { useTheme } from '../../contexts/ThemeContext';
import { Plane, Hotel, Car } from 'lucide-react';

type FlightBooking = {
  type: 'Flight';
  origin: string;
  destination: string;
  date: string;
  details: string;
  status: 'Confirmed' | 'Pending' | string;
};

type HotelBooking = {
  type: 'Hotel';
  name: string;
  location: string;
  checkIn: string;
  checkOut: string;
  status: 'Confirmed' | 'Pending' | string;
};

type CarBooking = {
  type: 'Car';
  provider: string;
  pickup: string;
  dropoff: string;
  status: 'Confirmed' | 'Pending' | string;
};

type Booking = FlightBooking | HotelBooking | CarBooking;

const bookings: Booking[] = [
  {
    type: 'Flight',
    origin: 'DEL',
    destination: 'BOM',
    date: '2024-12-20',
    details: 'Indigo 6E 2045',
    status: 'Confirmed'
  },
  {
    type: 'Hotel',
    name: 'Taj Mahal Palace',
    location: 'Mumbai',
    checkIn: '2024-12-20',
    checkOut: '2024-12-25',
    status: 'Confirmed'
  },
  {
    type: 'Car',
    provider: 'Avis',
    pickup: '2024-12-20',
    dropoff: '2024-12-25',
    status: 'Pending'
  }
];

const BookingCard = ({ booking }: { booking: Booking }) => {
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
    <div
      className={`p-4 rounded-2xl ${
        theme === 'dark'
          ? 'bg-gray-700/50 border border-gray-600/10'
          : 'bg-white/60 border'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              booking.type === 'Flight' ? 'bg-[#FF4C39]/10' : 
              booking.type === 'Hotel' ? 'bg-[#3B82F6]/10' : 'bg-[#10B981]/10'
            }`}
          >
            {getIcon()}
          </div>
          <div>
            <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#303036]'}`}>
              {booking.type === 'Flight' && `${booking.origin} → ${booking.destination}`}
              {booking.type === 'Hotel' && booking.name}
              {booking.type === 'Car' && booking.provider}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#787880]'}`}>
              {booking.type === 'Flight' && `On ${booking.date}`}
              {booking.type === 'Hotel' && `In ${booking.location}`}
              {booking.type === 'Car' && `Pickup on ${booking.pickup}`}
            </div>
          </div>
        </div>
        <div
          className={`text-xs font-medium px-2 py-1 rounded-xl ${
            booking.status === 'Confirmed'
              ? 'bg-[#10B981]/10 text-[#10B981]'
              : 'bg-[#F59E0B]/10 text-[#F59E0B]'
          }`}
        >
          {booking.status}
        </div>
      </div>
    </div>
  );
};

const Bookings = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`rounded-3xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] ${
        theme === 'dark'
          ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700/40'
          : 'bg-white/80 backdrop-blur-sm border border-white/40'
      }`}
    >
      <h3
        className={`text-lg font-semibold ${
          theme === 'dark' ? 'text-white' : 'text-[#303036]'
        } mb-4`}
      >
        Active Bookings
      </h3>
      <div className="space-y-3">
        {bookings.map((booking, index) => (
          <BookingCard key={index} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;
