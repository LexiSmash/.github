// =================================================================
// theme.js — tema chiaro/scuro
// -----------------------------------------------------------------
// Di default segue le impostazioni di sistema (prefers-color-scheme),
// ma un click sul pulsante imposta una preferenza MANUALE che vince
// sempre su quella di sistema e resta salvata (localStorage) per le
// visite successive. Nessuna dipendenza esterna.
// =================================================================
(function () {
    var STORAGE_KEY = 'lexismash_org_theme'; // 'light' | 'dark' | assente = automatico
    var root = document.documentElement;
    var mql = window.matchMedia('(prefers-color-scheme: dark)');

    function systemTheme() {
        return mql.matches ? 'dark' : 'light';
    }

    function getStored() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function setStored(value) {
        try {
            if (value) localStorage.setItem(STORAGE_KEY, value);
            else localStorage.removeItem(STORAGE_KEY);
        } catch (e) { /* pazienza, tema non persistito ma pagina funzionante */ }
    }

    function currentTheme() {
        return getStored() || systemTheme();
    }

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        var btn = document.getElementById('theme-toggle');
        if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    function toggleTheme() {
        var next = currentTheme() === 'dark' ? 'light' : 'dark';
        setStored(next);
        applyTheme(next);
    }

    // Se l'utente non ha mai scelto manualmente, seguire i cambi live
    // delle impostazioni di sistema (es. macOS/iOS che passano a scuro
    // di sera automaticamente).
    mql.addEventListener('change', function () {
        if (!getStored()) applyTheme(systemTheme());
    });

    applyTheme(currentTheme());

    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.getElementById('theme-toggle');
        if (btn) btn.addEventListener('click', toggleTheme);
        applyTheme(currentTheme());
    });
})();
