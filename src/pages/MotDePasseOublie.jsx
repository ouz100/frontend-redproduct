import React, { useState } from 'react';

const MotDePasseOublie = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer l'email de réinitialisation
    console.log('Email de réinitialisation envoyé à:', email);
    setIsSubmitted(true);
  };
  
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center justify-center relative bg-blend-overlay bg-opacity-80">
      {/* Logo en haut */}
      <div className="mb-6 text-center">
        <div className="flex items-center justify-center mb-1">
          <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <h1 className="text-xl font-bold text-white">RED PRODUCT</h1>
        </div>
      </div>
      
      {/* Formulaire de réinitialisation */}
      <div className="bg-white rounded-md shadow-md w-full max-w-md p-8">
        <h2 className="text-lg mb-4">Mot de passe oublié?</h2>
        
        <p className="text-sm text-gray-600 mb-6">
          Entrez votre adresse e-mail ci-dessous et nous vous enverrons des instructions sur la façon de modifier votre mot de passe.
        </p>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Votre e-mail"
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition duration-200"
            >
              Envoyer
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600 p-4">
            <p>Les instructions ont été envoyées à votre adresse e-mail.</p>
          </div>
        )}
      </div>
      
      {/* Lien de retour */}
      <div className="mt-4 text-center">
        <a href="#" className="text-yellow-500 hover:underline text-sm">
          Revenir à la connexion
        </a>
      </div>
    </div>
  );
};

export default MotDePasseOublie;