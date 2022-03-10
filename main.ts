let start = 0
let end = 0
let difference = 0
let distance = 10 //meter
let speed = 0

input.onPinPressed(TouchPin.P0, function(){
    start = control.millis()
    console.log(start)
})

input.onPinPressed(TouchPin.P1, function(){
    end = control.millis()
    difference = (end - start) / 1000
    speed = distance / difference
    console.log(speed)
})
