import markdownit from 'markdown-it';
import anchor from 'markdown-it-anchor';
import attrs from 'markdown-it-attrs';
import headerSections from 'markdown-it-header-sections';
import implicitFigures from 'markdown-it-implicit-figures';
import hljs from 'highlight.js';

// setup markdown parser
let md = markdownit({
  html: true,  // allow html in source
  linkify: true,  // parse URL-like text to links
  langPrefix: '',  // no prefix in class for code blocks
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      // highlight supported languages
      try {
        return hljs.highlight(lang, str).value;
      } catch(e) {}
    }
    if (!lang) {
      // autodetect language
      try {
        return hljs.highlightAuto(str).value;
      } catch(e) {}
    }
    // do not highlight unsupported or undetected
    return '';
  }
});

md.use(attrs)
  .use(headerSections)
  .use(implicitFigures)
  .use(anchor)
  .linkify.tlds('.py', false);  // linkify: turn of .py top level domain;

module.exports = md;
