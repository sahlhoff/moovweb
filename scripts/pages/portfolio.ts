$$("body"){
	table_dump(".//table")

	$$("#summary"){
	remove()
	}

	remove(".//div[@id='ad']")

	$$("#country-widget"){
		remove()
	}

	$$("#gf-foot"){
		remove()
	}



	$$("#trend"){
		remove()
	}

	$$("div.fjfe-recentquotes"){
		remove()
	}

	$$("#gf-nav"){
		add_class("mtv-zone")
		$$("#navmenu"){
			add_class("mtv-items-div")

			$$("li.fjfe-nav-item"){
			add_class("mtv-div mtv-item")
		}
		}

	}

	$$("div.miniPort"){
		add_class("mtv-zone")
		$$("#portfolio1"){
			add_class("mtv-items-div")
			
			$$("div.symbol.mw_was_td"){
				add_class("mtv-div mtv-item")
			}
		}
	}
}


