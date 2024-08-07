input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 16, NeoPixelMode.RGB_RGB)
strip.showRainbow(1, 360)
basic.showIcon(IconNames.Happy)
