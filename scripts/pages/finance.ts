$("/html/head") {
  remove()
}

$$("body"){

	$$("#gb"){
		remove()
	}

	$$("#related"){
		remove()
	}

	$$("#newstabsgroup"){
		remove()
	}

	$$("#r-perf"){
		remove()
	}

	$$("#gf-nav"){
		remove()
	}

	$$("#related"){
		remove()
	}

	$$("#reorder"){
		remove()
	}

	$$("#gf-foot"){
		remove()
	}

	$$("#news_div_cont"){
		remove()
	}

	$$("#ad"){
		remove()
	}

	$$("#stocktwits"){
		remove()
	}

	$$("#news-footer"){
		remove()
	}

	$$("div.event"){
		remove()
	}

	$$("div.sfe-section"){
		remove()
	}

	$$("div.hdg"){
		remove()
	}

	$$("div.appbar-right"){
		remove()
	}

	$$("div.appbar-add"){
		remove()
	}

	$$("#compare-bar"){
		remove()
	}


  $(".//div[@id='gf-viewc']//div[contains(@class, 'g-tpl-right-1')]//div[@class='g-unit']"){
	   add_class("_finance")
    
	}

	mtv_ajaxify("//div[@id='gf-viewc']//div[contains(@class, 'g-tpl-right-1')]//div[@class='g-unit']")
	log($response)

}

