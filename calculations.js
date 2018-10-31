// THE heatIndex formula is taken from https://en.wikipedia.org/wiki/Heat_index


const heatIndex = (T, R) => {
   const c = [16.923, 0.185212, 5.37941, -0.100254, (9.41695 * Math.pow(10,-3)), (7.28898 * Math.pow(10,-3)), (3.45372 * Math.pow(10,-4)), (-8.14971 * Math.pow(10,-4)), (1.02102 * Math.pow(10,-5)), (-3.8646 * Math.pow(10, -5)), (2.91583 * Math.pow(10,-5)), (1.42721 * Math.pow(10,-6)), (1.97483 * Math.pow(10,-7)), (-2.18429 * Math.pow(10,-8)), (8.43296 * Math.pow(10,-10)), (-4.81975 * Math.pow(10,-11))]

   const HI = ((c[0]) + (c[1] * T) + (c[2] * R) + (c[3] * T * R)+(c[4] * Math.pow(T, 2)) + (c[5] * Math.pow(R,2)) + (c[6] * Math.pow(T, 2) * R) + (c[7] * T * Math.pow(R, 2)) + (c[8] * Math.pow(T, 2) * Math.pow(R, 2)) + (c[9] * Math.pow(T,3)) + (c[10] * Math.pow(R, 3)) + (c[11] * Math.pow(T, 3) * R) + (c[12] * T * Math.pow(R,3)) + (c[13] * Math.pow(T,3) * Math.pow(R,2)) + (c[14] * Math.pow(T,2) * Math.pow(R,3)) + (c[15] * Math.pow(T,3) * Math.pow(R,3)))

   // console.log(HI)
   return HI.toFixed(0)
}


const dewPoint = (T, R) => {
   dew = T - ((100-R)/5)
   return Math.round(dew)
}

