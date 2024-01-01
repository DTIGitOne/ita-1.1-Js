
let sendButton2 = document.getElementById("sendButton2");
const checkIdId = document.getElementById("checkIdId");
let right = document.getElementById("right");

let idRegex = /^[0-9]{3}[a-zA-Z]\w+[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/gi;

sendButton2.onmouseover = function() {
   sendButton2.className = "ButtonHover";
}

sendButton2.onmouseleave = function() {
   sendButton2.className = "sendButton";
}

sendButton2.addEventListener('click' , function() {

   if (checkIdId.value !== "") {
      
      if (checkIdId.value.match(idRegex)) {
                     let userIdCreated = document.createElement("div");
                     userIdCreated.innerHTML = "User Id Verification successfull";
                     userIdCreated.className = "userIdCreated";
                     right.append(userIdCreated);
      } else {
         verifyError.innerHTML = "Wrong Id please try again";
         checkIdId.addEventListener('input' , function() {
            verifyError.innerHTML = "";
         }
         );
      }


   } else {
   verifyError.innerHTML = "Please enter your id";

   checkIdId.addEventListener('input' , function() {
      verifyError.innerHTML = "";
   }
   );
   }
}
);

