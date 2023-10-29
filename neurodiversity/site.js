$(document).ready(function () {

    //––––––––––––––––––––––––––––––––––––––––––––––––––––

    myMenu = `
       <a href="index.html"><button>Home</button></a>
       <a href="ADHD.html"><button>ADHD</button></a>  
       <a href="Autism.html"><button>Autism</button></a>
       <a href="Dyslexia.html"><button>Dyslexia</button></a>
       <a href="OCD.html"><button>OCD</button></a>
    `;
    $("#page-menu").html(myMenu);

    //––––––––––––––––––––––––––––––––––––––––––––––––––––

    myFooter = `
        <p>Copyright© 2023 by Cie Buckland</p>
    `;
    $("#page-footer").html(myFooter);

    //––––––––––––––––––––––––––––––––––––––––––––––––––––

    function expandArt(clickedObj) {
        $(".content").removeClass("selected");
        $(clickedObj).find(".content").addClass("selected");
    }

    $(".article, .symbols").click(function () {
        expandArt(this)
    });

    //––––––––––––––––––––––––––––––––––––––––––––––––––––

    $(".in-article").click(function () {
        $(".content").toggle();

    });


});