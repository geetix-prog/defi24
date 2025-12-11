# 🍞 Utilisation du composant Breadcrumb

## Qu'est-ce qu'un fil d'Ariane (Breadcrumb) ?

Un fil d'Ariane est un élément de navigation qui montre aux utilisateurs où ils se trouvent dans la hiérarchie du site. C'est excellent pour :
- **UX** : L'utilisateur sait où il est
- **SEO** : Google comprend mieux la structure du site
- **Navigation** : Retour facile vers les pages parents

## 📦 Installation

Le composant est déjà créé dans `/src/components/Breadcrumb.astro`

## 🚀 Utilisation

### Exemple 1 : Page Équipe

```astro
---
import Layout from '../layouts/Layout.astro';
import Breadcrumb from '../components/Breadcrumb.astro';
// ... autres imports
---

<Layout
  title="Les Équipes - Défi 24h MMI"
  description="..."
>
  <Breadcrumb 
    items={[
      { label: 'Accueil', href: '/' },
      { label: 'Équipes' }
    ]}
  />
  
  <!-- Reste du contenu -->
</Layout>
```

### Exemple 2 : Page de détail d'équipe

```astro
---
import Layout from '../layouts/Layout.astro';
import Breadcrumb from '../components/Breadcrumb.astro';

const { nomEquipe } = Astro.params;
---

<Layout
  title={`Équipe ${nomEquipe} - Défi 24h MMI`}
  description="..."
>
  <Breadcrumb 
    items={[
      { label: 'Accueil', href: '/' },
      { label: 'Équipes', href: '/equipe' },
      { label: nomEquipe }
    ]}
  />
  
  <!-- Détails de l'équipe -->
</Layout>
```

### Exemple 3 : Page de création

```astro
---
import Layout from '../layouts/Layout.astro';
import Breadcrumb from '../components/Breadcrumb.astro';

const { idCreation } = Astro.params;
const creation = await getCreation(idCreation);
---

<Layout
  title={`${creation.nom} - Créations Défi 24h`}
  description="..."
>
  <Breadcrumb 
    items={[
      { label: 'Accueil', href: '/' },
      { label: 'Créations', href: '/creations' },
      { label: creation.nom }
    ]}
  />
  
  <!-- Détails de la création -->
</Layout>
```

### Exemple 4 : Page de profil

```astro
---
import Layout from '../layouts/Layout.astro';
import Breadcrumb from '../components/Breadcrumb.astro';
---

<Layout
  title="Mon Profil - Défi 24h MMI"
  description="..."
>
  <Breadcrumb 
    items={[
      { label: 'Accueil', href: '/' },
      { label: 'Mon Profil' }
    ]}
  />
  
  <!-- Contenu du profil -->
</Layout>
```

## 🎨 Personnalisation

### Modifier les styles

Éditez le fichier `/src/components/Breadcrumb.astro` :

```astro
<style>
  .breadcrumb-nav {
    font-family: 'Nohemi', sans-serif;
    /* Ajoutez vos styles personnalisés ici */
  }
  
  .breadcrumb-nav a {
    /* Style des liens */
  }
  
  .breadcrumb-nav a:hover {
    /* Style au survol */
  }
</style>
```

### Changer le séparateur

Par défaut, le séparateur est `/`. Pour le changer, modifiez cette ligne :

```astro
{index < items.length - 1 && (
  <span class="text-white/60" aria-hidden="true">→</span>
)}
```

Autres options de séparateurs :
- `>` : Chevron
- `→` : Flèche
- `•` : Bullet
- `|` : Pipe

## 🎯 Bonnes pratiques

### ✅ À FAIRE

```astro
<!-- Bon : Hiérarchie logique -->
<Breadcrumb 
  items={[
    { label: 'Accueil', href: '/' },
    { label: 'Équipes', href: '/equipe' },
    { label: 'Équipe Phoenix' }
  ]}
/>
```

### ❌ À ÉVITER

```astro
<!-- Mauvais : Pas de lien vers l'accueil -->
<Breadcrumb 
  items={[
    { label: 'Équipe Phoenix' }
  ]}
/>

<!-- Mauvais : Dernière étape avec lien -->
<Breadcrumb 
  items={[
    { label: 'Accueil', href: '/' },
    { label: 'Équipes', href: '/equipe' }
  ]}
/>
<!-- Il manque l'étape actuelle ! -->
```

## 🔧 Avancé : Breadcrumb dynamique

Créez une fonction helper pour générer automatiquement le breadcrumb :

```typescript
// src/utils/breadcrumb.ts
interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function generateBreadcrumb(pathname: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: 'Accueil', href: '/' }
  ];
  
  const segments = pathname.split('/').filter(s => s);
  
  const labels: Record<string, string> = {
    'equipe': 'Équipes',
    'programme': 'Programme',
    'galerie': 'Galerie',
    'classement': 'Classement',
    'contact': 'Contact',
    'creations': 'Créations',
    'inscription': 'Inscription',
    'connexion': 'Connexion',
    'profile': 'Mon Profil'
  };
  
  segments.forEach((segment, index) => {
    const isLast = index === segments.length - 1;
    const href = isLast ? undefined : '/' + segments.slice(0, index + 1).join('/');
    const label = labels[segment] || segment;
    
    items.push({ label, href });
  });
  
  return items;
}
```

Utilisation :

```astro
---
import Layout from '../layouts/Layout.astro';
import Breadcrumb from '../components/Breadcrumb.astro';
import { generateBreadcrumb } from '../utils/breadcrumb';

const breadcrumbItems = generateBreadcrumb(Astro.url.pathname);
---

<Layout>
  <Breadcrumb items={breadcrumbItems} />
  <!-- Contenu -->
</Layout>
```

## 📊 Impact SEO

Le composant Breadcrumb inclut automatiquement :

### JSON-LD Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

### Bénéfices
- ✅ Affichage du breadcrumb dans Google (Rich Snippet)
- ✅ Meilleure compréhension de la structure
- ✅ Amélioration du CTR
- ✅ Navigation facilitée

### Exemple de résultat Google
```
Défi 24h › Équipes › Équipe Phoenix
```

## 🎯 Où placer le Breadcrumb ?

### Position recommandée

```astro
<Layout>
  <div class="container">
    <!-- Breadcrumb en haut, juste après le header -->
    <Breadcrumb items={...} />
    
    <!-- Titre de la page -->
    <h1>...</h1>
    
    <!-- Contenu -->
    <div>...</div>
  </div>
</Layout>
```

### Sur mobile

Le breadcrumb s'adapte automatiquement grâce à `flex-wrap`.

## 🔍 Test

Pour tester le breadcrumb :

1. **Visuel** : Vérifiez l'affichage dans le navigateur
2. **Schema** : Validez avec [Schema Validator](https://validator.schema.org/)
3. **Google** : Testez avec [Rich Results Test](https://search.google.com/test/rich-results)

## 📝 Checklist d'implémentation

- [ ] Composant Breadcrumb créé
- [ ] Importé dans les pages nécessaires
- [ ] Hiérarchie logique définie
- [ ] Dernier élément sans lien
- [ ] Schema.org validé
- [ ] Style personnalisé (optionnel)
- [ ] Test sur mobile
- [ ] Test dans Google Rich Results

---

**💡 Conseil** : N'utilisez le breadcrumb que sur les pages avec une hiérarchie claire (profondeur > 2 niveaux).
