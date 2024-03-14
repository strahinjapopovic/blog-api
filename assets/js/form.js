/* JavaScript Document */
/* =============================================================
 	First Name			: 	Strahinja     					    
 	Last Name			: 	Popovic					            
 	Developer Name      : 	CodexDeveloper			        
 	WebMaster Email		:	spope.mails@gmail.com               
 ============================================================== */

/* ***************************************************************************************** */
/* JavaScript CODE ************************************************************************* */
/* ***************************************************************************************** */
	const SUBMIT_POST_BTN = document.querySelector("#submit-btn");

	SUBMIT_POST_BTN.addEventListener("click", function(e) {
			e.preventDefault();

			let DATA = {
					username: document.querySelector("#userName").value,
					title: document.querySelector("#title").value,
					content: document.querySelector("#content").value
				};
				localStorage.setItem("data", JSON.stringify(DATA));
				let parsedDATA = JSON.parse(localStorage.getItem("data"));

				if(JSON.parse(localStorage.getItem("data"))["username"] == "" || 
				JSON.parse(localStorage.getItem("data"))["title"] == "" || 
				JSON.parse(localStorage.getItem("data"))["content"] == ""){

					const errorMessageParagraph = document.querySelector("#errorMessage");
					const spanElementCheck = document.querySelector("error");
					const error = document.createElement("error");
					error.textContent= "Error Message: Insert all required fields (*)...";
					if(!spanElementCheck){
						errorMessageParagraph.appendChild(error);
					}
				}
				else{
					console.log(`Username: ${parsedDATA["username"]}\nTitle: ${parsedDATA["title"]}\nContent: ${parsedDATA["content"]}`);
					window.location.assign("https://strahinjapopovic.github.io/blog-api/blog.html");
				}
		});
			
			
			
			


