## BitBlog

Simple React application for showing blog posts and authors

#### Note#1 Steps to deploy a project with GitHub Pages

1.  https://github.com/gitname/react-gh-pages
	How to deploy the project with `gh-pages`

2.  https://github.com/rafrex/spa-github-pages
	How to solve issue with `BrowserRouter` when reloading the page

3.  https://github.com/facebook/create-react-app/issues/1765#issuecomment-327615099
	To solve the problem with 'homepage' part of the url, as this comment suggests, add `basename` attribute to `BrowserRouter`

	```javascript
	<BrowserRouter  basename={process.env.PUBLIC_URL}>
	{/* routes */}
	</BrowserRouter>
	```