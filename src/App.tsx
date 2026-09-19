/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  CheckSquare,
  Network,
  Workflow,
  Layers,
  FileText,
  FileDown,
  BarChart2,
  PenTool,
  ClipboardCheck,
  ListChecks,
  FileCheck2,
  Download
} from 'lucide-react';
import { ModuleId, ModuleNav } from './types';
import Questionnaire from './components/Questionnaire';
import QuestionnaireTest from './components/QuestionnaireTest';
import VraiOuFaux from './components/VraiOuFaux';
import VraiOuFauxTest from './components/VraiOuFauxTest';
import CarteMentale from './components/CarteMentale';
import CarteMentaleConceptuelle from './components/CarteMentaleConceptuelle';
import CarteMemoire from './components/CarteMemoire';
import Resume from './components/Resume';
import Pdf from './components/Pdf';
import Infographie from './components/Infographie';
import ExercicesEcrits from './components/ExercicesEcrits';
import DevoirComplet from './components/DevoirComplet';

const MODULES: ModuleNav[] = [
  {
    id: 'questionnaire',
    label: 'Questionnaire',
    iconName: 'HelpCircle',
    description: 'QCM interactif d’évaluation active avec feedback immédiat.'
  },
  {
    id: 'questionnaire-test',
    label: 'Questionnaire Test',
    iconName: 'ListChecks',
    description: 'Mêmes cartes en mode évaluation : réponses complètes avant le score et la correction.'
  },
  {
    id: 'vrai-ou-faux',
    label: 'Vrai ou Faux',
    iconName: 'CheckSquare',
    description: 'Affirmations ciblées pour tester les réflexes critiques.'
  },
  {
    id: 'vrai-ou-faux-test',
    label: 'Vrai ou Faux Test',
    iconName: 'FileCheck2',
    description: 'Liste d’affirmations à cocher : score et correction révélés après validation.'
  },
  {
    id: 'carte-mentale',
    label: 'Carte Mentale',
    iconName: 'Network',
    description: 'Arborescence dynamique et modélisation des concepts.'
  },
  {
    id: 'carte-mentale-2',
    label: 'Carte Mentale 2',
    iconName: 'Workflow',
    description: 'Carte conceptuelle en blocs hiérarchiques avec connecteurs orthogonaux et ombres graphiques.'
  },
  {
    id: 'carte-memoire',
    label: 'Carte Mémoire',
    iconName: 'Layers',
    description: 'Flashcards de mémorisation avec répétition espacée.'
  },
  {
    id: 'resume',
    label: 'Résumé',
    iconName: 'FileText',
    description: 'Fiche synthétique structurée avec surlignage didactique.'
  },
  {
    id: 'pdf',
    label: 'PDF',
    iconName: 'FileDown',
    description: 'Document prêt pour l’export, l’impression et la relecture.'
  },
  {
    id: 'infographie',
    label: 'Infographie',
    iconName: 'BarChart2',
    description: 'Représentation visuelle des étapes et métriques cognitives.'
  },
  {
    id: 'exercices-ecrits',
    label: 'Exercices Écrits',
    iconName: 'PenTool',
    description: 'Problèmes rédigés avec correction et conseils méthodologiques.'
  },
  {
    id: 'devoir-complet',
    label: 'Devoir Complet',
    iconName: 'ClipboardCheck',
    description: 'Épreuve complète chronométrée sur 20 points avec corrigé.'
  }
];

export default function App() {
  const [activeModule, setActiveModule] = useState<ModuleId>('questionnaire');

  const getModuleIcon = (id: ModuleId) => {
    switch (id) {
      case 'questionnaire':
        return <HelpCircle className="w-4 h-4 shrink-0" />;
      case 'questionnaire-test':
        return <ListChecks className="w-4 h-4 shrink-0" />;
      case 'vrai-ou-faux':
        return <CheckSquare className="w-4 h-4 shrink-0" />;
      case 'vrai-ou-faux-test':
        return <FileCheck2 className="w-4 h-4 shrink-0" />;
      case 'carte-mentale':
        return <Network className="w-4 h-4 shrink-0" />;
      case 'carte-mentale-2':
        return <Workflow className="w-4 h-4 shrink-0" />;
      case 'carte-memoire':
        return <Layers className="w-4 h-4 shrink-0" />;
      case 'resume':
        return <FileText className="w-4 h-4 shrink-0" />;
      case 'pdf':
        return <FileDown className="w-4 h-4 shrink-0" />;
      case 'infographie':
        return <BarChart2 className="w-4 h-4 shrink-0" />;
      case 'exercices-ecrits':
        return <PenTool className="w-4 h-4 shrink-0" />;
      case 'devoir-complet':
        return <ClipboardCheck className="w-4 h-4 shrink-0" />;
    }
  };

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'questionnaire':
        return <Questionnaire />;
      case 'questionnaire-test':
        return <QuestionnaireTest />;
      case 'vrai-ou-faux':
        return <VraiOuFaux />;
      case 'vrai-ou-faux-test':
        return <VraiOuFauxTest />;
      case 'carte-mentale':
        return <CarteMentale />;
      case 'carte-mentale-2':
        return <CarteMentaleConceptuelle />;
      case 'carte-memoire':
        return <CarteMemoire />;
      case 'resume':
        return <Resume />;
      case 'pdf':
        return <Pdf />;
      case 'infographie':
        return <Infographie />;
      case 'exercices-ecrits':
        return <ExercicesEcrits />;
      case 'devoir-complet':
        return <DevoirComplet />;
      default:
        return <Questionnaire />;
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-stone-50 text-stone-900 flex flex-col antialiased">
      {/* Navigation Header */}
      <header id="app-navbar" className="sticky top-0 z-50 bg-white/95 backdrop-blur-xs border-b border-stone-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <nav id="module-navigation" className="flex items-center gap-1.5 min-w-max">
            {MODULES.map((item) => {
              const isActive = activeModule === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => setActiveModule(item.id)}
                  className={`relative inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all select-none ${
                    isActive
                      ? 'text-white bg-stone-900 shadow-xs'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/70'
                  }`}
                >
                  {getModuleIcon(item.id)}
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="h-5 w-px bg-stone-300 mx-1 shrink-0" />

            {/* Bouton de téléchargement direct de l'archive du projet */}
            <a
              id="btn-download-full-project"
              href="/projet_code_complet.zip"
              download="projet_code_complet.zip"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 shadow-xs transition-colors shrink-0"
              title="Télécharger l'archive ZIP contenant l'intégralité du code source du projet"
            >
              <Download className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Télécharger le Code (ZIP)</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main
        id="app-main-content"
        className={`flex-1 ${
          activeModule === 'carte-mentale' ||
          activeModule === 'carte-mentale-2' ||
          activeModule === 'pdf' ||
          activeModule === 'resume' ||
          activeModule === 'exercices-ecrits' ||
          activeModule === 'devoir-complet'
            ? 'p-0'
            : 'py-6 sm:py-8'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {renderActiveModule()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

