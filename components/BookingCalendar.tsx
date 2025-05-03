// components/BookingCalendar.tsx
import React from 'react';

const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0h7A71YAA1PX1pEBV00uwv3W8cn7R2eKCz-u2yPrLaieYqo-y8zA4RgVUtcqT1Hv1g2GZlY1HD?gv=true"; // Your specific URL

const BookingCalendar = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-300 h-[600px] md:h-full">
      <iframe
        src={GOOGLE_CALENDAR_URL}
        style={{ border: 0 }}
        width="100%"
        height="100%" // Let the container control the height
        frameBorder="0"
        title="Booking Calendar" // Add title for accessibility
        loading="lazy" // Lazy load the iframe
      ></iframe>
    </div>
  );
};

export default BookingCalendar;