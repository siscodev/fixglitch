const Applet = imports.ui.applet;
const Mainloop = imports.mainloop;

class FixGlitch extends Applet.Applet {
    _looper = null;
    _loopInterval = 2;
    _panel  = null;

    constructor(orientation, panel_height, instance_id) {
        super(orientation, panel_height, instance_id);

        this._panel  = this.panel;
        this._looper = Mainloop.timeout_add_seconds(this._loopInterval, () => this.loop());
    }

    loop(){

        // if the parent panel is in edit mode then
        // we add a class to style the applet for
        // visiblity, this way we can move it to where 
        // it needs to be  
        let iseditmode = this._panel._panelEditMode
        let classname  = ( iseditmode ) ? "glitchfix-editmode"  : "glitchfix-hidden"
        this.actor.style_class = classname

        // restart the looper
        this._looper = Mainloop.timeout_add_seconds(this._loopInterval, () => this.loop());
    }
}

function main(metadata, orientation, panel_height, instance_id) {
    return new FixGlitch(orientation, panel_height, instance_id);
}