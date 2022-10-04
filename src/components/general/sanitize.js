import sanitize from "sanitize-html";

export const Sanitized = ({ html = "" }) => {
    const sanitized = sanitize(html, {
        allowedClasses: {
            'a': [ 'links' ]
        },
        transformTags: {
            'a': function(tagName, attribs) {
                return {
                    tagName,
                    attribs: {...attribs, class: 'links'},
                };
            }
        }
    });
    return <span dangerouslySetInnerHTML={{ __html: sanitized }} />;
};
