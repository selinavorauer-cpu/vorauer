# Selina Vorauer - Portfolio Website

Ein modernes, minimalistisches Portfolio für einen Interaction Design Studenten mit React, TypeScript und Tailwind CSS.

## 🚀 Deployment zu Netlify - WICHTIG für Figma Make Projekte

### ⚠️ Wichtiger Hinweis für Figma Make
Da dieses Projekt mit Figma Make erstellt wurde, gibt es **keine package.json** und **kein Build-System** im traditionellen Sinne. Du musst daher einen anderen Ansatz verwenden:

### Option 1: Netlify Drop (EMPFOHLENE METHODE)

**Dies ist die einfachste Methode für Figma Make Projekte!**

1. **Exportiere dein Projekt aus Figma Make:**
   - Klicke auf "Export" in Figma Make
   - Lade alle Dateien herunter (als ZIP)
   - Entpacke die ZIP-Datei

2. **Bereite die Build-Dateien vor:**
   - Suche den `dist` oder `build` Ordner in den exportierten Dateien
   - Falls dieser nicht existiert, sind die Root-Dateien bereits dein "Build"

3. **Upload zu Netlify:**
   - Gehe zu [app.netlify.com/drop](https://app.netlify.com/drop)
   - Ziehe den gesamten Projektordner (oder `dist` Ordner) ins Browser-Fenster
   - Warte, bis der Upload abgeschlossen ist
   - Fertig! Netlify gibt dir eine URL 🎉

### Option 2: Git + Netlify (für kontinuierliche Updates)

Falls du Git verwenden möchtest:

1. Erstelle ein GitHub Repository
2. Pushe alle Dateien zu GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <deine-repository-url>
   git push -u origin main
   ```

3. Melde dich bei [Netlify](https://app.netlify.com) an

4. Klicke auf "Add new site" → "Import an existing project"

5. **WICHTIG:** Bei den Build-Einstellungen:
   - **Build command:** Lass dieses Feld LEER (oder lösche es)
   - **Publish directory:** `.` (Punkt für Root-Verzeichnis)
   - Oder verwende die Einstellungen aus `netlify.toml`

6. Klicke auf "Deploy site"

### Option 3: Manueller Upload mit Netlify CLI

Falls du Netlify CLI verwenden möchtest (weniger empfohlen):

1. Installiere Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploye direkt:
```bash
netlify deploy --dir=. --prod
```

## 📝 Wichtige Hinweise

- Das Projekt verwendet **HashRouter** für clientseitiges Routing, was ideal für statisches Hosting ist
- Die `netlify.toml` Datei enthält alle notwendigen Konfigurationen
- Die `_redirects` Datei im `/public` Ordner stellt sicher, dass alle Routes korrekt funktionieren

## 🎨 Features

- Modernes, minimalistisches Design in Rose-Lila Tönen
- React Router für Navigation zwischen Seiten
- Smooth Scrolling und Progress Bar
- Custom Cursor Animation
- Responsive Design
- Deutsche Navigation
- Projektdetailseiten mit umfangreichen Informationen

## 🛠️ Technologien

- React
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React (Icons)
- Motion/React (Animationen)

## 📧 Kontakt

Bei Fragen oder Problemen beim Deployment, kontaktiere mich gerne!
