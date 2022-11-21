// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('header div').style.cssText = '-webkit-app-region: drag;';
})