"use strict";

/**
 * Funktion zum automatischen Herausschreiben der HEX-Werte zu allen Color-Swatches (Farbfeldern),
 * sodass diese nicht manuell eingefügt und gepflegt werden müssen
 */
function colorAnnotator() {
    // Alle Farbfelder über ihre Klasse herausfinden
    var libColors = document.getElementsByClassName("map-color");

    // Über alle Farbfelder iterieren
    for (var i = 0; i < libColors.length; i++) {
        var libColor = libColors.item(i);
        var libColorSwatch = libColor.getElementsByClassName("map-color-swatch")[0];
        var colorRGB = getComputedStyle(libColorSwatch).color;
        var colorHex = rgbToHex(colorRGB);
        //console.log(colorRGB + " --> " + colorHex);

        if (colorHex) {
            var hexDiv = document.createElement("code");
            var textNode = document.createTextNode(colorHex);
            hexDiv.appendChild(textNode);
            hexDiv.classList.add("map-token");
            hexDiv.classList.add("map-token-value");

            libColor.appendChild(hexDiv);
        }
    }


};
/**
 * Umwandlung von RGB-Farbwerten in HEX (jeweils als String)
 * z.B. 'rgb(0, 0, 255)' in '#0000FF'
 */
function rgbToHex(colorRGB) {
    //Mit RegExp aus rgb-String einzelne Farbwerte identifizieren (--> matches)
    var regexp = new RegExp("rgb\\(([0-9]+), ([0-9]+), ([0-9]+)\\)");
    var matches = colorRGB.match(regexp);

    try {
        //einzelne matches (Rot-Wert, Grün-Wert, Blau-Wert) auslesen und in Hex konvertieren
        var redHex = parseInt(matches[1], 10).toString(16);
        var greenHex = parseInt(matches[2], 10).toString(16);
        var blueHex = parseInt(matches[3], 10).toString(16);
    } catch (error) {
        console.warn("Could not parse RGB-Value " + colorRGB + ": " + error);
        return null;
    }
    // 6-Stelligen Hexwert zusammenbauen
    var colorHex = "#"
        + insertLeadingZero(redHex)
        + insertLeadingZero(greenHex)
        + insertLeadingZero(blueHex);
    return colorHex;
};
/**
 * Sicher stellen, dass jeder einzelen Rot/Blau/Grün-Hexwert zwei Zeichen hat
 */
function insertLeadingZero(hex) {
    if (hex.length === 1) {
        return ("0" + hex);
    }
    return hex;
};