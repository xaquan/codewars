/*
    Link https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

    Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
    The maximum time never exceeds 359999 (99:59:59)

    You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
   let l = [3600,60, 1]
   let t = ['00','00','00']
   let cache = 0

   for (let i = 0; i < l.length; i++) {
        cache = seconds / l[i]
        t[i] = `${cache < 10 ? '0' : ''}${Math.floor(cache)}`
        seconds = seconds - (parseInt(t[i]) * l[i])
   } 

   return t.join(':')
  }

  console.log(humanReadable(0))