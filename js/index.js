
function gettingJSON()
{
    // document.write("jquery loaded");

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Hosur,TN,356&units=metric&APPID=8c2f3944cd016e3943efdcf69c7c7e26",function(json){

        // $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=12.74&lon=77.82&units=metric&APPID=8c2f3944cd016e3943efdcf69c7c7e26",function(json){


        var data = json;

        // console.log(document.getElementById('temp_data').innerHTML);
        // console.log(data);
        // console.log(data["main"]["temp_max"]);
        // console.log(data["main"]["temp_min"]);


        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        const d = new Date();
        let day = d.getDay();
        // console.log(days[day]);

        var tomorrow = 0;

        if(day == 6)
        {
            tomorrow = 0;
        }
        else
        {
            tomorrow = day + 1;
        }
        // console.log(day + "-" + tomorrow);


        var output1 = days[day]+"&nbsp;&nbsp;"+ Math.round(data["main"]["temp"])+"\xB0C";
        document.getElementById('temp_data').innerHTML = output1;

        // var output2 = days[tomorrow]+"&nbsp;&nbsp;"+ Math.round(data["main"]["temp"])+"\xB0C";
        // document.getElementById('temp_data').innerHTML = output1+"&emsp; &emsp;"+output2;


    });

}



function nav_active(page_name)
{
    if(page_name == 'home')
    {
        // alert("Home page");

        document.getElementById("nav1").classList.remove('active_nav_link');
        document.getElementById("nav2").classList.remove('active_nav_link');
        document.getElementById("navbarDropdown").classList.remove('active_nav_link');
        document.getElementById("nav4").classList.remove('active_nav_link');
        document.getElementById("nav5").classList.remove('active_nav_link');
        document.getElementById("nav6").classList.remove('active_nav_link');


        document.getElementById("footer1").classList.remove('active_nav_link');
        document.getElementById("footer2").classList.remove('active_nav_link');
        document.getElementById("footer3").classList.remove('active_nav_link');
        document.getElementById("footer4").classList.remove('active_nav_link');
        document.getElementById("footer5").classList.remove('active_nav_link');
        document.getElementById("footer6").classList.remove('active_nav_link');



        document.getElementById("nav1").classList.add('active_nav_link');
        document.getElementById("footer1").classList.add('active_nav_link');
    }
    else if(page_name == 'about_us')
    {
        // alert("About Us");

        document.getElementById("nav1").classList.remove('active_nav_link');
        document.getElementById("nav2").classList.remove('active_nav_link');
        document.getElementById("navbarDropdown").classList.remove('active_nav_link');
        document.getElementById("nav4").classList.remove('active_nav_link');
        document.getElementById("nav5").classList.remove('active_nav_link');
        document.getElementById("nav6").classList.remove('active_nav_link');


        document.getElementById("footer1").classList.remove('active_nav_link');
        document.getElementById("footer2").classList.remove('active_nav_link');
        document.getElementById("footer3").classList.remove('active_nav_link');
        document.getElementById("footer4").classList.remove('active_nav_link');
        document.getElementById("footer5").classList.remove('active_nav_link');
        document.getElementById("footer6").classList.remove('active_nav_link');



        document.getElementById("nav2").classList.add('active_nav_link');
        document.getElementById("footer2").classList.add('active_nav_link');
        
    }
    else if(page_name == 'rooms')
    {
        // alert("About Us");

        document.getElementById("nav1").classList.remove('active_nav_link');
        document.getElementById("nav2").classList.remove('active_nav_link');
        document.getElementById("navbarDropdown").classList.remove('active_nav_link');
        document.getElementById("nav4").classList.remove('active_nav_link');
        document.getElementById("nav5").classList.remove('active_nav_link');
        document.getElementById("nav6").classList.remove('active_nav_link');


        document.getElementById("footer1").classList.remove('active_nav_link');
        document.getElementById("footer2").classList.remove('active_nav_link');
        document.getElementById("footer3").classList.remove('active_nav_link');
        document.getElementById("footer4").classList.remove('active_nav_link');
        document.getElementById("footer5").classList.remove('active_nav_link');
        document.getElementById("footer6").classList.remove('active_nav_link');



        document.getElementById("navbarDropdown").classList.add('active_nav_link');
        document.getElementById("footer3").classList.add('active_nav_link');
        
    }
    else if(page_name == 'restaurant')
    {
        // alert("About Us");

        document.getElementById("nav1").classList.remove('active_nav_link');
        document.getElementById("nav2").classList.remove('active_nav_link');
        document.getElementById("navbarDropdown").classList.remove('active_nav_link');
        document.getElementById("nav4").classList.remove('active_nav_link');
        document.getElementById("nav5").classList.remove('active_nav_link');
        document.getElementById("nav6").classList.remove('active_nav_link');


        document.getElementById("footer1").classList.remove('active_nav_link');
        document.getElementById("footer2").classList.remove('active_nav_link');
        document.getElementById("footer3").classList.remove('active_nav_link');
        document.getElementById("footer4").classList.remove('active_nav_link');
        document.getElementById("footer5").classList.remove('active_nav_link');
        document.getElementById("footer6").classList.remove('active_nav_link');



        document.getElementById("nav4").classList.add('active_nav_link');
        document.getElementById("footer4").classList.add('active_nav_link');
        
    }
    else if(page_name == 'gallery')
    {
        // alert("About Us");

        document.getElementById("nav1").classList.remove('active_nav_link');
        document.getElementById("nav2").classList.remove('active_nav_link');
        document.getElementById("navbarDropdown").classList.remove('active_nav_link');
        document.getElementById("nav4").classList.remove('active_nav_link');
        document.getElementById("nav5").classList.remove('active_nav_link');
        document.getElementById("nav6").classList.remove('active_nav_link');


        document.getElementById("footer1").classList.remove('active_nav_link');
        document.getElementById("footer2").classList.remove('active_nav_link');
        document.getElementById("footer3").classList.remove('active_nav_link');
        document.getElementById("footer4").classList.remove('active_nav_link');
        document.getElementById("footer5").classList.remove('active_nav_link');
        document.getElementById("footer6").classList.remove('active_nav_link');



        document.getElementById("nav5").classList.add('active_nav_link');
        document.getElementById("footer5").classList.add('active_nav_link');
        
    }
    else if(page_name == 'contact_us')
    {
        // alert("About Us");

        document.getElementById("nav1").classList.remove('active_nav_link');
        document.getElementById("nav2").classList.remove('active_nav_link');
        document.getElementById("navbarDropdown").classList.remove('active_nav_link');
        document.getElementById("nav4").classList.remove('active_nav_link');
        document.getElementById("nav5").classList.remove('active_nav_link');
        document.getElementById("nav6").classList.remove('active_nav_link');


        document.getElementById("footer1").classList.remove('active_nav_link');
        document.getElementById("footer2").classList.remove('active_nav_link');
        document.getElementById("footer3").classList.remove('active_nav_link');
        document.getElementById("footer4").classList.remove('active_nav_link');
        document.getElementById("footer5").classList.remove('active_nav_link');
        document.getElementById("footer6").classList.remove('active_nav_link');



        document.getElementById("nav6").classList.add('active_nav_link');
        document.getElementById("footer6").classList.add('active_nav_link');
        
    }
}


