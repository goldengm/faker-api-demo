import React, { useState, useEffect } from 'react';
import { fetchFakerData } from './api/fakerApi';
import { FakerItem as FakerItemType } from './types/FakerData';
import FakerItem from './components/FakerItem';

const App: React.FC = () => {
  const [items, setItems] = useState<FakerItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchFakerData();
        setItems(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Faker API Demo + TailwindCSS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <FakerItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;