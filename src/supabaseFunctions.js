import { supabase } from 'supabase'; // Import Supabase client

// Function to create a new booking
export const createBooking = async (bookingData) => {
  const { data, error } = await supabase.from('bookings').insert([bookingData]);
  if (error) {
    console.error('Error creating booking:', error.message);
    return null;
  }
  return data;
};

// Function to fetch all bookings
export const fetchBookings = async () => {
  const { data, error } = await supabase.from('bookings').select('*');
  if (error) {
    console.error('Error fetching bookings:', error.message);
    return null;
  }
  return data;
};

// Add other functions for updating and deleting bookings if needed