function tabs_toggle(type)
{   
    document.getElementById("standard").hidden = true;
    // document.getElementById("balcony").hidden = true;
    document.getElementById("deluxe").hidden = true;
    document.getElementById("superior").hidden = true;
    document.getElementById("grand_superior").hidden = true;

    document.getElementById("standard_caret").hidden = true;
    // document.getElementById("balcony_caret").hidden = true;
    document.getElementById("deluxe_caret").hidden = true;
    document.getElementById("superior_caret").hidden = true;
    document.getElementById("grand_superior_caret").hidden = true;

    document.getElementById("standard_caret_1").hidden = true;
    // document.getElementById("balcony_caret_1").hidden = true;
    document.getElementById("deluxe_caret_1").hidden = true;
    document.getElementById("superior_caret_1").hidden = true;
    document.getElementById("grand_superior_caret_1").hidden = true;
    // background-image: linear-gradient(#6560b4, #9089e4);
    // var c = "black";
    // var d = "#212529";

    // var a =  'linear-gradient(to right, #6560b4, #9089e4)';
    // var b = "white";

    // document.getElementById("customer_btn").style.backgroundColor = '';
    // document.getElementById("customer_btn").style.color = b;
    // document.getElementById("customer_btn").style.backgroundImage  = a;
    // document.getElementById("invoice_btn").style.backgroundColor = '';
    // document.getElementById("invoice_btn").style.color = b;
    // document.getElementById("invoice_btn").style.backgroundImage  = a;
    // document.getElementById("quotes_btn").style.backgroundColor = '';
    // document.getElementById("quotes_btn").style.color = b;
    // document.getElementById("quotes_btn").style.backgroundImage  = a;
    // document.getElementById("dc_btn").style.backgroundColor = '';
    // document.getElementById("dc_btn").style.color = b;
    // document.getElementById("dc_btn").style.backgroundImage  = a;

    if(type == 'standard')
    {
        // document.getElementById("customer").hidden = false;
        // document.getElementById("invoice").hidden = true;
        // document.getElementById("quotation").hidden = true;
        // document.getElementById("dc").hidden = true;

        // document.getElementById("customer_btn").style.backgroundColor = b;
        // document.getElementById("customer_btn").style.backgroundImage  = '';
        // document.getElementById("customer_btn").style.color = c;   

        document.getElementById("standard").hidden = false;
        document.getElementById("standard_caret").hidden = false;
        document.getElementById("standard_caret_1").hidden = false;
    }
    // else if(type == 'balcony')
    // {
    //     // document.getElementById("customer").hidden = false;
    //     // document.getElementById("invoice").hidden = true;
    //     // document.getElementById("quotation").hidden = true;
    //     // document.getElementById("dc").hidden = true;

    //     // document.getElementById("customer_btn").style.backgroundColor = b;
    //     // document.getElementById("customer_btn").style.backgroundImage  = '';
    //     // document.getElementById("customer_btn").style.color = c;   

    //     document.getElementById("balcony").hidden = false;
    //     document.getElementById("balcony_caret").hidden = false;
    //     document.getElementById("balcony_caret_1").hidden = false;
    
    // }
    else if(type == 'deluxe')
    {
        // document.getElementById("customer").hidden = false;
        // document.getElementById("invoice").hidden = true;
        // document.getElementById("quotation").hidden = true;
        // document.getElementById("dc").hidden = true;

        // document.getElementById("customer_btn").style.backgroundColor = b;
        // document.getElementById("customer_btn").style.backgroundImage  = '';
        // document.getElementById("customer_btn").style.color = c;   

        document.getElementById("deluxe").hidden = false;
        document.getElementById("deluxe_caret").hidden = false;
        document.getElementById("deluxe_caret_1").hidden = false;
    
    }
    else if(type == 'superior')
    {
        // document.getElementById("customer").hidden = false;
        // document.getElementById("invoice").hidden = true;
        // document.getElementById("quotation").hidden = true;
        // document.getElementById("dc").hidden = true;

        // document.getElementById("customer_btn").style.backgroundColor = b;
        // document.getElementById("customer_btn").style.backgroundImage  = '';
        // document.getElementById("customer_btn").style.color = c;   

        document.getElementById("superior").hidden = false;
        document.getElementById("superior_caret").hidden = false;
        document.getElementById("superior_caret_1").hidden = false;
    
    }
    else if(type == 'grand_superior')
    {
        // document.getElementById("customer").hidden = false;
        // document.getElementById("invoice").hidden = true;
        // document.getElementById("quotation").hidden = true;
        // document.getElementById("dc").hidden = true;

        // document.getElementById("customer_btn").style.backgroundColor = b;
        // document.getElementById("customer_btn").style.backgroundImage  = '';
        // document.getElementById("customer_btn").style.color = c;   

        document.getElementById("grand_superior").hidden = false;
        document.getElementById("grand_superior_caret").hidden = false;
        document.getElementById("grand_superior_caret_1").hidden = false;
    }

}

