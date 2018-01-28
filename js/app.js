window.addEventListener("load", function () {
    console.log("Hello World!");
});



$(document).on('pageinit', '#deshboard', function (event) {
    console.log("assis");
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
});
$(document).on('pageinit', '#radioDetails', function (event) {
    console.log("assis");
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
});



$(document).on("pageshow", "#deshboard", function () { // When entering pagetwo
    var radioList =
{
    "radio": [
     {
         "name": "Bangladesh Betar",
         "station": "http://108.178.13.122:8081/;",
         "icon": "bangladesh_betar.png"
     },
      {
          "name": "Radio Dhaka",
          "station": "http://118.179.219.243:8000/;",
          "icon": "radio_dhaka.jpg"
      },
      {
          "name": "ABC Radio",
          "station": "http://184.107.144.218:8282/;",
          "icon": "radio_abc.png"
      },
      {
          "name": "Radio Aamar",
          "station": "http://192.184.9.158:8343/live?type=.mp3/;stream.mp3/;",
          "icon": "rradio_amar.png"
      },

      {
          "name": "Radio Shadhin",
          "station": "http://184.107.144.218:8240/;",
          "icon": "radio_sadhin.png"
      },
      {
          "name": "Dhaka FM",
          "station": "http://118.179.219.244:8000/;",
          "icon": "dhaka_fm.png"
      },
      {
          "name": "Radio Foorti",
          "station": "http://114.130.45.114:1021/;stream.mp3&title=Live/;",
          "icon": "radio_foortie.jpg"
      },
      {
          "name": "Radio Lemon24",
          "station": "http://office.mcc.com.bd:8000/;",
          "icon": "radio_lamon.jpg"
      },
      {
          "name": "Radio Apon",
          "station": "http://sodeshsoft.com/cast/tunein.php/radioapo/playlist.asx/;",
          "icon": "radio_apon.png"
      },
      {
          "name": "Radio GoonGooon",
          "station": "http://184.107.144.218:8040/;",
          "icon": "radio_goongoon.png"
      },
      {
          "name": "Radio Bornomala",
          "station": "http://192.99.147.218:8005/;",
          "icon": "radio_bornomala.png"
      },
      {
          "name": "Aktara Bangla",
          "station": "http://50.7.98.106:8520/;",
          "icon": "radio_ektara.png"
      },
      {
          "name": "Radio BD24",
          "station": "http://108.178.13.122:8081/;",
          "icon": "radio_bd24.png"
      },
      {
          "name": "Bangla Radio24",
          "station": "http://live.banglaradio24.com:8237/;",
          "icon": "radio_24.png"
      },
      {
          "name": "Radio Tolpar",
          "station": "http://neon.wavestreamer.com:6129/;",
          "icon": "radio_tolpar.png"
      },
      {
          "name": "Radio Dream 24",
          "station": "http://5.63.151.52:8049/;",
          "icon": "radio_dream.jpg"
      },
      {
          "name": "Radio Hoichoi",
          "station": "http://184.173.203.245:7019/;",
          "icon": "radio_hoichoi.jpg"
      },
      {
          "name": "Radio Love Bangla",
          "station": "http://184.173.203.245:8015/;",
          "icon": "radio_love_bangla.jpg"
      },
      {
          "name": "Radio Moinamoti",
          "station": "http://184.172.165.195:7011/;",
          "icon": "radio_moinamoti.png"
      }
   ]
};
    function bindList() {
        var li = "";
        for (var i = 0; i < radioList.radio.length; i++) {
            li += '<li id="radioSelect"><a href="#prayerTime" data-transition="flip"><img class="radio-icon" src="images/radio/' + radioList.radio[i].icon + '" /><h1 class="list-p">' + radioList.radio[i].name + '</h1></a></li>';
        }

        $("#deshboard #radioList").html("");
        $("#deshboard #radioList").append(li).listview('refresh');
    }
    bindList();
    $('#deshboard #radioList').on('click', ' > li', function () {
        var selected_index = $(this).index();
        console.log(selected_index);
        console.log(radioList.radio[selected_index].station);
        localStorage.setItem("radioLink", radioList.radio[selected_index].station);
        localStorage.setItem("radioName", radioList.radio[selected_index].name);
        $.mobile.changePage("#radioDetails");
    });
    console.log("Assi");

});

$(document).on("pageshow", "#radioDetails", function () {
    console.log(localStorage.getItem("radioLink"));
    $('#playRadio').attr("src", localStorage.getItem("radioLink"));
    $("#radioTitle").html("");
    $("#radioTitle").html(localStorage.getItem("radioName"));
    Toast("It require internet to load.It may need to click pause button first then click pay button.It may also need to take a couple of time to run please wait for few time");
    function Toast(msg) {
        $("<div class='ui-loader ui-overlay-shadow ui-body-b ui-corner-all'><h1>" + msg + "</h1></div>").css({ "text-align": "center", "font-size": "8px", "width": "256px", "background": "#000", "color": "white", "display": "block", "opacity": 0.96, "margin-top": "-10px", "margin-left": "-130px", "white-space": "normal" }).appendTo($.mobile.pageContainer).delay(5000).fadeOut(400, function () { $(this).remove(); });
    }
    $("#imgOn").on("click", function () {

        var img = $("#imgAudio");
        //console.log(img.attr("src"));
        if (img.attr("src").indexOf("radio_off") >= 0) {
            img.attr("src", "images/radio_on.gif");
            //console.log(audio.attr("src"));
            $('#playRadio').trigger("play");

            //  audio.play();
        }
        $("#imgOn").attr("src", "images/play.png");
        $("#imgOff").attr("src", "images/pause_hover.png");
        //  $('#playRadio').trigger("play");
    });
    $("#imgOff").on("click", function () {

        var img = $("#imgAudio");
        //console.log(img.attr("src"));
        if (img.attr("src").indexOf("radio_on") >= 0) {
            console.log("Source " + $('#playRadio').attr("src"));
            img.attr("src", "images/radio_off.png");
            $('#playRadio').trigger("pause");
        }
        $("#imgOn").attr("src", "images/play_hover.png");
        $("#imgOff").attr("src", "images/pause.png");
    });
    $("#stationBack").on("click", function () {
        $("#imgOn").attr("src", "images/play_hover.png");
        $("#imgOff").attr("src", "images/pause.png");

        $('#playRadio').attr("src", "");
        localStorage.removeItem("radioLink");
        localStorage.removeItem("radioName");
        $.mobile.changePage('#deshboard', { changeHash: false });

    });

});





