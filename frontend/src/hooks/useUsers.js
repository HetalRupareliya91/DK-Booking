import { useCallback, useEffect, useState } from 'react';
import { listUsers } from '../api/users';

export default function useUsers(params = {}) {
  const [data, setData] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const key = JSON.stringify(params);

  const reload = useCallback(() => {
    setLoading(true);
    setError(null);
    listUsers(JSON.parse(key))
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [key]);

  useEffect(() => { reload(); }, [reload]);

  return { ...data, loading, error, reload };
}