$(document).ready(function() {
    standard_currentSlide(1);
    // balcony_currentSlide(1);
    deluxe_currentSlide(1);
    superior_currentSlide(1);
    grand_superior_currentSlide(1);

    $('#standard_carousal').on('slid.bs.carousel', function (e) {
        // $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
        // alert("hey there")
        var currentIndex = $('#standard_carousal div.active').index() + 1;
        standard_currentSlide(currentIndex);
    });

    // $('#balcony_carousal').on('slid.bs.carousel', function (e) {
    //     // $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
    //     // alert("hey there")
    //     var currentIndex = $('#balcony_carousal div.active').index() + 1;
    //     balcony_currentSlide(currentIndex);
    // });

    $('#deluxe_carousal').on('slid.bs.carousel', function (e) {
        // $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
        // alert("hey there")
        var currentIndex = $('#deluxe_carousal div.active').index() + 1;
        deluxe_currentSlide(currentIndex);
    });

    $('#superior_carousal').on('slid.bs.carousel', function (e) {
        // $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
        // alert("hey there")
        var currentIndex = $('#superior_carousal div.active').index() + 1;
        superior_currentSlide(currentIndex);
    });

    $('#grand_superior_carousal').on('slid.bs.carousel', function (e) {
        // $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
        // alert("hey there")
        var currentIndex = $('#grand_superior_carousal div.active').index() + 1;
        grand_superior_currentSlide(currentIndex);
    });

});



