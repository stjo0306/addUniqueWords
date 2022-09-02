This code was put together using
  NodeJS v14.20.0
  npm v6.14.17

Running the code in windows

you can modify the `inArray.json` list of works to update the "starting" array of words
you can modify the `addArray.json` list of works to update the array of words to be added

open command prompt where the program is dropped and run the following command:

`C:\path\to\executable>adduniquewords.exe`

Development:

`npm install` to install the packages necessary to develop this program
`npm start` will run the code natively using node
`npm run build:windows` will package the project into an executable file under the `dist/` directory


**Note:** The additional 'testArray.json' file is used for testing the result.
If you modify the other arrays make sure to modify the 'testArray.json' to what is expected out.
