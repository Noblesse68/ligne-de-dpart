let timer = 0
input.onSound(DetectedSound.Loud, function () {
    timer = 0
    if (input.soundLevel() < 140) {
        while (input.soundLevel() < 140) {
            basic.showNumber(timer)
            basic.pause(1000)
            timer += 0 + 1
            continue;
        }
    }
    basic.showNumber(timer)
    basic.pause(10000)
})
