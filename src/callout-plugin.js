// callout-plugin.js
export default function calloutPlugin(md) {
  const calloutTypes = {
    note: {
      label: "Note",
      icon: `<svg class="w-5 fill-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`
    },
    tip: {
      label: "Tip",
      icon: `<svg class="w-5 fill-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/></svg>`    
    },
    important: {
      label: "Important",
      icon: `<svg class="w-5 fill-yellow-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`    
    },
    warning: {
      label: "Warning",
      icon: `<svg class="w-5 fill-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M248.4 84.3c1.6-2.7 4.5-4.3 7.6-4.3s6 1.6 7.6 4.3L461.9 410c1.4 2.3 2.1 4.9 2.1 7.5c0 8-6.5 14.5-14.5 14.5l-387 0c-8 0-14.5-6.5-14.5-14.5c0-2.7 .7-5.3 2.1-7.5L248.4 84.3zm-41-25L9.1 385c-6 9.8-9.1 21-9.1 32.5C0 452 28 480 62.5 480l387 0c34.5 0 62.5-28 62.5-62.5c0-11.5-3.2-22.7-9.1-32.5L304.6 59.3C294.3 42.4 275.9 32 256 32s-38.3 10.4-48.6 27.3zM288 368a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-8-184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96z"/></svg>`
    },
    caution: {
      label: "Caution",
      icon: `<svg class="w-5 fill-purple-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M459.1 52.4L442.6 6.5C440.7 2.6 436.5 0 432.1 0s-8.5 2.6-10.4 6.5L405.2 52.4l-46 16.8c-4.3 1.6-7.3 5.9-7.2 10.4c0 4.5 3 8.7 7.2 10.2l45.7 16.8 16.8 45.8c1.5 4.4 5.8 7.5 10.4 7.5s8.9-3.1 10.4-7.5l16.5-45.8 45.7-16.8c4.2-1.5 7.2-5.7 7.2-10.2c0-4.6-3-8.9-7.2-10.4L459.1 52.4zm-132.4 53c-12.5-12.5-32.8-12.5-45.3 0l-2.9 2.9C256.5 100.3 232.7 96 208 96C93.1 96 0 189.1 0 304S93.1 512 208 512s208-93.1 208-208c0-24.7-4.3-48.5-12.2-70.5l2.9-2.9c12.5-12.5 12.5-32.8 0-45.3l-80-80zM200 192c-57.4 0-104 46.6-104 104l0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8c0-75.1 60.9-136 136-136l8 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-8 0z"/></svg>`    
    }
  };
  const calloutRE = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\] *(.+)?$/i;

  function callout(state, startLine, endLine, silent) {
    const startPos = state.bMarks[startLine] + state.tShift[startLine];
    const maxPos = state.eMarks[startLine];

    const line = state.src.slice(startPos, maxPos);
    const match = line.match(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](.*)$/i);
    if (!match) return false;

    if (silent) return true;

    const type = match[1].toLowerCase();
    const title = calloutTypes[type].label;
    const icon = calloutTypes[type].icon;

    // Find the end of the callout block
    let nextLine = startLine + 1;
    let contentLines = [];
    while (nextLine < endLine) {
      const nextStart = state.bMarks[nextLine] + state.tShift[nextLine];
      const nextMax = state.eMarks[nextLine];
      const nextLineText = state.src.slice(nextStart, nextMax);
      if (!/^\s*>\s?/.test(nextLineText)) break;
      contentLines.push(nextLineText.replace(/^\s*>\s?/, ''));
      nextLine++;
    }

    // Remove the first line's content ("[!TYPE] ...") for body
    let body = match[2].trim();
    if (body) contentLines.unshift(body);

    // Render the callout block
    let token = state.push('callout_open', 'div', 1);
    token.block = true;
    token.attrs = [['class', `callout callout-${type}`]];

    token = state.push('callout_title_open', 'div', 1);
    token.attrs = [['class', 'callout-title']];
    token = state.push('html_inline', '', 0);
    token.content = `${icon}<span>${title}</span>`;
    token = state.push('callout_title_close', 'div', -1);

    token = state.push('callout_body_open', 'div', 1);
    token.attrs = [['class', 'callout-body']];
    token = state.push('inline', '', 0);
    token.content = contentLines.join('\n');
    token.children = [];
    token = state.push('callout_body_close', 'div', -1);

    token = state.push('callout_close', 'div', -1);

    state.line = nextLine;
    return true;
  }

  md.block.ruler.before('blockquote', 'callout', callout, {
    alt: ['paragraph', 'reference', 'blockquote', 'list']
  });

  md.renderer.rules.callout_open = (tokens, idx) => `<div class="${tokens[idx].attrs[0][1]}">\n`;
  md.renderer.rules.callout_close = () => `</div>\n`;
  md.renderer.rules.callout_title_open = (tokens, idx) => `<div class="callout-title">`;
  md.renderer.rules.callout_title_close = () => `</div>`;
  md.renderer.rules.callout_body_open = () => `<div class="callout-body">`;
  md.renderer.rules.callout_body_close = () => `</div>`;
}