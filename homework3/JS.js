/*function mOver(obj) {
	
	hover.className="cover_hover1";
}
function mOut(obj) {
	obj.className="status";
}*/
/*window.onload=function(){
	style();
var style=function(){
		
		var li = document.getElementsByTagName('div li');	
		for(var i = 0;i < li.length; i++) {
			li[i].onfcous = function(){
				var status = this..childNode.childNode;
			}
		}
	}
}
*/
 $(document).ready(function(){
            
         
            $("li.group_one").mouseenter(function(){
                 $("li.group_one a div.status").removeClass().addClass("cover_hover1");
                 $("body").css({"background":"url(http://www.bingyan.net/static/img/team_dim.jpg) 50% 0 no-repeat",
                                            "background-size":"auto 120%",
                                            "background-attachment":"fixed"
                                            });
                            
                 });
            $("li.group_one").mouseleave(function(){
                 $("li.group_one a div.cover_hover1").removeClass().addClass("status");
                 $("body").css({"background":"url(http://www.bingyan.net/static/img/index_dim.jpg) 50% 0 no-repeat"
                                              
                 							});
            });

            $("li.group_two").mouseenter(function(){
                 $("li.group_two a div.status").removeClass().addClass("cover_hover2");
                  $("body").css({"background":"url(http://www.bingyan.net/static/img/group_dim.jpg) 50% 0 no-repeat",
                                            "background-size":"auto 150%",
                                            "background-attachment":"fixed"
                                            });
                 });
            $("li.group_two").mouseleave(function(){
                 $("li.group_two a div.cover_hover2").removeClass().addClass("status");
                 $("body").css({"background":"url(http://www.bingyan.net/static/img/index_dim.jpg) 50% 0 no-repeat"
                                              
                                            });
           
            });

            $("li.group_three").mouseenter(function(){
                 $("li.group_three a div.status").removeClass().addClass("cover_hover3");
                  $("body").css({"background":"url(http://www.bingyan.net/static/img/pro_dim.jpg) 50% 0 no-repeat",
                                            "background-size":"auto 120%",
                                            "background-attachment":"fixed"
                 });
            });
            $("li.group_three").mouseleave(function(){
                 $("li.group_three a div.cover_hover3").removeClass().addClass("status");
                  $("body").css({"background":"url(http://www.bingyan.net/static/img/index_dim.jpg) 50% 0 no-repeat"
                });
            });
            $("li.group_four").mouseenter(function(){
                 $("li.group_four a div.status").removeClass().addClass("cover_hover4");
                  $("body").css({"background":"url(http://www.bingyan.net/static/img/partner_dim.jpg) 50% 0 no-repeat",
                                            "background-size":"auto 150%",
                                            "background-attachment":"fixed"
                 });
            });
            $("li.group_four").mouseleave(function(){
                 $("li.group_four a div.cover_hover4").removeClass().addClass("status");
                 $("body").css({"background":"url(http://www.bingyan.net/static/img/index_dim.jpg) 50% 0 no-repeat"
                });
            });
            $("li.group_five").mouseenter(function(){
                 $("li.group_five a div.status").removeClass().addClass("cover_hover5");
                  $("body").css({"background":"url(http://www.bingyan.net/static/img/recruit.jpg) 50% 0 no-repeat",
                                            "background-size":"auto 120%",
                                            "background-attachment":"fixed"
                 });
            });
            $("li.group_five").mouseleave(function(){
                 $("li.group_five a div.cover_hover5").removeClass().addClass("status");
                 $("body").css({"background":"url(http://www.bingyan.net/static/img/index_dim.jpg) 50% 0 no-repeat"
            });
        });
           
            $("img.arrow,div.bottom_logo").mouseenter(function(){
                $("div.border").css({
                    "height":"50px",
                    "transition-property": "height",
                    "transition-duration": "0.15s",
                    "transition-timing-function": "cubic-bezier(0, 0.615, 0.435, 1.005)",
                    "transition-delay":"initial"
                });
                $("img.arrow").hide();


            });
             $("img.arrow,div.bottom_logo").mouseleave(function(){
                $("div.down").show();
                $("div.border").css({
                    "position":"absolute",
                    "left":"0",
                    "bottom":"0",
                    "background-color":"#F9991C",
                    "height":"7px",
                    "width":"210px"
                });
                $("img.arrow").show();
             });
             $("img.arrow,div.bottom_logo").click(function(){
                $("img.down_logo").slideDown("slow");
             });
});