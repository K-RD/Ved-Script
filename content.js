console.log("Inside content.js");
//Chat script in array
const arr=[
    " ",
    "Hello students! Welcome to the session. We hope you all are doing well. I am name, Your Class Teacher for the session. Feel free to ask doubts related to subject. Happy learning.#WarmVelcome",
    "Hey kids if you are unable to see and hear MT then plz refresh once. #Refresh",
    "I have done B.tech from Collage city in branch But my passion is teaching and I am teacher since year, So, let me know if you guys come across any doubt in the session. #MilkeMachateHain",
    "We hope that you have gone through the mutual agreement and you will abide by it . #VAreHere",
    "If any student is found asking or sharing any personal info or any kind of telegram/whatsapp group links will be blocked, as it is against our child safety policy #Zerotolerance",
    "These are the concepts we gonna cover in today's session, stay active. #GetSetGo" ,
    "Well done students, I can see lots of you have given the responses.Remaining students, please give your answers, don't be afraid of being incorrect. #YouAllAreOP",
    "Let's find the mistake in the given slide everyone, write down in the public chat #DiscussionTime",
    "Congratulations to everyone, Now lets move towards the more excellence #YouAllAreRockstar",
    "Most awaited slide is here!! go through question and options carefully and then click on option.Be quick and We need 100% participation. #QuizTime",
    "Answer baccha log. Don't worry whether it will be right or wrong just do it. I know you guys can do it. #QuizTime" ,
    "Keep it up guys!! congrats to all fastest fingers list winner #FastAndFurious",
    "Amazing , % of you gave correct answers. that's a proud moment, deserve a round of applause ðŸ‘. #BullsEye",
    "Amazing performance students, congrats to all  ##keepitup",
    "So its time to see how much you learned.  Nothing new there! Use the prevoius concepts to solve this. And hit the poll. All the best!! #LetsInteract",
    "Claps for everyone, you guys did very well. Let's maintain this pace till the last minute of class. Show your ranks in chatbox. #YouAllAreRockstar",
    "Awesome blossom guys you all are very talented. Great to see your talents #SamajhAyegaToMazaAyega",
    "Student's I hope you all had an amazing experience, kindly give us feedback and share your thoughts, ideas, views on the session. #Feedback",
    "you guys really nailed it today. Never saw such an amazing class. Kudos to you all my bachha party. Byee and take care. #PhirMilengePadhtePadhte",
    " ",
    " "
];

//script title
const title=["","welcome","Hear & see","About CT","Mutual Agreement","Child Safety","Learning Outcomes","Lets Discuss","Silent Mode","Milestone 1","Quiz 1","Quiz 2","Fastest Finger","Result Hotspot/Quiz", "Teacher Interaction","Interactivity Pod","Milestone 2","Summary","Feedback","Thank You"];

//creating title-button-container
let wrapper=document.createElement('div');
wrapper.id='box-wrapper';
wrapper.setAttribute("style", "width:230px; padding:10px;  z-index:1; position:absolute; top:0px; left:50px; ");
console.log('wrapper style appended');

//Appending title-button-container in body
let bdy=document.getElementsByTagName('body');
bdy[0].appendChild(wrapper);
console.log('body appended');

//appending title-button in title-button-container
for (let i=1; i<20;i++){
    //adding element in wrapper
    let head1=document.createElement('button');
    let name="heading"+i;
    head1.id=name;
    head1.classList.add("heading-script");
    // creating text to be
    //displayed on button
    let text = document.createTextNode(title[i]);
    // appending text to button
    head1.appendChild(text);
    // head1.setAttribute("style","height:30px; color:black; font-size:15px; width:180px; border-radius:5px;  z-index:1; margin: 2px; opacity:0.4;")
    let wrap=document.getElementById('box-wrapper');
    wrap.appendChild(head1);
    console.log(name +'appended');
}



//Adding property of heading-script class in head tag using style tag
let hoverStyle=document.createElement('style');
hoverStyle.textContent=`
        .heading-script{
            display:block;
            height:30px; 
            color:black; 
            font-size:15px; 
            width:150px;
            overflow: hidden;
            word-wrap: break-word;
            text-overflow: ellipsis; 
            border-radius:5px;  
            z-index:1; 
            margin: 2px; 
            margin-left:10px;
            opacity:0.4;
        }
        .heading-script:hover{
            margin-left:0px;
            width:180px;
            cursor:pointer;
            background-color:lightsalmon;
            opacity:1;
            font-weight:700;
            color:#fff;
        }
`;
document.head.appendChild(hoverStyle);


function copyToClipboard(text){
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}

function pasteScript(txt){
    console.log('inside pasteScript');
    let temp=document.getElementById('text-area');
    temp.value=txt;
}

var script;
function call(no){
    console.log("inside call");
    let txt=arr[no];
    script=txt;
    copyToClipboard(txt);
    pasteScript(txt);
}



document.getElementById("heading1").addEventListener("click", () => (call(1)));
document.getElementById("heading2").addEventListener("click", () => (call(2)));
document.getElementById("heading3").addEventListener("click", () => (call(3)));
document.getElementById("heading4").addEventListener("click", () => (call(4)));
document.getElementById("heading6").addEventListener("click", () => (call(6)));
document.getElementById("heading5").addEventListener("click", () => (call(5)));
document.getElementById("heading7").addEventListener("click", () => (call(7)));
document.getElementById("heading8").addEventListener("click", () => (call(8)));
document.getElementById("heading9").addEventListener("click", () => (call(9)));
document.getElementById("heading10").addEventListener("click", () => (call(10)));
document.getElementById("heading11").addEventListener("click", () => (call(11)));
document.getElementById("heading12").addEventListener("click", () => (call(12)));
document.getElementById("heading13").addEventListener("click", () => (call(13)));
document.getElementById("heading14").addEventListener("click", () => (call(14)));
document.getElementById("heading15").addEventListener("click", () => (call(15)));
document.getElementById("heading16").addEventListener("click", () => (call(16)));
document.getElementById("heading17").addEventListener("click", () => (call(17)));
document.getElementById("heading18").addEventListener("click", () => (call(18)));
document.getElementById("heading19").addEventListener("click", () => (call(19)));