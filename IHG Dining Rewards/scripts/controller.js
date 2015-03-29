(function (global) {
    var firsttime = "";
    var mdevice = "";
    var muuid = "";
    var mversion = "";
    var mdevicestat = "";
    var ctr = 0;
    var gurl = "http://exclusiveu.dynns.com:8088/mobilePortal";
    var merchant = "INTER09705";
    var customer = "9999999999";
    var customername = "Guest";
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
    var getgps = false;//First time to look for location, do not look when the page is reloaded
    var gpsfind = "1";//Auto location enabled
    var lat, lon;
   
    var outletcode = "";
    var brandcode = "";
    var benefitcode = "";
    var isMapInitialized = false;
    var m = [];  
    var shareCustomer, shareProductCode, shareProductType;
    var offertype = "1"; //prelogin ofer
    var offercode = ""; //All Offers default
    var couponnumber = "";
    var newimage = "";
    var rc = "";
    var rn = "";
    var cn = "";
    var sr = "";
    var social_subject = "IHG Dining Rewards";
    var share_image = "http://exclusiveu.dynns.com:8088/mobileportal/images/ihg_logo.png";
    var share_contact = "Phone: +971 427 66 186 \nEmail: inquiry@ihg.com";
    var short_msg = "Check out the IHG Dining Rewards at ";
    var pushSettings = {
        iOS: {
            badge: "1",
            sound: "default",
            alert: "true",
            clearBadge: "true"
        },
        android: {
            senderID: googleApiProjectNumber
        },
        wp8: {
            channelName: 'EverlivePushChannel'
        },
        notificationCallbackIOS: function(args) {
        },
        notificationCallbackAndroid: function(args) {
        },
        notificationCallbackWP8: function(args) {
        },
        customParameters: {
            Memberid: customer,
            Merchant:merchant,
            Segment:segmentcode
        }
    };
    
    window.sharingSocialView = kendo.observable({
                                                    social_subject:"",
                                                    social_message:"",
                                                    social_image:share_image,
                                                    social_header:"",
                                                    social_shortmsg:short_msg,
                                                    offersocialDestroyView:function() {
                                                        $("#pl-modalview-offersocial").remove();  
                                                    },
        
                                                    offersocialDestroyViewA:function() {
                                                        $("#modalview-offersocial").remove();  
                                                    },
       
                                                 
                                                    socialsharingFacebook: function () {
                                                        showSpin();
                                                       
                                                        window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(sharingSocialView.social_header + "\n" + sharingSocialView.social_message + "\n" + share_contact , null, "http://www.ihgdiningrewards.com", "Share with your friends if you like!", function () {
                                                        }, function (errormsg) {
                                                            alert(errormsg)
                                                        })
                                                        hideSpin();
                                                    },

                                                    socialsharingTwitter:  function () {
                                                        showSpin();
                                                          
                                                        window.plugins.socialsharing.shareViaTwitter(sharingSocialView.social_shortmsg, sharingSocialView.social_image, "http://www.ihgdiningrewards.com")
                                                        hideSpin();
                                                    },

                                                    socialsharingWhatsApp: function () {
                                                        showSpin();
                                                      
                                                        window.plugins.socialsharing.shareViaWhatsApp(sharingSocialView.social_shortmsg, null, "http://www.ihgdiningrewards.com", function () {
                                                        }, function (errormsg) {
                                                            alert(errormsg)
                                                        })
                                                        hideSpin();
                                                    },

                                                    socialsharingSMS: function () {
                                                        showSpin();
                                                         
                                                        window.plugins.socialsharing.shareViaSMS(sharingSocialView.social_shortmsg + "http://www.ihgdiningrewards.com", null, function (msg) {
                                                        }, function (msg) {
                                                            alert('Error: ' + msg)
                                                        })
                                                        hideSpin();
                                                    },

                                                    socialsharingEmail:  function () {
                                                        showSpin();
                                                        window.plugins.socialsharing.shareViaEmail(
                                                            sharingSocialView.social_header + "\n\n" + sharingSocialView.social_message + "\n\n" + share_contact, // can contain HTML tags, but support on Android is rather limited:  http://stackoverflow.com/questions/15136480/how-to-send-html-content-with-image-through-android-default-email-client
                                                            sharingSocialView.social_shortmsg, null, null, null, // TO: must be null or an array
                                                            [sharingSocialView.social_image], // FILES: can be null, a string, or an array
                                                            function (msg) {
                                                            }, // called when sharing worked, but also when the user cancelled sharing via email (I've found no way to detect the difference)
                                                            function (msg) {
                                                                alert('Error: ' + msg)
                                                            } // called when sh*t hits the fan
                                                            );
                                                        hideSpin();
                                                    }
                                                });   
    
    window.preLogin = kendo.observable({ 
                                           outlettelephone:"",
            destroyOfferListView:function() {
                                                  $("#offerlist-view").remove();  
                                              },
                                           outletdetailthemedestroyView: function() {
                                               $("#outletdetail-theme").remove();
                                               isMapInitialized = false;
                                           },
        
                                           outletlistnearmethemedestroyView: function() {
                                               $("#outletlistnearme-theme").remove();
                                           },
                                           outletlistthemedestroyView: function() {
                                               $("#outletlist-theme").remove();
                                           },
        
                                           destroyCustomerService:function() {
                                               $("#customerservice-theme").remove();  
                                           },
                                           destroyTermsofService:function() {
                                               $("#termsofservice-theme").remove();  
                                           },
                                           destroyJoin:function() {
                                               $("#join-theme").remove();  
                                           },
                                           destroyBrandPage:function() {
                                               $("#brandpage-theme").remove();  
                                           },
                                           destroyBenefitDetail:function() {
                                               $("#benefit-detail").remove();  
                                           },
                                                                                    
                                      
                                           benefitdetail: function () { 
                                               benefitcode = "1000"; //Gold Elite Segment
                                               showSpin(); //show loading popup
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/benefitlist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,benefitcode:benefitcode,mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                              if (getData.statuscode == "000") {
                                                                  //fill the outlet template
                                                                  if (getData.benefitlist.length > 0) {
                                                                      document.getElementById("benefit-title-1").innerHTML = getData.benefitlist[0].titlename;
                                                                      document.getElementById("benefit-text3").innerHTML = "<pre>" + getData.benefitlist[0].longdes1 + ' ' + getData.benefitlist[0].longdes2 + "</pre>";
                                                                      sharingSocialView.set("social_subject", getData.benefitlist[0].shortdes1);
                                                                      sharingSocialView.set("social_message", getData.benefitlist[0].shortdes2);
                                                                      sharingSocialView.set("social_header", getData.benefitlist[0].shortdes1 + "\n");
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("No Benefits exists for the selected Program!")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Unknown Network Error, Cannot get Benefit details!" + getData.statusdesc)          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (error) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Benefit details!.   Try after sometime")
                                                              hideSpin(); //hide loading popup                                          
                                                          }
                                                      });
                                           },
        
                                           showAllOutlet: function () {
                                               outletcode = "";
                                               brandcode = "";
                                               showSpin();
                                                
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/outletlist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,brandcode:brandcode,mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);
                                                            
                                                              if (getData.statuscode == "000") {
                                                                  if (getData.outletlist.length > 0) {
                                                                      //fill the outlet template
                                                                      $("#outletlist-all").kendoMobileListView({
                                                                             
                                                                                                                   dataSource: kendo.data.DataSource.create({data: getData.outletlist}),
                                                                                                                   template: $("#outletListAllTemplate").html(),
                                                                          
                                                                                                                   filterable: {
                                                                              autoFilter: true,
                                                                              placeholder:"Search By Restaurant Name",                                         
                                                                              field: "outletname",
                                                                              operator: "contains"
                                                                          }
                                                                                                                    
                                                                                                               });
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("No outlet exists for the selected property!")    
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Unknown Network Error, Cannot get outlet List!" + getData.statusdesc)          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Outlet List!.  Try after sometime")
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
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,                                                      
                                                          url: gurl + "/outletlist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,brandcode:brandcode,outletcode:outletcode,mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
                                                              var getData = JSON.parse(data);

                                                              if (getData.statuscode == "000") {
                                                                  m = getData.outletlist[0].geolocation.split(",");  
                                                                                                                                                                                                                                   
                                                                  lat = m[0];
                                                                  lon = m[1];
                                                                  document.getElementById("outlet-image-large").style.background = "url(" + getData.outletlist[0].imageurll + ") no-repeat center center";
                                                                  document.getElementById("outlet-image-large").style.backgroundSize = "cover";
                                                                  document.getElementById("outlet-theme-title").innerHTML = getData.outletlist[0].outletname;
                                                                  document.getElementById("ooutlet-short").innerHTML = getData.outletlist[0].outletshort;
                                                                  document.getElementById("ooutlet-long").innerHTML = "<pre>" + getData.outletlist[0].outletlong + "</pre>";
                                                                  // document.getElementById("outlet-review").innerHTML = getData.outletlist[0].reviewcount + " Review(s)";
                                                                  // document.getElementById("outlet-star").innerHTML = getData.outletlist[0].staraverage + " Star(s)";
                                             
                                                                  sharingSocialView.set("social_shortmsg", "Checkout the offer at IHG Dining Rewards - " + getData.outletlist[0].outletname + "  \n");
                                                                  sharingSocialView.set("social_header", getData.outletlist[0].outletname);
                                                                                
                                                                  sharingSocialView.set("social_subject", getData.outletlist[0].outletshort);
                                                                  sharingSocialView.set("social_message", getData.outletlist[0].outletlong);
                                                                  sharingSocialView.set("social_image", share_image); 
                                                                     
                                                                  preLogin.set("outlettelephone", getData.outletlist[0].telephone);
                                                                     
                                                                  shareCustomer = customer;
                                                                  shareProductCode = getData.outletlist[0].outletcode;
                                                                  shareProductType = "1"; //outlet review
                                                                  hideSpin(); //hide loading popup
                                                              }else {
                                                                  navigator.notification.alert("Unknown Network Error, Cannot get outlet List!" + getData.statusdesc)          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (error) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Outlet List!.  Try after sometime")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },
        
        
                                           showOutletAlbum
                                           : function () {
                                               showSpin();
                                                  
                                               $.ajax({ 
                                                          type: "POST",
                                                          cache:false,
                                                          async:true,
                                                          timeout:20000,
                                                          url: gurl + "/outletphotolist.aspx",
                                                          contentType: "application/json; charset=utf-8",
                                                          data: JSON.stringify({
                                                                                   merchantcode :merchant,outletcode:outletcode,mdevice:mdevicestat
                                                                               }),
                                                          success: function (data) { 
 
                                                              var getData = JSON.parse(data);
                                                              if (getData.statuscode == "000") {
                                                                  if (getData.outletphotoalbum.length > 0) {
                                                                      //fill the outlet album
                                                                      $("#pl-outlet-album").kendoMobileListView({
                                                                                                                    dataSource: kendo.data.DataSource.create({data: getData.outletphotoalbum}),
                                                                                                                    template: $("#pl-outletAlbumTemplate").html()
                                                                                                                });
                                                                      hideSpin(); //hide loading popup
                                                                  }else {
                                                                      navigator.notification.alert("Album Empty for the selected outlet!")                  
                                                                      hideSpin(); //hide loading popup
                                                                  }
                                                              }else {
                                                                  navigator.notification.alert("Unknown Network Error, Cannot get Outlet Album List!" + getData.statusdesc)          
                                                                  hideSpin(); //hide loading popup
                                                              }
                                                          },
                                                          error: function (errormsg) {
                                                              navigator.notification.alert("Unknown Error, Cannot get Outlet Album List!. Try after sometime")
                                                              hideSpin(); //hide loading popup
                                                          }
                                                      });
                                           },
        
        
        
                                           getLocationO: function() {
                                               showSpin(); //show loading popup
                                               if (!isMapInitialized) {
                                                   navigator.geolocation.getCurrentPosition(function onSuccessShowMap(position) {
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
                                                       console.log(marker);
                                                       console.log("map rendering");
                                                   }
                                                                                            , function onErrorShowMap(error) {
                                                                                                if (err.code == "1") {
                                                                                                    navigator.notification.alert("Your Device has disabled GPS access for the app, please enable the GPS on the Settings. Switching to last Location!");  
                                                                                                } else if (err.code == "2") {
                                                                                                    navigator.notification.alert("Device is unable to get the GPS position");  
                                                                                                }
                                                                                            }
                                                       );
                                                   isMapInitialized = true;
                                               }
                                               hideSpin(); //hide loading popup
                                           },
        
                offerlist: function () {
                                                  offercode = "";
                                                  offertype = "1";
                                                  showSpin();
                                                
                                                  $.ajax({ 
                                                             type: "POST",
                                                             cache:false,
                                                             async:true,
                                                             timeout:20000,
                                                             url: gurl + "/offerList.aspx",
                                                             contentType: "application/json; charset=utf-8",
                                                             data: JSON.stringify({
                                                                                      merchantcode :merchant,offercode:offercode,offertype:offertype,segmentcode:segmentcode,mdevice:mdevicestat
                                                                                  }),
                                                             success: function (data) { 
                                                                 var getData = JSON.parse(data);
                                                                 if (getData.statuscode == "000") {
                                                                     if (getData.offerlist.length > 0) {
                                                                         //fill the outlet template
                                                                         $("#offer-list-view").kendoMobileListView({
                                                                                                                          dataSource: kendo.data.DataSource.create({data: getData.offerlist}),
                                                                                                                   template: $("#offerListTemplate").html(),
                                                                          
                                                                                                                   filterable: {
                                                                              autoFilter: true,
                                                                              placeholder:"Search By Offer Name",                                         
                                                                              field: "itemname",
                                                                              operator: "contains"
                                                                          }
                                                                                                                    
                                                                                                               });
                                                                         hideSpin(); //hide loading popup
                                                                     }else {
                                                                         navigator.notification.alert("No Offers exists for the selected Hotel!")    
                                                                         hideSpin(); //hide loading popup
                                                                     }
                                                                 }else {
                                                                     navigator.notification.alert("Unknown Network Error, Cannot get Offer List!" + getData.statusdesc)          
                                                                     hideSpin(); //hide loading popup
                                                                 }
                                                             },
                                                             error: function (errormsg) {
                                                                 navigator.notification.alert("Unknown Error, Cannot get Offer List!.   Try after sometime")
                                                                 hideSpin(); //hide loading popup
                                                             }
                                                         });
                                              },

        
        
                                           getTermsofService: function () {  
                                               window.open("http://www.ihg.com/hotels/gb/en/global/customer_care/member-tc#diningrewards", "_blank", "location=yes");
                                           },
        
                                           getCustomerService: function () {  
                                               window.open("https://www.ihg.com/hotels/gb/en/customer-care/", "_blank", "location=yes");
                                           },
                                           callTel:  function () {
                                               window.open("tel:" + preLogin.outlettelephone);
                                           },
                                           shareOutlet:  function () {
                                               alert("eee");
                                               showSpin();
                                               $("body").data().kendoMobilePane.navigate("views/socialshare.html");  
                                               hideSpin();
                                           }
        
                                       });
    
    function hideSpin() {
        setTimeout(function() {
            window.plugins.spinnerDialog.hide();
        }, 2000);  //hide Loading Popup
    }
      
    function showSpin() {
        if (!checkConnectionBool()) {
            $("body").data().kendoMobilePane.navigate("views/nonetwork.html");  
        } else {
            window.plugins.spinnerDialog.show(null, null, true); //show loading popup
        }
    }
    
    function writeSpin() {
        if (!checkConnectionBool()) {
            $("body").data().kendoMobilePane.navigate("views/nonetwork.html");  
        } else {
            window.plugins.spinnerDialog.show(null, null, true); //show loading popup
        }
    }
    
    function checkConnectionBool () {
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
            navigator.notification.alert(states[networkState]);                     
            return false;
        } else {
            return true;
        }
    }
})(window);