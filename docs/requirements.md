# Requirements
Dato            version   
2025 09 30 |    0.001
2025 09 30 |    0.002
2025 09 30 |    0.003
2025 09 30 |    0.004
2025 09 30 |    0.005
2025 09 30 |    0.006
2025 09 30 |    0.007
2025 09 30 |    0.008
2025 09 30 |    0.009
2025 09 30 |    0.010
2025 09 30 |    0.011
2025 09 30 |    0.012

**Senest opdateret:** 2025-09-30

## Formål
Dette dokument fungerer som fælles reference mellem udvikler (dig) og Codex-assistenten og teammedlemmere. Heri står alle de specifikationer som er nødvendige for projektets udførelse.

## Arbejdsgang for nye opgaver
1. Notér kort beskrivelse af opgaven her, så Codex kan se kontekst.
2. Angiv hvilke filer der forventes ændret og hvilket versionsnummer der skal opdateres.
3. Efter udført arbejde beskrives ændringerne og versionsnummer justeres.


### BJJDB2026

Formålet med BJJDB er at tilbyde brugeren at gemme og finde høj kvalitets BJJ instruktionsvideoer på internettet. 

Som bruger kan man
    logge ind på hjemmesiden
    fremsøge video-instruktioner
    gemme links til videoer
    rate videoer fra 1-5 stjerner
    skrive sin egen kommentar på videoen

Forside:
Forsiden ser ud som youtube med søgefelt for oven. En "opret" knap. Samt profilbillede yderst oppe i højre hjørne
menubar med knapperne (Alle, shorts, ikke set, er set, seneste uploads, Filtre)



Kravspecifikation

Krav 1: Versionsnummeret på filen skal opskrives hver gang der laves en ændring i koden/teksten. Datoen i tabellen og feltet "Senest opdateret" skal altid være dags dato. Når dokumentet opdateres, skal både dato og versionsnummer tilføjes/justeres samme dag. For minimale ændringer opskrives fx fra 0.001 --> 0.002; ved store ændringer opskrives fra 1.000 --> 2.000.

Krav 2: 

Krav 3: index.ejs
Design index.ejs præcis om google.com. udelad dog header og footer.
Istedet for Google skal der stå med flotte effektfulde bogstaver BJJDB, brug gerne farverne hvid, blå, lilla, brun og sort som repræsenterer bæltefarver i bjj.

Krav 4: Resultatside
Ser ud som youtube.com efter en søgning fx: https://www.youtube.com/results?search_query=bjj
Efter søgning på fx "Omoplata" vises videoer med relevans til omoplata.
Resultaterne vises på 2 kolonner, i første kolonne vises thumbnail og i anden kolonne vises info omkring videoen: instruktør, hvornår videoen er uploaded, navn på teknik, titel på video, hvor mange visninger på fx youtube, egen kommentar osv.
