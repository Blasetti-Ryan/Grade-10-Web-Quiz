i = 0  //question index
 
var score = 0

var questions = ["Which champion has the ability Unbreakable Will? \t\t\t\tA)Leona\t\t\t\t\tB)Ryze\t\t\t\tC)Alistar\t\t\t\tD)Heimerdinger", "Which ability allows Kha zix to turn invisible, trigger unseen threat, and gain movement speed? \t\t\t\tA)Void Assault\t\t\t\tB)Void Dash\t\t\t\tC)Void Attack\t\t\t\tD)From the Void", "What small fluffy creature can be seen in the map Howling Abyss? \t\t\t\tA)Fluffies\t\t\t\tB)Poros\t\t\t\tC)Anivias\t\t\t\tD)Ploofs", "Which champion does not use mana? \t\t\t\tA)Lux\t\t\t\tB)Alistar\t\t\t\tC)Darius\t\t\t\tD)Garen", "Which champion has an ability that allows its damage to increase by 3 every time a minion is killed?\t\t\t\tA)Garen\t\t\t\tB)Ekko\t\t\t\tC)Karthus\t\t\t\tD)Nasus", "How much gold is granted for destroying the nexus? \t\t\t\tA)25\t\t\t\tB)48\t\t\t\tC)50\t\t\t\tD)100", "According to lore, which champion was so strong that they were given special restrictions?\t\t\t\tA)Yasuo\t\t\t\tB)Karthus\t\t\t\tC)Jax\t\t\t\tD)Zed", "Which of the following is an in-game currency? \t\t\t\tA)Influence Points\t\t\t\tB)Intelligence Points\t\t\t\tC)Rito Points\t\t\t\tD)Money Points", "According to lore, who killed the father of Shen? \t\t\t\tA)Yasuo\t\t\t\tB)Zed\t\t\t\tC)Riven\t\t\t\tD)Shen", "Which of these items does not increase ability power? \t\t\t\tA)Abyssal Scepter\t\t\t\tB)Athene's Unholy Grail\t\t\t\tC)Liandry's Torment\t\t\t\tD)Guardian's Orb", "Which two champions are brothers? \t\t\t\tA)Draven, Darius\t\t\t\tB)Rakan, Xayah\t\t\t\tC)Lucian, Thresh\t\t\t\tD)Fizz, Teemo", "Which of these champs cost 450 IP? \t\t\t\tA)Draven\t\t\t\tB)Fizz\t\t\t\tC)Soraka\t\t\t\tD)Kennen", "Which of the following is not a game mode on rotation in League of Legends? \t\t\t\tA)The Teemoing\t\t\t\tB)URF\t\t\t\tC)The Revenge of Karthus\t\t\t\tD)The Poro King", "Which Champion is unable to purchase boots? \t\t\t\tA)Kassadin\t\t\t\tB)Cassiopeia\t\t\t\tC)Nautilus\t\t\t\tD)Janna"]; //question array

var ans =["C", "A", "B", "D", "D", "C", "C", "A", "B", "A", "A", "C", "C", "B"]; //answer string

function commence() {
    document.getElementById("choice").style.display="none"
    document.getElementById("send").style.display="none"
    document.getElementById("current").style.display="none"
    document.getElementById("scoring").style.display="none"
    document.getElementById("labelA").style.display="none"
    document.getElementById("labelB").style.display="none"
    document.getElementById("restart").style.display="none"
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function main() {
   
    document.getElementById("lol").value = i+1; //set question number in box to index amount
    
    document.getElementById("result").innerText=questions[i]
    
    document.getElementById("choice").style.display="block"
    
    document.getElementById("start").style.display="none" //set the start button to invisible
    
    document.getElementById("current").style.display="block"
    
    document.getElementById("labelA").style.display="block"
    
    return user= " "
}
    
function choosing() {   

    document.getElementById("send").style.display="block"

    return user= prompt("Enter a letter: A, B, C, D").toUpperCase(); //display question in string that scales by index
 
}

function thechoice() {
    if (user==="A"||"B"||"C"||"D"){
        document.getElementById("current").value = user
    }
    else if (user===" "){
        document.getElementById("current").value =""
    }
    else {
        document.getElementById("current").value ="invalid response"
    }
}

function respond() {  

if (ans[i]===user){
        
        score= score+1
        
        var number = getRandomArbitrary(0, 3) //function used to create random responses
        
        if(number===0){
            
            document.getElementById("result").innerText="You are correct! Good job!"; //response for a right answer
        }
        
        else if(number===1){
            
            document.getElementById("result").innerText="That's the right answer! Nice thinking!"; //response for a right answer
        }
        
        else{
            
            document.getElementById("result").innerText="Good choice! You got it right!"; //response for a right answer
        }
    }
    
    else {
        
        var number = getRandomArbitrary(0, 3) //function used to create random responses
        
        if(number===0){
            
            document.getElementById("result").innerText="Sorry! You are incorrect! The correct answer is " + ans[i]+"."; //response for a right answer
        }
        
        else if(number===1){
            
            document.getElementById("result").innerText="Uh-oh! That's the wrong answer! The correct answer is " + ans[i] +"."; //response for a right answer
        }
        
        else{
            
            document.getElementById("result").innerText="Oops! It looks like you chose the wrong answer! The correct answer is " + ans[i] +"."; //response for a right answer
        }
    }
    
    i++ //increase index by 1
    document.getElementById("scoring").value =score //show player score
    document.getElementById("choice").style.display="none"
    document.getElementById("send").style.display="none"
    document.getElementById("labelB").style.display="block"
    document.getElementById("scoring").style.display="block"
    if (i>=questions.length){
        document.getElementById("next").style.display="none" //once the questions are done, set the next button to invisible
        document.getElementById("restart").style.display="block"
        if(score>=11){
            document.getElementById("result").innerText="You completed the quiz and passed with flying colours! Great job!"
        }
        else {
            document.getElementById("result").innerText="You completed the quiz but you didnt do too well! You might want to brush up on your League knowledge and try again!"
        }
    }
          
}

function after() {
    document.getElementById("result").innerText=""
    main()
}

function again() {
    i=0
    score=0
    user=" "
    document.getElementById("next").style.display="none"
    main()
}