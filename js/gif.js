

$(document).ready(function() {
	$('.gif').addClass('gif-off');
    $('.gif').children().click(playGif);
});

function playGif()
{
	p = $(this).parent();
	var name = $(this).attr("src").match(/.*\/(.*)\..*/)[1]
	var newsrc;
	if( p.hasClass('gif-off'))
		newsrc = "gif/" + name + ".gif";	
	else		
		newsrc = "gif/thumbnails/" + name + ".jpg";
	p.toggleClass('gif-off');	
	$(this).attr("src", newsrc);	
}
