# Alexandros Mylonas — site

Static personal site (HTML/CSS, no build step). Multi-page: landing, works, news, exhibitions, info — δες την πλήρη δομή στο [STRUCTURE.md](STRUCTURE.md).

---

## ΓΡΗΓΟΡΗ ΠΛΟΗΓΗΣΗ

| Αρχείο | Τι περιέχει |
|---|---|
| [index.html](index.html) | Landing — hero, latest work, latest news |
| [works.html](works.html) | Λίστα έργων (work cards) |
| [news.html](news.html) | Ανακοινώσεις + section blocks με media |
| [exhibitions.html](exhibitions.html) | Λίστα εκθέσεων (text-only, external links) |
| [info.html](info.html) | Bio |
| [style.css](style.css) | Όλα τα styles |
| [footer.js](footer.js) | Web component του footer (single source of truth) |
| [works/](works/) | Detail σελίδα ανά έργο + `_template.html` |
| [news/](news/) | Detail σελίδες για news entries που τις χρειάζονται |
| [STRUCTURE.md](STRUCTURE.md) | Πλήρης δομή φακέλων + naming convention |

---

## ΤΟΠΙΚΗ ΠΡΟΕΠΙΣΚΟΠΗΣΗ

Διπλό κλικ στο `index.html` και ανοίγει στον browser. Δεν χρειάζεται server.

Για live-reload κατά τη διάρκεια αλλαγών:
- VS Code: extension **Live Server** → δεξί κλικ στο `index.html` → "Open with Live Server"
- ή `npx serve` από τη γραμμή εντολών

---

## ΑΝΕΒΑΣΜΑ ΣΤΟ GITHUB PAGES

### Βήμα 1 — Repository

1. github.com → **New repository**
2. **Repository name**: `USERNAME.github.io` (π.χ. `alexandrosmylonas.github.io`)
3. **Public** (απαραίτητο για δωρεάν Pages)
4. **Create repository**

### Βήμα 2 — Ανέβασε αρχεία

1. Στο repository → **Add file** → **Upload files**
2. Σύρε **όλα τα περιεχόμενα** του project (όχι τον ίδιο τον φάκελο):
   - Όλα τα `.html`, `.css`, `.js`, `.md`
   - Όλους τους φακέλους: `works/`, `news/`, `shared/`, `abundance/`, `exartisi/`, `polykatoikia/`, `athens-open-art/`, `perasmata/`
3. **Commit changes**

### Βήμα 3 — Ενεργοποίηση Pages

1. **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: main, folder: `/ (root)`
4. **Save** — η σελίδα είναι live σε 1–5 λεπτά στο `https://USERNAME.github.io`

### Βήμα 4 — Custom domain (προαιρετικά)

Στο registrar (Namecheap, Porkbun, Cloudflare):

```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
CNAME www USERNAME.github.io
```

Στο GitHub → Settings → Pages → **Custom domain** → γράψε το domain → Save → ενεργοποίησε **Enforce HTTPS** μόλις γίνει διαθέσιμο.

---

## ΑΛΛΑΓΕΣ ΠΕΡΙΕΧΟΜΕΝΟΥ

### Footer (Instagram URL, email)

Αλλάζει **μία φορά** στο [footer.js](footer.js) και ενημερώνεται αυτόματα σε όλες τις σελίδες. Ψάξε:
- `https://www.instagram.com/alexandrosmm/` → άλλαξε το handle
- `mailto:alekos_km@yahoo.gr` → άλλαξε το email

### Πρόσθεση νέου έργου

1. Φτιάξε φάκελο στο root με σύντομο latin όνομα, π.χ. `silence/`
2. Βάλε μέσα: `cover.jpg`, `top.jpg`, `01.jpg`, `02.jpg`, `03.jpg` (όσα έχεις)
3. Αντίγραψε [works/_template.html](works/_template.html) → μετονόμασε σε `works/silence.html`
4. Άλλαξε όλα τα `[όνομα]` σε `silence` και συμπλήρωσε τίτλο/περιγραφή
5. Στο [works.html](works.html), πρόσθεσε νέο `<a class="work-card">` block με `images/cover.jpg`

### Πρόσθεση news / event

1. Στο [news.html](news.html), πρόσθεσε νέο `<a class="news-item">` στο `<div class="news-list">`
2. Αν έχει φωτογραφίες/posters: φτιάξε φάκελο στο root (π.χ. `event-name/`), βάλε τις εικόνες
3. Κάτω από τη λίστα, πρόσθεσε `<section id="event-id">` με `about-grid` + `work-gallery--simple`
4. Σύνδεσε το news-item με anchor `href="#event-id"`

### Νέα έκθεση

Αν είναι text-only με external link: πρόσθεσε `<a class="news-item">` στο [exhibitions.html](exhibitions.html) που δείχνει σε εξωτερικό URL.

### Αλλαγή υπάρχουσας εικόνας

Απλά αντικατέστησε το αρχείο στον αντίστοιχο φάκελο, ίδιο όνομα. Παράδειγμα: για νέο cover στο Abundance, αντικατέστησε το `abundance/cover.jpg` και αρκεί.

---

## ΓΕΝΙΚΕΣ ΟΔΗΓΙΕΣ ΕΙΚΟΝΩΝ

- **Format**: JPG. PNG μόνο για διαφάνεια.
- **Μέγεθος**: <500KB ανά εικόνα. Συμπίεση: [squoosh.app](https://squoosh.app/) ή [tinyjpg.com](https://tinyjpg.com/).
- **Διαστάσεις (προτεινόμενες)**:
  - `cover.jpg`: τετράγωνη ή 4:5 (~1500×1500 ή 1200×1500)
  - `top.jpg`: landscape ~16:9 ή τετράγωνη υψηλής ανάλυσης (~2000×1500+)
  - gallery `01/02/03.jpg`: 3:4 portrait (~1200×1600) — fit καλύτερα στο layout
- **Onerror fallback**: όλα τα `<img>` έχουν `onerror="this.style.display='none'"` — αν λείπει η εικόνα, φαίνεται το plaster background αντί για σπασμένο εικονίδιο.

---

## ΕΠΟΜΕΝΑ ΒΗΜΑΤΑ ΓΙΑ ΑΝΑΓΝΩΡΙΣΙΜΟΤΗΤΑ

- **Google Search Console** για indexing (δωρεάν)
- **Vimeo** για video documentation (η performance community δουλεύει με Vimeo)
- **Open calls**: Onassis Stegi, State of Concept, Athens Digital Arts Festival, Rhubarb-Rhubarb, LADA

---

## ΚΟΣΤΟΣ

| Στοιχείο | Κόστος |
|---|---|
| GitHub Pages hosting | 0€ |
| SSL/HTTPS | 0€ (αυτόματο) |
| Domain (προαιρετικό) | ~12€/χρόνο |
