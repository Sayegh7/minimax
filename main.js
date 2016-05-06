const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

app.on('window-all-closed', function(){
	if(process.platform!='darwin'){
		app.quit();
	}
});


app.on('ready', function(){
	mainWindow = new BrowserWindow({width: 800, height: 600});
	mainWindow.loadURL('https://polar-lowlands-35381.herokuapp.com/');
	//mainWindow.openDevTools();
	mainWindow.on('close', function(){
		mainWindow = null;
	})
})


app.on('')