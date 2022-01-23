function t446_init(recid) {
    var el = $('#rec' + recid); var mobile = el.find('.t446__mobile'); var fixedBlock = mobile.css('position') === 'fixed' && mobile.css('display') === 'block'; setTimeout(function () {
        el.find('.t-menu__link-item:not(.t-menusub__target-link):not(.tooltipstered):not(.t794__tm-link)').on('click', function () {
            if ($(this).is(".t-menu__link-item.tooltipstered, .t-menu__link-item.t-menusub__target-link, .t-menu__link-item.t794__tm-link, .t-menu__link-item.t966__tm-link, .t-menu__link-item.t978__tm-link")) { return }
            if (fixedBlock) { mobile.trigger('click') }
        }); el.find('.t-menusub__link-item').on('click', function () { if (fixedBlock) { mobile.trigger('click') } })
    }, 500)
}
function t446_setLogoPadding(recid) { if ($(window).width() > 980) { var t446__menu = $('#rec' + recid + ' .t446'); var t446__logo = t446__menu.find('.t446__logowrapper'); var t446__leftpart = t446__menu.find('.t446__leftwrapper'); var t446__rightpart = t446__menu.find('.t446__rightwrapper'); t446__leftpart.css("padding-right", t446__logo.width() / 2 + 50); t446__rightpart.css("padding-left", t446__logo.width() / 2 + 50) } }
function t446_checkOverflow(recid, menuheight) {
    var t446__menu = $('#rec' + recid + ' .t446'); var t446__rightwr = t446__menu.find('.t446__rightwrapper'); var t446__rightmenuwr = t446__rightwr.find('.t446__rightmenuwrapper'); var t446__rightadditionalwr = t446__rightwr.find('.t446__additionalwrapper'); var t446__burgeroverflow = t446__rightwr.find('.t446__burgerwrapper_overflow'); var t446__burgerwithoutoverflow = t446__rightwr.find('.t446__burgerwrapper_withoutoverflow'); if (menuheight > 0) { var t446__height = menuheight } else { var t446__height = 80 }
    if ($(window).width() > 980 && (t446__rightmenuwr.width() + t446__rightadditionalwr.width()) > t446__rightwr.width()) { t446__menu.css("height", t446__height * 2); t446__rightadditionalwr.css("float", "right"); t446__burgeroverflow.css("display", "table-cell"); t446__burgerwithoutoverflow.css("display", "none") } else {
        if (t446__menu.height() > t446__height) { t446__menu.css("height", t446__height) }
        if (t446__rightadditionalwr.css("float") == "right") { t446__rightadditionalwr.css("float", "none") }
        t446__burgeroverflow.css("display", "none"); t446__burgerwithoutoverflow.css("display", "table-cell")
    }
}
function t446_highlight() {
    var url = window.location.href; var pathname = window.location.pathname; if (url.substr(url.length - 1) == "/") { url = url.slice(0, -1) }
    if (pathname.substr(pathname.length - 1) == "/") { pathname = pathname.slice(0, -1) }
    if (pathname.charAt(0) == "/") { pathname = pathname.slice(1) }
    if (pathname == "") { pathname = "/" }
    $(".t446__list_item a[href='" + url + "']").addClass("t-active"); $(".t446__list_item a[href='" + url + "/']").addClass("t-active"); $(".t446__list_item a[href='" + pathname + "']").addClass("t-active"); $(".t446__list_item a[href='/" + pathname + "']").addClass("t-active"); $(".t446__list_item a[href='" + pathname + "/']").addClass("t-active"); $(".t446__list_item a[href='/" + pathname + "/']").addClass("t-active")
}
function t446_checkAnchorLinks(recid) { if ($(window).width() >= 960) { var t446_navLinks = $("#rec" + recid + " .t446__list_item a:not(.tooltipstered)[href*='#']"); if (t446_navLinks.length > 0) { t446_catchScroll(t446_navLinks) } } }
function t446_catchScroll(t446_navLinks) {
    var t446_clickedSectionId = null, t446_sections = new Array(), t446_sectionIdTonavigationLink = [], t446_interval = 100, t446_lastCall, t446_timeoutId; t446_navLinks = $(t446_navLinks.get().reverse()); t446_navLinks.each(function () {
        var t446_cursection = t446_getSectionByHref($(this)); if (typeof t446_cursection.attr("id") != "undefined") { t446_sections.push(t446_cursection) }
        t446_sectionIdTonavigationLink[t446_cursection.attr("id")] = $(this)
    }); t446_updateSectionsOffsets(t446_sections); t446_sections.sort(function (a, b) { return b.attr("data-offset-top") - a.attr("data-offset-top") }); $(window).bind('resize', t_throttle(function () { t446_updateSectionsOffsets(t446_sections) }, 200)); $('.t446').bind('displayChanged', function () { t446_updateSectionsOffsets(t446_sections) }); setInterval(function () { t446_updateSectionsOffsets(t446_sections) }, 5000); t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId); t446_navLinks.click(function () { var t446_clickedSection = t446_getSectionByHref($(this)); if (!$(this).hasClass("tooltipstered") && typeof t446_clickedSection.attr("id") != "undefined") { t446_navLinks.removeClass('t-active'); $(this).addClass('t-active'); t446_clickedSectionId = t446_getSectionByHref($(this)).attr("id") } }); $(window).scroll(function () { var t446_now = new Date().getTime(); if (t446_lastCall && t446_now < (t446_lastCall + t446_interval)) { clearTimeout(t446_timeoutId); t446_timeoutId = setTimeout(function () { t446_lastCall = t446_now; t446_clickedSectionId = t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId) }, t446_interval - (t446_now - t446_lastCall)) } else { t446_lastCall = t446_now; t446_clickedSectionId = t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId) } })
}
function t446_updateSectionsOffsets(sections) { $(sections).each(function () { var t446_curSection = $(this); t446_curSection.attr("data-offset-top", t446_curSection.offset().top) }) }
function t446_getSectionByHref(curlink) {
    var t446_curLinkValue = curlink.attr("href").replace(/\s+/g, ''); if (t446_curLinkValue[0] == '/') { t446_curLinkValue = t446_curLinkValue.substring(1) }
    if (curlink.is('[href*="#rec"]')) { return $(".r[id='" + t446_curLinkValue.substring(1) + "']") } else { return $(".r[data-record-type='215']").has("a[name='" + t446_curLinkValue.substring(1) + "']") }
}
function t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId) {
    var t446_scrollPosition = $(window).scrollTop(), t446_valueToReturn = t446_clickedSectionId; if (t446_sections.length != 0 && t446_clickedSectionId == null && t446_sections[t446_sections.length - 1].attr("data-offset-top") > (t446_scrollPosition + 300)) { t446_navLinks.removeClass('t-active'); return null }
    $(t446_sections).each(function (e) {
        var t446_curSection = $(this), t446_sectionTop = t446_curSection.attr("data-offset-top"), t446_id = t446_curSection.attr('id'), t446_navLink = t446_sectionIdTonavigationLink[t446_id]; if (((t446_scrollPosition + 300) >= t446_sectionTop) || (t446_sections[0].attr("id") == t446_id && t446_scrollPosition >= $(document).height() - $(window).height())) {
            if (t446_clickedSectionId == null && !t446_navLink.hasClass('t-active')) { t446_navLinks.removeClass('t-active'); t446_navLink.addClass('t-active'); t446_valueToReturn = null } else { if (t446_clickedSectionId != null && t446_id == t446_clickedSectionId) { t446_valueToReturn = null } }
            return !1
        }
    }); return t446_valueToReturn
}
function t446_setPath() { }
function t446_setBg(recid) { var window_width = $(window).width(); if (window_width > 980) { $(".t446").each(function () { var el = $(this); if (el.attr('data-bgcolor-setbyscript') == "yes") { var bgcolor = el.attr("data-bgcolor-rgba"); el.css("background-color", bgcolor) } }) } else { $(".t446").each(function () { var el = $(this); var bgcolor = el.attr("data-bgcolor-hex"); el.css("background-color", bgcolor); el.attr("data-bgcolor-setbyscript", "yes") }) } }
function t446_appearMenu(recid) {
    var window_width = $(window).width(); if (window_width > 980) {
        $(".t446").each(function () {
            var el = $(this); var appearoffset = el.attr("data-appearoffset"); if (appearoffset != "") {
                if (appearoffset.indexOf('vh') > -1) { appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100))) }
                appearoffset = parseInt(appearoffset, 10); if ($(window).scrollTop() >= appearoffset) { if (el.css('visibility') == 'hidden') { el.finish(); el.css("top", "-50px"); el.css("visibility", "visible"); el.animate({ "opacity": "1", "top": "0px" }, 200, function () { }) } } else { el.stop(); el.css("visibility", "hidden") }
            }
        })
    }
}
function t446_changebgopacitymenu(recid) {
    var window_width = $(window).width(); if (window_width > 980) {
        $(".t446").each(function () {
            var el = $(this); var bgcolor = el.attr("data-bgcolor-rgba"); var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll"); var bgopacityone = el.attr("data-bgopacity"); var bgopacitytwo = el.attr("data-bgopacity-two"); var menushadow = el.attr("data-menushadow"); if (menushadow == '100') { var menushadowvalue = menushadow } else { var menushadowvalue = '0.' + menushadow }
            if ($(window).scrollTop() > 20) { el.css("background-color", bgcolor_afterscroll); if (bgopacitytwo == '0' || menushadow == ' ') { el.css("box-shadow", "none") } else { el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")") } } else { el.css("background-color", bgcolor); if (bgopacityone == '0.0' || menushadow == ' ') { el.css("box-shadow", "none") } else { el.css("box-shadow", "0px 1px 3px rgba(0,0,0," + menushadowvalue + ")") } }
        })
    }
}
function t446_createMobileMenu(recid) {
    var window_width = $(window).width(), el = $("#rec" + recid), menu = el.find(".t446"), burger = el.find(".t446__mobile"); if (menu.hasClass('t446__mobile_burgerhook')) { burger.find('.t446__mobile_burger').wrap('<a href="#menuopen"></a>') } else { burger.click(function (e) { menu.fadeToggle(300); $(this).toggleClass("t446_opened") }) }
    $(window).bind('resize', t_throttle(function () { window_width = $(window).width(); if (window_width > 980) { menu.fadeIn(0) } }, 200)); el.find('.t-menu__link-item').on('click', function () { if (!$(this).hasClass('t966__tm-link') && !$(this).hasClass('t978__tm-link')) { t446_hideMenuOnMobile($(this), el) } }); el.find('.t446__logowrapper2 a').on('click', function () { t446_hideMenuOnMobile($(this), el) })
}
function t446_hideMenuOnMobile($this, el) {
    if ($(window).width() < 960) {
        var url = $this.attr('href').trim(); var menu = el.find('.t446'); var burger = el.find('.t446__mobile'); if (url.length && url[0] === '#') {
            burger.removeClass('t446_opened'); if (menu.is('.t446__positionabsolute')) { menu.fadeOut(0) } else { menu.fadeOut(300) }
            return !0
        }
    }
}
function t486_setHeight(recid) { var el = $('#rec' + recid); var window_width = $(window).width(); if (window_width > 980) { el.find('.t486__blockimg').css('height', el.find('.t486__blockimg').innerWidth()); var textwrapper = el.find('.t486__textwrapper'); var blockimg = el.find('.t486__imgcontainer'); textwrapper.css('height', blockimg.innerHeight()) } else { el.find('.t486__blockimg').css('height', el.find('.t486__blockimg').width()); el.find('.t486__textwrapper').css('height', 'auto') } }
function t720_onSuccess(t720_form) {
    var t720_inputsWrapper = t720_form.find('.t-form__inputsbox'); var t720_inputsHeight = t720_inputsWrapper.height(); var t720_inputsOffset = t720_inputsWrapper.offset().top; var t720_inputsBottom = t720_inputsHeight + t720_inputsOffset; var t720_targetOffset = t720_form.find('.t-form__successbox').offset().top; if ($(window).width() > 960) { var t720_target = t720_targetOffset - 200 } else { var t720_target = t720_targetOffset - 100 }
    if (t720_targetOffset > $(window).scrollTop() || ($(document).height() - t720_inputsBottom) < ($(window).height() - 100)) { t720_inputsWrapper.addClass('t720__inputsbox_hidden'); setTimeout(function () { if ($(window).height() > $('.t-body').height()) { $('.t-tildalabel').animate({ opacity: 0 }, 50) } }, 300) } else { $('html, body').animate({ scrollTop: t720_target }, 400); setTimeout(function () { t720_inputsWrapper.addClass('t720__inputsbox_hidden') }, 400) }
    var successurl = t720_form.data('success-url'); if (successurl && successurl.length > 0) { setTimeout(function () { window.location.href = successurl }, 500) }
}
function t720_fixcontentheight(id) {
    var el = $("#rec" + id); var hcover = el.find(".t-cover").height(); var hcontent = el.find("div[data-hook-content]").outerHeight(); if (hcontent > 300 && hcover < hcontent) {
        var hcontent = hcontent + 120; if (hcontent > 1000) { hcontent += 100 }
        console.log('auto correct cover height: ' + hcontent); el.find(".t-cover").height(hcontent); el.find(".t-cover__filter").height(hcontent); el.find(".t-cover__carrier").height(hcontent); el.find(".t-cover__wrapper").height(hcontent); el.find(".t-cover__container").height(hcontent); if ($isMobile == !1) { setTimeout(function () { var divvideo = el.find(".t-cover__carrier"); if (divvideo.find('iframe').length > 0) { console.log('correct video from cover_fixcontentheight'); setWidthHeightYoutubeVideo(divvideo, hcontent + 'px') } }, 2000) }
    }
}