function standard_currentSlide(n)
{   
    document.getElementById("standard_thumb_1").classList.remove("opacity_control");
    document.getElementById("standard_thumb_2").classList.remove("opacity_control");
    document.getElementById("standard_thumb_3").classList.remove("opacity_control");
    document.getElementById("standard_thumb_4").classList.remove("opacity_control");

    document.getElementById("standard_1_thumb_1").classList.remove("opacity_control");
    document.getElementById("standard_1_thumb_2").classList.remove("opacity_control");
    document.getElementById("standard_1_thumb_3").classList.remove("opacity_control");
    document.getElementById("standard_1_thumb_4").classList.remove("opacity_control");

    if(n == 1)
    {
        document.getElementById("standard_thumb_2").classList.add("opacity_control");
        document.getElementById("standard_thumb_3").classList.add("opacity_control");
        document.getElementById("standard_thumb_4").classList.add("opacity_control");

        document.getElementById("standard_1_thumb_2").classList.add("opacity_control");
        document.getElementById("standard_1_thumb_3").classList.add("opacity_control");
        document.getElementById("standard_1_thumb_4").classList.add("opacity_control");
    }
    else if(n == 2)
    {
        document.getElementById("standard_thumb_1").classList.add("opacity_control");
        document.getElementById("standard_thumb_3").classList.add("opacity_control");
        document.getElementById("standard_thumb_4").classList.add("opacity_control");

        document.getElementById("standard_1_thumb_1").classList.add("opacity_control");
        document.getElementById("standard_1_thumb_3").classList.add("opacity_control");
        document.getElementById("standard_1_thumb_4").classList.add("opacity_control");
    }
    else if(n == 3)
    {
        document.getElementById("standard_thumb_2").classList.add("opacity_control");
        document.getElementById("standard_thumb_1").classList.add("opacity_control");
        document.getElementById("standard_thumb_4").classList.add("opacity_control");

        document.getElementById("standard_1_thumb_2").classList.add("opacity_control");
        document.getElementById("standard_1_thumb_1").classList.add("opacity_control");
        document.getElementById("standard_1_thumb_4").classList.add("opacity_control");
    }
    else if(n == 4)
    {
        document.getElementById("standard_thumb_2").classList.add("opacity_control");
        document.getElementById("standard_thumb_3").classList.add("opacity_control");
        document.getElementById("standard_thumb_1").classList.add("opacity_control");

        document.getElementById("standard_1_thumb_2").classList.add("opacity_control");
        document.getElementById("standard_1_thumb_3").classList.add("opacity_control");
        document.getElementById("standard_1_thumb_1").classList.add("opacity_control");
    }
    
}   


