

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
	{
		p.removeClass('gif-off');
		newsrc = "gif/" + name + ".gif";
	}
	else
	{
		p.addClass('gif-off');
		newsrc = "gif/thumbnails/" + name + ".jpg";
	}
	
	$(this).attr("src", newsrc);	
}
