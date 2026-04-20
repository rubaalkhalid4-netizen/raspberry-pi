function capture () {
	
}
input.onButtonPressed(Button.A, function () {
    الاشارة = 1
})
input.onButtonPressed(Button.B, function () {
    الاشارة = 0
})
let الاشارة = 0
for (let index = 0; index < 1; index++) {
    basic.showNumber(0)
    الاشارة += 0
}
basic.forever(function () {
    if (0 == 0) {
        serial.writeLine("capture")
        serial.redirectToUSB()
    } else {
    	
    }
})
