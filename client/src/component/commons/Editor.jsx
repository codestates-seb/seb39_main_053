import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({ placeholder, value, onChange, ...props }) => {
    const toolbarOptions = [
        ["link", "image", "video"],
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
      ]; 
      const modules = {
        toolbar: {
          container: toolbarOptions,
        },
      };

    return (
      <ReactQuill
        {...props}
        placeholder="내용을 적어주세요!"
        value={value || ""}
        theme="snow" 
        modules={modules}
        formats={formats}
        onChange={onChange}
        readOnly={props.viewer}
      ></ReactQuill>
    );
  };

  export default Editor
  export const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "background",
    "color",
    "link",
    "image",
    "video",
    "width",
  ];