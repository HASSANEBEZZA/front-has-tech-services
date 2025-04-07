import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        {/* Texte d'introduction */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Nos Services Informatiques : Une Solution Complète et Personnalisée
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Chez Has Tech Services, nous répondons aux besoins informatiques des particuliers et des petites entreprises.
          Spécialisés dans le dépannage informatique, l'installation et la configuration d'équipements réseau, nous proposons des solutions fiables, efficaces et adaptées à vos attentes.
        </p>

        {/* Présentation des prestations */}
        <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">Nos Prestations</h3>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Découvrez une large gamme de services pour garantir le bon fonctionnement de vos équipements et réseaux.
        </p>

        {/* Liste des services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Service 1 */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
            <Link to="/repair-info">
              <img src="https://i.imgur.com/8YJd3Kn.png" alt="Illustration de dépannage informatique" className="w-full h-64 object-contain mb-2" />
            </Link>
            <p className="text-sm text-gray-500 text-center mb-4">
              <Link to="/repair-info" className="text-blue-600 hover:underline">Cliquez pour en savoir plus</Link>
            </p>
            <h3 className="text-xl font-semibold text-center">
              <Link to="/repair-info">Dépannage Informatique</Link>
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Réparation de matériel informatique : PC, laptops, imprimantes.</li>
              <li>Maintenance logicielle : suppression de virus, mises à jour.</li>
              <li>Récupération de données sur disques durs ou autres supports.</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
            <Link to="/network-setup">
              <img src="https://i.imgur.com/naTb98g.png" alt="Illustration de configuration réseau" className="w-full h-64 object-contain mb-2" />
            </Link>
            <p className="text-sm text-gray-500 text-center mb-4">
              <Link to="/network-setup" className="text-blue-600 hover:underline">Cliquez pour en savoir plus</Link>
            </p>
            <h3 className="text-xl font-semibold text-center">
              <Link to="/network-setup">Installation et Configuration Réseau</Link>
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Installation de routeurs, switchs, et câblage Ethernet.</li>
              <li>Création de réseaux locaux (LAN) pour bureaux ou domiciles.</li>
              <li>Optimisation et sécurisation des réseaux Wi-Fi.</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
            <Link to="/assistance-formation">
              <img src="https://i.imgur.com/pt9PTdm.png" alt="Illustration d'assistance et formation" className="w-full h-64 object-contain mb-2" />
            </Link>
            <p className="text-sm text-gray-500 text-center mb-4">
              <Link to="/assistance-formation" className="text-blue-600 hover:underline">Cliquez pour en savoir plus</Link>
            </p>
            <h3 className="text-xl font-semibold text-center">
              <Link to="/assistance-formation">Assistance et Formation</Link>
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Assistance technique à distance ou sur site.</li>
              <li>Formation personnalisée sur les outils informatiques.</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
            <Link to="/creation-sites-accompagnement">
              <img src="https://i.imgur.com/Lvg4gLK.png" alt="Illustration de création de sites web" className="w-full h-64 object-contain mb-2" />
            </Link>
            <p className="text-sm text-gray-500 text-center mb-4">
              <Link to="/creation-sites-accompagnement" className="text-blue-600 hover:underline">Cliquez pour en savoir plus</Link>
            </p>
            <h3 className="text-xl font-semibold text-center">
              <Link to="/creation-sites-accompagnement">Création de Sites Web et Accompagnement Digital</Link>
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Conception de sites vitrines pour entreprises ou particuliers.</li>
              <li>Stratégie et gestion de présence sur les réseaux sociaux.</li>
            </ul>
          </div>
          
          {/* Service 5 - Réparation matérielle téléphone */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
          <Link to="/repair-services">
              <img src="https://i.imgur.com/niVMkg8.png" alt="Illustration de création de sites web" className="w-full h-64 object-contain mb-2" />
            </Link>
            <p className="text-sm text-gray-500 text-center mb-4">
              <Link to="/repair-services" className="text-blue-600 hover:underline">Cliquez pour en savoir plus</Link>
            </p>
            <h3 className="text-xl font-semibold text-center">Réparation matérielle téléphone</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Changement d’écran cassé</li>
              <li>Remplacement de batterie</li>
              <li>Réparation haut-parleur et micro</li>
              <li>Changement de pièces défectueuses</li>
            </ul>
          </div>

          {/* Service 6 - Réparation logicielle téléphone */}
          <div className="service-card p-4 bg-white shadow-lg rounded-lg">
          <Link to="/systeme-services">
              <img src="https://i.imgur.com/rFdlev6.png" alt="Illustration de création de sites web" className="w-full h-64 object-contain mb-2" />
            </Link>
            <p className="text-sm text-gray-500 text-center mb-4">
              <Link to="/systeme-services" className="text-blue-600 hover:underline">Cliquez pour en savoir plus</Link>
            </p>
            <h3 className="text-xl font-semibold text-center">formatage et installation téléphone</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Formatage et réinstallation du système</li>
              <li>Déblocage de téléphone</li>
              <li>Suppression de virus et optimisation</li>
              <li>Mises à jour et restauration du logiciel</li>
            </ul>
          </div>
        </div>

        {/* Bande horizontale pour le lien */}
        <div className="w-full bg-gray-200 py-6 mt-12 text-center">
          <Link to="/tarifs" className="text-blue-700 text-lg font-semibold hover:underline">
            Voir nos tarifs de prestation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
