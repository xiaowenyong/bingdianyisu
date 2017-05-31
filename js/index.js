/**
 * Created by Administrator on 2017/4/13.
 */

// 这是轮播图的js开始
var home_banner_l_ul = document.getElementById('home_banner_l_ul');
var home_banner_l_ul_li = document.getElementsByClassName('home_banner_l_ul_li');
var iNow = 0;

function oHome_banner() {
    var home_btn = document.getElementById('home_btn');
    var home_btn1a = document.getElementsByClassName('aa');
    var timer = setInterval(function () {
        iNow++;
        if (iNow >= home_banner_l_ul_li.length) {
            iNow = 0;
        }
        home_banner_l_ul.style.left = -(1920 * iNow) + 'px';

        for (var w = 0; w < home_btn1a.length; w++) {
            home_btn1a[w].style.backgroundPositionY = 0;
            // home_btn1a[iNow].className="home_btn1a"+w+'1';

            if (w == iNow) {
                home_btn1a[w].style.backgroundPositionY = -23 + "px";
            }

        }

    }, 1000);
    for (var j = 0; j < home_btn1a.length; j++) {
        home_btn1a[j].index = j;
        home_btn1a[j].onclick = function () {
            iNow = [this.index] - 1;
        }
    }
}

oHome_banner();
// 这是轮播图的js结束


// 这是图片那一块的js开始
function oTupian() {
    var home_body_case_li_hz = document.getElementsByClassName('home_body_case_li_hz');
    var home_body_case_li_hz_mb = document.getElementsByClassName('home_body_case_li_hz_mb');
    var home_body_case_li_hz_al = document.getElementsByClassName('home_body_case_li_hz_al');
    var home_body_case_li_hz_ar = document.getElementsByClassName('home_body_case_li_hz_ar');
    for (var w = 0; w < 6; w++) {
        home_body_case_li_hz[w].index = w;
        home_body_case_li_hz[w].onmouseover = function () {
            this.style.marginTop = '0';
            home_body_case_li_hz_mb[this.index].style.display = 'block';
            home_body_case_li_hz_mb[this.index].style.marginTop = '-20px';
            home_body_case_li_hz_al[this.index].style.display = 'block';
            home_body_case_li_hz_al[this.index].style.marginLeft = '60px';
            home_body_case_li_hz_al[this.index].style.opacity = '1';
            home_body_case_li_hz_ar[this.index].style.marginLeft = '140px';
            home_body_case_li_hz_ar[this.index].style.opacity = '1';
        }
        home_body_case_li_hz[w].onmouseout = function () {
            this.style.marginTop = '18px';
            home_body_case_li_hz_mb[this.index].style.display = 'none';
            home_body_case_li_hz_mb[this.index].style.marginTop = '-20px';
            home_body_case_li_hz_al[this.index].style.display = 'block';
            home_body_case_li_hz_al[this.index].style.marginLeft = '1px';
            home_body_case_li_hz_al[this.index].style.opacity = '0';
            home_body_case_li_hz_ar[this.index].style.marginLeft = '200px';
            home_body_case_li_hz_ar[this.index].style.opacity = '0';
        }

    }
}
oTupian();
//这是图片那一块js结束

//  产品那一块的js开始
var home_body_slogen_m_a1_m = document.getElementsByClassName('home_body_slogen_m_a1_m');

// 这是封装透明度的函数开始
function oChanpingreen() {
    this.style.opacity = '0';
}

function oChanpinhuise() {
    this.style.opacity = '1';
}
// 这是封装透明度的函数结束

for (var i = 0; i <= 5; i++) {
    home_body_slogen_m_a1_m[i].addEventListener('mouseover', oChanpingreen);
    home_body_slogen_m_a1_m[i].addEventListener('mouseout', oChanpinhuise);
}
//产品那一块的js结束


//案例那一块的js开始
var home_body_tj_m_a_m = document.getElementById('home_body_tj_m_a_m');
home_body_tj_m_a_m.addEventListener('mouseover', oChanpingreen);
home_body_tj_m_a_m.addEventListener('mouseout', oChanpinhuise);
//案例那一块的js结束


//服务那一块的js
var home_body_service_m_l_a_m = document.getElementsByClassName('home_body_service_m_l_a_m');
home_body_service_m_l_a_m[0].addEventListener('mouseover', oChanpingreen);
home_body_service_m_l_a_m[0].addEventListener('mouseout', oChanpinhuise);
//服务模块js结束

