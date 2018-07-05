/**
 * 通用的JS
 */
// backbone.js
var SimpleData = Backbone.Model.extend({
    data: [],
    temp: "",
    renderType: "html"
});

var SimpleDataView = Backbone.View.extend({
    initialize: function (options) {
        this.render();
    },
    render: function () {
        _.templateSettings = {
            evaluate : /<@([\s\S]+?)@>/g,
            interpolate : /<@=([\s\S]+?)@>/g,
            escape : /<@-([\s\S]+?)@>/g
        };
        var temp = this.model.get("temp");
        var data = this.model.get("data");
        var renderType = this.model.get("renderType");
        var template = _.template($("#" + temp + "").html());
        //模板中使用点操作符来访问属性的，obj.name, 所以要 toJSON() 转换
        if(renderType != undefined && renderType == "append"){
            this.$el.append(template({data: data})); //fill in data append
        }else if(renderType != undefined && renderType == "after"){
            this.$el.after(template({data: data})); //fill in data after
        }else if(renderType != undefined && renderType == "before"){
            this.$el.before(template({data: data})); //fill in data before
        }else{
            this.$el.html(template({data: data})); //fill in data replace
        }

    }
});

/**
 * 将JSON数据加载到页面上
 * @param targetElementId 目标容器ID
 * @param dataContent 直接用于加载json
 * @param templateId 模板ID
 * @param renderType 生成的内容填充形式， html append after before
 * @param preDealFunc 预先处理调用的方法
 */
function showListByJson(targetElementId, dataContent, templateId, renderType, preDealFunc) {
    console.log("===========");
    if (targetElementId != undefined && dataContent != undefined && templateId != undefined
        && $("#" + targetElementId).length > 0 && $("#" + templateId).length > 0) {
        var tempRenderType = "html";
        if (renderType == undefined || renderType == "" || renderType == null) {
            tempRenderType = "html";
        }else{
            tempRenderType = renderType;
        }

        if (preDealFunc != undefined && preDealFunc != null) {
            dataContent = preDealFunc(dataContent);
        }

        var simpleData = new SimpleData({data: dataContent, temp: templateId, renderType: tempRenderType});
        var simpleDataView = new SimpleDataView({
            el: "#" + targetElementId,
            model: simpleData
        });
    }
}

/**
 * 通过Ajax访问URL获取json来加载到页面上
 * @param targetElementId 目标容器ID
 * @param dataUrl 访问URL
 * @param templateId 模板ID
 * @param renderType 生成的内容填充形式， html append after before
 * @param preDealFunc 预先处理调用的方法
 */
function showListByUrl(targetElementId, dataUrl, templateId, renderType, preDealFunc) {
    $.ajax({
        url: dataUrl,
        dataType: "json",
        crossDomain: false,
        success: function (data) {
            if(data != null && data.data != undefined){
                var dataContent = data.data;
                showListByJson(targetElementId, dataContent, templateId, renderType, preDealFunc);
            }
        }
    });
}