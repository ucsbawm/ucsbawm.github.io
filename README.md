# Instructions for Updating Website

Open Pycharm.

You should start by testing the website by running
```
npm run start
```
in Terminal (on Pycharm). This will host the website locally at https://localhost:3000/.
To stop the server, do Control C in the terminal.

If you're satisfied with your changes, you should 'track' your changes and commit them, which you can do by
```
git add .
git commit -m "<message>"
```

So far, this is still only a local thing. Now, you want to make these changes global, i.e., put them on the github repository. To do this, run
```
git push
```

Finally, to update the website itself (as it appears on https://ucsbawm.github.io/), you need to run
```
npm run deploy
```

Now you should be good to go! :)

