

    var numberPattern = /\d{13}/g;
    var listOfElements = document.body.getElementsByTagName("*");
//$.ajax().always(function () {

    for (var j = 0; j < listOfElements.length; j++) {
        var list = listOfElements[j].innerHTML.match(numberPattern);
        var dom = listOfElements[j].innerHTML;
        if (list != null) {
            for (var i = 0; i < list.length; i++) {
                var date = new Date(list[i] * 1);
                dom = dom.replace(list[i], date);
            }
        }
        listOfElements[j].innerHTML = dom;
    }
//});


