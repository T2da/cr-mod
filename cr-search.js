(function(n){function t(n,t,i){let r=new Fuse(t,{keys:["text"]}),u=r.search(n);return u.slice(0,i).map(n=>n.item)}function i(n,t,i){return t.filter(function(n){return n.text.toLowerCase}).slice(0,i)}n.fn.crSearch=function(r){let u=n.extend({minCharsToShowMenu:3,object:[],maxResults:5,placeholderText:"Enter a query",noResultsText:"No results",showImage:!0,useNaturalLanguage:!1,onSelect:null},r);return this.each(function(){let r=n(this),f=n('<div class="suggestions-container"><\/div>');r.attr("placeholder",u.placeholderText);let e=n('<i class="clear-icon fas fa-times"><\/i>');r.after(e);e.on("click",function(){r.val("").focus();f.empty().hide();e.hide()});r.on("input",function(){let o=r.val().trim();if(f.empty().hide(),e.toggle(o.length>0),o.length>=u.minCharsToShowMenu){let e;if(e=u.useNaturalLanguage?t(o,u.object,u.maxResults):i(o,u.object,u.maxResults),e.length>0)n.each(e,function(t,i){let e=n('<div class="suggestion"><\/div>');if(u.showImage){let t=n('<img class="suggestion-image" src="'+i.imageUrl+'">');e.append(t)}let o=n('<div class="suggestion-text">'+i.text+"<\/div>");e.append(o);e.on("click",function(){if(r.val(i.text),f.empty().hide(),typeof u.onSelect=="function")u.onSelect(i)});f.append(e)}),f.insertAfter(r).show();else{let t=n('<div class="no-results">'+u.noResultsText+"<\/div>");f.append(t);f.insertAfter(r).show()}}});r.on("keyup",function(n){let t=r.val().trim();t.length===0&&n.keyCode===8&&(f.empty().hide(),e.hide())});n(document).on("click",function(t){n(t.target).closest(".suggestions-container").length||n(t.target).is(r)||(f.empty().hide(),e.hide())})})}})(jQuery);
