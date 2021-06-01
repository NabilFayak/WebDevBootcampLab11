function fortune() {
    var children = window.prompt("How many children do you want?")
    var partner = window.prompt("What's you partner's name?")
    var location = window.prompt("What's your ideal place to live?")
    var job = window.prompt("What job do you want?")
    document.getElementById("demo").innerHTML = "You will have " + children + " children while married to " + partner + ". Your family will live happily in " + location + " and you will work as a " + job + ".";
}