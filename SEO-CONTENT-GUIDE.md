# 📝 Guide de rédaction SEO - Défi 24h

## 🎯 Principes de base

### La règle des 3 C
1. **Clair** : Facile à comprendre
2. **Concis** : Direct et précis
3. **Complet** : Répond aux questions

## ✍️ Optimisation des textes existants

### Page d'accueil
**Titre H1 actuel :** "Le défi 24H C'est bientôt !"
- ✅ Accrocheur
- ⚠️ Suggestion : Ajouter une section avec plus de texte pour le SEO

**Texte suggéré à ajouter :**
```
Le Défi 24h est l'événement phare du cursus MMI (Métiers du Multimédia et de l'Internet). 
Chaque année, les étudiants se rassemblent pour vivre une expérience unique : 
24 heures non-stop de création, d'innovation et de dépassement de soi.

Que vous soyez passionné de design graphique, de développement web, de montage vidéo 
ou simplement curieux, le Défi 24h est fait pour vous. Rejoignez-nous le 09 janvier 2026 
pour cette aventure créative inoubliable !
```

### Densité des mots-clés recommandée
- **Mot-clé principal** (ex: "défi 24h") : 2-3% du texte
- **Mots-clés secondaires** : 1-2% du texte
- **Synonymes et variantes** : Naturellement intégrés

## 📋 Sections recommandées pour améliorer le SEO

### 1. FAQ (Questions fréquentes)
Créez une page `/faq` avec des questions comme :
```
- Qu'est-ce que le Défi 24h ?
- Comment s'inscrire au Défi 24h MMI ?
- Quel est le prix de l'inscription ?
- Puis-je participer seul ou dois-je former une équipe ?
- Quels sont les critères de jugement ?
- Y a-t-il des prix à gagner ?
```

### 2. Blog / Actualités
Créez une section blog pour publier :
- Annonces de l'événement
- Témoignages des participants
- Coulisses de l'organisation
- Retours sur les éditions précédentes
- Conseils pour bien préparer le Défi

### 3. Témoignages
Ajoutez des témoignages de participants :
```html
<section class="testimonials">
  <h2>Ils ont participé au Défi 24h</h2>
  <blockquote>
    "Une expérience incroyable ! Le Défi 24h m'a permis de découvrir 
    mes capacités créatives et de créer des liens forts avec mon équipe."
    - Marie, étudiante MMI 2025
  </blockquote>
</section>
```

## 🔤 Titres et sous-titres (Hn)

### Structure recommandée

```html
<h1>Titre principal de la page (1 seul H1 par page)</h1>
  
  <h2>Section 1</h2>
    <h3>Sous-section 1.1</h3>
    <h3>Sous-section 1.2</h3>
  
  <h2>Section 2</h2>
    <h3>Sous-section 2.1</h3>
    <h3>Sous-section 2.2</h3>
```

### Exemples de H2 pour la page d'accueil
- "Pourquoi participer au Défi 24h ?"
- "Comment se déroule l'événement ?"
- "Les étapes de l'inscription"
- "Nos partenaires"
- "Les éditions précédentes"

## 🔗 Liens internes

### Stratégie de maillage interne

Créez des liens entre vos pages avec des ancres descriptives :

**❌ Mauvais :**
```html
<a href="/inscription">Cliquez ici</a>
```

**✅ Bon :**
```html
<a href="/inscription">Inscrivez-vous au Défi 24h MMI</a>
```

### Liens recommandés par page

**Page d'accueil →**
- Programme
- Inscription
- Équipes
- Galerie (éditions précédentes)

**Page Programme →**
- Accueil
- Inscription
- Contact

**Page Équipes →**
- Inscription
- Créer une équipe
- Classement

## 📸 Optimisation des images

### Attributs alt descriptifs

**❌ Mauvais :**
```html
<img src="image.jpg" alt="image">
```

**✅ Bon :**
```html
<img src="equipe-gagnante-2025.jpg" 
     alt="Équipe gagnante du Défi 24h MMI édition 2025">
```

### Noms de fichiers SEO-friendly

**❌ Mauvais :**
- IMG_1234.jpg
- photo-1.jpg
- image_finale.png

**✅ Bon :**
- defi-24h-equipe-podium-2025.jpg
- logo-defi-24h-mmi.png
- programme-evenement-24h.jpg

## 🎨 Balises meta par type de contenu

