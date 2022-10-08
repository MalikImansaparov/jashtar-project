import DOMPurify from "dompurify";

export const createTemplate = (html) => {
    DOMPurify.addHook('afterSanitizeAttributes', function (node) {
        if ('target' in node) {
            node.setAttribute('class', 'links');
        }
        if ('src' in node) {
            node.setAttribute('class', 'shadows');
        }
    });
    return {
        __html: DOMPurify.sanitize(html)
    };
};