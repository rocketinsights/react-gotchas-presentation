export default {
  repository: 'https://github.com/rocketinsights/react-gotchas-presentation', // project repo
  docsRepository: 'https://github.com/rocketinsights/react-gotchas-presentation', // docs repo
  branch: 'master', // branch of docs
  path: '/', // path of docs
  titleSuffix: ' – Dept',
  nextLinks: true,
  prevLinks: true,
  search: false,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: false,
  footer: true,
  footerText: `Niksa Janjic, 26 May 2021 © Dept`,
  footerEditOnGitHubLink: false, // will link to the docs repo
  logo: <>
    <img src="/logo.png" style={{ marginRight: 180 }} width="120" />
    <span><b>Curriculum</b> - React Gotchas</span>
  </>,
  head: <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Nextra: the next docs builder" />
    <meta name="og:title" content="Nextra: the next docs builder" />
  </>
}