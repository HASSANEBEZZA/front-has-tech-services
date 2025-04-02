import React, { useEffect } from 'react';
import './RepairServices.scss';

const RepairServices: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="repair-services container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Nos Services de Réparation
      </h1>
      <br />
      
      {/* Changement d'écran cassé */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Changement d'écran cassé</h2>
        <p className="text-lg text-gray-700 mb-4">
          Nous remplaçons les écrans cassés de vos appareils avec des pièces de qualité pour restaurer leur aspect et leur fonctionnalité.
        </p>
        <img 
          src="https://i.imgur.com/eK7x0Gx.jpeg" 
          alt="Changement d'écran cassé" 
          className="w-1/3 h-auto mb-8 mx-auto"
        />
      </section>

      {/* Remplacement de batterie */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Remplacement de batterie</h2>
        <p className="text-lg text-gray-700 mb-4">
          Si votre batterie ne tient plus la charge, nous la remplaçons par une nouvelle pour redonner à votre appareil son autonomie d'origine.
        </p>
        <img 
          src="https://i.imgur.com/XYUVQlx.jpeg" 
          alt="Remplacement de batterie" 
          className="w-1/3 h-auto mb-8 mx-auto"
        />
      </section>

      {/* Réparation haut-parleur et micro */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Réparation haut-parleur et micro</h2>
        <p className="text-lg text-gray-700 mb-4">
          Nous réparons les haut-parleurs et micros défectueux pour assurer un son clair et une communication fluide.
        </p>
        <img 
          src="https://i.imgur.com/7bTYWlv.jpeg" 
          alt="Réparation haut-parleur et micro" 
          className="w-1/3 h-auto mb-8 mx-auto"
        />
      </section>

      {/* Changement de pièces défectueuses */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Changement de pièces défectueuses</h2>
        <p className="text-lg text-gray-700 mb-4">
          Nous remplaçons toutes les pièces défectueuses (clavier, carte mère, connecteurs, etc.) pour assurer le bon fonctionnement de votre appareil.
        </p>
        <img 
          src="https://i.imgur.com/Qv8OetM.jpeg" 
          alt="Changement de pièces défectueuses" 
          className="w-1/3 h-auto mb-8 mx-auto"
        />
      </section>
    </div>
  );
};

export default RepairServices;
