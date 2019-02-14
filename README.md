# Bootstrap-LESS Seminar

Inhalt
<!-- vscode-markdown-toc -->
* 1. [Ausführung und Installation mittels Visual Studio Code](#AusfhrungundInstallationmittelsVisualStudioCode)
	* 1.1. [Visual Studio Code](#VisualStudioCode)
	* 1.2. [Hilfsfunktionen für VS Code](#HilfsfunktionenfrVSCode)
	* 1.3. [Extensions für VS Code](#ExtensionsfrVSCode)
	* 1.4. [Emmet Cheatsheets](#EmmetCheatsheets)
	* 1.5. [Bootstrap](#Bootstrap)
	* 1.6. [LESS](#LESS)
* 2. [Bootstrap](#Bootstrap-1)
	* 2.1. [Modulares CSS](#ModularesCSS)
	* 2.2. [Beispiel classes und ids](#Beispielclassesundids)
	* 2.3. [Beispiel only classes](#Beispielonlyclasses)
	* 2.4. [Less](#Less)
		* 2.4.1. [ Beispiele](#Beispiele)
	* 2.5. [Bootstrap](#Bootstrap-1)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

##  1. <a name='AusfhrungundInstallationmittelsVisualStudioCode'></a>Ausführung und Installation mittels Visual Studio Code

###  1.1. <a name='VisualStudioCode'></a>Visual Studio Code 
- Live Server als Extension installieren ** mit ALT + L + O wird der Server gestartet und die aktuelle Webseite geöffnet und bei jedem Speichern aktualisiert im Browser
- Formatierung des Texts mit ALT + Shift + F
- Zeilenumbruch aktivieren mit ALT + Z
- Aus-/Einkommentieren mit STRG + #
- Kommentar in JavaScript /**/ (Ein-/Mehrzeilig) oder // (Einzeilig)

###  1.2. <a name='HilfsfunktionenfrVSCode'></a>Hilfsfunktionen für VS Code
- https://code.visualstudio.com/docs/getstarted/tips-and-tricks
- https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
- https://code.visualstudio.com/docs/getstarted/keybindings
- Aufruf durch F1
    - Wenn > hinterlegt ist, werden Funktionen aufgeführt
    - Ohne > kann man nach Dateien suchen
- STRG + B für Explorer links zuklappen

###  1.3. <a name='ExtensionsfrVSCode'></a>Extensions für VS Code
Installationen durchführen für folgende Extensions:
- Debugger for Chrome
- npm
- Material Icon Theme
- CSS Formatter
- Stylesheet Formatter
- Beautify css/sass/scss/less
- Deutsches Studio falls gewünscht
    - German Language Pack for Visual Studio Code
    - sonst ist Englisch der empfohlene Standard
        - über F1 kann mittels "> Configure Display Language" die Spracheinstellung geändert werden
- Über Datei bzw. File, Automatische Speichern/Autosave aktivieren
- Easy LESS
    - "Compile-on-save" for LESS stylesheets without using a build task.

###  1.4. <a name='EmmetCheatsheets'></a>Emmet Cheatsheets
- https://docs.emmet.io/cheat-sheet/

###  1.5. <a name='Bootstrap'></a>Bootstrap
Eingabe im Terminal

Installation: 
```html
npm install --save @ng-bootstrap/ng-bootstrap
```

###  1.6. <a name='LESS'></a>LESS
Eingabe im Terminal

Installation: 
```html
npm install -g less
```
Abfrage der Version: ```html
lessc --version
```

.less zu .css wandeln
```html
lessc variablen.less variablen.css
```

##  2. <a name='Bootstrap-1'></a>Bootstrap

###  2.1. <a name='ModularesCSS'></a>Modulares CSS
Großes Webprojekt
- Unübersichtlich
	- Nomenklatur
- Unvorhersehbar
- bläht sich auf
- unwartbar

Jedes Modul ist für sich geschlossen, Änderungen beeinflussen nicht andere Module  

Spezifizität:
	- gleichmäßig
	- nur CSS-Klassen keine ID-Selektoren (Dynamische Webseite)
	- ID Selektoren sind bei statische Webseiten in Ordnung

Keine Elementnamen sondern Rollen -> Nomenklatur

SMACSS Richtlinie
- Jonathan Snookes (Urheber)
- smacss.com (PDF zugänglich)
- Aufbau:
	- Modul -> widget
		- Elements -> widget_element (_)
			- State Modifier -> widget-modifier (-)

BEM (Yandex)
- en.bem.info/methodology
- Block Element Modifier
	- block
		- block__element
			- block--modifier

###  2.2. <a name='Beispielclassesundids'></a>Beispiel classes und ids
```css
<style>
	#content .meinwidget {
		border: 1px solid #000;
		border-radius: 5px;
		padding: 10px;
	}

	.meinwidget h2 {
		color: red;
		background-color: #fff;
	}

	#content .meinwidget p {
		background-color: #fff;
	}

	#content .active {
		background-color: #ddd;
	}
</style>
```
```html
<body>
    <div id="content">
        <h1>Modulares CSS - classes und ids</h1>
        <div class="meinwidget">
            <h2 class="headline active">Überschrift des Widgets</h2>
                <p class="active">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, voluptatem
                    asperiores? Odio
                    adipisci illo nam.</p>
                <p>
                    <button>Ja </button>
                    <button>Nein</button>
                </p>
                <p>Soll anders aussehen...</p>
        </div>
    </div>
</body>
```

###  2.3. <a name='Beispielonlyclasses'></a>Beispiel only classes
```css
<style>
        /* à la SCSS */

        /* Resets */
        body {
            margin: 0;
        }

        /* Layout */
        /* Kennzeichnung der Klassen mit l- */

        .l-nav {
            width: 150px;
            float: left;
        }

        .l-content {
            margin-left: 170px;
        }

        .l-nav-reverse {
            float: right;
        }

        .l-content-reverse {
            margin-left: 0;
            margin-right: 170px;
        }

        /* Generische Styles */

        /* Schriftgrößen, Abstände, etc. allgemein ... */

        /* Modul meinwidget */
        .meinwidget {
            border: 1px solid #000;
            border-radius: 5px;
            padding: 10px;
        }

        /* Kennzeichnung eines Elements mit ..._... */
        .meinwidget_headline {
            color: red;
            background-color: #fff;
        }

        .meinwidget_content {
            background-color: #fff;
        }

        .meinwidget_content-active {
            /* Moduleigener Modifer */
            background-color: #ddd;
        }

        .meinwidget_buttoncontainer {
            padding: 5px;
        }

        .meinwidget_button {}

        /* Modul btn */
        .btn {
            /* Basisklasse */
            padding: 5px;
            border-radius: 3px;
            min-width: 80px;
        }

        .btn-default {
            /* Modifierklasse */
            background-color: #ddd;
            border: 1px solid #000;
        }

        .btn-default:hover {
            /* Modifierklasse */
            background-color: rgb(235, 235, 235);
            border: 1px solid #000;
        }

        .btn-info {
            /* Modifierklasse */
            background-color: lightblue;
            border: 1px solid blue;
        }

        .btn-info:hover {
            /* Modiferklasse */
            background-color: rgb(205, 230, 238);
            border: 1px solid blue;
        }

        .btn-success {
            /* Modifierklasse */
            background-color: lightgreen;
            border: 1px solid green;
        }

        .btn-success:hover {
            /* Modiferklasse */
            background-color: rgb(177, 241, 177);
            border: 1px solid green;
        }

        .meinwidget_subline {
            color: #000;
        }

        /* States bzw. Modifer */

        /* Idee: Präfixes, z.B. 
            l- (Layout), 
            u- (Utility), 
            t- (Theme), 
            is-, has-, did-, can- (Zustand) 
        */

        .is-active {
            background-color: #ddd;
        }

        .has-sidebar {
            padding-left: 20px;
        }

        .is-disabled {
            color: #999;
        }

        /* layout */
        .l-big-padding {
            padding: 15px;
        }

        /* utility */
        .u-float-left {
            float: left;
        }

        .u-float-right {
            float: right;
        }
</style>
```
```html
<body>
    <div class="nav nav-reverse">
        <ul>
            <li><a href="">Beispielnav</a></li>
            <li><a href="">Beispielnav</a></li>
            <li><a href="">Beispielnav</a></li>
            <li><a href="">Beispielnav</a></li>
            <li><a href="">Beispielnav</a></li>
        </ul>
    </div>
    <div class="content content-reverse">
        <h1>Modulares CSS - Only Classes</h1>
        <div class="meinwidget">
            <h2 class="meinwidget_headline">Überschrift des Widgets</h2>
            <p class="meinwidget_content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, voluptatem
                asperiores? Odio
                adipisci illo nam.</p>
            <p class="meinwidget_buttoncontainer">
                <button class="btn btn-success meinwidget_button meinwidget_button-ja">Ja </button>
                <button class="btn btn-info meinwidget_button meinwidget_button-nein">Nein</button>
                <input type="button" value="Vielleicht"
                    class="btn btn-default meinwidget_button meinwidget_button-vielleicht">
            </p>
            <p class="meinwidget_subline">Soll anders aussehen...</p>
        </div>
    </div>
</body>
```
###  2.4. <a name='Less'></a>Less
- Alex Sellier (Urheber)
- CSS Präprozessor
- Superset von CSS (.CSS kann zu .Less-Datei gemacht werden)
- lesscss.org

Eigenschaften:  
- Bildung von Variablen möglich
- Mixins
- Funktionen
- Extensions
- Mediaqueries

Nutzung des Farbrads mit Komplentärfarben für Farbharmonien

####  2.4.1. <a name='Beispiele'></a> Beispiele
LESS-Datei
```less
@basisfarbe: #999;

@defaultfarbe: @basisfarbe;
@warnfarbe: red;

@komplement: spin(@warnfarbe, 180);

@successfarbe: rgb(46, 194, 125);
@infofarbe: blue;

@defaultTextFarbe: darken(@defaultfarbe, 10%);
@defaultBorderFarbe: darken(@defaultfarbe, 10%);
@defaultBgFarbe: darken(@defaultfarbe, 30%);

@warnTextFarbe: darken(@warnfarbe, 10%);
@warnBorderFarbe: darken(@warnfarbe, 10%);
@warnBgFarbe: lighten(@warnfarbe, 30%);

@basislaenge: 10px;
@standardpadding: @basislaenge @basislaenge @basislaenge*2 @basislaenge*2;
@standarmargin : @basislaenge*2;

h1 {
    color: @defaultTextFarbe;
    border: 1px solid @defaultBorderFarbe;
    background-color: @defaultBgFarbe; 
    
    // Kommentare mit // werden nicht nach .css kompiliert
    // color: darken(@basisfarbe, 10%);
    // border: 1px solid darken(@basisfarbe, 10%);
    // background-color: lighten(@basisfarbe, 30%);
    padding: @standardpadding;
    margin: @standarmargin;
}

p {
    color: @defaultTextFarbe;
    border: 1px solid @defaultBorderFarbe;
    background-color: @defaultBgFarbe; 
    
    // Kommentare mit /**/ werden nach .css kompiliert
    /* 
    color: darken(@basisfarbe, 10%);
    border: 1px solid @basisfarbe;
    background-color: lighten(@basisfarbe, 30%);
    */
    padding: @standardpadding;
    margin: @standarmargin;
}

p.warning {
    color: @warnTextFarbe;
    border: 1px solid @warnBorderFarbe;
    background-color: @warnBgFarbe;
}

p.komplement{
    color: @komplement;
}
```
Konvertierte CSS-Datei
```css
h1 {
  color: #808080;
  border: 1px solid #808080;
  background-color: #4d4d4d;
  padding: 10px 10px 20px 20px;
  margin: 20px;
}
p {
  color: #808080;
  border: 1px solid #808080;
  background-color: #4d4d4d;
  /* 
    color: darken(@basisfarbe, 10%);
    border: 1px solid @basisfarbe;
    background-color: lighten(@basisfarbe, 30%);
    */
  padding: 10px 10px 20px 20px;
  margin: 20px;
}
p.warning {
  color: #cc0000;
  border: 1px solid #cc0000;
  background-color: #ff9999;
}
p.komplement {
  color: #00ffff;
}
```
Zugehörige Anzeige in html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Variablen in LESS</title>
    <link rel="stylesheet" href="variablen.css">
</head>

<body>
    <h1>Variablen in LESS</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur aspernatur velit quidem voluptate illum.
    </p>
    <p class="warning">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</body>
</html>
```

###  2.5. <a name='Bootstrap-1'></a>Bootstrap
- CSS-Framework
	- Version 3 -> 3.3.7 Less  
	- Version 4 -> 4.x SASS
- Modulares CSS