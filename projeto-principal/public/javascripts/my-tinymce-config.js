tinymce.init({
  selector: "textarea#my-expressjs-tinymce-app",
  plugins: "lists link image table code help wordcount tinydrive media",
  resize: false,
  menu: {
    insert: { title: "Insert", items: "image link media insertfile" },
  },
  tinydrive_token_provider: "/jwt",
  license_key: "gpl",
});