// function balcony_currentSlide(n)
// {   
//     document.getElementById("balcony_thumb_1").classList.remove("opacity_control");
//     document.getElementById("balcony_thumb_2").classList.remove("opacity_control");
//     document.getElementById("balcony_thumb_3").classList.remove("opacity_control");
//     document.getElementById("balcony_thumb_4").classList.remove("opacity_control");

//     document.getElementById("balcony_1_thumb_1").classList.remove("opacity_control");
//     document.getElementById("balcony_1_thumb_2").classList.remove("opacity_control");
//     document.getElementById("balcony_1_thumb_3").classList.remove("opacity_control");
//     document.getElementById("balcony_1_thumb_4").classList.remove("opacity_control");

//     if(n == 1)
//     {
//         document.getElementById("balcony_thumb_2").classList.add("opacity_control");
//         document.getElementById("balcony_thumb_3").classList.add("opacity_control");
//         document.getElementById("balcony_thumb_4").classList.add("opacity_control");

//         document.getElementById("balcony_1_thumb_2").classList.add("opacity_control");
//         document.getElementById("balcony_1_thumb_3").classList.add("opacity_control");
//         document.getElementById("balcony_1_thumb_4").classList.add("opacity_control");
//     }
//     else if(n == 2)
//     {
//         document.getElementById("balcony_thumb_1").classList.add("opacity_control");
//         document.getElementById("balcony_thumb_3").classList.add("opacity_control");
//         document.getElementById("balcony_thumb_4").classList.add("opacity_control");

//         document.getElementById("balcony_1_thumb_1").classList.add("opacity_control");
//         document.getElementById("balcony_1_thumb_3").classList.add("opacity_control");
//         document.getElementById("balcony_1_thumb_4").classList.add("opacity_control");
//     }
//     else if(n == 3)
//     {
//         document.getElementById("balcony_thumb_1").classList.add("opacity_control");
//         document.getElementById("balcony_thumb_2").classList.add("opacity_control");
//         document.getElementById("balcony_thumb_4").classList.add("opacity_control");

//         document.getElementById("balcony_1_thumb_1").classList.add("opacity_control");
//         document.getElementById("balcony_1_thumb_2").classList.add("opacity_control");
//         document.getElementById("balcony_1_thumb_4").classList.add("opacity_control");
//     }
//     else if(n == 4)
//     {
//         document.getElementById("balcony_thumb_1").classList.add("opacity_control");
//         document.getElementById("balcony_thumb_2").classList.add("opacity_control");
//         document.getElementById("balcony_thumb_3").classList.add("opacity_control");

//         document.getElementById("balcony_1_thumb_1").classList.add("opacity_control");
//         document.getElementById("balcony_1_thumb_2").classList.add("opacity_control");
//         document.getElementById("balcony_1_thumb_3").classList.add("opacity_control");
//     }
// }   

