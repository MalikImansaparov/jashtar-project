import DOMPurify from "dompurify";

export const createMarkup = (html) => {
    DOMPurify.addHook('afterSanitizeAttributes', function (node) {
        if ('target' in node) {
            node.setAttribute('class', 'links');
        }
        if ('src' in node) {
            node.setAttribute('class', 'mx-[20px] my-[10px]');
        }
    });

    return {
        __html: DOMPurify.sanitize(html)
    };
};