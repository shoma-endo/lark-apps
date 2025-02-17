// const zh = require("./zh")
import zh from './zh'
import en from './en'
import ja from './ja'

let i18n = en
try {
    var res = tt.getSystemInfoSync();
    if (res.language) {
        if (res.language.indexOf('zh') !== -1) {
            i18n = zh;
        } else if (res.language.indexOf('ja') !== -1) {
            i18n = ja;
        }
    }
    console.log(res)
} catch (error) {
    console.log(error);
}

export default i18n;
