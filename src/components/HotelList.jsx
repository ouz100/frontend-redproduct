import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HotelList = () => {
  // State pour gérer l'affichage du formulaire
  const [showAddHotelForm, setShowAddHotelForm] = useState(false);

  // State pour le formulaire d'ajout d'hôtel
  const [newHotel, setNewHotel] = useState({
    name: '',
    address: '',
    email: '',
    phoneNumber: '',
    pricePerNight: '',
    currency: 'F XOF',
    image: null
  });

  // Sample hotel data matching the image
  const [hotels, setHotels] = useState([
     
    // ... (autres hôtels comme précédemment)
  ]);

  // Gestion des changements dans le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHotel(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Gestion du téléchargement d'image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewHotel(prev => ({
        ...prev,
        image: URL.createObjectURL(file)
      }));
    }
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Créer un nouvel hôtel avec un ID unique
    const newHotelEntry = {
      ...newHotel,
      id: hotels.length + 1,
      price: `${newHotel.pricePerNight} ${newHotel.currency} par nuit`
    };

    // Ajouter le nouvel hôtel à la liste
    setHotels([...hotels, newHotelEntry]);

    // Réinitialiser le formulaire et masquer
    setNewHotel({
      name: '',
      address: '',
      email: '',
      phoneNumber: '',
      pricePerNight: '',
      currency: 'F XOF',
      image: null
    });
    setShowAddHotelForm(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      {/* Formulaire d'ajout d'hôtel (conditionnel) */}
      {showAddHotelForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">CRÉER UN NOUVEAU HÔTEL</h2>
            <form onSubmit={handleSubmit}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-gray-700 font-medium mb-1">Nom de l'hôtel</label>
      <input
        type="text"
        name="name"
        value={newHotel.name}
        onChange={handleInputChange}
        className="w-full px-2 py-1 border rounded-lg"
        placeholder="Entrez le nom de l'hôtel"
        required
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-1">Adresse</label>
      <input
        type="text"
        name="address"
        value={newHotel.address}
        onChange={handleInputChange}
        className="w-full px-2 py-1 border rounded-lg"
        placeholder="Entrez l'adresse"
        required
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-1">E-mail</label>
      <input
        type="email"
        name="email"
        value={newHotel.email}
        onChange={handleInputChange}
        className="w-full px-2 py-1 border rounded-lg"
        placeholder="Entrez l'e-mail"
        required
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-1">Numéro de téléphone</label>
      <input
        type="tel"
        name="phoneNumber"
        value={newHotel.phoneNumber}
        onChange={handleInputChange}
        className="w-full px-2 py-1 border rounded-lg"
        placeholder="Entrez le numéro de téléphone"
        required
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-1">Prix par nuit</label>
      <input
        type="number"
        name="pricePerNight"
        value={newHotel.pricePerNight}
        onChange={handleInputChange}
        className="w-full px-2 py-1 border rounded-lg"
        placeholder="Entrez le prix"
        required
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-1">Devise</label>
      <select
        name="currency"
        value={newHotel.currency}
        onChange={handleInputChange}
        className="w-full px-2 py-1 border rounded-lg"
      >
        <option value="F XOF">F XOF</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  </div>

  <div className="mt-4">
    <label className="block text-gray-700 font-medium mb-1">Ajouter une photo</label>
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
      {newHotel.image ? (
        <img 
          src={newHotel.image} 
          alt="Hotel" 
          className="mx-auto max-h-40 object-cover rounded-lg"
        />
      ) : (
        <div className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>Ajouter une photo</p>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        id="hotel-image-upload"
      />
      <label 
        htmlFor="hotel-image-upload" 
        className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 cursor-pointer"
      >
        Sélectionner une image
      </label>
    </div>
  </div>

  <div className="mt-4 flex justify-between">
    <button
      type="button"
      onClick={() => setShowAddHotelForm(false)}
      className="bg-gray-300 text-gray-700 py-1 px-3 rounded-lg hover:bg-gray-400"
    >
      Annuler
    </button>
    <button
      type="submit"
      className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600"
    >
      Enregistrer
    </button>
  </div>
</form>

          </div>
        </div>
      )}

      {/* Liste des hôtels */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Hôtels</h1>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={() => setShowAddHotelForm(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Créer un nouveau hôtel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotels.map((hotel) => (
          <div 
            key={hotel.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=Hotel+Image';
                }}
              />
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{hotel.address}</p>
              <h3 className="font-bold text-lg mb-2">{hotel.name}</h3>
              <p className="font-medium text-gray-800">{hotel.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;