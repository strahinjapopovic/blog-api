/* JavaScript Document */
/* =============================================================
 	First Name			: 	Strahinja     					    
 	Last Name			: 	Popovic					            
 	Developer Name      : 	CodexDeveloper			        
 	WebMaster Email		:	spope.mails@gmail.com               
 ============================================================== */

/* ***************************************************************************************** */
/* JavaScript BlogPage CODE **************************************************************** */
/* ***************************************************************************************** */

$(document).ready(function(){
	let parsedDATA = JSON.parse(localStorage.getItem("data"));
    const ul = document.querySelector('#ul-post-data');
	const li = document.createElement("li");
	let storageDATA = `Username: ${parsedDATA["username"]}
	Title: ${parsedDATA["title"]}
	Content: ${parsedDATA["content"]}`;
	li.textContent = storageDATA;
	ul.appendChild(li);
});
