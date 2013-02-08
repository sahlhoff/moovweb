$$("body"){
	table_dump(".//table")

	$$("#summary"){
	remove()
	}

	remove(".//div[@id='ad']")

	$$("#country-widget"){
		remove()
	}

	$$("#gb"){
		remove()
	}

	$$("#gf-foot"){
		remove()
	}

	$$("#reorder"){
		insert_top("div", class:"mtv-zone")
	}

	$$("#appbar"){
		remove()
	}

	$$("#trend"){
		remove()
	}

	$$("div.fjfe-recentquotes"){
		remove()
	}

	$$("#gf-nav"){
		remove()
	}

	$$("div.miniPort"){
		add_class("mtv-zone")
		$$("#portfolio1"){
			add_class("mtv-items-div")
			
			$$("div.symbol.mw_was_td"){
				add_class("mtv-div mtv-item")
				attribute("data-mtv-component", "ajax")
				attribute("data-mtv-target", "0")
			}
		}
	}
}


