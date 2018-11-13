new Vue({
    el: '#home',
    data: {
        url: wxurl,
        mun:0,
        islike:0,

    },
    mounted: function () {
        var _this = this;
//人数
        $.ajax({
            url: _this.url + "getlike",
            type: "post",
            dataType: "json",
            data: {type:9},
            success: function (res) {
            	console.log(res);
            	if(res.type==200){
            		_this.mun=res.object.count;
            		_this.islike=res.object.islike;
            		if(_this.mun>1000){
			  		_this.mun=(_this.mun/1000).toFixed(1)+"k";
			  	}else{
			  		_this.mun=_this.mun;
			  	}
            	}
            }
        })
        
        
        
    },
    methods: {
       
        //获取Url参数
        getParameter: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return decodeURI(r[2])
            } else {
                return false;
            }
        },
        //点赞
        likebtn: function () {
            var _this = this;
            if(_this.islike==0){
            	 $.ajax({
                url: _this.url + "like",
                type: "post",
                dataType: "json",
                data: {type:9,name:'金属件业务单元'},
                success: function (res) {
                	console.log(res);
                    if (res.type == 200) {
                    	_this.islike=1;
                     _this.mun++;
                     if(_this.mun>1000){
			  		_this.mun=(_this.mun/1000).toFixed(1)+"k";
			  	}else{
			  		_this.mun=_this.mun;
			  	}

                    }

                }
            })
            }else if(_this.islike==1){
            	 $.ajax({
                url: _this.url + "like",
                type: "post",
                dataType: "json",
                data: {type:9,name:'金属件业务单元'},
                success: function (res) {
                	console.log(res);
                    if (res.type == 200) {
                    	_this.islike=0;
                     _this.mun--;
                     if(_this.mun>1000){
			  		_this.mun=(_this.mun/1000).toFixed(1)+"k";
			  	}else{
			  		_this.mun=_this.mun;
			  	}

                    }

                }
            })
            }
           


        },

        
    }
})