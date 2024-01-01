let NameFillIn = document.getElementById("NameFillIn");
let SurnameFillIn = document.getElementById("SurnameFillIn");
let emailFillIn = document.getElementById("emailFillIn");
let date1 = document.getElementById("date1");
let sendButton = document.getElementById("sendButton");

let right = document.getElementById("right");
let tableDate = document.getElementById("tableDate");
let thead1 = document.getElementById("thead1");
let tableDateBody = document.getElementById("tableDateBody");

let nameRegex = /^[A-za-z]{2,25}$/gi;
let surnameRegex = /^[A-za-z]{2,25}$/gi;
let emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/gi;

let NameError = document.getElementById("NameError");
let surnameError = document.getElementById("surnameError");
let emailError = document.getElementById("emailError");
let verifyError = document.getElementById("verifyError");

let userFillIn = document.getElementById("userFillIn");


sendButton.onmouseover = function() {
   sendButton.className = "ButtonHover";
}

sendButton.onmouseleave = function() {
   sendButton.className = "sendButton";
}

sendButton.addEventListener('click' , function () {

   if (NameFillIn.value , SurnameFillIn.value , emailFillIn.value , date1.value === "") {
      
      NameError.innerHTML = "Please enter your details in order to continue";
      sendButton.addEventListener('input' , function() {
         NameError.innerHTML = "";
      }
      );

   } else {
      if (NameFillIn.value.match(nameRegex)) {
        
         if (SurnameFillIn.value.match(surnameRegex)) {

            if (emailFillIn.value.match(emailRegex)) {

               tableDate.className = "tableDate";
               

               let row1 = document.createElement("tr");
               tableDateBody.append(row1);
               
               for (i=0 ; i < 1 ; i++) {
                  let data1 = document.createElement("td");
                  data1.innerHTML = NameFillIn.value;
                  data1.className = "tableDate";
                  row1.append(data1); 
                  
                  let data2 = document.createElement("td");
                  data2.innerHTML = SurnameFillIn.value;
                  data2.className = "tableDate";
                  row1.append(data2);

                  let data3 = document.createElement("td");
                  data3.innerHTML = emailFillIn.value;
                  data3.className = "tableDate";
                  row1.append(data3);

                  let data4 = document.createElement("td");
                  data4.innerHTML = date1.value;
                  data4.className = "tableDate";
                  row1.append(data4);
                  
                  const getRow1 = document.getElementsByTagName("tr");
         
                  const x = document.querySelectorAll("td.tableDate");

                  let data1String = data1.innerHTML;
                 
                  
                  let data2String = data2.innerHTML;
                 

                  let data3String = data3.innerHTML;
                  

                  let data4String = data4.innerHTML;
                  
                  
                  if (data1String , data2String , data3String , data4String ) {
                     let ide = new Date();
                      let id1 = ide.getMilliseconds();

                       let id2 = NameFillIn.value;

                        let id3 = date1.value;

                         let userId = id1 + "" + id2 + "" + id3;
                  
                         let userInfo = [userId , data1String , data2String , data3String , data4String];
                  
                  if (userInfo) {
                     let idCopy = document.createElement("div");
                     idCopy.innerHTML = "Your  id  is" + "  >  " + userId;
                     idCopy.className = "idCopy";
                     right.prepend(idCopy);
   
                     let userIdCreated = document.createElement("div");
                     userIdCreated.innerHTML = "User id successfully created";
                     userIdCreated.className = "userIdCreated";
                     right.prepend(userIdCreated);
                  }
                  
                  

                  }
                  
                  
               }
                                
               NameFillIn.value = "";
               SurnameFillIn.value = "";
               emailFillIn.value = "";
               date1.value = "";

            } else {
               emailError.innerHTML = "Please make sure that your email is right";
               emailFillIn.addEventListener('input' , function() {
                  emailError.innerHTML = "";
               }
               );
            }

         } else {
           surnameError.innerHTML = "Surname can only contain normal characters (2 to 25)";
           SurnameFillIn.addEventListener('input' , function() {
              surnameError.innerHTML = "";
           }
           );
         }
  
      } else {
        NameError.innerHTML = "Name can only contain normal characters (2 to 25)";
        NameFillIn.addEventListener('input' , function(){
        NameError.innerHTML = "";
        }
        );
      }
   }
                  
}
);