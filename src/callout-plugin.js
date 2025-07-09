// callout-plugin.js
// export default function calloutPlugin(md) {
//   const calloutRE = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](.*)$/i;

//   function callout(state, startLine, endLine, silent) {
//     let pos, nextLine, token, oldParentType;
//     let haveEndMarker = false;

//     // Ensure this is a blockquote
//     if (state.sCount[startLine] - state.blkIndent >= 4) return false;
//     let lineText = state.getLines(startLine, startLine + 1, state.blkIndent, false).trim();

//     const match = lineText.match(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](.*)$/i);
//     if (!match) return false;

//     // Find where blockquote ends
//     nextLine = startLine + 1;
//     while (nextLine < endLine) {
//       let nextLineText = state.getLines(nextLine, nextLine + 1, state.blkIndent, false).trim();
//       if (!nextLineText.startsWith('>')) break;
//       nextLine++;
//     }

//     if (silent) return true;

//     // Create callout_open token
//     token = state.push('callout_open', 'div', 1);
//     token.block = true;
//     token.attrs = [['class', `callout callout-${match[1].toLowerCase()}`]];
//     token.map = [startLine, nextLine];

//     // Add the first line (without > [!TYPE])
//     token = state.push('paragraph_open', 'p', 1);
//     token.map = [startLine, startLine + 1];

//     token = state.push('inline', '', 0);
//     token.content = match[2].trim();
//     token.map = [startLine, startLine + 1];
//     token.children = [];

//     token = state.push('paragraph_close', 'p', -1);

//     // Add the rest of the lines (with '>' removed)
//     for (let i = startLine + 1; i < nextLine; i++) {
//       let txt = state.getLines(i, i + 1, state.blkIndent, false).replace(/^>\s?/, '');
//       if (txt.trim() === '') continue;
//       token = state.push('paragraph_open', 'p', 1);
//       token.map = [i, i + 1];

//       token = state.push('inline', '', 0);
//       token.content = txt;
//       token.map = [i, i + 1];
//       token.children = [];

//       token = state.push('paragraph_close', 'p', -1);
//     }

//     // Close callout
//     token = state.push('callout_close', 'div', -1);

//     state.line = nextLine;
//     return true;
//   }

//   md.block.ruler.before('blockquote', 'callout', callout, {
//     alt: ['paragraph', 'reference', 'blockquote', 'list']
//   });
// }

// callout-plugin.js
export default function calloutPlugin(md) {
  const calloutTypes = {
    note: {
      label: "Note",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style="vertical-align:middle; margin-right:0.5em; fill:#3578d4;" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#eef4fb"/><path d="M12 8v2m0 4h.01" stroke="#3578d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="16" r="1" fill="#3578d4"/></svg>`
    },
    tip: {
      label: "Tip",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style="vertical-align:middle; margin-right:0.5em; fill:#28a745;" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#e6f8eb"/><path d="M12 8v4m0 4h.01" stroke="#28a745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="16" r="1" fill="#28a745"/></svg>`
    },
    important: {
      label: "Important",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style="vertical-align:middle; margin-right:0.5em; fill:#d03592;" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#f8e6f3"/><path d="M12 8v4m0 4h.01" stroke="#d03592" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="16" r="1" fill="#d03592"/></svg>`
    },
    warning: {
      label: "Warning",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style="vertical-align:middle; margin-right:0.5em; fill:#d8a100;" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff8e1"/><path d="M12 8v4m0 4h.01" stroke="#d8a100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="16" r="1" fill="#d8a100"/></svg>`
    },
    caution: {
      label: "Caution",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style="vertical-align:middle; margin-right:0.5em; fill:#d73a49;" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff5f5"/><path d="M12 8v4m0 4h.01" stroke="#d73a49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="16" r="1" fill="#d73a49"/></svg>`
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