import React from 'react';
import { FakerItem as FakerItemType } from '../types/FakerData';

interface FakerItemProps {
  item: FakerItemType;
}

const FakerItem: React.FC<FakerItemProps> = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={item.url} alt={item.title} className="w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};

export default FakerItem;