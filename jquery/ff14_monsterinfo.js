/*검색 정보 실시간 보기*/
function filter(){
	if($('#txtFilter').val()=="")
		$("#m_body tr").css('display','');			
	else{
		$("#m_body tr").css('display','none');
		$("#m_body tr[name*='"+$('#txtFilter').val()+"']").css('display','');
	}
	return false;
}


/*마우스 오버시 tr 색상 변경*/	
$(document).ready(function(){
	$('table tr').hover(function(){ 
		 $(this).addClass('hover'); 
	  },function(){
	$(this).removeClass('hover');
	 });   
}); 


/*마우스 오버시 이미지 변경*/
function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		 rslt.src = arg;
		 return rslt;
		}
	 }

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

var preloadFlag = false;
	function preloadImages() {
		if (document.images) {
	preloadFlag = true;
	}
}


/*레이어 팝업*/
$(document).ready(function() {
	 popConfig();
});

function popConfig(){
	 $(".btn_open").click(layerOpen);
	 $(".btn_close").click(layerClose);
}

function layerOpen(){
	 $("#layer_pop").css("display","block");
	 var tx = ($(window).width()-$("#layer_pop .pop_cont").width())/2;
	 var ty = ($(window).height()-$("#layer_pop .pop_cont").height())/2;
	 $("#layer_pop .pop_cont").css({left:tx+"px",top:ty+"px"});
	 $("body").css("overflow","hidden");
}

function layerClose(){
	 $("#layer_pop").css("display","none");
	 $("body").css("overflow","auto");
}

/* 이미지 크기 자동 조절
$(function() {
		$("#post_content img, .resizablebox").each(function() {
			var oImgWidth = $(this).width();
			var oImgHeight = $(this).height();
			$(this).css({
				'max-width':oImgWidth+'px',
				'max-height':oImgHeight+'px',
				'width':'100%',
				'height':'100%'
			});
		});
	});
*/