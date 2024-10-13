
function submit(){
    
    const fname = document.getElementById("first_name").value.trim();
    const errocamp1 = document.getElementById("erro_camp1");

    const lname = document.getElementById("last_name").value.trim();
    const errocamp2 = document.getElementById("erro_camp2");

    const e_mail = document.getElementById("email").value.trim();
    const erroemail = document.getElementById("erro_email");

    const mensagem = document.getElementById("message").value.trim();
    const erromessage = document.getElementById("erro_message");





    errocamp1.innerHTML = ""
    document.getElementById("first_name").style.border = ""

    errocamp2.innerHTML = ""
    document.getElementById("last_name").style.border = ""

    erroemail.innerHTML = ""
    document.getElementById("email").style.border = ""

    erromessage.innerHTML = ""
    document.getElementById("message").style.border = ""





    if (fname === ""){
        const novoParagrafo = document.createElement("p");
        const conteudoTexto = document.createTextNode("First Name Is Missing");
        novoParagrafo.style.color = "red";
        novoParagrafo.appendChild(conteudoTexto);
        errocamp1.appendChild(novoParagrafo);
        document.getElementById("first_name").style.border = "1px solid red";
    }  




    if (lname === ""){
        const novoParagrafo = document.createElement("p");
        const conteudoTexto = document.createTextNode("Last Name Is Missing");
        novoParagrafo.style.color = "red";
        novoParagrafo.appendChild(conteudoTexto);
        errocamp2.appendChild(novoParagrafo);
        document.getElementById("last_name").style.border = "1px solid red";
    }  

    if (e_mail === ""){
        const novoParagrafo = document.createElement("p");
        const conteudoTexto = document.createTextNode("Email Is Missing");
        novoParagrafo.style.color = "red";
        novoParagrafo.appendChild(conteudoTexto);
        erroemail.appendChild(novoParagrafo);
        document.getElementById("email").style.border = "1px solid red";
    }  

    if (mensagem === ""){
        const novoParagrafo = document.createElement("p");
        const conteudoTexto = document.createTextNode("Message Is Missing");
        novoParagrafo.style.color = "red";
        novoParagrafo.appendChild(conteudoTexto);
        erromessage.appendChild(novoParagrafo);
        document.getElementById("message").style.border = "1px solid red";
    }  



}