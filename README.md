# Οδηγός: Πώς να ανεβάσεις τη σελίδα στο GitHub Pages

Από το μηδέν στη ζωντανή σελίδα σε ~20 λεπτά. Δεν χρειάζεται καθόλου κώδικας.

---

## ΔΟΜΗ ΤΟΥ PROJECT

```
alexandrosmylonas.github.io/
├── index.html          ← η σελίδα (μόνο αυτό βλέπει ο επισκέπτης)
├── README.md           ← αυτές τις οδηγίες (μόνο για εμάς)
├── .gitignore          ← τι να αγνοεί το git
└── images/
    ├── README.txt      ← οδηγίες για τις φωτογραφίες
    ├── portrait.jpg          (TODO)
    ├── abundance-01.jpg      (TODO)
    ├── abundance-02.jpg      (TODO)
    └── abundance-03.jpg      (TODO)
```

Αυτό είναι όλο. **5 αρχεία + 1 φάκελος**. Καμία πολυπλοκότητα.

---

## ΒΗΜΑ 1 — Λογαριασμός GitHub (5 λεπτά)

1. Πήγαινε στο **github.com** και πάτα **Sign up**.
2. Διάλεξε username προσεκτικά — αυτό θα γίνει μέρος της διεύθυνσης της σελίδας.
   - Για παράδειγμα, αν διαλέξεις `alexandrosmylonas`, η σελίδα σου θα είναι: `alexandrosmylonas.github.io`
   - **Πρόταση**: `alexandrosmylonas` ή `mylonasalex` (μικρά γράμματα, χωρίς κενά)
3. Επιβεβαίωσε το email.

---

## ΒΗΜΑ 2 — Δημιούργησε το Repository (3 λεπτά)

1. Όταν συνδεθείς, πάνω δεξιά πάτα το **+** → **New repository**.
2. Στο **Repository name** γράψε ακριβώς αυτό:
   ```
   USERNAME.github.io
   ```
   (αντικατέστησε το USERNAME με το δικό σου username από το βήμα 1)

   Π.χ. αν το username είναι `alexandrosmylonas`, το όνομα του repository θα είναι: `alexandrosmylonas.github.io`

3. Άφησέ το **Public** (πρέπει να είναι public για τη δωρεάν έκδοση).
4. Τσέκαρε το **Add a README file**.
5. Πάτα **Create repository**.

---

## ΒΗΜΑ 3 — Ανέβασε τα αρχεία (3 λεπτά)

1. Στο νέο repository, πάτα **Add file** → **Upload files**.
2. Σύρε **όλα τα αρχεία και τον φάκελο** (index.html, README.md, .gitignore, και τον φάκελο images/) μέσα στο πλαίσιο.
   - **Tip**: Στον υπολογιστή σου, μπες μέσα στον φάκελο και επίλεξε όλα τα περιεχόμενα (Cmd+A ή Ctrl+A) — μην ανεβάζεις τον ίδιο τον φάκελο, μόνο τα περιεχόμενά του.
3. Κατέβα κάτω και πάτα **Commit changes**.

---

## ΒΗΜΑ 4 — Ενεργοποίησε το GitHub Pages (1 λεπτό)

1. Στο repository, πάτα την καρτέλα **Settings** (πάνω δεξιά).
2. Στο αριστερό μενού, πάτα **Pages**.
3. Στο **Source**, επίλεξε **Deploy from a branch**.
4. Επίλεξε branch: **main** και folder: **/ (root)**.
5. Πάτα **Save**.

Η σελίδα σου θα είναι ζωντανή σε 1-5 λεπτά στη διεύθυνση:
```
https://USERNAME.github.io
```

---

## ΒΗΜΑ 5 — Σύνδεση με το δικό σας domain (custom domain)

### 5α. Αγορά domain

