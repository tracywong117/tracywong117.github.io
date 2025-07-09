import MarkdownIt from 'markdown-it'
import markdownItMathjax3 from 'markdown-it-mathjax3'
import markdownItHighlightjs from 'markdown-it-highlightjs'
import calloutPlugin from './callout-plugin.js';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})
  .use(markdownItMathjax3)
  .use(markdownItHighlightjs)
  .use(calloutPlugin);

export default md