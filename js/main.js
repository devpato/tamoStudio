const $ = jQuery;
$(document).ready(function() {
  $(".loadmore").hide();
  $(".section-title-holder")
    .stick_in_parent({ offset_top: 64 })
    .on("sticky_kit:stick", function(e) {
      $(".menu-wrapper, .menu-wrapper .sub-menu").css(
        "backgroundColor",
        $(this).css("backgroundColor")
      );
      $(".menu-wrapper a, .mob-menu").css(
        "color",
        $(this)
          .find(".section-num span")
          .css("color")
      );
    });

  $(".section-title-holder")
    .stick_in_parent({ offset_top: 64 })
    .on("sticky_kit:unbottom", function(e) {
      $(".menu-wrapper, .menu-wrapper .sub-menu").css(
        "backgroundColor",
        $(this).css("backgroundColor")
      );
      $(".menu-wrapper a, .mob-menu").css(
        "color",
        $(this)
          .find(".section-num span")
          .css("color")
      );
    });

  //Placeholder show/hide
  $("input, textarea").focus(function() {
    $(this).data("placeholder", $(this).attr("placeholder"));
    $(this).attr("placeholder", "");
  });
  $("input, textarea").blur(function() {
    $(this).attr("placeholder", $(this).data("placeholder"));
  });

  //Portfolio
  var grid = $(".grid").imagesLoaded(function() {
    grid.isotope({
      itemSelector: ".grid-item",
      masonry: {
        columnWidth: ".grid-sizer"
      }
    });
    //Fix for portfolio item text
    $(".portfolio-text-holder").each(function() {
      $(this)
        .find(".portfolio-text-wrapper")
        .css(
          "margin-top",
          ($(this).height() -
            $(this)
              .find(".portfolio-text-wrapper")
              .height()) /
            2 -
            70
        );
    });

    //Fix for portfolio hover text fade in/out
    $(".grid-item a").hover(
      function() {
        $(this)
          .find(".portfolio-text-holder")
          .fadeIn("fast");
      },
      function() {
        $(this)
          .find(".portfolio-text-holder")
          .fadeOut("fast");
      }
    );
  });
});

