

export const downloadFile = async (url) => {
    fetch(`https://jashtar.prosoft.kg${url}`, {
        headers: {
            accept: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        },
    })
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.download = "a.docx";
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        });
}