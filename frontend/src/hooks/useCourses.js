import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export function useCourses() {
  const { token } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only fetch if a token is available
    if (token) {
      const fetchCourses = async () => {
        setLoading(true);
        try {
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
          const response = await axios.get('/api/courses', config);
          
          if (Array.isArray(response.data)) {
            setCourses(response.data);
          } else {
            throw new Error("Data received is not an array");
          }
        } catch (err) {
          console.error("Failed to fetch courses:", err);
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchCourses();
    } else {
      // If no token, we aren't loading and have no courses
      setLoading(false);
      setCourses([]);
    }
  }, [token]); // Re-run effect if token changes

  return { courses, loading, error };
}