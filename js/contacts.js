/**
 * Created by Administrator on 2017/4/6 0006.
 */
    //用户点击按钮产生效果
    textedit();



function textedit() {
    var oContacts_apply = document.getElementsByClassName('contacts_apply')[0].getElementsByTagName('input');
    var oContacts_span = document.getElementsByClassName('contacts_apply')[0].getElementsByTagName('span');
    var oContacts_textarea = document.getElementsByClassName('contacts_apply')[0].getElementsByTagName('textarea');

    oContacts_apply[0].addEventListener('click',function () {
        oContacts_span[0].style.backgroundPositionY = -43+'px';
        oContacts_apply[0].setAttribute('placeholder','');

        oContacts_apply[0].addEventListener('mouseout',function () {
            oContacts_span[0].style.backgroundPositionY = 0+'px';
            oContacts_apply[0].setAttribute('placeholder','填写您的姓名或名称');

        });


    });




    oContacts_apply[1].addEventListener('click',function () {
        oContacts_span[1].style.backgroundPositionY = -43+'px';
        oContacts_apply[1].setAttribute('placeholder','');

        oContacts_apply[1].addEventListener('mouseout',function () {
            oContacts_span[1].style.backgroundPositionY = 0+'px';
            oContacts_apply[1].setAttribute('placeholder','填写您的联系邮箱');
        });
    });


    oContacts_apply[2].addEventListener('click',function () {
        oContacts_span[2].style.backgroundPositionY = -43+'px';
        oContacts_apply[2].setAttribute('placeholder','');

        oContacts_apply[2].addEventListener('mouseout',function () {
            oContacts_span[2].style.backgroundPositionY = 0+'px';
            oContacts_apply[2].setAttribute('placeholder','填写您的电话或手机');
        });
    });



    oContacts_apply[3].addEventListener('click',function () {
        oContacts_span[3].style.backgroundPositionY = -43+'px';
        oContacts_apply[3].setAttribute('placeholder','');

        oContacts_apply[3].addEventListener('mouseout',function () {
            oContacts_span[3].style.backgroundPositionY = 0+'px';
            oContacts_apply[3].setAttribute('placeholder','填写您的地址或公司地址');
        });

    });


    oContacts_textarea[0].addEventListener('click',function () {
        oContacts_span[4].style.backgroundPositionY = -139+'px';
        oContacts_textarea[0].setAttribute('placeholder','');
        oContacts_textarea[0].innerHTML = "";

        oContacts_textarea[0].addEventListener('mouseout',function () {
            oContacts_textarea[0].innerHTML = "";
            oContacts_span[4].style.backgroundPositionY = 0+'px';

            var string = "浙江省杭州市西湖区文一路学院路口，电话：0-18313327175\r全力打造国内互联网品牌建设，服务于各种企业品牌平台\r\r联系QQ： 850309997 \r\r专注冰艺互动QQ群： 106677219\r\r\rEfforts to build domestic Internet brand building, and serve a variety of enterprise plaforms ..";
            oContacts_textarea[0].innerHTML = string;
            oContacts_textarea[0].style.color = "#ccc";
            // oContacts_textarea[0].setAttribute('placeholder',string);
        });

    });


     var oContacts_apply_btn  =document.getElementsByClassName('contacts_apply_btn')[0];
    oContacts_apply_btn.addEventListener('click',function () {
            alert('请输入姓名或名称');
    });





}


