/*
 * AIRpollution 空氣汙染
 * 文件: index.gs(後端)
 * 版本: V2.0.0
 */
var AIRpollution_backendSettings = {
	"API_pollutionURL": "https://opendata.epa.gov.tw/ws/Data/AQI/?$format=json",
	"githubSettings": {
		repoOwner: "",
		repoName: "",
		uploadPath: "",
		scriptProjectName: "",
		fileName: "AIRpollution-data_zh-TW.js",
		siteName: "",
		token: "",
		branch: "data"
	},
	"gitlabSettings": {
		siteName: "",
		uploadPath: "",
		fileName: "AIRpollution-data_zh-TW.js",
		uploadBranch: "",
		scriptProjectName: "",
		repoId: "",
		token: ""
	}
}

function getData() {
	var AIRdata = UrlFetchApp.fetch(AIRpollution_backendSettings.API_pollutionURL, {
		"method": "GET"
	}).getContentText('utf-8');
	var result = GithubUploader(
		AIRdata,
		AIRpollution_backendSettings.githubSettings
	)
	Logger.log(result)
}

function setTrigger() {
	ScriptApp.newTrigger("空汙每小時更新資料")
		.timeBased()
		.everyHours(1)
		.create();
}
