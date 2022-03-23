input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    basic.showNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(2)
    basic.showNumber(2)
})
let SoundLevel = 0
radio.setGroup(0)
led.setBrightness(10)
basic.showNumber(0)
basic.forever(function () {
    SoundLevel = input.soundLevel()
    radio.sendNumber(SoundLevel)
})
