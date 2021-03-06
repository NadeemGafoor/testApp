var propertygeo = [];
var airporttype = "";
var newsearch="";
function SearchPage() {
   
    preLogin.listAirport();
}

function FacebookErr() {
    navigator.notification.alert("Please make sure that you have installed the Facebook Mobile app on your smartphone.", function () {
    }, "SNTTA Travel", "Dismiss");
}
function hideSpin() {
    window.setTimeout(function () {
        $("#mvwait").data("kendoMobileModalView").close();
    }, 1000);
}

function showSpin() {
    if (!checkConnectionBool()) {
        navigator.notification.alert("Network weak or unavailable. Please check your network connection and try again.", function () {
        }, "SNTTA Travel", "Dismiss");
        //        //$("body").data().kendoMobilePane.navigate("views/nonetwork.html");  
    } else {
        $("#mvwait").data("kendoMobileModalView").open();
    }
}

function showOutletMessage() {
    navigator.notification.alert("Please check the Reward's location details under the Bars & Dining or Leisure tab.", function () {
    }, "SNTTA Travel", "Dismiss");
}
function showConfirm() {
    navigator.notification.confirm(
        'Please enrol or login to activate this reward.', // message
        onConfirm, // callback to invoke with index of button pressed
        'SNTTA Travel', // title
        'Login,Enrol'          // buttonLabels
    );
}

function onConfirm(buttonIndex) {
    if (buttonIndex === 1) {
        loadLogin();
    } else if (buttonIndex === 2) {
        loadEnrol();
    }
}

function loadDiscover() {
    window.setTimeout(window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/discoverlist.html'
    }), 500);
}

function loadExplore() {
    window.setTimeout(window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/explorelist.html'
    }), 500);
}

function loadBenefits() {
    window.setTimeout(window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/benefitdetail.html'
    }), 500);
}

function loadRewards() {
    window.setTimeout(window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/offerlist.html'
    }), 500);
}


function loadLogin() {
    $("body").data("kendoMobilePane").navigate("views/login.html");
}

function loadEnrol() {
    $("body").data("kendoMobilePane").navigate("views/enrol.html");
}

function faceBookClick() {
    window.plugins.socialsharing.shareViaFacebook(window.localStorage.getItem("static_social_msg") + "\n\n" + window.localStorage.getItem("social_telephone") + "\n" + window.localStorage.getItem("social_email"), ["https://haalmeer.ddns.net:8089/HaalMeerMobile/images/large_logo_placeholder.png"], window.localStorage.getItem("appad_location"), function () {
    }, function (errormsg) {
        navigator.notification.alert("Unable to complete the Facebook request due to the request cancelled by user or Facebook is not installed . Please check and re-try.", function () {
        }, "SNTTA Travel", "Dismiss");
    });
}

function twitterClick() {
    var m = window.localStorage.getItem("social_shortmsg");
    window.plugins.socialsharing.shareViaTwitter("I’m looking at " + window.localStorage.getItem("social_email_message") + " on my SNTTA Travel Mobile App! Join the fun and download now " + window.localStorage.getItem("appad_location"), ["http://inc38.ddns.net:8095/HaalMeerMobile/images/large_logo_placeholder.png"], null, function () {
    }, function (errormsg) {
        navigator.notification.alert("Unable to complete the Twitter request due to the request cancelled by user or Twitter is not installed. Please check and re-try.", function () {
        }, "SNTTA Travel", "Dismiss");
    });
}

function whatsappClick() {
    window.plugins.socialsharing.shareViaWhatsApp("I’m looking at " + window.localStorage.getItem("social_email_message") + " on my SNTTA Travel Mobile App!  It’s SNTTA at your fingertips! \n\n" + "Join the fun and download the SNTTA Travel Mobile App today at " + window.localStorage.getItem("appad_location"), "", "", function () {
    }, function (errormsg) {
        navigator.notification.alert(JSON.stringify(errormsg), function () {
        }, "SNTTA Travel", "Dismiss");
    });
}

function emailClick() {
    window.plugins.socialsharing.shareViaEmail(
        "<pre>I'm looking at " + window.localStorage.getItem("social_email_message") + " on my <i>SNTTA Travel</i> Mobile App!  It's SNTTA at your finger tips!\n\n" + "Join the fun and download the <i>SNTTA Travel</i> Mobile App today at " + window.localStorage.getItem("appad_location") + "</pre>",
        window.localStorage.getItem("social_email_subject"), null, null, null, // TO: must be null or an array
        null, // FILES: can be null, a string, or an array
        function (msg) {
        }, // called when sharing worked, but also when the user cancelled sharing via email (I've found no way to detect the difference)
        function (msg) {
            navigator.notification.alert("Unable to complete the email request due to the request cancelled by user or email is not installed. Please check and re-try.", function () {
            }, "SNTTA Travel", "Dismiss");
        } // called when sh*t hits the fan
    );
}

function getLocation5() {
    $("#modalviewmap").data("kendoMobileModalView").open();
    document.getElementById("map_canvas1").style.backgroundColor = "#e9e5dc";
    // for (i=0;i <= 5;i++) {
    document.getElementById("map_canvas1").innerHTML = "";
    mapInitialize();
    // }
}

function getLocation6() {
    $("#modalviewmapA").data("kendoMobileModalView").open();
    document.getElementById("map_canvas2").style.backgroundColor = "#e9e5dc";
    //  for (i=0;i <= 5;i++) {
    document.getElementById("map_canvas2").innerHTML = "";
    mapInitializeA();
    //   }
}

function captureCity(e) {
 
    var data = e.button.data();
    
    if (airporttype=="oo"){
        newsearch="1";//Dont clear origin/destination when loading the search page       
        window.localStorage.setItem("origin",data.id);
        window.localStorage.setItem("origindes",data.desc);
    } else if (airporttype=="od"){
        newsearch="1";//Dont clear origin/destination when loading the search page
       window.localStorage.setItem("destination",data.id);
       window.localStorage.setItem("destinationdes",data.desc);
    }
        $("body").data("kendoMobilePane").navigate("views/home.html");

}


function openAirportList(e) {
    var data = e.button.data();
    airporttype = data.id;
        window.setTimeout(window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/airportlist.html'
    }), 500);
}

function mapInitialize() {
    lat = window.localStorage.getItem("lat");
    lon = window.localStorage.getItem("lon");

    var latlng = new google.maps.LatLng(
        lat,
        lon);
    var mapOptions = {
        sensor: true,
        center: latlng,
        panControl: false,
        zoomControl: true,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        mapTypeControl: true,
    };

    var map = new google.maps.Map(
        document.getElementById("map_canvas1"),
        mapOptions
    );
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
    markers.push(marker);
    marker.setMap(map);
    marker.setVisible(true);
    map.setCenter(marker.position);
    google.maps.event.trigger(map, 'resize');
}

function mapInitializeA() {
    lat = window.localStorage.getItem("lat");
    lon = window.localStorage.getItem("lon");

    var latlng = new google.maps.LatLng(
        lat,
        lon);
    var myOptions = {
        sensor: true,
        center: latlng,
        panControl: false,
        zoomControl: true,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        mapTypeControl: true,
    };

    var map = new google.maps.Map(document.getElementById("map_canvas2"),
        myOptions);

    var marker, i

    for (i = 0; i < propertygeo.length; i++) {
        var spropertygeo = propertygeo[i].split("#");
        var lat = spropertygeo[1]
        var long = spropertygeo[2]
        var add = spropertygeo[0]
        latlngset = new google.maps.LatLng(lat, long);
        marker = new google.maps.Marker({
            map: map, position: latlngset
        });

        map.setCenter(marker.getPosition())

        var content = add

        var infowindow = new google.maps.InfoWindow()

        google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
            return function () {
                infowindow.setContent(content);
                infowindow.open(map, marker);
            };
        })(marker, content, infowindow));
    }
}

function onSelectTabStrip2(e) {
    var i = $(e.item).index();
    if (i === 0) {
        getLocation5();
    } else if (i === 1) {
        supportEmailA();
    } else if (i === 2) {
        customerCareOutlet();
    }
}

function onSelectTabStrip3(e) {
    var i = $(e.item).index();
    if (i === 0) {
        getLocation5();
    } else if (i === 1) {
        supportEmailA();
    } else if (i === 2) {
        customerCare();
    }
}

function onSelectTabStrip1(e) {
    var i = $(e.item).index();
    if (i === 0) {
        supportEmailA();
    } else if (i === 1) {
        customerCare();
    }
}

function supportEmailA() {
    window.plugins.socialsharing.shareViaEmail(
        "\n\n" + window.localStorage.getItem("social_telephone") + "\n" + window.localStorage.getItem("social_email"),
        "SNTTA Travel", [window.localStorage.getItem("social_email")], null, null, // TO: must be null or an array
        window.localStorage.getItem("share_image"), // FILES: can be null, a string, or an array
        function (msg) {
        }, // called when sharing worked, but also when the user cancelled sharing via email (I've found no way to detect the difference)
        function (msg) {
        } // called when sh*t hits the fan
    );
}

function customerCare() {
    //alert("HERE");
    window.open('email:80076882');
}

function customerCareOutlet() {
    window.open("tel:" + window.localStorage.getItem("social_telephone"));
}

function offerMessage() {
    navigator.notification.alert("To view offer details please select All Offers from the menu", function () {
    }, "SNTTA Travel", "Dismiss")
}

function outletMessage() {
    navigator.notification.alert("To view Branch details please select Branch List from the menu", function () {
    }, "SNTTA Travel", "Dismiss")
}

function closeSetPinForEnrollment() {
    $("#modalviewpin").data("kendoMobileModalView").close();
}

function closeAirportList() {
    $("#modalairportlist").data("kendoMobileModalView").close();
}


function resetPinForEnrollment() {
    $("#modalviewpin").data("kendoMobileModalView").close();
    //$("#modalviewrepin").data("kendoMobileModalView").open();
}

function loadFAQView() {
    $("#modalviewfaq").data("kendoMobileModalView").open();
}

function closeFAQView() {
    $("#modalviewfaq").data("kendoMobileModalView").close();
}

function enterPinForRedemption() {
    window.localStorage.setItem("selfredeem", "D");
    $("#modalviewenterpin").data("kendoMobileModalView").open();
}

function openEnterModalPassword() {
    $("#modalviewpassword").data("kendoMobileModalView").open();
}

function closeEnterModalPassword() {
    $("#modalviewpassword").data("kendoMobileModalView").close();
}

function closeEnterPinForRedemption() {
    $("#modalviewenterpin").data("kendoMobileModalView").close();
}

function closeStaffPinForRedemption() {
    $("#modalviewstaffpin").data("kendoMobileModalView").close();
}

function closeModalMap() {
    $("#modalviewmap").data("kendoMobileModalView").close();
}

function closeModalMapA() {
    $("#modalviewmapA").data("kendoMobileModalView").close();
}

function loadFilterView() {
    $("#modalviewfilter").data("kendoMobileModalView").open();
}

//function loadLocationView() {
//   $("#modalviewcountry").data("kendoMobileModalView").open();
//}

function loadCuisineView() {
    // window.setTimeout(function() { 
    $("#modalviewcuisine").data("kendoMobileModalView").open();
    //  }, 100); 
}

function loadOfferView() {
    $("#modalviewoffertype").data("kendoMobileModalView").open();
}

function loadTypeView() {
    //window.setTimeout(function() {   
    $("#modalviewtype").data("kendoMobileModalView").open();
    //}, 100);      
}

function offerFilterView() {
    window.localStorage.setItem("mcategory", "");
    $("#modalviewofferfilter").data("kendoMobileModalView").open();
}

function plofferFilterView() {
    window.localStorage.setItem("mcategory", "");
    $("#plmodalviewofferfilter").data("kendoMobileModalView").open();
}

function historyFilterView() {
    $("#modalviewhistoryfilter").data("kendoMobileModalView").open();
}

function closeHistoryFilterView() {
    $("#modalviewhistoryfilter").data("kendoMobileModalView").close();
}

function loadCeleberationTypeView() {
    $("#modalviewceleberationtype").data("kendoMobileModalView").open();
}

function shareClick() {
    $(".cardhead").slideUp("slow");
    elems = document.getElementsByClassName('foot');
    if (elems.length > 0) {
        for (i = 0; i < elems.length; i++) {
            elems[i].style.display = 'none';
        }
    }

    $(".sharehead").slideToggle("slow");

    elems = document.getElementsByClassName('sharehead');

    for (i = 0; i < elems.length; i++) {
        elems[i].style.zIndex = -1000;
    }

    elems = document.getElementsByClassName('mymenu1');

    for (i = 0; i < elems.length; i++) {
        elems[i].innerHTML = '<i class="fa fa-chevron-up fa-2x" style="color:#fff"></i>';

        elems[i].style.width = "100%";
        elems[i].style.zIndex = 10000;
        elems[i].style.textAlign = "center";
    }
}

function cardClick() {
    $(".sharehead").slideUp("slow");
    elems = document.getElementsByClassName('sharehead');
    if (elems.length > 0) {
        for (i = 0; i < elems.length; i++) {
            elems[i].style.display = 'none';
        }
    }

    elems = document.getElementsByClassName('foot');
    if (elems.length > 0) {
        for (i = 0; i < elems.length; i++) {
            elems[i].style.display = 'none';
        }
    }

    $(".cardhead").slideToggle("slow");
}

function homeClick() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/home.html'
    });
}

function plhomeClick() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/pl-explore.html'
    });
}

function loadExploreDetail() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/pl-branddetail.html'
    });
}

function loadMessageDetail() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/pl-messageitem.html'
    });
}

function loadHistoryDetail() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/pl-historyitem.html'
    });
}

function loadOfferDetail(e) {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/pl-offerdetail.html?cpn=' + e
    });
}

function loadOutletDetail() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/pl-outletdetail.html'
    });
}

function loadLeisureDetail() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70pppp

        'direction': 'up',
        'href': '#views/pl-outletdetail.html'
    });
}

function loadMyProfile() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/pl-myprofile.html'
    });
}

function loadMyBenefit() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/pl-benefitdetail.html'
    });
}

function loadMyMessages() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/pl-mymessagelist.html'
    });
}

function loadSetting() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/pl-setting.html'
    });
}

function loadHistory() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/pl-historylist.html'
    });
}

function loadFavorites() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/pl-favorites.html'
    });
}

function preLoginBack() {
    elems = document.getElementsByClassName('sharehead');
    for (i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
    }
}

function postLoginBack() {
    elems = document.getElementsByClassName('cardhead');
    for (i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
    }

    elems = document.getElementsByClassName('foot');
    for (i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
    }

    elems = document.getElementsByClassName('mymenu1');

    for (i = 0; i < elems.length; i++) {
        elems[i].innerHTML = '<i class="fa fa-chevron-up fa-2x" style="color:#fff"></i>';
        elems[i].style.width = "100%";
        elems[i].style.zIndex = 10000;
        elems[i].style.textAlign = "center";
    }

    $("body").data("kendoMobilePane").navigate("views/pl-explore.html");
    //$("body").data("kendoMobilePane").navigate("#:back");
}

function exploreListBack() {
    $("body").data("kendoMobilePane").navigate("views/pl-explorelist.html");
}

function brandDetailBack() {
    $("body").data("kendoMobilePane").navigate("views/pl-branddetail.html?od=" + window.localStorage.getItem("branda"));
}

function myrewardListBack() {
    $("body").data("kendoMobilePane").navigate("views/pl-myreward.html");
}

function outletListBack(e) {
    $("body").data("kendoMobilePane").navigate("views/pl-outletlist.html?brand=" + window.localStorage.getItem("brand") + "&category=" + window.localStorage.getItem("category"));
}

function offerListBack() {
    $("body").data("kendoMobilePane").navigate("views/pl-offerlist.html");
}

function messageListBack() {
    $("body").data("kendoMobilePane").navigate("views/pl-mymessagelist.html");
}

function hideBenefitDetail() {
    document.getElementById("benefit-detail-view").style.display = "none";
    document.getElementById("benefit-detail-view-1").style.display = "none";
}

function plhideOutletDetail() {
    document.getElementById("pl-outlet-detail-div").style.display = "none";
}

function plhideLeisureDetail() {
    document.getElementById("pl-outlet-detail-div").style.display = "none";
}

function plhideOfferDetail() {
    document.getElementById("pl-offer-detail-div").style.display = "none";
    document.getElementById("pl-offer-location-div").style.display = "none";
}

function hideLeisureDetail() {
    document.getElementById("outlet-detail-div").style.display = "none";
}

function postLoginBackMessage() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70
        'direction': 'right',
        'href': '#views/pl-mymessagelist.html'
    });
}

function postLoginBackMessage() {
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70
        'direction': 'right',
        'href': '#views/pl-historylist.html'
    });
}

function completeEnrollment() {
    $("#modalviewrepin").data("kendoMobileModalView").close();
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/confirmEnrollment.html'
    });
}

function completeRedemption() {
    $("#modalviewstaffpin").data("kendoMobileModalView").close();
    window.plugins.nativepagetransitions.slide({
        "duration": 500, // in milliseconds (ms), default 400
        "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 150, // same as above but for Android, default 70

        'direction': 'up',
        'href': '#views/pl-confirmRedemption.html'
    });
}

