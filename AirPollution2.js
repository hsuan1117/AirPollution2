/*
 * AIRpollution 空氣汙染
 * 文件: index.gs(後端)
 * 版本: V2.0.0
 */
class AirPollution {
	constructor(config) {
		this.config = config
	}
	load() {
		let config = this.config
		fetch(config.language_url).then(res => res.json()).then(function(result) {
			AirApp.translation = result
		})
		fetch(config.data_url).then(res => res.json()).then(function(result) {
			AirApp.airData = result
			AirApp.selectedArea = String([result[0]["SiteName"], result[0]["County"]])
			result.forEach(function(data, i) {
				AirApp.air.push({
					value: String([data["SiteName"], data["County"]]),
					label: String(data["County"] + " " + data["SiteName"])
				})
			})
		});
	}
}

