import React from 'react';
import { FaEnvelope, FaUsers, FaBuilding } from 'react-icons/fa';
import { BsFillFileEarmarkTextFill, BsChatDotsFill, BsFileEarmarkBarGraphFill } from 'react-icons/bs';

const Dashboard = () => {
  // Data for the dashboard cards
  const cards = [
    {
      id: 1,
      number: 125,
      label: 'Formulaires',
      description: 'Je ne sais pas quoi mettre', 
      icon: <BsFillFileEarmarkTextFill />,
      color: 'bg-purple-400'
    }, 
    {    
      id: 2,
      number: 40,
      label: 'Messages',
      description: 'Je ne sais pas quoi mettre',
      icon: <BsChatDotsFill />,
      color: 'bg-emerald-500'
    },
    {
      id: 3,
      number: 600,
      label: 'Utilisateurs',
      description: 'Je ne sais pas quoi mettre',
      icon: <FaUsers />,
      color: 'bg-yellow-400'
    },
    {
      id: 4,
      number: 25,
      label: 'E-mails',
      description: 'Je ne sais pas quoi mettre',
      icon: <FaEnvelope />, 
      color: 'bg-red-500'
    },
    {
      id: 5,
      number: 40,
      label: 'Hôtels',
      description: 'Je ne sais pas quoi mettre',
      icon: <FaBuilding />,
      color: 'bg-purple-500'
    },
    {
      id: 6,
      number: '02',
      label: 'Entités',
      description: 'Je ne sais pas quoi mettre',
      icon: <BsFileEarmarkBarGraphFill />,
      color: 'bg-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-medium text-gray-800">Bienvenue sur RED Product</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
      </header>

      {/* Dashboard cards */}
      <div className="container mx-auto p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-sm p-6 flex items-center">
              <div className={`${card.color} text-white p-4 rounded-full mr-4`}>
                <span className="text-xl">{card.icon}</span>
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold mr-2">{card.number}</span>
                  <span className="text-gray-600 text-sm">{card.label}</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;