(function (global) {
    var positionOption = { maximumAge: 60000, timeout: 7000, enableHighAccuracy: false };
    var gpsErrorShow = "";
    var gpsErrorShowApp = "";
    var magicnumber = "";
    var googleapikey = "";
    var firsttime = "";
    var mdevice = "";
    var muuid = "";
    var mversion = "";
    var mdevicestat = "";
    var ctr = 0;
    var noalcohollist = [];

    //var gurl = "https://stg-isme.jumeirah.com/ismemobileportal";

    var gurl = "http://inc38.ddns.net:8095/HaalMeerMobile"
    //var gurl = "http://haalmeer.ddns.net:8089/HaalMeerMobile";
    var merchant = "SNTTA02001";
    var customer = "9999999999";
    var customername = "Guest";
    var formattedmobile = "";
    var displaybirthdate = "";
    var password = "";
    var segmentcode = "";
    var segmentname = "";
    var currency = "";
    var nationality = "";
    var pointvalue = "";
    var cuspict = "";
    var cusqr = "";
    var emailid = "";
    var mobilenumber = "";
    var memberexpiry = "";
    var segmentimage = "";
    var pushoffer = "";
    var remindexpiry = "";
    var showprofile = "";
    var firstname = "";
    var initdate = "";
    var lat = "";
    var lon = "";
    var city = "";
    var country = "";
    var geocity = "";
    var mcountry = "";
    var countryflag = "";
    var autolocation = "";
    var outletcode = "";
    var brandcode = "";
    var benefitcode = "";
    var homecountry = "";
    var birthdate = "";
    var residentcity = "";
    var pinnumber = "";
    var spend = 0;
    var maxspend = 0;
    var fbid = "";
    var showsummary = "";
    var m = [];
    var offertype = "1"; //prelogin ofer
    var offercode = ""; //All Offers default
    var couponnumber = "";
    var newimage = "";
    var uuid = "";
    var identifier = "";
    var major = "";
    var minor = "";
    var alcohol = "";
    var homecountryname = "";
    var residentcityname = "";
    var fullname = "";
    var appad_location = "www.haalmeer.com";
    var appad_location_short = "www.haalmeer.com";

    var share_image = "http://inc38.ddns.net:8095/HaalMeerMobile/images/large_logo_placeholder.png";
    var flag_image = "http://inc38.ddns.net:8095/HaalMeerMobile/flagimages/";


    var short_msg = "SNTTA Travel";
    var static_social_msg = "Make the most of your Travel experiences with SNTTA Travel App. Be more than a guest. Be different. Download the App now at https://www.haalmeer.com";
    var offertelephone = "80076882";
    var enrollmenttelephone = "80076882";
    var customercaretelephone = "80076882";
    var cardimage = "";
    var supportemail = "info@haalmeer.com";
    var emailsubject = "Let's meet here!";
    var emailsubjectoffer = "Check this offer on SNTTA Travel!";


    document.addEventListener('beaconsReceived', onBeaconsReceived, false);


    function doOneBackPre() {
        $(".sharehead").slideUp("slow");

        elems = document.getElementsByClassName('sharehead');

        for (i = 0; i < elems.length; i++) {
            elems[i].style.zIndex = -1000;
        }
    }

    function plhideOutletDetail() {
        doOneBackPre();
        document.getElementById("pl-outlet-detail-div").style.display = "none";
    }

    function plhideOfferDetail() {
        doOneBackPre();
        document.getElementById("pl-offer-detail-div").style.display = "none";
        document.getElementById("pl-offer-location-div").style.display = "none";
    }

    function plhideMyRewardDetail() {
        doOneBackPre();
        document.getElementById("wallet-voucher-div").style.display = "none";
        document.getElementById("myvoucher-location-div").style.display = "none";
    }

    function plhideBrandDetail() {
        doOneBackPre();
        document.getElementById("pl-property-detail-div").style.display = "none";
    }

    function hideOutletDetail() {
        doOneBackPre();
        document.getElementById("outlet-detail-div").style.display = "none";
    }

    function hideOfferDetail() {
        doOneBackPre();
        document.getElementById("offer-detail-div").style.display = "none";
        document.getElementById("offer-location-div").style.display = "none";
    }

    function hideBrandDetail() {
        doOneBackPre();
        document.getElementById("property-detail-div").style.display = "none";
    }




    // Define the callback function
    function onBeaconsReceived(result) {
        if (result.beacons.length > 0) {

            for (var m = 0; m < result.beacons.length; index++) {
                var beacon = result.beacons[m];
                if (beacon.distance > 0 && beacon.distance <= 0.1) {
                    $.ajax({
                        type: "POST",
                        cache: false,
                        async: true,
                        timeout: 20000,
                        url: gurl + "/beaconMessageBroadCast.aspx",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({
                            merchantcode: window.localStorage.getItem("merchant"), mdevice: window.localStorage.getItem("mdevicestat"), lat: lat, lon: lon, customer: window.localStorage.getItem("customer"), segment: beacon.name, major: beacon.major, minor: beacon.minor
                        }),
                        success: function (data) {
                            var getData = JSON.parse(data);
                            var i = 0;
                            if (getData.statuscode === "000") {
                                if (getData.beaconoffers.length > 0) {
                                    showTop(beacon.major + " " + beacon.minor + " Beacon Message Notified");
                                }
                            } else {
                                // showTop("Error Retrieving Beacon Message" + getData.statuscode + getData.statusdesc);
                            }
                        },
                        error: function (error) {
                        }
                    });

                }



            }
            hideSpin();
        }

    }


    function getFBUserExists() {
        $.ajax({
            type: "POST",
            cache: false,
            async: false,
            timeout: 20000,
            url: gurl + "/checkFBUserExist.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, mdevice: mdevicestat, fbuserid: window.localStorage.getItem("FBuserID")
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode != "000") {
                    window.localStorage.setItem("FBValidated", "N");
                } else {
                    window.localStorage.setItem("FBValidated", "Y");
                }
            },
            error: function (errormsg) {
                window.localStorage.setItem("FBValidated", "N");
                navigator.notification.alert("Your Facebook User ID could not be validated due to a system error. Please try again. " + errormsg.statusText, function () {
                }, "SNTTA Travel", "Dismiss");
            }
        });
    }

    function getFBUserData() {
        var graphPath = "me/?fields=id,email,first_name,last_name,gender,age_range,link,locale";
        facebookConnectPlugin.api(graphPath, ["public_profile"]["email"],
            function (response) {
                if (response.error) {
                    navigator.notification.alert("There is an error accessing Facebook account. " + response.error, function () {
                    }, "SNTTA Travel", "Dismiss");
                } else {
                    FBData = JSON.parse(JSON.stringify(response));
                    //alert(JSON.stringify(response));
                    window.localStorage.setItem("FBuserID", FBData.id);
                    window.localStorage.setItem("FBemail", FBData.email);
                    window.localStorage.setItem("FBFirstNme", FBData.first_name);
                    window.localStorage.setItem("FBLastName", FBData.last_name);
                    window.localStorage.setItem("FBGender", FBData.gender);
                    window.localStorage.setItem("FBValidated", "Y");
                    postLogin.set("firstname", FBData.first_name);
                    postLogin.set("lastname", FBData.last_name);
                    postLogin.set("emailid", FBData.email);
                    //check whether the ID exists

                    this.firstname.value = window.localStorage.getItem("FBFirstNme");
                    this.lastname.value = window.localStorage.getItem("FBLastName");
                    this.emailid.value = window.localStorage.getItem("FBemail");
                    mgender = window.localStorage.getItem("FBGender");
                    if (mgender == 'female') {
                        document.getElementById("selGender").value = "F";
                    } else if (mgender == 'male') {
                        document.getElementById("selGender").value = "M";
                    } else {
                        document.getElementById("selGender").value = "U";
                    }

                    navigator.notification.alert("You have been validated successfully with your Facebook account.  Please complete the missing details and continue with your subscription.", function () {
                    }, "SNTTA Travel", "Dismiss");
                }
            });
    }

    function fbCleanVariables() {
        window.localStorage.setItem("FBuserID", "");
        window.localStorage.setItem("FBAccessToken", "");
        window.localStorage.setItem("FBemail", "");
        window.localStorage.setItem("FBFirstNme", "");
        window.localStorage.setItem("FBLastName", "");
        window.localStorage.setItem("FBGender", "");
        window.localStorage.setItem("FBValidated", "");
    }

    function fbLogin() {
        facebookConnectPlugin.login(["public_profile"], function (response) { // do not retrieve the 'user_likes' permissions from FB as it will break the app 
            if (response.status === "connected") {
                m = JSON.parse(JSON.stringify(response));
                window.localStorage.setItem("FBuserID", m.authResponse.userID);
                window.localStorage.setItem("FBAccessToken", m.authResponse.accessToken);
                getFBUserData();
            } else {
                navigator.notification.alert("There is an error accessing Facebook account.  " + response.status, function () {
                }, "SNTTA Travel", "Dismiss");
            }
        });
    }

    function clearEnrolPage() {
        postLogin.set("firstname", "");
        postLogin.set("lastname", "");
        postLogin.set("emailid", "");
        this.firstname.value = "";
        this.lastname.value = "";
        this.emailid.value = "";
        this.emailida.value = "";
        this.mobile.value = "";
        this.siriusnumber.value = "";
        document.getElementById("selGender").value = "";
        document.getElementById("selEmirate").value = "";
        $("#enrol-tandc-accept").data("kendoMobileSwitch").check(false);
        fbCleanVariables();
    }

    function clearAllVariables() {
        window.localStorage.setItem("outlet", "");
        window.localStorage.setItem("category", "");
        window.localStorage.setItem("brand", "");
        window.localStorage.setItem("brand", "");
        window.localStorage.setItem("mcategory", "");
        window.localStorage.setItem("mname", "");
        window.localStorage.setItem("offer-reload", "")
        window.localStorage.setItem("appopen", "")
        window.localStorage.setItem("distance", "");
    }



    window.preLogin = kendo.observable({
        pin1: "",
        pin2: "",
        social_subject: "",
        social_message: "",
        social_image: share_image,
        social_header: "",
        social_shortmsg: short_msg,
        social_telephone: "",
        social_email: "",
        username: "",
        username1: "",
        emailid1: "",
        password: "",
        outlettelephone: "",
        tokennum: "",
        geocity: "",
        geocountry: "",
        merchantcode: "",
        mdevice: "",
        customer: "",
        segmentcode: "",
        enrollmenttelephone: enrollmenttelephone,
        customercaretelephone: customercaretelephone,
        firstname: "",
        lastname: "",
        emailid: "",
        mobile: "",
        checklocation: false,
        checkrestaurant: false,
        checkcuisine: false,
        checkcelebration: false,
        checklifestyle: false,
        //            owfrom: "",
        //            owto: "",
        owtraveldate: "",
        owpromotion: "",
        retfrom: "",
        retto: "",
        rettraveldate: "",
        retreturndate: "",
        retpromotion: "",
        searchFlight: function () {
            newsearch="";         
            if ($("#journeytab").data("kendoMobileButtonGroup").current().index() == 0) {

                preLogin.searchFlightOneWay();
            } else {
                preLogin.searchFlightReturn();
            }
            return;
        },

        searchFlightOneWay: function () {
   
            today = new Date();
            if (window.localStorage.getItem("origin") == "") {
                navigator.notification.alert("Please Select Origin City", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            if (window.localStorage.getItem("destination") == "") {
                navigator.notification.alert("Please Select Destination City", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            if (window.localStorage.getItem("destination") == window.localStorage.getItem("origin")) {
                navigator.notification.alert("Origin and Destination City Cannot be Same", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            if (!this.owtraveldate) {
                navigator.notification.alert("Please Select Valid Departure Date", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            if (document.getElementById("owcabinclass").value == "") {
                navigator.notification.alert("Please Select Cabin Class", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            if (document.getElementById("owadult").value == "0" && document.getElementById("owchild").value == "0" && document.getElementById("owinfant").value == "0") {
                navigator.notification.alert("Please Select Passenger", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            mcabinclass = document.getElementById("owcabinclass").value;
            madult = document.getElementById("owadult").value;
            mchild = document.getElementById("owchild").value;
            minfant = document.getElementById("owinfant").value;




            var today = this.owtraveldate;
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            var today = yyyy + '-' + mm + '-' + dd;
            mdate = today;


            //window.localStorage.setItem("origin", this.owfrom.toUpperCase());
             //   alert(window.localStorage.getItem("origin"));
            //window.localStorage.setItem("destination", this.owto.toUpperCase());
            window.localStorage.setItem("traveldate", today);
            //      alert(window.localStorage.getItem("traveldate"));
            window.localStorage.setItem("returndate", "");
            //       alert(window.localStorage.getItem("returndate"));
            window.localStorage.setItem("cabinclass", mcabinclass);
            //       alert(window.localStorage.getItem("cabinclass"));
            window.localStorage.setItem("adult", madult);
            //      alert(window.localStorage.getItem("adult"));
            window.localStorage.setItem("child", mchild);
            //     alert(window.localStorage.getItem("child"));
            window.localStorage.setItem("infant", minfant);
            //    alert(window.localStorage.getItem("infant"));
            window.localStorage.setItem("journeyheader", window.localStorage.getItem("origin") + "-" + window.localStorage.getItem("destination") + " Oneway");
            //     alert(window.localStorage.getItem("journeyheader"));
            window.localStorage.setItem("journeysubheader", Number(madult) + Number(mchild) + Number(minfant) + " <i class='fa fa-user'></i> " + window.localStorage.getItem("cabinclass") + " " + window.localStorage.getItem("traveldate"));
            //     alert(window.localStorage.getItem("journeysubheader"));
            window.localStorage.setItem("passenger", Number(madult) + Number(mchild) + Number(minfant));
            //     alert(window.localStorage.getItem("passenger"));












            showSpin();
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 2000000,
                url: gurl + "/searchFlightA.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, ofrom: window.localStorage.getItem("origin"), oto: window.localStorage.getItem("destination"), otraveldate: mdate, owclass: mcabinclass, owadult: madult, owchild: mchild, owinfant: minfant, deviceinfo: mdevicestat
                }),
                success: function (data) {


                    var getData = JSON.parse(data);

                    if (getData.statuscode === "000") {
                        window.localStorage.setItem("traceid", getData.traceid);
                        $("body").data("kendoMobilePane").navigate("views/searchResultOneWay.html");
                    } else {
                        navigator.notification.alert("Unable to find Flights for the selected Itinerary", function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }

                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, the search could not be executed  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup                                          
                }
            });
        },

        searchFlightReturn: function () {
            today = new Date();
            if (!this.retfrom) {
                navigator.notification.alert("Please Select Origin City", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            if (!this.retto) {
                navigator.notification.alert("Please Select Destination City", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            if (this.retto == this.retfrom) {
                navigator.notification.alert("Origin and Destination City Cannot be Same", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            if (!this.rettraveldate) {
                navigator.notification.alert("Please Select Valid Departure Date", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            if (!this.retreturndate) {
                navigator.notification.alert("Please Select Valid Return Date", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }


            if (document.getElementById("retcabinclass").value == "") {
                navigator.notification.alert("Please Select Cabin Class", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            if (document.getElementById("retadult").value == "0" && document.getElementById("retchild").value == "0" && document.getElementById("retinfant").value == "0") {
                navigator.notification.alert("Please Select Passenger", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            mcabinclass = document.getElementById("retcabinclass").value;
            madult = document.getElementById("retadult").value;
            mchild = document.getElementById("retchild").value;
            minfant = document.getElementById("retinfant").value;

            var today = this.rettraveldate;
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            var today = yyyy + '-' + mm + '-' + dd;
            mdate = today;
            window.localStorage.setItem("traveldate", dd + "-" + moment().month(Number(mm)).format('MMMM'));
            var today = this.retreturndate;
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            var today = yyyy + '-' + mm + '-' + dd;
            mdate1 = today;
            window.localStorage.setItem("returndate", dd + "-" + moment().month(Number(mm)).format('MMMM'));
            window.localStorage.setItem("origin", this.owfrom.toUpperCase());
            window.localStorage.setItem("destination", this.owto.toUpperCase());
            window.localStorage.setItem("cabinclass", mcabinclass);
            window.localStorage.setItem("adult", madult);
            window.localStorage.setItem("child", mchild);
            window.localStorage.setItem("infant", minfant);
            window.localStorage.setItem("journeyheader", this.owfrom.toUpperCase() + "-" + this.owto.toUpperCase() + " Oneway");
            window.localStorage.setItem("journeysubheader", Number(madult) + Number(mchild) + Number(minfant) + " " + window.localStorage.getItem("traveldate"));
            window.localStorage.setItem("passenger", Number(madult) + Number(mchild) + Number(minfant));
            showSpin();
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 2000000,
                url: gurl + "/searchFlightB.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, retfrom: this.retfrom, retto: this.retto, rtraveldate: mdate, rreturndate: mdate1, retclass: mcabinclass, retadult: madult, retchild: mchild, retinfant: minfant, deviceinfo: mdevicestat
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode === "000") {
                        window.localStorage.setItem("traceid", getData.traceid);
                        $("body").data("kendoMobilePane").navigate("views/searchResultOneWay.html");
                    } else {
                        navigator.notification.alert("Unable to find Flights for the selected Itinerary", function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, the search could not be executed  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup                                          
                }
            });
        },

        clearListFilter: function () {
            document.getElementById("olocation").checked = false;
            //Clear Restaurant Filter
            window.localStorage.setItem("restaurant", "");
            document.getElementById("orestauranttype").innerHTML = "All";
            ul = document.getElementById("RestType-Filter");
            items = ul.getElementsByTagName("input");

            //check where checked
            for (i = 0; i < items.length; i++) {
                items[i].checked = false;
            }

            //Clear Cuisine Filter
            window.localStorage.setItem("cuisine", "");
            document.getElementById("ocuisine").innerHTML = "All";
            ul = document.getElementById("Cuisine-Filter");
            items = ul.getElementsByTagName("input");

            //check where checked
            for (i = 0; i < items.length; i++) {
                items[i].checked = false;
            }
        },
        closeOfferFilterView: function () {
            window.localStorage.setItem("mcategory", "");
            window.localStorage.setItem("offer-reload", "1");
            ul = document.getElementById("offer-filter");
            items = ul.getElementsByTagName("input");

            //check where checked
            for (i = 0; i < items.length; i++) {
                y = items[i].checked ? "1" : "0";
                if (y === "1") {
                    window.localStorage.setItem("mcategory", items[i].value);
                }
            }

            $("#modalviewofferfilter").data("kendoMobileModalView").close();
            preLogin.rewardList();
        },
          destroyAirportList: function () {
            $("#modalairportlist").remove();
        },
        destroyaboutisme: function () {
            $("#aboutisme-theme").remove();
        },


        destroytcisme: function () {
            $("#tcisme-theme").remove();
        },

        destroymodelviewfilter: function () {
            $("#modalviewfilter").remove();
        },


        destroybenefitdetail: function () {
            $("#benefit-theme").remove();
        },

        destroybranddetail: function () {
            window.localStorage.setItem("outlet", "");
            hideBrandDetail();
            //  $("#branddetail-theme").remove();
        },
        destroyexplorelist: function () {
            $("#explorelist-view").remove();
        },
        destroysearchoneway: function () {
            $("#searchoneway-view").remove();
        },
        confirmenrollment: function () {
            $("#enrolmentpage-view").remove();
        },
        customerservice: function () {
            $("#customerservice-theme").remove();
        },
        destroydiscoverlist: function () {
            $("#discoverlist-view").remove();
        },
        destroydeviceblock: function () {
            $("#deviceblock-view").remove();
        },
        destroyenrol: function () {
            preLogin.set("firstname", "");
            preLogin.set("lastname", "");
            preLogin.set("emailid", "");
            preLogin.set("emailida", "");
            preLogin.set("mobile", "");
            preLogin.set("siriusnumber", "");

            $("#enrol-theme").remove();
        },

        destroyfaq: function () {
            $("#faq-theme").remove();
        },
        destroyhome: function () {
            $("#home-theme").remove();
        },

        destroyleisurelist: function () {
            $("#liesurelist-theme").remove();
        },
        destroylogin: function () {
            $("#login-theme").remove();
        },

        mobilepolicy: function () {
            $("#device-theme").remove();
        },
        destroyofferdetail: function () {
            // document.getElementById("detail-title").innerHTML = "";
            // hideOfferDetail();
            $("#offerdetail-theme").remove();
        },
        destroyofferlist: function () {
            $("#offerlist-view").remove();
        },

        destroyoutletdetail: function () {
            //    document.getElementById("detail-title").innerHTML = "";
            window.localStorage.setItem("outlet", "");
            $("#outletdetail-theme").remove();
        },

        destroyoutletlist: function () {
            $("#outletlist-theme").remove();
        },

        destroyoutletlistb: function () {
            $("#outletlistb-theme").remove();
        },
        destroyplfaq: function () {
            $("#pl-faq-theme").remove();
        },

        destroyresetpassword: function () {
            $("#resetpassword-theme").remove();
        },

        destroysetpin: function () {
            $("#pin-theme").remove();
        },

        destroytokenpage: function () {
            $("#token-theme").remove();
        },
        destroysmspage: function () {
            $("#sms-theme").remove();
        },


        queryOutletFilter: function () {
            if (document.getElementById("olocation").checked) {
                window.localStorage.setItem("distance", "1");
                getlocationparams();
            } else {
                window.localStorage.setItem("distance", "");
            }

            $("#modalviewfilter").data("kendoMobileModalView").close();

            if (window.localStorage.getItem("appopen") === "01") {
                window.localStorage.setItem("outlet", "1");
                preLogin.showAllOutlet();
            } else if (window.localStorage.getItem("appopen") === "02") {
                window.localStorage.setItem("outlet", "1");
                preLogin.showAllLeisure();
            } else if (window.localStorage.getItem("appopen") === "03") {
                window.localStorage.setItem("outlet", "1");
                postLogin.showAllOutlet();
            } else if (window.localStorage.getItem("appopen") === "04") {
                window.localStorage.setItem("outlet", "1");
                postLogin.showAllLeisure();
            } else if (window.localStorage.getItem("appopen") === "05") {
                window.localStorage.setItem("outlet", "1");
                $("body").data("kendoMobilePane").navigate("views/outletlist.html?category=0&brand=");
            } else if (window.localStorage.getItem("appopen") === "06") {
                window.localStorage.setItem("outlet", "1");
                $("body").data("kendoMobilePane").navigate("views/pl-outletlist.html?category=0&brand=");
            } else if (window.localStorage.getItem("appopen") === "07") {
                window.localStorage.setItem("outlet", "1");
                preLogin.showAllOutlet1();
            } else if (window.localStorage.getItem("appopen") === "08") {
                window.localStorage.setItem("outlet", "1");
                preLogin.showAllLeisure1();
            } else if (window.localStorage.getItem("appopen") === "09") {
                window.localStorage.setItem("outlet", "1");
                postLogin.showAllOutlet1();
            } else if (window.localStorage.getItem("appopen") === "10") {
                window.localStorage.setItem("outlet", "1");
                postLogin.showAllLeisure1();
            }
        }

        ,

        restaurantCritFilter: function () {
            //Restaurant Type Filter
            var itemconcat = "";
            var x = 1;
            var vopen = "";
            var vclose = "";
            ul = document.getElementById("RestType-Filter");
            items = ul.getElementsByTagName("input");

            window.localStorage.setItem("restaurant", "");
            window.localStorage.setItem("orestauranttype", "All");

            //check where checked
            for (i = 0; i < items.length; i++) {
                y = items[i].checked ? "1" : "0";

                if (y === "1") {
                    if (x === 1) {
                        itemconcat = vopen + items[i].value;
                    } else {
                        itemconcat = itemconcat + "," + items[i].value;
                    }
                    x++;
                }
            }

            if (x > 1) {
                itemconcat = itemconcat + vclose;
                window.localStorage.setItem("restaurant", itemconcat);
                window.localStorage.setItem("orestauranttype", "Filter");
            }
            document.getElementById("orestauranttype").innerHTML = window.localStorage.getItem("orestauranttype");
            $("#modalviewtype").data("kendoMobileModalView").close();
        },

        cuisineCritFilter: function () {
            //Cuisine Type Filter
            var itemconcat = "";
            var x = 1;
            var vopen = "";
            var vclose = "";
            ul = document.getElementById("Cuisine-Filter");
            items = ul.getElementsByTagName("input");
            window.localStorage.setItem("ocuisine", "All");
            window.localStorage.setItem("cuisine", "");
            //check where checked
            for (i = 0; i < items.length; i++) {
                y = items[i].checked ? "1" : "0";

                if (y === "1") {
                    if (x === 1) {
                        itemconcat = vopen + items[i].value;
                    } else {
                        itemconcat = itemconcat + "," + items[i].value;
                    }
                    x++;
                }
            }
            if (x > 1) {
                itemconcat = itemconcat + vclose;
                window.localStorage.setItem("ocuisine", "Filter");
                window.localStorage.setItem("cuisine", itemconcat);
            }
            document.getElementById("ocuisine").innerHTML = window.localStorage.getItem("ocuisine");
            $("#modalviewcuisine").data("kendoMobileModalView").close();
        },


        celebrationCritFilter: function () {
            //Celebration Type Filter
            var itemconcat = "";
            var x = 1;
            var vopen = "";
            var vclose = "";
            ul = document.getElementById("Celebration-Filter");
            items = ul.getElementsByTagName("input");
            //document.getElementById("ocelebration").innerHTML = "All";                                              
            window.localStorage.setItem("celebration", "");
            //check where checked
            for (i = 0; i < items.length; i++) {
                y = items[i].checked ? "1" : "0";

                if (y === "1") {
                    if (x === 1) {
                        itemconcat = vopen + items[i].value;
                    } else {
                        itemconcat = itemconcat + "," + items[i].value;
                    }
                    x++;
                }
            }
            if (x > 1) {
                itemconcat = itemconcat + vclose;
                // document.getElementById("ocelebration").innerHTML = "Filter";
                window.localStorage.setItem("celebration", itemconcat);
            }

            $("#modalviewceleberationtype").data("kendoMobileModalView").close();
        },

        lifestyleCritFilter: function () {
            //Lifestyle Type Filter
            var itemconcat = "";
            var x = 1;
            var vopen = "";
            var vclose = "";
            ul = document.getElementById("Offer-Filter");
            items = ul.getElementsByTagName("input");
            document.getElementById("olifestyle").innerHTML = "All";
            window.localStorage.setItem("lifestyle", "");
            //check where checked
            for (i = 0; i < items.length; i++) {
                y = items[i].checked ? "1" : "0";

                if (y === "1") {
                    if (x === 1) {
                        itemconcat = vopen + items[i].value;
                    } else {
                        itemconcat = itemconcat + "," + items[i].value;
                    }
                    x++;
                }
            }
            if (x > 1) {
                itemconcat = itemconcat + vclose;
                document.getElementById("olifestyle").innerHTML = "Filter";
                window.localStorage.setItem("lifestyle", itemconcat);
            }

            $("#modalviewoffertype").data("kendoMobileModalView").close();
        },

        getRestCuisineFilter: function () {
            var dataSource = new kendo.data.DataSource({ data: getRestCuisineData() });

            $("#Cuisine-Filter").kendoMobileListView({
                dataSource: dataSource,
                template: $("#CuisineFilter-Template").html()


            });
        },


        getLifeStyleData: function () {
            var dataSource = new kendo.data.DataSource({ data: getOfferTypeData() });

            $("#Offer-Filter").kendoMobileListView({
                dataSource: dataSource,
                template: $("#OfferFilter-Template").html()


            });
        },

        getCelebrationFilter: function () {
            var dataSource = new kendo.data.DataSource({ data: getOfferCeleberationData() });

            $("#Celebration-Filter").kendoMobileListView({
                dataSource: dataSource,
                template: $("#CelebrationFilter-Template").html()


            });
        },
        getRestTypeFilter: function () {
            var dataSource = new kendo.data.DataSource({ data: getRestTypeData() });

            $("#RestType-Filter").kendoMobileListView({
                dataSource: dataSource,
                template: $("#RestFilter-Template").html()


            });
        },



        getFBUserDataA
        : function () {
            showSpin();
            //Check Login Status - If not logged in and user rejects then throw enrollment error
            //If not login then login - If user rejects then throw enrolment error
            //check if Id is already exists on isme then throw error
            //get user data and publish on enrol page
            //Show a message of successful FB validation and update balance data to complete.

            //   facebookConnectPlugin.getApplicationSignature(function(response) {
            //  console.log("Signature: " + response);
            //        window.localStorage.setItem("signature", response);
            //    });

            if (window.localStorage.getItem("FBValidated") === "Y") {
                navigator.notification.alert("You have already enrolled or validated your Facebook account. Please continue to enter missing information and complete your subscription if you have still not enrolled. Login to your SNTTA membership if already enrolled.", function () {
                }, "SNTTA Travel", "Dismiss");
                hideSpin();
                return;
            }
            fbCleanVariables();

            facebookConnectPlugin.login(["public_profile"], function (response) { // do not retrieve the 'user_likes' permissions from FB as it will break the app 
                if (response.status === "connected") {
                    m = JSON.parse(JSON.stringify(response));
                    window.localStorage.setItem("FBuserID", m.authResponse.userID);
                    window.localStorage.setItem("FBAccessToken", m.authResponse.accessToken);
                    window.localStorage.setItem("loginmode", "FB");
                    getFBUserData();
                    hideSpin();
                } else {
                    navigator.notification.alert("There is an error accessing Facebook account. " + response.status, function () {
                    }, "SNTTA Travel", "Dismiss");
                    hideSpin();
                    return;
                }
            }, function (error) {
                //alert(JSON.parse(error));
                alert(JSON.stringify(error));
                //alert(JSON.parse(JSON.stringify(error)));                                                       
            }

            );
        }
        ,



        fbLoginD
        : function () {
            showSpin();

            facebookConnectPlugin.getLoginStatus(function (response) {
                if (response.status === "connected") {
                    m = JSON.parse(JSON.stringify(response));
                    window.localStorage.setItem("FBuserID", m.authResponse.userID);
                    window.localStorage.setItem("FBAccessToken", m.authResponse.accessToken);
                    window.localStorage.setItem("loginmode", "FB");
                    preLogin.validateUser();
                } else {
                    facebookConnectPlugin.login(["public_profile"], function (response) { // do not retrieve the 'user_likes' permissions from FB as it will break the app 
                        if (response.status === "connected") {
                            m = JSON.parse(JSON.stringify(response));
                            window.localStorage.setItem("FBuserID", m.authResponse.userID);
                            window.localStorage.setItem("FBAccessToken", m.authResponse.accessToken);
                            window.localStorage.setItem("loginmode", "FB");
                            preLogin.validateUser();
                        } else {
                            navigator.notification.alert("There is an error accessing Facebook account. " + response.status, function () {
                            }, "SNTTA Travel", "Dismiss");
                            hideSpin();
                            return;
                        }
                    });
                }
            });
        }

        ,


        showConfirmation
        : function () {
            document.getElementById("confirm-memberid").innerHTML = window.localStorage.getItem("newmemberid");
            document.getElementById("confirm-membername").innerHTML = window.localStorage.getItem("newmembername");
            document.getElementById("confirm-segment").innerHTML = window.localStorage.getItem("newmembersegment");
            window.localStorage.setItem("newmemberid", "");
            window.localStorage.setItem("newmembername", "");
            window.localStorage.setItem("newmembersegment", "");
        },

        showEnrol
        : function () {
            showSpin();
            window.localStorage.setItem("mfirstname", "");
            window.localStorage.setItem("mlastname", "");
            window.localStorage.setItem("memailid", "");

            if (window.localStorage.getItem("enrolmentcomplete") === null) {
                window.localStorage.setItem("mobilelogin", "");
            }
            hideSpin(); //hide loading popup
        },



        confirmEnrolPre
        : function () {
            //alert(mn.length);
            if (window.localStorage.getItem("enrolmentcomplete") === "1") {
                navigator.notification.alert("This device is already registered with another member.  You cannot create a new Subscription.", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            if (!this.firstname) {
                navigator.notification.alert("Please enter your First Name. ", function () {
                }, "SNTTA Travel", "Dismiss")
                return;
            }

            if (!this.lastname) {
                navigator.notification.alert("Please enter your Last Name.", function () {
                }, "SNTTA Travel", "Dismiss")
                return;
            }

            if (!this.emailid) {
                navigator.notification.alert("Please enter your Email address.", function () {
                }, "SNTTA Travel", "Dismiss")
                return;
            }

            if (!this.mobile) {
                navigator.notification.alert("Please enter your mobile number.", function () {
                }, "SNTTA Travel", "Dismiss")
                return;
            }

            if (!document.getElementById("enrol-tandc-accept").checked) {
                navigator.notification.alert("Please Accept the Terms & Conditions to proceed.", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            if (!document.getElementById("enrol-tandc-accept-c").checked) {
                navigator.notification.alert("Please Accept the Data Protection Policy to proceed", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            showSpin();
            window.localStorage.setItem("smsreference", "");
            window.localStorage.setItem("mfirstname", this.firstname);
            window.localStorage.setItem("mlastname", this.lastname);
            window.localStorage.setItem("memailid", this.emailid);
            window.localStorage.setItem("mobilelogin", this.mobile);
            window.localStorage.setItem("setpintype", "0"); //enrollment

            //Assign variables to localstorage for later update

            $("body").data("kendoMobilePane").navigate("views/smsvalidation.html");
        },

        confirmEnrol
        : function () {
            if (window.localStorage.getItem("FBValidated") === "Y") {
                getFBUserExists();
                if (window.localStorage.getItem("FBValidated") === "N") {
                    navigator.notification.alert("There is an SNTTA membership already associated with this Facebook account.  Unable to enrol using this Facebook account", function () {
                    }, "SNTTA Travel", "Dismiss");
                    clearEnrolPage();
                    return;
                }
            }
            //alert(window.localStorage.getItem("FBValidated"));
            if (window.localStorage.getItem("FBValidated") == "Y") {
                //alert(postLogin.firstname);
                if (postLogin.firstname == "") {
                    navigator.notification.alert("Please enter your First Name. ", function () {
                    }, "SNTTA Travel", "Dismiss")
                    return;
                }

                if (postLogin.lastname == "") {
                    navigator.notification.alert("Please enter your Last Name.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    return;
                }

                if (postLogin.emailid == "") {
                    navigator.notification.alert("Please enter your Email address.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    return;
                }

                if (!this.emailida) {
                    navigator.notification.alert("Please Re-enter your Email address.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    return;
                }
            } else {
                if (!this.firstname) {
                    navigator.notification.alert("Please enter your First Name. ", function () {
                    }, "SNTTA Travel", "Dismiss")
                    return;
                }

                if (!this.lastname) {
                    navigator.notification.alert("Please enter your Last Name.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    return;
                }

                if (!this.emailid) {
                    navigator.notification.alert("Please enter your Email address.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    return;
                }
                if (!this.emailida) {
                    navigator.notification.alert("Please Re-enter your Email address.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    return;
                }
            }

            //if email updated check with the keyin email ans 2nd email
            if (!this.emailid) {
                if (postLogin.emailid != this.emailida) {
                    navigator.notification.alert("Emails do not match, please re-enter correctly.", function () {
                    }, "SNTTA Travel", "Dismiss");
                    return;
                }
            } else {
                if (this.emailid != this.emailida) {
                    navigator.notification.alert("Emails do not match, please re-enter correctly.", function () {
                    }, "SNTTA Travel", "Dismiss");
                    return;
                }
            }

            if (!this.mobile) {
                navigator.notification.alert("Please enter your mobile number.", function () {
                }, "SNTTA Travel", "Dismiss")
                return;
            }

            if (document.getElementById("selEmirate").value === "") {
                navigator.notification.alert("Please select your city of residence.", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            if (document.getElementById("selGender").value === "") {
                navigator.notification.alert("Please select your gender.", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            if (!document.getElementById("enrol-tandc-accept").checked) {
                navigator.notification.alert("Please Accept the Terms & Conditions to proceed.", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            if (!document.getElementById("enrol-tandc-accept-c").checked) {
                navigator.notification.alert("Please Accept the Data Protection Policy to proceed", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            navigator.notification.confirm(
                'We are about to create a new SNTTA membership for you. Click OK to proceed.', // message
                onConfirm1, // callback to invoke with index of button pressed
                'SNTTA Travel', // title
                'OK,Return for Correction'          // buttonLabels
            );
        },

        showBrandPage
        : function () {
            // alert("Hello");
            $("body").data("kendoMobilePane").navigate("views/brandpage.html");
        },
        loadDrawer
        : function () {
            window.plugins.nativepagetransitions.slide({
                // the defaults for direction, duration, etc are all fine
                "href": "#appdrawerN"
            });
        }
        ,

        benefitdetail
        : function (e) {
            benefitcode = "1003";
            showSpin(); //show loading popup

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/benefitlistnew.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, benefitcode: benefitcode, mdevice: mdevicestat
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode === "000" && getData.benefitlist.length > 0) {
                        //fill the outlet template
                        $("#benefit-1000").kendoMobileListView({
                            dataSource: kendo.data.DataSource.create({ data: getData.benefitlist }),
                            template: $("#benefit1").html()
                        });

                        document.getElementById("benefit-detail-view").style.display = "block";
                        document.getElementById("benefit-detail-view-1").style.display = "none";

                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, the benefits cannot be displayed. Please restart the app and try again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, the benefits cannot be displayed  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup                                          
                }
            });
        },

        benefitdetail1
        : function (e) {
            benefitcode = "1003";
            showSpin(); //show loading popup

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/benefitlistnew.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, benefitcode: benefitcode, mdevice: mdevicestat
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode === "000" && getData.benefitlist.length > 0) {
                        //fill the outlet template
                        $("#benefit-1001").kendoMobileListView({
                            dataSource: kendo.data.DataSource.create({ data: getData.benefitlist }),
                            template: $("#benefit2").html()
                        });

                        document.getElementById("benefit-detail-view-1").style.display = "block";
                        document.getElementById("benefit-detail-view").style.display = "none";
                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, the benefits cannot be displayed. Please restart the app and try again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, the benefits cannot be displayed  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup                                          
                }
            });
        },
        listAirport: function () {
            var sr = document.getElementById("input_search_word").value;

       //     if (sr.length<3){
       //          navigator.notification.alert("Please enter atleast 3 character for faster search", function () {
       //             }, "SNTTA Travel", "Dismiss") 
       //     }
                   navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude
            var geocodingAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=" + googleapikey;

            $.getJSON(geocodingAPI, function (json) {
                if (json.status === "OK") {
                    //Check result 0
                    var result = json.results[0];
                    for (var i = 0, len = result.address_components.length; i < len; i++) {
                        var ac = result.address_components[i];
                        if (ac.types.indexOf("locality") >= 0) {
                            geocity = ac.long_name;
                        }

                        if (ac.types.indexOf("country") >= 0) {
                            mcountry = ac.long_name;
                            window.localStorage.setItem("country", mcountry);
                        }
                    }
                    getFlag(mcountry);
                } else {
                    mcountry = country;
                    window.localStorage.setItem("country", mcountry);
                    getFlag(mcountry);
                }
            });
        }
            , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                //  if (err.code == "1") {
                //      navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                //  } else if (err.code == "2") {
                //      navigator.notification.alert("Device is unable to get the GPS position");  
                //  }
                lat = window.localStorage.getItem("lat");
                lon = window.localStorage.getItem("lon");
                mcountry = country;
                window.localStorage.setItem("country", mcountry);
                getFlag(mcountry);
            }, positionOption);
   
            showSpin();
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/airportList.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), mdevice: window.localStorage.getItem("mdevicestat"), lat: window.localStorage.getItem("latl"), lon: window.localStorage.getItem("lonl"),country:window.localStorage.getItem("country"),search:sr
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode === "000") {
                        $("#airport-list").kendoMobileListView({

                            dataSource: kendo.data.DataSource.create({ data: getData.airportlist }),
                            template: $("#airportTemplate").html()
                        });
                        hideSpin();
                    } else {
                        navigator.notification.alert("Due to a system error, cannot retrieve Airport List. Please close the app and log in again.  " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, cannot retrieve Airport List. [" + errormsg.statusText + "]  Please check your network connection and try again. ", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },
        showAllOutlet
        : function (e) {

            showSpin();
            if (window.localStorage.getItem("appopen") != "05") {
                window.localStorage.setItem("appopen", "01");
            }
            prefiltercheck(e);
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/outletlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), category: "", brandcode: "", mdevice: window.localStorage.getItem("mdevicestat"), outletcode: "", preflocation: window.localStorage.getItem("distance"), prefcuisine: window.localStorage.getItem("cuisine"), prefcelebration: "", prefrestaurant: window.localStorage.getItem("restaurant"), lat: window.localStorage.getItem("latl"), lon: window.localStorage.getItem("lonl"), customer: ""

                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    cleanoutletfilter();
                    if (getData.statuscode === "000") {
                        //fill the outlet template
                        //alert(getData.outletlist[0].imageurll);
                        if (window.localStorage.getItem("appopen") === "05") {
                            window.localStorage.setItem("appopen", "01");
                            $("#outlet-list").kendoMobileListView({

                                dataSource: kendo.data.DataSource.create({ data: getData.outletlist }),
                                template: $("#outletTemplate").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Branch",
                                    field: "outletname",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 40,
                                    endlessScroll: true
                                }
                            });
                        } else if (window.localStorage.getItem("outlet") === "") {
                            $("#outlet-list").kendoMobileListView({

                                dataSource: kendo.data.DataSource.create({ data: getData.outletlist }),
                                template: $("#outletTemplate").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Branch",
                                    field: "outletname",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 40,
                                    endlessScroll: true
                                }
                            });
                        } else {
                            $("#outlet-list").data("kendoMobileListView").dataSource.data(getData.outletlist);
                        }
                        propertygeo = [];
                        for (var i = 0; i < getData.outletlist.length; i++) {
                            propertygeo[i] = getData.outletlist[i].outletname + "#" + getData.outletlist[i].lat + "#" + getData.outletlist[i].lon;
                        }
                        hideSpin(); //hide loading popup
                        if (getData.outletlist.length === 0) {
                            navigator.notification.alert("There are no Branches available", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, the location details are not available for the selected property. Please close the app and log in again.  " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, the location details are not available for the selected property. [" + errormsg.statusText + "]  Please check your network connection and try again. ", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        showAllOutlet1
        : function (e) {
            showSpin();

            window.localStorage.setItem("appopen", "07");
            window.localStorage.setItem("category", "0");
            prefiltercheck(e);

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/outletlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), category: "", brandcode: window.localStorage.getItem("branda"), mdevice: window.localStorage.getItem("mdevicestat"), outletcode: "", preflocation: window.localStorage.getItem("distance"), prefcuisine: window.localStorage.getItem("cuisine"), prefcelebration: "", prefrestaurant: window.localStorage.getItem("restaurant"), lat: window.localStorage.getItem("latl"), lon: window.localStorage.getItem("lonl"), customer: ""

                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    cleanoutletfilter();

                    if (getData.statuscode === "000") {
                        //fill the outlet template
                        if (window.localStorage.getItem("outlet") === "") {
                            $("#outlet-list-b").kendoMobileListView({

                                dataSource: kendo.data.DataSource.create({ data: getData.outletlist }),
                                template: $("#outletTemplate-b").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Branch Location",
                                    field: "outletname",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 40,
                                    endlessScroll: true
                                }
                            });
                        } else {
                            $("#outlet-list-b").data("kendoMobileListView").dataSource.data(getData.outletlist);
                        }
                        propertygeo = [];
                        for (var i = 0; i < getData.outletlist.length; i++) {
                            propertygeo[i] = getData.outletlist[i].outletname + "#" + getData.outletlist[i].lat + "#" + getData.outletlist[i].lon;
                        }
                        hideSpin(); //hide loading popup
                        if (getData.outletlist.length === 0) {
                            navigator.notification.alert("There are no Bars & Dining venues available for the selected property.", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, the location details are not available for the selected property. Please close the app and log in again.  " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, the location details are not available for the selected property. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        showAllLeisure
        : function (e) {
            showSpin();
            window.localStorage.setItem("appopen", "02");

            prefiltercheck(e);

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/outletlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), category: window.localStorage.getItem("category"), brandcode: window.localStorage.getItem("brand"), mdevice: window.localStorage.getItem("mdevicestat"), outletcode: "", preflocation: window.localStorage.getItem("distance"), prefcuisine: window.localStorage.getItem("cuisine"), prefcelebration: "", prefrestaurant: window.localStorage.getItem("restaurant"), lat: window.localStorage.getItem("latl"), lon: window.localStorage.getItem("lonl"), customer: ""
                    //merchantcode :window.localStorage.getItem("merchant"),category:window.localStorage.getItem("category"),brandcode:window.localStorage.getItem("brand"),mdevice:window.localStorage.getItem("mdevicestat"),outletcode:""
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    cleanoutletfilter();
                    if (getData.statuscode === "000") {
                        if (window.localStorage.getItem("outlet") === "") {
                            $("#leisure-list").kendoMobileListView({

                                dataSource: kendo.data.DataSource.create({ data: getData.outletlist }),
                                template: $("#leisureTemplate").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Spa & Leisure",
                                    field: "outletname",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 40,
                                    endlessScroll: true
                                }
                            });
                        } else {
                            $("#leisure-list").data("kendoMobileListView").dataSource.data(getData.outletlist);
                        }
                        propertygeo = [];
                        for (var i = 0; i < getData.outletlist.length; i++) {
                            propertygeo[i] = getData.outletlist[i].outletname + "#" + getData.outletlist[i].lat + "#" + getData.outletlist[i].lon;
                        }
                        hideSpin(); //hide loading popup
                        if (getData.outletlist.length === 0) {
                            navigator.notification.alert("There are no Leisure venues available for the selected property.", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                        //fill the outlet template
                    } else {
                        navigator.notification.alert("Due to a system error, the location details are not available for the selected property. Please close the app and log in again.  " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, the location details are not available for the selected property. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },


        showAllLeisure1
        : function (e) {
            showSpin();
            window.localStorage.setItem("appopen", "08");
            window.localStorage.setItem("category", "1");
            prefiltercheck(e);
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/outletlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), category: window.localStorage.getItem("category"), brandcode: window.localStorage.getItem("branda"), mdevice: window.localStorage.getItem("mdevicestat"), outletcode: "", preflocation: window.localStorage.getItem("distance"), prefcuisine: window.localStorage.getItem("cuisine"), prefcelebration: "", prefrestaurant: window.localStorage.getItem("restaurant"), lat: window.localStorage.getItem("latl"), lon: window.localStorage.getItem("lonl"), customer: ""
                    //merchantcode :window.localStorage.getItem("merchant"),category:window.localStorage.getItem("category"),brandcode:window.localStorage.getItem("brand"),mdevice:window.localStorage.getItem("mdevicestat"),outletcode:""
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    cleanoutletfilter();
                    if (getData.statuscode === "000") {
                        if (window.localStorage.getItem("outlet") === "") {
                            $("#leisure-list-b").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.outletlist }),
                                template: $("#leisureTemplate-b").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Spa & Leisure",
                                    field: "outletname",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 40,
                                    endlessScroll: true
                                }
                            });
                        } else {
                            $("#leisure-list-b").data("kendoMobileListView").dataSource.data(getData.outletlist);
                        }
                        propertygeo = [];
                        for (var i = 0; i < getData.outletlist.length; i++) {
                            propertygeo[i] = getData.outletlist[i].outletname + "#" + getData.outletlist[i].lat + "#" + getData.outletlist[i].lon;
                        }
                        hideSpin(); //hide loading popup
                        if (getData.outletlist.length === 0) {
                            navigator.notification.alert("There are no Leisure venues available for the selected property.", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                        //fill the outlet template
                    } else {
                        navigator.notification.alert("Due to a system error, the location details are not available for the selected property. Please close the app and log in again.  " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, the location details are not available for the selected property. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        searchResultOneWay: function () {
            document.getElementById("itheader").innerHTML = window.localStorage.getItem("journeyheader");
            document.getElementById("itsubheader").innerHTML = window.localStorage.getItem("journeysubheader");
            showSpin();
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/searchFlightC.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), traceid: window.localStorage.getItem("traceid"), deviceinfo: window.localStorage.getItem("mdevicestat")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    //alert(data);
                    if (getData.statuscode == "000") {
                        if (getData.flightfarelistfilter.length > 0) {
                            $("#onewaylistview").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.flightfarelistfilter }),
                                template: $("#tmpsearchoneway").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Price",
                                    field: "totalprice",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 10,
                                    endlessScroll: true
                                }
                            });
                            //hideSpin(); //hide loading popup
                        } else {
                            navigator.notification.alert("No flights found for the selected Itinerary", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Unable to fetch the available flights for the selected Itinerary", function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                }
                ,
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, Unable to fetch the available flights for the selected Itinerary. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        showPropertyItem
        : function (e) {
            showSpin();
            window.localStorage.setItem("branda", e.view.params.od);
            //document.getElementById("back2-search").style.display = "none";
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/propertyitem.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, brandcode: window.localStorage.getItem("branda"), mdevice: mdevicestat
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        m = getData.geolocation.split(",");
                        // alert(getData.imageurll);                                                                                                                                                                  
                        lat = m[0];
                        lon = m[1];

                        document.getElementById("property-detail-div").style.display = "block";
                        document.getElementById("branddetail-title").innerHTML = getData.hotelname;
                        document.getElementById("brandimage").src = getData.imageurll;
                        document.getElementById("brandimage").src = getData.imageurll;
                        document.getElementById("property-short-1").innerHTML = "<pre class='fulljustify'>" + getData.shortdes + "</pre>";
                        document.getElementById("property-short-2").innerHTML = "<pre class='fulljustify'>" + getData.shortdes1 + "</pre>";
                        document.getElementById("property-long-1").innerHTML = "<pre class='fulljustify'>" + getData.longdes + "</pre>";
                        window.localStorage.setItem("social_email_subject", emailsubject);
                        window.localStorage.setItem("social_email_message", getData.hotelname);
                        window.localStorage.setItem("social_email", supportemail + "  \n");
                        window.localStorage.setItem("social_telephone", customercaretelephone);
                        window.localStorage.setItem("social_shortmsg", emailsubject);

                        window.localStorage.setItem("social_message", getData.shortdes + "\n\n" + getData.shortdes1 + "\n\n" + getData.longdes);
                        window.localStorage.setItem("social_image", getData.imageurll);
                        window.localStorage.setItem("lat", lat);
                        window.localStorage.setItem("lon", lon);

                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, these details cannot be displayed. Please close the app and log in again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, these details cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        showOutletItem
        : function (e) {
            showSpin();
            outletcode = e.view.params.od;

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/outletlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, brandcode: "", outletcode: outletcode, mdevice: mdevicestat
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode == "000") {
                        m = getData.outletlist[0].geolocation.split(",");

                        lat = m[0];
                        lon = m[1];

                        document.getElementById("outlet-detail-div").style.display = "block";
                        document.getElementById("outletdetail-title").innerHTML = getData.outletlist[0].outletname;

                        document.getElementById("outletimage").src = getData.outletlist[0].imageurll;
                        document.getElementById("outlet-short-1").innerHTML = "<pre class='fulljustifybold'>" + getData.outletlist[0].outletshort + "</pre>";
                        document.getElementById("outlet-long-1").innerHTML = "<pre class='fulljustify'>" + getData.outletlist[0].outletlong + "</pre>";
                        window.localStorage.setItem("social_email_subject", emailsubject);
                        window.localStorage.setItem("social_email_message", getData.outletlist[0].outletname);
                        window.localStorage.setItem("social_email", getData.outletlist[0].emailid + "  \n");
                        window.localStorage.setItem("social_telephone", getData.outletlist[0].telephone);
                        window.localStorage.setItem("social_shortmsg", getData.outletlist[0].outletshort);

                        window.localStorage.setItem("social_message", getData.outletlist[0].outletlong + "\n\n");
                        window.localStorage.setItem("social_image", getData.outletlist[0].imageurll);
                        window.localStorage.setItem("lat", lat);
                        window.localStorage.setItem("lon", lon);

                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, the location details are not available for the selected property. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, the location details are not available for the selected property. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },


        showOutletOffer
        : function () {
            offercode = "";
            offertype = "1";
            showSpin();

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/offerListOutlet.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, offercode: offercode, offertype: offertype, segmentcode: segmentcode, mdevice: mdevicestat, outletcode: outletcode
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        if (getData.offerlist.length > 0) {
                            //fill the outlet template
                            $("#outlet-offer").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.offerlist }),
                                template: $("#outletOfferTemplate").html()

                            });
                            hideSpin(); //hide loading popup
                        } else {
                            navigator.notification.alert("No rewards are currently available for the selected venue. ", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, these details cannot be displayed. Please close the app and log in again " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, these details cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        propertyList
        : function () {
            showSpin();
            window.localStorage.setItem("appopen", "05")
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/propertyList.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, brandcode: window.localStorage.getItem("brand"), mdevice: mdevicestat
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode == "000") {
                        if (getData.propertylist.length > 0) {
                            //fill the outlet template
                            $("#property-list").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.propertylist }),
                                template: $("#explorelisttemplate").html()

                            });
                            propertygeo = [];
                            for (var i = 0; i < getData.propertylist.length; i++) {
                                propertygeo[i] = getData.propertylist[i].msgtitle + "#" + getData.propertylist[i].lat + "#" + getData.propertylist[i].lon;
                            }
                            hideSpin(); //hide loading popup
                        } else {
                            navigator.notification.alert("Due to a system error, these details cannot be displayed. ", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, these details cannot be displayed. close app and try again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, these details cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },
        rewardList
        : function () {
            showSpin();
            offercode = "";
            offertype = "1";
            mcategory = window.localStorage.getItem("mcategory");
            mname = window.localStorage.getItem("mname");
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/offerListGeo.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, offercode: offercode, offertype: offertype, segmentcode: segmentcode, mdevice: mdevicestat, mcategory: mcategory, mname: mname
                    //merchantcode :window.localStorage.getItem("merchant"),offercode:offercode,offertype:offertype,mdevice:window.localStorage.getItem("mdevicestat"),city:window.localStorage.getItem("distance"),prefcuisine:window.localStorage.getItem("cuisine"),prefcelebration:window.localStorage.getItem("celebration"),segmentcode:segmentcode,customer:window.localStorage.getItem("customer")

                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    window.localStorage.setItem("mcategory", "");
                    if (getData.statuscode == "000") {
                        //fill the outlet template
                        if (window.localStorage.getItem("offer-reload") != "1") {
                            $("#offer-list-view").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.offerlist }),
                                template: $("#offerListTemplate").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Offer",
                                    field: "itemname",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 40
                                }

                            });
                        } else {
                            $("#offer-list-view").data("kendoMobileListView").dataSource.data(getData.offerlist);
                        }
                        window.localStorage.setItem("offer-reload", "");

                        hideSpin(); //hide loading popup
                        if (getData.offerlist.length == 0) {
                            navigator.notification.alert("No rewards are currently available for the selected venue. ", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, these details cannot be displayed. Please close the app and log in again " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, these details cannot be displayed.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },



        showOfferItem
        : function (e) {
            offercode = e.view.params.cpn; //offer code for single offer inquiry
            offertype = "2"; //single offer inquiry
            showSpin();

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/offerList.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, offercode: offercode, offertype: offertype, segmentcode: segmentcode, mdevice: mdevicestat
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {

                        document.getElementById("offer-detail-div").style.display = "block";
                        //document.getElementById("offerdetail-title").innerHTML = getData.outletlist[0].outletname;

                        document.getElementById("offerimage").src = getData.offerlist[0].imageurll;

                        document.getElementById("offer-short-1").innerHTML = "<pre class='fulljustifybold'>" + getData.offerlist[0].itemname + "</pre>";
                        document.getElementById("offer-long-1").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].itemdescription + "</pre>";

                        document.getElementById("offer-expiry").innerHTML = "Reward Expiry : " + getData.offerlist[0].couponexpirydate;
                        document.getElementById("offer-remark").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].remark + "</pre>";
                        window.localStorage.setItem("social_email_message", getData.offerlist[0].itemname);
                        window.localStorage.setItem("social_email_subject", emailsubjectoffer);
                        window.localStorage.setItem("social_shortmsg", getData.offerlist[0].itemdescription);
                        window.localStorage.setItem("social_subject", getData.offerlist[0].itemname);
                        window.localStorage.setItem("social_message", getData.offerlist[0].itemdescription + "\n\n" + "Offer Expirying on :" + getData.offerlist[0].couponexpirydate);
                        window.localStorage.setItem("social_image", getData.offerlist[0].imageurll);

                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("No rewards are currently available for the selected venue. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, these details cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        showdesc
        : function (e) {
            offercode = e.view.params.cpn; //offer code for single offer inquiry
            offertype = "2"; //single offer inquiry
            showSpin();

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/offerList.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, offercode: offercode, offertype: offertype, segmentcode: segmentcode, mdevice: mdevicestat
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        document.getElementById("offer-detail-div").style.display = "block";
                        //document.getElementById("detail-title").innerHTML = getData.outletlist[0].outletname;

                        document.getElementById("offerimage").src = getData.offerlist[0].imageurll;
                        document.getElementById("offer-short-1").innerHTML = "<pre class='fulljustifybold'>" + getData.offerlist[0].itemname + "</pre>";
                        document.getElementById("offer-long-1").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].itemdescription + "</pre>";
                        document.getElementById("offer-expiry").innerHTML = "Offer Expiry : " + getData.offerlist[0].couponexpirydate;
                        document.getElementById("offer-remark").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].remark + "</pre>";

                        window.localStorage.setItem("social_shortmsg", getData.offerlist[0].itemdescription);
                        window.localStorage.setItem("social_subject", getData.offerlist[0].itemname);
                        window.localStorage.setItem("social_message", getData.offerlist[0].itemdescription + "\n\n" + "Offer Expirying on :" + getData.offerlist[0].couponexpirydate);
                        window.localStorage.setItem("social_image", getData.offerlist[0].imageurll);

                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("No rewards are currently available for the selected venue. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, these details cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        showOfferOutlet
        : function () {
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/offeroutletlist_geo.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, offercode: offercode, mdevice: mdevicestat, customer: "", lat: window.localStorage.getItem("latl"), lon: window.localStorage.getItem("lonl")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    //alert(data);
                    if (getData.statuscode == "000") {
                        //fill the outlet template
                        if (getData.offeroutletlist.length > 0) {
                            $("#offer-location-div").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.offeroutletlist }),
                                template: $("#offerOutletTemplate").html()
                            });
                            hideSpin(); //hide loading popup
                        } else {
                            navigator.notification.alert("No venues are currently available for the selected reward. ", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, these details cannot be displayed. clos app and login again" + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, these details cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        closeInfoPage
        : function () {
            window.localStorage.setItem("newinfo", "1");
            $("#modalviewinfo").data("kendoMobileModalView").close();
        },
        varInit
        : function () {
            if (window.localStorage.getItem("mobilelogin") === null) {
                window.localStorage.setItem("mobilelogin", "");
            }
            if (window.localStorage.getItem("enrolmentcomplete") === null) {
                window.localStorage.setItem("mobilelogin", "");
            }

            showSpin();
            clearAllVariables();

            if (firsttime === "") { //Register Access and device in the platform
                window.estimote.startRanging("Telerik");
                mdevice = device.model;
                muuid = device.uuid;
                mversion = device.version;
                mplatform = device.platform;
                mdevicestat = mdevice + "^" + muuid + "^" + mversion + "^" + mplatform + "^" + window.devicePixelRatio + "^" + window.innerHeight + "^" + window.innerWidth;
                preLogin.set("mdevice", mdevicestat);
                preLogin.set("merchantcode", merchant);
                preLogin.set("customer", customer);
                preLogin.set("segmentcode", segmentcode);
                window.localStorage.setItem("mdevicestat", mdevicestat);
                window.localStorage.setItem("merchant", merchant);
                window.localStorage.setItem("appad_location", appad_location);
                window.localStorage.setItem("appad_location_short", appad_location_short);
                window.localStorage.setItem("social_email", supportemail + "  \n");
                window.localStorage.setItem("social_telephone", customercaretelephone);
                window.localStorage.setItem("social_subject", emailsubject);
                window.localStorage.setItem("share_image", share_image);
                window.localStorage.setItem("brand", "");
                window.localStorage.setItem("faqcategory", "");
                window.localStorage.setItem("loginmode", "");
                window.localStorage.setItem("static_social_msg", static_social_msg);
                window.localStorage.setItem("category", "");
                window.localStorage.setItem("merchant", merchant);
                fbCleanVariables();
                noAlcoholCountry();
                $.ajax({
                    type: "POST",
                    cache: false,
                    async: true,
                    timeout: 20000,
                    url: gurl + "/initAccess.aspx",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({
                        merchantcode: merchant, mdevice: mdevicestat
                    }),
                    success: function (data) {
                        var getData = JSON.parse(data);
                        //  alert(data);
                        if (getData.statuscode === "000") {
                            //  firsttime = "1";  
                            googleapikey = getData.googleapikey;
                            city = getData.citycode;
                            country = getData.countrycode;
                            positiono = getData.position.split(",");
                            lat = positiono[0];
                            lon = positiono[1];
                            window.localStorage.setItem("activateinfo", getData.activateinfo);
                            window.localStorage.setItem("latl", lat);
                            window.localStorage.setItem("lonl", lon);
                            window.localStorage.setItem("isfenceset", "0");
                            appad_location = getData.appad_location;
                            appad_location_short = getData.appad_location_short;
                            window.localStorage.setItem("appad_location", appad_location);
                            window.localStorage.setItem("appad_location_short", appad_location_short);
                            hideSpin(); //hide loading popup


                            //   if ( window.localStorage.getItem("newinfo")=== null &&  window.localStorage.getItem("activateinfo")==="1") {
                            //       $("#modalviewinfo").data("kendoMobileModalView").open();
                            //   }
                        } else if (getData.statuscode === "047") {
                            $("body").data("kendoMobilePane").navigate("views/deviceBlock.html");
                        } else {
                            navigator.notification.alert("Platform Error 1. Please close the app and log in again. " + getData.statusText, function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    },
                    error: function (errormsg) {
                        navigator.notification.alert("Platform Error 2. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                });


                navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
                    lat = position.coords.latitude;
                    lon = position.coords.longitude;
                    window.localStorage.setItem("latl", lat);
                    window.localStorage.setItem("lonl", lon);
                    propertygeo = [];
                    $.ajax({
                        type: "POST",
                        cache: false,
                        async: true,
                        timeout: 20000,
                        url: gurl + "/outletlist.aspx",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({
                            merchantcode: merchant, category: "", brandcode: "", mdevice: window.localStorage.getItem("mdevicestat"), outletcode: "", preflocation: window.localStorage.getItem("distance"), prefcuisine: window.localStorage.getItem("cuisine"), prefcelebration: "", prefrestaurant: window.localStorage.getItem("restaurant"), lat: window.localStorage.getItem("latl"), lon: window.localStorage.getItem("lonl"), customer: ""

                        }), success: function (data) {
                            var getData = JSON.parse(data);
                            var i = 0;
                            if (getData.statuscode === "000") {
                                if (getData.outletlist.length > 0) {
                                    while (i <= getData.outletlist.length - 1) {
                                        //alert("Adding GEofence location");
                                        window.geofence.addOrUpdate({
                                            id: getData.outletlist[i].outletcode,
                                            latitude: Number(getData.outletlist[i].lat),
                                            longitude: Number(getData.outletlist[i].lon),
                                            radius: Number(getData.outletlist[i].radius),
                                            transitionType: TransitionType.BOTH,
                                            notification: {
                                                id: Number(i),
                                                title: getData.outletlist[i].outletname,
                                                text: getData.outletlist[i].smessage,
                                                openAppOnClick: true
                                            }
                                        }).then(function () {
                                            console.log(getData.outletlist[i].outletcode + 'Geofence successfully added');
                                        }, function (reason) {
                                            console.log(getData.outletlist[i].outletcode + 'Adding geofence failed', reason);
                                        })

                                        window.localStorage.setItem("isfenceset", "1");
                                        i++;
                                        hideSpin(); //hide loading popup
                                    }


                                } else {
                                    navigator.notification.alert("Due to a system error, the property details cannot be displayed. Please close the app and log in again. ", function () {
                                    }, "SNTTA Travel", "Dismiss")
                                    hideSpin(); //hide loading popup
                                }
                            } else {
                                navigator.notification.alert("Due to a system error, the property details cannot be displayed. " + getData.statusdesc, function () {
                                }, "SNTTA Travel", "Dismiss")
                                hideSpin(); //hide loading popup
                            }
                        },
                        error: function (error) {
                            navigator.notification.alert("Due to a system error, the property details cannot be displayed.  Please check your network connection and try again.", function () {
                            }, "SNTTA Travel", "Dismiss")
                        }
                    });






                    window.geofence.onTransitionReceived = function (geofences) {
                        geofences.forEach(function (geo) {
                            processRegionMonitorCallback(geo);
                        });
                    }
                }
                    , function onErrorShowMap(error) {
                        gpsError();
                    }, positionOption);































                if ((window.localStorage.getItem("password") != undefined) && (window.localStorage.getItem("password") != "")) {
                    customer = window.localStorage.getItem("customer");
                    customername = window.localStorage.getItem("customername");
                    segmentcode = window.localStorage.getItem("segmentcode");
                    segmentname = window.localStorage.getItem("segmentname");
                    currency = window.localStorage.getItem("currency");
                    nationality = window.localStorage.getItem("nationality");
                    pointvalue = window.localStorage.getItem("pointvalue");
                    cuspict = window.localStorage.getItem("cuspict");
                    cusqr = window.localStorage.getItem("cusqr");
                    emailid = window.localStorage.getItem("emailid");
                    mobilenumber = window.localStorage.getItem("mobilenumber");
                    memberexpiry = window.localStorage.getItem("memberexpiry");
                    segmentimage = window.localStorage.getItem("segmentimage");
                    pushoffer = window.localStorage.getItem("pushoffer");
                    remindexpiry = window.localStorage.getItem("remindexpiry");
                    showprofile = window.localStorage.getItem("showprofile");
                    password = window.localStorage.getItem("password");
                    mdevice = window.localStorage.getItem("mdevice");
                    muuid = window.localStorage.getItem("muuid");
                    mversion = window.localStorage.getItem("mversion");
                    mplatform = window.localStorage.getItem("mplatform");
                    autolocation = window.localStorage.getItem("autolocation");
                    city = window.localStorage.getItem("city");
                    country = window.localStorage.getItem("country");
                    magicnumber = window.localStorage.getItem("magicnumber");
                    firstname = window.localStorage.getItem("firstname");
                    birthdate = window.localStorage.getItem("birthdate");
                    displaybirthdate = window.localStorage.getItem("displaybirthdate");
                    residentcity = window.localStorage.getItem("residentcity");
                    homecountry = window.localStorage.getItem("homecountry");
                    initdate = window.localStorage.getItem("initdate");
                    spend = window.localStorage.getItem("spend");
                    maxspend = window.localStorage.getItem("maxspend");
                    fbid = window.localStorage.getItem("fbid");
                    alcohol = window.localStorage.getItem("alcohol");
                    homecountryname = window.localStorage.getItem("homecountryname");
                    residentcityname = window.localStorage.getItem("residentcityname");
                    $("body").data("kendoMobilePane").navigate("views/pl-explore.html");
                } else {

                    outletcode = "";
                    brandcode = "";
                    offercode = "";
                    benefitcode = "";
                    offertype = "1";
                    password = "";
                    customer = "9999999999";
                    window.localStorage.setItem("customer", customer);
                    customername = "Guest";
                    segmentcode = "";
                    segmentname = "";
                    currency = "";
                    nationality = "";
                    pointvalue = "";
                    cuspict = "";
                    cusqr = "";
                    emailid = "";
                    mobilenumber = "";
                    memberexpiry = "";
                    segmentimage = "";
                    magicnumber = "";
                    firstname = "";
                    birthdate = "";
                    residentcity = "";
                    homecountry = "";
                    initdate = "";
                    alcohol = "";
                    homecountryname = "";
                    residentcityname = "";
                }

                var pushSettings = {
                    iOS: {
                        badge: "true",
                        sound: "true",
                        alert: "true",
                        clearBadge: "true"
                    },
                    android: {
                        senderID: googleApiProjectNumber
                    },
                    wp8: {
                        channelName: 'EverlivePushChannel'
                    },
                    notificationCallbackIOS: onPushNotificationReceived,
                    notificationCallbackAndroid: onPushNotificationReceived,
                    notificationCallbackWP8: onPushNotificationReceived,
                    customParameters: {
                        Memberid: customer,
                        Merchant: merchant,
                        Segment: segmentcode,
                        devicecode: muuid
                    }
                };

                if (window.localStorage.getItem("notification") == undefined || window.localStorage.getItem("notification") == '' || window.localStorage.getItem("notification") == 'null') {
                    //Enable and Register
                    currentDevice.enableNotifications(pushSettings, function (data) {
                        currentDevice.register(pushSettings, function (data) {
                        }, function (err) {
                        });
                        //Set notification to 1 so that its not registered again
                        window.localStorage.setItem("notification", "1");
                    }, function (err) {
                    });
                } else {
                    if (window.localStorage.getItem("notification") === "1") {
                        currentDevice.getRegistration(function () {
                            currentDevice.unregister().then(function () {
                            }, function (err) {
                            });
                            currentDevice.enableNotifications(pushSettings, function (data) {
                                currentDevice.register(pushSettings, function (data) {
                                }, function (err) {
                                });
                            }, function (err) {
                            });
                        }, function (err) { //If not registered then enable and register
                            currentDevice.enableNotifications(pushSettings, function (data) {
                                currentDevice.register(pushSettings, function (data) {
                                }, function (err) {
                                });
                            }, function (err) {
                            });
                        });
                    }
                }
            } else {
                if (window.localStorage.getItem("isfenceset") === "0") {
                    startMonitor();
                    window.localStorage.setItem("isfenceset", "1");
                }
            }




  if (newsearch==""){
            window.localStorage.setItem("origin", "");
            window.localStorage.setItem("destination", "");
            window.localStorage.setItem("origindes","");
            window.localStorage.setItem("destinationdes","");
  }else   if (newsearch=="1") {
       document.getElementById("owfrom").innerHTML=window.localStorage.getItem("origindes") != "" ? window.localStorage.getItem("origindes") : "Origin City";
       document.getElementById("owto").innerHTML=window.localStorage.getItem("destinationdes") != "" ? window.localStorage.getItem("destinationdes") : "Destination City";
   }

            window.localStorage.setItem("traveldate", "");
            window.localStorage.setItem("returndate", "");
            window.localStorage.setItem("cabinclass", "");
            window.localStorage.setItem("adult", "0");
            window.localStorage.setItem("child", "0");
            window.localStorage.setItem("infant", "0");
            window.localStorage.setItem("journeyheader", "");
            window.localStorage.setItem("journeysubheader", "");
            window.localStorage.setItem("passenger", "0");
            window.localStorage.setItem("traceid", "");
            document.getElementById("owtraveldate").valueAsDate = new Date();//today;
            document.getElementById("rettraveldate").valueAsDate = new Date();// today;
            document.getElementById("retreturndate").valueAsDate = new Date();//today;

            hideSpin();
            return;
        },

        loginInit
        : function () {
            window.localStorage.setItem("setpintype", "1");
            preLogin.set("password", "");
            preLogin.set("username", "");
            if (window.localStorage.getItem("mobilelogin").length > 0) {
                preLogin.set("username", window.localStorage.getItem("mobilelogin"));
                document.getElementById("username").readOnly = "true";
                document.getElementById("username").style.color = "#343232";
            }
        },
        initToken
        : function () {
            preLogin.set("tokennum", "");
            window.localStorage.setItem("setpintype", "3");
        },

        initSMS
        : function () {
            showSpin();
            window.localStorage.setItem("smsreference", "");
            preLogin.set("smsnum", "");

            if (window.localStorage.getItem("mfirstname") === null) {
                window.localStorage.setItem("mfirstname", "");
            }

            if (window.localStorage.getItem("mlastname") === null) {
                window.localStorage.setItem("mlastname", "");
            }

            if (window.localStorage.getItem("memailid") === null) {
                window.localStorage.setItem("memailid", "");
            }

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/sendSMSEnrolment.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), firstname: window.localStorage.getItem("mfirstname"), lastname: window.localStorage.getItem("mlastname"), mobile: window.localStorage.getItem("mobilelogin"), emailid: window.localStorage.getItem("memailid"), mdevice: mdevicestat
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode === "000") {
                        window.localStorage.setItem("smsreference", getData.referencenumber);
                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert(getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss");
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("There was an error generating the SMS Code. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },
        initSMS1
        : function () {
            showSpin();
            window.localStorage.setItem("smsreference", "");
            preLogin.set("smsnum1", "");


            if (window.localStorage.getItem("mfirstname") === null) {
                window.localStorage.setItem("mfirstname", "");
            }

            if (window.localStorage.getItem("mlastname") === null) {
                window.localStorage.setItem("mlastname", "");
            }

            if (window.localStorage.getItem("memailid") === null) {
                window.localStorage.setItem("memailid", "");
            }

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/sendSMSEnrolment1.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), firstname: window.localStorage.getItem("mfirstname"), lastname: window.localStorage.getItem("mlastname"), mobile: window.localStorage.getItem("mobilelogin"), emailid: window.localStorage.getItem("memailid"), mdevice: mdevicestat

                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode === "000") {
                        window.localStorage.setItem("smsreference", getData.referencenumber);
                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert(getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss");
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("There was an error generating the SMS Code. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },
        initPin
        : function () {
            preLogin.set("pin1", "");
            preLogin.set("pin2", "");
        },

        updateRememberMe
        : function () {
            if ($("#profile-rememberme").data("kendoMobileSwitch").check()) {
                window.localStorage.setItem("memberID", this.username);
            } else {
                window.localStorage.setItem("memberID", "");
            }
        },

        validateMobile
        : function () {
            if (!this.username) {
                navigator.notification.alert("Please enter a valid Mobile number.", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            window.localStorage.setItem("mobilelogin", String(this.username));
            $("body").data("kendoMobilePane").navigate("views/smsValidation1.html");
        },

        validateUser
        : function () {
            if (!this.username) {
                navigator.notification.alert("Please enter a valid Mobile Number.", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            if (!this.password) {
                navigator.notification.alert("Please enter a valid 4 digit numeric PIN", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            if (isNaN(this.password)) {
                navigator.notification.alert("Please enter a valid 4 digit numeric PIN", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            customer = this.username
            password = this.password;

            showSpin();
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/validateUser.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, customer: customer, password: password, mdevice: mdevicestat, mdevicef: mdevice, muuid: muuid, mversion: mversion, mplatform: mplatform, mfirsttime: window.localStorage.getItem("notification"), mmagicnumber: "Y", fbuserid: window.localStorage.getItem("FBuserID"), loginmode: window.localStorage.getItem("loginmode"), pinverified: "N", newapp: "Y"
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode == "000") { //Login Successful

                        customer = getData.customerid;
                        customername = getData.customername;
                        fullname = getData.fullname;
                        segmentcode = getData.segmentcode;
                        segmentname = getData.segmentname;
                        currency = getData.currency;
                        nationality = getData.nationality;
                        pointvalue = getData.pointvalue;
                        cuspict = getData.imageurl;
                        cusqr = getData.qrurl;
                        emailid = getData.emailid;
                        mobilenumber = getData.mobilenumber;
                        formattedmobile = mobilenumber;
                        memberexpiry = getData.memberexpiry;
                        segmentimage = getData.segmentimage;
                        pushoffer = getData.pushoffer;
                        remindexpiry = getData.remindexpiry;
                        showprofile = getData.showprofile;
                        autolocation = getData.autolocation;
                        city = getData.city;
                        country = getData.country;
                        magicnumber = getData.magicnumber;
                        firstname = getData.firstname;
                        initdate = getData.initdate;
                        homecountry = getData.homecountry;
                        birthdate = getData.dateofbirth;
                        displaybirthdate = getData.displaydateofbirth;
                        residentcity = getData.residentcity;
                        pinnumber = getData.pinnumber;
                        spend = getData.spend;
                        maxspend = getData.maxspend;
                        fbid = getData.fbid;
                        alcohol = getData.alcohol;
                        homecountryname = getData.homecountryname;
                        residentcityname = getData.residentcityname;
                        //set Local Storage as cookies to retain login
                        window.localStorage.setItem("enrolmentcomplete", "1");
                        window.localStorage.setItem("mobilelogin", mobilenumber);
                        window.localStorage.setItem("customer", customer);
                        window.localStorage.setItem("customername", customername);
                        window.localStorage.setItem("segmentcode", segmentcode);
                        window.localStorage.setItem("segmentname", segmentname);
                        window.localStorage.setItem("currency", currency);
                        window.localStorage.setItem("nationality", nationality);
                        window.localStorage.setItem("pointvalue", pointvalue);
                        window.localStorage.setItem("cuspict", cuspict);
                        window.localStorage.setItem("cusqr", cusqr);
                        window.localStorage.setItem("emailid", emailid);
                        window.localStorage.setItem("mobilenumber", mobilenumber);
                        window.localStorage.setItem("memberexpiry", memberexpiry);
                        window.localStorage.setItem("segmentimage", segmentimage);
                        window.localStorage.setItem("pushoffer", pushoffer);
                        window.localStorage.setItem("remindexpiry", remindexpiry);
                        window.localStorage.setItem("showprofile", showprofile);
                        window.localStorage.setItem("mdevice", mdevice);
                        window.localStorage.setItem("muuid", muuid);
                        window.localStorage.setItem("mversion", mversion);
                        window.localStorage.setItem("mplatform", mplatform);
                        window.localStorage.setItem("autolocation", autolocation);
                        window.localStorage.setItem("city", city);
                        window.localStorage.setItem("country", country);
                        window.localStorage.setItem("magicnumber", magicnumber);
                        window.localStorage.setItem("residentcity", residentcity);
                        window.localStorage.setItem("homecountry", homecountry);
                        window.localStorage.setItem("birthdate", birthdate);
                        window.localStorage.setItem("displaybirthdate", displaybirthdate);
                        window.localStorage.setItem("firstname", firstname);
                        window.localStorage.setItem("initdate", initdate);
                        window.localStorage.setItem("spend", spend);
                        window.localStorage.setItem("maxspend", maxspend);
                        window.localStorage.setItem("fbid", fbid);
                        window.localStorage.setItem("alcohol", alcohol);
                        window.localStorage.setItem("homecountryname", homecountryname);
                        window.localStorage.setItem("fullname", fullname);
                        window.localStorage.setItem("residentcityname", residentcityname);

                        pushSettings = {
                            iOS: {
                                badge: "true",
                                sound: "true",
                                alert: "true",
                                clearBadge: "true"
                            },
                            android: {
                                senderID: googleApiProjectNumber
                            },
                            wp8: {
                                channelName: 'EverlivePushChannel'
                            },
                            notificationCallbackIOS: onPushNotificationReceived,
                            notificationCallbackAndroid: onPushNotificationReceived,
                            notificationCallbackWP8: onPushNotificationReceived,
                            customParameters: {
                                Memberid: customer,
                                Merchant: merchant,
                                Segment: segmentcode,
                                devicecode: muuid
                            }
                        };

                        if (window.localStorage.getItem("notification") === "1") {
                            //Re-register the device with updates
                            currentDevice.getRegistration(function () {
                                currentDevice.unregister().then(function () {
                                }, function (err) {
                                });
                                currentDevice.enableNotifications(pushSettings, function (data) {
                                    currentDevice.register(pushSettings, function (data) {
                                    }, function (err) {
                                    });
                                }, function (err) {
                                });
                            }, function (err) {
                            });
                            window.localStorage.setItem("notification", "1");
                        }
                        window.localStorage.setItem("loginmode", "");
                        window.localStorage.setItem("FBuserID", "");

                        if ((getData.deviceinfo.length === 0)) {
                            $("body").data("kendoMobilePane").navigate("views/tokenpage.html");
                        } else if (pinnumber.length === 0) {
                            $("body").data("kendoMobilePane").navigate("views/setpin.html");
                        } else {
                            password = getData.certificate;
                            window.localStorage.setItem("password", password);
                            window.localStorage.setItem("loggedin", "1");

                            $("body").data("kendoMobilePane").navigate("views/pl-explore.html");
                        }
                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert(getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        window.localStorage.setItem("loginmode", "");
                        window.localStorage.setItem("FBuserID", "");
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Login failed.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    window.localStorage.setItem("loginmode", "");
                    window.localStorage.setItem("FBuserID", "");

                    hideSpin(); //hide loading popup
                }
            });
        },

        validateToken
        : function () {
            if (!this.tokennum) {
                navigator.notification.alert("Please enter a valid Token number. ", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            // window.localStorage.setItem("memberID", this.username);
            // m = window.localStorage.getItem("memberID");
            //  alert(m);
            mvalidaterequest = "1"; //Device Change
            showSpin();

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/validateToken.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({



                    merchantcode: merchant, customer: customer, token: this.tokennum, mdevice: mdevicestat, mdevicef: mdevice, muuid: muuid, mversion: mversion, mplatform: mplatform, validatetype: mvalidaterequest, tokenreference: window.localStorage.getItem("smsreference")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") { //Login Successful  
                        // if (getData.pinnumber.length > 0) {
                        password = getData.certificate;
                        window.localStorage.setItem("password", password); //Get and Store Certificate
                        window.localStorage.setItem("loggedin", "1");

                        $("body").data("kendoMobilePane").navigate("views/pl-explore.html");

                        hideSpin(); //hide loading popup
                        //   }else {
                        //        $("body").data("kendoMobilePane").navigate("views/setpin.html");  
                        //     }
                    } else {
                        navigator.notification.alert(getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Login failed.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },



        validateSMS
        : function () {
            if (!this.smsnum) {
                navigator.notification.alert("Please enter a valid Code received on SMS. ", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            showSpin();
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/validateSMS.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, tokenreference: window.localStorage.getItem("smsreference"), token: this.smsnum, mdevice: mdevicestat
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        window.localStorage.setItem("smsreference", "");
                        if (window.localStorage.getItem("setpintype") == "3") {
                            $("body").data("kendoMobilePane").navigate("views/pl-explore.html");
                        } else {
                            $("body").data("kendoMobilePane").navigate("views/setpin.html");
                        }
                    } else {
                        navigator.notification.alert("The Validation Code entered is incorrect, please enter the correct Validation Code.", function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Unable to validate the Code.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        validateSMS1
        : function () {
            if (!this.smsnum1) {
                navigator.notification.alert("Please enter a valid Code received on SMS. ", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            showSpin();
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/validateSMS.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, tokenreference: window.localStorage.getItem("smsreference"), token: this.smsnum1, mdevice: mdevicestat
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        window.localStorage.setItem("smsreference", "");
                        if (window.localStorage.getItem("setpintype") == "3") {
                            $("body").data("kendoMobilePane").navigate("views/pl-explore.html");
                        } else {
                            $("body").data("kendoMobilePane").navigate("views/setpin.html");
                        }
                    } else {
                        navigator.notification.alert("The Validation Code entered is incorrect, please enter the correct Validation Code.", function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Unable to validate the Code.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },


        savePIN
        : function () {
            if (!this.pin1 || !this.pin2) {
                navigator.notification.alert("Enter a valid 4 digit numeric PIN", function () {
                }, "SNTTA Travel", "Dismiss");

                return;
            }

            if (isNaN(this.pin1) || isNaN(this.pin2)) {
                navigator.notification.alert("Enter a valid 4 digit numeric PIN", function () {
                }, "SNTTA Travel", "Dismiss");

                return;
            }

            if (this.pin1 != this.pin2) {
                navigator.notification.alert("PIN Numbers do not match, please re-enter a valid PIN.", function () {
                }, "SNTTA Travel", "Dismiss");

                return;
            }

            if (String(this.pin2).length != 4) {
                navigator.notification.alert("Enter a valid 4 digit numeric PIN", function () {
                }, "SNTTA Travel", "Dismiss");

                return;
            }

            showSpin();
            if (window.localStorage.getItem("setpintype") == "0") {
                doExecute(this.pin2);
            } else if (window.localStorage.getItem("setpintype") == "1") {
                createPIN(this.pin2, "0");
            }
            preLogin.set("pin1", "");
            preLogin.set("pin2", "");
        },

        requestPasswordChangeURL:
        function () {
            if (!this.emailid1) {
                navigator.notification.alert("Please enter a valid email address.", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }

            // window.localStorage.setItem("memberID", this.username);
            // m = window.localStorage.getItem("memberID");
            //  alert(m);
            showSpin();

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/passResetRequest.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, customerid: "", emailid: this.emailid1, mdevice: mdevicestat, mmagicnumber: ""
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode == "000") { //Login Successful
                        navigator.notification.alert("A URL has been sent to your registered email with a link to set your new password. ", function () {
                        }, "SNTTA Travel", "Dismiss");
                        preLogin.set("username1", "");
                        preLogin.set("emailid1", "");
                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Unable to send the password reset URL. Please restart the app and try resetting your password again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Unable to send the password reset URL. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        benefitlist
        : function () {
            benefitcode = "";//initialize benefit code
            showSpin(); //show loading popup
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/benefitlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, benefitcode: benefitcode, mdevice: mdevicestat
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        //fill the outlet template
                        if (getData.benefitlist.length > 0) {
                            $("#benefit-list-view").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.benefitlist }),
                                template: $("#benefitlistTemplate").html()
                            });
                            hideSpin(); //hide loading popup
                        } else {
                            navigator.notification.alert("Due to a system error, the Benefit details are not available. Please close the app and log in again. ", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, the Benefit details are not available. Please close the app and log in again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, the Benefit details are not available. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },
        getfaq
        : function () {
            showSpin(); //show loading popup
            var t = document.getElementById("selCountry").value;
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/faqlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, mdevice: mdevicestat, category: t
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode === "000") {
                        //fill the outlet template
                        $("#faqlist1").kendoMobileListView({
                            dataSource: kendo.data.DataSource.create({ data: getData.faqlist }),
                            template: $("#faqTemplate1").html()
                        });

                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, the FAQs cannot be displayed. Please restart the app and try again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, the FAQs cannot be displayed  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup                                          
                }
            });
        },
        plgetfaq
        : function () {
            showSpin(); //show loading popup
            var t = document.getElementById("selCountry1").value;
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backg").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backg").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backg").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backg").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrg").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrg").style.backgroundSize = "cover";
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/faqlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, mdevice: mdevicestat, category: t
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode === "000") {
                        //fill the outlet template
                        $("#pfaqlist1").kendoMobileListView({
                            dataSource: kendo.data.DataSource.create({ data: getData.faqlist }),
                            template: $("#pfaqTemplate1").html()
                        });

                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, the FAQs cannot be displayed. Please restart the app and try again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, the FAQs cannot be displayed  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup                                          
                }
            });
        },
        getFAQFilter: function () {
            var dataSource = new kendo.data.DataSource({ data: getFAQData() });

            $("#FAQ-Filter").kendoMobileListView({
                dataSource: dataSource,
                template: $("#FAQ-Template").html()


            });
        }
    });

    window.postLogin = kendo.observable({
        outlettelephone: "",
        transactionref: "",
        couponcode: "",
        couponname: "",
        couponcategory: "",
        msgsequence: "",
        emailid1: "",
        mobile1: "",
        date1: "",
        hotelnumber1: "",
        homecountry1: "",
        residentcity1: "",
        newpin1: "",
        newpin2: "",
        srpin1: "",
        depin1: "",
        setpass: "",
        msgsequence: "",
        lifestyle: "",



        enterPinForRedemption: function () {
            window.localStorage.setItem("selfredeem", "D");
            $("#modalviewenterpin").data("kendoMobileModalView").open();
        },

        closeOfferFilterView1: function () {
            window.localStorage.setItem("mcategory", "");
            window.localStorage.setItem("offer-reload", "1");
            ul = document.getElementById("pl-offer-filter");
            items = ul.getElementsByTagName("input");

            //check where checked
            for (i = 0; i < items.length; i++) {
                y = items[i].checked ? "1" : "0";
                if (y === "1") {
                    window.localStorage.setItem("mcategory", items[i].value);
                }
            }

            $("#plmodalviewofferfilter").data("kendoMobileModalView").close();
            postLogin.rewardList();
        },

        noAlcoholStart: function () {
            $("#profile-alcohol").data("kendoMobileSwitch").check(true);
        },
        noAlcohol: function () {
            for (var i = 0; i < noalcohollist.length; i++) {
                if (document.getElementById("selCountry").value === noalcohollist[i]) {
                    $("#profile-alcohol").data("kendoMobileSwitch").check(false);
                    break;
                }
            }
        },

        destroydiscountpinmember: function () {
            $("#modalviewenterpin").remove();
        },

        destroydiscountpinstaff: function () {
            $("#modalviewstaffpin").remove();
        },

        destroyhowitworks: function () {
            $("#pl-howitworks").remove();
        },
        destroyplaboutisme: function () {
            $("#pl-aboutisme-theme").remove();
        },
        destroyplbenefitdetail: function () {
            $("#pl-benefit-theme").remove();
        },
        destroyplconfirmdiscount: function () {
            $("#pl-confirmredemption-view").remove();
        },
        destroyplconfirmdiscountblack: function () {
            $("#pl-confirmredemptionblack-view").remove();
        },
        destroyplconfirmpage: function () {
            $("#pl-confirmpage-view").remove();
        },
        destroyplconfirmvoucher: function () {
            $("#pl-voucheredeem-view").remove();
        },
        destroyplconfirmvoucherblack: function () {
            $("#pl-voucheredeemblack-view").remove();
        },

        destroyplbranddetail: function () {
            window.localStorage.setItem("outlet", "");
            $("#pl-branddetail-theme").remove();
        },
        destroyplcustomerservice: function () {
            $("#pl-customerservice-theme").remove();
        },
        destroyplexplorelist: function () {
            $("#pl-explorelist-view").remove();
        },

        destroyplfavorites: function () {
            $("#myfavorite-view").remove();
        },

        destroyplhistorylist: function () {
            $("#history-theme").remove();
        },

        destroyplhome: function () {
            $("#pl-home-view").remove();
        },

        destroyplhomeplus: function () {
            $("#pl-home-view-plus").remove();
        },

        destroyplleisurelist: function () {
            $("#liesurelist-theme").remove();
        },
        destroyplleisurelistb: function () {
            $("#pl-liesurelistb-theme").remove();
        },

        destroyplmessageitem: function () {
            $("#messageitem-theme").remove();
        },

        destroymymessagelist: function () {
            $("#mymessagelist-theme").remove();
        },

        destroyplmyprofile: function () {
            $("#pl-myprofile-view").remove();
        },

        destroyplmyreward: function () {
            $("#pl-mywallet-theme").remove();
        },

        destroyplmyvoucherdetail: function () {
            $("#pl-myvoucherdetail-theme").remove();
        },

        destroyplofferdetail: function () {
            $("#pl-offerdetail-theme").remove();
        },

        destroyplofferlist: function () {
            $("#pl-offerlist-view").remove();
        },

        destroyploutletdetail: function () {
            // document.getElementById("pl-detail-title").innerHTML = "";
            window.localStorage.setItem("outlet", "");
            $("#pl-outletdetail-theme").remove();
        },
        destroyploutletlist: function () {
            //doOneBack();
            $("#pl-outletlist-theme").remove();
        },
        destroyploutletlistb: function () {
            // doOneBack();
            $("#pl-outletlistb-theme").remove();
        },
        destroyplsetting: function () {
            $("#pl-setting-theme").remove();
        },

        destroypltermsandcondition: function () {
            //doOneBack();
            $("#pl-termsconditions-theme").remove();
        },


        homeViewDestroy: function () {
            //doOneBack();
            $("#pl-explore-view").remove();
        },




        getSummary: function () {
            showSpin();
            clearAllVariables();

            //changeCard(window.localStorage.getItem("segmentcode"));  
            if (firsttime === "" || showsummary === "") {
                $.ajax({
                    type: "POST",
                    cache: false,
                    async: true,
                    timeout: 20000,
                    url: gurl + "/summaryReport.aspx",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({
                        merchantcode: window.localStorage.getItem("merchant"), customerid: window.localStorage.getItem("customer"), password: window.localStorage.getItem("password"), mdevice: window.localStorage.getItem("mdevicestat")
                    }),
                    success: function (data) {
                        var getData = JSON.parse(data);
                        //            alert(getData.rewardpointbalance);
                        if (getData.statuscode == "000") {
                            //document.getElementById("home-page").style.display = "block";
                            window.localStorage.setItem("spend", getData.spenda);
                            window.localStorage.setItem("maxspend", getData.maxspend);
                            window.localStorage.setItem("spendmb", getData.rewardpointbalance);
                            window.localStorage.setItem("spendn", getData.spendbalanceN);
                            //     spendBar();
                            hideSpin(); //hide loading popup
                        } else {
                            navigator.notification.alert("Due to a system error, your Rewards cannot be displayed. Please restart the app and try accessing it again.  " + getData.statusdesc, function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    },
                    error: function (errormsg) {
                        navigator.notification.alert("Due to a system error, your Rewards cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                });
            }
            hideSpin();
            //   spendBar();
        },



        getSummaryplus: function () {
            showSpin();
            clearAllVariables();

            if (window.localStorage.getItem("segmentcode") === "1003") {
                document.getElementById("profile-type-p").innerHTML = "";//isme";

                document.getElementById("post-image").style.backgroundImage = "url(images/home_page_logo_black.png)";
                elems = document.getElementById("pl-home-view-plus");

                elclass = elems.getElementsByClassName('km-content');
                for (i = 0; i < elclass.length; i++) {
                    elclass[i].style.backgroundColor = "#fff";
                }

                elems = document.getElementsByClassName('strip-item-a');
                for (i = 0; i < elems.length; i++) {
                    elems[i].style.backgroundColor = "#fff";
                    elems[i].style.color = "#000";
                }

                elems = document.getElementsByClassName('cwhite');
                for (i = 0; i < elems.length; i++) {
                    elems[i].style.color = "#000";
                }

                elems = document.getElementsByClassName('searchbox');
                for (i = 0; i < elems.length; i++) {
                    elems[i].style.border = "1px solid #999";
                }

                elems = document.getElementById("home-plus-box");
                elclass = elems.getElementsByClassName('km-button');
                for (i = 0; i < elclass.length; i++) {
                    elclass[i].style.border = "1px solid #000";
                }

                elems = document.getElementsByClassName('button-frame-inline-round-menu');
                for (i = 0; i < elems.length; i++) {
                    elems[i].style.color = "#000";
                }
            } else {
                document.getElementById("profile-type-p").innerHTML = "";//isme Elite";
                document.getElementById("post-image").style.backgroundImage = "url(images/home_page_logo_white.png)";
            }

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/summaryReport.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), customerid: window.localStorage.getItem("customer"), password: window.localStorage.getItem("password"), mdevice: window.localStorage.getItem("mdevicestat")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        window.localStorage.setItem("spend", getData.spenda);
                        window.localStorage.setItem("maxspend", getData.maxspend);
                        window.localStorage.setItem("spendmb", getData.spendbalance);
                        window.localStorage.setItem("spendn", getData.spendbalanceN);
                        window.localStorage.setItem("vouchercount", getData.vouchercount);
                        window.localStorage.setItem("expirycount", getData.expirycount);
                        window.localStorage.setItem("expirydays", getData.expirydays);

                        spendBarPlus();

                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, your Rewards cannot be displayed. Please restart the app and try accessing it again.  " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, your Rewards cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
            //  }else {
            //spendBarPlus();
            //   }
        },

        loadProfile
        : function () {
            changeCard(window.localStorage.getItem("segmentcode"));
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backz").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backz").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backz").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backz").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrz").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrz").style.backgroundSize = "cover";
            document.getElementById("profile-picture-1").src = window.localStorage.getItem("cuspict");
            document.getElementById("pro-name").innerHTML = (window.localStorage.getItem("fullname") != null && window.localStorage.getItem("fullname").length > 0) ? "Name : " + window.localStorage.getItem("fullname") : "Name : NA";
            document.getElementById("pro-birthdate").innerHTML = (window.localStorage.getItem("birthdate") != null && window.localStorage.getItem("birthdate").length > 0) ? "My Birthday : " + window.localStorage.getItem("displaybirthdate") : "My Birthday : NA";
            document.getElementById("pro-homecountry").innerHTML = (window.localStorage.getItem("homecountry") != null) && window.localStorage.getItem("homecountry").length > 0 ? "Nationality : " + window.localStorage.getItem("homecountryname") : "Nationality : NA";
            document.getElementById("pro-residentcity").innerHTML = (window.localStorage.getItem("residentcity") != null && window.localStorage.getItem("residentcity").length > 0) ? "Emirate : " + window.localStorage.getItem("residentcityname") : "Emirate : NA";
            //document.getElementById("pro-number").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? "Member # : " + window.localStorage.getItem("customer") : "Member # : NA";
            //document.getElementById("pro-init").innerHTML = (window.localStorage.getItem("initdate") != null && window.localStorage.getItem("initdate").length > 0) ? "Member Since : " + window.localStorage.getItem("initdate") : "Member Since : NA";
            document.getElementById("pro-expiry").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            //document.getElementById("pro-hotelmember").innerHTML = (window.localStorage.getItem("magicnumber") != null && window.localStorage.getItem("magicnumber").length > 0) ? "Jumeirah Sirius No. : " + window.localStorage.getItem("magicnumber") : "Jumeirah Sirius No. : NA";
            if (window.localStorage.getItem("segmentcode") === "1003") {
                document.getElementById("pro-type").innerHTML = "SNTTA Gold";
            } else {
                document.getElementById("pro-type").innerHTML = "SNTTA Elite";
            }
        },

        logMeOut: function () {
            showSpin();
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/logmeout.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), customerid: window.localStorage.getItem("customer"), password: window.localStorage.getItem("password"), mdevice: window.localStorage.getItem("mdevicestat")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    //clear Local Storage on logout
                    window.localStorage.setItem("firstname", "");
                    window.localStorage.setItem("customername", "Guest");
                    window.localStorage.setItem("segmentcode", "");
                    window.localStorage.setItem("segmentname", "");
                    window.localStorage.setItem("currency", "");
                    window.localStorage.setItem("nationality", "");
                    window.localStorage.setItem("pointvalue", "");
                    window.localStorage.setItem("cuspict", "");
                    window.localStorage.setItem("cusqr", "");
                    window.localStorage.setItem("emailid", "");
                    window.localStorage.setItem("mobilenumber", "");
                    window.localStorage.setItem("memberexpiry", "");
                    window.localStorage.setItem("segmentimage", "");
                    window.localStorage.setItem("pushoffer", "");
                    window.localStorage.setItem("remindexpiry", "");
                    window.localStorage.setItem("showprofile", "");
                    window.localStorage.setItem("password", "");
                    window.localStorage.setItem("loggedin", "");
                    window.localStorage.setItem("residentcity", "");
                    window.localStorage.setItem("homecountry", "");
                    window.localStorage.setItem("birthdate", "");
                    window.localStorage.setItem("displaybirthdate", "");
                    window.localStorage.setItem("firstname", "");
                    window.localStorage.setItem("initdate", "");
                    window.localStorage.setItem("magicnumber", "");
                    window.localStorage.setItem("loginmode", "");
                    window.localStorage.setItem("spend", "");
                    window.localStorage.setItem("maxspend", "");
                    window.localStorage.setItem("fbid", "");
                    window.localStorage.setItem("homecountryname", "");
                    window.localStorage.setItem("residentcityname", "");
                    window.localStorage.setItem("fullname", "");

                    fbCleanVariables();
                    customer = "9999999999";
                    customername = "Guest";
                    segmentcode = "";
                    segmentname = "";
                    currency = "";
                    nationality = "";
                    pointvalue = "";
                    cuspict = "";
                    cusqr = "";
                    emailid = "";
                    mobilenumber = "";
                    memberexpiry = "";
                    segmentimage = "";
                    pushoffer = "";
                    remindexpiry = "";
                    showprofile = "";
                    autolocation = "";
                    city = "";
                    country = "";
                    magicnumber = "";
                    firstname = "";
                    initdate = "";
                    homecountry = "";
                    birthdate = "";
                    residentcity = "";
                    pinnumber = "";
                    spend = "";
                    maxspend = "";
                    fbid = "";
                    alcohol = "";
                    homecountryname = "";
                    residentcityname = "";
                    showsummary = "";

                    $("body").data("kendoMobilePane").navigate("views/home.html");
                    hideSpin(); //hide loading popup
                },
                error: function (errormsg) {
                    navigator.notification.alert("Unknown Error, Cannot Logout. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
            // }   
        },

        varInit
        : function () {
            outletcode = "";
            brandcode = "";
            offercode = "";
            benefitcode = "";
            offertype = "1";
            password = "";
            customer = "9999999999";
            customername = "Guest";
            segmentcode = "";
            segmentname = "";
            currency = "";
            nationality = "";
            pointvalue = "";
            cuspict = "";
            cusqr = "";
            emailid = "";
            mobilenumber = "";
            memberexpiry = "";
            segmentimage = "";
            parentimage = "";
        },

        benefitdetail
        : function (e) {
            changeCard();
            benefitcode = window.localStorage.getItem("segmentcode");

            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-back9").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            // document.getElementById("number-back9").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-back9").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-back9").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qr9").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qr9").style.backgroundSize = "cover";

            showSpin(); //show loading popup

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/benefitlistnew.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, benefitcode: benefitcode, mdevice: mdevicestat
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode === "000" && getData.benefitlist.length > 0) {
                        //fill the outlet template
                        document.getElementById("pl-benefit-detail-view").style.display = "block";
                        document.getElementById("benefit-head").innerHTML = getData.benefitlist[0].segmentname;
                        $("#benefit-all").kendoMobileListView({
                            dataSource: kendo.data.DataSource.create({ data: getData.benefitlist }),
                            template: $("#benefit3").html()
                        });
                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, the benefits cannot be displayed. Please restart the app and try again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, the benefits cannot be displayed  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup                                          
                }
            });
        },

        showOfferOutlet: function () {
            changeCard();
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/offeroutletlist_geo.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, offercode: offercode, mdevice: window.localStorage.getItem("mdevicestat"), customer: "", lat: window.localStorage.getItem("latl"), lon: window.localStorage.getItem("lonl")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        //fill the outlet template
                        if (getData.offeroutletlist.length > 0) {
                            $("#pl-offer-location-div").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.offeroutletlist }),
                                template: $("#plofferOutletTemplate").html()
                            });
                            hideSpin(); //hide loading popup
                        } else {
                            navigator.notification.alert("Due to a system error, the locations cannot be retrieved for the selected reward, please try again or contact support for assistance. ", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, the locations cannot be retrieved for the selected reward. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, the locations cannot be retrieved for the selected reward. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        myVoucherShowOfferOutlet

        : function () {
            changeCard();
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/offeroutletlist_geo.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, offercode: offercode, mdevice: mdevicestat, customer: "", lat: window.localStorage.getItem("latl"), lon: window.localStorage.getItem("lonl")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        //fill the outlet template
                        if (getData.offeroutletlist.length > 0) {
                            $("#myvoucher-location-div").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.offeroutletlist }),
                                template: $("#MyVoucherOfferOutletTemplate").html()
                            });
                            hideSpin(); //hide loading popup
                        } else {
                            navigator.notification.alert("Due to a system error, the locations cannot be retrieved for the selected reward, please try again or contact support for assistance. ", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, the locations cannot be retrieved for the selected reward. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Unknown Error, Cannot get locations List.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        rewardList
        : function () {
            changeCard();
            showSpin();
            offercode = "";
            offertype = "3";
            mcategory = window.localStorage.getItem("mcategory");
            mname = window.localStorage.getItem("mname");
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backp").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backp").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backp").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backp").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrp").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrp").style.backgroundSize = "cover";
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/offerListGeo.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, offercode: offercode, offertype: offertype, segmentcode: segmentcode, mdevice: window.localStorage.getItem("mdevicestat"), mcategory: mcategory, mname: mname, customer: window.localStorage.getItem("customer")
                    //merchantcode :window.localStorage.getItem("merchant"),offercode:offercode,offertype:offertype,mdevice:window.localStorage.getItem("mdevicestat"),city:window.localStorage.getItem("distance"),prefcuisine:window.localStorage.getItem("cuisine"),prefcelebration:window.localStorage.getItem("celebration"),segmentcode:segmentcode,customer:window.localStorage.getItem("customer")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    window.localStorage.setItem("mcategory", "");
                    if (getData.statuscode == "000") {
                        //fill the outlet template
                        if (window.localStorage.getItem("offer-reload") != "1") {
                            $("#pl-offer-list-view").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.offerlist }),
                                template: $("#pl-offerListTemplate").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Offer",
                                    field: "itemname",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 40
                                }

                            });
                        } else {
                            $("#pl-offer-list-view").data("kendoMobileListView").dataSource.data(getData.offerlist);
                        }
                        window.localStorage.setItem("offer-reload", "")
                        hideSpin(); //hide loading popup
                        if (getData.offerlist.length == 0) {
                            navigator.notification.alert("No rewards are currently available.", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, the rewards cannot be displayed. Please close the app and log in again.  " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, the rewards cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },
        showOutletItem
        : function (e) {
            changeCard();
            showSpin();

            outletcode = e.view.params.od;
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/outletlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, brandcode: "", outletcode: outletcode, mdevice: window.localStorage.getItem("mdevicestat"), customer: window.localStorage.getItem("customer")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode == "000") {
                        m = getData.outletlist[0].geolocation.split(",");

                        lat = m[0];
                        lon = m[1];

                        document.getElementById("pl-outlet-detail-div").style.display = "block";
                        window.localStorage.setItem("selfredeem", "D");
                        document.getElementById("name-backq").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
                        //document.getElementById("number-backq").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
                        document.getElementById("expiry-backq").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
                        document.getElementById("segment-backq").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
                        document.getElementById("mycard-qrq").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
                        document.getElementById("mycard-qrq").style.backgroundSize = "cover";

                        document.getElementById("pl-outletdetail-title").innerHTML = getData.outletlist[0].outletname;

                        document.getElementById("pl-outletimage").src = getData.outletlist[0].imageurll;
                        document.getElementById("pl-outlet-short-1").innerHTML = "<pre class='fulljustifybold'>" + getData.outletlist[0].outletshort + "</pre>";
                        document.getElementById("pl-outlet-long-1").innerHTML = "<pre class='fulljustify'>" + getData.outletlist[0].outletlong + "</pre>";

                        window.localStorage.setItem("social_email_subject", emailsubject);
                        window.localStorage.setItem("social_email_message", getData.outletlist[0].outletname);
                        window.localStorage.setItem("social_email", getData.outletlist[0].emailid + "  \n");
                        window.localStorage.setItem("social_telephone", getData.outletlist[0].telephone);
                        window.localStorage.setItem("social_shortmsg", getData.outletlist[0].outletshort);

                        window.localStorage.setItem("social_message", getData.outletlist[0].outletlong + "\n\n");
                        window.localStorage.setItem("social_image", getData.outletlist[0].imageurll);
                        window.localStorage.setItem("lat", lat);
                        window.localStorage.setItem("lon", lon);
                        window.localStorage.setItem("oc", getData.outletlist[0].outletcode);
                        window.localStorage.setItem("op", getData.outletlist[0].outletfavourite);

                        if (window.localStorage.getItem("op") === "1") {
                            elems = document.getElementsByClassName('km-customstar');
                            for (i = 0; i < elems.length; i++) {
                                elems[i].style.color = '#fff000';
                            }
                        } else {
                            elems = document.getElementsByClassName('km-customstar');
                            for (i = 0; i < elems.length; i++) {
                                elems[i].style.color = '#fff';
                            }
                        }

                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, the location details are not available for the selected property. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, the location details are not available for the selected property. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        propertyList
        : function () {
            changeCard();

            window.localStorage.setItem("appopen", "06")
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backf").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backf").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backf").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backf").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrf").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrf").style.backgroundSize = "cover";
            showSpin();

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/propertyList.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, brandcode: window.localStorage.getItem("brand"), mdevice: window.localStorage.getItem("mdevicestat")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode == "000") {
                        //fill the outlet template
                        $("#pl-property-list").kendoMobileListView({
                            dataSource: kendo.data.DataSource.create({ data: getData.propertylist, serverPaging: true, pageSize: 40 }),
                            template: $("#pl-explorelisttemplate").html(),
                            endlessScroll: true

                        });
                        propertygeo = [];
                        for (var i = 0; i < getData.propertylist.length; i++) {
                            propertygeo[i] = getData.propertylist[i].msgtitle + "#" + getData.propertylist[i].lat + "#" + getData.propertylist[i].lon;
                        }

                        hideSpin(); //hide loading popup
                        if (getData.propertylist.length === 0) {
                            navigator.notification.alert("Due to a system error, the Property details cannot be displayed. ", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, the Property details cannot be displayed. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, the Property details cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        showAllOutlet
        : function (e) {
            changeCard();
            showSpin();
            if (window.localStorage.getItem("appopen") != "06") {
                window.localStorage.setItem("appopen", "03");
            }
            prefiltercheck(e);
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backr").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backr").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backr").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backr").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrr").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrr").style.backgroundSize = "cover";
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/outletlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), category: "", brandcode: "", mdevice: window.localStorage.getItem("mdevicestat"), outletcode: "", preflocation: window.localStorage.getItem("distance"), prefcuisine: window.localStorage.getItem("cuisine"), prefcelebration: window.localStorage.getItem("celebration"), prefrestaurant: window.localStorage.getItem("restaurant"), lat: window.localStorage.getItem("latl"), lon: window.localStorage.getItem("lonl"), customer: window.localStorage.getItem("customer")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    cleanoutletfilter();
                    if (getData.statuscode === "000") {
                        //fill the outlet template
                        if (window.localStorage.getItem("appopen") === "06") {
                            window.localStorage.setItem("appopen", "03");
                            $("#pl-outlet-list").kendoMobileListView({

                                dataSource: kendo.data.DataSource.create({ data: getData.outletlist }),
                                template: $("#pl-outletTemplate").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Branch Location",
                                    field: "outletname",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 40,
                                    endlessScroll: true
                                }
                            });
                        } else if (window.localStorage.getItem("outlet") === "") {
                            $("#pl-outlet-list").kendoMobileListView({

                                dataSource: kendo.data.DataSource.create({ data: getData.outletlist }),//serverPaging:true,pageSize:25
                                template: $("#pl-outletTemplate").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Branch Location",
                                    field: "outletname",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 40,
                                    endlessScroll: true
                                }

                            });
                        } else {
                            $("#pl-outlet-list").data("kendoMobileListView").dataSource.data(getData.outletlist);
                        }
                        propertygeo = [];
                        for (var i = 0; i < getData.outletlist.length; i++) {
                            propertygeo[i] = getData.outletlist[i].outletname + "#" + getData.outletlist[i].lat + "#" + getData.outletlist[i].lon;
                        }
                        hideSpin(); //hide loading popup
                        if (getData.outletlist.length === 0) {
                            navigator.notification.alert("There are no Bars & Dining venues available for the selected property.", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, the location details are not available for the selected property. Please close the app and log in again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, the location details are not available for the selected property. Please check your network connection and try again.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },



        showAllOutlet1
        : function (e) {
            changeCard();
            showSpin();

            window.localStorage.setItem("appopen", "09");
            window.localStorage.setItem("category", "0");
            prefiltercheck(e);

            window.localStorage.setItem("selfredeem", "D");

            document.getElementById("name-backs").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";

            //document.getElementById("number-backs").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";

            document.getElementById("expiry-backs").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";

            document.getElementById("segment-backs").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";

            document.getElementById("mycard-qrs").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrs").style.backgroundSize = "cover";

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/outletlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), category: window.localStorage.getItem("category"), brandcode: window.localStorage.getItem("branda"), mdevice: window.localStorage.getItem("mdevicestat"), outletcode: "", preflocation: window.localStorage.getItem("distance"), prefcuisine: window.localStorage.getItem("cuisine"), prefcelebration: window.localStorage.getItem("celebration"), prefrestaurant: window.localStorage.getItem("restaurant"), lat: window.localStorage.getItem("latl"), lon: window.localStorage.getItem("lonl"), customer: window.localStorage.getItem("customer")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    cleanoutletfilter();
                    if (getData.statuscode === "000") {
                        //fill the outlet template
                        ;
                        if (window.localStorage.getItem("outlet") === "") {
                            $("#pl-outlet-list-b").kendoMobileListView({

                                dataSource: kendo.data.DataSource.create({ data: getData.outletlist }),
                                template: $("#pl-outletTemplate-b").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Branch Location",
                                    field: "outletname",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 40,
                                    endlessScroll: true
                                }
                            });
                        } else {
                            $("#pl-outlet-list-b").data("kendoMobileListView").dataSource.data(getData.outletlist);
                        }
                        propertygeo = [];
                        for (var i = 0; i < getData.outletlist.length; i++) {
                            propertygeo[i] = getData.outletlist[i].outletname + "#" + getData.outletlist[i].lat + "#" + getData.outletlist[i].lon;
                        }
                        hideSpin(); //hide loading popup
                        if (getData.outletlist.length === 0) {
                            navigator.notification.alert("There are no Bars & Dining venues available for the selected property.", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, the location details are not available for the selected property. Please close the app and log in again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, the location details are not available for the selected property. Please check your network connection and try again.   [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },
        showAllLeisure
        : function (e) {
            changeCard();
            showSpin();

            window.localStorage.setItem("appopen", "04");
            prefiltercheck(e);

            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backi").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backi").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backi").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backi").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qri").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qri").style.backgroundSize = "cover";
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/outletlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    // merchantcode :window.localStorage.getItem("merchant"),category:window.localStorage.getItem("category"),brandcode:window.localStorage.getItem("brand"),mdevice:window.localStorage.getItem("mdevicestat"),outletcode:"",preflocation:window.localStorage.getItem("distance"),prefcuisine:window.localStorage.getItem("cuisine"),prefcelebration:window.localStorage.getItem("celebration"),prefrestaurant:window.localStorage.getItem("restaurant"),lat:window.localStorage.getItem("latl"),lon:window.localStorage.getItem("lonl"),customer:window.localStorage.getItem("customer")
                    merchantcode: window.localStorage.getItem("merchant"), category: window.localStorage.getItem("category"), brandcode: window.localStorage.getItem("brand"), mdevice: window.localStorage.getItem("mdevicestat"), outletcode: ""
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    cleanoutletfilter();
                    if (getData.statuscode === "000") {
                        if (getData.outletlist.length === 0) {
                            navigator.notification.alert("There are no Leisure venues available for the selected property. ", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                        //fill the outlet template
                        if (window.localStorage.getItem("outlet") === "") {
                            $("#pl-leisure-list").kendoMobileListView({

                                dataSource: kendo.data.DataSource.create({ data: getData.outletlist }),
                                template: $("#pl-leisureTemplate").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Spa & Leisure",
                                    field: "outletname",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 40,
                                    endlessScroll: true
                                }
                            });
                        } else {
                            $("#pl-leisure-list").data("kendoMobileListView").dataSource.data(getData.outletlist);
                        }
                        propertygeo = [];
                        for (var i = 0; i < getData.outletlist.length; i++) {
                            propertygeo[i] = getData.outletlist[i].outletname + "#" + getData.outletlist[i].lat + "#" + getData.outletlist[i].lon;
                        }
                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, the location details are not available for the selected property. Please close the app and log in again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, the location details are not available for the selected property. Please check your network connection and try again.   [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        showAllLeisure1
        : function (e) {
            changeCard();
            showSpin();

            window.localStorage.setItem("appopen", "10");
            window.localStorage.setItem("category", "1");
            prefiltercheck(e);

            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backj").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backj").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backj").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backj").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrj").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrj").style.backgroundSize = "cover";
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/outletlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), category: window.localStorage.getItem("category"), brandcode: window.localStorage.getItem("branda"), mdevice: window.localStorage.getItem("mdevicestat"), outletcode: "", preflocation: window.localStorage.getItem("distance"), prefcuisine: window.localStorage.getItem("cuisine"), prefcelebration: "", prefrestaurant: window.localStorage.getItem("restaurant"), lat: window.localStorage.getItem("latl"), lon: window.localStorage.getItem("lonl"), customer: ""
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    cleanoutletfilter();
                    if (getData.statuscode === "000") {
                        if (window.localStorage.getItem("outlet") === "") {
                            if (getData.outletlist.length === 0) {
                                navigator.notification.alert("There are no Leisure venues available for the selected property.", function () {
                                }, "SNTTA Travel", "Dismiss")
                                hideSpin(); //hide loading popup
                            }
                            //fill the outlet template
                            $("#pl-leisure-list-b").kendoMobileListView({

                                dataSource: kendo.data.DataSource.create({ data: getData.outletlist }),
                                template: $("#pl-leisureTemplate-b").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Spa & Leisure",
                                    field: "outletname",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 40,
                                    endlessScroll: true
                                }
                            });
                        } else {
                            $("#pl-leisure-list-b").data("kendoMobileListView").dataSource.data(getData.outletlist);
                        }
                        propertygeo = [];
                        for (var i = 0; i < getData.outletlist.length; i++) {
                            propertygeo[i] = getData.outletlist[i].outletname + "#" + getData.outletlist[i].lat + "#" + getData.outletlist[i].lon;
                        }
                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, the location details are not available for the selected property. Please close the app and log in again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, the location details are not available for the selected property. Please check your network connection and try again.    [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },


        showPropertyItem
        : function (e) {
            changeCard();
            showSpin();
            window.localStorage.setItem("branda", e.view.params.od);

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/propertyitem.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, brandcode: window.localStorage.getItem("branda"), mdevice: window.localStorage.getItem("mdevicestat")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode == "000") {
                        m = getData.geolocation.split(",");
                        //alert(getData.imageurll);
                        lat = m[0];
                        lon = m[1];
                        document.getElementById("pl-property-detail-div").style.display = "block";
                        window.localStorage.setItem("selfredeem", "D");
                        document.getElementById("name-backa").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
                        //document.getElementById("number-backa").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
                        document.getElementById("expiry-backa").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
                        document.getElementById("segment-backa").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
                        document.getElementById("mycard-qra").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
                        document.getElementById("mycard-qra").style.backgroundSize = "cover";

                        document.getElementById("pl-branddetail-title").innerHTML = getData.hotelname;
                        document.getElementById("pl-brandimage").src = getData.imageurll;
                        document.getElementById("pl-brandimage").src = getData.imageurll;
                        document.getElementById("pl-property-short-1").innerHTML = "<pre class='fulljustify'>" + getData.shortdes + "</pre>";
                        document.getElementById("pl-property-short-2").innerHTML = "<pre class='fulljustify'>" + getData.shortdes1 + "</pre>";
                        document.getElementById("pl-property-long-1").innerHTML = "<pre class='fulljustify'>" + getData.longdes + "</pre>";

                        window.localStorage.setItem("social_email_subject", emailsubject);
                        window.localStorage.setItem("social_email_message", getData.hotelname);
                        window.localStorage.setItem("social_email", supportemail + "  \n");
                        window.localStorage.setItem("social_telephone", customercaretelephone);
                        window.localStorage.setItem("social_shortmsg", emailsubject);

                        window.localStorage.setItem("social_message", getData.shortdes + "\n\n" + getData.shortdes1 + "\n\n" + getData.longdes);
                        window.localStorage.setItem("social_image", getData.imageurll);
                        window.localStorage.setItem("lat", lat);
                        window.localStorage.setItem("lon", lon);

                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, the Property details cannot be displayed.  " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, the Property details cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        toggleDD: function () {
            if (document.getElementById("profile-autolocation").checked) {
                document.getElementById("selCountry").disabled = true;
                document.getElementById("selCity").disabled = true;
                document.getElementById("selCountry").value = "";
                document.getElementById("selCity").value = "";
                document.getElementById("selCountry").style.color = "#ccc";
                document.getElementById("selCity").style.color = "#ccc";
            } else {
                document.getElementById("selCountry").disabled = false;
                document.getElementById("selCity").disabled = false;
                document.getElementById("selCountry").style.color = "#575757";
                document.getElementById("selCity").style.color = "#575757";
            }
        },

        showMyOutletOffer: function () {
            showSpin();
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/mywalletvouchers.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, customerid: customer, password: password, mdevice: window.localStorage.getItem("mdevicestat"), outletcode: outletcode
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        if (getData.mywalletvouchers.length > 0) {
                            $("#mywallet-voucher-list-outlet").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.mywalletvouchers, serverPaging: true, pageSize: 40 }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                                template: $("#mywallet-voucherlist-Template-outlet").html(),
                                endlessScroll: true

                            });
                            hideSpin(); //hide loading popup
                        } else {
                            navigator.notification.alert("No Vouchers are currently available in your Wallet for the selected venue.", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, your Wallet could not be displayed. Please restart the app and try again.  " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, your Wallet cannot be displayed.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },


        showOutletOffer
        : function () {
            changeCard();
            offercode = "";
            offertype = "1";
            showSpin();

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/offerListOutlet.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, offercode: offercode, offertype: offertype, segmentcode: segmentcode, mdevice: mdevicestat, outletcode: outletcode
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        if (getData.offerlist.length > 0) {
                            //fill the outlet template
                            $("#pl-outlet-offer").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.offerlist }),
                                template: $("#pl-outletOfferTemplate").html()

                            });
                            hideSpin(); //hide loading popup
                        } else {
                            navigator.notification.alert("No Offers currently exist for the selected Restaurant", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("There are no rewards for the selected location." + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, the Reward details cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        activateoffer
        : function (e) {
            if (!document.getElementById("pl-tandc-accept").checked) {
                navigator.notification.alert("Please Accept Terms & Conditions to proceed", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            showSpin();

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/issuecoupon.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, offercode: offercode, customerid: customer, password: password, mdevice: window.localStorage.getItem("mdevicestat")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        postLogin.set("transactionref", getData.transactionref);
                        postLogin.set("couponcode", getData.couponcode);
                        postLogin.set("couponname", getData.couponname);
                        postLogin.set("couponcategory", getData.couponcategory);

                        window.plugins.nativepagetransitions.slide({
                            "duration": 500, // in milliseconds (ms), default 400
                            "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
                            "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
                            "androiddelay": 150, // same as above but for Android, default 70

                            'direction': 'up',
                            'href': '#views/pl-confirmpage.html'
                        });

                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, this reward could not be activated. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, this reward could not be activated.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup                                                                 
                }
            });
        },
        activateAndRedeem
        : function () {
            if (!document.getElementById("pl-tandc-accept").checked) {
                navigator.notification.alert("Please Accept Terms & Conditions to proceed", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            window.localStorage.setItem("selfredeem", "V");
            $("body").data("kendoMobilePane").navigate("views/pl-discountpinmember.html");
        },
        walletRedeem
        : function () {
            if (!document.getElementById("wallet-tandc").checked) {
                navigator.notification.alert("Please Accept Terms & Conditions to proceed", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            window.localStorage.setItem("selfredeem", "M");
            $("body").data("kendoMobilePane").navigate("views/pl-discountpinmember.html");
        },

        confirmIssueResponse
        : function () {
            changeCard();
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backc").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backc").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backc").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backc").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrc").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrc").style.backgroundSize = "cover";
            document.getElementById("offer-1").innerHTML = postLogin.transactionref;
            document.getElementById("offer-2").innerHTML = postLogin.couponname;
            //document.getElementById("offer-3").innerHTML = postLogin.couponcategory;
        },
        mywalletofferlist
        : function (e) {
            changeCard();
            showSpin();

            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backm").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backm").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backm").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backm").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrm").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrm").style.backgroundSize = "cover";

            mcategory = e.view.params.mcategory;
            mname = e.view.params.mname;
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/mywalletvouchers.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, customerid: customer, password: password, mdevice: window.localStorage.getItem("mdevicestat"), outletcode: "", mcategory: mcategory, mname: mname
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        if (getData.mywalletvouchers.length > 0) {
                            $("#mywallet-voucher-list").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.mywalletvouchers }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                                template: $("#mywallet-voucherlist-Template").html(),
                                filterable: {
                                    autoFilter: true,
                                    placeholder: "Search By Reward",
                                    field: "itemname",
                                    operator: "contains",
                                    serverPaging: true,
                                    serverSorting: true,
                                    pageSize: 40,
                                    endlessScroll: true
                                }

                            });
                            hideSpin(); //hide loading popup
                        } else {
                            navigator.notification.alert("No Vouchers are currently available in your Wallet.", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, your Wallet could not be displayed. Please restart the app and try again.  " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, your Wallet cannot be displayed.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },
        showOfferItem
        : function (e) {
            changeCard();
            offercode = e.view.params.cpn; //offer code for single offer inquiry
            offertype = "2"; //single offer inquiry
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backo").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backo").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backo").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backo").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qro").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qro").style.backgroundSize = "cover";
            showSpin();
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/offerList.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, offercode: offercode, offertype: offertype, segmentcode: segmentcode, mdevice: window.localStorage.getItem("mdevicestat")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        document.getElementById("pl-offer-detail-div").style.display = "block";
                        //document.getElementById("detail-title").innerHTML = getData.outletlist[0].outletname;
                        document.getElementById("pl-offerimage").src = getData.offerlist[0].imageurll;
                        document.getElementById("pl-offer-short-1").innerHTML = "<pre class='fulljustifybold'>" + getData.offerlist[0].itemname + "</pre>";
                        document.getElementById("pl-offer-long-1").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].itemdescription + "</pre>";
                        document.getElementById("pl-offer-expiry").innerHTML = "Reward Expiry : " + getData.offerlist[0].couponexpirydate;
                        document.getElementById("pl-offer-remark").innerHTML = "<pre class='fulljustify'>" + getData.offerlist[0].remark + "</pre>";
                        window.localStorage.setItem("social_email_message", getData.offerlist[0].itemname);
                        window.localStorage.setItem("social_email_subject", emailsubjectoffer);
                        window.localStorage.setItem("social_shortmsg", getData.offerlist[0].itemdescription);
                        window.localStorage.setItem("social_subject", getData.offerlist[0].itemname);
                        window.localStorage.setItem("social_message", getData.offerlist[0].itemdescription + "\n\n" + "Offer Expirying on :" + getData.offerlist[0].couponexpirydate);
                        window.localStorage.setItem("social_image", getData.offerlist[0].imageurll);
                        window.localStorage.setItem("redeemoffer", getData.offerlist[0].itemcode);
                        $("#pl-tandc-accept").data("kendoMobileSwitch").check(false);
                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to a system error, the Rewards cannot be displayed. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, the Rewards cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },

        mywalletofferdetail
        : function (e) {
            changeCard();
            couponnumber = e.view.params.cpn;
            showSpin();
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backn").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backn").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backn").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backn").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrn").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrn").style.backgroundSize = "cover";
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/mywalletvoucherdetail.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, customerid: customer, password: password, couponnumber: couponnumber, mdevice: window.localStorage.getItem("mdevicestat")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode === "000") {
                        if (getData.myvoucherdetail.length > 0) {
                            //alert(getData.myvoucherdetail[0].imageurll);
                            document.getElementById("wallet-voucher-div").style.display = "block";
                            window.localStorage.setItem("selfredeemVouchernumber", getData.myvoucherdetail[0].itemcode);
                            document.getElementById("myvoucherdetaila").src = getData.myvoucherdetail[0].imageurll;
                            document.getElementById("voucher-number").innerHTML = getData.myvoucherdetail[0].itemcode;
                            document.getElementById("voucher-name").innerHTML = getData.myvoucherdetail[0].itemname;
                            document.getElementById("voucher-expiry").innerHTML = getData.myvoucherdetail[0].couponexpirydate;
                            document.getElementById("myoffer-description").innerHTML = "<pre class='fulljustify'>" + getData.myvoucherdetail[0].itemdescription + "</pre>";
                            document.getElementById("myoffer-remark").innerHTML = "<pre class='fulljustify'>" + getData.myvoucherdetail[0].remark + "</pre>";

                            document.getElementById("qr-image-3").style.background = "url(" + getData.myvoucherdetail[0].imageurls + ") no-repeat center center";
                            document.getElementById("qr-image-3").style.backgroundSize = "cover";
                            window.localStorage.setItem("selfredeem", "M");
                            offercode = getData.myvoucherdetail[0].couponcode;

                            $("#wallet-tandc").data("kendoMobileSwitch").check(false);
                            hideSpin(); //hide loading popup
                        } else {
                            navigator.notification.alert("No Vouchers are currently available in your Wallet.", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, your Wallet could not be displayed. Please restart the app and try again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, your Wallet cannot be displayed.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },



        editsettingdata
        : function () {
            changeCard();
            showSpin();
            listCountry();
            window.localStorage.setItem("isset", "0");
            listCity("UAE", document.getElementById("selCity"));
            postLogin.set("emailid1", window.localStorage.getItem("emailid"));
            postLogin.set("mobile1", formattedmobile);
            postLogin.set("date1", window.localStorage.getItem("birthdate"));
            postLogin.set("hotelnumber1", window.localStorage.getItem("magicnumber"));
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name7-back").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number7-back").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry7-back").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";

            document.getElementById("segment7-back").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard7-qr").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard7-qr").style.backgroundSize = "cover";

            //if (window.localStorage.getItem("fbid") != "99") {
            //    document.getElementById("fblink-show-p").style.display = "none";
            // }

            if (window.localStorage.getItem("magicnumber") != "") {
                document.getElementById("hotelnumber1").disabled = true;
                // document.getElementById("hotelnumber1").style.color = '#999'; 
            }

            if (pushoffer == "1") {
                $("#profile-pushoffer").data("kendoMobileSwitch").check(true);
            } else {
                $("#profile-pushoffer").data("kendoMobileSwitch").check(false);
            }

            if (remindexpiry == "1") {
                $("#profile-remindexpiry").data("kendoMobileSwitch").check(true);
            } else {
                $("#profile-remindexpiry").data("kendoMobileSwitch").check(false);
            }

            if (autolocation == "1") {
                $("#profile-autolocation").data("kendoMobileSwitch").check(true);
            } else {
                $("#profile-autolocation").data("kendoMobileSwitch").check(false);
            }

            if (alcohol == "1") {
                $("#profile-alcohol").data("kendoMobileSwitch").check(true);
            } else {
                $("#profile-alcohol").data("kendoMobileSwitch").check(false);
            }

            hideSpin();
        },
        getCity
        : function () {
            showSpin();
            // kendo.mobile.application.showLoading(); //show loading popup
            var e = document.getElementById("selCountry");
            var str = e.options[e.selectedIndex].value;
            listCity(str, document.getElementById("selCity"));
            hideSpin(); //hide loading popup
        },


        plshowBrandPage
        : function () {
            // alert("Hello");
            $("body").data("kendoMobilePane").navigate("views/pl-brandpage.html");
        },
        getHistoryFilter: function () {
            var dataSource = new kendo.data.DataSource({ data: getHistoryFilterData() });

            $("#History-Filter").kendoMobileListView({
                dataSource: dataSource,
                template: $("#History-Filter-Template").html()

            });
        },
        addImage:
        function () {
            var success = function (imageData) {
                var image = document.getElementById('profile-picture-1');
                image.src = "data:image/png;base64," + imageData;
                //image.src = imageURI;
                newimage = imageData;
                saveImageFile(imageData);
            };
            var error = function () {
                navigator.notification.alert("Unfortunately, your image could not be captured. Please try again.");
            };

            var config = {
                quality: 75,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: false,
                encodingType: Camera.EncodingType.JPG,
                targetWidth: 500,
                targetHeight: 750,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };
            //                       var config = {
            //                           destinationType: Camera.DestinationType.DATA_URL,
            //                           targetHeight: 75,
            //                           targetWidth: 75,
            //                           encodingType: Camera.EncodingType.PNG
            //                       };
            navigator.camera.getPicture(success, error, config);
        },

        getImage:
        function () {
            var success = function (imageData) {
                var image = document.getElementById('profile-picture-1');
                image.src = "data:image/png;base64," + imageData;
                //image.src = imageURI;
                newimage = imageData;
                saveImageFile(imageData);
            };
            var error = function () {
                navigator.notification.alert("Unfortunately, your image could not be retrieved. Please try again.");
            };

            var config = {
                quality: 75,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: false,
                encodingType: Camera.EncodingType.JPG,
                targetWidth: 500,
                targetHeight: 750,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };
            //                       var config = {
            //                           destinationType: Camera.DestinationType.DATA_URL,
            //                           targetHeight: 75,
            //                           targetWidth: 75,
            //                           encodingType: Camera.EncodingType.PNG
            //                       };
            navigator.camera.getPicture(success, error, config);
        },

        closeEnterModalPasswordandEnterPIN: function () {
            if (!this.setpass) {
                navigator.notification.alert("Invalid PIN or Empty", function () {
                }, "SNTTA Travel", "Dismiss")
                return;
            }
            if (isNaN(this.setpass)) {
                navigator.notification.alert("Enter a valid 4 digit numeric PIN", function () {
                }, "SNTTA Travel", "Dismiss")
                return;
            }
            showSpin();

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/validatePassword.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, customerid: customer, password: password, setpass: this.setpass, mdevice: window.localStorage.getItem("mdevicestat")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode === "000") {
                        postLogin.set("setpass", "");
                        $("#modalviewpassword").data("kendoMobileModalView").close();
                        $("#modalviewpin").data("kendoMobileModalView").open();
                        hideSpin();
                    } else {
                        navigator.notification.alert("Due to a system error, the PIN was not set. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin();
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to a system error, the PIN was not set.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin();
                }
            });
            hideSpin(); //hide loading popup
        }
        ,
        plsavePIN
        : function () {
            if (!this.newpin1 || !this.newpin2) {
                navigator.notification.alert("Invalid PIN Number. Please re-enter a valid PIN number. ", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            if (this.newpin1 != this.newpin2) {
                navigator.notification.alert("PIN Numbers do not match, please re-enter a valid PIN number.", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            if (String(this.newpin2).length != 4) {
                navigator.notification.alert("Enter a valid 4 digit numeric PIN", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            window.localStorage.setItem("setpintype", "2");
            showSpin();
            createPIN(this.newpin2, "0");
            postLogin.set("newpin1", "");
            postLogin.set("newpin2", "");
        },
        initStaffPIN
        : function () {
            postLogin.set("depin1", "");
        },

        initMemberPIN
        : function () {
            postLogin.set("srpin1", "");
        },

        validateredemptionpin
        : function () {
            if (!this.srpin1) {
                navigator.notification.alert("Invalid PIN Number. Please re-enter a valid PIN number. ", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            showSpin();
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/validateVoucherRedemptionCredential.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, mdevice: window.localStorage.getItem("mdevicestat"), password: window.localStorage.getItem("password"), customer: customer, pin: this.srpin1
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode === "000") { //Login Successful
                        $("body").data("kendoMobilePane").navigate("views/pl-discountpinstaff.html");
                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Invalid Redemption PIN", function () {
                        }, "SNTTA Travel", "Dismiss");
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Unknown Error. Cannot verify Redemption PIN [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss");
                    hideSpin(); //hide loading popup
                }
            });
        },

        completeRedemptionDiscount
        : function () {
            if (!this.depin1) {
                navigator.notification.alert("Invalid Outlet identifier. Please enter valid outlet identifier.", function () {
                }, "SNTTA Travel", "Dismiss");
                return;
            }
            if (window.localStorage.getItem("selfredeem") === "V") {
                activateRedeemVoucher();
            } else if (window.localStorage.getItem("selfredeem") === "M") {
                redeemVoucher();
            } else {
                redeemDiscount();
            }
        },

        discountRedeemConfirm
        : function () {
            changeCard();
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backb").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backb").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backb").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backb").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrb").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrb").style.backgroundSize = "cover";
            document.getElementById("discount-1").innerHTML = window.localStorage.getItem("self-authorization");
            window.localStorage.setItem("self-authorization", "");
            window.localStorage.setItem("selfredeem", "")
        },

        discountRedeemConfirmblack
        : function () {
            changeCard();
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backy").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backy").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backy").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backy").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qry").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qry").style.backgroundSize = "cover";
            document.getElementById("discountb-1").innerHTML = window.localStorage.getItem("self-authorization");
            window.localStorage.setItem("self-authorization", "");
            window.localStorage.setItem("selfredeem", "")
        },
        selfRedeemConfirm
        : function () {
            changeCard();
            showSpin();
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backd").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backd").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backd").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backd").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrd").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrd").style.backgroundSize = "cover";
            document.getElementById("authcode").innerHTML = window.localStorage.getItem("self-authorization");
            window.localStorage.setItem("self-vouchernumber", "");
            window.localStorage.setItem("self-vouchername", "");
            window.localStorage.setItem("self-authorization", "");
            window.localStorage.setItem("self-outletname", "");
            window.localStorage.setItem("selfredeemVouchernumber", "");
            window.localStorage.setItem("redeemoffer", "")
            window.localStorage.setItem("selfredeem", "")
            hideSpin(); //hide loading popup
        },

        selfRedeemConfirmblack
        : function () {
            changeCard();
            showSpin();
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backx").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backx").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backx").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backx").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrx").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrx").style.backgroundSize = "cover";
            document.getElementById("authcodex").innerHTML = window.localStorage.getItem("self-authorization");
            window.localStorage.setItem("self-vouchernumber", "");
            window.localStorage.setItem("self-vouchername", "");
            window.localStorage.setItem("self-authorization", "");
            window.localStorage.setItem("self-outletname", "");
            window.localStorage.setItem("selfredeemVouchernumber", "");
            window.localStorage.setItem("redeemoffer", "")
            window.localStorage.setItem("selfredeem", "")
            hideSpin(); //hide loading popup
        },
        resetPIN: function () {
            postLogin.set("srpin1", "");
            postLogin.set("depin1", "");
        },


        myhistorylist
        : function () {
            changeCard();
            var t = "";//document.getElementById("selCountry").value;
            showSpin();
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backh").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backh").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backh").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backh").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrh").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrh").style.backgroundSize = "cover";
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/archivehistory.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, customerid: customer, password: password, history: t, mdevice: window.localStorage.getItem("mdevicestat"), mexcl: "0"
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        document.getElementById("ytd-spend").innerHTML = "My SNTTA Travel Points:" + window.localStorage.getItem("spendmb");
                        $("#pl-history-list").kendoMobileListView({
                            dataSource: kendo.data.DataSource.create({ data: getData.historylist }),
                            template: $("#pl-historyListTemplate").html()
                        });
                        hideSpin(); //hide loading popup
                    } else {
                        navigator.notification.alert("Due to system error, transaction history cannot be displayed. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to system error, transaction history cannot be displayed.  [" + errormsg.responseText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },
        showCard1
        : function () {
            changeCard();
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-back8").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-back8").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-back8").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-back8").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qr8").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qr8").style.backgroundSize = "cover";
        },
        showCard3
        : function () {
            changeCard();
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backt").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backt").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backt").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backt").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrt").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrt").style.backgroundSize = "cover";
        },

        showCard9
        : function () {
            changeCard();
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-back9").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-back9").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-back9").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-back9").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qr9").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qr9").style.backgroundSize = "cover";
        },


        showCard2
        : function () {
            changeCard();
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backe").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backe").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backe").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backe").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qre").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qre").style.backgroundSize = "cover";
        },
        mymessagelist
        : function () {
            t = "";//Notification and other messages
            // alert(merchant);
            // alert(customer);
            // alert(password);
            // alert(mdevicestat);
            changeCard();
            showSpin();
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name-backl").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            //document.getElementById("number-backl").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry-backl").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment-backl").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qrl").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qrl").style.backgroundSize = "cover";
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/archivehistory.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, customerid: customer, password: password, history: t, mdevice: window.localStorage.getItem("mdevicestat"), mexcl: ""
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode == "000") {
                        if (getData.historylist.length > 0) {
                            $("#pl-message-list").kendoMobileListView({
                                dataSource: kendo.data.DataSource.create({ data: getData.historylist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                                template: $("#pl-messageListTemplate").html()
                                //endlessScroll: true

                            });
                        } else {
                            navigator.notification.alert("No message history for your Membership. ", function () {
                            }, "SNTTA Travel", "Dismiss")
                        }
                    } else {
                        navigator.notification.alert("Due to system error, message history cannot be displayed. Please try again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to system error, message history cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                }
            });
            hideSpin(); //hide loading popup
        },

        mymessageitem
        : function (e) {
            changeCard();
            t = e.view.params.mi;
            showSpin();
            // alert(merchant);
            // alert(customer);
            // alert(password);
            // alert(mdevicestat);
            // showSpin();

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/messageitem.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, customerid: customer, password: password, history: t, mdevice: window.localStorage.getItem("mdevicestat")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);

                    if (getData.statuscode == "000") {
                        if (getData.messageitem.length > 0) {
                            window.localStorage.setItem("selfredeem", "D");
                            document.getElementById("name-backk").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
                            //document.getElementById("number-backk").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
                            document.getElementById("expiry-backk").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
                            document.getElementById("segment-backk").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
                            document.getElementById("mycard-qrk").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
                            document.getElementById("mycard-qrk").style.backgroundSize = "cover";
                            document.getElementById("pl-messageitem-list").style.display = "block";
                            document.getElementById("msgnarration").innerHTML = getData.messageitem[0].narration;
                            document.getElementById("msgday").innerHTML = getData.messageitem[0].mday + " " + getData.messageitem[0].mmonth;
                            postLogin.set("msgsequence", getData.messageitem[0].sequence);
                            hideSpin();
                        } else {
                            navigator.notification.alert("No message history for your Membership. ", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin();
                        }
                    } else {
                        navigator.notification.alert("Due to system error, message item cannot be displayed. Please try again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin();
                    }
                },
                error: function (errormsg) {
                    navigator.notification.alert("Due to system error, message item cannot be displayed. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin();
                }
            });
        },
        deleteMessage
        :
        function () {
            t = postLogin.msgsequence;

            showSpin();

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/messagedelete.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, customerid: customer, password: password, history: t, mdevice: window.localStorage.getItem("mdevicestat")
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    if (getData.statuscode == "000") {
                        $("body").data("kendoMobilePane").navigate("views/pl-mymessagelist.html");
                    } else {
                        navigator.notification.alert("Cannot delete message. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                    }
                    hideSpin(); //hide loading popup
                },
                error: function (errormsg) {
                    navigator.notification.alert("System error, cannot delete message. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            });
        },


        initPref: function () {
            changeCard();
            showSpin();
            window.localStorage.setItem("selfredeem", "D");
            document.getElementById("name6-back").innerHTML = (window.localStorage.getItem("customername") != null && window.localStorage.getItem("customername").length > 0) ? window.localStorage.getItem("customername") : "NA";
            document.getElementById("number6-back").innerHTML = (window.localStorage.getItem("customer") != null && window.localStorage.getItem("customer").length > 0) ? window.localStorage.getItem("customer") : "NA";
            document.getElementById("expiry6-back").innerHTML = (window.localStorage.getItem("memberexpiry") != null && window.localStorage.getItem("memberexpiry").length > 0) ? "Membership Expiry : " + window.localStorage.getItem("memberexpiry") : "Membership Expiry : No Expiry";
            document.getElementById("segment6-back").innerHTML = (window.localStorage.getItem("segmentcode") === "1003") ? "SNTTA Gold" : "SNTTA Elite";
            document.getElementById("mycard-qr6").style.background = "url(" + window.localStorage.getItem("cusqr") + ") no-repeat center center";
            document.getElementById("mycard-qr6").style.backgroundSize = "cover";
            window.localStorage.setItem("issaved", "0");
            setLifeStylePreference("#lifestyle-filter", "#lifestyle-filter-template");
        },

        saveMySetting: function () {
            saveSetting();
        },
        showScreen: function () {
            showSpin();
        },

        savePreference: function () {
            savePreferenceItem();
        },
        checkSave: function () {
            if (window.localStorage.getItem("issaved") === "0") {
                navigator.notification.confirm(
                    'You have not saved your preferences?', // message
                    onConfirm2, // callback to invoke with index of button pressed
                    'SNTTA Travel', // title
                    'I will Save Later,Save now'          // buttonLabels
                );
            } else {
                saveLater();
            }
        },

        checkSaveSetting: function () {
            if (window.localStorage.getItem("isset") === "0") {
                navigator.notification.confirm(
                    'You have not saved your settings?', // message
                    onConfirm3, // callback to invoke with index of button pressed
                    'SNTTA Travel', // title
                    'I will Save Later,Save now'          // buttonLabels
                );
            } else {
                saveLater();
            }
        },
        enableSave: function () {
            window.localStorage.setItem("issaved", "0");
        },
        enableSaveSetting: function () {
            window.localStorage.setItem("isset", "0");
        },

        fbLoginDA
        : function () {
            showSpin();

            facebookConnectPlugin.login(["public_profile"], function (response) { // do not retrieve the 'user_likes' permissions from FB as it will break the app 
                if (response.status === "connected") {
                    m = JSON.parse(JSON.stringify(response));
                    window.localStorage.setItem("FBuserID", m.authResponse.userID);
                    window.localStorage.setItem("FBAccessToken", m.authResponse.accessToken);
                    showSpin();

                    $.ajax({
                        type: "POST",
                        cache: false,
                        async: true,
                        timeout: 20000,
                        url: gurl + "/linkFBUser.aspx",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({
                            merchantcode: merchant, mdevice: window.localStorage.getItem("mdevicestat"), fbuserid: window.localStorage.getItem("FBuserID"), customer: customer, password: window.localStorage.getItem("password"), fbaccesstoken: window.localStorage.getItem("FBAccessToken")
                        }),
                        success: function (data) {
                            var getData = JSON.parse(data);

                            if (getData.statuscode === "000") {
                                window.localStorage.setItem("fbLoginModeEnabled", "Y");
                                navigator.notification.alert("The Facebook account on this device is successfully linked to your SNTTA Travel membership.", function () {
                                }, "SNTTA Travel", "Dismiss");
                                hideSpin();
                            } else {
                                navigator.notification.alert("The Facebook account in this device is already linked to another SNTTA Travel membership.", function () {
                                }, "SNTTA Travel", "Dismiss");
                                hideSpin();
                            }
                        },
                        error: function (errormsg) {
                            navigator.notification.alert("Due to a system error, we are unable to validate the Facebook account. " + errormsg.statusText, function () {
                            }, "SNTTA Travel", "Dismiss");
                            hideSpin();
                        }
                    });
                } else {
                    navigator.notification.alert("Error accessing Facebook " + response.status, function () {
                    }, "SNTTA Travel", "Dismiss");
                    return;
                }
            });
        },



        postLoginBack: function () {
            elems = document.getElementsByClassName('cardhead');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.display = 'none';
            }

            elems = document.getElementsByClassName('foot');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.display = 'none';
            }

            elems = document.getElementsByClassName('mymenu1');

            for (i = 0; i < elems.length; i++) {
                elems[i].innerHTML = '<i class="fa fa-chevron-up fa-2x" style="color:#fff"></i>';
                elems[i].style.width = "100%";
                elems[i].style.zIndex = 10000;
                elems[i].style.textAlign = "center";
            }

            $("body").data("kendoMobilePane").navigate("views/pl-explore.html");
            //$("body").data("kendoMobilePane").navigate("#:back");
        },
        setOutletFavourite: function () {
            if (window.localStorage.getItem("op") === "1") {
                y = "";
                elems = document.getElementsByClassName('km-customstar');
                for (i = 0; i < elems.length; i++) {
                    elems[i].style.color = '#fff';
                }

                window.localStorage.setItem("op", "");
                showTop("Location removed from your favourites");
            } else {
                y = "1";
                elems = document.getElementsByClassName('km-customstar');
                for (i = 0; i < elems.length; i++) {
                    elems[i].style.color = '#fff000';
                }
                window.localStorage.setItem("op", "1");
                showTop("Location added to your favourites");
            }
            setMemberPreference(y, "RD" + window.localStorage.getItem("oc"));
        }

    });

    function onConfirm2(buttonIndex) {
        if (buttonIndex === 1) {
            saveLater();
        } else if (buttonIndex === 2) {
            savePreferenceItem();
        }
    }

    function onConfirm3(buttonIndex) {
        if (buttonIndex === 1) {
            saveLater();
        } else if (buttonIndex === 2) {
            saveSetting();
            if (window.localStorage.getItem("isset") === "1") {
                saveLater();
            }
        }
    }

    function saveLater() {
        postLoginBack();
    }

    function savePreferenceItem() {
        //life style
        // showSpin();
        var ul = document.getElementById("lifestyle-filter");
        var items = ul.getElementsByTagName("input");

        for (var i = 0; i < items.length; ++i) {
            y = items[i].checked ? "1" : "0";

            setMemberPreference(y, items[i].value);
        }

        //Cuisine Type

        ul = document.getElementById("cuisinetype-filter");
        items = ul.getElementsByTagName("input");
        for (i = 0; i < items.length; ++i) {
            y = items[i].checked ? "1" : "0";

            setMemberPreference(y, items[i].value);
        }

        //celebration Type

        ul = document.getElementById("celebrationtype-filter");
        items = ul.getElementsByTagName("input");

        for (i = 0; i < items.length; ++i) {
            y = items[i].checked ? "1" : "0";

            setMemberPreference(y, items[i].value);
        }

        //Restaurant
        ul = document.getElementById("restaurantdetail-filter");
        items = ul.getElementsByTagName("input");

        for (i = 0; i < items.length; ++i) {
            y = items[i].checked ? "1" : "0";

            setMemberPreference(y, items[i].value);
        }
        if (window.localStorage.getItem("errorPreference") === "1") {
            navigator.notification.alert("Your preferences were saved successfully.", function () {
            }, "SNTTA Travel", "Dismiss");
        } else {
            navigator.notification.alert("Your Preferences Were Saved Successfully", function () {
            }, "SNTTA Travel", "Dismiss");
        }
        window.localStorage.setItem("errorPreference", "1");
        window.localStorage.setItem("issaved", "1");

        window.setTimeout(window.plugins.nativepagetransitions.slide({
            "duration": 500, // in milliseconds (ms), default 400
            "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
            "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
            "androiddelay": 150, // same as above but for Android, default 70

            'direction': 'up',
            'href': '#views/pl-explore.html'
        }), 500);
    }

    function redeemDiscount() {
        showSpin();

        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/discountRedemption.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, customerid: customer, password: password, emppin: this.depin1.value, mdevice: window.localStorage.getItem("mdevicestat")
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode === "000") {
                    postLogin.set("srpin1", "");
                    postLogin.set("depin1", "");
                    window.localStorage.setItem("self-vouchernumber", getData.customerid);
                    window.localStorage.setItem("self-vouchername", getData.segment);
                    window.localStorage.setItem("self-authorization", getData.transactionref);
                    window.localStorage.setItem("self-outletname", getData.outletname);
                    postLogin.set("depin1", "");

                    if (window.localStorage.getItem("segmentcode") === "1003") {
                        $("body").data("kendoMobilePane").navigate("views/pl-confirmDiscount.html");
                    } else {
                        $("body").data("kendoMobilePane").navigate("views/pl-confirmDiscountBlack.html");
                    }

                    hideSpin(); //hide loading popup
                } else {
                    navigator.notification.alert("Unable to Validate Discount. Please try again.  " + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss");
                    postLogin.set("depin1", "");
                    hideSpin(); //hide loading popup
                }
            },
            error: function (errormsg) {
                navigator.notification.alert("Due to a system error, we are unable to Validate Discount  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss");
                postLogin.set("depin1", "");
                hideSpin(); //hide loading popup
            }
        });
    }

    function activateRedeemVoucher() {
        showSpin();

        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/activateVoucherRedemption.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, customerid: customer, password: password, couponcode: "", emppin: this.depin1.value, mdevice: window.localStorage.getItem("mdevicestat"), offercode: window.localStorage.getItem("redeemoffer")
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode === "000") {
                    window.localStorage.setItem("self-vouchernumber", getData.couponcode);
                    window.localStorage.setItem("self-vouchername", getData.couponname);
                    window.localStorage.setItem("self-authorization", getData.transactionref);
                    window.localStorage.setItem("self-outletname", getData.outletname);
                    postLogin.set("depin1", "");
                    showsummary = "";
                    if (window.localStorage.getItem("segmentcode") === "1003") {
                        $("body").data("kendoMobilePane").navigate("views/pl-confirmvoucher.html");
                    } else {
                        $("body").data("kendoMobilePane").navigate("views/pl-confirmvoucherblack.html");
                    }

                    hideSpin(); //hide loading popup
                } else {
                    navigator.notification.alert("Unable to Redeem Voucher. Please try again. " + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss")
                    postLogin.set("depin1", "");
                    hideSpin(); //hide loading popup
                }
            },
            error: function (errormsg) {
                navigator.notification.alert("System Error: unable to Redeem Voucher.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
                postLogin.set("depin1", "");
                hideSpin(); //hide loading popup
            }
        });
    }

    function redeemVoucher() {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/VoucherRedemption.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, customerid: customer, password: password, couponcode: window.localStorage.getItem("selfredeemVouchernumber"), emppin: this.depin1.value, mdevice: window.localStorage.getItem("mdevicestat")
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode === "000") {
                    window.localStorage.setItem("self-vouchernumber", getData.couponcode);
                    window.localStorage.setItem("self-vouchername", getData.couponname);
                    window.localStorage.setItem("self-authorization", getData.transactionref);
                    window.localStorage.setItem("self-outletname", getData.outletname);
                    postLogin.set("depin1", "");
                    showsummary = "";
                    if (window.localStorage.getItem("segmentcode") === "1003") {
                        $("body").data("kendoMobilePane").navigate("views/pl-confirmvoucher.html");
                    } else {
                        $("body").data("kendoMobilePane").navigate("views/pl-confirmvoucherblack.html");
                    }
                    hideSpin(); //hide loading popup
                } else {
                    navigator.notification.alert("Unable to Redeem Voucher. Please try again. " + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss")
                    postLogin.set("depin1", "");
                    hideSpin(); //hide loading popup
                }
            },
            error: function (errormsg) {
                navigator.notification.alert("System Error: unable to Redeem Voucher.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
                postLogin.set("depin1", "");
                hideSpin(); //hide loading popup
            }
        });
    }

    function createPIN(x, y) {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/savePIN.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, customer: window.localStorage.getItem("mobilelogin"), token: x, mdevice: window.localStorage.getItem("mdevicestat"), mdevicef: mdevice, muuid: muuid, mversion: mversion, mplatform: mplatform, validatetype: ""
            }),
            success: function (data) {
                var getData = JSON.parse(data);

                if (getData.statuscode == "000") { //Login Successful  
                    window.localStorage.setItem("mobilelogin", window.localStorage.getItem("mobilelogin"));
                    if (window.localStorage.getItem("setpintype") == "1") {
                        firstlogin(window.localStorage.getItem("mobilelogin"), x);
                    }
                    if (window.localStorage.getItem("setpintype") == "2") {
                        navigator.notification.alert("PIN changes successfully", function () {
                        }, "SNTTA Travel", "Dismiss")

                        hideSpin(); //hide loading popup
                        $("#modalviewpin").data("kendoMobileModalView").close();
                    }
                } else {
                    navigator.notification.alert("Due to a system error, we are unable to set PIN. " + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            },
            error: function (errormsg) {
                navigator.notification.alert("Due to a system error, we are unable to set PIN. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
                hideSpin(); //hide loading popup
            }
        });
    }

    function saveImageFile(e) {
        showSpin();

        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/updateimage.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, customerid: customer, password: password, image1: e, mdevice: window.localStorage.getItem("mdevicestat")
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode != "000") {
                    navigator.notification.alert("Image change could not be updated due to system error. " + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss")
                }
                hideSpin(); //hide loading popup
            },
            error: function (error) {
                navigator.notification.alert("Image change could not be updated due to system error. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
                hideSpin(); //hide loading popup
            }
        });
    }

    function noAlcoholCountry() {
        showSpin(); //show loading popup

        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/noAlcoholList.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, customerid: customer, mdevice: window.localStorage.getItem("mdevicestat")
            }),
            success: function (data) {
                var getData = JSON.parse(data);

                if (getData.statuscode == "000") {
                    for (i = 0; i < getData.preflist.length; i++) {
                        noalcohollist[i] = getData.preflist[i].code;
                    }

                    hideSpin();
                } else {
                    navigator.notification.alert("Unable to display no alcohol country list. Please restart your app and try again. " + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            },
            error:
            function (error) {
                navigator.notification.alert("Due to a system error, Unable to display no alcohol country list. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
                hideSpin(); //hide loading popup
            }
        });
    }

    function listCountry() {
        showSpin(); //show loading popup                       
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/listcountryandprice.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, customerid: customer, mdevice: window.localStorage.getItem("mdevicestat")
            }),
            success: function (data) {
                var getData = JSON.parse(data);

                if (getData.statuscode == "000") {
                    //fill the outlet template

                    if (getData.statuscode == "000") {
                        //fill the select dropdown for country
                        for (var i = 0; i < getData.countrylist.length; i++) {
                            var x = document.getElementById("selCountry");
                            var opt = document.createElement("option");
                            opt.value = getData.countrylist[i].countryname;
                            opt.text = getData.countrylist[i].countrycode;
                            x.add(opt);
                        }
                        if (homecountry.length > 0) {
                            document.getElementById("selCountry").value = homecountry;
                        }
                        hideSpin();
                    } else {
                        navigator.notification.alert("Unable to display country list. Please restart your app and try again. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                }
            },
            error:
            function (error) {
                navigator.notification.alert("Due to a system error, Unable to display country list. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
                hideSpin(); //hide loading popup
            }
        });
    }

    function listCity(e, y) {
        t = e;
        showSpin(); //show loading popup

        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/listcityandlanguage.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, customerid: customer, countrycode: t, mdevice: window.localStorage.getItem("mdevicestat")
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode == "000") {
                    //fill the outlet template
                    for (var i = 0; i < getData.citylist.length; i++) {
                        var x = y;
                        var opt = document.createElement("option");
                        opt.value = getData.citylist[i].cityname;
                        opt.text = getData.citylist[i].citycode;
                        x.add(opt);
                    }
                    document.getElementById("selCity").value = residentcity;
                } else {
                    navigator.notification.alert("Unable to display city list. Please restart your app and try again. " + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            },
            error: function (error) {
                navigator.notification.alert("Due to a system error, Unable to display city list. [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
                hideSpin(); //hide loading popup
            }
        });
    }

    function hideSpin() {
        window.setTimeout(function () {
            $("#mvwait").data("kendoMobileModalView").close();
        }, 100);
    }

    function hideSpinA() {
        window.setTimeout(function () {
            $("#mvwait").data("kendoMobileModalView").close();
        }, 3000);
    }

    function showSpin() {
        if (!checkConnectionBool()) {
            navigator.notification.alert("Due to a network error cannot complete the request. Please check your network and re-try.", function () {
            }, "SNTTA Travel", "Dismiss");
            //        //$("body").data().kendoMobilePane.navigate("views/nonetwork.html");  
        } else {
            $("#mvwait").data("kendoMobileModalView").open();
        }
    }

    function checkConnectionBool() {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.NONE] = 'No network connection';
        if (states[networkState] == "No network connection") {
            navigator.notification.alert(states[networkState], function () {
            }, "SNTTA Travel", "Dismiss");
            return false;
        } else {
            return true;
        }
    }

    function getGeoPlacePostLogin() {
        showSpin();
        if (autolocation != "1") { //Check whether auto location enabled
            geocity = city;
            geocountry = country;
        }

        return true;
    }




    function gpsError() {
        if (gpsErrorShow === "") {
            showTop("Location Settings are disabled for this app. This will result in incorrect display of distance.  Please enable the Location settings for the app on the device Settings.");
            // navigator.notification.alert("Location Settings are disabled for this app. This will result in incorrect display of distance.  Please enable the Location settings for the app on the device Settings.", function() {
            // }, "SNTTA Travel", "Dismiss");

            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/trackDevice.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), mdevice: window.localStorage.getItem("mdevicestat"), lat: lat, lon: lon, customer: window.localStorage.getItem("customer").callbacktype, segment: "GPSOFF"
                }),
                success: function (data) {
                },
                error: function (error) {
                }
            });
            //gpsErrorShow = "1"; remove the comment if error message is required to be shown only once
        }
    }

    function gpsErrorApp() {
        if (gpsErrorShowApp === "") {
            showTop("Autolocation is disabled for this app. This will result in incorrect display of distance.  Please enable the Autolocation settings for the app on the Settings page.");
            //navigator.notification.alert("Autolocation is disabled for this app. This will result in incorrect display of distance.  Please enable the Autolocation settings for the app on the Settings page.", function() {
            //}, "SNTTA Travel", "Dismiss");
            //gpsErrorShowApp = "1"; remove the comment if error message is required to be shown only once
        }
    }

    function getlocationparams() {
        navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
            window.localStorage.setItem("latl", position.coords.latitude);
            window.localStorage.setItem("lonl", position.coords.longitude);
        }
            , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                showTop("Autolocation is disabled for this app. This will result in incorrect display of distance.  Please enable the Autolocation settings for the app on the Settings page or on the device.");
            }, positionOption);
    }

    //Get Country
    function getCountry() {
        navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude
            var geocodingAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=" + googleapikey;

            $.getJSON(geocodingAPI, function (json) {
                if (json.status === "OK") {
                    //Check result 0
                    var result = json.results[0];
                    for (var i = 0, len = result.address_components.length; i < len; i++) {
                        var ac = result.address_components[i];
                        if (ac.types.indexOf("locality") >= 0) {
                            geocity = ac.long_name;
                        }

                        if (ac.types.indexOf("country") >= 0) {
                            mcountry = ac.long_name;
                            window.localStorage.setItem("country", mcountry);
                        }
                    }
                    getFlag(mcountry);
                } else {
                    mcountry = country;
                    window.localStorage.setItem("country", mcountry);
                    getFlag(mcountry);
                }
            });
        }
            , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                //  if (err.code == "1") {
                //      navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                //  } else if (err.code == "2") {
                //      navigator.notification.alert("Device is unable to get the GPS position");  
                //  }
                lat = window.localStorage.getItem("lat");
                lon = window.localStorage.getItem("lon");
                mcountry = country;
                window.localStorage.setItem("country", mcountry);
                getFlag(mcountry);
            }, positionOption);
    }
    function getFlag(e) {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/getCountryflag.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, brandcode: brandcode, mdevice: window.localStorage.getItem("mdevicestat"), city: geocity, country: e, lat: lat, lon: lon
            }),
            success: function (data) {
                var getData = JSON.parse(data);

                if (getData.statuscode == "000") {
                    countryflag = getData.countryflag;
                    window.localStorage.setItem("flagurl", flag_image + countryflag + ".png");
                    document.getElementById("flagtitle").style.background = "url(" + window.localStorage.getItem("flagurl") + ") no-repeat center center";
                    hideSpin(); //hide loading popup
                }
            },
            error: function (errormsg) {
                hideSpin(); //hide loading popup
            }
        });
    }

    function processRegionMonitorCallback(mresult) {
        showTop(mresult);

        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/trackdevice.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: window.localStorage.getItem("merchant"), mdevice: window.localStorage.getItem("mdevicestat") + "^enter^", lat: lat, lon: lon, customer: window.localStorage.getItem("customer"), segment: mresult.regionId
            }),
            success: function (data) {
            },
            error: function (error) {
            }
        });

    }

    function showTop(e) {
        window.plugins.toast.showWithOptions({
            message: e,
            duration: "long",
            position: "bottom",
            addPixelsY: -40  // added a negative value to move it up a bit (default 0)
        },
            function () {
            }, // optional
            function () {
            }    // optional
        );
    }

    function checklocation() {
        navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
        }
            , function onErrorShowMap(error) {
                gpsError();
            }, positionOption);
    }

    function startMonitor() {
        navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            window.localStorage.setItem("latl", lat);
            window.localStorage.setItem("lonl", lon);
            propertygeo = [];
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/outletlist.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: merchant, category: "", brandcode: "", mdevice: window.localStorage.getItem("mdevicestat"), outletcode: "", preflocation: window.localStorage.getItem("distance"), prefcuisine: window.localStorage.getItem("cuisine"), prefcelebration: "", prefrestaurant: window.localStorage.getItem("restaurant"), lat: window.localStorage.getItem("latl"), lon: window.localStorage.getItem("lonl"), customer: ""

                }), success: function (data) {
                    var getData = JSON.parse(data);
                    //alert(data);
                    var i = 0;
                    if (getData.statuscode === "000") {
                        //     alert(getData.statuscode);
                        if (getData.outletlist.length > 0) {
                            //         alert(getData.outletlist.length);
                            while (i <= getData.outletlist.length - 1) {
                                //alert("Adding GEofence location");
                                window.geofence.addOrUpdate({
                                    id: getData.outletlist[i].outletcode,
                                    latitude: Number(getData.outletlist[i].lat),
                                    longitude: Number(getData.outletlist[i].lon),
                                    radius: Number(getData.outletlist[i].radius),
                                    transitionType: TransitionType.ENTER,
                                    notification: {
                                        id: Number(i),
                                        title: getData.outletlist[i].outletname,
                                        text: getData.outletlist[i].smessage,
                                        openAppOnClick: true
                                    }
                                }).then(function () {
                                    console.log(getData.outletlist[i].outletcode + 'Geofence successfully added');
                                }, function (reason) {
                                    console.log(getData.outletlist[i].outletcode + 'Adding geofence failed', reason);
                                })

                                window.localStorage.setItem("isfenceset", "1");
                                i++;
                                hideSpin(); //hide loading popup
                            }
                        } else {
                            navigator.notification.alert("Due to a system error, the property details cannot be displayed. Please close the app and log in again. ", function () {
                            }, "SNTTA Travel", "Dismiss")
                            hideSpin(); //hide loading popup
                        }
                    } else {
                        navigator.notification.alert("Due to a system error, the property details cannot be displayed. " + getData.statusdesc, function () {
                        }, "SNTTA Travel", "Dismiss")
                        hideSpin(); //hide loading popup
                    }
                },
                error: function (error) {
                    navigator.notification.alert("Due to a system error, the property details cannot be displayed.  Please check your network connection and try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                }
            });


            window.geofence.onTransitionReceived = function (geofences) {
                geofences.forEach(function (geo) {
                    processRegionMonitorCallback(geo);
                });
            }
        }
            , function onErrorShowMap(error) {
                gpsError();
            }, positionOption);

        hideSpin();
    }

    function fdidEntera(data) {
        var json = JSON.stringify(data);
        var jsonp = JSON.parse(json);

        if (jsonp["state"] === "CLRegionStateInside") {
            // window.plugin.notification.local.add({
            //                                         title:   "Beacon",
            //                                          message: jsonp["region"].identifier + " " + jsonp["state"]
            //                                    });
            $.ajax({
                type: "POST",
                cache: false,
                async: true,
                timeout: 20000,
                url: gurl + "/beaconMessageBroadCast.aspx",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    merchantcode: window.localStorage.getItem("merchant"), mdevice: jsonp["region"].identifier + "^" + window.localStorage.getItem("mdevicestat") + "^" + jsonp["region"].typeName + "^" + jsonp["state"] + "^" + jsonp["region"].minor + "^" + jsonp["region"].major + "^" + jsonp["region"].identifier + "^" + jsonp["region"].uuid, lat: lat, lon: lon, customer: window.localStorage.getItem("customer"), segment: jsonp["region"].identifier
                }),
                success: function (data) {
                    var getData = JSON.parse(data);
                    var i = 0;
                    if (getData.statuscode === "000") {
                        if (getData.beaconoffers.length > 0) {
                            //Start Monitor
                            while (i <= getData.beaconoffers.length - 1) {
                                window.plugin.notification.local.add({
                                    // title:   getData.beaconoffers[i].msgtitle,
                                    message: getData.beaconoffers[i].msgnotification
                                });

                                i++;
                            }
                        }
                    } else {
                        // showTop("Error Retrieving Beacon Message" + getData.statuscode + getData.statusdesc);
                    }
                },
                error: function (error) {
                }
            });
        }
    }

    function onPushNotificationReceived(e) {
        if (e.alert == undefined || e.alert == '') {
            y = e.message;
        } else {
            y = e.alert;
        }

        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/offerlistname.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, mdevice: mdevicestat, offercode: y
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode != "000") {
                    if ((window.localStorage.getItem("password") != undefined) && (window.localStorage.getItem("password") != "")) {
                        $("body").data().kendoMobilePane.navigate("views/pl-mymessagelist.html");
                    } else {
                        $("body").data().kendoMobilePane.navigate("views/home.html");
                    }
                } else {
                    if ((window.localStorage.getItem("password") != undefined) && (window.localStorage.getItem("password") != "")) {
                        if (getData.offer.length > 0) {
                            $("body").data().kendoMobilePane.navigate("views/pl-offerlist.html");
                        } else {
                            $("body").data().kendoMobilePane.navigate("views/pl-mymessagelist.html");
                        }
                    } else {
                        if (getData.offer.length > 0) {
                            $("body").data().kendoMobilePane.navigate("views/offerlist.html");
                        } else {
                            $("body").data().kendoMobilePane.navigate("views/home.html");
                        }
                    }
                }
            },
            error
            : function (errormsg) {
                // alert(JSON.stringify(errormsg));
                if ((window.localStorage.getItem("password") != undefined) && (window.localStorage.getItem("password") != "")) {
                    $("body").data().kendoMobilePane.navigate("views/pl-mymessagelist.html");
                } else {
                    $("body").data().kendoMobilePane.navigate("views/home.html");
                }
            }
        });
    }

    function callBackError(e) {
        m = JSON.stringify(e);
        m = JSON.parse(m);
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/trackDevice.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: window.localStorage.getItem("merchant"), mdevice: window.localStorage.getItem("mdevicestat") + "^" + m, lat: lat, lon: lon, customer: window.localStorage.getItem("customer"), segment: "ERROR"
            }),
            success: function (data) {
            },
            error: function (error) {
            }
        });
    }

    function getHistoryFilterData() {
        var data = [];
        data.push({ code: "1", desc: "Activate Offer" });
        data.push({ code: "2", desc: "Change Profile" });
        data.push({ code: "3", desc: "New Subscription" });
        data.push({ code: "4", desc: "Redeem Spend" });
        data.push({ code: "5", desc: "Redeem Voucher" });
        data.push({ code: "6", desc: "Renew Membership" });
        data.push({ code: "7", desc: "Other Transactions" });

        return data;
    }

    function getFAQData() {
        var data = [];
        data.push({ code: "1", desc: "About SNTTA Travel" });
        data.push({ code: "2", desc: "Membership & Validity" });
        data.push({ code: "3", desc: "Programme Benefits" });
        data.push({ code: "4", desc: "Tier Privilege" });
        data.push({ code: "5", desc: "Mobile App Queries" });

        return data;
    }

    function onConfirm1(buttonIndex) {
        if (buttonIndex === 1) {
            doExecute();
        } else if (buttonIndex === 2) {
            doExit();
        }
    }
    function doExecute(m) {
        showSpin();
        var emirate = "";
        var gender = "";
        var fbuserid = "";
        var fbaccesstoken = "";
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/firsttime.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: window.localStorage.getItem("merchant"), firstname: window.localStorage.getItem("mfirstname"), lastname: window.localStorage.getItem("mlastname"), mobile: window.localStorage.getItem("mobilelogin"), emailid: window.localStorage.getItem("memailid"), emirate: emirate, gender: gender, siriusmember: "", mdevice: mdevicestat, segment: "1003", fbuserid: fbuserid, fbaccesstoken: fbaccesstoken, mypin: m
            }),
            success: function (data) {
                var getData = JSON.parse(data);

                if (getData.statuscode === "000") {
                    window.localStorage.setItem("newmemberid", getData.customerid);
                    window.localStorage.setItem("customer", getData.customerid);
                    window.localStorage.setItem("newmembername", getData.customername);
                    window.localStorage.setItem("newmembersegment", getData.segment);
                    window.localStorage.setItem("enrolmentcomplete", "1");
                    createPIN(m, "0");

                    firstlogin(window.localStorage.getItem("mobilelogin"), m);

                    hideSpin(); //hide loading popup
                } else {
                    navigator.notification.alert("Due to a system error, your enrolment could not be completed.  " + getData.statusdesc + " Please try again.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            },
            error: function (error) {
                navigator.notification.alert("Due to a system error, your enrolment could not be completed.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
                hideSpin(); //hide loading popup
            }
        });
    }
    function doExit() {
        return;
    }

    function firstlogin(m, n) {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/validateUser.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, customer: m, password: n, mdevice: mdevicestat, mdevicef: mdevice, muuid: muuid, mversion: mversion, mplatform: mplatform, mfirsttime: window.localStorage.getItem("notification"), mmagicnumber: "", fbuserid: window.localStorage.getItem("FBuserID"), loginmode: window.localStorage.getItem("loginmode"), pinverified: "Y"
            }),
            success: function (data) {
                var getData = JSON.parse(data);

                if (getData.statuscode == "000") { //Login Successful

                    customer = getData.customerid;
                    customername = getData.customername;
                    fullname = getData.fullname;
                    segmentcode = getData.segmentcode;
                    segmentname = getData.segmentname;
                    currency = getData.currency;
                    nationality = getData.nationality;
                    pointvalue = getData.pointvalue;
                    cuspict = getData.imageurl;
                    cusqr = getData.qrurl;
                    emailid = getData.emailid;
                    mobilenumber = getData.mobilenumber;
                    formattedmobile = window.localStorage.getItem("mobilelogin");
                    //"(+" + mobilenumber.substring(0,3)+") " + mobilenumber.substring(3,mobilenumber.length);
                    memberexpiry = getData.memberexpiry;
                    segmentimage = getData.segmentimage;
                    pushoffer = getData.pushoffer;
                    remindexpiry = getData.remindexpiry;
                    showprofile = getData.showprofile;
                    autolocation = getData.autolocation;
                    city = getData.city;
                    country = getData.country;
                    magicnumber = getData.magicnumber;
                    firstname = getData.firstname;
                    initdate = getData.initdate;
                    homecountry = getData.homecountry;
                    birthdate = getData.dateofbirth;
                    displaybirthdate = getData.displaydateofbirth;
                    residentcity = getData.residentcity;
                    pinnumber = getData.pinnumber;
                    spend = getData.spend;
                    maxspend = getData.maxspend;
                    fbid = getData.fbid;
                    alcohol = getData.alcohol;
                    homecountryname = getData.homecountryname;
                    residentcityname = getData.residentcityname;
                    //set Local Storage as cookies to retain login
                    window.localStorage.setItem("enrolmentcomplete", "1");
                    window.localStorage.setItem("customer", customer);
                    window.localStorage.setItem("mobilelogin", mobilenumber);
                    window.localStorage.setItem("customername", customername);
                    window.localStorage.setItem("segmentcode", segmentcode);
                    window.localStorage.setItem("segmentname", segmentname);
                    window.localStorage.setItem("currency", currency);
                    window.localStorage.setItem("nationality", nationality);
                    window.localStorage.setItem("pointvalue", pointvalue);
                    window.localStorage.setItem("cuspict", cuspict);
                    window.localStorage.setItem("cusqr", cusqr);
                    window.localStorage.setItem("emailid", emailid);
                    window.localStorage.setItem("mobilenumber", mobilenumber);
                    window.localStorage.setItem("memberexpiry", memberexpiry);
                    window.localStorage.setItem("segmentimage", segmentimage);
                    window.localStorage.setItem("pushoffer", pushoffer);
                    window.localStorage.setItem("remindexpiry", remindexpiry);
                    window.localStorage.setItem("showprofile", showprofile);
                    window.localStorage.setItem("mdevice", mdevice);
                    window.localStorage.setItem("muuid", muuid);
                    window.localStorage.setItem("mversion", mversion);
                    window.localStorage.setItem("mplatform", mplatform);
                    window.localStorage.setItem("autolocation", autolocation);
                    window.localStorage.setItem("city", city);
                    window.localStorage.setItem("country", country);
                    window.localStorage.setItem("magicnumber", magicnumber);
                    window.localStorage.setItem("residentcity", residentcity);
                    window.localStorage.setItem("homecountry", homecountry);
                    window.localStorage.setItem("birthdate", birthdate);
                    window.localStorage.setItem("displaybirthdate", displaybirthdate);
                    window.localStorage.setItem("firstname", firstname);
                    window.localStorage.setItem("initdate", initdate);
                    window.localStorage.setItem("spend", spend);
                    window.localStorage.setItem("maxspend", maxspend);
                    window.localStorage.setItem("fbid", fbid);
                    window.localStorage.setItem("alcohol", alcohol);
                    window.localStorage.setItem("homecountryname", homecountryname);
                    window.localStorage.setItem("fullname", fullname);
                    window.localStorage.setItem("residentcityname", residentcityname);

                    pushSettings = {
                        iOS: {
                            badge: "true",
                            sound: "true",
                            alert: "true",
                            clearBadge: "true"
                        },
                        android: {
                            senderID: googleApiProjectNumber
                        },
                        wp8: {
                            channelName: 'EverlivePushChannel'
                        },
                        notificationCallbackIOS: onPushNotificationReceived,
                        notificationCallbackAndroid: onPushNotificationReceived,
                        notificationCallbackWP8: onPushNotificationReceived,
                        customParameters: {
                            Memberid: customer,
                            Merchant: merchant,
                            Segment: segmentcode,
                            devicecode: muuid
                        }
                    };

                    if (window.localStorage.getItem("notification") === "1") {
                        //Re-register the device with updates
                        currentDevice.getRegistration(function () {
                            currentDevice.unregister().then(function () {
                            }, function (err) {
                            });
                            currentDevice.enableNotifications(pushSettings, function (data) {
                                currentDevice.register(pushSettings, function (data) {
                                }, function (err) {
                                });
                            }, function (err) {
                            });
                        }, function (err) {
                        });
                        window.localStorage.setItem("notification", "1");
                    }
                    window.localStorage.setItem("loginmode", "");
                    window.localStorage.setItem("FBuserID", "");


                    password = getData.certificate;
                    window.localStorage.setItem("password", password);
                    window.localStorage.setItem("loggedin", "1");

                    $("body").data("kendoMobilePane").navigate("views/pl-explore.html");


                    hideSpin(); //hide loading popup
                } else {
                    navigator.notification.alert(getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss")
                    window.localStorage.setItem("loginmode", "");
                    window.localStorage.setItem("FBuserID", "");
                    hideSpin(); //hide loading popup
                }
            },
            error: function (errormsg) {
                navigator.notification.alert("Login failed.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
                window.localStorage.setItem("loginmode", "");
                window.localStorage.setItem("FBuserID", "");

                hideSpin(); //hide loading popup
            }
        });
    }

    function getRestaurantType(x, y) {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/restaurantTypeList.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, mdevice: window.localStorage.getItem("mdevicestat")
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode === "000") {
                    if (getData.preflist.length > 0) {
                        $(x).kendoMobileListView({
                            dataSource: kendo.data.DataSource.create({ data: getData.preflist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                            template: $(y).html()
                            //endlessScroll: true

                        });
                    } else {
                        navigator.notification.alert("Restaurant Type Preference List not available", function () {
                        }, "SNTTA Travel", "Dismiss")
                    }
                } else {
                    navigator.notification.alert("Cannot get Restaurant Type Preference List. " + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss")
                }
            },
            error: function (errormsg) {
                navigator.notification.alert("Unknown Error, Cannot get Restaurant Type Preference List.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
            }
        });
    }

    function getLifeStylePref(x, y) {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/lifeStyleList.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, mdevice: window.localStorage.getItem("mdevicestat")
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode === "000") {
                    if (getData.preflist.length > 0) {
                        $(x).kendoMobileListView({
                            dataSource: kendo.data.DataSource.create({ data: getData.preflist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                            template: $(y).html()
                            //endlessScroll: true


                        });
                    } else {
                        navigator.notification.alert("Lifestyle Preference List not available", function () {
                        }, "SNTTA Travel", "Dismiss")
                    }
                } else {
                    navigator.notification.alert("Cannot get Lifestyle Preference List. " + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss")
                }
                hideSpin(); //hide loading popup
            },
            error: function (errormsg) {
                navigator.notification.alert("Unknown Error, Cannot get Lifestyle Preference List.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
                hideSpin(); //hide loading popup
            }
        });
    }

    function getRestaurantDetailPref(x, y) {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/restaurantDetailList.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, mdevice: window.localStorage.getItem("mdevicestat")
            }),
            success: function (data) {
                var getData = JSON.parse(data);

                if (getData.statuscode === "000") {
                    if (getData.preflist.length > 0) {
                        $(x).kendoMobileListView({
                            dataSource: kendo.data.DataSource.create({ data: getData.preflist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                            template: $(y).html()
                            //endlessScroll: true

                        });
                    } else {
                        navigator.notification.alert("Restaurant Details List not available", function () {
                        }, "SNTTA Travel", "Dismiss")
                    }
                } else {
                    navigator.notification.alert("Cannot get Restaurant Details List. " + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss")
                }
            },
            error: function (errormsg) {
                navigator.notification.alert("Unknown Error, Cannot get Restaurant Details List.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
            }
        });
    }

    function gct(x, y) {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/cuisineTypeList.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, mdevice: window.localStorage.getItem("mdevicestat")
            }),
            success: function (data) {
                var getData = JSON.parse(data);

                if (getData.statuscode === "000") {
                    if (getData.preflist.length > 0) {
                        $(x).kendoMobileListView({
                            dataSource: kendo.data.DataSource.create({ data: getData.preflist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                            template: $(y).html()
                            //endlessScroll: true

                        });
                    } else {
                        navigator.notification.alert("Cuisine Type List not available", function () {
                        }, "SNTTA Travel", "Dismiss")
                    }
                } else {
                    navigator.notification.alert("Cannot get Cuisine Type List. " + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss")
                }
            },
            error: function (errormsg) {
                navigator.notification.alert("Unknown Error, Cannot get Cuisine Type List.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
            }
        });
    }

    function getCelebrationTypePref(x, y) {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/celebrationTypeList.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, mdevice: window.localStorage.getItem("mdevicestat")
            }),
            success: function (data) {
                var getData = JSON.parse(data);

                if (getData.statuscode === "000") {
                    if (getData.preflist.length > 0) {
                        $(x).kendoMobileListView({
                            dataSource: kendo.data.DataSource.create({ data: getData.preflist }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                            template: $(y).html()
                            //endlessScroll: true

                        });
                    } else {
                        navigator.notification.alert("Celebration Type List not available", function () {
                        }, "SNTTA Travel", "Dismiss")
                    }
                } else {
                    navigator.notification.alert("Cannot get Celebration Type List. " + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss")
                }
            },
            error: function (errormsg) {
                navigator.notification.alert("Unknown Error, Cannot get Celebration Type List.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
            }
        });
    }

    function setMemberPreference(e, m) {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/setMemberPreference.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: merchant, mdevice: window.localStorage.getItem("mdevicestat"), preference: e, itemcode: m, customer: customer, password: password
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode === "000") {
                    window.localStorage.setItem("errorPreference", "1");
                    // hideSpin();
                } else {
                    //  navigator.notification.alert("ERROR : One or more preferences could not be saved!"  +getData.statusdesc, function() {
                    //                           }, "SNTTA Travel" , "Dismiss");     
                    window.localStorage.setItem("errorPreference", getData.statusdesc);
                    // hideSpin();                           
                }
            },
            error: function (errormsg) {
                // navigator.notification.alert("ERROR : One or more preferences could not be saved!"  +errormsg.statusText, function() {
                //                             }, "SNTTA Travel" , "Dismiss");     
                window.localStorage.setItem("errorPreference", errormsg.statusText);
            }
        });
    }

    function setLifeStylePreference(x, y) {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/mypreferencelist.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: window.localStorage.getItem("merchant"), mdevice: window.localStorage.getItem("mdevicestat"), preferencetype: "LS", customer: window.localStorage.getItem("customer"), password: window.localStorage.getItem("password")
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode === "000") {
                    $(x).kendoMobileListView({
                        dataSource: kendo.data.DataSource.create({ data: getData.mypreferences }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                        template: $(y).html()
                        //endlessScroll: true


                    });

                    var ul = document.getElementById("lifestyle-filter");
                    var items = ul.getElementsByTagName("input");
                    // alert("LS" + items.length);
                    for (var n = 0; n < getData.mypreferences.length; n++) {
                        for (var i = 0; i < items.length; ++i) {
                            if (getData.mypreferences[n].isavailable == items[i].value) {
                                items[i].checked = true;
                            }
                        }
                    }
                    setRestaurantPreference("#restaurantdetail-filter", "#restaurantdetailfilter-template");
                } else {
                    navigator.notification.alert("ERROR : One or more preferences could not be set!" + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss");
                    document.getElementById("prefsave").style.display = "none";
                }
            },
            error: function (errormsg) {
                navigator.notification.alert("ERROR : One or more preferences could not be set!" + errormsg.statusText, function () {
                }, "SNTTA Travel", "Dismiss");
                document.getElementById("prefsave").style.display = "none";
            }
        });
    }

    function setCuisineTypePreference(x, y) {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/mypreferencelist.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: window.localStorage.getItem("merchant"), mdevice: window.localStorage.getItem("mdevicestat"), preferencetype: "CS", customer: window.localStorage.getItem("customer"), password: window.localStorage.getItem("password")
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode === "000") {
                    $(x).kendoMobileListView({
                        dataSource: kendo.data.DataSource.create({ data: getData.mypreferences }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                        template: $(y).html()
                        //endlessScroll: true


                    });

                    var ul = document.getElementById("cuisinetype-filter");
                    var items = ul.getElementsByTagName("input");
                    // alert("LS" + items.length);
                    for (var n = 0; n < getData.mypreferences.length; n++) {
                        for (var i = 0; i < items.length; ++i) {
                            if (getData.mypreferences[n].isavailable == items[i].value) {
                                items[i].checked = true;
                            }
                        }
                    }
                    //  document.getElementById("myfavorite-view").style.display="block"; 
                    hideSpin();
                } else {
                    navigator.notification.alert("ERROR : One or more preferences could not be set!" + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss");
                    document.getElementById("prefsave").style.display = "none";
                    hideSpin();
                }
            },
            error: function (errormsg) {
                navigator.notification.alert("ERROR : One or more preferences could not be set!" + errormsg.statusText, function () {
                }, "SNTTA Travel", "Dismiss");
                document.getElementById("prefsave").style.display = "none";
                hideSpin();
            }
        });
    }

    function setCelebrationTypePreference(x, y) {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/mypreferencelist.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: window.localStorage.getItem("merchant"), mdevice: window.localStorage.getItem("mdevicestat"), preferencetype: "CB", customer: window.localStorage.getItem("customer"), password: window.localStorage.getItem("password")
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode === "000") {
                    $(x).kendoMobileListView({
                        dataSource: kendo.data.DataSource.create({ data: getData.mypreferences }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                        template: $(y).html()
                        //endlessScroll: true


                    });

                    var ul = document.getElementById("celebrationtype-filter");
                    var items = ul.getElementsByTagName("input");
                    // alert("LS" + items.length);
                    for (var n = 0; n < getData.mypreferences.length; n++) {
                        for (var i = 0; i < items.length; ++i) {
                            if (getData.mypreferences[n].isavailable == items[i].value) {
                                items[i].checked = true;
                            }
                        }
                    }
                    setCuisineTypePreference("#cuisinetype-filter", "#cuisinetypefilter-template");
                } else {
                    navigator.notification.alert("ERROR : One or more preferences could not be set!" + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss");
                    document.getElementById("prefsave").style.display = "none";
                }
            },
            error: function (errormsg) {
                navigator.notification.alert("ERROR : One or more preferences could not be set!" + errormsg.statusText, function () {
                }, "SNTTA Travel", "Dismiss");
                document.getElementById("prefsave").style.display = "none";
            }
        });
    }

    function setRestaurantPreference(x, y) {
        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/mypreferencelist.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: window.localStorage.getItem("merchant"), mdevice: window.localStorage.getItem("mdevicestat"), preferencetype: "RD", customer: window.localStorage.getItem("customer"), password: window.localStorage.getItem("password")
            }),
            success: function (data) {
                var getData = JSON.parse(data);
                if (getData.statuscode === "000") {
                    $(x).kendoMobileListView({
                        dataSource: kendo.data.DataSource.create({ data: getData.mypreferences }),//, serverPaging: true,pageSize:20 (this should be the datasource paramteres
                        template: $(y).html()
                        //endlessScroll: true


                    });
                    var ul = document.getElementById("restaurantdetail-filter");
                    var items = ul.getElementsByTagName("input");
                    // alert("LS" + items.length);
                    for (var n = 0; n < getData.mypreferences.length; n++) {
                        for (var i = 0; i < items.length; ++i) {
                            if (getData.mypreferences[n].isavailable == items[i].value) {
                                items[i].checked = true;
                            }
                        }
                    }
                    setCelebrationTypePreference("#celebrationtype-filter", "#celebrationtype-template");
                } else {
                    navigator.notification.alert("ERROR : One or more preferences could not be set!" + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss");
                    document.getElementById("prefsave").style.display = "none";
                }
            },
            error: function (errormsg) {
                navigator.notification.alert("ERROR : One or more preferences could not be set!" + errormsg.statusText, function () {
                }, "SNTTA Travel", "Dismiss");
                document.getElementById("prefsave").style.display = "none";
            }
        });
    }

    function postLoginBack() {
        elems = document.getElementsByClassName('cardhead');
        for (i = 0; i < elems.length; i++) {
            elems[i].style.display = 'none';
        }

        elems = document.getElementsByClassName('foot');
        for (i = 0; i < elems.length; i++) {
            elems[i].style.display = 'none';
        }

        elems = document.getElementsByClassName('mymenu1');

        for (i = 0; i < elems.length; i++) {
            elems[i].innerHTML = '<i class="fa fa-chevron-up fa-2x" style="color:#fff"></i>';
            elems[i].style.width = "100%";
            elems[i].style.zIndex = 10000;
            elems[i].style.textAlign = "center";
        }

        $("body").data("kendoMobilePane").navigate("views/pl-explore.html");

        hideSpin();
    }
    //$("body").data("kendoMobilePane").navigate("#:back");

    function getRestTypeData() {
        var data = [];
        data.push({ code: "RD1000", desc: "Award Winning" });
        data.push({ code: "RD1001", desc: "Bar/Lounge" });
        data.push({ code: "RD1002", desc: "Casual Dining" });
        data.push({ code: "RD1003", desc: "Corporate/Business" });
        data.push({ code: "RD1004", desc: "Family Dining" });
        data.push({ code: "RD1005", desc: "OpenAir Dining" });
        data.push({ code: "RD1006", desc: "Romantic Dining" });
        data.push({ code: "RD1007", desc: "Scenic View" });
        data.push({ code: "RD1009", desc: "Spa" });
        data.push({ code: "RD1008", desc: "Theme Park" });
        data.push({ code: "RD1010", desc: "Night life/Night Club" });
        data.push({ code: "RD1012", desc: "Cafe or Bistro" });
        data.push({ code: "RD1011", desc: "Sports Bar" });
        data.push({ code: "RD1013", desc: "Cocktail Bar" });
        data.push({ code: "RD1014", desc: "Signature Fine Dining" });

        return data;
    }

    function getRestCuisineData() {
        var data = [];
        data.push({ code: "CS1008", desc: "African" });
        data.push({ code: "CS1000", desc: "Afternoon Tea" });
        data.push({ code: "CS1001", desc: "Asian" });
        data.push({ code: "CS1002", desc: "Bar food" });
        data.push({ code: "CS1016", desc: "Brunch" });
        data.push({ code: "CS1014", desc: "Business Lunch" });
        data.push({ code: "CS1007", desc: "European" });
        data.push({ code: "CS1009", desc: "Healthy" });
        data.push({ code: "CS1003", desc: "International" });
        data.push({ code: "CS1004", desc: "Latin American" });
        data.push({ code: "CS1010", desc: "Light Bites" });
        data.push({ code: "CS1013", desc: "Middle Eastern" });
        data.push({ code: "CS1011", desc: "Patisserie" });
        data.push({ code: "CS1005", desc: "Seafood" });
        data.push({ code: "CS1006", desc: "Steakhouse" });
        data.push({ code: "CS1012", desc: "Vegetarian" });

        return data;
    }

    function getOfferTypeData() {
        var data = [];
        data.push({ code: "LS1007", desc: "Art & Culture" });
        data.push({ code: "LS1008", desc: "Beach" });
        data.push({ code: "LS1021", desc: "Beauty" });
        data.push({ code: "LS1004", desc: "Brunch" });
        data.push({ code: "LS1006", desc: "Family & Kids" });
        data.push({ code: "LS1020", desc: "Fashion" });
        data.push({ code: "LS1010", desc: "Fine Dining" });
        data.push({ code: "LS1017", desc: "Football" });
        data.push({ code: "LS1025", desc: "Gadgets" });
        data.push({ code: "LS1015", desc: "Golf" });
        data.push({ code: "LS1011", desc: "Grape Tasting" });
        data.push({ code: "LS1016", desc: "Horse Racing" });
        data.push({ code: "LS1001", desc: "Leisure" });
        data.push({ code: "LS1028", desc: "Live music" });
        data.push({ code: "LS1024", desc: "Luxury Goods" });
        data.push({ code: "LS1019", desc: "Motor Sports" });
        data.push({ code: "LS1026", desc: "Networking" });
        data.push({ code: "LS1012", desc: "No alcohol" });
        data.push({ code: "LS1018", desc: "Rugby" });
        data.push({ code: "LS1021", desc: "Shopping" });
        data.push({ code: "LS1003", desc: "Signature Events" });
        data.push({ code: "LS1000", desc: "Spa / Fitness" });
        data.push({ code: "LS1005", desc: "Special Holiday Offers" });
        data.push({ code: "LS1009", desc: "Travel & Stay Packages" });
        data.push({ code: "LS1002", desc: "Watersports" });
        data.push({ code: "LS1014", desc: "Weight loss" });
        data.push({ code: "LS1013", desc: "Wellness & Wellbeing" });
        data.push({ code: "LS1023", desc: "Yoga" });

        return data;
    }

    function getOfferCeleberationData() {
        var data = [];
        data.push({ code: "CB1000", desc: "Birthdays" });
        data.push({ code: "CB1012", desc: "Corporate entertainment" });
        data.push({ code: "CB1007", desc: "Easter celebrations" });
        data.push({ code: "CB1009", desc: "Eid celebrations" });
        data.push({ code: "CB1006", desc: "Father`s day" });
        data.push({ code: "CB1005", desc: "Festive" });
        data.push({ code: "CB1004", desc: "Mothers day" });
        data.push({ code: "CB1008", desc: "Ramadan" });
        data.push({ code: "CB1011", desc: "Thanks giving day" });
        data.push({ code: "CB1010", desc: "UAE National Day" });
        data.push({ code: "CB1003", desc: "Valentines" });
        data.push({ code: "CB1001", desc: "Wedding Anniversary" });
        data.push({ code: "CB1002", desc: "Women`s Day" });

        return data;
    }

    function saveSetting() {
        if (!this.emailid1) {
            navigator.notification.alert("Email is required.  Re-enter", function () {
            }, "SNTTA Travel", "Dismiss");
            return;
        }

        if (document.getElementById("selCity").value === "") {
            navigator.notification.alert("Select Resident City", function () {
            }, "SNTTA Travel", "Dismiss");
            return;
        }

        if ((!document.getElementById("profile-pushoffer").checked) && (document.getElementById("profile-remindexpiry").checked)) {
            navigator.notification.alert("Please enable Push Notification to receive reminders for expirying vouchers", function () {
            }, "SNTTA Travel", "Dismiss");
            return;
        }

        if (document.getElementById("profile-alcohol").checked) {
            alcohol1 = "1";
        } else {
            alcohol1 = "";
        }

        if (document.getElementById("profile-pushoffer").checked) {
            pushoffer1 = "1";
        } else {
            pushoffer1 = "";
        }

        if (document.getElementById("profile-remindexpiry").checked) {
            remindexpiry1 = "1";
        } else {
            remindexpiry1 = "";
        }

        if (document.getElementById("profile-autolocation").checked) {
            autolocation1 = "1";
        } else {
            autolocation1 = "";
        }
        if (document.getElementById("selCountry").value != "") {
            homecountry1 = document.getElementById("selCountry").value;
            homecountry1 = homecountry1.substring(0, 3);
        } else {
            homecountry1 = ""
        }
        if (document.getElementById("selCity").value != "") {
            residentcity1 = document.getElementById("selCity").value;
        } else {
            residentcity1 = "";
        }
        showSpin();
        mdate = this.date1.value;
        emailid = this.emailid1.value;
        mobilenumber = this.mobile1.value;
        magicnumber = this.hotelnumber1.value;

        $.ajax({
            type: "POST",
            cache: false,
            async: true,
            timeout: 20000,
            url: gurl + "/updateprofile_isme.aspx",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                merchantcode: window.localStorage.getItem("merchant"), customerid: window.localStorage.getItem("customer"), password: window.localStorage.getItem("password"), mobile: this.mobile1.value, emailid: this.emailid1.value, pushoffer: pushoffer1, remindexpiry: remindexpiry1, showprofile: showprofile, image1: newimage, mdevice: window.localStorage.getItem("mdevicestat"), autolocation: autolocation1, city: residentcity1, country: homecountry1, birthdate: this.date1.value, magicnumber: this.hotelnumber1.value, alcohol: alcohol1
            }),
            success: function (data) {
                var getData = JSON.parse(data);

                if (getData.statuscode == "000") {
                    homecountry = homecountry1;
                    residentcity = residentcity1;
                    pushoffer = pushoffer1;
                    remindexpiry = remindexpiry1;
                    autolocation = autolocation1;
                    country = homecountry1;
                    city = residentcity1;
                    alcohol = alcohol1;

                    window.localStorage.setItem("autolocation", autolocation);
                    window.localStorage.setItem("pushoffer", pushoffer);
                    window.localStorage.setItem("remindexpiry", remindexpiry);
                    window.localStorage.setItem("residentcity", residentcity);
                    window.localStorage.setItem("homecountry", homecountry);
                    window.localStorage.setItem("emailid", emailid);
                    window.localStorage.setItem("mobilenumber", mobilenumber);
                    window.localStorage.setItem("birthdate", mdate);
                    window.localStorage.setItem("displaybirthdate", getData.displaybirthdate);
                    window.localStorage.setItem("magicnumber", magicnumber);
                    window.localStorage.setItem("hotelmember", magicnumber);
                    window.localStorage.setItem("alcohol", alcohol);
                    window.localStorage.setItem("residentcity", residentcity);
                    window.localStorage.setItem("homecountry", homecountry);
                    var skillsSelect = document.getElementById("selCity");
                    var selectedText = skillsSelect.options[skillsSelect.selectedIndex].text;
                    window.localStorage.setItem("residentcityname", selectedText);
                    skillsSelect = document.getElementById("selCountry");
                    selectedText = skillsSelect.options[skillsSelect.selectedIndex].text;
                    window.localStorage.setItem("homecountryname", selectedText);

                    pushSettings = {
                        iOS: {
                            badge: "true",
                            sound: "true",
                            alert: "true",
                            clearBadge: "true"
                        },
                        android: {
                            senderID: googleApiProjectNumber
                        },
                        wp8: {
                            channelName: 'EverlivePushChannel'
                        },
                        notificationCallbackIOS: onPushNotificationReceived,
                        notificationCallbackAndroid: onPushNotificationReceived,
                        notificationCallbackWP8: onPushNotificationReceived,
                        customParameters: {
                            Memberid: customer,
                            Merchant: merchant,
                            Segment: segmentcode,
                            devicecode: muuid
                        }
                    };

                    if (pushoffer == "1") {
                        //If already registered than update registration
                        currentDevice.getRegistration(function () {
                            currentDevice.unregister().then(function () {
                            }, function (err) {
                                //alert('unregister 1 ' + err);
                            });
                            currentDevice.enableNotifications(pushSettings, function (data) {
                                currentDevice.register(pushSettings, function (data) {
                                }, function (err) {
                                    //alert('register  1 ' + err);
                                });
                            }, function (err) {
                                //alert('enable  1 ' + err);
                            });
                        }, function (err) { //If not registered then enable and register
                            currentDevice.enableNotifications(pushSettings, function (data) {
                                currentDevice.register(pushSettings, function (data) {
                                }, function (err) {
                                    //alert('register 2 '+err);
                                });
                            }, function (err) {
                                //alert('enable  2 ' + err);
                            });
                        });
                        window.localStorage.setItem("notification", "1");
                    } else {
                        currentDevice.unregister()
                            .then(
                            function () {
                            },
                            function (err) {
                                //alert('unregister 2 ' + err);
                            }
                            );
                        window.localStorage.setItem("notification", "2");
                    }

                    navigator.notification.alert("Profile changes successfully updated.", function () {
                    }, "SNTTA Travel", "Dismiss")
                    window.localStorage.setItem("isset", "1");
                    $("body").data().kendoMobilePane.navigate("views/pl-myprofile.html");
                    hideSpin(); //hide loading popup
                } else {
                    navigator.notification.alert("Could not update profile changes due to error. " + getData.statusdesc, function () {
                    }, "SNTTA Travel", "Dismiss")
                    hideSpin(); //hide loading popup
                }
            },
            error: function (error) {
                navigator.notification.alert("Unknown Error, Could not update profile.  [" + errormsg.statusText + "]  Please check your network connection and try again.", function () {
                }, "SNTTA Travel", "Dismiss")
                hideSpin(); //hide loading popup
            }
        });
    }

    function getNearCity() {
        navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude
            var geocodingAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=" + googleapikey;
            $.getJSON(geocodingAPI, function (json) {
                if (json.status === "OK") {
                    //Check result 0
                    var result = json.results[0];
                    for (var i = 0, len = result.address_components.length; i < len; i++) {
                        var ac = result.address_components[i];
                        if (ac.types.indexOf("locality") >= 0) {
                            geocity = ac.long_name;
                            window.localStorage.setItem("distance", geoCity)
                        }

                        if (ac.types.indexOf("country") >= 0) {
                            geocountry = ac.long_name;
                        }
                    }

                    if (y === "1") {
                        geocity = "";
                    }
                    hideSpin();
                }
            });
        }
            , function onErrorShowMap(error) { //Location services not enabled on device or error accessing GPS switch to the default saved city/country
                //  if (err.code == "1") {
                //      navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                //  } else if (err.code == "2") {
                //      navigator.notification.alert("Device is unable to get the GPS position");  
                //  }
                gpsError();
                if (y === "1") {
                    geocity = "";
                    window.localStorage.setItem("distance", geoCity)
                } else {
                    geocity = city;
                    window.localStorage.setItem("distance", geoCity)
                }
                lat = window.localStorage.getItem("lat");
                lon = window.localStorage.getItem("lon");
                geocountry = country;

                hideSpin();
            }, positionOption);
    }

    function changeCard() {
        if (window.localStorage.getItem("segmentcode") === "1003") {
            elems = document.getElementsByClassName('cardhead');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.backgroundColor = '#fff';
            }

            elems = document.getElementsByClassName('class-card-div');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.backgroundColor = '#fff';
            }

            elems = document.getElementsByClassName('share-menu-line-3');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.backgroundColor = '#fff';
            }

            elems = document.getElementsByClassName('share-menu-line-2-c');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.backgroundColor = '#fff';
            }

            elems = document.getElementsByClassName('share-menu-line-3-a');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.color = '#000';
            }

            elems = document.getElementsByClassName('fa-chevron-up');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.color = '#000';
            }

            elems = document.getElementsByClassName('general-text-line-1');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.color = '#000';
            }
        } else {
            elems = document.getElementsByClassName('cardhead');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.backgroundColor = '#000';
            }

            elems = document.getElementsByClassName('class-card-div');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.backgroundColor = '#000';
            }

            elems = document.getElementsByClassName('share-menu-line-3');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.backgroundColor = '#000';
            }

            elems = document.getElementsByClassName('share-menu-line-2-c');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.backgroundColor = '#000';
            }

            elems = document.getElementsByClassName('share-menu-line-3-a');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.color = '#fff';
            }

            elems = document.getElementsByClassName('fa-chevron-up');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.color = '#fff';
            }

            elems = document.getElementsByClassName('general-text-line-1');
            for (i = 0; i < elems.length; i++) {
                elems[i].style.color = '#fff';
            }
        }
    }

    function spendBarPlus() {
        firsttime = "1";
        showsummary = "1";
        window.localStorage.setItem("selfredeem", "");

        document.getElementById("main-title-p").innerHTML = "Welcome, " + window.localStorage.getItem("firstname");
        document.getElementById("profile-number-p").innerHTML = ""//window.localStorage.getItem("customer");
        document.getElementById("my-voucher-count").innerHTML = "I have " + window.localStorage.getItem("vouchercount") + " Rewards in my Wallet";
        document.getElementById("my-voucher-expiry").innerHTML = "My next " + window.localStorage.getItem("expirycount") + " Rewards expires in " + window.localStorage.getItem("expirydays") + " days";


        hideSpin();
    }

    function disableTabstrip() {
        // var tabStrip = $("#mainTab").kendoTabStrip().data("kendoTabStrip");
        // tabStrip.enable(tabStrip.tabGroup.children().eq(5), false);
        //var tabstrip = app.view().footer.find(".km-tabstrip").data("kendoMobileTabStrip");
        //  tabstrip.clear();
    }

    function spendBar() {
        firsttime = "1";
        showsummary = "1";

        if (window.localStorage.getItem("fbid") != "99") {
            document.getElementById("fblink-show").style.display = "none";
        }

        window.localStorage.setItem("selfredeem", "");
        document.getElementById("main-title").innerHTML = "Hello, " + window.localStorage.getItem("firstname");
        document.getElementById("profile-name").innerHTML = window.localStorage.getItem("customername");
        document.getElementById("profile-number").innerHTML = window.localStorage.getItem("customer");
        document.getElementById("profile-init").innerHTML = "Total Spend YTD:" + window.localStorage.getItem("spendmb");
        if (window.localStorage.getItem("segmentcode") === "1003") {
            document.getElementById("profile-type").innerHTML = "isme ";
            document.getElementsById("pl-home-view-plus").style.backgroundColor = "#fff";
            document.getElementsByClassName("strip-item-a").style.backgroundColor = "#fff";
            document.getElementsByClassName("strip-item-a").style.color = "#000";
        } else {
            document.getElementById("profile-type").innerHTML = "SNTTA Elite";
        }
        //Generate Spend Bar        

        var i = ((parseInt(window.localStorage.getItem("spendn")) / 1000) / parseInt(window.localStorage.getItem("maxspend"))) * 100
        if (i >= 80) {
            y = 83;
        } else if (i >= 17) {
            y = i;
        } else {
            y = 17;
        }

        document.getElementById("spend-amount").style.marginLeft = ((parseInt(window.localStorage.getItem("spend")) * 2) - 10) + "%";
        document.getElementById("spend-amount").style.width = "18%";
        if (i >= 100) {
            document.getElementById("spend-amount").style.margin = "auto auto auto 78%";
            document.getElementById("spend-bar").style.width = '100%';
            document.getElementById("spend-amount").innerHTML = window.localStorage.getItem("currency") + " " + window.localStorage.getItem("maxspend") + "K+";
        } else {
            document.getElementById("spend-amount").style.width = (parseInt(window.localStorage.getItem("spend")) * 2) - ((parseInt(window.localStorage.getItem("spend")) * 2) - 17) + "%";
            document.getElementById("spend-bar").style.width = i + "%";
            if (i > 80) {
                document.getElementById("spend-amount").innerHTML = "<div style='width:15%;float:right;text-align:right;margin-right:2%'>" + window.localStorage.getItem("maxspend") + "K" + "</div>";
            } else {
                //document.getElementById("spend-amount").innerHTML = window.localStorage.getItem("currency") + " " + window.localStorage.getItem("spend") + "K" + "<div style='width:15%;float:right;text-align:right;margin-right:10%'>" + window.localStorage.getItem("maxspend") + "K" + "</div>" ;
                document.getElementById("spend-amount").innerHTML = window.localStorage.getItem("currency") + " " + window.localStorage.getItem("spend") + "K";
            }
        }
        hideSpin();
    }

    function prefiltercheck(e) {
        if (window.localStorage.getItem("outlet") == "") {
            window.localStorage.setItem("brand", e.view.params.brand);
            window.localStorage.setItem("category", e.view.params.category);
            window.localStorage.setItem("distance", "");
            window.localStorage.setItem("cuisine", "");
            window.localStorage.setItem("restaurant", "");
        }
    }

    function cleanoutletfilter() {
        window.localStorage.setItem("distance", "");
        window.localStorage.setItem("cuisine", "");
        window.localStorage.setItem("restaurant", "");
    };
}
)(window);