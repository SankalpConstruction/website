function sendTowhatsapp(){
    let number = "+919850329022";
    let name = document.getElementById('name').value;
    let city = document.getElementById('city').value;
    let message = document.getElementById('message').value;

    var url ="https://wa.me/" + number + "?text="
    + "Name : " +name+ "%0a" + "From " +city+ "%0a"
    + "Message : " +message+ "%0a%0a";

    window.open(url, '_blank').focus();
}