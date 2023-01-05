// Add scroll later

const donutJava = document.getElementsByClassName("donut")[0]
const donutHTML = document.getElementsByClassName("donut")[1]
const donutCSS = document.getElementsByClassName("donut")[2]
const donutDrRacket = document.getElementsByClassName("donut")[5]
const donutR = document.getElementsByClassName("donut")[3]
const donutMy = document.getElementsByClassName("donut")[6]
const donutPython = document.getElementsByClassName("donut")[4]
const donutDocker = document.getElementsByClassName("donut")[7]
const donutScript = document.getElementsByClassName("donut")[8]
const donutPhoto = document.getElementsByClassName("donut")[9]
const donutDesign = document.getElementsByClassName("donut")[10]
const donutPro = document.getElementsByClassName("donut")[11]
const donutIllust = document.getElementsByClassName("donut")[12]
const donutFigma = document.getElementsByClassName("donut")[13]

let totalJava = donutJava.dataset.percent
let t1 = 0
const donutAnimation1 = setInterval(() => {
    donutJava.dataset.percent = t1
    donutJava.style.background = `conic-gradient(var(--skyblue-c) 0 ${t1}%, var(--gray-c) ${t1}% 100%)`
  t1++ >= totalJava && clearInterval(donutAnimation1)
}, 10)


let totalHTML = donutHTML.dataset.percent
let t2 = 0
const donutAnimation2 = setInterval(() => {
    donutHTML.dataset.percent = t2
    donutHTML.style.background = `conic-gradient(var(--skyblue-c) 0 ${t2}%, var(--gray-c) ${t2}% 100%)`
  t2++ >= totalHTML && clearInterval(donutAnimation2)
}, 10)

let totalCSS = donutCSS.dataset.percent
let t3 = 0
const donutAnimation3 = setInterval(() => {
    donutCSS.dataset.percent = t1
    donutCSS.style.background = `conic-gradient(var(--skyblue-c) 0 ${t3}%, var(--gray-c) ${t3}% 100%)`
  t3++ >= totalCSS && clearInterval(donutAnimation3)
}, 10)

let totalR = donutR.dataset.percent
let t4 = 0
const donutAnimation4 = setInterval(() => {
    donutR.dataset.percent = t4
    donutR.style.background = `conic-gradient(var(--skyblue-c) 0 ${t4}%, var(--gray-c) ${t4}% 100%)`
  t4++ >= totalR && clearInterval(donutAnimation4)
}, 10)

let totalPython = donutPython.dataset.percent
let t5 = 0
const donutAnimation5 = setInterval(() => {
    donutPython.dataset.percent = t5
    donutPython.style.background = `conic-gradient(var(--skyblue-c) 0 ${t5}%, var(--gray-c) ${t5}% 100%)`
  t5++ >= totalR && clearInterval(donutAnimation5)
}, 10)

let totalDrRacket = donutDrRacket.dataset.percent
let t6 = 0
const donutAnimation6 = setInterval(() => {
    donutDrRacket.dataset.percent = t6
    donutDrRacket.style.background = `conic-gradient(var(--skyblue-c) 0 ${t6}%, var(--gray-c) ${t6}% 100%)`
  t6++ >= totalDrRacket && clearInterval(donutAnimation6)
}, 10)

let totalMy = donutMy.dataset.percent
let t7 = 0
const donutAnimation7 = setInterval(() => {
    donutMy.dataset.percent = t7
    donutMy.style.background = `conic-gradient(var(--skyblue-c) 0 ${t7}%, var(--gray-c) ${t7}% 100%)`
  t7++ >= totalDrRacket && clearInterval(donutAnimation7)
}, 10)

let totalDocker = donutDocker.dataset.percent
let t8 = 0
const donutAnimation8 = setInterval(() => {
    donutDocker.dataset.percent = t8
    donutDocker.style.background = `conic-gradient(var(--skyblue-c) 0 ${t8}%, var(--gray-c) ${t8}% 100%)`
  t8++ >= totalDocker && clearInterval(donutAnimation8)
}, 10)

let totalScript = donutScript.dataset.percent
let t9 = 0
const donutAnimation9 = setInterval(() => {
    donutScript.dataset.percent = t9
    donutScript.style.background = `conic-gradient(var(--skyblue-c) 0 ${t9}%, var(--gray-c) ${t9}% 100%)`
  t9++ >= totalScript && clearInterval(donutAnimation9)
}, 10)

let totalPhoto = donutPhoto.dataset.percent
let t10 = 0
const donutAnimation10 = setInterval(() => {
    donutPhoto.dataset.percent = t10
    donutPhoto.style.background = `conic-gradient(var(--brightblue-c) 0 ${t10}%, var(--gray-c) ${t10}% 100%)`
  t10++ >= totalPhoto && clearInterval(donutAnimation10)
}, 10)

let totalDesign = donutDesign.dataset.percent
let t11 = 0
const donutAnimation11 = setInterval(() => {
    donutDesign.dataset.percent = t11
    donutDesign.style.background = `conic-gradient(var(--brightblue-c) 0 ${t11}%, var(--gray-c) ${t11}% 100%)`
  t11++ >= totalDesign && clearInterval(donutAnimation11)
}, 10)

let totalPro = donutPro.dataset.percent
let t12 = 0
const donutAnimation12 = setInterval(() => {
    donutPro.dataset.percent = t12
    donutPro.style.background = `conic-gradient(var(--brightblue-c) 0 ${t12}%, var(--gray-c) ${t12}% 100%)`
  t12++ >= totalPro && clearInterval(donutAnimation12)
}, 12)

let totalIllust = donutIllust.dataset.percent
let t13 = 0
const donutAnimation13 = setInterval(() => {
    donutIllust.dataset.percent = t13
    donutIllust.style.background = `conic-gradient(var(--brightblue-c) 0 ${t13}%, var(--gray-c) ${t13}% 100%)`
  t13++ >= totalIllust && clearInterval(donutAnimation13)
}, 10)

let totalFigma = donutFigma.dataset.percent
let t14 = 0
const donutAnimation14 = setInterval(() => {
    donutFigma.dataset.percent = t14
    donutFigma.style.background = `conic-gradient(var(--brightblue-c) 0 ${t14}%, var(--gray-c) ${t14}% 100%)`
  t14++ >= totalFigma && clearInterval(donutAnimation14)
}, 10)

const repeat = setInterval(() => {
    donutAnimation1() || donutAnimation2() || donutAnimation3() ||donutAnimation4()
    || donutAnimation5() || donutAnimation6() || donutAnimation7() ||donutAnimation8()
    || donutAnimation9() || donutAnimation10() || donutAnimation11() ||donutAnimation12()
    || donutAnimation13() || donutAnimation14()
})