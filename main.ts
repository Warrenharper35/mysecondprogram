input.onButtonPressed(Button.A, function () {
    number += 0.5
    basic.showNumber(number)
})
input.onGesture(Gesture.TiltLeft, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    number += 0.5
    basic.showNumber(number)
})
input.onGesture(Gesture.TiltRight, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
let number = 0
basic.showIcon(IconNames.Ghost)
number = 4
player = game.createSprite(1, 4)