$(window).load(function() {
  //Show-Hide Mobile Menu
  $(".mob-menu").on("click", showHideMobMenu);
  if ($("body").width() <= 925) {
    $(".main-menu a").on("click", hideMobMenuItemClick);
  }

  //Set each image slider
  $(".image-slider").each(function() {
    var id = $(this).attr("id");
    var auto_value = window[id + "_auto"];
    if (auto_value == "false") {
      auto_value = false;
    } else {
      auto_value = true;
    }

    var hover_pause = window[id + "_hover"];
    if (hover_pause == "true") {
      hover_pause = "resume";
    } else {
      hover_pause = false;
    }

    var speed_value = window[id + "_speed"];
    $("#" + id).carouFredSel({
      responsive: true,
      width: "variable",
      auto: {
        play: auto_value,
        pauseOnHover: hover_pause
      },
      next: "#" + id + "_next",
      scroll: {
        fx: "crossfade",
        duration: parseFloat(speed_value)
      },
      swipe: {
        onMouse: true,
        onTouch: true
      },
      items: {
        visible: 1,
        height: "variable"
      }
    });
  });
  $(".image-slider-wrapper").each(function() {
    var slider_width = $(this).width();
    var pagination_width = $(this)
      .find(".carousel_pagination")
      .width();
    $(this)
      .find(".carousel_pagination")
      .css("margin-left", (slider_width - pagination_width) / 2);
  });

  //Set each testimonial slider
  $(".testimonial").each(function() {
    var id = $(this).attr("id");
    var auto_value = window[id + "_auto"];
    if (auto_value == "false") {
      auto_value = false;
    } else {
      auto_value = true;
    }

    var hover_pause = window[id + "_hover"];
    if (hover_pause == "true") {
      hover_pause = "resume";
    } else {
      hover_pause = false;
    }

    var speed_value = window[id + "_speed"];
    $("#" + id).carouFredSel({
      responsive: true,
      width: "variable",
      auto: {
        play: auto_value,
        pauseOnHover: hover_pause
      },
      next: "#" + id + "_next",
      scroll: {
        fx: "crossfade",
        duration: parseFloat(speed_value)
      },
      swipe: {
        onMouse: true,
        onTouch: true
      },
      items: {
        height: "variable"
      }
    });
  });

  $(".carousel_pagination").each(function() {
    var pagination_width = $(this).width();
    var windw_width = $(".testimonial-slider-holder").width();
    $(this).css("margin-left", (windw_width - pagination_width) / 2);
  });

  //Set each FW image slider
  $(".fw-image-slider").each(function() {
    var id = $(this).attr("id");

    var auto_value = window[id + "_auto"];
    if (auto_value == "false") {
      auto_value = false;
    } else {
      auto_value = true;
    }

    var hover_pause = window[id + "_hover"];
    if (hover_pause == "true") {
      hover_pause = "resume";
    } else {
      hover_pause = false;
    }

    var speed_value = window[id + "_speed"];
    var start_value = window[id + "_start"];
    var width_value = window[id + "_width"];
    var num_value = window[id + "_num"];

    $("#" + id).carouFredSel({
      responsive: true,
      width: "100%",
      auto: {
        play: auto_value,
        pauseOnHover: hover_pause
      },
      pagination: "#" + id + "_fw_image_slide_pager",
      next: "#" + id + "_fw_next",
      scroll: {
        duration: parseFloat(speed_value)
      },
      swipe: {
        onMouse: true,
        onTouch: true
      },
      items: {
        width: parseFloat(width_value),
        height: "auto", //	optionally resize item-height
        visible: {
          min: 1,
          max: parseFloat(num_value)
        },
        start: parseFloat(start_value)
      }
    });
  });

  //PrettyPhoto initial
  $("a[data-rel]").each(function() {
    $(this).attr("rel", $(this).data("rel"));
  });
  $("a[rel^='prettyPhoto']").prettyPhoto({
    animation_speed: "fast" /* fast/slow/normal */,
    slideshow: false /* false OR interval time in ms */,
    autoplay_slideshow: false /* true/false */,
    opacity: 0.8 /* Value between 0 and 1 */,
    show_title: true /* true/false */,
    allow_resize: true /* Resize the photos bigger than viewport. true/false */,
    default_width: 500,
    default_height: 344,
    counter_separator_label:
      "/" /* The separator for the gallery counter 1 "of" 2 */,
    theme:
      "pp_default" /* light_rounded / dark_rounded / light_square / dark_square / facebook */,
    hideflash: false /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */,
    wmode: "opaque" /* Set the flash wmode attribute */,
    autoplay: true /* Automatically start videos: True/False */,
    modal: false /* If set to true, only the close button will close the window */,
    overlay_gallery: false /* If set to true, a gallery will overlay the fullscreen image on mouse over */,
    keyboard_shortcuts: true /* Set to false if you open forms inside prettyPhoto */,
    deeplinking: false,
    social_tools: false,
    iframe_markup:
      '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  });

  var $videoDefaultWidth = Math.ceil($("body").width() * 0.7);
  var $videoDefaultHeight = Math.ceil($videoDefaultWidth * 0.5625);

  $("a[rel^='prettyPhoto']").each(function() {
    var str = $(this).attr("href");
    if (str.indexOf("youtube") >= 0 || str.indexOf("vimeo") >= 0) {
      $(this).attr(
        "href",
        str + "&width=" + $videoDefaultWidth + "&height=" + $videoDefaultHeight
      );
    }
  });

  //Set menu
  $(".main-menu").smartmenus({
    subMenusSubOffsetX: 1,
    subMenusSubOffsetY: -8,
    markCurrentItem: true
  });
  var $mainMenu = $(".main-menu")
    .on("click", "span.sub-arrow", function(e) {
      var obj = $mainMenu.data("smartmenus");
      if (obj.isCollapsible()) {
        var $item = $(this).parent(),
          $sub = $item.parent().dataSM("sub");
        $sub.dataSM("arrowClicked", true);
      }
    })
    .bind({
      "beforeshow.smapi": function(e, menu) {
        var obj = $mainMenu.data("smartmenus");
        if (obj.isCollapsible()) {
          var $menu = $(menu);
          if (!$menu.dataSM("arrowClicked")) {
            return false;
          }
          $menu.removeDataSM("arrowClicked");
        }
      }
    });

  $(".section-title-holder").trigger("sticky_kit:recalc");

  $(".doc-loader").fadeOut("fast");
});

$(window).resize(function() {
  //Show-Hide Mobile Menu
  if ($("body").width() <= 925) {
    $(".main-menu a").on("click", hideMobMenuItemClick);
  }

  var $videoDefaultWidth = Math.ceil($("body").width() * 0.7);
  var $videoDefaultHeight = Math.ceil($videoDefaultWidth * 0.5625);
  $("a[rel^='prettyPhoto']").each(function() {
    var str = $(this).attr("href");
    str = str.split("&width");
    if (str[0].indexOf("youtube") >= 0 || str[0].indexOf("vimeo") >= 0) {
      $(this).attr(
        "href",
        str[0] +
          "&width=" +
          $videoDefaultWidth +
          "&height=" +
          $videoDefaultHeight
      );
    }
  });
  $(".image-slider-wrapper").each(function() {
    var slider_width = $(this).width();
    var pagination_width = $(this)
      .find(".carousel_pagination")
      .width();
    $(this)
      .find(".carousel_pagination")
      .css("margin-left", (slider_width - pagination_width) / 2);
  });

  //Fix for portfolio item text
  $(".portfolio-text-holder").each(function() {
    $(this)
      .find(".portfolio-text-wrapper")
      .css(
        "margin-top",
        ($(this).height() -
          $(this)
            .find(".portfolio-text-wrapper")
            .height()) /
          2 -
          70
      );
  });
});
//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------

var showHideMobMenu = function(e) {
  $(".main-menu").slideToggle();
};

var hideMobMenuItemClick = function(e) {
  if ($(".mob-menu").is(":visible")) {
    $(".main-menu").slideUp();
  }
};

function is_touch_device() {
  return !!("ontouchstart" in window);
}

function isValidEmailAddress(emailAddress) {
  var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return pattern.test(emailAddress);
}

var SendMail = function() {
  var emailVal = $("#contact-email").val();

  if (isValidEmailAddress(emailVal)) {
    var params = {
      action: "SendMessage",
      name: $("#name").val(),
      email: $("#contact-email").val(),
      subject: $("#subject").val(),
      message: $("#message").val()
    };
    $.ajax({
      type: "POST",
      url: "php/sendMail.php",
      data: params,
      success: function(response) {
        if (response) {
          var responseObj = $.parseJSON(response);
          if (responseObj.ResponseData) {
            alert(responseObj.ResponseData);
          }
        }
      },
      error: function(xhr, ajaxOptions, thrownError) {
        //xhr.status : 404, 303, 501...
        var error = null;
        switch (xhr.status) {
          case "301":
            error = "Redirection Error!";
            break;
          case "307":
            error = "Error, temporary server redirection!";
            break;
          case "400":
            error = "Bad request!";
            break;
          case "404":
            error = "Page not found!";
            break;
          case "500":
            error = "Server is currently unavailable!";
            break;
          default:
            error = "Unespected error, please try again later.";
        }
        if (error) {
          alert(error);
        }
      }
    });
  } else {
    alert("Your email is not in valid format");
  }
};
