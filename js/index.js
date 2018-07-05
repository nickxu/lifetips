var lifeTips = [];
eachData = {
    textTitle: "好思想，好生活。",
    textTime: "2017-08-26 13:00",
    textContent: "好思想，好生活。"
};
lifeTips.push(eachData);
eachData = {
    textTitle: "剪不断，理还乱。",
    textTime: "2017-08-28 09:56",
    textContent: "剪不断，理还乱。"
};
lifeTips.push(eachData);
eachData = {
    textTitle: "清官难断家务事。",
    textTime: "2017-08-28 09:57",
    textContent: "清官难断家务事。"
};
lifeTips.push(eachData);
eachData = {
    textTitle: "工具就是工具",
    textTime: "2017-08-30 12:06",
    textContent: "对于人生的成功来说，工具是辅助因素，而不是决定因素。这些工具如电脑，手机等。"
};
lifeTips.push(eachData);
eachData = {
    textTitle: "解决技术债务",
    textTime: "2017-08-31 12:39",
    textContent: "定期解决高优先级技术债务问题可以实现产品的持续健康度。"
};
lifeTips.push(eachData);
eachData = {
    textTitle: "一曲《笑傲江湖》",
    textTime: "2017-09-05 18:27",
    textContent: "一曲《笑傲江湖》"
};
lifeTips.push(eachData);
eachData = {
    textTitle: "评鲁迅",
    textTime: "2017-09-05 18:28",
    textContent: "看过鲁迅的文章，觉得这个人说的还是比较实在的，还是有些道理的。"
};
lifeTips.push(eachData);
eachData = {
    textTitle: "业精于勤",
    textTime: "2017-09-19 17:36",
    textContent: "忙碌起来吧，小伙伴们！"
};
lifeTips.push(eachData);
$(function () {
    showListByJson("content_block", lifeTips, "content_template");
});