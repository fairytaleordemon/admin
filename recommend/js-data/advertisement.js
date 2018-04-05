var recommendData={
	pagelist:function(data,callback){
		$.getJSON("/server/recommend/admin/recommend/info/pagelist.json",data,function(json){
			callback(json);
		});
	},
	del:function(id,callback){
		$.getJSON("/server/recommend/admin/recommend/info/delete.json",{id:id},function(){
			callback();
		});
	},
	detail:function(id,callback){
		$.getJSON("/server/recommend/admin/recommend/info/detail/"+id+".json",function(json){
			callback(json);
		});
	},	
	save:function(data,callback){
		$.post("/server/recommend/admin/recommend/info/save.json",data,function(json){
			callback(json);
		});
	}	
};