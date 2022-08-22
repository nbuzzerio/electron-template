const videoElement = document.querySelector('video')
const startBtn = document.querySelector('#startBtn')
const stopBtn = document.querySelector('#stopBtn')
const videoSelectBtn = document.querySelector('#videoSelectBtn')
videoSelectBtn.onclick = getVideoSources

const { ipcRenderer, remote, Menu} = require('electron')

async function getVideoSources() {

const desktopCapturer = {
  getSources: (opts) => ipcRenderer.invoke('DESKTOP_CAPTURER_GET_SOURCES', opts)
}

    const videoOptionsMenu = Menu.buildFromTemplate(
        desktopCapturer.map(source => {
            return {
                label: source.name,
                click: () => selectSource(source)
            }
        })
    )

    videoOptionsMenu.popup()
}