Προτεινόμενα registrars (όλα κοστίζουν περίπου ίδια — 10-15€/χρόνο):
- **Namecheap.com** — γενικά το πιο φιλικό για αρχάριους
- **Porkbun.com** — από τις φθηνότερες τιμές
- **Cloudflare Registrar** — στο κόστος, χωρίς upselling

**Πρόταση ονόματος**:
- `alexandrosmylonas.com` ή `.art` ή `.gr`
- `mylonas-art.com`
- `alexmylonas.com`

### 5β. Σύνδεση του domain με το GitHub Pages

Όταν αγοράσεις το domain, πήγαινε στις ρυθμίσεις DNS του registrar και πρόσθεσε αυτές τις εγγραφές:

**Εγγραφές A (για το apex domain, π.χ. alexandrosmylonas.com):**
```
Type: A    Name: @    Value: 185.199.108.153
Type: A    Name: @    Value: 185.199.109.153
Type: A    Name: @    Value: 185.199.110.153
Type: A    Name: @    Value: 185.199.111.153
```

**Εγγραφή CNAME (για το www subdomain):**
```
Type: CNAME    Name: www    Value: USERNAME.github.io
```
(αντικατέστησε το USERNAME)

### 5γ. Δήλωση του domain στο GitHub

1. Πίσω στο GitHub repository → **Settings** → **Pages**.
2. Στο πεδίο **Custom domain** γράψε το domain σου (π.χ. `alexandrosmylonas.com`).
3. Πάτα **Save**.
4. Περίμενε 5-30 λεπτά για να ενεργοποιηθεί το DNS.
5. Όταν είναι έτοιμο, τσέκαρε το **Enforce HTTPS** (σημαντικό για ασφάλεια).

---

## ΒΗΜΑ 6 — Πώς να κάνεις αλλαγές στο μέλλον

Όποτε θες να αλλάξεις κάτι (π.χ. να προσθέσεις νέο έργο):

1. Πήγαινε στο repository στο GitHub.
2. Κάνε κλικ στο αρχείο **index.html**.
3. Πάτα το εικονίδιο του μολυβιού (✏️) πάνω δεξιά.
4. Κάνε τις αλλαγές σου.
5. Κάνε scroll κάτω και πάτα **Commit changes**.
6. Σε 1-2 λεπτά, οι αλλαγές θα είναι online.

---

## ΣΗΜΑΝΤΙΚΑ TODO ΠΡΙΝ ΔΗΜΟΣΙΕΥΣΗ

Άνοιξε το **index.html** και άλλαξε τα παρακάτω:

1. **Email**: Ψάξε τη γραμμή `mailto:hello@example.com` και βάλε το πραγματικό email επικοινωνίας.

2. **Φωτογραφίες** — δες αναλυτικό οδηγό παρακάτω.

3. **Social media**: Αν φτιάξετε λογαριασμό Instagram ή Vimeo, πρόσθεσέ τα στο contact section.

4. **Νέες παραστάσεις**: Όποτε γίνει νέα παράσταση, πρόσθεσέ την στο CV section.

---

## ΑΝΕΒΑΣΜΑ ΦΩΤΟΓΡΑΦΙΩΝ

Η σελίδα έχει ήδη **4 θέσεις φωτογραφιών** έτοιμες. Τώρα εμφανίζονται ως placeholders με γκρι φόντο. Για να αντικατασταθούν με τις πραγματικές φωτογραφίες:

### Βήμα 1: Πρόσφερε τις φωτογραφίες σε σωστή μορφή

Πριν τις ανεβάσεις, βεβαιώσου ότι:
- Είναι σε μορφή **JPG** (όχι HEIC ή RAW)
- Είναι **μικρότερες από 500KB** η καθεμιά (αλλιώς η σελίδα θα φορτώνει αργά)
- Έχουν τις προτεινόμενες διαστάσεις (πιο κάτω)

Δωρεάν εργαλεία για compression: **squoosh.app** (online, από την Google) ή **tinyjpg.com**.

### Βήμα 2: Ονόμασε τα αρχεία ακριβώς έτσι

