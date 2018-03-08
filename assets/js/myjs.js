function ajustar_footer() {
	$('body').css('padding-bottom', $('footer').outerHeight());
}

window.addEventListener("resize", ajustar_footer, false);
$(function() {
	/* preciso disto para por o footer em baixo */
	$('footer').removeClass('d-none');
	ajustar_footer();
	/* footer end */
});