function deluxe_currentSlide(n)
{   
    document.getElementById("deluxe_thumb_1").classList.remove("opacity_control");
    document.getElementById("deluxe_thumb_2").classList.remove("opacity_control");
    document.getElementById("deluxe_thumb_3").classList.remove("opacity_control");
    document.getElementById("deluxe_thumb_4").classList.remove("opacity_control");

    document.getElementById("deluxe_1_thumb_1").classList.remove("opacity_control");
    document.getElementById("deluxe_1_thumb_2").classList.remove("opacity_control");
    document.getElementById("deluxe_1_thumb_3").classList.remove("opacity_control");
    document.getElementById("deluxe_1_thumb_4").classList.remove("opacity_control");

    if(n == 1)
    {
        document.getElementById("deluxe_thumb_2").classList.add("opacity_control");
        document.getElementById("deluxe_thumb_3").classList.add("opacity_control");
        document.getElementById("deluxe_thumb_4").classList.add("opacity_control");

        document.getElementById("deluxe_1_thumb_2").classList.add("opacity_control");
        document.getElementById("deluxe_1_thumb_3").classList.add("opacity_control");
        document.getElementById("deluxe_1_thumb_4").classList.add("opacity_control");
    }
    else if(n == 2)
    {
        document.getElementById("deluxe_thumb_1").classList.add("opacity_control");
        document.getElementById("deluxe_thumb_3").classList.add("opacity_control");
        document.getElementById("deluxe_thumb_4").classList.add("opacity_control");

        document.getElementById("deluxe_1_thumb_1").classList.add("opacity_control");
        document.getElementById("deluxe_1_thumb_3").classList.add("opacity_control");
        document.getElementById("deluxe_1_thumb_4").classList.add("opacity_control");
    }
    else if(n == 3)
    {
        document.getElementById("deluxe_thumb_1").classList.add("opacity_control");
        document.getElementById("deluxe_thumb_2").classList.add("opacity_control");
        document.getElementById("deluxe_thumb_4").classList.add("opacity_control");

        document.getElementById("deluxe_1_thumb_1").classList.add("opacity_control");
        document.getElementById("deluxe_1_thumb_2").classList.add("opacity_control");
        document.getElementById("deluxe_1_thumb_4").classList.add("opacity_control");
    }
    else if(n == 4)
    {
        document.getElementById("deluxe_thumb_1").classList.add("opacity_control");
        document.getElementById("deluxe_thumb_2").classList.add("opacity_control");
        document.getElementById("deluxe_thumb_3").classList.add("opacity_control");

        document.getElementById("deluxe_1_thumb_1").classList.add("opacity_control");
        document.getElementById("deluxe_1_thumb_2").classList.add("opacity_control");
        document.getElementById("deluxe_1_thumb_3").classList.add("opacity_control");
    }
    
}  

function superior_currentSlide(n)
{   
    document.getElementById("superior_thumb_1").classList.remove("opacity_control");
    document.getElementById("superior_thumb_2").classList.remove("opacity_control");
    document.getElementById("superior_thumb_3").classList.remove("opacity_control");
    document.getElementById("superior_thumb_4").classList.remove("opacity_control");

    document.getElementById("superior_1_thumb_1").classList.remove("opacity_control");
    document.getElementById("superior_1_thumb_2").classList.remove("opacity_control");
    document.getElementById("superior_1_thumb_3").classList.remove("opacity_control");
    document.getElementById("superior_1_thumb_4").classList.remove("opacity_control");

    if(n == 1)
    {
        document.getElementById("superior_thumb_2").classList.add("opacity_control");
        document.getElementById("superior_thumb_3").classList.add("opacity_control");
        document.getElementById("superior_thumb_4").classList.add("opacity_control");

        document.getElementById("superior_1_thumb_2").classList.add("opacity_control");
        document.getElementById("superior_1_thumb_3").classList.add("opacity_control");
        document.getElementById("superior_1_thumb_4").classList.add("opacity_control");
    }
    else if(n == 2)
    {
        document.getElementById("superior_thumb_1").classList.add("opacity_control");
        document.getElementById("superior_thumb_3").classList.add("opacity_control");
        document.getElementById("superior_thumb_4").classList.add("opacity_control");

        document.getElementById("superior_1_thumb_1").classList.add("opacity_control");
        document.getElementById("superior_1_thumb_3").classList.add("opacity_control");
        document.getElementById("superior_1_thumb_4").classList.add("opacity_control");
    }
    else if(n == 3)
    {
        document.getElementById("superior_thumb_1").classList.add("opacity_control");
        document.getElementById("superior_thumb_2").classList.add("opacity_control");
        document.getElementById("superior_thumb_4").classList.add("opacity_control");

        document.getElementById("superior_1_thumb_1").classList.add("opacity_control");
        document.getElementById("superior_1_thumb_2").classList.add("opacity_control");
        document.getElementById("superior_1_thumb_4").classList.add("opacity_control");
    }
    else if(n == 4)
    {
        document.getElementById("superior_thumb_1").classList.add("opacity_control");
        document.getElementById("superior_thumb_2").classList.add("opacity_control");
        document.getElementById("superior_thumb_3").classList.add("opacity_control");

        document.getElementById("superior_1_thumb_1").classList.add("opacity_control");
        document.getElementById("superior_1_thumb_2").classList.add("opacity_control");
        document.getElementById("superior_1_thumb_3").classList.add("opacity_control");
    }
    
}  

