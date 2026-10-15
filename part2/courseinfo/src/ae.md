```mermaid
%%{init: {
  'theme': 'base',
  'themeVariables': {
    'primaryColor': '#EDE9FE',
    'primaryTextColor': '#2E1065',
    'primaryBorderColor': '#6D28D9',
    'lineColor': '#334155',
    'fontSize': '15px',
    'edgeLabelBackground': '#FFFFFF'
  },
  'flowchart': { 'nodeSpacing': 35, 'rankSpacing': 55, 'curve': 'basis' }
}}%%
flowchart LR
  classDef actor fill:#DBEAFE,stroke:#1D4ED8,stroke-width:2px,color:#1E3A8A,font-weight:bold;
  classDef system fill:#FEF3C7,stroke:#B45309,stroke-width:2px,color:#78350F,font-weight:bold;
  classDef usecase fill:#F5F3FF,stroke:#7C3AED,stroke-width:1.5px,color:#2E1065;

  Etudiant(["Étudiant"])
  CampusFaso[["Campus Faso"]]
  FasoArzeka[["Faso Arzeka"]]
  class Etudiant actor;
  class CampusFaso,FasoArzeka system;

  subgraph SG1["Compte"]
    UC1["S'inscrire"]
    UC2["Activer le compte"]
    UC3["S'authentifier"]
    UC4["Réinitialiser le mot de passe"]
    UC5["Gérer son profil"]
    UC6["Signaler une anomalie sur donnée certifiée"]
  end

  subgraph SG2["Dépôt de demande"]
    UC7["Consulter les sessions et catégories ouvertes"]
    UC8["Déposer une nouvelle demande"]
    UC9["Déposer un renouvellement"]
    UC10["Vérifier via Campus Faso"]
    UC11["Téléverser les pièces justificatives"]
    UC12["Signer la déclaration sur l'honneur"]
    UC13["Consulter le récapitulatif"]
    UC14["Soumettre la demande"]
    UC15["Obtenir le récépissé"]
  end

  subgraph SG3["Suivi & résultat"]
    UC16["Suivre l'état de la demande"]
    UC17["Répondre à un complément"]
    UC18["Consulter le résultat"]
    UC19["Consulter l'historique des demandes"]
    UC20["Soumettre une réclamation"]
  end

  subgraph SG4["Paiement & prêts"]
    UC21["Consulter ses paiements"]
    UC22["Consulter son prêt et échéancier"]
    UC23["Déposer une demande de prêt de laboratoire"]
  end

  subgraph SG5["Assistance"]
    UC24["Consulter ses notifications"]
    UC25["Consulter la FAQ"]
  end

  Etudiant --> UC1
  Etudiant --> UC2
  Etudiant --> UC3
  Etudiant --> UC4
  Etudiant --> UC5
  UC6 -.->|"«extend»"| UC5

  Etudiant --> UC7
  Etudiant --> UC8
  Etudiant --> UC9
  UC10 -.->|"«include»"| UC8
  UC10 -.->|"«include»"| UC9
  UC10 -.-> CampusFaso
  UC11 -.->|"«include»"| UC8
  UC11 -.->|"«include»"| UC9
  UC12 -.->|"«include»"| UC8
  UC12 -.->|"«include»"| UC9
  UC13 -.->|"«include»"| UC8
  UC13 -.->|"«include»"| UC9
  Etudiant --> UC14
  UC15 -.->|"«include»"| UC14

  Etudiant --> UC16
  UC17 -.->|"«extend»"| UC16
  Etudiant --> UC18
  Etudiant --> UC19
  UC20 -.->|"«extend»"| UC18

  Etudiant --> UC21
  Etudiant --> UC22
  Etudiant --> UC23
  UC10 -.->|"«include»"| UC23

  Etudiant --> UC24
  Etudiant --> UC25

  class UC1,UC2,UC3,UC4,UC5,UC6,UC7,UC8,UC9,UC10,UC11,UC12,UC13,UC14,UC15,UC16,UC17,UC18,UC19,UC20,UC21,UC22,UC23,UC24,UC25 usecase;
  style SG1 fill:#F8FAFC,stroke:#94A3B8,color:#1E293B;
  style SG2 fill:#F8FAFC,stroke:#94A3B8,color:#1E293B;
  style SG3 fill:#F8FAFC,stroke:#94A3B8,color:#1E293B;
  style SG4 fill:#F8FAFC,stroke:#94A3B8,color:#1E293B;
  style SG5 fill:#F8FAFC,stroke:#94A3B8,color:#1E293B;