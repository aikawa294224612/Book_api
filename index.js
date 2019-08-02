var express = require('express');
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");

/* GET home page. */
var obj={
  "title" : "",
  "image" : "",
  "bookstores" : [
    {
      "name" : "博客來",
      "price" :"",
      "stock" : "",
      "link" : ""
    },
    {
      "name" : "誠品",
      "price" : "" ,
      "stock" : "",
      "link" : ""
    },
    {
      "name" : "金石堂",
      "price" : "",
      "stock" : "",
      "link" : ""
    }
  ]
};


// function format(price, link, stock, cart, index){
// 	console.log("format");
//     obj["bookstores"][index]["price"]=price;
//     obj["bookstores"][index]["link"]=link;

//     if(stock===cart){
//        obj["bookstores"][index]["stock"]="有庫存";                        
//     }else{
//        obj["bookstores"][index]["stock"]="無庫存";    
//     }
// }


router.get('/book/:isbn', function(req, res, next) {

	function getBook(){
		console.log("1");
    return new Promise((resolve, reject) => {
        request.get({
            url:'https://search.books.com.tw/search/query/key/'+req.params.isbn
            }, function(err,response,body) {
                if(!err){
                    var $ = cheerio.load(body);
                    var title = $('h3 a').attr("title");
                    var img = $('a .itemcov').attr("data-original");
                    var price_bo = $('.price strong b').eq(1).text();

                    obj["title"]=title;
                    obj["image"]=img;

                   
                    obj["bookstores"][0]["price"]=price_bo;
				    obj["bookstores"][0]["link"]="https:"+$('.cntlisearch08 a').attr("href");

				    if($('.price .btn_type01').eq(0).text()==="放入購物車"){
				       obj["bookstores"][0]["stock"]="有庫存";                        
				    }else{
				       obj["bookstores"][0]["stock"]="無庫存";    
				    } 
				    console.log("1END");
				    resolve();
				       
                }
            });
    });
}

		function getEslite(){
			console.log("2");
		    return new Promise((resolve, reject) => {
		        request.get({
		            url:'http://www.eslite.com/Search_BW.aspx?query='+req.params.isbn+'&searchType='
		            }, function(err,response,body) {
		                if(!err){
		                    var $ = cheerio.load(body);    
		                    var price_eslite = $('.price_sale font').text();
		                   
		                    obj["bookstores"][1]["price"]=price_eslite;
						    obj["bookstores"][1]["link"]=$('td h3 a').eq(1).attr("href");

						    if($('.input').attr("alt")==="放入購物車"){
						       obj["bookstores"][1]["stock"]="有庫存";                        
						    }else{
						       obj["bookstores"][1]["stock"]="無庫存";    
						    }   

						    console.log("2END");
						    resolve(); 
		                }
		            });
		    });
		}

		function getKing(){
			console.log("3");
		    return new Promise((resolve, reject) => {
		        request.get({
		            url:'https://www.kingstone.com.tw/new/search/search?q='+req.params.isbn
		            }, function(err,response,body) {
		                if(!err){
		                    var $ = cheerio.load(body);         
		                    var price_king = $('.buymixbox span b').eq(1).text();
		                    obj["bookstores"][2]["price"]=price_king;
						    obj["bookstores"][2]["link"]="https://www.kingstone.com.tw"+$('.pdnamebox a').attr("href");

						    if($('.btnbuyset a span').eq(0).text()==="加入購物車"){
						       obj["bookstores"][2]["stock"]="有庫存";                        
						    }else{
						       obj["bookstores"][2]["stock"]="無庫存";    
						    }   

						    console.log("3END");
						    resolve();
		                      
		                }
		            });
		    });
		}

		// function getRou(){
		// 	console.log("4");
		//     return new Promise((resolve, reject) => {
		//         request.get({
		//             url:'https://www.kingstone.com.tw/new/search/search?q='+req.params.isbn
		//             }, function(err,response,body) {
		//                 if(!err){
		//                     var $ = cheerio.load(body);         
		//                     var price_rou = $('.b-content .b-text-prime').text();
		                            
		                    
		//                     obj["bookstores"][3]["price"]=price_rou;
		//                     obj["bookstores"][3]["link"]="https://www.rakuten.com.tw"+$('.b-text b a').attr("href");
		//                 }
		//             });
		//     });
		// }

async function send(){
	await getBook();
	await getEslite();
	await getKing();

	res.json(obj);
}

send();
// async Promise.all([getBook(), getEslite(), getKing()])
// .then(
// 	// console.log("4")
//     res.json(obj)
//     );  
});


module.exports = router;
