new ClipboardJS('.btn-clipboard').on('success', function() {
	$('.btn-clipboard')
		.attr('data-original-title','Copied!').tooltip("_fixTitle").tooltip("show")
		.attr("title", "Copy to clipboard").tooltip("_fixTitle");
});

// $(function () {
// 	$("#share").jsSocials({
// 		shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
// 	});
// })

$("#jssocials").jsSocials({
	shareIn: "popup",
	showLabel: false,
	shares: [
        { share: "email", logo: "fas fa-envelope" },
        { share: "facebook", logo: "fab fa-facebook" },
        { share: "twitter", logo: "fab fa-twitter" },
        {
            share: "whatsapp",
            logo: "fab fa-whatsapp",
            shareUrl: "https://wa.me/?text={url}",
            shareIn: "popup"
        },
        {
            share: "telegram",
            logo: "fab fa-telegram",
            shareUrl: "https://telegram.me/share/url?url={url}",
            shareIn: "popup"
        }
    ]
});

