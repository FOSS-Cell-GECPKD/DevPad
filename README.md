# Dev Pad

[![Join the chat at https://gitter.im/FOSS-Cell-GECPKD/DevPad](https://badges.gitter.im/FOSS-Cell-GECPKD/DevPad.svg)](https://gitter.im/FOSS-Cell-GECPKD/DevPad?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Dillinger is a Blog App, based on HTML content based post, made with MERN and Material UI.

# Features

- Users could create html based content as posts

Upcoming features:

- Any users can log into this web app and view the content. signup is only needed for post creations
- User can down the post content

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email. As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is _actually_ written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech

Dillinger uses a number of open source projects to work properly:

- [ReactJS](https://reactjs.org/) - Javascript based web framework!
- [MongoDB](https://www.mongodb.com/) - Simple and Efficient No SQL Database.
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Material UI] - great UI boilerplate for modern web apps
- [VS Code](https://code.visualstudio.com/) - efficient and light weight text editor

And of course DevPad is a open source project with a [public repository](https://github.com/FOSS-Cell-GECPKD/DevPad)[dill]
on GitHub.

### Installation

DevPad requires [Node.js](https://nodejs.org/) v4+ to run on local system

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/FOSS-Cell-GECPKD/DevPad.git
$ cd devpad
$ cd blog
$ npm install
$ cd ..
$ cd blog-backend
$ npm install
$ npm run dev
```

### Development

DevPad uses MERN Stack for fast developing.
Want to contribute? Great!
Mention it on gitter link above and make your contribution.

### Todos

- JWT creditials
- Edit and remove section

## License

MIT

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[dill]: https://github.com/joemccann/dillinger
[git-repo-url]: https://github.com/FOSS-Cell-GECPKD/DevPad
[john gruber]: http://daringfireball.net
[df1]: http://daringfireball.net/projects/markdown/
[node.js]: http://nodejs.org
[twitter bootstrap]: http://twitter.github.com/bootstrap/
[jquery]: http://jquery.com
[@tjholowaychuk]: http://twitter.com/tjholowaychuk
[express]: http://expressjs.com
[angularjs]: http://angularjs.org
[gulp]: http://gulpjs.com
[pldb]: https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md
[plgh]: https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md
[plgd]: https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md
[plod]: https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md
[plme]: https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md
[plga]: https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md