| Αρχείο | Διαστάσεις | Τι δείχνει |
|---|---|---|
| `portrait.jpg` | ~1200×1500 (κάθετο, 4:5) | Πορτραίτο του Αλέξανδρου |
| `abundance-01.jpg` | ~1200×1600 (κάθετο) | Η πιο δυνατή / κεντρική φωτογραφία της performance |
| `abundance-02.jpg` | ~1600×1200 (οριζόντιο) | Δεύτερη επιλογή |
| `abundance-03.jpg` | ~1600×1200 (οριζόντιο) | Τρίτη επιλογή |

### Βήμα 3: Ανέβασε τα στο GitHub

Ο φάκελος `images/` υπάρχει ήδη στο repository.

1. Πήγαινε στο repository σου στο GitHub.
2. Κάνε κλικ στον φάκελο **images/**.
3. Πάτα **Add file** → **Upload files**.
4. Σύρε και τα 4 αρχεία (portrait.jpg, abundance-01.jpg, abundance-02.jpg, abundance-03.jpg).
5. Πάτα **Commit changes**.

### Βήμα 4: Σβήσε τους placeholders από τον κώδικα

Άνοιξε το `index.html` στο GitHub (πάτα το μολυβάκι ✏️) και κάνε αυτές τις 4 αλλαγές:

**Για το πορτραίτο** — ψάξε:
```html
<figure class="about-portrait empty">
```
και άλλαξέ το σε:
```html
<figure class="about-portrait">
```

**Για τις 3 φωτογραφίες της performance** — ψάξε αυτές τις 3 γραμμές και σβήσε από καθεμιά τη λέξη `empty`:
```html
<figure class="photo-1 empty" ...
<figure class="photo-2 empty" ...
<figure class="photo-3 empty" ...
```

Πρέπει να γίνουν:
```html
<figure class="photo-1" ...
<figure class="photo-2" ...
<figure class="photo-3" ...
```

Πάτα **Commit changes** και σε 1-2 λεπτά οι φωτογραφίες θα φαίνονται στη σελίδα.

### Σημαντικό: Credits φωτογράφου

Αν οι φωτογραφίες είναι τραβηγμένες από συγκεκριμένο φωτογράφο, πρόσθεσε credit στο `figcaption`. Π.χ. βρες:
```html
<figcaption>Abundance — 2025</figcaption>
```
και άλλαξε σε:
```html
<figcaption>Abundance — 2025 · ph. ΟΝΟΜΑ ΦΩΤΟΓΡΑΦΟΥ</figcaption>
```

---

## ΣΥΝΟΛΙΚΟ ΚΟΣΤΟΣ

- GitHub Pages: **0€** (πάντα δωρεάν)
- Domain: **~12€/χρόνο** (μόνο αυτό)
- Hosting: **0€** (στο GitHub)
- SSL/HTTPS: **0€** (αυτόματα από το GitHub)

---

## ΕΠΟΜΕΝΑ ΒΗΜΑΤΑ ΓΙΑ ΑΝΑΓΝΩΡΙΣΙΜΟΤΗΤΑ

Μόλις είναι online η σελίδα:

1. **Google Search Console** — δωρεάν, για να εμφανίζεται στο Google. Δες: search.google.com/search-console
2. **Vimeo** (όχι YouTube) — η performance art community χρησιμοποιεί κυρίως Vimeo.
3. **Instagram** — απαραίτητο για visual artists.
4. **Open calls** — ψάξτε για open calls από:
   - Onassis Foundation (Stegi)
   - State of Concept (Athens)
   - Athens Digital Arts Festival
   - Διεθνώς: Rhubarb-Rhubarb, LADA (Live Art Development Agency)
5. **Δώρισε φωτογραφίες σε press κάθε φορά που υπάρχει παράσταση** — δημιουργεί press archive που βοηθάει σε επόμενες αιτήσεις.

Καλή επιτυχία!
