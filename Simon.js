let Gameseq = [];
let Userseq = [];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["red","yellow","green","red"];
//btns created to choose random values 
//acessing by there index value 0-3
 

document.addEventListener("keypress", function () {
    if (start === false) {  //this means once the game is started we dont  want to start 
        //again n again 
// step 2
        console.log("Game is started");
        start = true;   //once its true it will not get false hence it will start 
        levelup();
    }
});

function btnflash(btn) { //step 4

    btn.classList.add("flash");// arg/var assign the class flash which 
    //has some css property
    setTimeout(function(){
        btn.classList.remove("flash")

    },250);//here flash function is beging removed after every flash
}//flash is notjing but the white BG so it should be romoved withn a 
//sec so it will look like flash 

//userclass
function userflash(btn) { //step 4

    btn.classList.add("userflash");// arg/var assign the class flash which 
    //has some css property
    setTimeout(function(){
        btn.classList.remove("userflash")

    },250);
}


function levelup() {
    //step 3
    //as the lvl up the userseq is reset so at new lvl 
    //user match perivous as well as new color 
    //but the gameseq is storing all clors
    Userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //step 4
    // random color choose than it will  flash bellow
    let randidx = Math.floor(Math.random()*4);
    let randcolor = btns[randidx];  


    //ex randcolor = btn[1]= yellow
    let randbtn = document.querySelector(`.${randcolor}`);
    //This selects an HTML element with a class name matching randcolor.
    //If randcolor = "yellow", then

    Gameseq.push(randcolor);
    //storing the color gen by random 

    btnflash(randbtn);  //btnflash(yellow); 
    //the randbtn is passed as the value to the btn 
    //think like the
    //  func sum(a){
    // return a*2};
    // now giving the value to a by call;inh 
    //sum(4); a=4
};

//step 5

//here the flash is generated is of white by js 
//but now we want us to differentiatew it by user so passing the user 
//class


//step 7
function checkans(idx){//assgin value when called
    // console.log("curr level:"//,level);
    //now check wheether the last value of boith are equzl 

  
    if (Userseq[idx] === Gameseq[idx]) {
        console.log("Same value");
        if (Userseq.length == Gameseq.length) {

            setTimeout(levelup,1000);
            // levelup();//setting a timer to lvl up 
        }
    } else{
        h2.innerHTML=`Game over! Your score was :- <b>${level}</b> <br> Press any key to start </br>`;
        function gameover(){
            document.body.classList.add("bodycls")
        };
        gameover();
        setTimeout(() => {
            document.body.classList.remove("bodycls")
        }, 3000);
        //here we added the class with property when the gameovers 
        reset();
    }

    
};

function btnpress(){
    // console.log(this);// specify which btn is pressed w.r.t.allbtns func
    let btn = this; //creating new btn 
    userflash(btn);// while click it will flasgh

    //down below we are accesing the id thn storing it to the 
    //ussercolor step 6
    //accessing with id (the name) 
    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    //now pusing it to the userseq
    Userseq.push(usercolor);

    checkans(Userseq.length - 1);//we check the last input of user
};  


let allbtns = document.querySelectorAll(".btn");
for( btn of allbtns){ // here btn is different func
// tion scope local var
    btn.addEventListener("click",btnpress);
};

function reset(){
    start=false;
    Userseq=[];
    Gameseq=[];
    level=0;
}