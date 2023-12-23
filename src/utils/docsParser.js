import mammoth from "mammoth";

const docsParser = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      const uint8Array = new Uint8Array(arrayBuffer);

      mammoth
        .extractRawText({ arrayBuffer: uint8Array })
        .then((result) => {
          resolve(result.value);
        })
        .catch((error) => {
          reject(error);
        });
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
};

export default docsParser;
