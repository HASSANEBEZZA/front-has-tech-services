import React, { useEffect } from 'react';
import './SystemeServices.scss';

const SystemeServices: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="systeme-services container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
      Formatage et installation téléphone
      </h1>
      <br />
      
      {/* Formatage et réinstallation du système */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Formatage et réinstallation du système</h2>
        <p className="text-lg text-gray-700 mb-4">
          Nous effectuons un formatage complet de votre appareil pour le remettre à neuf et réinstaller le système d'exploitation pour optimiser ses performances.
        </p>
        <img 
          src="https://i.imgur.com/7hFvuQ2.png" 
          alt="Formatage et réinstallation" 
          className="w-1/3 h-auto mb-8 mx-auto"
        />
      </section>
      
      {/* Déblocage de téléphone */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Déblocage de téléphone</h2>
        <p className="text-lg text-gray-700 mb-4">
          Nous proposons un service de déblocage de téléphone, qu'il soit bloqué par mot de passe, opérateur ou autre restriction.
        </p>
        <img 
          src="https://i.imgur.com/paRuWJ1.png" 
          alt="Déblocage de téléphone" 
          className="w-1/3 h-auto mb-8 mx-auto"
        />
      </section>
      
      {/* Suppression de virus et optimisation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Suppression de virus et optimisation</h2>
        <p className="text-lg text-gray-700 mb-4">
          Nous supprimons les virus et malwares de votre appareil, puis procédons à une optimisation de ses performances pour une utilisation fluide.
        </p>
        <img 
          src="https://i.imgur.com/y7PYTzu.png" 
          alt="Suppression de virus et optimisation" 
          className="w-1/3 h-auto mb-8 mx-auto"
        />
      </section>
      
      {/* Mises à jour et restauration du logiciel */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Mises à jour et restauration du logiciel</h2>
        <p className="text-lg text-gray-700 mb-4">
          Nous effectuons les dernières mises à jour de votre logiciel et pouvons restaurer votre appareil à un état antérieur si nécessaire.
        </p>
        <img 
          src="https://i.imgur.com/eQKMUew.png" 
          alt="Mises à jour et restauration du logiciel" 
          className="w-1/3 h-auto mb-8 mx-auto"
        />
      </section>
    </div>
  );
};

export default SystemeServices;