### Page événement
```astro
<Layout
  title="Défi 24h MMI 2026 - Événement créatif 24 heures non-stop"
  description="Participez au Défi 24h MMI le 09 janvier 2026. 24 heures de création, défis et innovation. Inscriptions ouvertes !"
  keywords="défi 24h, événement MMI, challenge créatif, 09 janvier 2026"
/>
```

### Page équipe
```astro
<Layout
  title="Équipe [Nom] - Défi 24h MMI"
  description="Découvrez l'équipe [Nom] participant au Défi 24h MMI. Membres, créations et parcours de l'équipe."
  keywords="équipe défi 24h, [Nom], participants MMI"
/>
```

### Page galerie/création
```astro
<Layout
  title="[Nom du projet] - Création Défi 24h MMI"
  description="Découvrez [Nom du projet], une création réalisée en 24 heures par l'équipe [Nom] lors du Défi 24h MMI."
  keywords="création défi 24h, projet [type], réalisation 24h"
/>
```

## 📊 Analyse de la concurrence

### Mots-clés à surveiller
Utilisez Google Search Console pour identifier :
- Les requêtes qui amènent du trafic
- Les pages les plus performantes
- Les opportunités de nouveaux mots-clés

### Espionner la concurrence
Analysez les sites similaires :
- Quels mots-clés utilisent-ils ?
- Quelle est leur structure de contenu ?
- Quels liens ont-ils ?

## 🚀 Contenu évolutif

### Calendrier éditorial suggéré

**3 mois avant l'événement :**
- Annonce officielle
- Ouverture des inscriptions
- Présentation du règlement

**2 mois avant :**
- Présentation des partenaires
- Témoignages des anciens participants
- Conseils de préparation

**1 mois avant :**
- Rappel des dates
- Présentation des équipes inscrites
- Programme détaillé

**Pendant l'événement :**
- Live updates sur les réseaux sociaux
- Photos et vidéos en temps réel
- Stories Instagram/TikTok

**Après l'événement :**
- Résultats et classement
- Galerie photos complète
- Retours et témoignages
- Articles sur les créations

## ✨ Call-to-Action (CTA)

### CTA efficaces pour le SEO

**❌ Faible :**
- "Cliquez ici"
- "En savoir plus"
- "Voir plus"

**✅ Fort :**
- "Inscrivez-vous au Défi 24h maintenant"
- "Rejoignez votre équipe pour le Défi 24h"
- "Découvrez le programme complet du 09 janvier"
- "Téléchargez le règlement du Défi 24h"

## 🎯 Objectifs de contenu

### Quantité
- **Minimum** : 300 mots par page
- **Idéal** : 500-800 mots pour les pages principales
- **Blog** : 800-1500 mots par article

### Qualité
- Répondre aux questions des utilisateurs
- Utiliser un vocabulaire riche et varié
- Structurer avec des listes et sous-titres
- Ajouter des exemples concrets

### Mise à jour
- **Haute fréquence** (hebdomadaire) : Accueil, Blog
- **Moyenne fréquence** (mensuelle) : Programme, Équipes
- **Basse fréquence** (trimestrielle) : Mentions légales, CGU

## 📱 Optimisation mobile

### Textes adaptés au mobile
- Phrases courtes
- Paragraphes aérés
- Titres accrocheurs
- Listes à puces

### Formatage mobile-friendly
```css
/* Taille de police minimum */
font-size: 16px; /* Évite le zoom automatique sur iOS */

/* Espacement */
line-height: 1.6; /* Lecture plus facile */

/* Largeur des conteneurs */
max-width: 600px; /* Limite la largeur du texte */
```

## 🌐 Localisation (si applicable)

Si votre événement cible une région spécifique :

### Mots-clés locaux
- "défi 24h [ville]"
- "événement MMI [ville]"
- "challenge créatif [région]"

### Schema.org LocalBusiness
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "location": {
    "@type": "Place",
    "name": "IUT [Ville]",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Adresse",
      "addressLocality": "Ville",
      "postalCode": "Code postal",
      "addressCountry": "FR"
    }
  }
}
```

## 🎓 Glossaire SEO

- **Mot-clé** : Terme recherché par les utilisateurs
- **SERP** : Page de résultats Google
- **CTR** : Taux de clic
- **Backlink** : Lien depuis un autre site
- **Anchor text** : Texte cliquable d'un lien
- **Meta description** : Description affichée dans Google
- **Rich snippet** : Résultat enrichi dans Google
- **Featured snippet** : Position 0 dans Google

---

**💡 Conseil final :** Le meilleur SEO est un contenu de qualité qui répond vraiment aux besoins des utilisateurs !
