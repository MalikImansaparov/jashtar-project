import {base} from "../../api/const";

export const downloadFile = async (url) => {
    fetch(`https://jashtar.prosoft.kg${url}`, {
        method: 'GET',
        // headers: {
        //     "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        // },
    })
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Kyrgyz-Republic.document.';
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        });
}