function grand_superior_currentSlide(n)
{   
    document.getElementById("grand_superior_thumb_1").classList.remove("opacity_control");
    document.getElementById("grand_superior_thumb_2").classList.remove("opacity_control");
    document.getElementById("grand_superior_thumb_3").classList.remove("opacity_control");
    document.getElementById("grand_superior_thumb_4").classList.remove("opacity_control");

    document.getElementById("grand_superior_1_thumb_1").classList.remove("opacity_control");
    document.getElementById("grand_superior_1_thumb_2").classList.remove("opacity_control");
    document.getElementById("grand_superior_1_thumb_3").classList.remove("opacity_control");
    document.getElementById("grand_superior_1_thumb_4").classList.remove("opacity_control");

    if(n == 1)
    {
        document.getElementById("grand_superior_thumb_2").classList.add("opacity_control");
        document.getElementById("grand_superior_thumb_3").classList.add("opacity_control");
        document.getElementById("grand_superior_thumb_4").classList.add("opacity_control");

        document.getElementById("grand_superior_1_thumb_2").classList.add("opacity_control");
        document.getElementById("grand_superior_1_thumb_3").classList.add("opacity_control");
        document.getElementById("grand_superior_1_thumb_4").classList.add("opacity_control");
    }
    else if(n == 2)
    {
        document.getElementById("grand_superior_thumb_1").classList.add("opacity_control");
        document.getElementById("grand_superior_thumb_3").classList.add("opacity_control");
        document.getElementById("grand_superior_thumb_4").classList.add("opacity_control");

        document.getElementById("grand_superior_1_thumb_1").classList.add("opacity_control");
        document.getElementById("grand_superior_1_thumb_3").classList.add("opacity_control");
        document.getElementById("grand_superior_1_thumb_4").classList.add("opacity_control");
    }
    else if(n == 3)
    {
        document.getElementById("grand_superior_thumb_1").classList.add("opacity_control");
        document.getElementById("grand_superior_thumb_2").classList.add("opacity_control");
        document.getElementById("grand_superior_thumb_4").classList.add("opacity_control");

        document.getElementById("grand_superior_1_thumb_1").classList.add("opacity_control");
        document.getElementById("grand_superior_1_thumb_2").classList.add("opacity_control");
        document.getElementById("grand_superior_1_thumb_4").classList.add("opacity_control");
    }
    else if(n == 4)
    {
        document.getElementById("grand_superior_thumb_1").classList.add("opacity_control");
        document.getElementById("grand_superior_thumb_2").classList.add("opacity_control");
        document.getElementById("grand_superior_thumb_3").classList.add("opacity_control");

        document.getElementById("grand_superior_1_thumb_1").classList.add("opacity_control");
        document.getElementById("grand_superior_1_thumb_2").classList.add("opacity_control");
        document.getElementById("grand_superior_1_thumb_3").classList.add("opacity_control");
    }
    
}  


function gallery_view()
{
    $('#gallery_view_modal').modal('show');
}


