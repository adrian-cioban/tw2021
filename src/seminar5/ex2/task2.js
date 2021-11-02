//scrieți o aplicație simplă care creează un director, un fișier în director și
//apoi șterge directorul (puteți utiliza rimraf)

const fs = require("fs");
const dir = "./dir";

if (!fs.existsSync(dir)) {
  fs.mkdir(dir, { recursive: true }, function (error) {
    if (error) {
      return error;
    }
    console.log("Created the folder");
    fs.writeFile(dir + "/file.txt", "test", () => {
      console.log("Created the file");
    });
    fs.rmdir(dir, { recursive: true, force: true }, (error) => {
      if (error) {
        return error;
      }
      console.log("Deleted the folder");
    });
  });
}
