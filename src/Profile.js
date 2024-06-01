import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useAuth } from './AuthContext';

const supabaseURL = 'https://jimvadrzkxsntjyklhrs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppbXZhZHJ6a3hzbnRqeWtsaHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4ODk5MzIsImV4cCI6MjAzMDQ2NTkzMn0.bSnHVGSvMtgLfLYuqqgw4crQFkHtGsc6uwXLig6hOEA';
const supabase = createClient(supabaseURL, supabaseKey);

const Profile = () => {
  const { currentUser } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchBookings = async () => {
          if (!currentUser || !currentUser.id) {
              console.error('No current user or user ID is undefined');
              setLoading(false);
              return;
          }

          // Validate the currentUser.id
          const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
          if (!uuidRegex.test(currentUser.id)) {
              console.error('Invalid user ID format:', currentUser.id);
              setLoading(false);
              return;
          }

          try {
              const { data, error } = await supabase
                  .from('bookings')
                  .select('*')
                  .eq('user_id', currentUser.id);

              if (error) {
                  throw error;
              }

              setBookings(data);
          } catch (error) {
              console.error('Error fetching bookings:', error);
          } finally {
              setLoading(false);
          }
      };

      fetchBookings();
  }, [currentUser]);

  if (loading) {
      return <div>Loading...</div>;
  }

  return (
      <div className='profile-section'>
          <h1 className='profile-title'>Profile</h1>
          <h2>Your Bookings</h2>
          {bookings.length > 0 ? (
              <ul>
                  {bookings.map((booking) => (
                      <li key={booking.id}>
                          {booking.movie} - {booking.date} - {booking.number_of_tickets} tickets
                      </li>
                  ))}
              </ul>
          ) : (
              <p>No bookings found.</p>
          )}
      </div>
  );
};

export default Profile;
