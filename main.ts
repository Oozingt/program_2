let 湿度 = 0
basic.forever(function () {
    湿度 = sensors.sensor_soilMoisture(AnalogPin.P1)
    basic.showString("" + (湿度))
    if (湿度 < 75) {
        motorbit.MotorRun(motorbit.Motors.M1, 50)
    } else {
        motorbit.MotorRun(motorbit.Motors.M1, 0)
    }
})
