let angle = 0
let volume = 0
let min_sound = 60
let max_sound = 85
basic.forever(function () {
    if (input.soundLevel() < min_sound) {
        volume = min_sound
    } else if (input.soundLevel() > max_sound) {
        volume = max_sound
    } else {
        volume = input.soundLevel()
    }
    angle = pins.map(
    volume,
    min_sound,
    max_sound,
    150,
    20
    )
    pins.servoWritePin(AnalogPin.P14, angle)
    basic.pause(20)
})
