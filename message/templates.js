// ===============================
// TEMPLATES MESSAGES AUTOMATIQUES
// ===============================

// J-0 — Confirmation
export const messageJ0 = `
Bonjour [PRENOM],
Votre réservation au Nid des Alpes est confirmée pour les dates [DATE_ARRIVEE] → [DATE_DEPART] (séjour de [NB_NUITS] nuits).

Vous recevrez toutes les informations pratiques avant votre arrivée : accès, chauffage, fosse toutes eaux, préparation du séjour et conseils utiles.

Nous restons disponibles si besoin.
À très bientôt dans les Alpes.
`;


// J-7 — Informations pratiques
export const messageJ7 = `
Bonjour [PRENOM],
Votre séjour approche, nous avons hâte de vous accueillir du [DATE_ARRIVEE] au [DATE_DEPART] (séjour de [NB_NUITS] nuits).

Voici quelques informations utiles pour préparer votre venue :

Accès & arrivée
- L’accès au chalet est simple et déneigé par la commune.
- En hiver, des pneus neige sont recommandés (obligatoires en cas de chute récente).
- Vous recevrez le code d’accès le jour de votre arrivée.

Chauffage & confort
- Le chalet est préchauffé avant votre venue.
- Le thermostat est déjà réglé pour un confort optimal.
- Merci de ne pas modifier les réglages avancés.

Fosse toutes eaux
- Le chalet est équipé d’une fosse toutes eaux.
- Merci de ne rien jeter dans les toilettes (lingettes, protections, sopalin).

Conseils pratiques
- Supermarchés : Super U Marignier, Carrefour Bonneville, Lidl Bonneville.
- Stations proches : Le Grand-Bornand, La Clusaz, Les Carroz, Flaine.
- Randonnées : Lac Bénit, Pointe du Bargy, Plateau de Solaison.

Nous restons disponibles si besoin.
À très bientôt dans les Alpes.
`;


// J-3 — Préparation du séjour
export const messageJ3 = `
Bonjour [PRENOM],
Votre arrivée approche, nous avons hâte de vous accueillir du [DATE_ARRIVEE] au [DATE_DEPART] (séjour de [NB_NUITS] nuits).

Voici quelques informations utiles pour préparer votre venue :

Accès & route
- Le chalet est facilement accessible toute l’année.
- En hiver, les pneus neige sont recommandés (obligatoires en cas de chute récente).

Horaires
- Arrivée à partir de 16h.
- Départ avant 10h.
- Une arrivée sur un autre créneau est possible via la boîte à clés, dès lors que vous nous en informez au préalable.

Météo & conditions
- La météo peut changer rapidement en montagne.
- Pensez à vérifier les conditions avant votre départ.
- Prévoir des vêtements chauds même en intersaison.

Ce que vous trouverez sur place
- Linge de lit et serviettes fournis.
- Cuisine équipée (fondue, raclette, etc.).
- Chauffage réglé pour votre confort.
- Wi-Fi haut débit.

Nous restons disponibles si besoin.
À très bientôt dans les Alpes.
`;


// J-1 — Arrivée (inclut CODE BOITE)
export const messageJ1 = `
Bonjour [PRENOM],
Nous avons hâte de vous accueillir demain pour votre séjour du [DATE_ARRIVEE] au [DATE_DEPART] (séjour de [NB_NUITS] nuits).

Voici les informations essentielles pour votre arrivée :

Accès au chalet
- Le chalet est facilement accessible toute l’année.
- Votre code d’accès pour l’entrée est : [CODE_BOITE].
- La boîte à clés se situe à gauche de la porte d’entrée du logement.

Parking
- Vous pouvez vous arrêter devant le logement pour décharger vos affaires.
- Le stationnement principal se trouve en contrebas du chemin de Pierre Lente (voir photo).
- En période hivernale (novembre à mars), nous recommandons de stationner au City Stade ou autour de l’église, à moins de 3 minutes à pied du logement.

Chauffage & confort
- Le chauffage est déjà réglé pour votre arrivée.
- Merci de ne pas modifier les réglages avancés du thermostat.
- Vous pouvez ajuster légèrement la température si besoin.

Fosse toutes eaux
- Le chalet est équipé d’une fosse toutes eaux.
- Merci de ne rien jeter dans les toilettes (lingettes, protections, sopalin).

Arrivée sur un autre créneau
- La boîte à clés permet une arrivée autonome, dès lors que vous nous en informez au préalable.

Nous restons disponibles si besoin.
Très bon voyage et à demain dans les Alpes.
`;


// J-1 — Départ
export const messageJ1Depart = `
Bonjour [PRENOM],
Nous espérons que votre séjour s’est déroulé agréablement.

Voici quelques informations pour votre départ prévu demain ([DATE_DEPART]) :

Départ & horaires
- Le départ se fait avant 10h afin de nous permettre de préparer le logement pour les prochains voyageurs.
- Si vous avez un impératif particulier, n’hésitez pas à nous en informer.

Avant de partir
- Merci de laisser le logement dans un état correct.
- Le lave-vaisselle doit être vidé et la vaisselle rangée.
- Les poubelles doivent être déposées dans les bacs prévus à cet effet au City Stade (impératif).
- Merci de vérifier que vous n’oubliez rien.

Chauffage & sécurité
- Merci de remettre le thermostat sur une température raisonnable (18–19°C).
- Vérifiez que toutes les fenêtres sont bien fermées.

Fosse toutes eaux
- Comme indiqué à l’arrivée, le chalet est équipé d’une fosse toutes eaux.
- Merci de ne rien jeter dans les toilettes (lingettes, protections, sopalin).

Clés
- Merci de remettre les clés dans la boîte à clés et de bien refermer le boîtier.

Nous espérons vous revoir lors d’un prochain séjour.
Très bon retour et merci encore d’avoir choisi Le Nid des Alpes.
`;


// J+1 — Remerciement + Avis
export const messageJplus1 = `
Bonjour [PRENOM],

Nous espérons que vous êtes bien rentrés après votre séjour au Nid des Alpes.

Merci encore d’avoir choisi notre chalet, ce fut un plaisir de vous accueillir.
Votre avis compte beaucoup pour nous : il nous aide à continuer d’améliorer l’expérience et à rassurer les futurs voyageurs.

Si vous avez quelques instants, vous pouvez laisser votre avis ici :
👉 [LIEN_AVIS]

Très belle journée et peut-être à une prochaine fois dans nos montagnes.
`;
