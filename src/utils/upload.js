import { storage } from "./../firebase/firebase";

const uploadToStorage = async file => {
  console.log(file);
  const fileName = `${new Date().getTime()}-${file.name}.jpg`;
  console.log(fileName);
  const upload = new Promise((resolve, reject) => {
    if (!file) {
      return reject({
        status: "File not found"
      });
    }
    const uploadTask = storage.ref("/").child(`${fileName}`);
    uploadTask.put(file).on(
      "state_changed",
      function(snapshot) {
        let getProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(getProgress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log(`Upload is running for ${file.name}`);
            break;
          default:
            console.log("Default mod");
        }
      },
      function(error) {
        reject({
          status: "error",
          errorMessage: "File not uploaded"
        });
      },
      function() {
        resolve({
          status: "success",
          fileName,
          originalName: file.name
        });
      }
    );
  });
  return upload;
};

export default uploadToStorage;

// const uploadTask = storage
//   .ref("/")
//   .child(`${new Date().getTime()}-${file.name}.jpg`);

// uploadTask.put(file).on(
//   "state_changed",
//   function(snapshot) {
//     var getProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     setProgress(getProgress);
//   },
//   function(error) {
//     alert("hata", error);
//   },
//   function() {
//     const updatedFiles = files.filter(
//       deletefile => file.name != deletefile.name
//     );
//     console.log("bitti", updatedFiles);
//     console.log("files", files);
//     database.ref("/doruk").push({
//       photo: `${new Date().getTime()}.jpg`
//     });

//     return setFiles(updatedFiles);
//   }
// );
