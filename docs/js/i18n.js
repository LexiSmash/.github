// =================================================================
// i18n.js — rilevamento/selezione lingua e traduzioni incorporate
// -----------------------------------------------------------------
// Stesse 6 lingue del gioco (it/en/fr/de/es/nl). Rilevamento
// automatico dalla lingua del browser al primo caricamento; se la
// lingua del browser non è tra queste (es. arabo), fallback su
// English. Una scelta manuale (selettore in alto) vince sempre e
// resta salvata (localStorage) per le visite successive — stesso
// principio del tema chiaro/scuro in theme.js.
//
// Traduzioni incorporate direttamente qui (nessun fetch di JSON
// esterni): questo sito è pensato per essere completamente
// autosufficiente, senza dipendenze di rete oltre al proprio dominio.
// =================================================================
(function () {
    var STORAGE_KEY = 'lexismash_org_lang';
    var SUPPORTED = ['it', 'en', 'fr', 'de', 'es', 'nl'];
    var FALLBACK = 'en';

    var LANG_LABELS = {
        it: '🇮🇹 Italiano',
        en: '🇬🇧 English',
        fr: '🇫🇷 Français',
        de: '🇩🇪 Deutsch',
        es: '🇪🇸 Español',
        nl: '🇳🇱 Nederlands'
    };

    var T = {
        it: {
            page_title: 'LexiSmash — il party game di parole open community',
            meta_description: 'LexiSmash: party game di parole multigiocatore in tempo reale. Dizionario open source, segnalazioni raccolte in questa organizzazione GitHub.',
            eyebrow: 'Organizzazione GitHub',
            hero_title_html: 'Il party game di parole, <span class="accent-word">wide open</span>',
            hero_subtitle: 'LexiSmash è un gioco di parole multigiocatore in tempo reale. Qui trovi il dizionario aperto alla community e il punto in cui raccogliamo le segnalazioni del progetto.',
            cta_play: '🎮 Gioca su lexismash.it',
            cta_dictionary: '📖 Dizionario open source',
            features_title: 'Cosa rende LexiSmash diverso',
            features_lede: 'Un gioco di parole, ma pensato apposta per il "party": profondità linguistica e atmosfera di gruppo insieme.',
            feature_1_title: 'Sei lingue complete',
            feature_1_text: 'Italiano, inglese, francese, tedesco, spagnolo e olandese: ognuna col proprio dizionario, punteggio e alfabeto.',
            feature_2_title: 'Atmosfera da serata vera',
            feature_2_text: 'Chat, jukebox con musica sincronizzata tra tutti i giocatori, sfondi dinamici, decine di avatar.',
            feature_3_title: 'Equità incorporata',
            feature_3_text: 'Un sistema di karma tiene traccia del comportamento nel tempo, con conseguenze reali per chi disturba.',
            feature_4_title: 'Progressione persistente',
            feature_4_text: 'Amicizie, obiettivi, XP/livelli e classifica che durano oltre la singola partita.',
            feature_5_title: 'Accessibile a tutti',
            feature_5_text: 'Controllo vocale, supporto gamepad, scorciatoie da tastiera configurabili.',
            feature_6_title: 'Installabile e offline',
            feature_6_text: 'Si installa come app e permette partite complete contro i bot anche senza rete.',
            dictionary_title: 'Il dizionario è open source',
            dictionary_text: 'Le liste di parole valide vivono in un repository pubblico separato: mancano parole, ce ne sono di sbagliate, e chiunque può proporre una correzione con una Pull Request.',
            dictionary_cta: 'Vai al repository →',
            issues_title: 'Hai trovato un problema?',
            issues_text: 'Le segnalazioni di bug o problemi di LexiSmash si raccolgono proprio qui, nella sezione Issues di questa organizzazione.',
            issues_cta: 'Apri una Issue →',
            footer_license: '© LexiSmash — codice del gioco proprietario, dati del dizionario a licenza aperta.',
            footer_play: 'Gioca',
            footer_dictionary: 'Dizionario',
            footer_issues: 'Segnala un problema',
            theme_toggle_aria: 'Cambia tema chiaro/scuro',
            lang_select_aria: 'Scegli la lingua'
        },
        en: {
            page_title: 'LexiSmash — the open-community word party game',
            meta_description: 'LexiSmash: a real-time multiplayer word party game. Open source dictionary, project issues collected in this GitHub organization.',
            eyebrow: 'GitHub Organization',
            hero_title_html: 'The word party game, <span class="accent-word">wide open</span>',
            hero_subtitle: 'LexiSmash is a real-time multiplayer word game. Here you’ll find the community-open dictionary and the place where we collect project issues.',
            cta_play: '🎮 Play at lexismash.it',
            cta_dictionary: '📖 Open source dictionary',
            features_title: 'What makes LexiSmash different',
            features_lede: 'A word game, but built for the party: real linguistic depth alongside a real group atmosphere.',
            feature_1_title: 'Six complete languages',
            feature_1_text: 'Italian, English, French, German, Spanish and Dutch — each with its own dictionary, scoring and alphabet.',
            feature_2_title: 'A real hangout vibe',
            feature_2_text: 'Chat, a jukebox with music synced across every player, dynamic backgrounds, dozens of avatars.',
            feature_3_title: 'Fairness built in',
            feature_3_text: 'A karma system tracks behavior over time, with real consequences for anyone disrupting matches.',
            feature_4_title: 'Progress that lasts',
            feature_4_text: 'Friends, achievements, XP/levels and a leaderboard that outlives a single match.',
            feature_5_title: 'Accessible to everyone',
            feature_5_text: 'Voice control, gamepad support, configurable keyboard shortcuts.',
            feature_6_title: 'Installable and offline',
            feature_6_text: 'Installs as an app and supports full matches against bots even without a connection.',
            dictionary_title: 'The dictionary is open source',
            dictionary_text: 'The lists of valid words live in a separate public repository: words are missing, some are wrong, and anyone can propose a correction with a Pull Request.',
            dictionary_cta: 'Go to the repository →',
            issues_title: 'Found a problem?',
            issues_text: 'Bug reports and issues for LexiSmash are collected right here, in this organization’s Issues section.',
            issues_cta: 'Open an Issue →',
            footer_license: '© LexiSmash — game code proprietary, dictionary data under an open license.',
            footer_play: 'Play',
            footer_dictionary: 'Dictionary',
            footer_issues: 'Report an issue',
            theme_toggle_aria: 'Toggle light/dark theme',
            lang_select_aria: 'Choose language'
        },
        fr: {
            page_title: 'LexiSmash — le party game de mots ouvert à la communauté',
            meta_description: 'LexiSmash : un party game de mots multijoueur en temps réel. Dictionnaire open source, signalements du projet collectés dans cette organisation GitHub.',
            eyebrow: 'Organisation GitHub',
            hero_title_html: 'Le party game de mots, <span class="accent-word">grand ouvert</span>',
            hero_subtitle: 'LexiSmash est un jeu de mots multijoueur en temps réel. Vous trouverez ici le dictionnaire ouvert à la communauté et l’endroit où nous collectons les signalements du projet.',
            cta_play: '🎮 Jouer sur lexismash.it',
            cta_dictionary: '📖 Dictionnaire open source',
            features_title: 'Ce qui rend LexiSmash différent',
            features_lede: 'Un jeu de mots, mais pensé pour la fête : une vraie profondeur linguistique avec une vraie ambiance de groupe.',
            feature_1_title: 'Six langues complètes',
            feature_1_text: 'Italien, anglais, français, allemand, espagnol et néerlandais — chacune avec son propre dictionnaire, son score et son alphabet.',
            feature_2_title: 'Une vraie ambiance entre amis',
            feature_2_text: 'Chat, un jukebox avec musique synchronisée entre tous les joueurs, arrière-plans dynamiques, des dizaines d’avatars.',
            feature_3_title: 'Équité intégrée',
            feature_3_text: 'Un système de karma suit le comportement dans le temps, avec de vraies conséquences pour qui perturbe les parties.',
            feature_4_title: 'Une progression qui dure',
            feature_4_text: 'Amis, objectifs, XP/niveaux et un classement qui survit à une seule partie.',
            feature_5_title: 'Accessible à tous',
            feature_5_text: 'Contrôle vocal, prise en charge manette, raccourcis clavier configurables.',
            feature_6_title: 'Installable et hors ligne',
            feature_6_text: 'S’installe comme une application et permet des parties complètes contre les bots même sans connexion.',
            dictionary_title: 'Le dictionnaire est open source',
            dictionary_text: 'Les listes de mots valides vivent dans un repository public séparé : il manque des mots, certains sont erronés, et chacun peut proposer une correction avec une Pull Request.',
            dictionary_cta: 'Aller au repository →',
            issues_title: 'Vous avez trouvé un problème ?',
            issues_text: 'Les signalements de bugs ou de problèmes de LexiSmash sont collectés ici même, dans la section Issues de cette organisation.',
            issues_cta: 'Ouvrir une Issue →',
            footer_license: '© LexiSmash — code du jeu propriétaire, données du dictionnaire sous licence ouverte.',
            footer_play: 'Jouer',
            footer_dictionary: 'Dictionnaire',
            footer_issues: 'Signaler un problème',
            theme_toggle_aria: 'Changer le thème clair/sombre',
            lang_select_aria: 'Choisir la langue'
        },
        de: {
            page_title: 'LexiSmash — das offene Community-Wortspiel',
            meta_description: 'LexiSmash: ein Echtzeit-Multiplayer-Wortspiel. Open-Source-Wörterbuch, Projektprobleme werden in dieser GitHub-Organisation gesammelt.',
            eyebrow: 'GitHub-Organisation',
            hero_title_html: 'Das Wortspiel-Fest, <span class="accent-word">weit offen</span>',
            hero_subtitle: 'LexiSmash ist ein Echtzeit-Multiplayer-Wortspiel. Hier findest du das für die Community offene Wörterbuch und den Ort, an dem wir Projektprobleme sammeln.',
            cta_play: '🎮 Spielen auf lexismash.it',
            cta_dictionary: '📖 Open-Source-Wörterbuch',
            features_title: 'Was LexiSmash anders macht',
            features_lede: 'Ein Wortspiel, aber gemacht für die Party: echte sprachliche Tiefe zusammen mit echter Gruppenstimmung.',
            feature_1_title: 'Sechs vollständige Sprachen',
            feature_1_text: 'Italienisch, Englisch, Französisch, Deutsch, Spanisch und Niederländisch — jede mit eigenem Wörterbuch, Punktesystem und Alphabet.',
            feature_2_title: 'Echte Stimmung wie unter Freunden',
            feature_2_text: 'Chat, eine Jukebox mit für alle Spieler synchronisierter Musik, dynamische Hintergründe, Dutzende Avatare.',
            feature_3_title: 'Fairness eingebaut',
            feature_3_text: 'Ein Karma-System verfolgt das Verhalten über die Zeit, mit echten Konsequenzen für alle, die Partien stören.',
            feature_4_title: 'Fortschritt, der bleibt',
            feature_4_text: 'Freunde, Erfolge, XP/Level und eine Rangliste, die über eine einzelne Partie hinaus besteht.',
            feature_5_title: 'Für alle zugänglich',
            feature_5_text: 'Sprachsteuerung, Gamepad-Unterstützung, konfigurierbare Tastenkombinationen.',
            feature_6_title: 'Installierbar und offline',
            feature_6_text: 'Lässt sich als App installieren und unterstützt komplette Partien gegen Bots auch ohne Verbindung.',
            dictionary_title: 'Das Wörterbuch ist Open Source',
            dictionary_text: 'Die Listen gültiger Wörter leben in einem separaten öffentlichen Repository: Wörter fehlen, manche sind falsch, und jeder kann eine Korrektur mit einem Pull Request vorschlagen.',
            dictionary_cta: 'Zum Repository →',
            issues_title: 'Ein Problem gefunden?',
            issues_text: 'Fehlermeldungen und Probleme zu LexiSmash werden genau hier gesammelt, im Issues-Bereich dieser Organisation.',
            issues_cta: 'Issue öffnen →',
            footer_license: '© LexiSmash — Spielcode proprietär, Wörterbuchdaten unter offener Lizenz.',
            footer_play: 'Spielen',
            footer_dictionary: 'Wörterbuch',
            footer_issues: 'Problem melden',
            theme_toggle_aria: 'Hell-/Dunkelmodus umschalten',
            lang_select_aria: 'Sprache wählen'
        },
        es: {
            page_title: 'LexiSmash — el party game de palabras abierto a la comunidad',
            meta_description: 'LexiSmash: un party game de palabras multijugador en tiempo real. Diccionario open source, problemas del proyecto recogidos en esta organización de GitHub.',
            eyebrow: 'Organización de GitHub',
            hero_title_html: 'El party game de palabras, <span class="accent-word">bien abierto</span>',
            hero_subtitle: 'LexiSmash es un juego de palabras multijugador en tiempo real. Aquí encuentras el diccionario abierto a la comunidad y el lugar donde recogemos los problemas del proyecto.',
            cta_play: '🎮 Juega en lexismash.it',
            cta_dictionary: '📖 Diccionario open source',
            features_title: 'Qué hace diferente a LexiSmash',
            features_lede: 'Un juego de palabras, pero pensado para la fiesta: profundidad lingüística real junto con un verdadero ambiente de grupo.',
            feature_1_title: 'Seis idiomas completos',
            feature_1_text: 'Italiano, inglés, francés, alemán, español y neerlandés — cada uno con su propio diccionario, puntuación y alfabeto.',
            feature_2_title: 'Un ambiente de verdad entre amigos',
            feature_2_text: 'Chat, un jukebox con música sincronizada entre todos los jugadores, fondos dinámicos, decenas de avatares.',
            feature_3_title: 'Equidad incorporada',
            feature_3_text: 'Un sistema de karma sigue el comportamiento en el tiempo, con consecuencias reales para quien perturba las partidas.',
            feature_4_title: 'Progresión que dura',
            feature_4_text: 'Amigos, logros, XP/niveles y una clasificación que dura más allá de una sola partida.',
            feature_5_title: 'Accesible para todos',
            feature_5_text: 'Control por voz, soporte de mando, atajos de teclado configurables.',
            feature_6_title: 'Instalable y sin conexión',
            feature_6_text: 'Se instala como app y permite partidas completas contra bots incluso sin red.',
            dictionary_title: 'El diccionario es open source',
            dictionary_text: 'Las listas de palabras válidas viven en un repositorio público independiente: faltan palabras, hay algunas equivocadas, y cualquiera puede proponer una corrección con una Pull Request.',
            dictionary_cta: 'Ir al repositorio →',
            issues_title: '¿Encontraste un problema?',
            issues_text: 'Los reportes de errores o problemas de LexiSmash se recogen justo aquí, en la sección Issues de esta organización.',
            issues_cta: 'Abrir una Issue →',
            footer_license: '© LexiSmash — código del juego propietario, datos del diccionario bajo licencia abierta.',
            footer_play: 'Jugar',
            footer_dictionary: 'Diccionario',
            footer_issues: 'Informar de un problema',
            theme_toggle_aria: 'Cambiar tema claro/oscuro',
            lang_select_aria: 'Elegir idioma'
        },
        nl: {
            page_title: 'LexiSmash — het voor de community open woordspel',
            meta_description: 'LexiSmash: een real-time multiplayer woordspel. Open source woordenboek, projectproblemen worden in deze GitHub-organisatie verzameld.',
            eyebrow: 'GitHub-organisatie',
            hero_title_html: 'Het woordspel-feestje, <span class="accent-word">wagenwijd open</span>',
            hero_subtitle: 'LexiSmash is een real-time multiplayer woordspel. Hier vind je het voor de community open woordenboek en de plek waar we projectproblemen verzamelen.',
            cta_play: '🎮 Speel op lexismash.it',
            cta_dictionary: '📖 Open source woordenboek',
            features_title: 'Wat LexiSmash anders maakt',
            features_lede: 'Een woordspel, maar gemaakt voor het feestje: echte taalkundige diepgang samen met een echte groepssfeer.',
            feature_1_title: 'Zes volledige talen',
            feature_1_text: 'Italiaans, Engels, Frans, Duits, Spaans en Nederlands — elk met eigen woordenboek, puntensysteem en alfabet.',
            feature_2_title: 'Een echte sfeer met vrienden',
            feature_2_text: 'Chat, een jukebox met muziek gesynchroniseerd tussen alle spelers, dynamische achtergronden, tientallen avatars.',
            feature_3_title: 'Eerlijkheid ingebouwd',
            feature_3_text: 'Een karmasysteem houdt gedrag in de tijd bij, met echte gevolgen voor wie partijen verstoort.',
            feature_4_title: 'Voortgang die blijft',
            feature_4_text: 'Vrienden, prestaties, XP/levels en een klassement dat langer meegaat dan één partij.',
            feature_5_title: 'Toegankelijk voor iedereen',
            feature_5_text: 'Spraakbediening, gamepad-ondersteuning, instelbare toetsenbordsneltoetsen.',
            feature_6_title: 'Installeerbaar en offline',
            feature_6_text: 'Installeert als app en ondersteunt volledige partijen tegen bots, ook zonder netwerk.',
            dictionary_title: 'Het woordenboek is open source',
            dictionary_text: 'De lijsten met geldige woorden leven in een apart openbaar repository: er ontbreken woorden, sommige zijn fout, en iedereen kan een correctie voorstellen met een Pull Request.',
            dictionary_cta: 'Naar het repository →',
            issues_title: 'Een probleem gevonden?',
            issues_text: 'Bugmeldingen en problemen met LexiSmash worden precies hier verzameld, in de Issues-sectie van deze organisatie.',
            issues_cta: 'Open een Issue →',
            footer_license: '© LexiSmash — spelcode eigendomsrechtelijk beschermd, woordenboekgegevens onder open licentie.',
            footer_play: 'Spelen',
            footer_dictionary: 'Woordenboek',
            footer_issues: 'Een probleem melden',
            theme_toggle_aria: 'Licht/donker thema wisselen',
            lang_select_aria: 'Taal kiezen'
        }
    };

    function getStored() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function setStored(value) {
        try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* pazienza */ }
    }

    // Rilevamento automatico: prima lingua del browser (tra navigator.languages,
    // in ordine di preferenza dell'utente) che è tra le 6 supportate; se
    // nessuna corrisponde (es. arabo, giapponese...), fallback su English.
    function detectLang() {
        var candidates = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || FALLBACK];
        for (var i = 0; i < candidates.length; i++) {
            var base = String(candidates[i]).toLowerCase().split('-')[0];
            if (SUPPORTED.indexOf(base) !== -1) return base;
        }
        return FALLBACK;
    }

    function currentLang() {
        var stored = getStored();
        if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
        return detectLang();
    }

    function render(lang) {
        var dict = T[lang] || T[FALLBACK];
        document.documentElement.lang = lang;
        document.title = dict.page_title;
        var metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', dict.meta_description);

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.textContent = dict[key];
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-aria');
            if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
        });

        var select = document.getElementById('lang-select');
        if (select) select.value = lang;
    }

    function init() {
        var select = document.getElementById('lang-select');
        if (select) {
            select.innerHTML = '';
            SUPPORTED.forEach(function (code) {
                var opt = document.createElement('option');
                opt.value = code;
                opt.textContent = LANG_LABELS[code];
                select.appendChild(opt);
            });
            select.addEventListener('change', function () {
                setStored(select.value);
                render(select.value);
            });
        }
        render(currentLang());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
