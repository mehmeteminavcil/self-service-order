import multer from "multer"


const getExtension = (mimetype) => {
    switch (mimetype) {
      case "image/jpeg":
        return ".jpeg"
      case "image/png":
        return ".png"
      default:
        return ""
    }
  }

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/products/"); // Set upload directory
  },
  filename: function (req, file, cb) {
    cb(null, `image-${Date.now()}${getExtension(file.mimetype)}`); // Set uploaded file name
  },
});
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/products/"); // Set upload directory
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}${getExtension(file.mimetype)}`); // Set uploaded file name
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(new Error("Invalid file type"), false);
//   }
// };

// const upload = multer({ storage, fileFilter });
const upload = multer({ storage});

export default upload;