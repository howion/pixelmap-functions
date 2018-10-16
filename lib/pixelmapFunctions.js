/*!
 * pixelmap-functions - v1.0.0 - 2018-10-16
 * https://github.com/howion/pixelmap-functions
 *
 * Copyright (c) 2018 howion
 * Licensed under the MIT license */

var pixelmapFunctions = {
    // INVERT COLORS
    invert: function($R, $G, $B, $A)
    {
        return [
            255 - $R,
            255 - $G,
            255 - $B,
            $A
        ];
    },

    // SWAPS
    modeRGB: function($R, $G, $B, $A) { return [ $R, $G, $B, $A ]; },
    modeRBG: function($R, $G, $B, $A) { return [ $R, $B, $G, $A ]; },
    modeGRB: function($R, $G, $B, $A) { return [ $G, $R, $B, $A ]; },
    modeGBR: function($R, $G, $B, $A) { return [ $G, $B, $R, $A ]; },
    modeBGR: function($R, $G, $B, $A) { return [ $B, $G, $R, $A ]; },
    modeBRG: function($R, $G, $B, $A) { return [ $B, $R, $G, $A ]; },

    // ARITHMETIC MEAN OF RGB
    arithmeticMean: function($R, $G, $B, $A)
    {
        // COMPUTE ARITHMETIC MEAN OF RGB
        var $mean = Math.round( ($R + $G + $B) / 3 );
        // DONE
        return [ $mean, $mean, $mean, $A ];
    },

    // SEPIA EFFECT
    sepia: function($R, $G, $B, $A)
    {
        return [
            ($R * 0.393) + ($G * 0.769) + ($B * 0.189),
            ($R * 0.349) + ($G * 0.686) + ($B * 0.168),
            ($R * 0.272) + ($G * 0.534) + ($B * 0.131),
            $A
        ];
    },

    // SIN BASED FUNC
    sine: function($R, $G, $B, $A)
    {
        function sine($x)
        {
            return Math.round( 255 * Math.sin($x / 24) );
        }

        return [ sine($R), sine($G), sine($B), $A ];
    },

    // ABSOLUTE VERSION OF SINE
    sineAbsolute: function($R, $G, $B, $A)
    {
        function sineAbs($x)
        {
            return Math.abs(
                Math.round(
                    255 * Math.sin($x / 24)
                )
            );
        }

        return [ sineAbs($R), sineAbs($G), sineAbs($B), $A ];
    },

    // MAKES BRIGHTER
    squareRoot: function($R, $G, $B, $A)
    {
        function calc($x)
        {
            return Math.round( Math.sqrt(255 * $x) );
        }

        return [ calc($R), calc($G), calc($B), $A ];
    },

    // MAKES EVEN MORE BRIGHTER
    cubeRoot: function($R, $G, $B, $A)
    {
        function calc($x)
        {
            return Math.round( Math.cbrt(65025 * $x) );
        }

        return [ calc($R), calc($G), calc($B), $A ];
    },

    // ROUND TO PIXELS SIGMOID VALUE
    sigmoidRound: function($R, $G, $B, $A)
    {
        function sigmoidRound($x)
        {
            return Math.round( 1 / (
                (1 / 255) +
                Math.exp(
                    - ($x / 24)
                )
            ));
        }

        return [ sigmoidRound($R), sigmoidRound($G), sigmoidRound($B), $A ];
    }
};