function gallery_full_render()
{
    var column1 = document.getElementById('col1');
    var column2 = document.getElementById('col2');
    var column3 = document.getElementById('col3');

    var indicator = document.getElementById('carouselExampleIndicators');

    // const images = [
    //     "css/images/temp_1.jpg",
    //     "css/images/temp_2.jpg",
    //     "css/images/temp_3.jpg",
    //     "css/images/temp_4.jpg"
    // ];

    var images = [];

    for (let tu = 1; tu < 74; tu++) 
    {
        // image (1).JPG
        // image(1).JPG
        var name = 'images/Gallery/image('+tu+').JPG';
        images.push(name);
    }

    var col1 ='';
    var col2 ='';
    var col3 ='';

    var indicators = '';

    var carousal_images = '';

    var width = window.innerWidth;


    for (let i = 0; i < images.length; i++)
    {
        // Gallery images
        if(i % 3 == 0)
        {
            if(width < 1200)
            {
                col1 = col1+'<img data-aos="fade-right" data-target="#carouselExampleIndicators" data-slide-to="'+i+'" class="img-fluid" src='+images[i]+'>';
            }
            else
            {
                col1 = col1+'<img data-aos="fade-right" onclick="gallery_view();" data-target="#carouselExampleIndicators" data-slide-to="'+i+'" class="img-fluid" src='+images[i]+'>';
            }
            
        }
        else if(i % 3 == 1)
        {
            if(width < 1200)
            {
                col2 = col2+'<img data-aos="fade-up" data-target="#carouselExampleIndicators" data-slide-to="'+i+'" class="img-fluid" src='+images[i]+'>';
            }
            else
            {
                col2 = col2+'<img data-aos="fade-up" onclick="gallery_view();" data-target="#carouselExampleIndicators" data-slide-to="'+i+'" class="img-fluid" src='+images[i]+'>';
            }
            
        }
        else if(i % 3 == 2)
        {
            if(width < 1200)
            {
                col3 = col3+'<img data-aos="fade-left" data-target="#carouselExampleIndicators" data-slide-to="'+i+'" class="img-fluid" src='+images[i]+'>';
            }
            else
            {
                col3 = col3+'<img data-aos="fade-left" onclick="gallery_view();" data-target="#carouselExampleIndicators" data-slide-to="'+i+'" class="img-fluid" src='+images[i]+'>';
            }
            
        }

        // Carousal indicator
        if(i == 0)
        {
            indicators = indicators + "<li class='active' data-target='#carouselExampleIndicators' data-slide-to='"+ i +"' ></li>";

            // const d = document.createElement("div");
            // d.classList.add("carousel-item");
            // d.classList.add("active");
            // d.innerText = "<img class='img-size' src='"+images[i]+"' />";
            // carousal_images = carousal_images + d;

            var dd = "<div class='carousel-item active'>"+
                        "<img class='img-size' src='"+images[i]+"' />"+
                        "</div>";
            carousal_images = carousal_images + dd;
        }
        else
        {
            indicators = indicators + "<li data-target='#carouselExampleIndicators' data-slide-to='"+ i +"' ></li>";


            // const d = document.createElement("div");
            // // d.classList.add("carousel-item active");
            // d.classList.add("carousel-item");
            // d.innerText = "<img class='img-size' src='"+images[i]+"' />";
            // carousal_images = carousal_images + d;

            var dd = "<div class='carousel-item'>"+
                        "<img class='img-size' src='"+images[i]+"' />"+
                        "</div>";
            carousal_images = carousal_images + dd;
        }

    }

    // Gallery images
    column1.innerHTML = col1;
    column2.innerHTML = col2;
    column3.innerHTML = col3;


    // Carousal Inner
    var carou_inner_text = "<div class='carousel-inner'>"+
                            carousal_images+
                            "</div>";
    // const c_inner = document.createElement("div");
    // c_inner.classList.add("carousel-inner");
    // c_inner.innerHTML = carousal_images;


    // // Carousal Indicators
    var indi = "<ol class='carousel-indicators'>"+indicators+"</ol>";
    
    // console.log(carousal_images);


    // Carousal Navigator

    var left = "<a class='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev' >"+
                    "<span class='carousel-control-prev-icon' aria-hidden='true' ></span>"+
                    "<span class='sr-only'>Previous</span>"+
               "</a>";

    var right = "<a class='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next' >"+
                    "<span class='carousel-control-next-icon' aria-hidden='true' ></span>"+
                    "<span class='sr-only'>Next</span>"+
                "</a>";
    

    var full_content = carou_inner_text + indi + left + right;
    // indicator.innerHTML = indicator.innerHTML+carou_inner_text;
    // indicator.innerHTML = indicator.innerHTML+indi;
    // indicator.innerHTML = indicator.innerHTML+left;
    // indicator.innerHTML = indicator.innerHTML+right;
    // console.log(full_content);

    indicator.innerHTML = full_content;


}

