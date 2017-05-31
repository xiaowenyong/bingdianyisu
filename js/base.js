/**
 * Created by Administrator on 2017/4/12.
 */
window.onload = function () {

    // 这是头部的js
    //logo的js
    var home_logoa_a = document.getElementById('home_logoa_a');

    function home_logomov() {
        home_logoa_a.style.opacity = '1'
    }

    function home_logoout() {
        home_logoa_a.style.opacity = '0'
    }

    home_logoa_a.addEventListener('mouseover', home_logomov);
    home_logoa_a.addEventListener('mouseout', home_logoout);


    // 这是背景的js

    var oWrap = document.getElementById("wrapp");
    var bImg = document.getElementsByClassName("home_banner_bg");
    var iMax = 4;
    //获取图片的初始位置
    for (var y = 0; y < bImg.length; y++) {
        bImg[y].startX = parseInt(getStyle(bImg[y], 'left'))
    }
    oWrap.onmousemove = function (ev) {
        ev = ev || window.event;
        //获取鼠标的位置与大盒子中心点位置的距离
        var iX = ev.clientX - (oWrap.offsetLeft + this.offsetWidth / 2);
        for (var y = 0; y < bImg.length; y++) {
            //获取每个img的z-index
            var iZindex = getStyle(bImg[y], 'zIndex');
            //Zindex越大移动的相对距离越小
            var iDisL = -parseInt(iX / iMax * (iMax - iZindex) / 5);
            //图片的距离等于原先的距离加上计算的距离
            bImg[y].style.left = bImg[y].startX + iDisL + 'px'
        }
    }
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        }
        return getComputedStyle(obj)[attr];
    }

    // 这是头部js结束
    // 这是尾部的js
    var home_body_home_m_a1_bs = document.getElementsByClassName('home_body_home_m_a1_bs');

    function oTubiaog() {
        this.style.opacity = '0';
    }

    function oTubiaoh() {
        this.style.opacity = '1';
    }

    for (var k = 0; k <= 4; k++) {
        home_body_home_m_a1_bs[k].addEventListener('mouseover', oTubiaog);
        home_body_home_m_a1_bs[k].addEventListener('mouseout', oTubiaoh);
    }

    function getScrollTop() {
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }

//文档的总高度
    function getScrollHeight() {
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }

//浏览器视口的高度
    var home_foot = document.getElementById('home_foot');

    function getWindowHeight() {
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }

    window.onscroll = function () {
        if (getScrollTop() + getWindowHeight() == getScrollHeight()) {
             home_foot.style.bottom = '50px';
        }
        else {
             home_foot.style.bottom = '-267px';
        }
    };
    //这是底部js结束
};