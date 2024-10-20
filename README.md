# DocNest Documentation

This project is a real-time collaborative document editor built using React, Quill, and Socket.IO. It allows multiple users to collaborate on text documents simultaneously, with features such as rich text editing, real-time updates, and document downloading and uploading.

## Features

- **Real-time Collaboration:** Multiple users can edit a document simultaneously, with changes reflected in real time using Socket.IO.
- **Rich Text Editor:** Built using Quill.js, the editor supports a wide range of formatting options, such as bold, italics, lists, links, and more.
- **Document Save and Load:** Users can download their documents in a custom `.ptx` format and upload saved files to continue editing.
- **Toolbars and Shortcuts:** Various text formatting options via toolbar.
- **File Upload/Download Support:** You can download the content as a file and upload previously saved files.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Basic knowledge of Vite React and Socket.IO

### Installation

1. Clone the repository:
   ```bash
   git clone hhttps://github.com/frontenddeveloperpraveen/Docnest.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Docnest
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the Socket.IO server (assuming the server is hosted locally):

   ```bash
   node server.js
   ```

2. Start the React app:

   ```bash
   npm start
   ```

3. Open your browser and navigate to:

   ```bash
   http://localhost:5173
   ```

### File Operations

- **Download Document:** Click on the download button to save the document in `.ptx` format.
- **Upload Document:** Use the file input to upload a previously saved `.ptx` file and load it into the editor.

## Code Explanation

- **ReactQuill:** Used to create a rich text editor with customizable toolbar options.
- **Socket.IO:** Establishes real-time communication between clients and the server for live updates.
- **useEffect Hooks:** Manage side effects like initializing sockets and Quill editors, handling changes, and cleanup.

### Key Code Blocks

- **Quill Editor Initialization:**

  ```js
  const q = new Quill(editor, {
    theme: "snow",
    modules: {
      toolbar: toolbarOptions,
    },
  });
  setQuill(q);
  ```

- **Socket.IO for Real-Time Updates:**

  ```js
  socket.on("recieve-changes", handler);
  quill.on("text-change", handler);
  ```

- **Download Feature:**
  ```js
  const content = quill.getContents();
  const contentString = JSON.stringify(content);
  // ...save the content as .ptx file
  ```

## Customization

- **Toolbar:** You can customize the editor’s toolbar options by modifying the `toolbarOptions` array.
- **Socket.IO Server:** Ensure you have the correct endpoint for your Socket.IO server.

## License

This project is open-source and free to use.
