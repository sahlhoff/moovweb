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

	$$("#markets") {
		remove()
	}

	$$("#reorder"){
		insert_top("div", class:"mtv-zone", id:"mw_main") {
			move_here("/html/body//div[@id='mk-news']") {
				$$("#portfolio-news-stream"){
					add_class("mtv-items-div") 
					$$(".cluster") {
						add_class("mtv-div mtv-item")
					}
				}
			}
		}
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
				match(index(), "1") {
					add_class("mtv-selected")
				}
			}
		}
	}
}


