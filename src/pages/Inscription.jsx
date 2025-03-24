import React, { useState } from 'react';

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: '',
    acceptTerms: false
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      setMessage("Veuillez accepter les termes et la politique.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/utilisateurs/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nom: formData.nom,
          email: formData.email,
          motDePasse: formData.motDePasse
        })
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Inscription réussie !'); 
        setFormData({ nom: '', email: '', motDePasse: '', acceptTerms: true });
      } else {
        setMessage(data.message || 'Une erreur est survenue.');
      }
    } catch (error) {
      setMessage('Erreur de connexion au serveur.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 bg-opacity-80 bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-blend-overlay">
      <div className="w-full max-w-md px-6">
        <div className="flex justify-center mb-6">
          <div className="text-white font-bold text-xl flex items-center">
            <span className="mr-2">▲</span>
            RED PRODUCT
          </div>
        </div>

        <div className="bg-white rounded-md p-6">
          <h2 className="text-center text-gray-800 mb-6">Inscrivez-vous en tant que Admin</h2>
          {message && <p className="text-center text-red-500">{message}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Nom"
                className="w-full p-2 border-b border-gray-300 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                className="w-full p-2 border-b border-gray-300 focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                name="motDePasse"
                value={formData.motDePasse}
                onChange={handleChange}
                placeholder="Mot de passe"
                className="w-full p-2 border-b border-gray-300 focus:outline-none"
                required
              />
            </div>

            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label className="text-sm text-gray-700">
                Accepter les termes et la politique
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
            >
              S'inscrire
            </button>
          </form>
        </div>

        <div className="text-center mt-4 text-white">
          Vous avez déjà un compte? 
          <a href="Login" className="ml-1 text-yellow-400 hover:underline">Se connecter</a>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
