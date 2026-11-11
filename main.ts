input.onButtonPressed(Button.A, function () {
    oldmood = mood
    mood = 1
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showString("HAPPY")
})
input.onButtonPressed(Button.AB, function () {
    if (mood == 1) {
        basic.showString("YOU ARE HAPPY")
    } else if (mood == 2) {
        basic.showString("YOU ARE SAD")
    } else if (mood == 3) {
        basic.showString("SAD")
    } else if (mood == 0) {
        basic.showString("SAD")
    } else {
        basic.showString("SAD")
    }
})
input.onButtonPressed(Button.B, function () {
    oldmood = mood
    mood = 2
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.showString("SAD")
})
input.onGesture(Gesture.Shake, function () {
    oldmood = mood
    mood = randint(1, 4)
})
let mood = 0
let oldmood = 0
oldmood = 0
oldmood = 0
basic.showString("MOOD")
