import { supabase } from 'supabase'; 
export const createBooking = async (bookingData) => {
  const { data, error } = await supabase.from('bookings').insert([bookingData]);
  if (error) {
    console.error('Error creating booking:', error.message);
    return null;
  }
  return data;
};

export const fetchBookings = async () => {
  const { data, error } = await supabase.from('bookings').select('*');
  if (error) {
    console.error('Error fetching bookings:', error.message);
    return null;
  }
  return data;
};


