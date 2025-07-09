// src/blog/posts.js
const postFiles = import.meta.glob('./*.md', { as: 'raw', eager: true });

function parseFrontmatter(markdown) {
  const match = /^---\n([\s\S]+?)\n---/.exec(markdown);
  if (!match) return {};
  const lines = match[1].split('\n');
  const obj = {};
  let currentKey = null;
  lines.forEach(line => {
    // key: value
    if (/^(\w+):\s*(.*)$/.test(line)) {
      const [_, key, value] = line.match(/^(\w+):\s*(.*)$/);
      if (value === '') {
        obj[key] = [];
        currentKey = key;
      } else {
        obj[key] = value;
        currentKey = null;
      }
    } else if (/^\s*-\s*(.*)$/.test(line) && currentKey) {
      obj[currentKey].push(line.replace(/^\s*-\s*/, ''));
    }
  });
  return obj;
}

export const posts = Object.entries(postFiles).map(([path, raw]) => {
  const frontmatter = parseFrontmatter(raw);
  const slug = path.match(/\.\/(.+)\.md$/)[1];
  return {
    ...frontmatter,
    slug,
    raw,
  };
}).sort((a, b) => b.date.localeCompare(a.date));