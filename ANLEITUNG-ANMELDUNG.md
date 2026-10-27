# Google-Anmeldung einrichten

Damit nur Dome und Sarah die Daten sehen und ändern können. Dauert etwa 10 Minuten.
Alles passiert in der Firebase-Konsole: https://console.firebase.google.com → Projekt **huushaut**.

**Wichtig: Die Reihenfolge einhalten.** Schritt 4 (Regeln) erst machen, wenn ihr beide angemeldet seid.
Sonst sperrt ihr euch aus, bis die neue App-Version da ist. Es gehen dabei aber keine Daten verloren.

## 1. Google-Anmeldung einschalten

1. Links im Menü **Build → Authentication** öffnen (beim ersten Mal auf **Jetzt starten** tippen).
2. Reiter **Anmeldemethode** (Sign-in method) → **Google** auswählen.
3. **Aktivieren** einschalten, bei „Support-E-Mail“ deine Adresse auswählen → **Speichern**.

## 2. Adresse der App freigeben

1. In **Authentication** den Reiter **Einstellungen** (Settings) → **Autorisierte Domains** öffnen.
2. Auf **Domain hinzufügen** tippen und die Adresse eintragen, unter der ihr die App öffnet,
   ohne `https://` und ohne Pfad, z. B. `domepfa.github.io`.
3. Speichern.

## 3. Neue App-Version öffnen und anmelden

1. Nachdem die Änderung in `main` ist, ein paar Minuten warten, dann die App öffnen
   (falls nötig einmal ganz schließen und neu öffnen).
2. **Mit Google anmelden** tippen und euer Google-Konto wählen. Das macht ihr beide, jeder auf seinem Handy.
3. Einstellungen öffnen. Dort steht unter **Konto**, mit welcher Adresse du angemeldet bist.
   Diese beiden Adressen braucht ihr für Schritt 4.

## 4. Zugriff auf euch zwei beschränken

1. Links **Build → Firestore Database** → Reiter **Regeln** (Rules) öffnen.
2. Den ganzen Inhalt löschen und den Inhalt der Datei `firestore.rules` aus diesem Repository einfügen.
3. Die beiden Platzhalter `dome-adresse@gmail.com` und `sarah-adresse@gmail.com` durch eure
   echten Adressen aus Schritt 3 ersetzen, in **Kleinbuchstaben**.
4. **Veröffentlichen** tippen.

## 5. Kurz prüfen

- Die App auf beiden Handys öffnen: Alles sollte wie gewohnt da sein.
- In einem privaten Browserfenster die App öffnen: Es sollte nur „Mit Google anmelden“ kommen,
  und mit einem anderen Google-Konto „Kein Zugriff“.

## Falls etwas nicht klappt

| Meldung in der App | Lösung |
| --- | --- |
| „Diese Adresse ist in Firebase noch nicht … freigegeben“ | Schritt 2: Die Domain fehlt oder ist falsch geschrieben. |
| „Google-Anmeldung ist … noch nicht eingeschaltet“ | Schritt 1 nochmal prüfen. |
| „Kein Zugriff“ bei euch selbst | In den Regeln (Schritt 4) stimmt eine Adresse nicht genau. Oder ihr habt euch mit einem anderen Google-Konto angemeldet. |
| Anmeldung auf dem Handy hängt oder springt zurück | Kurz Bescheid geben, mit Handy-Typ (iPhone/Android) und ob die App vom Homescreen oder im Browser geöffnet war. |

Später jemanden dazunehmen: In den Regeln einfach eine weitere Adresse in die Liste schreiben und veröffentlichen.
