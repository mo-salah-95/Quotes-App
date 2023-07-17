var aaryQuates =[
{
    athour:"― Oscar Wilde",
    quate:"“Be yourself; everyone else is already taken.”"
},
{
    athour:"― Marilyn Monroe",
    quate:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"
},
{
    athour:"― Marcus Tullius Cicero",
    quate:"“A room without books is like a body without a soul.”"
},
{
    athour:"― Bernard M. Baruch",
    quate:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
},
{
    athour:"― Oscar Wilde",
    quate:"“Always forgive your enemies; nothing annoys them so much.”"
}
]

var lastNumber =null;
function changeQuate ()
{
    var randomNumber =Math.floor( Math.random()*aaryQuates.length);
    if(randomNumber===lastNumber){
        randomNumber =Math.floor( Math.random()*aaryQuates.length);
    }
    document.getElementById("paragraph1").innerHTML=aaryQuates[randomNumber].quate
    document.getElementById("paragraph2").innerHTML=aaryQuates[randomNumber].athour
    lastNumber=randomNumber;
    console.log(randomNumber);
    console.log(lastNumber);
    return randomNumber;
}



