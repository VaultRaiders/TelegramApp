"use client";

import { FaClock, FaUser } from "react-icons/fa";

interface BotInfoProps {
  traits?: string;
  createdAt: string;
  age: number;
  scenario?: string;
}

export const BotInfo = ({ traits, createdAt, age, scenario }: BotInfoProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
    });
  };

  return (
    <div className="space-y-4">
      {traits && (
        <div className="flex flex-wrap gap-2">
          {traits.split(",").map((trait, index) => (
            <div
              key={index}
              className="badge badge-secondary font-bold capitalize"
            >
              {trait.trim()}
            </div>
          ))}
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 text-sm text-base-content/70">
        <div className="flex items-center gap-2">
          <FaClock className="h-4 w-4" />
          <span>Created: {formatDate(createdAt)}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUser className="h-4 w-4" />
          <span>Age: {age}</span>
        </div>
        {scenario && (
          <div className="col-span-2 rounded-xl bg-base-300 p-4">
            <h3 className="mb-2 text-xl font-semibold text-white">Scenario</h3>
            <p className="text-base-content/90">{scenario}</p>
          </div>
        )}
      </div>
    </div>
  );
};
