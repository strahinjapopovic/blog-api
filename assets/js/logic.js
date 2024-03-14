/* JavaScript Document */
/* =============================================================
 	First Name			: 	Strahinja     					    
 	Last Name			: 	Popovic					            
 	Developer Name      : 	CodexDeveloper			        
 	WebMaster Email		:	spope.mails@gmail.com               
 ============================================================== */

/* ***************************************************************************************** */
/* JavaScript FormLogic CODE *************************************************************** */
/* ***************************************************************************************** */

function displayBlackMode() {
    document.getElementById('gray-btn').style.visibility = 'hidden';
    document.getElementById('black-btn').style.visibility = 'visible';
    document.getElementById('black-btn').style.display = 'block';
    document.querySelector('body').style.background = 'black';
    document.getElementById('data-post').style.background = 'black';
    document.getElementById('submit').style.background = 'black';
    document.getElementById('userName').style.background = 'rgba(40,40,40)';
    document.getElementById('title').style.background = 'rgba(40,40,40)';
    document.getElementById('content').style.background = 'rgba(40,40,40)';
}

function displayGrayMode() {
    document.getElementById('black-btn').style.visibility = 'hidden';
    document.getElementById('gray-btn').style.visibility = 'visible';
    document.getElementById('gray-btn').style.display = 'block';
    document.querySelector('body').style.background = 'rgba(23,23,23)';
    document.getElementById('data-post').style.background = 'rgba(23,23,23)';
    document.getElementById('submit').style.background = 'rgba(23,23,23)';
    document.getElementById('userName').style.background = 'rgba(48,48,48)';
    document.getElementById('title').style.background = 'rgba(48,48,48)';
    document.getElementById('content').style.background = 'rgba(48,48,48)';
}

function displayPostPage() {
    console.log("click");
    window.location.assign("https://strahinjapopovic.github.io/blog-api/");
    console.log(window.location);
}