

$(document).ready(function() {
    $('.gif').children().click(playGif);
});

function playGif()
{
	$(this).parent().removeClass('gif');
	var src =  $(this).attr("src");
	newsrc = "gif/" + src.match(/gif\/thumbnails\/(.*)\.jpg/)[1] + ".gif";
	$(this).attr("src", newsrc);	
}