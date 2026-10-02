# Rio Elite Concierge

Sito web di **Rio Elite Concierge**, servizio di concierge personale che aiuta i viaggiatori a vivere Rio de Janeiro attraverso esperienze autentiche, luoghi selezionati e supporto diretto prima e durante il viaggio.

Il progetto è fondato da **Marco Valetto** ([@marcovaletto](https://www.instagram.com/marcovaletto/)), affiancato da un'agenzia di viaggi partner che gestisce la parte organizzativa e contrattuale.

---

## Obiettivo

Presentare il servizio in modo chiaro ed elegante, trasmettere fiducia al cliente e portarlo a contattare Rio Elite direttamente su WhatsApp.

## Pagine

| Pagina    | Percorso     | Contenuto                                                                       |
| --------- | ------------ | ------------------------------------------------------------------------------- |
| Home      | `/`          | Hero, filosofia del servizio, servizi, come funziona, esperienze, FAQ, contatto |
| Chi siamo | `/about`     | Valori, presentazione di Marco Valetto, agenzia partner, contatti               |
| Pacchetti | `/pacchetti` | Base, Plus, Premium e Personalizzato, con richiesta informazioni via WhatsApp   |

## Stack tecnologico

- [Astro](https://astro.build) come framework
- Template di partenza [AstroWind](https://github.com/onwidget/astrowind)
- [Tailwind CSS](https://tailwindcss.com) per lo stile
- [Tabler Icons](https://tabler.io/icons) tramite `astro-icon`
- Contatto cliente tramite link `wa.me` di WhatsApp con messaggio precompilato

## Identità visiva

| Elemento         | Valore                                       |
| ---------------- | -------------------------------------------- |
| Sfondo chiaro    | `#e8e1d2`                                    |
| Sfondo sabbia    | `#ded2bd`                                    |
| Nero             | `#050505`                                    |
| Oro              | `#d9a62e` (hover `#f0c95a`)                  |
| Marrone accento  | `#9b6a21`                                    |
| Testo secondario | `#3a403a`                                    |
| Titoli           | Font serif, con parola chiave in corsivo oro |
| Etichette        | Maiuscolo, tracking ampio, piccole           |

Le sezioni alternano sfondi chiari e neri per dare ritmo alla pagina.

## Struttura del progetto

```text
src/
├── assets/          # immagini e risorse
├── components/      # componenti e widget
├── layouts/         # PageLayout e layout comuni
├── pages/           # pagine del sito (index, about, pacchetti)
└── config.yaml      # configurazione del sito
public/
├── img/             # immagini statiche
└── video/           # video della home
```

## Avvio in locale

Requisiti: Node.js recente e npm.

```bash
# installa le dipendenze
npm install

# avvia il server di sviluppo
npm run dev

# controlla tipi e props
npm run check

# build di produzione
npm run build

# anteprima della build
npm run preview
```

## Da completare

- [ ] Inserire il nome dell'agenzia di viaggi partner
- [ ] Sostituire la foto segnaposto di Marco Valetto
- [ ] Scrivere i contenuti reali dei pacchetti e gli eventuali prezzi
- [ ] Verificare le frasi su autorizzazioni, contratti e pagamenti con l'agenzia
- [ ] Aggiornare i metadati SEO

## Contatti

- Instagram: [@marcovaletto](https://www.instagram.com/marcovaletto/)
- WhatsApp: tramite i pulsanti presenti sul sito

---

© Rio Elite Concierge. Tutti i diritti riservati.
