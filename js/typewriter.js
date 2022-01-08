
const dev = document.querySelector(".dev");

new Typewriter(dev,{
deleteSpeed : 50

})
.pauseFor(2600)
.changeDelay(30)
.typeString("Développeur web <br> Front-End")
.pauseFor(300)
.start();






const apropos = document.getElementById("apropos");

new Typewriter(apropos,{
deleteSpeed : 50,


})
.changeDelay(30)
.typeString("<span style='color : orange'> HTML</span>")
.pauseFor(1000)
.deleteChars(4)
.typeString("<span style='color : blue'>CSS</span>")
.pauseFor(1000)
.deleteChars(3)
.typeString("<span style='color : #4f5b93'>PHP</span>")
.pauseFor(1000)
.deleteChars(3)
.typeString("<span style='color : gold'>Javascript</span>")
.deleteChars(10)
.typeString("<span style='color : orange'> HTML</span>")
.pauseFor(1000)
.deleteChars(4)
.typeString("<span style='color : blue'>CSS</span>")
.pauseFor(1000)
.deleteChars(3)
.typeString("<span style='color : #4f5b93'>PHP</span>")
.pauseFor(1000)
.deleteChars(3)
.typeString("<span style='color : gold'>Javascript</span>")
.deleteChars(10)
.typeString("<span style='color : orange'> HTML</span>")
.pauseFor(1000)
.deleteChars(4)
.typeString("<span style='color : blue'>CSS</span>")
.pauseFor(1000)
.deleteChars(3)
.typeString("<span style='color : #4f5b93'>PHP</span>")
.pauseFor(1000)
.deleteChars(3)
.typeString("<span style='color : gold'>Javascript</span>")
.start();

