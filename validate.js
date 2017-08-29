/**
 * Created by cjj on 2017/8/23.
 */

function CjjValidate(e,reg,text){
    this.e = e;
    this.reg = reg;
    this.text = text;
}
CjjValidate.prototype = {
    constructor : CjjValidate,
    CjjFocus : function(){
        this.e.parentNode
    }

}