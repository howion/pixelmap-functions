# pixelmap-functions

Functions for [**pixelmap**](https://github.com/howion/pixelmap)

## Usage

Include [pixelmap**Functions**.min.js](https://github.com/howion/pixelmap-functions/blob/master/lib/pixelmapFunctions.min.js)

```html
<script src="pixelmapFunctions.min.js"></script>
```

```js
let func = pixelmapFunctions

// EXAMPLE
func.name($R, $G, $B, $A)

// FUNCTIONS
func.invert(...)
func.arithmeticMean(...)
func.sepia(...)
func.sine(...)
func.sineAbsolute(...)
func.squareRoot(...)
func.cubeRoot(...)
func.sigmoidRound(...)
func.modeRGB(...) // INPUT = OUTPUT
func.modeRBG(...)
func.modeGRB(...)
func.modeGBR(...)
func.modeBGR(...)
func.modeBRG(...)
```

## Graphs

[**View**](https://www.desmos.com/calculator/aquvso5kjd) on **Desmos**

## Functions

![](https://raw.githubusercontent.com/howion/box/master/pixelmap/functions/scheme.png) 

| **`.invert`** | **`.arithmeticMean`** | **`.sepia`** |
| :-----------: | :-------------------: | :----------: |
| ![](https://raw.githubusercontent.com/howion/box/master/pixelmap/functions/invert.png) | ![](https://raw.githubusercontent.com/howion/box/master/pixelmap/functions/arithmeticMean.png) | ![](https://raw.githubusercontent.com/howion/box/master/pixelmap/functions/sepia.png) |

| **`.sine`** | **`.sineAbsolute`** | **`.squareRoot`** | **`.cubeRoot`** | **`.sigmoidRound`** |
| :---------: | :---------: | :---------------: | :-------------: | :-----------------: |
| ![](https://raw.githubusercontent.com/howion/box/master/pixelmap/functions/sine.png) | ![](https://raw.githubusercontent.com/howion/box/master/pixelmap/functions/sineAbsolute.png) | ![](https://raw.githubusercontent.com/howion/box/master/pixelmap/functions/squareRoot.png) | ![](https://raw.githubusercontent.com/howion/box/master/pixelmap/functions/cubeRoot.png) | ![](https://raw.githubusercontent.com/howion/box/master/pixelmap/functions/sigmoidRound.png) |

**`.modeRGB`** **`.modeRBG`** **`.modeGRB`** **`.modeGBR`** **`.modeBRG`** **`.modeBGR`**

## Example

![](https://raw.githubusercontent.com/howion/box/master/pixelmap/jellyfishes.jpg)

## Related

* [`howion/pixelmap`](https://github.com/howion/pixelmap)

* [`howion/pixasso`](https://github.com/howion/pixasso)

## License

[**MIT**](https://github.com/howion/pixelmap-functions/blob/master/LICENSE)
