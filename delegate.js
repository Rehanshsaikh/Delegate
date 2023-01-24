var ch=0;

function buttondelchange() {
    document.getElementById("submit").style.display = "block"
    var x = document.getElementById("Container1");
    if(x.style.display === "none"){
      x.style.display = "block";
    }else{
      x.style.display = "none";
    }
}


function radiochange(){
    var x = document.getElementById("Container3");
    if(x.style.display === "none"){
      x.style.display = "block";
    }
}


function radiochangeno(){
    var x = document.getElementById("Container3");
    if(x.style.display === "block"){
        x.style.display = "none";
    }
}


function displaytotal(){
    var x = document.getElementById("Container");
    if(x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}


function myFunction(res) {
    console.log(res);
    if(document.getElementById(res).checked==true){
        ch = ch + parseInt(document.getElementById(res).value);

    }else if(document.getElementById(res).checked==false){
        ch = ch - parseInt(document.getElementById(res).value);
        
    }else{
        ch= 0;
    }
    document.getElementById("total").innerHTML =ch;
}


function repeat(){
    document.getElementById("GrandTotal").style.display = "block";
    document.getElementById("next").style.display = "block";
    var a= document.getElementById("delegate").value;
    console.log(a);
    document.getElementById("Repeat").innerHTML = ``;
        for(let i =1; i<=a; i++){
            document.getElementById("Repeat").innerHTML += `<h2>DELEGATE - REGISTRATION DETAILS - ${i}</h2>
            <h3 style="font-size: 20px;">Please enter the details of the delegate that you wish to register</h3>
            <div class="fields">

                <div class="input-field">
                    <label class="DSalutation" for="Salutations${i}">Salutation</label>
                    <select class="loop${i}" name="salute${i}" id="salute${i}">
                        <option value="select">Please Select...</option>
                        <option value="Mr">Mr</option>
                        <option value="Dr">Dr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Er">Er</option>
                    </select>
                </div>

                <div class="input-field">
                        <label for="dfname${i}">Delegate First name:</label>
                        <input class="loop${i}" type="text" id="dfname${i}" name="dfname${i}" placeholder="Delegate First Name" required>
                </div>

                <div class="input-field">
                    <label for="dlname${i}">Delegate Last name:</label>
                    <input class="loop${i}" type="text" id="dlname${i}" name="dlname${i}" placeholder="Delegate Last Name" required>
                </div>

                <div class="input-field">
                    <label for="demail${i}">Delegate Email:</label>
                    <input class="loop${i}" type="email" id="demail${i}" name="demail${i}" placeholder="Enter Email" required>
                </div>

                <div class="input-field">
                    <label for="dtelephone${i}">Delegate Telephone:</label>
                    <input class="loop${i}" type="Number" id="dtelephone${i}" name="dtelephone${i}" placeholder="Enter Telephone number" required>
                </div>

                <div class="input-field">
                    <label for="djob${i}">Delegate Job Title:</label>
                    <input class="loop${i}" type="text" id="djob${i}" name="djob${i}" placeholder="Enter Job Title" required>
                </div>

                <div class="input-field">
                    <label for="dpass${i}">Delegate Passport Number :</label>
                    <input class="loop${i}" type="text" id="dpass${i}" name="dpass${i}" placeholder="Enter your Passport Number" required>
                </div>
            </div>

            <dive class="product">
                <h2>PRODUCT AND FEES</h2>
                <table style="width:100%">

                    <tr>
                        <td style="width:2%">
                            <input class="check${i}" type="checkbox" id="myCheck1-${i}" value="5900" onchange="myFunction(this.id)">
                        </td>
                        <td style="width:70%">
                            All Access (Delegate)
                        </td>
                        <td >
                            USD 5900
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input class="check${i}" type="checkbox" id="myCheck2-${i}" value="5100" onchange="myFunction(this.id)">
                        </td>
                        <td>
                            Strategic Conference (Delegate)
                        </td>
                        <td>
                            USD 5100
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input class="check${i}" type="checkbox" id="myCheck3-${i}" value="1858" onchange="myFunction(this.id)">
                        </td>
                        <td>
                            Technical Conference Pass - 4 days (Delegate)
                        </td>
                        <td>
                            USD 1858
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input class="check${i}" type="checkbox" id="myCheck4-${i}" value="1485" onchange="myFunction(this.id)">
                        </td>
                        <td>
                            Technical Conference Pass - 2 days (Delegate)
                        </td>
                        <td>
                            USD 1485
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input class="check${i}" type="checkbox" id="myCheck5-${i}" value="1100" onchange="myFunction(this.id)">
                        </td>
                        <td>
                            Downstream Technical Conference Pass (Delegate)
                        </td>
                        <td>
                            USD 1100
                        </td>
                    </tr>
                </table>
            </dive>`
        }
}

function add(){
    let comp = Array.from(document.querySelectorAll(".company"))
    document.getElementById("display").style.display = "block"
    document.getElementById("add").innerHTML += `
                                                <tr>
                                                    <td>${comp[0].value}</td>
                                                    <td>${comp[1].value}</td>
                                                    <td>${comp[2].value}</td>
                                                    <td>${comp[3].value}</td>
                                                    <td>${comp[4].value}</td>
                                                    <td>${comp[5].value}</td>
                                                </tr>`

    let billing = Array.from(document.querySelectorAll(".billing"))
    document.getElementById("add1").innerHTML += `<tr>
                                                    <td>${billing[0].value}</td>
                                                    <td>${billing[1].value}</td>
                                                    <td>${billing[2].value}</td>
                                                    <td>${billing[3].value}</td>
                                                    <td>${billing[4].value}</td>
                                                </tr>`
    let loop = document.getElementById("delegate").value 
    let total = 0
    for(let i = 1; i<=loop; i++){                                           
        let del = Array.from(document.getElementsByClassName("loop"+i))
        document.getElementById("add2").innerHTML += `<tr>
                                                        <td>${i}</td>
                                                        <td>${del[0].value}</td>
                                                        <td>${del[1].value}</td>
                                                        <td>${del[2].value}</td>
                                                        <td>${del[3].value}</td>
                                                        <td>${del[4].value}</td>
                                                        <td>${del[5].value}</td>
                                                        <td>${del[6].value}</td>
                                                      </tr>` 
        let product = Array.from(document.getElementsByClassName("check"+i))
        for(let prod of product){
            if(prod.checked == true){
                document.getElementById("add3").innerHTML += `<tr>
                                                                <td>${prod.parentElement.nextElementSibling.innerHTML}</td>
                                                                <td>${prod.value}</td>
                                                              </tr>`
                                                              total += Number(prod.value)
            }
            
        }
         
    }
    document.getElementById("add3").innerHTML += `<tr>
                                                    <td>Total</td>
                                                    <td>${total}</td>
                                                 </tr>`
        
}
