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
                    <select name="salute${i}" id="salute${i}">
                        <option value="select">Please Select...</option>
                        <option value="Mr">Mr</option>
                        <option value="Dr">Dr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Er">Er</option>
                    </select>
                </div>

                <div class="input-field">
                        <label for="dfname${i}">Delegate First name:</label>
                        <input type="text" id="dfname${i}" name="dfname${i}" placeholder="Delegate First Name" required>
                </div>

                <div class="input-field">
                    <label for="dlname${i}">Delegate Last name:</label>
                    <input type="text" id="dlname${i}" name="dlname${i}" placeholder="Delegate Last Name" required>
                </div>

                <div class="input-field">
                    <label for="demail${i}">Delegate Email:</label>
                    <input type="email" id="demail${i}" name="demail${i}" placeholder="Enter Email" required>
                </div>

                <div class="input-field">
                    <label for="dtelephone${i}">Delegate Telephone:</label>
                    <input type="Number" id="dtelephone${i}" name="dtelephone${i}" placeholder="Enter Telephone number" required>
                </div>

                <div class="input-field">
                    <label for="djob${i}">Delegate Job Title:</label>
                    <input type="text" id="djob${i}" name="djob${i}" placeholder="Enter Job Title" required>
                </div>

                <div class="input-field">
                    <label for="dpass${i}">Delegate Passport Number :</label>
                    <input type="text" id="dpass${i}" name="dpass${i}" placeholder="Enter your Passport Number" required>
                </div>
            </div>

            <dive class="product">
                <h2>PRODUCT AND FEES</h2>
                <table style="width:100%">

                    <tr>
                        <td style="width:2%">
                            <input type="checkbox" id="myCheck1-${i}" value="5900" onchange="myFunction(this.id)">
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
                            <input type="checkbox" id="myCheck2-${i}" value="5100" onchange="myFunction(this.id)">
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
                            <input type="checkbox" id="myCheck3-${i}" value="1858" onchange="myFunction(this.id)">
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
                            <input type="checkbox" id="myCheck4-${i}" value="1485" onchange="myFunction(this.id)">
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
                            <input type="checkbox" id="myCheck5-${i}" value="1100" onchange="myFunction(this.id)">
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
