var textList = [];
eachText = {
    textTitle: "蔡司、徕卡认证不等于蔡司、徕卡元件",
    textTime: "2018-07-05 16:53:00",
    textContent: "很多普通用户看到这两类认证都会觉得很高大上，认为拥有认证的手机拍照效果一定比普通手机强很多，厂商也因此靠这些卖点来提高售价。先说蔡司认证，全称：卡尔·蔡司，这是德国一家百年以上历史的老牌光学企业，其主攻高端领域（远不仅是摄影摄像领域），玩过数码相机的应该都知道，其出品的镜头成像效果好，做工精良，价格也是高高在上，索尼旗下的不少相机都在使用卡尔蔡司镜头作为高端镜头群，由蔡司授权其进行生产。\n" +
    "然而蔡司认证就不一样了，获得蔡司认证的镜头并不是卡尔·蔡司生产的镜头，比方说一家公司设计制造了一个镜头，整个过程严格按照卡尔蔡司的认证标准进行，过程中可能会有来自蔡司的帮助和监督，镜头完成后交给蔡司进行检测和认证，获得认可后就可以获得“卡尔·蔡司”认证了，可以在手机上打上相应的logo，当然这里可能要交一笔不菲的认证费用，所以获得蔡司认证的镜头并非真正的“卡尔·蔡司”产品。"
};
textList.push(eachText);
eachText = {
    textTitle: "好思想，好生活。",
    textTime: "2017-08-26 13:00",
    textContent: "好思想，好生活。"
};
textList.push(eachText);
eachText = {
    textTitle: "剪不断，理还乱。",
    textTime: "2017-08-28 09:56",
    textContent: "剪不断，理还乱。"
};
textList.push(eachText);
eachText = {
    textTitle: "清官难断家务事。",
    textTime: "2017-08-28 09:57",
    textContent: "清官难断家务事。"
};
textList.push(eachText);
eachText = {
    textTitle: "工具就是工具",
    textTime: "2017-08-30 12:06",
    textContent: "对于人生的成功来说，工具是辅助因素，而不是决定因素。这些工具如电脑，手机等。"
};
textList.push(eachText);
eachText = {
    textTitle: "解决技术债务",
    textTime: "2017-08-31 12:39",
    textContent: "定期解决高优先级技术债务问题可以实现产品的持续健康度。"
};
textList.push(eachText);
eachText = {
    textTitle: "一曲《笑傲江湖》",
    textTime: "2017-09-05 18:27",
    textContent: "一曲《笑傲江湖》"
};
textList.push(eachText);
eachText = {
    textTitle: "评鲁迅",
    textTime: "2017-09-05 18:28",
    textContent: "看过鲁迅的文章，觉得这个人说的还是比较实在的，还是有些道理的。"
};
textList.push(eachText);
eachText = {
    textTitle: "业精于勤",
    textTime: "2017-09-19 17:36",
    textContent: "忙碌起来吧，小伙伴们！"
};
textList.push(eachText);
$(function () {
    showListByJson("content_block", textList, "content_template");
    fixBlockHeight();
});

function showFullContent(obj) {
    if ($(obj).is(".open_full")) {
        $(obj).removeClass("open_full").text("【展开全文】").siblings(".text_full_content").hide().prev().show();
    } else {
        $(obj).addClass("open_full").text("【收起全文】").siblings(".text_full_content").show().prev().hide();
    }
}

function fixBlockHeight() {
    var docHeight = $(document.body).height();
    $("#content_block").height(docHeight - 70);
    $("#resume_block").height(docHeight - 70);
}

window.onresize = function () {
    fixBlockHeight();
};

window.onscroll = function () {
    fixBlockHeight();
};
