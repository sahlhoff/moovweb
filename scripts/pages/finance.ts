
$$("body"){

	$$("#gb"){
		remove()
	}

	$$("#related"){
		remove()
	}

	$(".//div[@id='gf-viewc']//div[contains(@class, 'g-tpl-right-1')]//div[@class='g-unit']"){
		add_class("_finance")
	}


	mtv_ajaxify("//div[@id='gf-viewc']//div[contains(@class, 'g-tpl-right-1')]//div[@class='g-unit']")
	log($response)

}

