// const zh = require("./zh")
import zh from './zh'
import en from './en'
import ja from './ja'

let i18n = ja  // デフォルトは日本語

try {
    const res = tt.getSystemInfoSync();
    const lang = res.language ? res.language.toLowerCase() : '';

    // 言語コードに基づいて適切な翻訳を選択
    switch (true) {
        case lang.startsWith('en'):  // 英語の判定
            i18n = en;
            break;
        case lang.startsWith('zh'):  // 中国語の判定
            i18n = zh;
            break;
        default:
            i18n = ja;  // その他の言語の場合は日本語
    }
    
    console.log('Current language:', lang);
} catch (error) {
    console.log('Error getting system language:', error);
}

export default i18n;
