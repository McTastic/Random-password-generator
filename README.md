# 03 JavaScript: Password Generator

Made a random password generator using arrays of capital letters, lowercase letters, symbols and numbers. I then use the .concat method to attach arrays together which allows the user to choose which things they do and do not want in their final password. 

The button can be clicked multiple times without refreshing the page since I created a blank array at the top of the function. This allows the function to repeat without adding characters to the end of the string which would force the user to refresh the page to get another password. 

To get the password on the screen, I took the final array created by the function and converted it into a string using the .join method which allows the final password to display without comma separated values. See screenshot below which demonstrates an example passwword being generated. 
