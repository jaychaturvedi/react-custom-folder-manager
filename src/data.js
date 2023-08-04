export default {
  isFolder: true,
  name: "root",
  folders: [
    {
      isFolder: false,
      name: "my file"
    },
    {
      isFolder: true,
      name: "nested folder 1 2",
      folders: [
        {
          name: "folder 1 2 1",
          isFolder: true,
          folders: [
            {
              name: "folder 1 2 1",
              isFolder: true,
              folders: []
            },
            {
              isFolder: false,
              name: "file 1 2 2"
            }
          ]
        },
        {
          isFolder: false,
          name: "file 1 2 2"
        }
      ]
    },
    {
      isFolder: true,
      name: "folder 1 2",
      folders: [
        {
          name: "folder 1 2 1",
          isFolder: true,
          folders: [
            {
              name: "folder 1 2 1",
              isFolder: true,
              folders: []
            },
            {
              isFolder: false,
              name: "file 1 2 2"
            }
          ]
        },
        {
          isFolder: false,
          name: "file 1 2 2"
        }
      ]
    },
    {
      isFolder: false,
      name: "folder 1 3"
    }
  ]
};
