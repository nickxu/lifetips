var lifeTips = [];
eachData = {
    firstText: "好思想，好生活。",
    text_time: "Created at 2017-08-26 13:00"
};
lifeTips.push(eachData);
eachData = {
    firstText: "剪不断，理还乱。",
    text_time: "Created at 2017-08-28 09:56"
};
lifeTips.push(eachData);
eachData = {
    firstText: "清官难断家务事。",
    text_time: "Created at 2017-08-28 09:57"
};
lifeTips.push(eachData);
eachData = {
    firstText: "对于人生的成功来说，工具是辅助因素，而不是决定因素。这些工具如电脑，手机等。",
    text_time: "Created at 2017-08-30 12:06"
};
lifeTips.push(eachData);
eachData = {
    firstText: "定期解决高优先级技术债务问题可以实现产品的持续健康度。",
    text_time: "Created at 2017-08-31 12:39"
};
lifeTips.push(eachData);
eachData = {
    firstText: "一曲《笑傲江湖》",
    text_time: "Created at 2017-09-05 18:27"
};
lifeTips.push(eachData);
eachData = {
    firstText: "看过鲁迅的文章，觉得这个人说的还是比较实在的，还是有些道理的。",
    text_time: "Created at 2017-09-05 18:28"
};
lifeTips.push(eachData);
eachData = {
    firstText: "忙碌起来吧，小伙伴们！",
    text_time: "Created at 2017-09-19 17:36"
};
lifeTips.push(eachData);
$(function () {
    showListByJson("text_block", lifeTips, "tips_template");
});