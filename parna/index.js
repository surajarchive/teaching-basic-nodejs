import fs from 'fs';

// fs.writeFile("parna.txt", "Hello Parna!", (err) => {
//     if (err) throw err;
//     console.log("File created successfully.");
// });
// read a file
fs.readFile("parna.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
});
