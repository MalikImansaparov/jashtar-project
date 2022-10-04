import DOMPurify from "dompurify";

DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    if ('target' in node) {
        node.setAttribute('class', 'links');
    }
});

export const createMarkup = (html) => {
    return {
        __html: DOMPurify.sanitize(html)
    };
};