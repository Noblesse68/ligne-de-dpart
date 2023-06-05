input.onSound(DetectedSound.Loud, function () {
    timer = 1
    basic.pause(1000)
    while (input.soundLevel() < 100) {
        basic.showNumber(timer)
        basic.pause(1000)
        timer += 0 + 1
    }
    basic.showNumber(timer)
    basic.pause(10000)
})
let timer = 0
input.setSoundThreshold(SoundThreshold.Loud, 130)
