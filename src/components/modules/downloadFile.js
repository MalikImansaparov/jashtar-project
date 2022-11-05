

export const downloadFile = async (url) => {
     const name = url.toString();
     const arr = name.split('/');
     const filename = arr[arr.length - 1];
     fetch(`https://jashtar.info${url}`, {
       headers: {
         accept:
           'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
       },
     })
       .then((response) => response.blob())
       .then((blob) => {
         const url = window.URL.createObjectURL(new Blob([blob]));
         const link = document.createElement('a');
         link.href = url;
         link.download = filename;
         document.body.appendChild(link);
         link.click();
         link.parentNode.removeChild(link);
       });
}