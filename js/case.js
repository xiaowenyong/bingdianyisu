/**
 * Created by Administrator on 2017/4/12.
 */
//    2010eEdition的弹出框
var oAEdition = document.getElementById('case_location');
oAEdition.onclick = function () {
    alert('详情，请登录官网！');
};
//触动出现蒙版的功能
function mask() {
    var oDiv1 = document.getElementsByClassName('case_li1_box1');//放图片的div
    var oDiv2 = document.getElementsByClassName('case_mask');//蒙版
    var oA = document.getElementsByClassName('case_a1');  //链接a
    for (var i = 0; i < oDiv1.length; i++) {
        oDiv1[i].index = i;
        oDiv1[i].onmouseover = function () {
            this.style.marginTop = '-28px';
            oDiv2[this.index].style.display = 'block';
            oDiv2[this.index].style.marginTop = '-1px';
            oA[this.index].style.opacity = '1';
            oA[this.index].style.display = 'block';
            oA[this.index].style.marginTop = '-110px'
        }
        oDiv1[i].onmouseout = function () {
            this.style.marginTop = '0px';
            oDiv2[this.index].style.display = 'none';
            oDiv2[this.index].style.marginTop = '0px';
            oA[this.index].style.display = 'block';
            oA[this.index].style.marginTop = '-158px'
            oA[this.index].style.opacity = '0';
        }
    }
}
mask();
//4个按钮的弹出与盒子的切换
var oBtn = document.getElementsByClassName('case_btn_1');//得到4个按钮
var oBtnDiv = document.getElementsByClassName('case_btn_div');//得到4个盒子
var oLi1 = document.getElementsByClassName('case_li1');//得到图片的盒子
var oInitialDiv = document.getElementById('case_initial_box');//得到初始的盒子
for (var k = 0; k < oBtn.length; k++) {
    oBtn[k].index = k;
    oBtn[k].onclick = function () {
        for (var j = 0; j < oBtn.length; j++) {
            oBtn[j].style.height = '65px';
            oBtn[j].style.backgroundPositionY = '0px';
            oBtnDiv[j].style.display = 'none';
            oLi1[j].style.transform = 'rotateX(0deg)';
            for (var m = 0; m < oADiv.length; m++) {
                oADiv[m].style.display = 'none';
                oLi1[m].style.transform = 'rotateX(0deg)';
            }
        }
        this.style.height = '90px';
        this.style.backgroundPositionY = '-110px';
        oInitialDiv.style.display = 'none';
        oBtnDiv[this.index].style.display = 'block';
        oLi1[this.index].style.transform = 'rotateX(180deg)';
    }
}
//图片旋转

//7个方框链接的盒子切换
var oA = document.getElementsByClassName('case_a11');//得到7个方框链接
var oADiv = document.getElementsByClassName('case_link_box_div');//得到7个链接下面的盒子
for (var i = 0; i < oA.length; i++) {
    oA[i].index = i;
    oA[i].onclick = function () {
        // alert(111);
        for (var j = 0; j < oA.length; j++) {
            oADiv[j].style.display = 'none';
            for (var l = 0; l < oBtnDiv.length; l++) {
                oBtnDiv[l].style.display = 'none';
            }
        }
        oInitialDiv.style.display = 'none';
        oADiv[this.index].style.display = 'block';

    }
}
