var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a2;
function Jt() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var re = Jt();
function ka(r) {
  re = r;
}
var _0 = { exec: () => null };
function oe(r) {
  let e = [];
  return (t) => {
    let a = Math.max(0, Math.min(3, t - 1)), n = e[a];
    return n || (n = r(a), e[a] = n), n;
  };
}
function P(r, e = "") {
  let t = typeof r == "string" ? r : r.source, a = { replace: (n, i) => {
    let o = typeof i == "string" ? i : i.source;
    return o = o.replace(s0.caret, "$1"), t = t.replace(n, o), a;
  }, getRegex: () => new RegExp(t, e) };
  return a;
}
var qn = ((r = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + r);
  } catch {
    return false;
  }
})(), s0 = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (r) => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: oe((r) => new RegExp(`^ {0,${r}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: oe((r) => new RegExp(`^ {0,${r}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)), fencesBeginRegex: oe((r) => new RegExp(`^ {0,${r}}(?:\`\`\`|~~~)`)), headingBeginRegex: oe((r) => new RegExp(`^ {0,${r}}#`)), htmlBeginRegex: oe((r) => new RegExp(`^ {0,${r}}<(?:[a-z].*>|!--)`, "i")), blockquoteBeginRegex: oe((r) => new RegExp(`^ {0,${r}}>`)) }, En = /^(?:[ \t]*(?:\n|$))+/, In = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Nn = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ce = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ln = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, _t = / {0,3}(?:[*+-]|\d{1,9}[.)])/, Sa = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, za = P(Sa).replace(/bull/g, _t).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Fn = P(Sa).replace(/bull/g, _t).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), er = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Hn = /^[^\n]+/, tr = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, On = P(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", tr).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), $n = P(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, _t).getRegex(), _e = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", rr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Pn = P("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", rr).replace("tag", _e).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Aa = P(er).replace("hr", Ce).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex(), Gn = P(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Aa).getRegex(), ar = { blockquote: Gn, code: In, def: On, fences: Nn, heading: Ln, hr: Ce, html: Pn, lheading: za, list: $n, newline: En, paragraph: Aa, table: _0, text: Hn }, Rr = P("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Ce).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex(), Un = { ...ar, lheading: Fn, table: Rr, paragraph: P(er).replace("hr", Ce).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Rr).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _e).getRegex() }, Vn = { ...ar, html: P(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", rr).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: _0, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: P(er).replace("hr", Ce).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", za).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Xn = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Yn = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ta = /^( {2,}|\\)\n(?!\s*$)/, Wn = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, pe = /[\p{P}\p{S}]/u, et = /[\s\p{P}\p{S}]/u, nr = /[^\s\p{P}\p{S}]/u, jn = P(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, et).getRegex(), Ma = /(?!~)[\p{P}\p{S}]/u, Zn = /(?!~)[\s\p{P}\p{S}]/u, Kn = /(?:[^\s\p{P}\p{S}]|~)/u, Qn = P(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", qn ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Ca = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, Jn = P(Ca, "u").replace(/punct/g, pe).getRegex(), _n = P(Ca, "u").replace(/punct/g, Ma).getRegex(), Ba = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", e1 = P(Ba, "gu").replace(/notPunctSpace/g, nr).replace(/punctSpace/g, et).replace(/punct/g, pe).getRegex(), t1 = P(Ba, "gu").replace(/notPunctSpace/g, Kn).replace(/punctSpace/g, Zn).replace(/punct/g, Ma).getRegex(), r1 = P("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, nr).replace(/punctSpace/g, et).replace(/punct/g, pe).getRegex(), a1 = P(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, pe).getRegex(), n1 = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", i1 = P(n1, "gu").replace(/notPunctSpace/g, nr).replace(/punctSpace/g, et).replace(/punct/g, pe).getRegex(), s1 = P(/\\(punct)/, "gu").replace(/punct/g, pe).getRegex(), l1 = P(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), o1 = P(rr).replace("(?:-->|$)", "-->").getRegex(), u1 = P("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", o1).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), We = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, h1 = P(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", We).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Da = P(/^!?\[(label)\]\[(ref)\]/).replace("label", We).replace("ref", tr).getRegex(), Ra = P(/^!?\[(ref)\](?:\[\])?/).replace("ref", tr).getRegex(), c1 = P("reflink|nolink(?!\\()", "g").replace("reflink", Da).replace("nolink", Ra).getRegex(), qr = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, ir = { _backpedal: _0, anyPunctuation: s1, autolink: l1, blockSkip: Qn, br: Ta, code: Yn, del: _0, delLDelim: _0, delRDelim: _0, emStrongLDelim: Jn, emStrongRDelimAst: e1, emStrongRDelimUnd: r1, escape: Xn, link: h1, nolink: Ra, punctuation: jn, reflink: Da, reflinkSearch: c1, tag: u1, text: Wn, url: _0 }, m1 = { ...ir, link: P(/^!?\[(label)\]\((.*?)\)/).replace("label", We).getRegex(), reflink: P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", We).getRegex() }, Dt = { ...ir, emStrongRDelimAst: t1, emStrongLDelim: _n, delLDelim: a1, delRDelim: i1, url: P(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", qr).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: P(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", qr).getRegex() }, d1 = { ...Dt, br: P(Ta).replace("{2,}", "*").getRegex(), text: P(Dt.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Le = { normal: ar, gfm: Un, pedantic: Vn }, ye = { normal: ir, gfm: Dt, breaks: d1, pedantic: m1 }, p1 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Er = (r) => p1[r];
function T0(r, e) {
  if (e) {
    if (s0.escapeTest.test(r)) return r.replace(s0.escapeReplace, Er);
  } else if (s0.escapeTestNoEncode.test(r)) return r.replace(s0.escapeReplaceNoEncode, Er);
  return r;
}
function Ir(r) {
  try {
    r = encodeURI(r).replace(s0.percentDecode, "%");
  } catch {
    return null;
  }
  return r;
}
function Nr(r, e) {
  var _a3;
  let t = r.replace(s0.findPipe, (i, o, u) => {
    let c = false, d = o;
    for (; --d >= 0 && u[d] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }), a = t.split(s0.splitPipe), n = 0;
  if (a[0].trim() || a.shift(), a.length > 0 && !((_a3 = a.at(-1)) == null ? void 0 : _a3.trim()) && a.pop(), e) if (a.length > e) a.splice(e);
  else for (; a.length < e; ) a.push("");
  for (; n < a.length; n++) a[n] = a[n].trim().replace(s0.slashPipe, "|");
  return a;
}
function G0(r, e, t) {
  let a = r.length;
  if (a === 0) return "";
  let n = 0;
  for (; n < a && r.charAt(a - n - 1) === e; ) n++;
  return r.slice(0, a - n);
}
function Lr(r) {
  let e = r.split(`
`), t = e.length - 1;
  for (; t >= 0 && s0.blankLine.test(e[t]); ) t--;
  return e.length - t <= 2 ? r : e.slice(0, t + 1).join(`
`);
}
function f1(r, e) {
  if (r.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let a = 0; a < r.length; a++) if (r[a] === "\\") a++;
  else if (r[a] === e[0]) t++;
  else if (r[a] === e[1] && (t--, t < 0)) return a;
  return t > 0 ? -2 : -1;
}
function v1(r, e = 0) {
  let t = e, a = "";
  for (let n of r) if (n === "	") {
    let i = 4 - t % 4;
    a += " ".repeat(i), t += i;
  } else a += n, t++;
  return a;
}
function Fr(r, e, t, a, n) {
  let i = e.href, o = e.title || null, u = r[1].replace(n.other.outputLinkReplace, "$1");
  a.state.inLink = true;
  let c = { type: r[0].charAt(0) === "!" ? "image" : "link", raw: t, href: i, title: o, text: u, tokens: a.inlineTokens(u) };
  return a.state.inLink = false, c;
}
function g1(r, e, t) {
  let a = r.match(t.other.indentCodeCompensation);
  if (a === null) return e;
  let n = a[1];
  return e.split(`
`).map((i) => {
    let o = i.match(t.other.beginningSpace);
    if (o === null) return i;
    let [u] = o;
    return u.length >= n.length ? i.slice(n.length) : i;
  }).join(`
`);
}
var je = class {
  constructor(r) {
    __publicField(this, "options");
    __publicField(this, "rules");
    __publicField(this, "lexer");
    this.options = r || re;
  }
  space(r) {
    let e = this.rules.block.newline.exec(r);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(r) {
    let e = this.rules.block.code.exec(r);
    if (e) {
      let t = this.options.pedantic ? e[0] : Lr(e[0]), a = t.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t, codeBlockStyle: "indented", text: a };
    }
  }
  fences(r) {
    let e = this.rules.block.fences.exec(r);
    if (e) {
      let t = e[0], a = g1(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: a };
    }
  }
  heading(r) {
    let e = this.rules.block.heading.exec(r);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let a = G0(t, "#");
        (this.options.pedantic || !a || this.rules.other.endingSpaceChar.test(a)) && (t = a.trim());
      }
      return { type: "heading", raw: G0(e[0], `
`), depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(r) {
    let e = this.rules.block.hr.exec(r);
    if (e) return { type: "hr", raw: G0(e[0], `
`) };
  }
  blockquote(r) {
    let e = this.rules.block.blockquote.exec(r);
    if (e) {
      let t = G0(e[0], `
`).split(`
`), a = "", n = "", i = [];
      for (; t.length > 0; ) {
        let o = false, u = [], c;
        for (c = 0; c < t.length; c++) if (this.rules.other.blockquoteStart.test(t[c])) u.push(t[c]), o = true;
        else if (!o) u.push(t[c]);
        else break;
        t = t.slice(c);
        let d = u.join(`
`), f = d.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        a = a ? `${a}
${d}` : d, n = n ? `${n}
${f}` : f;
        let g = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(f, i, true), this.lexer.state.top = g, t.length === 0) break;
        let x = i.at(-1);
        if ((x == null ? void 0 : x.type) === "code") break;
        if ((x == null ? void 0 : x.type) === "blockquote") {
          let y = x, S = y.raw + `
` + t.join(`
`), M = this.blockquote(S);
          i[i.length - 1] = M, a = a.substring(0, a.length - y.raw.length) + M.raw, n = n.substring(0, n.length - y.text.length) + M.text;
          break;
        } else if ((x == null ? void 0 : x.type) === "list") {
          let y = x, S = y.raw + `
` + t.join(`
`), M = this.list(S);
          i[i.length - 1] = M, a = a.substring(0, a.length - x.raw.length) + M.raw, n = n.substring(0, n.length - y.raw.length) + M.raw, t = S.substring(i.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: a, tokens: i, text: n };
    }
  }
  list(r) {
    let e = this.rules.block.list.exec(r);
    if (e) {
      let t = e[1].trim(), a = t.length > 1, n = { type: "list", raw: "", ordered: a, start: a ? +t.slice(0, -1) : "", loose: false, items: [] };
      t = a ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = a ? t : "[*+-]");
      let i = this.rules.other.listItemRegex(t), o = false;
      for (; r; ) {
        let c = false, d = "", f = "";
        if (!(e = i.exec(r)) || this.rules.block.hr.test(r)) break;
        d = e[0], r = r.substring(d.length);
        let g = v1(e[2].split(`
`, 1)[0], e[1].length), x = r.split(`
`, 1)[0], y = !g.trim(), S = 0;
        if (this.options.pedantic ? (S = 2, f = g.trimStart()) : y ? S = e[1].length + 1 : (S = g.search(this.rules.other.nonSpaceChar), S = S > 4 ? 1 : S, f = g.slice(S), S += e[1].length), y && this.rules.other.blankLine.test(x) && (d += x + `
`, r = r.substring(x.length + 1), c = true), !c) {
          let M = this.rules.other.nextBulletRegex(S), C = this.rules.other.hrRegex(S), D = this.rules.other.fencesBeginRegex(S), q = this.rules.other.headingBeginRegex(S), N = this.rules.other.htmlBeginRegex(S), F = this.rules.other.blockquoteBeginRegex(S);
          for (; r; ) {
            let O = r.split(`
`, 1)[0], H;
            if (x = O, this.options.pedantic ? (x = x.replace(this.rules.other.listReplaceNesting, "  "), H = x) : H = x.replace(this.rules.other.tabCharGlobal, "    "), D.test(x) || q.test(x) || N.test(x) || F.test(x) || M.test(x) || C.test(x)) break;
            if (H.search(this.rules.other.nonSpaceChar) >= S || !x.trim()) f += `
` + H.slice(S);
            else {
              if (y || g.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || D.test(g) || q.test(g) || C.test(g)) break;
              f += `
` + x;
            }
            y = !x.trim(), d += O + `
`, r = r.substring(O.length + 1), g = H.slice(S);
          }
        }
        n.loose || (o ? n.loose = true : this.rules.other.doubleBlankLine.test(d) && (o = true)), n.items.push({ type: "list_item", raw: d, task: !!this.options.gfm && this.rules.other.listIsTask.test(f), loose: false, text: f, tokens: [] }), n.raw += d;
      }
      let u = n.items.at(-1);
      if (u) u.raw = u.raw.trimEnd(), u.text = u.text.trimEnd();
      else return;
      n.raw = n.raw.trimEnd();
      for (let c of n.items) {
        this.lexer.state.top = false, c.tokens = this.lexer.blockTokens(c.text, []);
        let d = c.tokens[0];
        if (c.task && ((d == null ? void 0 : d.type) === "text" || (d == null ? void 0 : d.type) === "paragraph")) {
          c.text = c.text.replace(this.rules.other.listReplaceTask, ""), d.raw = d.raw.replace(this.rules.other.listReplaceTask, ""), d.text = d.text.replace(this.rules.other.listReplaceTask, "");
          for (let g = this.lexer.inlineQueue.length - 1; g >= 0; g--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)) {
            this.lexer.inlineQueue[g].src = this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask, "");
            break;
          }
          let f = this.rules.other.listTaskCheckbox.exec(c.raw);
          if (f) {
            let g = { type: "checkbox", raw: f[0] + " ", checked: f[0] !== "[ ]" };
            c.checked = g.checked, n.loose ? c.tokens[0] && ["paragraph", "text"].includes(c.tokens[0].type) && "tokens" in c.tokens[0] && c.tokens[0].tokens ? (c.tokens[0].raw = g.raw + c.tokens[0].raw, c.tokens[0].text = g.raw + c.tokens[0].text, c.tokens[0].tokens.unshift(g)) : c.tokens.unshift({ type: "paragraph", raw: g.raw, text: g.raw, tokens: [g] }) : c.tokens.unshift(g);
          }
        } else c.task && (c.task = false);
        if (!n.loose) {
          let f = c.tokens.filter((x) => x.type === "space"), g = f.length > 0 && f.some((x) => this.rules.other.anyLine.test(x.raw));
          n.loose = g;
        }
      }
      if (n.loose) for (let c of n.items) {
        c.loose = true;
        for (let d of c.tokens) d.type === "text" && (d.type = "paragraph");
      }
      return n;
    }
  }
  html(r) {
    let e = this.rules.block.html.exec(r);
    if (e) {
      let t = Lr(e[0]);
      return { type: "html", block: true, raw: t, pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: t };
    }
  }
  def(r) {
    let e = this.rules.block.def.exec(r);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), a = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: G0(e[0], `
`), href: a, title: n };
    }
  }
  table(r) {
    var _a3;
    let e = this.rules.block.table.exec(r);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = Nr(e[1]), a = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), n = ((_a3 = e[3]) == null ? void 0 : _a3.trim()) ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = { type: "table", raw: G0(e[0], `
`), header: [], align: [], rows: [] };
    if (t.length === a.length) {
      for (let o of a) this.rules.other.tableAlignRight.test(o) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? i.align.push("left") : i.align.push(null);
      for (let o = 0; o < t.length; o++) i.header.push({ text: t[o], tokens: this.lexer.inline(t[o]), header: true, align: i.align[o] });
      for (let o of n) i.rows.push(Nr(o, i.header.length).map((u, c) => ({ text: u, tokens: this.lexer.inline(u), header: false, align: i.align[c] })));
      return i;
    }
  }
  lheading(r) {
    let e = this.rules.block.lheading.exec(r);
    if (e) {
      let t = e[1].trim();
      return { type: "heading", raw: G0(e[0], `
`), depth: e[2].charAt(0) === "=" ? 1 : 2, text: t, tokens: this.lexer.inline(t) };
    }
  }
  paragraph(r) {
    let e = this.rules.block.paragraph.exec(r);
    if (e) {
      let t = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return { type: "paragraph", raw: e[0], text: t, tokens: this.lexer.inline(t) };
    }
  }
  text(r) {
    let e = this.rules.block.text.exec(r);
    if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(r) {
    let e = this.rules.inline.escape.exec(r);
    if (e) return { type: "escape", raw: e[0], text: e[1] };
  }
  tag(r) {
    let e = this.rules.inline.tag.exec(r);
    if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: e[0] };
  }
  link(r) {
    let e = this.rules.inline.link.exec(r);
    if (e) {
      let t = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(t)) {
        if (!this.rules.other.endAngleBracket.test(t)) return;
        let i = G0(t.slice(0, -1), "\\");
        if ((t.length - i.length) % 2 === 0) return;
      } else {
        let i = f1(e[2], "()");
        if (i === -2) return;
        if (i > -1) {
          let o = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + i;
          e[2] = e[2].substring(0, i), e[0] = e[0].substring(0, o).trim(), e[3] = "";
        }
      }
      let a = e[2], n = "";
      if (this.options.pedantic) {
        let i = this.rules.other.pedanticHrefTitle.exec(a);
        i && (a = i[1], n = i[3]);
      } else n = e[3] ? e[3].slice(1, -1) : "";
      return a = a.trim(), this.rules.other.startAngleBracket.test(a) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? a = a.slice(1) : a = a.slice(1, -1)), Fr(e, { href: a && a.replace(this.rules.inline.anyPunctuation, "$1"), title: n && n.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(r, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(r)) || (t = this.rules.inline.nolink.exec(r))) {
      let a = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = e[a.toLowerCase()];
      if (!n) {
        let i = t[0].charAt(0);
        return { type: "text", raw: i, text: i };
      }
      return Fr(t, n, t[0], this.lexer, this.rules);
    }
  }
  emStrong(r, e, t = "") {
    let a = this.rules.inline.emStrongLDelim.exec(r);
    if (!(!a || !a[1] && !a[2] && !a[3] && !a[4] || a[4] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(a[1] || a[3]) || !t || this.rules.inline.punctuation.exec(t))) {
      let n = [...a[0]].length - 1, i, o, u = n, c = 0, d = a[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, e = e.slice(-1 * r.length + n); (a = d.exec(e)) !== null; ) {
        if (i = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !i) continue;
        if (o = [...i].length, a[3] || a[4]) {
          u += o;
          continue;
        } else if ((a[5] || a[6]) && n % 3 && !((n + o) % 3)) {
          c += o;
          continue;
        }
        if (u -= o, u > 0) continue;
        o = Math.min(o, o + u + c);
        let f = [...a[0]][0].length, g = r.slice(0, n + a.index + f + o);
        if (Math.min(n, o) % 2) {
          let y = g.slice(1, -1);
          return { type: "em", raw: g, text: y, tokens: this.lexer.inlineTokens(y) };
        }
        let x = g.slice(2, -2);
        return { type: "strong", raw: g, text: x, tokens: this.lexer.inlineTokens(x) };
      }
    }
  }
  codespan(r) {
    let e = this.rules.inline.code.exec(r);
    if (e) {
      let t = e[2].replace(this.rules.other.newLineCharGlobal, " "), a = this.rules.other.nonSpaceChar.test(t), n = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return a && n && (t = t.substring(1, t.length - 1)), { type: "codespan", raw: e[0], text: t };
    }
  }
  br(r) {
    let e = this.rules.inline.br.exec(r);
    if (e) return { type: "br", raw: e[0] };
  }
  del(r, e, t = "") {
    let a = this.rules.inline.delLDelim.exec(r);
    if (a && (!a[1] || !t || this.rules.inline.punctuation.exec(t))) {
      let n = [...a[0]].length - 1, i, o, u = n, c = this.rules.inline.delRDelim;
      for (c.lastIndex = 0, e = e.slice(-1 * r.length + n); (a = c.exec(e)) !== null; ) {
        if (i = a[1] || a[2] || a[3] || a[4] || a[5] || a[6], !i || (o = [...i].length, o !== n)) continue;
        if (a[3] || a[4]) {
          u += o;
          continue;
        }
        if (u -= o, u > 0) continue;
        o = Math.min(o, o + u);
        let d = [...a[0]][0].length, f = r.slice(0, n + a.index + d + o), g = f.slice(n, -n);
        return { type: "del", raw: f, text: g, tokens: this.lexer.inlineTokens(g) };
      }
    }
  }
  autolink(r) {
    let e = this.rules.inline.autolink.exec(r);
    if (e) {
      let t, a;
      return e[2] === "@" ? (t = e[1], a = "mailto:" + t) : (t = e[1], a = t), { type: "link", raw: e[0], text: t, href: a, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  url(r) {
    var _a3;
    let e;
    if (e = this.rules.inline.url.exec(r)) {
      let t, a;
      if (e[2] === "@") t = e[0], a = "mailto:" + t;
      else {
        let n;
        do
          n = e[0], e[0] = ((_a3 = this.rules.inline._backpedal.exec(e[0])) == null ? void 0 : _a3[0]) ?? "";
        while (n !== e[0]);
        t = e[0], e[1] === "www." ? a = "http://" + e[0] : a = e[0];
      }
      return { type: "link", raw: e[0], text: t, href: a, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  inlineText(r) {
    let e = this.rules.inline.text.exec(r);
    if (e) {
      let t = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: t };
    }
  }
}, S0 = class Rt {
  constructor(e) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "inlineQueue");
    __publicField(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || re, this.options.tokenizer = this.options.tokenizer || new je(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t = { other: s0, block: Le.normal, inline: ye.normal };
    this.options.pedantic ? (t.block = Le.pedantic, t.inline = ye.pedantic) : this.options.gfm && (t.block = Le.gfm, this.options.breaks ? t.inline = ye.breaks : t.inline = ye.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: Le, inline: ye };
  }
  static lex(e, t) {
    return new Rt(t).lex(e);
  }
  static lexInline(e, t) {
    return new Rt(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(s0.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let a = this.inlineQueue[t];
      this.inlineTokens(a.src, a.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], a = false) {
    var _a3, _b, _c;
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(s0.tabCharGlobal, "    ").replace(s0.spaceLine, ""));
    let n = 1 / 0;
    for (; e; ) {
      if (e.length < n) n = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      let i;
      if ((_b = (_a3 = this.options.extensions) == null ? void 0 : _a3.block) == null ? void 0 : _b.some((u) => (i = u.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), true) : false)) continue;
      if (i = this.tokenizer.space(e)) {
        e = e.substring(i.raw.length);
        let u = t.at(-1);
        i.raw.length === 1 && u !== void 0 ? u.raw += `
` : t.push(i);
        continue;
      }
      if (i = this.tokenizer.code(e)) {
        e = e.substring(i.raw.length);
        let u = t.at(-1);
        (u == null ? void 0 : u.type) === "paragraph" || (u == null ? void 0 : u.type) === "text" ? (u.raw += (u.raw.endsWith(`
`) ? "" : `
`) + i.raw, u.text += `
` + i.text, this.inlineQueue.at(-1).src = u.text) : t.push(i);
        continue;
      }
      if (i = this.tokenizer.fences(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.heading(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.hr(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.blockquote(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.list(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.html(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.def(e)) {
        e = e.substring(i.raw.length);
        let u = t.at(-1);
        (u == null ? void 0 : u.type) === "paragraph" || (u == null ? void 0 : u.type) === "text" ? (u.raw += (u.raw.endsWith(`
`) ? "" : `
`) + i.raw, u.text += `
` + i.raw, this.inlineQueue.at(-1).src = u.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = { href: i.href, title: i.title }, t.push(i));
        continue;
      }
      if (i = this.tokenizer.table(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.lheading(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      let o = e;
      if ((_c = this.options.extensions) == null ? void 0 : _c.startBlock) {
        let u = 1 / 0, c = e.slice(1), d;
        this.options.extensions.startBlock.forEach((f) => {
          d = f.call({ lexer: this }, c), typeof d == "number" && d >= 0 && (u = Math.min(u, d));
        }), u < 1 / 0 && u >= 0 && (o = e.substring(0, u + 1));
      }
      if (this.state.top && (i = this.tokenizer.paragraph(o))) {
        let u = t.at(-1);
        a && (u == null ? void 0 : u.type) === "paragraph" ? (u.raw += (u.raw.endsWith(`
`) ? "" : `
`) + i.raw, u.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : t.push(i), a = o.length !== e.length, e = e.substring(i.raw.length);
        continue;
      }
      if (i = this.tokenizer.text(e)) {
        e = e.substring(i.raw.length);
        let u = t.at(-1);
        (u == null ? void 0 : u.type) === "text" ? (u.raw += (u.raw.endsWith(`
`) ? "" : `
`) + i.raw, u.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : t.push(i);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    var _a3, _b, _c, _d, _e2;
    this.tokenizer.lexer = this;
    let a = e, n = null;
    if (this.tokens.links) {
      let d = Object.keys(this.tokens.links);
      if (d.length > 0) for (; (n = this.tokenizer.rules.inline.reflinkSearch.exec(a)) !== null; ) d.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (n = this.tokenizer.rules.inline.anyPunctuation.exec(a)) !== null; ) a = a.slice(0, n.index) + "++" + a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i;
    for (; (n = this.tokenizer.rules.inline.blockSkip.exec(a)) !== null; ) i = n[2] ? n[2].length : 0, a = a.slice(0, n.index + i) + "[" + "a".repeat(n[0].length - i - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    a = ((_b = (_a3 = this.options.hooks) == null ? void 0 : _a3.emStrongMask) == null ? void 0 : _b.call({ lexer: this }, a)) ?? a;
    let o = false, u = "", c = 1 / 0;
    for (; e; ) {
      if (e.length < c) c = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      o || (u = ""), o = false;
      let d;
      if ((_d = (_c = this.options.extensions) == null ? void 0 : _c.inline) == null ? void 0 : _d.some((g) => (d = g.call({ lexer: this }, e, t)) ? (e = e.substring(d.raw.length), t.push(d), true) : false)) continue;
      if (d = this.tokenizer.escape(e)) {
        e = e.substring(d.raw.length), t.push(d);
        continue;
      }
      if (d = this.tokenizer.tag(e)) {
        e = e.substring(d.raw.length), t.push(d);
        continue;
      }
      if (d = this.tokenizer.link(e)) {
        e = e.substring(d.raw.length), t.push(d);
        continue;
      }
      if (d = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(d.raw.length);
        let g = t.at(-1);
        d.type === "text" && (g == null ? void 0 : g.type) === "text" ? (g.raw += d.raw, g.text += d.text) : t.push(d);
        continue;
      }
      if (d = this.tokenizer.emStrong(e, a, u)) {
        e = e.substring(d.raw.length), t.push(d);
        continue;
      }
      if (d = this.tokenizer.codespan(e)) {
        e = e.substring(d.raw.length), t.push(d);
        continue;
      }
      if (d = this.tokenizer.br(e)) {
        e = e.substring(d.raw.length), t.push(d);
        continue;
      }
      if (d = this.tokenizer.del(e, a, u)) {
        e = e.substring(d.raw.length), t.push(d);
        continue;
      }
      if (d = this.tokenizer.autolink(e)) {
        e = e.substring(d.raw.length), t.push(d);
        continue;
      }
      if (!this.state.inLink && (d = this.tokenizer.url(e))) {
        e = e.substring(d.raw.length), t.push(d);
        continue;
      }
      let f = e;
      if ((_e2 = this.options.extensions) == null ? void 0 : _e2.startInline) {
        let g = 1 / 0, x = e.slice(1), y;
        this.options.extensions.startInline.forEach((S) => {
          y = S.call({ lexer: this }, x), typeof y == "number" && y >= 0 && (g = Math.min(g, y));
        }), g < 1 / 0 && g >= 0 && (f = e.substring(0, g + 1));
      }
      if (d = this.tokenizer.inlineText(f)) {
        e = e.substring(d.raw.length), d.raw.slice(-1) !== "_" && (u = d.raw.slice(-1)), o = true;
        let g = t.at(-1);
        (g == null ? void 0 : g.type) === "text" ? (g.raw += d.raw, g.text += d.text) : t.push(d);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return t;
  }
  infiniteLoopError(e) {
    let t = "Infinite loop on byte: " + e;
    if (this.options.silent) console.error(t);
    else throw new Error(t);
  }
}, Ze = class {
  constructor(r) {
    __publicField(this, "options");
    __publicField(this, "parser");
    this.options = r || re;
  }
  space(r) {
    return "";
  }
  code({ text: r, lang: e, escaped: t }) {
    var _a3;
    let a = (_a3 = (e || "").match(s0.notSpaceStart)) == null ? void 0 : _a3[0], n = r.replace(s0.endingNewline, "") + `
`;
    return a ? '<pre><code class="language-' + T0(a) + '">' + (t ? n : T0(n, true)) + `</code></pre>
` : "<pre><code>" + (t ? n : T0(n, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: r }) {
    return `<blockquote>
${this.parser.parse(r)}</blockquote>
`;
  }
  html({ text: r }) {
    return r;
  }
  def(r) {
    return "";
  }
  heading({ tokens: r, depth: e }) {
    return `<h${e}>${this.parser.parseInline(r)}</h${e}>
`;
  }
  hr(r) {
    return `<hr>
`;
  }
  list(r) {
    let e = r.ordered, t = r.start, a = "";
    for (let o = 0; o < r.items.length; o++) {
      let u = r.items[o];
      a += this.listitem(u);
    }
    let n = e ? "ol" : "ul", i = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + n + i + `>
` + a + "</" + n + `>
`;
  }
  listitem(r) {
    return `<li>${this.parser.parse(r.tokens)}</li>
`;
  }
  checkbox({ checked: r }) {
    return "<input " + (r ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: r }) {
    return `<p>${this.parser.parseInline(r)}</p>
`;
  }
  table(r) {
    let e = "", t = "";
    for (let n = 0; n < r.header.length; n++) t += this.tablecell(r.header[n]);
    e += this.tablerow({ text: t });
    let a = "";
    for (let n = 0; n < r.rows.length; n++) {
      let i = r.rows[n];
      t = "";
      for (let o = 0; o < i.length; o++) t += this.tablecell(i[o]);
      a += this.tablerow({ text: t });
    }
    return a && (a = `<tbody>${a}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + a + `</table>
`;
  }
  tablerow({ text: r }) {
    return `<tr>
${r}</tr>
`;
  }
  tablecell(r) {
    let e = this.parser.parseInline(r.tokens), t = r.header ? "th" : "td";
    return (r.align ? `<${t} align="${r.align}">` : `<${t}>`) + e + `</${t}>
`;
  }
  strong({ tokens: r }) {
    return `<strong>${this.parser.parseInline(r)}</strong>`;
  }
  em({ tokens: r }) {
    return `<em>${this.parser.parseInline(r)}</em>`;
  }
  codespan({ text: r }) {
    return `<code>${T0(r, true)}</code>`;
  }
  br(r) {
    return "<br>";
  }
  del({ tokens: r }) {
    return `<del>${this.parser.parseInline(r)}</del>`;
  }
  link({ href: r, title: e, tokens: t }) {
    let a = this.parser.parseInline(t), n = Ir(r);
    if (n === null) return a;
    r = n;
    let i = '<a href="' + r + '"';
    return e && (i += ' title="' + T0(e) + '"'), i += ">" + a + "</a>", i;
  }
  image({ href: r, title: e, text: t, tokens: a }) {
    a && (t = this.parser.parseInline(a, this.parser.textRenderer));
    let n = Ir(r);
    if (n === null) return T0(t);
    r = n;
    let i = `<img src="${r}" alt="${T0(t)}"`;
    return e && (i += ` title="${T0(e)}"`), i += ">", i;
  }
  text(r) {
    return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : T0(r.text);
  }
}, sr = class {
  strong({ text: r }) {
    return r;
  }
  em({ text: r }) {
    return r;
  }
  codespan({ text: r }) {
    return r;
  }
  del({ text: r }) {
    return r;
  }
  html({ text: r }) {
    return r;
  }
  text({ text: r }) {
    return r;
  }
  link({ text: r }) {
    return "" + r;
  }
  image({ text: r }) {
    return "" + r;
  }
  br() {
    return "";
  }
  checkbox({ raw: r }) {
    return r;
  }
}, z0 = class qt {
  constructor(e) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = e || re, this.options.renderer = this.options.renderer || new Ze(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new sr();
  }
  static parse(e, t) {
    return new qt(t).parse(e);
  }
  static parseInline(e, t) {
    return new qt(t).parseInline(e);
  }
  parse(e) {
    var _a3, _b;
    this.renderer.parser = this;
    let t = "";
    for (let a = 0; a < e.length; a++) {
      let n = e[a];
      if ((_b = (_a3 = this.options.extensions) == null ? void 0 : _a3.renderers) == null ? void 0 : _b[n.type]) {
        let o = n, u = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (u !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(o.type)) {
          t += u || "";
          continue;
        }
      }
      let i = n;
      switch (i.type) {
        case "space": {
          t += this.renderer.space(i);
          break;
        }
        case "hr": {
          t += this.renderer.hr(i);
          break;
        }
        case "heading": {
          t += this.renderer.heading(i);
          break;
        }
        case "code": {
          t += this.renderer.code(i);
          break;
        }
        case "table": {
          t += this.renderer.table(i);
          break;
        }
        case "blockquote": {
          t += this.renderer.blockquote(i);
          break;
        }
        case "list": {
          t += this.renderer.list(i);
          break;
        }
        case "checkbox": {
          t += this.renderer.checkbox(i);
          break;
        }
        case "html": {
          t += this.renderer.html(i);
          break;
        }
        case "def": {
          t += this.renderer.def(i);
          break;
        }
        case "paragraph": {
          t += this.renderer.paragraph(i);
          break;
        }
        case "text": {
          t += this.renderer.text(i);
          break;
        }
        default: {
          let o = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return t;
  }
  parseInline(e, t = this.renderer) {
    var _a3, _b;
    this.renderer.parser = this;
    let a = "";
    for (let n = 0; n < e.length; n++) {
      let i = e[n];
      if ((_b = (_a3 = this.options.extensions) == null ? void 0 : _a3.renderers) == null ? void 0 : _b[i.type]) {
        let u = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (u !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          a += u || "";
          continue;
        }
      }
      let o = i;
      switch (o.type) {
        case "escape": {
          a += t.text(o);
          break;
        }
        case "html": {
          a += t.html(o);
          break;
        }
        case "link": {
          a += t.link(o);
          break;
        }
        case "image": {
          a += t.image(o);
          break;
        }
        case "checkbox": {
          a += t.checkbox(o);
          break;
        }
        case "strong": {
          a += t.strong(o);
          break;
        }
        case "em": {
          a += t.em(o);
          break;
        }
        case "codespan": {
          a += t.codespan(o);
          break;
        }
        case "br": {
          a += t.br(o);
          break;
        }
        case "del": {
          a += t.del(o);
          break;
        }
        case "text": {
          a += t.text(o);
          break;
        }
        default: {
          let u = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return a;
  }
}, we = (_a2 = class {
  constructor(r) {
    __publicField(this, "options");
    __publicField(this, "block");
    this.options = r || re;
  }
  preprocess(r) {
    return r;
  }
  postprocess(r) {
    return r;
  }
  processAllTokens(r) {
    return r;
  }
  emStrongMask(r) {
    return r;
  }
  provideLexer(r = this.block) {
    return r ? S0.lex : S0.lexInline;
  }
  provideParser(r = this.block) {
    return r ? z0.parse : z0.parseInline;
  }
}, __publicField(_a2, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), __publicField(_a2, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), _a2), b1 = class {
  constructor(...r) {
    __publicField(this, "defaults", Jt());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", this.parseMarkdown(true));
    __publicField(this, "parseInline", this.parseMarkdown(false));
    __publicField(this, "Parser", z0);
    __publicField(this, "Renderer", Ze);
    __publicField(this, "TextRenderer", sr);
    __publicField(this, "Lexer", S0);
    __publicField(this, "Tokenizer", je);
    __publicField(this, "Hooks", we);
    this.use(...r);
  }
  walkTokens(r, e) {
    var _a3, _b;
    let t = [];
    for (let a of r) switch (t = t.concat(e.call(this, a)), a.type) {
      case "table": {
        let n = a;
        for (let i of n.header) t = t.concat(this.walkTokens(i.tokens, e));
        for (let i of n.rows) for (let o of i) t = t.concat(this.walkTokens(o.tokens, e));
        break;
      }
      case "list": {
        let n = a;
        t = t.concat(this.walkTokens(n.items, e));
        break;
      }
      default: {
        let n = a;
        ((_b = (_a3 = this.defaults.extensions) == null ? void 0 : _a3.childTokens) == null ? void 0 : _b[n.type]) ? this.defaults.extensions.childTokens[n.type].forEach((i) => {
          let o = n[i].flat(1 / 0);
          t = t.concat(this.walkTokens(o, e));
        }) : n.tokens && (t = t.concat(this.walkTokens(n.tokens, e)));
      }
    }
    return t;
  }
  use(...r) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return r.forEach((t) => {
      let a = { ...t };
      if (a.async = this.defaults.async || a.async || false, t.extensions && (t.extensions.forEach((n) => {
        if (!n.name) throw new Error("extension name required");
        if ("renderer" in n) {
          let i = e.renderers[n.name];
          i ? e.renderers[n.name] = function(...o) {
            let u = n.renderer.apply(this, o);
            return u === false && (u = i.apply(this, o)), u;
          } : e.renderers[n.name] = n.renderer;
        }
        if ("tokenizer" in n) {
          if (!n.level || n.level !== "block" && n.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let i = e[n.level];
          i ? i.unshift(n.tokenizer) : e[n.level] = [n.tokenizer], n.start && (n.level === "block" ? e.startBlock ? e.startBlock.push(n.start) : e.startBlock = [n.start] : n.level === "inline" && (e.startInline ? e.startInline.push(n.start) : e.startInline = [n.start]));
        }
        "childTokens" in n && n.childTokens && (e.childTokens[n.name] = n.childTokens);
      }), a.extensions = e), t.renderer) {
        let n = this.defaults.renderer || new Ze(this.defaults);
        for (let i in t.renderer) {
          if (!(i in n)) throw new Error(`renderer '${i}' does not exist`);
          if (["options", "parser"].includes(i)) continue;
          let o = i, u = t.renderer[o], c = n[o];
          n[o] = (...d) => {
            let f = u.apply(n, d);
            return f === false && (f = c.apply(n, d)), f || "";
          };
        }
        a.renderer = n;
      }
      if (t.tokenizer) {
        let n = this.defaults.tokenizer || new je(this.defaults);
        for (let i in t.tokenizer) {
          if (!(i in n)) throw new Error(`tokenizer '${i}' does not exist`);
          if (["options", "rules", "lexer"].includes(i)) continue;
          let o = i, u = t.tokenizer[o], c = n[o];
          n[o] = (...d) => {
            let f = u.apply(n, d);
            return f === false && (f = c.apply(n, d)), f;
          };
        }
        a.tokenizer = n;
      }
      if (t.hooks) {
        let n = this.defaults.hooks || new we();
        for (let i in t.hooks) {
          if (!(i in n)) throw new Error(`hook '${i}' does not exist`);
          if (["options", "block"].includes(i)) continue;
          let o = i, u = t.hooks[o], c = n[o];
          we.passThroughHooks.has(i) ? n[o] = (d) => {
            if (this.defaults.async && we.passThroughHooksRespectAsync.has(i)) return (async () => {
              let g = await u.call(n, d);
              return c.call(n, g);
            })();
            let f = u.call(n, d);
            return c.call(n, f);
          } : n[o] = (...d) => {
            if (this.defaults.async) return (async () => {
              let g = await u.apply(n, d);
              return g === false && (g = await c.apply(n, d)), g;
            })();
            let f = u.apply(n, d);
            return f === false && (f = c.apply(n, d)), f;
          };
        }
        a.hooks = n;
      }
      if (t.walkTokens) {
        let n = this.defaults.walkTokens, i = t.walkTokens;
        a.walkTokens = function(o) {
          let u = [];
          return u.push(i.call(this, o)), n && (u = u.concat(n.call(this, o))), u;
        };
      }
      this.defaults = { ...this.defaults, ...a };
    }), this;
  }
  setOptions(r) {
    return this.defaults = { ...this.defaults, ...r }, this;
  }
  lexer(r, e) {
    return S0.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return z0.parse(r, e ?? this.defaults);
  }
  parseMarkdown(r) {
    return (e, t) => {
      let a = { ...t }, n = { ...this.defaults, ...a }, i = this.onError(!!n.silent, !!n.async);
      if (this.defaults.async === true && a.async === false) return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return i(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      if (n.hooks && (n.hooks.options = n, n.hooks.block = r), n.async) return (async () => {
        let o = n.hooks ? await n.hooks.preprocess(e) : e, u = await (n.hooks ? await n.hooks.provideLexer(r) : r ? S0.lex : S0.lexInline)(o, n), c = n.hooks ? await n.hooks.processAllTokens(u) : u;
        n.walkTokens && await Promise.all(this.walkTokens(c, n.walkTokens));
        let d = await (n.hooks ? await n.hooks.provideParser(r) : r ? z0.parse : z0.parseInline)(c, n);
        return n.hooks ? await n.hooks.postprocess(d) : d;
      })().catch(i);
      try {
        n.hooks && (e = n.hooks.preprocess(e));
        let o = (n.hooks ? n.hooks.provideLexer(r) : r ? S0.lex : S0.lexInline)(e, n);
        n.hooks && (o = n.hooks.processAllTokens(o)), n.walkTokens && this.walkTokens(o, n.walkTokens);
        let u = (n.hooks ? n.hooks.provideParser(r) : r ? z0.parse : z0.parseInline)(o, n);
        return n.hooks && (u = n.hooks.postprocess(u)), u;
      } catch (o) {
        return i(o);
      }
    };
  }
  onError(r, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
        let a = "<p>An error occurred:</p><pre>" + T0(t.message + "", true) + "</pre>";
        return e ? Promise.resolve(a) : a;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, te = new b1();
function W(r, e) {
  return te.parse(r, e);
}
W.options = W.setOptions = function(r) {
  return te.setOptions(r), W.defaults = te.defaults, ka(W.defaults), W;
};
W.getDefaults = Jt;
W.defaults = re;
W.use = function(...r) {
  return te.use(...r), W.defaults = te.defaults, ka(W.defaults), W;
};
W.walkTokens = function(r, e) {
  return te.walkTokens(r, e);
};
W.parseInline = te.parseInline;
W.Parser = z0;
W.parser = z0.parse;
W.Renderer = Ze;
W.TextRenderer = sr;
W.Lexer = S0;
W.lexer = S0.lex;
W.Tokenizer = je;
W.Hooks = we;
W.parse = W;
W.options;
W.setOptions;
W.use;
W.walkTokens;
W.parseInline;
z0.parse;
S0.lex;
class z extends Error {
  constructor(e, t) {
    var a = "KaTeX parse error: " + e, n, i, o = t && t.loc;
    if (o && o.start <= o.end) {
      var u = o.lexer.input;
      n = o.start, i = o.end, n === u.length ? a += " at end of input: " : a += " at position " + (n + 1) + ": ";
      var c = u.slice(n, i).replace(/[^]/g, "$&\u0332"), d;
      n > 15 ? d = "\u2026" + u.slice(n - 15, n) : d = u.slice(0, n);
      var f;
      i + 15 < u.length ? f = u.slice(i, i + 15) + "\u2026" : f = u.slice(i), a += d + c + f;
    }
    super(a), this.name = "ParseError", this.position = void 0, this.length = void 0, this.rawMessage = void 0, Object.setPrototypeOf(this, z.prototype), this.position = n, n != null && i != null && (this.length = i - n), this.rawMessage = e;
  }
}
var x1 = /([A-Z])/g, y1 = (r) => r.replace(x1, "-$1").toLowerCase(), w1 = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" }, k1 = /[&><"']/g, l0 = (r) => String(r).replace(k1, (e) => w1[e]), Xe = (r) => r.type === "ordgroup" || r.type === "color" ? r.body.length === 1 ? Xe(r.body[0]) : r : r.type === "font" ? Xe(r.body) : r, S1 = /* @__PURE__ */ new Set(["mathord", "textord", "atom"]), L0 = (r) => S1.has(Xe(r).type), z1 = (r) => {
  var e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(r);
  return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
}, Et = { displayMode: { type: "boolean", description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.", cli: "-d, --display-mode" }, output: { type: { enum: ["htmlAndMathml", "html", "mathml"] }, description: "Determines the markup language of the output.", cli: "-F, --format <type>" }, leqno: { type: "boolean", description: "Render display math in leqno style (left-justified tags)." }, fleqn: { type: "boolean", description: "Render display math flush left." }, throwOnError: { type: "boolean", default: true, cli: "-t, --no-throw-on-error", cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error." }, errorColor: { type: "string", default: "#cc0000", cli: "-c, --error-color <color>", cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.", cliProcessor: (r) => "#" + r }, macros: { type: "object", cli: "-m, --macro <def>", cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).", cliDefault: [], cliProcessor: (r, e) => (e.push(r), e) }, minRuleThickness: { type: "number", description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.", processor: (r) => Math.max(0, r), cli: "--min-rule-thickness <size>", cliProcessor: parseFloat }, colorIsTextColor: { type: "boolean", description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.", cli: "-b, --color-is-text-color" }, strict: { type: [{ enum: ["warn", "ignore", "error"] }, "boolean", "function"], description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.", cli: "-S, --strict", cliDefault: false }, trust: { type: ["boolean", "function"], description: "Trust the input, enabling all HTML features such as \\url.", cli: "-T, --trust" }, maxSize: { type: "number", default: 1 / 0, description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large", processor: (r) => Math.max(0, r), cli: "-s, --max-size <n>", cliProcessor: parseInt }, maxExpand: { type: "number", default: 1e3, description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.", processor: (r) => Math.max(0, r), cli: "-e, --max-expand <n>", cliProcessor: (r) => r === "Infinity" ? 1 / 0 : parseInt(r) }, globalGroup: { type: "boolean", cli: false } };
function A1(r) {
  if (typeof r != "string") return r.enum[0];
  switch (r) {
    case "boolean":
      return false;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
    default:
      throw new Error("Unexpected schema type; settings must declare an explicit default.");
  }
}
function T1(r) {
  if (r.default !== void 0) return r.default;
  var e = Array.isArray(r.type) ? r.type[0] : r.type;
  return A1(e);
}
function M1(r, e, t, a) {
  var n = t[e];
  r[e] = n !== void 0 ? a.processor ? a.processor(n) : n : T1(a);
}
class lr {
  constructor(e) {
    e === void 0 && (e = {}), this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t of Object.keys(Et)) {
      var a = Et[t];
      a && M1(this, t, e, a);
    }
  }
  reportNonstrict(e, t, a) {
    var n = this.strict;
    if (typeof n == "function" && (n = n(e, t, a)), !(!n || n === "ignore")) {
      if (n === true || n === "error") throw new z("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), a);
      n === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]"));
    }
  }
  useStrictBehavior(e, t, a) {
    var n = this.strict;
    if (typeof n == "function") try {
      n = n(e, t, a);
    } catch {
      n = "error";
    }
    return !n || n === "ignore" ? false : n === true || n === "error" ? true : n === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), false) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]")), false);
  }
  isTrusted(e) {
    if ("url" in e && e.url && !e.protocol) {
      var t = z1(e.url);
      if (t == null) return false;
      e.protocol = t;
    }
    var a = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!a;
  }
}
class U0 {
  constructor(e, t, a) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = a;
  }
  sup() {
    return M0[C1[this.id]];
  }
  sub() {
    return M0[B1[this.id]];
  }
  fracNum() {
    return M0[D1[this.id]];
  }
  fracDen() {
    return M0[R1[this.id]];
  }
  cramp() {
    return M0[q1[this.id]];
  }
  text() {
    return M0[E1[this.id]];
  }
  isTight() {
    return this.size >= 2;
  }
}
var or = 0, Ke = 1, he = 2, I0 = 3, ze = 4, x0 = 5, ce = 6, h0 = 7, M0 = [new U0(or, 0, false), new U0(Ke, 0, true), new U0(he, 1, false), new U0(I0, 1, true), new U0(ze, 2, false), new U0(x0, 2, true), new U0(ce, 3, false), new U0(h0, 3, true)], C1 = [ze, x0, ze, x0, ce, h0, ce, h0], B1 = [x0, x0, x0, x0, h0, h0, h0, h0], D1 = [he, I0, ze, x0, ce, h0, ce, h0], R1 = [I0, I0, x0, x0, h0, h0, h0, h0], q1 = [Ke, Ke, I0, I0, x0, x0, h0, h0], E1 = [or, Ke, he, I0, he, I0, he, I0], L = { DISPLAY: M0[or], TEXT: M0[he], SCRIPT: M0[ze], SCRIPTSCRIPT: M0[ce] }, It = [{ name: "latin", blocks: [[256, 591], [768, 879]] }, { name: "cyrillic", blocks: [[1024, 1279]] }, { name: "armenian", blocks: [[1328, 1423]] }, { name: "brahmic", blocks: [[2304, 4255]] }, { name: "georgian", blocks: [[4256, 4351]] }, { name: "cjk", blocks: [[12288, 12543], [19968, 40879], [65280, 65376]] }, { name: "hangul", blocks: [[44032, 55215]] }];
function I1(r) {
  for (var e = 0; e < It.length; e++) for (var t = It[e], a = 0; a < t.blocks.length; a++) {
    var n = t.blocks[a];
    if (r >= n[0] && r <= n[1]) return t.name;
  }
  return null;
}
var Ye = [];
It.forEach((r) => r.blocks.forEach((e) => Ye.push(...e)));
function qa(r) {
  for (var e = 0; e < Ye.length; e += 2) if (r >= Ye[e] && r <= Ye[e + 1]) return true;
  return false;
}
var n0 = (r) => r + " " + r, ue = 80, N1 = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, L1 = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, F1 = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, H1 = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, O1 = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, $1 = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, P1 = function(e, t, a) {
  var n = a - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + n + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, G1 = function(e, t, a) {
  t = 1e3 * t;
  var n = "";
  switch (e) {
    case "sqrtMain":
      n = N1(t, ue);
      break;
    case "sqrtSize1":
      n = L1(t, ue);
      break;
    case "sqrtSize2":
      n = F1(t, ue);
      break;
    case "sqrtSize3":
      n = H1(t, ue);
      break;
    case "sqrtSize4":
      n = O1(t, ue);
      break;
    case "sqrtTall":
      n = P1(t, ue, a);
  }
  return n;
}, U1 = function(e, t) {
  switch (e) {
    case "\u239C":
      return n0("M291 0 H417 V" + t + " H291z");
    case "\u2223":
      return n0("M145 0 H188 V" + t + " H145z");
    case "\u2225":
      return n0("M145 0 H188 V" + t + " H145z") + n0("M367 0 H410 V" + t + " H367z");
    case "\u239F":
      return n0("M457 0 H583 V" + t + " H457z");
    case "\u23A2":
      return n0("M319 0 H403 V" + t + " H319z");
    case "\u23A5":
      return n0("M263 0 H347 V" + t + " H263z");
    case "\u23AA":
      return n0("M384 0 H504 V" + t + " H384z");
    case "\u23D0":
      return n0("M312 0 H355 V" + t + " H312z");
    case "\u2016":
      return n0("M257 0 H300 V" + t + " H257z") + n0("M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, Hr = { doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`, doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`, leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`, leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`, leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`, leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`, leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`, leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`, leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`, leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`, leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`, lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`, leftlinesegment: n0("M40 281 V428 H0 V94 H40 V241 H400000 v40z"), leftbracketunder: n0("M0 0 h120 V290 H399995 v120 H0z"), leftbracketover: n0("M0 440 h120 V150 H399995 v-120 H0z"), leftmapsto: n0("M40 281 V448H0V74H40V241H400000v40z"), leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`, longequal: n0("M0 50 h400000 v40H0z m0 194h40000v40H0z"), midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`, midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`, oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`, oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`, oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`, oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`, rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`, rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`, rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`, rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`, rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`, rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`, rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`, rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`, rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`, righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`, rightlinesegment: n0("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"), rightbracketunder: n0("M399995 0 h-120 V290 H0 v120 H400000z"), rightbracketover: n0("M399995 440 h-120 V150 H0 v-120 H399995z"), rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`, twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`, twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`, tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`, tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`, tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`, tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`, vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`, widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`, widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`, widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`, rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`, baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`, rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`, shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`, shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z` }, V1 = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 v84 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
function X1(r) {
  return "toText" in r;
}
class fe {
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++) e.appendChild(this.children[t].toNode());
    return e;
  }
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup();
    return e;
  }
  toText() {
    return this.children.map((e) => {
      if (X1(e)) return e.toText();
      throw new Error("Expected MathDomNode with toText, got " + e.constructor.name);
    }).join("");
  }
}
var Nt = { pt: 1, mm: 7227 / 2540, cm: 7227 / 254, in: 72.27, bp: 803 / 800, pc: 12, dd: 1238 / 1157, cc: 14856 / 1157, nd: 685 / 642, nc: 1370 / 107, sp: 1 / 65536, px: 803 / 800 }, Y1 = { ex: true, em: true, mu: true }, Ea = function(e) {
  return typeof e != "string" && (e = e.unit), e in Nt || e in Y1 || e === "ex";
}, J = function(e, t) {
  var a;
  if (e.unit in Nt) a = Nt[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu") a = t.fontMetrics().cssEmPerMu;
  else {
    var n;
    if (t.style.isTight() ? n = t.havingStyle(t.style.text()) : n = t, e.unit === "ex") a = n.fontMetrics().xHeight;
    else if (e.unit === "em") a = n.fontMetrics().quad;
    else throw new z("Invalid unit: '" + e.unit + "'");
    n !== t && (a *= n.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * a, t.maxSize);
}, T = function(e) {
  return +e.toFixed(4) + "em";
}, Y0 = function(e) {
  return e.filter((t) => t).join(" ");
}, ur = function(e) {
  var t = "";
  for (var a of Object.keys(e)) {
    var n = e[a];
    n !== void 0 && (t += y1(a) + ":" + n + ";");
  }
  return t;
}, Ia = function(e, t, a) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = a || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var n = t.getColor();
    n && (this.style.color = n);
  }
}, Na = function(e) {
  var t = document.createElement(e);
  t.className = Y0(this.classes), Object.assign(t.style, this.style);
  for (var a of Object.keys(this.attributes)) t.setAttribute(a, this.attributes[a]);
  for (var n = 0; n < this.children.length; n++) t.appendChild(this.children[n].toNode());
  return t;
}, W1 = /[\s"'>/=\x00-\x1f]/, La = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + l0(Y0(this.classes)) + '"');
  var a = ur(this.style);
  a && (t += ' style="' + l0(a) + '"');
  for (var n of Object.keys(this.attributes)) {
    if (W1.test(n)) throw new z("Invalid attribute name '" + n + "'");
    t += " " + n + '="' + l0(this.attributes[n]) + '"';
  }
  t += ">";
  for (var i = 0; i < this.children.length; i++) t += this.children[i].toMarkup();
  return t += "</" + e + ">", t;
};
class ve {
  constructor(e, t, a, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, this.italic = void 0, Ia.call(this, e, a, n), this.children = t || [];
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return Na.call(this, "span");
  }
  toMarkup() {
    return La.call(this, "span");
  }
}
class tt {
  constructor(e, t, a, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Ia.call(this, t, n), this.children = a || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return Na.call(this, "a");
  }
  toMarkup() {
    return La.call(this, "a");
  }
}
class j1 {
  constructor(e, t, a) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = a;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    var e = document.createElement("img");
    return e.src = this.src, e.alt = this.alt, e.className = "mord", Object.assign(e.style, this.style), e;
  }
  toMarkup() {
    var e = '<img src="' + l0(this.src) + '"' + (' alt="' + l0(this.alt) + '"'), t = ur(this.style);
    return t && (e += ' style="' + l0(t) + '"'), e += "'/>", e;
  }
}
var Z1 = { \u00EE: "\u0131\u0302", \u00EF: "\u0131\u0308", \u00ED: "\u0131\u0301", \u00EC: "\u0131\u0300" };
class v0 {
  constructor(e, t, a, n, i, o, u, c) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = a || 0, this.italic = n || 0, this.skew = i || 0, this.width = o || 0, this.classes = u || [], this.style = c || {}, this.maxFontSize = 0;
    var d = I1(this.text.charCodeAt(0));
    d && this.classes.push(d + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Z1[this.text]);
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    return this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = T(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = Y0(this.classes)), Object.keys(this.style).length > 0 && (t = t || document.createElement("span"), Object.assign(t.style, this.style)), t ? (t.appendChild(e), t) : e;
  }
  toMarkup() {
    var e = false, t = "<span";
    this.classes.length && (e = true, t += ' class="', t += l0(Y0(this.classes)), t += '"');
    var a = "";
    this.italic > 0 && (a += "margin-right:" + T(this.italic) + ";"), a += ur(this.style), a && (e = true, t += ' style="' + l0(a) + '"');
    var n = l0(this.text);
    return e ? (t += ">", t += n, t += "</span>", t) : n;
  }
}
class N0 {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var a of Object.keys(this.attributes)) t.setAttribute(a, this.attributes[a]);
    for (var n = 0; n < this.children.length; n++) t.appendChild(this.children[n].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t of Object.keys(this.attributes)) e += " " + t + '="' + l0(this.attributes[t]) + '"';
    e += ">";
    for (var a = 0; a < this.children.length; a++) e += this.children[a].toMarkup();
    return e += "</svg>", e;
  }
}
class W0 {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Hr[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + l0(this.alternate) + '"/>' : '<path d="' + l0(Hr[this.pathName]) + '"/>';
  }
}
class Lt {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var a of Object.keys(this.attributes)) t.setAttribute(a, this.attributes[a]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t of Object.keys(this.attributes)) e += " " + t + '="' + l0(this.attributes[t]) + '"';
    return e += "/>", e;
  }
}
function K1(r) {
  if (r instanceof v0) return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function Q1(r) {
  if (r instanceof ve) return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var J1 = (r) => r instanceof ve || r instanceof tt || r instanceof fe, C0 = { "AMS-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68889, 0, 0, 0.72222], 66: [0, 0.68889, 0, 0, 0.66667], 67: [0, 0.68889, 0, 0, 0.72222], 68: [0, 0.68889, 0, 0, 0.72222], 69: [0, 0.68889, 0, 0, 0.66667], 70: [0, 0.68889, 0, 0, 0.61111], 71: [0, 0.68889, 0, 0, 0.77778], 72: [0, 0.68889, 0, 0, 0.77778], 73: [0, 0.68889, 0, 0, 0.38889], 74: [0.16667, 0.68889, 0, 0, 0.5], 75: [0, 0.68889, 0, 0, 0.77778], 76: [0, 0.68889, 0, 0, 0.66667], 77: [0, 0.68889, 0, 0, 0.94445], 78: [0, 0.68889, 0, 0, 0.72222], 79: [0.16667, 0.68889, 0, 0, 0.77778], 80: [0, 0.68889, 0, 0, 0.61111], 81: [0.16667, 0.68889, 0, 0, 0.77778], 82: [0, 0.68889, 0, 0, 0.72222], 83: [0, 0.68889, 0, 0, 0.55556], 84: [0, 0.68889, 0, 0, 0.66667], 85: [0, 0.68889, 0, 0, 0.72222], 86: [0, 0.68889, 0, 0, 0.72222], 87: [0, 0.68889, 0, 0, 1], 88: [0, 0.68889, 0, 0, 0.72222], 89: [0, 0.68889, 0, 0, 0.72222], 90: [0, 0.68889, 0, 0, 0.66667], 107: [0, 0.68889, 0, 0, 0.55556], 160: [0, 0, 0, 0, 0.25], 165: [0, 0.675, 0.025, 0, 0.75], 174: [0.15559, 0.69224, 0, 0, 0.94666], 240: [0, 0.68889, 0, 0, 0.55556], 295: [0, 0.68889, 0, 0, 0.54028], 710: [0, 0.825, 0, 0, 2.33334], 732: [0, 0.9, 0, 0, 2.33334], 770: [0, 0.825, 0, 0, 2.33334], 771: [0, 0.9, 0, 0, 2.33334], 989: [0.08167, 0.58167, 0, 0, 0.77778], 1008: [0, 0.43056, 0.04028, 0, 0.66667], 8245: [0, 0.54986, 0, 0, 0.275], 8463: [0, 0.68889, 0, 0, 0.54028], 8487: [0, 0.68889, 0, 0, 0.72222], 8498: [0, 0.68889, 0, 0, 0.55556], 8502: [0, 0.68889, 0, 0, 0.66667], 8503: [0, 0.68889, 0, 0, 0.44445], 8504: [0, 0.68889, 0, 0, 0.66667], 8513: [0, 0.68889, 0, 0, 0.63889], 8592: [-0.03598, 0.46402, 0, 0, 0.5], 8594: [-0.03598, 0.46402, 0, 0, 0.5], 8602: [-0.13313, 0.36687, 0, 0, 1], 8603: [-0.13313, 0.36687, 0, 0, 1], 8606: [0.01354, 0.52239, 0, 0, 1], 8608: [0.01354, 0.52239, 0, 0, 1], 8610: [0.01354, 0.52239, 0, 0, 1.11111], 8611: [0.01354, 0.52239, 0, 0, 1.11111], 8619: [0, 0.54986, 0, 0, 1], 8620: [0, 0.54986, 0, 0, 1], 8621: [-0.13313, 0.37788, 0, 0, 1.38889], 8622: [-0.13313, 0.36687, 0, 0, 1], 8624: [0, 0.69224, 0, 0, 0.5], 8625: [0, 0.69224, 0, 0, 0.5], 8630: [0, 0.43056, 0, 0, 1], 8631: [0, 0.43056, 0, 0, 1], 8634: [0.08198, 0.58198, 0, 0, 0.77778], 8635: [0.08198, 0.58198, 0, 0, 0.77778], 8638: [0.19444, 0.69224, 0, 0, 0.41667], 8639: [0.19444, 0.69224, 0, 0, 0.41667], 8642: [0.19444, 0.69224, 0, 0, 0.41667], 8643: [0.19444, 0.69224, 0, 0, 0.41667], 8644: [0.1808, 0.675, 0, 0, 1], 8646: [0.1808, 0.675, 0, 0, 1], 8647: [0.1808, 0.675, 0, 0, 1], 8648: [0.19444, 0.69224, 0, 0, 0.83334], 8649: [0.1808, 0.675, 0, 0, 1], 8650: [0.19444, 0.69224, 0, 0, 0.83334], 8651: [0.01354, 0.52239, 0, 0, 1], 8652: [0.01354, 0.52239, 0, 0, 1], 8653: [-0.13313, 0.36687, 0, 0, 1], 8654: [-0.13313, 0.36687, 0, 0, 1], 8655: [-0.13313, 0.36687, 0, 0, 1], 8666: [0.13667, 0.63667, 0, 0, 1], 8667: [0.13667, 0.63667, 0, 0, 1], 8669: [-0.13313, 0.37788, 0, 0, 1], 8672: [-0.064, 0.437, 0, 0, 1.334], 8674: [-0.064, 0.437, 0, 0, 1.334], 8705: [0, 0.825, 0, 0, 0.5], 8708: [0, 0.68889, 0, 0, 0.55556], 8709: [0.08167, 0.58167, 0, 0, 0.77778], 8717: [0, 0.43056, 0, 0, 0.42917], 8722: [-0.03598, 0.46402, 0, 0, 0.5], 8724: [0.08198, 0.69224, 0, 0, 0.77778], 8726: [0.08167, 0.58167, 0, 0, 0.77778], 8733: [0, 0.69224, 0, 0, 0.77778], 8736: [0, 0.69224, 0, 0, 0.72222], 8737: [0, 0.69224, 0, 0, 0.72222], 8738: [0.03517, 0.52239, 0, 0, 0.72222], 8739: [0.08167, 0.58167, 0, 0, 0.22222], 8740: [0.25142, 0.74111, 0, 0, 0.27778], 8741: [0.08167, 0.58167, 0, 0, 0.38889], 8742: [0.25142, 0.74111, 0, 0, 0.5], 8756: [0, 0.69224, 0, 0, 0.66667], 8757: [0, 0.69224, 0, 0, 0.66667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8765: [-0.13313, 0.37788, 0, 0, 0.77778], 8769: [-0.13313, 0.36687, 0, 0, 0.77778], 8770: [-0.03625, 0.46375, 0, 0, 0.77778], 8774: [0.30274, 0.79383, 0, 0, 0.77778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8778: [0.08167, 0.58167, 0, 0, 0.77778], 8782: [0.06062, 0.54986, 0, 0, 0.77778], 8783: [0.06062, 0.54986, 0, 0, 0.77778], 8785: [0.08198, 0.58198, 0, 0, 0.77778], 8786: [0.08198, 0.58198, 0, 0, 0.77778], 8787: [0.08198, 0.58198, 0, 0, 0.77778], 8790: [0, 0.69224, 0, 0, 0.77778], 8791: [0.22958, 0.72958, 0, 0, 0.77778], 8796: [0.08198, 0.91667, 0, 0, 0.77778], 8806: [0.25583, 0.75583, 0, 0, 0.77778], 8807: [0.25583, 0.75583, 0, 0, 0.77778], 8808: [0.25142, 0.75726, 0, 0, 0.77778], 8809: [0.25142, 0.75726, 0, 0, 0.77778], 8812: [0.25583, 0.75583, 0, 0, 0.5], 8814: [0.20576, 0.70576, 0, 0, 0.77778], 8815: [0.20576, 0.70576, 0, 0, 0.77778], 8816: [0.30274, 0.79383, 0, 0, 0.77778], 8817: [0.30274, 0.79383, 0, 0, 0.77778], 8818: [0.22958, 0.72958, 0, 0, 0.77778], 8819: [0.22958, 0.72958, 0, 0, 0.77778], 8822: [0.1808, 0.675, 0, 0, 0.77778], 8823: [0.1808, 0.675, 0, 0, 0.77778], 8828: [0.13667, 0.63667, 0, 0, 0.77778], 8829: [0.13667, 0.63667, 0, 0, 0.77778], 8830: [0.22958, 0.72958, 0, 0, 0.77778], 8831: [0.22958, 0.72958, 0, 0, 0.77778], 8832: [0.20576, 0.70576, 0, 0, 0.77778], 8833: [0.20576, 0.70576, 0, 0, 0.77778], 8840: [0.30274, 0.79383, 0, 0, 0.77778], 8841: [0.30274, 0.79383, 0, 0, 0.77778], 8842: [0.13597, 0.63597, 0, 0, 0.77778], 8843: [0.13597, 0.63597, 0, 0, 0.77778], 8847: [0.03517, 0.54986, 0, 0, 0.77778], 8848: [0.03517, 0.54986, 0, 0, 0.77778], 8858: [0.08198, 0.58198, 0, 0, 0.77778], 8859: [0.08198, 0.58198, 0, 0, 0.77778], 8861: [0.08198, 0.58198, 0, 0, 0.77778], 8862: [0, 0.675, 0, 0, 0.77778], 8863: [0, 0.675, 0, 0, 0.77778], 8864: [0, 0.675, 0, 0, 0.77778], 8865: [0, 0.675, 0, 0, 0.77778], 8872: [0, 0.69224, 0, 0, 0.61111], 8873: [0, 0.69224, 0, 0, 0.72222], 8874: [0, 0.69224, 0, 0, 0.88889], 8876: [0, 0.68889, 0, 0, 0.61111], 8877: [0, 0.68889, 0, 0, 0.61111], 8878: [0, 0.68889, 0, 0, 0.72222], 8879: [0, 0.68889, 0, 0, 0.72222], 8882: [0.03517, 0.54986, 0, 0, 0.77778], 8883: [0.03517, 0.54986, 0, 0, 0.77778], 8884: [0.13667, 0.63667, 0, 0, 0.77778], 8885: [0.13667, 0.63667, 0, 0, 0.77778], 8888: [0, 0.54986, 0, 0, 1.11111], 8890: [0.19444, 0.43056, 0, 0, 0.55556], 8891: [0.19444, 0.69224, 0, 0, 0.61111], 8892: [0.19444, 0.69224, 0, 0, 0.61111], 8901: [0, 0.54986, 0, 0, 0.27778], 8903: [0.08167, 0.58167, 0, 0, 0.77778], 8905: [0.08167, 0.58167, 0, 0, 0.77778], 8906: [0.08167, 0.58167, 0, 0, 0.77778], 8907: [0, 0.69224, 0, 0, 0.77778], 8908: [0, 0.69224, 0, 0, 0.77778], 8909: [-0.03598, 0.46402, 0, 0, 0.77778], 8910: [0, 0.54986, 0, 0, 0.76042], 8911: [0, 0.54986, 0, 0, 0.76042], 8912: [0.03517, 0.54986, 0, 0, 0.77778], 8913: [0.03517, 0.54986, 0, 0, 0.77778], 8914: [0, 0.54986, 0, 0, 0.66667], 8915: [0, 0.54986, 0, 0, 0.66667], 8916: [0, 0.69224, 0, 0, 0.66667], 8918: [0.0391, 0.5391, 0, 0, 0.77778], 8919: [0.0391, 0.5391, 0, 0, 0.77778], 8920: [0.03517, 0.54986, 0, 0, 1.33334], 8921: [0.03517, 0.54986, 0, 0, 1.33334], 8922: [0.38569, 0.88569, 0, 0, 0.77778], 8923: [0.38569, 0.88569, 0, 0, 0.77778], 8926: [0.13667, 0.63667, 0, 0, 0.77778], 8927: [0.13667, 0.63667, 0, 0, 0.77778], 8928: [0.30274, 0.79383, 0, 0, 0.77778], 8929: [0.30274, 0.79383, 0, 0, 0.77778], 8934: [0.23222, 0.74111, 0, 0, 0.77778], 8935: [0.23222, 0.74111, 0, 0, 0.77778], 8936: [0.23222, 0.74111, 0, 0, 0.77778], 8937: [0.23222, 0.74111, 0, 0, 0.77778], 8938: [0.20576, 0.70576, 0, 0, 0.77778], 8939: [0.20576, 0.70576, 0, 0, 0.77778], 8940: [0.30274, 0.79383, 0, 0, 0.77778], 8941: [0.30274, 0.79383, 0, 0, 0.77778], 8994: [0.19444, 0.69224, 0, 0, 0.77778], 8995: [0.19444, 0.69224, 0, 0, 0.77778], 9416: [0.15559, 0.69224, 0, 0, 0.90222], 9484: [0, 0.69224, 0, 0, 0.5], 9488: [0, 0.69224, 0, 0, 0.5], 9492: [0, 0.37788, 0, 0, 0.5], 9496: [0, 0.37788, 0, 0, 0.5], 9585: [0.19444, 0.68889, 0, 0, 0.88889], 9586: [0.19444, 0.74111, 0, 0, 0.88889], 9632: [0, 0.675, 0, 0, 0.77778], 9633: [0, 0.675, 0, 0, 0.77778], 9650: [0, 0.54986, 0, 0, 0.72222], 9651: [0, 0.54986, 0, 0, 0.72222], 9654: [0.03517, 0.54986, 0, 0, 0.77778], 9660: [0, 0.54986, 0, 0, 0.72222], 9661: [0, 0.54986, 0, 0, 0.72222], 9664: [0.03517, 0.54986, 0, 0, 0.77778], 9674: [0.11111, 0.69224, 0, 0, 0.66667], 9733: [0.19444, 0.69224, 0, 0, 0.94445], 10003: [0, 0.69224, 0, 0, 0.83334], 10016: [0, 0.69224, 0, 0, 0.83334], 10731: [0.11111, 0.69224, 0, 0, 0.66667], 10846: [0.19444, 0.75583, 0, 0, 0.61111], 10877: [0.13667, 0.63667, 0, 0, 0.77778], 10878: [0.13667, 0.63667, 0, 0, 0.77778], 10885: [0.25583, 0.75583, 0, 0, 0.77778], 10886: [0.25583, 0.75583, 0, 0, 0.77778], 10887: [0.13597, 0.63597, 0, 0, 0.77778], 10888: [0.13597, 0.63597, 0, 0, 0.77778], 10889: [0.26167, 0.75726, 0, 0, 0.77778], 10890: [0.26167, 0.75726, 0, 0, 0.77778], 10891: [0.48256, 0.98256, 0, 0, 0.77778], 10892: [0.48256, 0.98256, 0, 0, 0.77778], 10901: [0.13667, 0.63667, 0, 0, 0.77778], 10902: [0.13667, 0.63667, 0, 0, 0.77778], 10933: [0.25142, 0.75726, 0, 0, 0.77778], 10934: [0.25142, 0.75726, 0, 0, 0.77778], 10935: [0.26167, 0.75726, 0, 0, 0.77778], 10936: [0.26167, 0.75726, 0, 0, 0.77778], 10937: [0.26167, 0.75726, 0, 0, 0.77778], 10938: [0.26167, 0.75726, 0, 0, 0.77778], 10949: [0.25583, 0.75583, 0, 0, 0.77778], 10950: [0.25583, 0.75583, 0, 0, 0.77778], 10955: [0.28481, 0.79383, 0, 0, 0.77778], 10956: [0.28481, 0.79383, 0, 0, 0.77778], 57350: [0.08167, 0.58167, 0, 0, 0.22222], 57351: [0.08167, 0.58167, 0, 0, 0.38889], 57352: [0.08167, 0.58167, 0, 0, 0.77778], 57353: [0, 0.43056, 0.04028, 0, 0.66667], 57356: [0.25142, 0.75726, 0, 0, 0.77778], 57357: [0.25142, 0.75726, 0, 0, 0.77778], 57358: [0.41951, 0.91951, 0, 0, 0.77778], 57359: [0.30274, 0.79383, 0, 0, 0.77778], 57360: [0.30274, 0.79383, 0, 0, 0.77778], 57361: [0.41951, 0.91951, 0, 0, 0.77778], 57366: [0.25142, 0.75726, 0, 0, 0.77778], 57367: [0.25142, 0.75726, 0, 0, 0.77778], 57368: [0.25142, 0.75726, 0, 0, 0.77778], 57369: [0.25142, 0.75726, 0, 0, 0.77778], 57370: [0.13597, 0.63597, 0, 0, 0.77778], 57371: [0.13597, 0.63597, 0, 0, 0.77778] }, "Caligraphic-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68333, 0, 0.19445, 0.79847], 66: [0, 0.68333, 0.03041, 0.13889, 0.65681], 67: [0, 0.68333, 0.05834, 0.13889, 0.52653], 68: [0, 0.68333, 0.02778, 0.08334, 0.77139], 69: [0, 0.68333, 0.08944, 0.11111, 0.52778], 70: [0, 0.68333, 0.09931, 0.11111, 0.71875], 71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487], 72: [0, 0.68333, 965e-5, 0.11111, 0.84452], 73: [0, 0.68333, 0.07382, 0, 0.54452], 74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778], 75: [0, 0.68333, 0.01445, 0.05556, 0.76195], 76: [0, 0.68333, 0, 0.13889, 0.68972], 77: [0, 0.68333, 0, 0.13889, 1.2009], 78: [0, 0.68333, 0.14736, 0.08334, 0.82049], 79: [0, 0.68333, 0.02778, 0.11111, 0.79611], 80: [0, 0.68333, 0.08222, 0.08334, 0.69556], 81: [0.09722, 0.68333, 0, 0.11111, 0.81667], 82: [0, 0.68333, 0, 0.08334, 0.8475], 83: [0, 0.68333, 0.075, 0.13889, 0.60556], 84: [0, 0.68333, 0.25417, 0, 0.54464], 85: [0, 0.68333, 0.09931, 0.08334, 0.62583], 86: [0, 0.68333, 0.08222, 0, 0.61278], 87: [0, 0.68333, 0.08222, 0.08334, 0.98778], 88: [0, 0.68333, 0.14643, 0.13889, 0.7133], 89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834], 90: [0, 0.68333, 0.07944, 0.13889, 0.72473], 160: [0, 0, 0, 0, 0.25] }, "Fraktur-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69141, 0, 0, 0.29574], 34: [0, 0.69141, 0, 0, 0.21471], 38: [0, 0.69141, 0, 0, 0.73786], 39: [0, 0.69141, 0, 0, 0.21201], 40: [0.24982, 0.74947, 0, 0, 0.38865], 41: [0.24982, 0.74947, 0, 0, 0.38865], 42: [0, 0.62119, 0, 0, 0.27764], 43: [0.08319, 0.58283, 0, 0, 0.75623], 44: [0, 0.10803, 0, 0, 0.27764], 45: [0.08319, 0.58283, 0, 0, 0.75623], 46: [0, 0.10803, 0, 0, 0.27764], 47: [0.24982, 0.74947, 0, 0, 0.50181], 48: [0, 0.47534, 0, 0, 0.50181], 49: [0, 0.47534, 0, 0, 0.50181], 50: [0, 0.47534, 0, 0, 0.50181], 51: [0.18906, 0.47534, 0, 0, 0.50181], 52: [0.18906, 0.47534, 0, 0, 0.50181], 53: [0.18906, 0.47534, 0, 0, 0.50181], 54: [0, 0.69141, 0, 0, 0.50181], 55: [0.18906, 0.47534, 0, 0, 0.50181], 56: [0, 0.69141, 0, 0, 0.50181], 57: [0.18906, 0.47534, 0, 0, 0.50181], 58: [0, 0.47534, 0, 0, 0.21606], 59: [0.12604, 0.47534, 0, 0, 0.21606], 61: [-0.13099, 0.36866, 0, 0, 0.75623], 63: [0, 0.69141, 0, 0, 0.36245], 65: [0, 0.69141, 0, 0, 0.7176], 66: [0, 0.69141, 0, 0, 0.88397], 67: [0, 0.69141, 0, 0, 0.61254], 68: [0, 0.69141, 0, 0, 0.83158], 69: [0, 0.69141, 0, 0, 0.66278], 70: [0.12604, 0.69141, 0, 0, 0.61119], 71: [0, 0.69141, 0, 0, 0.78539], 72: [0.06302, 0.69141, 0, 0, 0.7203], 73: [0, 0.69141, 0, 0, 0.55448], 74: [0.12604, 0.69141, 0, 0, 0.55231], 75: [0, 0.69141, 0, 0, 0.66845], 76: [0, 0.69141, 0, 0, 0.66602], 77: [0, 0.69141, 0, 0, 1.04953], 78: [0, 0.69141, 0, 0, 0.83212], 79: [0, 0.69141, 0, 0, 0.82699], 80: [0.18906, 0.69141, 0, 0, 0.82753], 81: [0.03781, 0.69141, 0, 0, 0.82699], 82: [0, 0.69141, 0, 0, 0.82807], 83: [0, 0.69141, 0, 0, 0.82861], 84: [0, 0.69141, 0, 0, 0.66899], 85: [0, 0.69141, 0, 0, 0.64576], 86: [0, 0.69141, 0, 0, 0.83131], 87: [0, 0.69141, 0, 0, 1.04602], 88: [0, 0.69141, 0, 0, 0.71922], 89: [0.18906, 0.69141, 0, 0, 0.83293], 90: [0.12604, 0.69141, 0, 0, 0.60201], 91: [0.24982, 0.74947, 0, 0, 0.27764], 93: [0.24982, 0.74947, 0, 0, 0.27764], 94: [0, 0.69141, 0, 0, 0.49965], 97: [0, 0.47534, 0, 0, 0.50046], 98: [0, 0.69141, 0, 0, 0.51315], 99: [0, 0.47534, 0, 0, 0.38946], 100: [0, 0.62119, 0, 0, 0.49857], 101: [0, 0.47534, 0, 0, 0.40053], 102: [0.18906, 0.69141, 0, 0, 0.32626], 103: [0.18906, 0.47534, 0, 0, 0.5037], 104: [0.18906, 0.69141, 0, 0, 0.52126], 105: [0, 0.69141, 0, 0, 0.27899], 106: [0, 0.69141, 0, 0, 0.28088], 107: [0, 0.69141, 0, 0, 0.38946], 108: [0, 0.69141, 0, 0, 0.27953], 109: [0, 0.47534, 0, 0, 0.76676], 110: [0, 0.47534, 0, 0, 0.52666], 111: [0, 0.47534, 0, 0, 0.48885], 112: [0.18906, 0.52396, 0, 0, 0.50046], 113: [0.18906, 0.47534, 0, 0, 0.48912], 114: [0, 0.47534, 0, 0, 0.38919], 115: [0, 0.47534, 0, 0, 0.44266], 116: [0, 0.62119, 0, 0, 0.33301], 117: [0, 0.47534, 0, 0, 0.5172], 118: [0, 0.52396, 0, 0, 0.5118], 119: [0, 0.52396, 0, 0, 0.77351], 120: [0.18906, 0.47534, 0, 0, 0.38865], 121: [0.18906, 0.47534, 0, 0, 0.49884], 122: [0.18906, 0.47534, 0, 0, 0.39054], 160: [0, 0, 0, 0, 0.25], 8216: [0, 0.69141, 0, 0, 0.21471], 8217: [0, 0.69141, 0, 0, 0.21471], 58112: [0, 0.62119, 0, 0, 0.49749], 58113: [0, 0.62119, 0, 0, 0.4983], 58114: [0.18906, 0.69141, 0, 0, 0.33328], 58115: [0.18906, 0.69141, 0, 0, 0.32923], 58116: [0.18906, 0.47534, 0, 0, 0.50343], 58117: [0, 0.69141, 0, 0, 0.33301], 58118: [0, 0.62119, 0, 0, 0.33409], 58119: [0, 0.47534, 0, 0, 0.50073] }, "Main-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.35], 34: [0, 0.69444, 0, 0, 0.60278], 35: [0.19444, 0.69444, 0, 0, 0.95833], 36: [0.05556, 0.75, 0, 0, 0.575], 37: [0.05556, 0.75, 0, 0, 0.95833], 38: [0, 0.69444, 0, 0, 0.89444], 39: [0, 0.69444, 0, 0, 0.31944], 40: [0.25, 0.75, 0, 0, 0.44722], 41: [0.25, 0.75, 0, 0, 0.44722], 42: [0, 0.75, 0, 0, 0.575], 43: [0.13333, 0.63333, 0, 0, 0.89444], 44: [0.19444, 0.15556, 0, 0, 0.31944], 45: [0, 0.44444, 0, 0, 0.38333], 46: [0, 0.15556, 0, 0, 0.31944], 47: [0.25, 0.75, 0, 0, 0.575], 48: [0, 0.64444, 0, 0, 0.575], 49: [0, 0.64444, 0, 0, 0.575], 50: [0, 0.64444, 0, 0, 0.575], 51: [0, 0.64444, 0, 0, 0.575], 52: [0, 0.64444, 0, 0, 0.575], 53: [0, 0.64444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0, 0.64444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0, 0.64444, 0, 0, 0.575], 58: [0, 0.44444, 0, 0, 0.31944], 59: [0.19444, 0.44444, 0, 0, 0.31944], 60: [0.08556, 0.58556, 0, 0, 0.89444], 61: [-0.10889, 0.39111, 0, 0, 0.89444], 62: [0.08556, 0.58556, 0, 0, 0.89444], 63: [0, 0.69444, 0, 0, 0.54305], 64: [0, 0.69444, 0, 0, 0.89444], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0, 0, 0.81805], 67: [0, 0.68611, 0, 0, 0.83055], 68: [0, 0.68611, 0, 0, 0.88194], 69: [0, 0.68611, 0, 0, 0.75555], 70: [0, 0.68611, 0, 0, 0.72361], 71: [0, 0.68611, 0, 0, 0.90416], 72: [0, 0.68611, 0, 0, 0.9], 73: [0, 0.68611, 0, 0, 0.43611], 74: [0, 0.68611, 0, 0, 0.59444], 75: [0, 0.68611, 0, 0, 0.90138], 76: [0, 0.68611, 0, 0, 0.69166], 77: [0, 0.68611, 0, 0, 1.09166], 78: [0, 0.68611, 0, 0, 0.9], 79: [0, 0.68611, 0, 0, 0.86388], 80: [0, 0.68611, 0, 0, 0.78611], 81: [0.19444, 0.68611, 0, 0, 0.86388], 82: [0, 0.68611, 0, 0, 0.8625], 83: [0, 0.68611, 0, 0, 0.63889], 84: [0, 0.68611, 0, 0, 0.8], 85: [0, 0.68611, 0, 0, 0.88472], 86: [0, 0.68611, 0.01597, 0, 0.86944], 87: [0, 0.68611, 0.01597, 0, 1.18888], 88: [0, 0.68611, 0, 0, 0.86944], 89: [0, 0.68611, 0.02875, 0, 0.86944], 90: [0, 0.68611, 0, 0, 0.70277], 91: [0.25, 0.75, 0, 0, 0.31944], 92: [0.25, 0.75, 0, 0, 0.575], 93: [0.25, 0.75, 0, 0, 0.31944], 94: [0, 0.69444, 0, 0, 0.575], 95: [0.31, 0.13444, 0.03194, 0, 0.575], 97: [0, 0.44444, 0, 0, 0.55902], 98: [0, 0.69444, 0, 0, 0.63889], 99: [0, 0.44444, 0, 0, 0.51111], 100: [0, 0.69444, 0, 0, 0.63889], 101: [0, 0.44444, 0, 0, 0.52708], 102: [0, 0.69444, 0.10903, 0, 0.35139], 103: [0.19444, 0.44444, 0.01597, 0, 0.575], 104: [0, 0.69444, 0, 0, 0.63889], 105: [0, 0.69444, 0, 0, 0.31944], 106: [0.19444, 0.69444, 0, 0, 0.35139], 107: [0, 0.69444, 0, 0, 0.60694], 108: [0, 0.69444, 0, 0, 0.31944], 109: [0, 0.44444, 0, 0, 0.95833], 110: [0, 0.44444, 0, 0, 0.63889], 111: [0, 0.44444, 0, 0, 0.575], 112: [0.19444, 0.44444, 0, 0, 0.63889], 113: [0.19444, 0.44444, 0, 0, 0.60694], 114: [0, 0.44444, 0, 0, 0.47361], 115: [0, 0.44444, 0, 0, 0.45361], 116: [0, 0.63492, 0, 0, 0.44722], 117: [0, 0.44444, 0, 0, 0.63889], 118: [0, 0.44444, 0.01597, 0, 0.60694], 119: [0, 0.44444, 0.01597, 0, 0.83055], 120: [0, 0.44444, 0, 0, 0.60694], 121: [0.19444, 0.44444, 0.01597, 0, 0.60694], 122: [0, 0.44444, 0, 0, 0.51111], 123: [0.25, 0.75, 0, 0, 0.575], 124: [0.25, 0.75, 0, 0, 0.31944], 125: [0.25, 0.75, 0, 0, 0.575], 126: [0.35, 0.34444, 0, 0, 0.575], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.86853], 168: [0, 0.69444, 0, 0, 0.575], 172: [0, 0.44444, 0, 0, 0.76666], 176: [0, 0.69444, 0, 0, 0.86944], 177: [0.13333, 0.63333, 0, 0, 0.89444], 184: [0.17014, 0, 0, 0, 0.51111], 198: [0, 0.68611, 0, 0, 1.04166], 215: [0.13333, 0.63333, 0, 0, 0.89444], 216: [0.04861, 0.73472, 0, 0, 0.89444], 223: [0, 0.69444, 0, 0, 0.59722], 230: [0, 0.44444, 0, 0, 0.83055], 247: [0.13333, 0.63333, 0, 0, 0.89444], 248: [0.09722, 0.54167, 0, 0, 0.575], 305: [0, 0.44444, 0, 0, 0.31944], 338: [0, 0.68611, 0, 0, 1.16944], 339: [0, 0.44444, 0, 0, 0.89444], 567: [0.19444, 0.44444, 0, 0, 0.35139], 710: [0, 0.69444, 0, 0, 0.575], 711: [0, 0.63194, 0, 0, 0.575], 713: [0, 0.59611, 0, 0, 0.575], 714: [0, 0.69444, 0, 0, 0.575], 715: [0, 0.69444, 0, 0, 0.575], 728: [0, 0.69444, 0, 0, 0.575], 729: [0, 0.69444, 0, 0, 0.31944], 730: [0, 0.69444, 0, 0, 0.86944], 732: [0, 0.69444, 0, 0, 0.575], 733: [0, 0.69444, 0, 0, 0.575], 915: [0, 0.68611, 0, 0, 0.69166], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0, 0, 0.89444], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0, 0, 0.76666], 928: [0, 0.68611, 0, 0, 0.9], 931: [0, 0.68611, 0, 0, 0.83055], 933: [0, 0.68611, 0, 0, 0.89444], 934: [0, 0.68611, 0, 0, 0.83055], 936: [0, 0.68611, 0, 0, 0.89444], 937: [0, 0.68611, 0, 0, 0.83055], 8211: [0, 0.44444, 0.03194, 0, 0.575], 8212: [0, 0.44444, 0.03194, 0, 1.14999], 8216: [0, 0.69444, 0, 0, 0.31944], 8217: [0, 0.69444, 0, 0, 0.31944], 8220: [0, 0.69444, 0, 0, 0.60278], 8221: [0, 0.69444, 0, 0, 0.60278], 8224: [0.19444, 0.69444, 0, 0, 0.51111], 8225: [0.19444, 0.69444, 0, 0, 0.51111], 8242: [0, 0.55556, 0, 0, 0.34444], 8407: [0, 0.72444, 0.15486, 0, 0.575], 8463: [0, 0.69444, 0, 0, 0.66759], 8465: [0, 0.69444, 0, 0, 0.83055], 8467: [0, 0.69444, 0, 0, 0.47361], 8472: [0.19444, 0.44444, 0, 0, 0.74027], 8476: [0, 0.69444, 0, 0, 0.83055], 8501: [0, 0.69444, 0, 0, 0.70277], 8592: [-0.10889, 0.39111, 0, 0, 1.14999], 8593: [0.19444, 0.69444, 0, 0, 0.575], 8594: [-0.10889, 0.39111, 0, 0, 1.14999], 8595: [0.19444, 0.69444, 0, 0, 0.575], 8596: [-0.10889, 0.39111, 0, 0, 1.14999], 8597: [0.25, 0.75, 0, 0, 0.575], 8598: [0.19444, 0.69444, 0, 0, 1.14999], 8599: [0.19444, 0.69444, 0, 0, 1.14999], 8600: [0.19444, 0.69444, 0, 0, 1.14999], 8601: [0.19444, 0.69444, 0, 0, 1.14999], 8636: [-0.10889, 0.39111, 0, 0, 1.14999], 8637: [-0.10889, 0.39111, 0, 0, 1.14999], 8640: [-0.10889, 0.39111, 0, 0, 1.14999], 8641: [-0.10889, 0.39111, 0, 0, 1.14999], 8656: [-0.10889, 0.39111, 0, 0, 1.14999], 8657: [0.19444, 0.69444, 0, 0, 0.70277], 8658: [-0.10889, 0.39111, 0, 0, 1.14999], 8659: [0.19444, 0.69444, 0, 0, 0.70277], 8660: [-0.10889, 0.39111, 0, 0, 1.14999], 8661: [0.25, 0.75, 0, 0, 0.70277], 8704: [0, 0.69444, 0, 0, 0.63889], 8706: [0, 0.69444, 0.06389, 0, 0.62847], 8707: [0, 0.69444, 0, 0, 0.63889], 8709: [0.05556, 0.75, 0, 0, 0.575], 8711: [0, 0.68611, 0, 0, 0.95833], 8712: [0.08556, 0.58556, 0, 0, 0.76666], 8715: [0.08556, 0.58556, 0, 0, 0.76666], 8722: [0.13333, 0.63333, 0, 0, 0.89444], 8723: [0.13333, 0.63333, 0, 0, 0.89444], 8725: [0.25, 0.75, 0, 0, 0.575], 8726: [0.25, 0.75, 0, 0, 0.575], 8727: [-0.02778, 0.47222, 0, 0, 0.575], 8728: [-0.02639, 0.47361, 0, 0, 0.575], 8729: [-0.02639, 0.47361, 0, 0, 0.575], 8730: [0.18, 0.82, 0, 0, 0.95833], 8733: [0, 0.44444, 0, 0, 0.89444], 8734: [0, 0.44444, 0, 0, 1.14999], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.31944], 8741: [0.25, 0.75, 0, 0, 0.575], 8743: [0, 0.55556, 0, 0, 0.76666], 8744: [0, 0.55556, 0, 0, 0.76666], 8745: [0, 0.55556, 0, 0, 0.76666], 8746: [0, 0.55556, 0, 0, 0.76666], 8747: [0.19444, 0.69444, 0.12778, 0, 0.56875], 8764: [-0.10889, 0.39111, 0, 0, 0.89444], 8768: [0.19444, 0.69444, 0, 0, 0.31944], 8771: [222e-5, 0.50222, 0, 0, 0.89444], 8773: [0.027, 0.638, 0, 0, 0.894], 8776: [0.02444, 0.52444, 0, 0, 0.89444], 8781: [222e-5, 0.50222, 0, 0, 0.89444], 8801: [222e-5, 0.50222, 0, 0, 0.89444], 8804: [0.19667, 0.69667, 0, 0, 0.89444], 8805: [0.19667, 0.69667, 0, 0, 0.89444], 8810: [0.08556, 0.58556, 0, 0, 1.14999], 8811: [0.08556, 0.58556, 0, 0, 1.14999], 8826: [0.08556, 0.58556, 0, 0, 0.89444], 8827: [0.08556, 0.58556, 0, 0, 0.89444], 8834: [0.08556, 0.58556, 0, 0, 0.89444], 8835: [0.08556, 0.58556, 0, 0, 0.89444], 8838: [0.19667, 0.69667, 0, 0, 0.89444], 8839: [0.19667, 0.69667, 0, 0, 0.89444], 8846: [0, 0.55556, 0, 0, 0.76666], 8849: [0.19667, 0.69667, 0, 0, 0.89444], 8850: [0.19667, 0.69667, 0, 0, 0.89444], 8851: [0, 0.55556, 0, 0, 0.76666], 8852: [0, 0.55556, 0, 0, 0.76666], 8853: [0.13333, 0.63333, 0, 0, 0.89444], 8854: [0.13333, 0.63333, 0, 0, 0.89444], 8855: [0.13333, 0.63333, 0, 0, 0.89444], 8856: [0.13333, 0.63333, 0, 0, 0.89444], 8857: [0.13333, 0.63333, 0, 0, 0.89444], 8866: [0, 0.69444, 0, 0, 0.70277], 8867: [0, 0.69444, 0, 0, 0.70277], 8868: [0, 0.69444, 0, 0, 0.89444], 8869: [0, 0.69444, 0, 0, 0.89444], 8900: [-0.02639, 0.47361, 0, 0, 0.575], 8901: [-0.02639, 0.47361, 0, 0, 0.31944], 8902: [-0.02778, 0.47222, 0, 0, 0.575], 8968: [0.25, 0.75, 0, 0, 0.51111], 8969: [0.25, 0.75, 0, 0, 0.51111], 8970: [0.25, 0.75, 0, 0, 0.51111], 8971: [0.25, 0.75, 0, 0, 0.51111], 8994: [-0.13889, 0.36111, 0, 0, 1.14999], 8995: [-0.13889, 0.36111, 0, 0, 1.14999], 9651: [0.19444, 0.69444, 0, 0, 1.02222], 9657: [-0.02778, 0.47222, 0, 0, 0.575], 9661: [0.19444, 0.69444, 0, 0, 1.02222], 9667: [-0.02778, 0.47222, 0, 0, 0.575], 9711: [0.19444, 0.69444, 0, 0, 1.14999], 9824: [0.12963, 0.69444, 0, 0, 0.89444], 9825: [0.12963, 0.69444, 0, 0, 0.89444], 9826: [0.12963, 0.69444, 0, 0, 0.89444], 9827: [0.12963, 0.69444, 0, 0, 0.89444], 9837: [0, 0.75, 0, 0, 0.44722], 9838: [0.19444, 0.69444, 0, 0, 0.44722], 9839: [0.19444, 0.69444, 0, 0, 0.44722], 10216: [0.25, 0.75, 0, 0, 0.44722], 10217: [0.25, 0.75, 0, 0, 0.44722], 10815: [0, 0.68611, 0, 0, 0.9], 10927: [0.19667, 0.69667, 0, 0, 0.89444], 10928: [0.19667, 0.69667, 0, 0, 0.89444], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Main-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.11417, 0, 0.38611], 34: [0, 0.69444, 0.07939, 0, 0.62055], 35: [0.19444, 0.69444, 0.06833, 0, 0.94444], 37: [0.05556, 0.75, 0.12861, 0, 0.94444], 38: [0, 0.69444, 0.08528, 0, 0.88555], 39: [0, 0.69444, 0.12945, 0, 0.35555], 40: [0.25, 0.75, 0.15806, 0, 0.47333], 41: [0.25, 0.75, 0.03306, 0, 0.47333], 42: [0, 0.75, 0.14333, 0, 0.59111], 43: [0.10333, 0.60333, 0.03306, 0, 0.88555], 44: [0.19444, 0.14722, 0, 0, 0.35555], 45: [0, 0.44444, 0.02611, 0, 0.41444], 46: [0, 0.14722, 0, 0, 0.35555], 47: [0.25, 0.75, 0.15806, 0, 0.59111], 48: [0, 0.64444, 0.13167, 0, 0.59111], 49: [0, 0.64444, 0.13167, 0, 0.59111], 50: [0, 0.64444, 0.13167, 0, 0.59111], 51: [0, 0.64444, 0.13167, 0, 0.59111], 52: [0.19444, 0.64444, 0.13167, 0, 0.59111], 53: [0, 0.64444, 0.13167, 0, 0.59111], 54: [0, 0.64444, 0.13167, 0, 0.59111], 55: [0.19444, 0.64444, 0.13167, 0, 0.59111], 56: [0, 0.64444, 0.13167, 0, 0.59111], 57: [0, 0.64444, 0.13167, 0, 0.59111], 58: [0, 0.44444, 0.06695, 0, 0.35555], 59: [0.19444, 0.44444, 0.06695, 0, 0.35555], 61: [-0.10889, 0.39111, 0.06833, 0, 0.88555], 63: [0, 0.69444, 0.11472, 0, 0.59111], 64: [0, 0.69444, 0.09208, 0, 0.88555], 65: [0, 0.68611, 0, 0, 0.86555], 66: [0, 0.68611, 0.0992, 0, 0.81666], 67: [0, 0.68611, 0.14208, 0, 0.82666], 68: [0, 0.68611, 0.09062, 0, 0.87555], 69: [0, 0.68611, 0.11431, 0, 0.75666], 70: [0, 0.68611, 0.12903, 0, 0.72722], 71: [0, 0.68611, 0.07347, 0, 0.89527], 72: [0, 0.68611, 0.17208, 0, 0.8961], 73: [0, 0.68611, 0.15681, 0, 0.47166], 74: [0, 0.68611, 0.145, 0, 0.61055], 75: [0, 0.68611, 0.14208, 0, 0.89499], 76: [0, 0.68611, 0, 0, 0.69777], 77: [0, 0.68611, 0.17208, 0, 1.07277], 78: [0, 0.68611, 0.17208, 0, 0.8961], 79: [0, 0.68611, 0.09062, 0, 0.85499], 80: [0, 0.68611, 0.0992, 0, 0.78721], 81: [0.19444, 0.68611, 0.09062, 0, 0.85499], 82: [0, 0.68611, 0.02559, 0, 0.85944], 83: [0, 0.68611, 0.11264, 0, 0.64999], 84: [0, 0.68611, 0.12903, 0, 0.7961], 85: [0, 0.68611, 0.17208, 0, 0.88083], 86: [0, 0.68611, 0.18625, 0, 0.86555], 87: [0, 0.68611, 0.18625, 0, 1.15999], 88: [0, 0.68611, 0.15681, 0, 0.86555], 89: [0, 0.68611, 0.19803, 0, 0.86555], 90: [0, 0.68611, 0.14208, 0, 0.70888], 91: [0.25, 0.75, 0.1875, 0, 0.35611], 93: [0.25, 0.75, 0.09972, 0, 0.35611], 94: [0, 0.69444, 0.06709, 0, 0.59111], 95: [0.31, 0.13444, 0.09811, 0, 0.59111], 97: [0, 0.44444, 0.09426, 0, 0.59111], 98: [0, 0.69444, 0.07861, 0, 0.53222], 99: [0, 0.44444, 0.05222, 0, 0.53222], 100: [0, 0.69444, 0.10861, 0, 0.59111], 101: [0, 0.44444, 0.085, 0, 0.53222], 102: [0.19444, 0.69444, 0.21778, 0, 0.4], 103: [0.19444, 0.44444, 0.105, 0, 0.53222], 104: [0, 0.69444, 0.09426, 0, 0.59111], 105: [0, 0.69326, 0.11387, 0, 0.35555], 106: [0.19444, 0.69326, 0.1672, 0, 0.35555], 107: [0, 0.69444, 0.11111, 0, 0.53222], 108: [0, 0.69444, 0.10861, 0, 0.29666], 109: [0, 0.44444, 0.09426, 0, 0.94444], 110: [0, 0.44444, 0.09426, 0, 0.64999], 111: [0, 0.44444, 0.07861, 0, 0.59111], 112: [0.19444, 0.44444, 0.07861, 0, 0.59111], 113: [0.19444, 0.44444, 0.105, 0, 0.53222], 114: [0, 0.44444, 0.11111, 0, 0.50167], 115: [0, 0.44444, 0.08167, 0, 0.48694], 116: [0, 0.63492, 0.09639, 0, 0.385], 117: [0, 0.44444, 0.09426, 0, 0.62055], 118: [0, 0.44444, 0.11111, 0, 0.53222], 119: [0, 0.44444, 0.11111, 0, 0.76777], 120: [0, 0.44444, 0.12583, 0, 0.56055], 121: [0.19444, 0.44444, 0.105, 0, 0.56166], 122: [0, 0.44444, 0.13889, 0, 0.49055], 126: [0.35, 0.34444, 0.11472, 0, 0.59111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0.11473, 0, 0.59111], 176: [0, 0.69444, 0, 0, 0.94888], 184: [0.17014, 0, 0, 0, 0.53222], 198: [0, 0.68611, 0.11431, 0, 1.02277], 216: [0.04861, 0.73472, 0.09062, 0, 0.88555], 223: [0.19444, 0.69444, 0.09736, 0, 0.665], 230: [0, 0.44444, 0.085, 0, 0.82666], 248: [0.09722, 0.54167, 0.09458, 0, 0.59111], 305: [0, 0.44444, 0.09426, 0, 0.35555], 338: [0, 0.68611, 0.11431, 0, 1.14054], 339: [0, 0.44444, 0.085, 0, 0.82666], 567: [0.19444, 0.44444, 0.04611, 0, 0.385], 710: [0, 0.69444, 0.06709, 0, 0.59111], 711: [0, 0.63194, 0.08271, 0, 0.59111], 713: [0, 0.59444, 0.10444, 0, 0.59111], 714: [0, 0.69444, 0.08528, 0, 0.59111], 715: [0, 0.69444, 0, 0, 0.59111], 728: [0, 0.69444, 0.10333, 0, 0.59111], 729: [0, 0.69444, 0.12945, 0, 0.35555], 730: [0, 0.69444, 0, 0, 0.94888], 732: [0, 0.69444, 0.11472, 0, 0.59111], 733: [0, 0.69444, 0.11472, 0, 0.59111], 915: [0, 0.68611, 0.12903, 0, 0.69777], 916: [0, 0.68611, 0, 0, 0.94444], 920: [0, 0.68611, 0.09062, 0, 0.88555], 923: [0, 0.68611, 0, 0, 0.80666], 926: [0, 0.68611, 0.15092, 0, 0.76777], 928: [0, 0.68611, 0.17208, 0, 0.8961], 931: [0, 0.68611, 0.11431, 0, 0.82666], 933: [0, 0.68611, 0.10778, 0, 0.88555], 934: [0, 0.68611, 0.05632, 0, 0.82666], 936: [0, 0.68611, 0.10778, 0, 0.88555], 937: [0, 0.68611, 0.0992, 0, 0.82666], 8211: [0, 0.44444, 0.09811, 0, 0.59111], 8212: [0, 0.44444, 0.09811, 0, 1.18221], 8216: [0, 0.69444, 0.12945, 0, 0.35555], 8217: [0, 0.69444, 0.12945, 0, 0.35555], 8220: [0, 0.69444, 0.16772, 0, 0.62055], 8221: [0, 0.69444, 0.07939, 0, 0.62055] }, "Main-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.12417, 0, 0.30667], 34: [0, 0.69444, 0.06961, 0, 0.51444], 35: [0.19444, 0.69444, 0.06616, 0, 0.81777], 37: [0.05556, 0.75, 0.13639, 0, 0.81777], 38: [0, 0.69444, 0.09694, 0, 0.76666], 39: [0, 0.69444, 0.12417, 0, 0.30667], 40: [0.25, 0.75, 0.16194, 0, 0.40889], 41: [0.25, 0.75, 0.03694, 0, 0.40889], 42: [0, 0.75, 0.14917, 0, 0.51111], 43: [0.05667, 0.56167, 0.03694, 0, 0.76666], 44: [0.19444, 0.10556, 0, 0, 0.30667], 45: [0, 0.43056, 0.02826, 0, 0.35778], 46: [0, 0.10556, 0, 0, 0.30667], 47: [0.25, 0.75, 0.16194, 0, 0.51111], 48: [0, 0.64444, 0.13556, 0, 0.51111], 49: [0, 0.64444, 0.13556, 0, 0.51111], 50: [0, 0.64444, 0.13556, 0, 0.51111], 51: [0, 0.64444, 0.13556, 0, 0.51111], 52: [0.19444, 0.64444, 0.13556, 0, 0.51111], 53: [0, 0.64444, 0.13556, 0, 0.51111], 54: [0, 0.64444, 0.13556, 0, 0.51111], 55: [0.19444, 0.64444, 0.13556, 0, 0.51111], 56: [0, 0.64444, 0.13556, 0, 0.51111], 57: [0, 0.64444, 0.13556, 0, 0.51111], 58: [0, 0.43056, 0.0582, 0, 0.30667], 59: [0.19444, 0.43056, 0.0582, 0, 0.30667], 61: [-0.13313, 0.36687, 0.06616, 0, 0.76666], 63: [0, 0.69444, 0.1225, 0, 0.51111], 64: [0, 0.69444, 0.09597, 0, 0.76666], 65: [0, 0.68333, 0, 0, 0.74333], 66: [0, 0.68333, 0.10257, 0, 0.70389], 67: [0, 0.68333, 0.14528, 0, 0.71555], 68: [0, 0.68333, 0.09403, 0, 0.755], 69: [0, 0.68333, 0.12028, 0, 0.67833], 70: [0, 0.68333, 0.13305, 0, 0.65277], 71: [0, 0.68333, 0.08722, 0, 0.77361], 72: [0, 0.68333, 0.16389, 0, 0.74333], 73: [0, 0.68333, 0.15806, 0, 0.38555], 74: [0, 0.68333, 0.14028, 0, 0.525], 75: [0, 0.68333, 0.14528, 0, 0.76888], 76: [0, 0.68333, 0, 0, 0.62722], 77: [0, 0.68333, 0.16389, 0, 0.89666], 78: [0, 0.68333, 0.16389, 0, 0.74333], 79: [0, 0.68333, 0.09403, 0, 0.76666], 80: [0, 0.68333, 0.10257, 0, 0.67833], 81: [0.19444, 0.68333, 0.09403, 0, 0.76666], 82: [0, 0.68333, 0.03868, 0, 0.72944], 83: [0, 0.68333, 0.11972, 0, 0.56222], 84: [0, 0.68333, 0.13305, 0, 0.71555], 85: [0, 0.68333, 0.16389, 0, 0.74333], 86: [0, 0.68333, 0.18361, 0, 0.74333], 87: [0, 0.68333, 0.18361, 0, 0.99888], 88: [0, 0.68333, 0.15806, 0, 0.74333], 89: [0, 0.68333, 0.19383, 0, 0.74333], 90: [0, 0.68333, 0.14528, 0, 0.61333], 91: [0.25, 0.75, 0.1875, 0, 0.30667], 93: [0.25, 0.75, 0.10528, 0, 0.30667], 94: [0, 0.69444, 0.06646, 0, 0.51111], 95: [0.31, 0.12056, 0.09208, 0, 0.51111], 97: [0, 0.43056, 0.07671, 0, 0.51111], 98: [0, 0.69444, 0.06312, 0, 0.46], 99: [0, 0.43056, 0.05653, 0, 0.46], 100: [0, 0.69444, 0.10333, 0, 0.51111], 101: [0, 0.43056, 0.07514, 0, 0.46], 102: [0.19444, 0.69444, 0.21194, 0, 0.30667], 103: [0.19444, 0.43056, 0.08847, 0, 0.46], 104: [0, 0.69444, 0.07671, 0, 0.51111], 105: [0, 0.65536, 0.1019, 0, 0.30667], 106: [0.19444, 0.65536, 0.14467, 0, 0.30667], 107: [0, 0.69444, 0.10764, 0, 0.46], 108: [0, 0.69444, 0.10333, 0, 0.25555], 109: [0, 0.43056, 0.07671, 0, 0.81777], 110: [0, 0.43056, 0.07671, 0, 0.56222], 111: [0, 0.43056, 0.06312, 0, 0.51111], 112: [0.19444, 0.43056, 0.06312, 0, 0.51111], 113: [0.19444, 0.43056, 0.08847, 0, 0.46], 114: [0, 0.43056, 0.10764, 0, 0.42166], 115: [0, 0.43056, 0.08208, 0, 0.40889], 116: [0, 0.61508, 0.09486, 0, 0.33222], 117: [0, 0.43056, 0.07671, 0, 0.53666], 118: [0, 0.43056, 0.10764, 0, 0.46], 119: [0, 0.43056, 0.10764, 0, 0.66444], 120: [0, 0.43056, 0.12042, 0, 0.46389], 121: [0.19444, 0.43056, 0.08847, 0, 0.48555], 122: [0, 0.43056, 0.12292, 0, 0.40889], 126: [0.35, 0.31786, 0.11585, 0, 0.51111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.66786, 0.10474, 0, 0.51111], 176: [0, 0.69444, 0, 0, 0.83129], 184: [0.17014, 0, 0, 0, 0.46], 198: [0, 0.68333, 0.12028, 0, 0.88277], 216: [0.04861, 0.73194, 0.09403, 0, 0.76666], 223: [0.19444, 0.69444, 0.10514, 0, 0.53666], 230: [0, 0.43056, 0.07514, 0, 0.71555], 248: [0.09722, 0.52778, 0.09194, 0, 0.51111], 338: [0, 0.68333, 0.12028, 0, 0.98499], 339: [0, 0.43056, 0.07514, 0, 0.71555], 710: [0, 0.69444, 0.06646, 0, 0.51111], 711: [0, 0.62847, 0.08295, 0, 0.51111], 713: [0, 0.56167, 0.10333, 0, 0.51111], 714: [0, 0.69444, 0.09694, 0, 0.51111], 715: [0, 0.69444, 0, 0, 0.51111], 728: [0, 0.69444, 0.10806, 0, 0.51111], 729: [0, 0.66786, 0.11752, 0, 0.30667], 730: [0, 0.69444, 0, 0, 0.83129], 732: [0, 0.66786, 0.11585, 0, 0.51111], 733: [0, 0.69444, 0.1225, 0, 0.51111], 915: [0, 0.68333, 0.13305, 0, 0.62722], 916: [0, 0.68333, 0, 0, 0.81777], 920: [0, 0.68333, 0.09403, 0, 0.76666], 923: [0, 0.68333, 0, 0, 0.69222], 926: [0, 0.68333, 0.15294, 0, 0.66444], 928: [0, 0.68333, 0.16389, 0, 0.74333], 931: [0, 0.68333, 0.12028, 0, 0.71555], 933: [0, 0.68333, 0.11111, 0, 0.76666], 934: [0, 0.68333, 0.05986, 0, 0.71555], 936: [0, 0.68333, 0.11111, 0, 0.76666], 937: [0, 0.68333, 0.10257, 0, 0.71555], 8211: [0, 0.43056, 0.09208, 0, 0.51111], 8212: [0, 0.43056, 0.09208, 0, 1.02222], 8216: [0, 0.69444, 0.12417, 0, 0.30667], 8217: [0, 0.69444, 0.12417, 0, 0.30667], 8220: [0, 0.69444, 0.1685, 0, 0.51444], 8221: [0, 0.69444, 0.06961, 0, 0.51444], 8463: [0, 0.68889, 0, 0, 0.54028] }, "Main-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.27778], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.77778], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.19444, 0.10556, 0, 0, 0.27778], 45: [0, 0.43056, 0, 0, 0.33333], 46: [0, 0.10556, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.64444, 0, 0, 0.5], 49: [0, 0.64444, 0, 0, 0.5], 50: [0, 0.64444, 0, 0, 0.5], 51: [0, 0.64444, 0, 0, 0.5], 52: [0, 0.64444, 0, 0, 0.5], 53: [0, 0.64444, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0, 0.64444, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0, 0.64444, 0, 0, 0.5], 58: [0, 0.43056, 0, 0, 0.27778], 59: [0.19444, 0.43056, 0, 0, 0.27778], 60: [0.0391, 0.5391, 0, 0, 0.77778], 61: [-0.13313, 0.36687, 0, 0, 0.77778], 62: [0.0391, 0.5391, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.77778], 65: [0, 0.68333, 0, 0, 0.75], 66: [0, 0.68333, 0, 0, 0.70834], 67: [0, 0.68333, 0, 0, 0.72222], 68: [0, 0.68333, 0, 0, 0.76389], 69: [0, 0.68333, 0, 0, 0.68056], 70: [0, 0.68333, 0, 0, 0.65278], 71: [0, 0.68333, 0, 0, 0.78472], 72: [0, 0.68333, 0, 0, 0.75], 73: [0, 0.68333, 0, 0, 0.36111], 74: [0, 0.68333, 0, 0, 0.51389], 75: [0, 0.68333, 0, 0, 0.77778], 76: [0, 0.68333, 0, 0, 0.625], 77: [0, 0.68333, 0, 0, 0.91667], 78: [0, 0.68333, 0, 0, 0.75], 79: [0, 0.68333, 0, 0, 0.77778], 80: [0, 0.68333, 0, 0, 0.68056], 81: [0.19444, 0.68333, 0, 0, 0.77778], 82: [0, 0.68333, 0, 0, 0.73611], 83: [0, 0.68333, 0, 0, 0.55556], 84: [0, 0.68333, 0, 0, 0.72222], 85: [0, 0.68333, 0, 0, 0.75], 86: [0, 0.68333, 0.01389, 0, 0.75], 87: [0, 0.68333, 0.01389, 0, 1.02778], 88: [0, 0.68333, 0, 0, 0.75], 89: [0, 0.68333, 0.025, 0, 0.75], 90: [0, 0.68333, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.27778], 92: [0.25, 0.75, 0, 0, 0.5], 93: [0.25, 0.75, 0, 0, 0.27778], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.31, 0.12056, 0.02778, 0, 0.5], 97: [0, 0.43056, 0, 0, 0.5], 98: [0, 0.69444, 0, 0, 0.55556], 99: [0, 0.43056, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.55556], 101: [0, 0.43056, 0, 0, 0.44445], 102: [0, 0.69444, 0.07778, 0, 0.30556], 103: [0.19444, 0.43056, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.55556], 105: [0, 0.66786, 0, 0, 0.27778], 106: [0.19444, 0.66786, 0, 0, 0.30556], 107: [0, 0.69444, 0, 0, 0.52778], 108: [0, 0.69444, 0, 0, 0.27778], 109: [0, 0.43056, 0, 0, 0.83334], 110: [0, 0.43056, 0, 0, 0.55556], 111: [0, 0.43056, 0, 0, 0.5], 112: [0.19444, 0.43056, 0, 0, 0.55556], 113: [0.19444, 0.43056, 0, 0, 0.52778], 114: [0, 0.43056, 0, 0, 0.39167], 115: [0, 0.43056, 0, 0, 0.39445], 116: [0, 0.61508, 0, 0, 0.38889], 117: [0, 0.43056, 0, 0, 0.55556], 118: [0, 0.43056, 0.01389, 0, 0.52778], 119: [0, 0.43056, 0.01389, 0, 0.72222], 120: [0, 0.43056, 0, 0, 0.52778], 121: [0.19444, 0.43056, 0.01389, 0, 0.52778], 122: [0, 0.43056, 0, 0, 0.44445], 123: [0.25, 0.75, 0, 0, 0.5], 124: [0.25, 0.75, 0, 0, 0.27778], 125: [0.25, 0.75, 0, 0, 0.5], 126: [0.35, 0.31786, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.76909], 167: [0.19444, 0.69444, 0, 0, 0.44445], 168: [0, 0.66786, 0, 0, 0.5], 172: [0, 0.43056, 0, 0, 0.66667], 176: [0, 0.69444, 0, 0, 0.75], 177: [0.08333, 0.58333, 0, 0, 0.77778], 182: [0.19444, 0.69444, 0, 0, 0.61111], 184: [0.17014, 0, 0, 0, 0.44445], 198: [0, 0.68333, 0, 0, 0.90278], 215: [0.08333, 0.58333, 0, 0, 0.77778], 216: [0.04861, 0.73194, 0, 0, 0.77778], 223: [0, 0.69444, 0, 0, 0.5], 230: [0, 0.43056, 0, 0, 0.72222], 247: [0.08333, 0.58333, 0, 0, 0.77778], 248: [0.09722, 0.52778, 0, 0, 0.5], 305: [0, 0.43056, 0, 0, 0.27778], 338: [0, 0.68333, 0, 0, 1.01389], 339: [0, 0.43056, 0, 0, 0.77778], 567: [0.19444, 0.43056, 0, 0, 0.30556], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.62847, 0, 0, 0.5], 713: [0, 0.56778, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.66786, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.75], 732: [0, 0.66786, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.68333, 0, 0, 0.625], 916: [0, 0.68333, 0, 0, 0.83334], 920: [0, 0.68333, 0, 0, 0.77778], 923: [0, 0.68333, 0, 0, 0.69445], 926: [0, 0.68333, 0, 0, 0.66667], 928: [0, 0.68333, 0, 0, 0.75], 931: [0, 0.68333, 0, 0, 0.72222], 933: [0, 0.68333, 0, 0, 0.77778], 934: [0, 0.68333, 0, 0, 0.72222], 936: [0, 0.68333, 0, 0, 0.77778], 937: [0, 0.68333, 0, 0, 0.72222], 8211: [0, 0.43056, 0.02778, 0, 0.5], 8212: [0, 0.43056, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5], 8224: [0.19444, 0.69444, 0, 0, 0.44445], 8225: [0.19444, 0.69444, 0, 0, 0.44445], 8230: [0, 0.123, 0, 0, 1.172], 8242: [0, 0.55556, 0, 0, 0.275], 8407: [0, 0.71444, 0.15382, 0, 0.5], 8463: [0, 0.68889, 0, 0, 0.54028], 8465: [0, 0.69444, 0, 0, 0.72222], 8467: [0, 0.69444, 0, 0.11111, 0.41667], 8472: [0.19444, 0.43056, 0, 0.11111, 0.63646], 8476: [0, 0.69444, 0, 0, 0.72222], 8501: [0, 0.69444, 0, 0, 0.61111], 8592: [-0.13313, 0.36687, 0, 0, 1], 8593: [0.19444, 0.69444, 0, 0, 0.5], 8594: [-0.13313, 0.36687, 0, 0, 1], 8595: [0.19444, 0.69444, 0, 0, 0.5], 8596: [-0.13313, 0.36687, 0, 0, 1], 8597: [0.25, 0.75, 0, 0, 0.5], 8598: [0.19444, 0.69444, 0, 0, 1], 8599: [0.19444, 0.69444, 0, 0, 1], 8600: [0.19444, 0.69444, 0, 0, 1], 8601: [0.19444, 0.69444, 0, 0, 1], 8614: [0.011, 0.511, 0, 0, 1], 8617: [0.011, 0.511, 0, 0, 1.126], 8618: [0.011, 0.511, 0, 0, 1.126], 8636: [-0.13313, 0.36687, 0, 0, 1], 8637: [-0.13313, 0.36687, 0, 0, 1], 8640: [-0.13313, 0.36687, 0, 0, 1], 8641: [-0.13313, 0.36687, 0, 0, 1], 8652: [0.011, 0.671, 0, 0, 1], 8656: [-0.13313, 0.36687, 0, 0, 1], 8657: [0.19444, 0.69444, 0, 0, 0.61111], 8658: [-0.13313, 0.36687, 0, 0, 1], 8659: [0.19444, 0.69444, 0, 0, 0.61111], 8660: [-0.13313, 0.36687, 0, 0, 1], 8661: [0.25, 0.75, 0, 0, 0.61111], 8704: [0, 0.69444, 0, 0, 0.55556], 8706: [0, 0.69444, 0.05556, 0.08334, 0.5309], 8707: [0, 0.69444, 0, 0, 0.55556], 8709: [0.05556, 0.75, 0, 0, 0.5], 8711: [0, 0.68333, 0, 0, 0.83334], 8712: [0.0391, 0.5391, 0, 0, 0.66667], 8715: [0.0391, 0.5391, 0, 0, 0.66667], 8722: [0.08333, 0.58333, 0, 0, 0.77778], 8723: [0.08333, 0.58333, 0, 0, 0.77778], 8725: [0.25, 0.75, 0, 0, 0.5], 8726: [0.25, 0.75, 0, 0, 0.5], 8727: [-0.03472, 0.46528, 0, 0, 0.5], 8728: [-0.05555, 0.44445, 0, 0, 0.5], 8729: [-0.05555, 0.44445, 0, 0, 0.5], 8730: [0.2, 0.8, 0, 0, 0.83334], 8733: [0, 0.43056, 0, 0, 0.77778], 8734: [0, 0.43056, 0, 0, 1], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.27778], 8741: [0.25, 0.75, 0, 0, 0.5], 8743: [0, 0.55556, 0, 0, 0.66667], 8744: [0, 0.55556, 0, 0, 0.66667], 8745: [0, 0.55556, 0, 0, 0.66667], 8746: [0, 0.55556, 0, 0, 0.66667], 8747: [0.19444, 0.69444, 0.11111, 0, 0.41667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8768: [0.19444, 0.69444, 0, 0, 0.27778], 8771: [-0.03625, 0.46375, 0, 0, 0.77778], 8773: [-0.022, 0.589, 0, 0, 0.778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8781: [-0.03625, 0.46375, 0, 0, 0.77778], 8784: [-0.133, 0.673, 0, 0, 0.778], 8801: [-0.03625, 0.46375, 0, 0, 0.77778], 8804: [0.13597, 0.63597, 0, 0, 0.77778], 8805: [0.13597, 0.63597, 0, 0, 0.77778], 8810: [0.0391, 0.5391, 0, 0, 1], 8811: [0.0391, 0.5391, 0, 0, 1], 8826: [0.0391, 0.5391, 0, 0, 0.77778], 8827: [0.0391, 0.5391, 0, 0, 0.77778], 8834: [0.0391, 0.5391, 0, 0, 0.77778], 8835: [0.0391, 0.5391, 0, 0, 0.77778], 8838: [0.13597, 0.63597, 0, 0, 0.77778], 8839: [0.13597, 0.63597, 0, 0, 0.77778], 8846: [0, 0.55556, 0, 0, 0.66667], 8849: [0.13597, 0.63597, 0, 0, 0.77778], 8850: [0.13597, 0.63597, 0, 0, 0.77778], 8851: [0, 0.55556, 0, 0, 0.66667], 8852: [0, 0.55556, 0, 0, 0.66667], 8853: [0.08333, 0.58333, 0, 0, 0.77778], 8854: [0.08333, 0.58333, 0, 0, 0.77778], 8855: [0.08333, 0.58333, 0, 0, 0.77778], 8856: [0.08333, 0.58333, 0, 0, 0.77778], 8857: [0.08333, 0.58333, 0, 0, 0.77778], 8866: [0, 0.69444, 0, 0, 0.61111], 8867: [0, 0.69444, 0, 0, 0.61111], 8868: [0, 0.69444, 0, 0, 0.77778], 8869: [0, 0.69444, 0, 0, 0.77778], 8872: [0.249, 0.75, 0, 0, 0.867], 8900: [-0.05555, 0.44445, 0, 0, 0.5], 8901: [-0.05555, 0.44445, 0, 0, 0.27778], 8902: [-0.03472, 0.46528, 0, 0, 0.5], 8904: [5e-3, 0.505, 0, 0, 0.9], 8942: [0.03, 0.903, 0, 0, 0.278], 8943: [-0.19, 0.313, 0, 0, 1.172], 8945: [-0.1, 0.823, 0, 0, 1.282], 8968: [0.25, 0.75, 0, 0, 0.44445], 8969: [0.25, 0.75, 0, 0, 0.44445], 8970: [0.25, 0.75, 0, 0, 0.44445], 8971: [0.25, 0.75, 0, 0, 0.44445], 8994: [-0.14236, 0.35764, 0, 0, 1], 8995: [-0.14236, 0.35764, 0, 0, 1], 9136: [0.244, 0.744, 0, 0, 0.412], 9137: [0.244, 0.745, 0, 0, 0.412], 9651: [0.19444, 0.69444, 0, 0, 0.88889], 9657: [-0.03472, 0.46528, 0, 0, 0.5], 9661: [0.19444, 0.69444, 0, 0, 0.88889], 9667: [-0.03472, 0.46528, 0, 0, 0.5], 9711: [0.19444, 0.69444, 0, 0, 1], 9824: [0.12963, 0.69444, 0, 0, 0.77778], 9825: [0.12963, 0.69444, 0, 0, 0.77778], 9826: [0.12963, 0.69444, 0, 0, 0.77778], 9827: [0.12963, 0.69444, 0, 0, 0.77778], 9837: [0, 0.75, 0, 0, 0.38889], 9838: [0.19444, 0.69444, 0, 0, 0.38889], 9839: [0.19444, 0.69444, 0, 0, 0.38889], 10216: [0.25, 0.75, 0, 0, 0.38889], 10217: [0.25, 0.75, 0, 0, 0.38889], 10222: [0.244, 0.744, 0, 0, 0.412], 10223: [0.244, 0.745, 0, 0, 0.412], 10229: [0.011, 0.511, 0, 0, 1.609], 10230: [0.011, 0.511, 0, 0, 1.638], 10231: [0.011, 0.511, 0, 0, 1.859], 10232: [0.024, 0.525, 0, 0, 1.609], 10233: [0.024, 0.525, 0, 0, 1.638], 10234: [0.024, 0.525, 0, 0, 1.858], 10236: [0.011, 0.511, 0, 0, 1.638], 10815: [0, 0.68333, 0, 0, 0.75], 10927: [0.13597, 0.63597, 0, 0, 0.77778], 10928: [0.13597, 0.63597, 0, 0, 0.77778], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Math-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.44444, 0, 0, 0.575], 49: [0, 0.44444, 0, 0, 0.575], 50: [0, 0.44444, 0, 0, 0.575], 51: [0.19444, 0.44444, 0, 0, 0.575], 52: [0.19444, 0.44444, 0, 0, 0.575], 53: [0.19444, 0.44444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0.19444, 0.44444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0.19444, 0.44444, 0, 0, 0.575], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0.04835, 0, 0.8664], 67: [0, 0.68611, 0.06979, 0, 0.81694], 68: [0, 0.68611, 0.03194, 0, 0.93812], 69: [0, 0.68611, 0.05451, 0, 0.81007], 70: [0, 0.68611, 0.15972, 0, 0.68889], 71: [0, 0.68611, 0, 0, 0.88673], 72: [0, 0.68611, 0.08229, 0, 0.98229], 73: [0, 0.68611, 0.07778, 0, 0.51111], 74: [0, 0.68611, 0.10069, 0, 0.63125], 75: [0, 0.68611, 0.06979, 0, 0.97118], 76: [0, 0.68611, 0, 0, 0.75555], 77: [0, 0.68611, 0.11424, 0, 1.14201], 78: [0, 0.68611, 0.11424, 0, 0.95034], 79: [0, 0.68611, 0.03194, 0, 0.83666], 80: [0, 0.68611, 0.15972, 0, 0.72309], 81: [0.19444, 0.68611, 0, 0, 0.86861], 82: [0, 0.68611, 421e-5, 0, 0.87235], 83: [0, 0.68611, 0.05382, 0, 0.69271], 84: [0, 0.68611, 0.15972, 0, 0.63663], 85: [0, 0.68611, 0.11424, 0, 0.80027], 86: [0, 0.68611, 0.25555, 0, 0.67778], 87: [0, 0.68611, 0.15972, 0, 1.09305], 88: [0, 0.68611, 0.07778, 0, 0.94722], 89: [0, 0.68611, 0.25555, 0, 0.67458], 90: [0, 0.68611, 0.06979, 0, 0.77257], 97: [0, 0.44444, 0, 0, 0.63287], 98: [0, 0.69444, 0, 0, 0.52083], 99: [0, 0.44444, 0, 0, 0.51342], 100: [0, 0.69444, 0, 0, 0.60972], 101: [0, 0.44444, 0, 0, 0.55361], 102: [0.19444, 0.69444, 0.11042, 0, 0.56806], 103: [0.19444, 0.44444, 0.03704, 0, 0.5449], 104: [0, 0.69444, 0, 0, 0.66759], 105: [0, 0.69326, 0, 0, 0.4048], 106: [0.19444, 0.69326, 0.0622, 0, 0.47083], 107: [0, 0.69444, 0.01852, 0, 0.6037], 108: [0, 0.69444, 88e-4, 0, 0.34815], 109: [0, 0.44444, 0, 0, 1.0324], 110: [0, 0.44444, 0, 0, 0.71296], 111: [0, 0.44444, 0, 0, 0.58472], 112: [0.19444, 0.44444, 0, 0, 0.60092], 113: [0.19444, 0.44444, 0.03704, 0, 0.54213], 114: [0, 0.44444, 0.03194, 0, 0.5287], 115: [0, 0.44444, 0, 0, 0.53125], 116: [0, 0.63492, 0, 0, 0.41528], 117: [0, 0.44444, 0, 0, 0.68102], 118: [0, 0.44444, 0.03704, 0, 0.56666], 119: [0, 0.44444, 0.02778, 0, 0.83148], 120: [0, 0.44444, 0, 0, 0.65903], 121: [0.19444, 0.44444, 0.03704, 0, 0.59028], 122: [0, 0.44444, 0.04213, 0, 0.55509], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68611, 0.15972, 0, 0.65694], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0.03194, 0, 0.86722], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0.07458, 0, 0.84125], 928: [0, 0.68611, 0.08229, 0, 0.98229], 931: [0, 0.68611, 0.05451, 0, 0.88507], 933: [0, 0.68611, 0.15972, 0, 0.67083], 934: [0, 0.68611, 0, 0, 0.76666], 936: [0, 0.68611, 0.11653, 0, 0.71402], 937: [0, 0.68611, 0.04835, 0, 0.8789], 945: [0, 0.44444, 0, 0, 0.76064], 946: [0.19444, 0.69444, 0.03403, 0, 0.65972], 947: [0.19444, 0.44444, 0.06389, 0, 0.59003], 948: [0, 0.69444, 0.03819, 0, 0.52222], 949: [0, 0.44444, 0, 0, 0.52882], 950: [0.19444, 0.69444, 0.06215, 0, 0.50833], 951: [0.19444, 0.44444, 0.03704, 0, 0.6], 952: [0, 0.69444, 0.03194, 0, 0.5618], 953: [0, 0.44444, 0, 0, 0.41204], 954: [0, 0.44444, 0, 0, 0.66759], 955: [0, 0.69444, 0, 0, 0.67083], 956: [0.19444, 0.44444, 0, 0, 0.70787], 957: [0, 0.44444, 0.06898, 0, 0.57685], 958: [0.19444, 0.69444, 0.03021, 0, 0.50833], 959: [0, 0.44444, 0, 0, 0.58472], 960: [0, 0.44444, 0.03704, 0, 0.68241], 961: [0.19444, 0.44444, 0, 0, 0.6118], 962: [0.09722, 0.44444, 0.07917, 0, 0.42361], 963: [0, 0.44444, 0.03704, 0, 0.68588], 964: [0, 0.44444, 0.13472, 0, 0.52083], 965: [0, 0.44444, 0.03704, 0, 0.63055], 966: [0.19444, 0.44444, 0, 0, 0.74722], 967: [0.19444, 0.44444, 0, 0, 0.71805], 968: [0.19444, 0.69444, 0.03704, 0, 0.75833], 969: [0, 0.44444, 0.03704, 0, 0.71782], 977: [0, 0.69444, 0, 0, 0.69155], 981: [0.19444, 0.69444, 0, 0, 0.7125], 982: [0, 0.44444, 0.03194, 0, 0.975], 1009: [0.19444, 0.44444, 0, 0, 0.6118], 1013: [0, 0.44444, 0, 0, 0.48333], 57649: [0, 0.44444, 0, 0, 0.39352], 57911: [0.19444, 0.44444, 0, 0, 0.43889] }, "Math-Italic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.43056, 0, 0, 0.5], 49: [0, 0.43056, 0, 0, 0.5], 50: [0, 0.43056, 0, 0, 0.5], 51: [0.19444, 0.43056, 0, 0, 0.5], 52: [0.19444, 0.43056, 0, 0, 0.5], 53: [0.19444, 0.43056, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0.19444, 0.43056, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0.19444, 0.43056, 0, 0, 0.5], 65: [0, 0.68333, 0, 0.13889, 0.75], 66: [0, 0.68333, 0.05017, 0.08334, 0.75851], 67: [0, 0.68333, 0.07153, 0.08334, 0.71472], 68: [0, 0.68333, 0.02778, 0.05556, 0.82792], 69: [0, 0.68333, 0.05764, 0.08334, 0.7382], 70: [0, 0.68333, 0.13889, 0.08334, 0.64306], 71: [0, 0.68333, 0, 0.08334, 0.78625], 72: [0, 0.68333, 0.08125, 0.05556, 0.83125], 73: [0, 0.68333, 0.07847, 0.11111, 0.43958], 74: [0, 0.68333, 0.09618, 0.16667, 0.55451], 75: [0, 0.68333, 0.07153, 0.05556, 0.84931], 76: [0, 0.68333, 0, 0.02778, 0.68056], 77: [0, 0.68333, 0.10903, 0.08334, 0.97014], 78: [0, 0.68333, 0.10903, 0.08334, 0.80347], 79: [0, 0.68333, 0.02778, 0.08334, 0.76278], 80: [0, 0.68333, 0.13889, 0.08334, 0.64201], 81: [0.19444, 0.68333, 0, 0.08334, 0.79056], 82: [0, 0.68333, 773e-5, 0.08334, 0.75929], 83: [0, 0.68333, 0.05764, 0.08334, 0.6132], 84: [0, 0.68333, 0.13889, 0.08334, 0.58438], 85: [0, 0.68333, 0.10903, 0.02778, 0.68278], 86: [0, 0.68333, 0.22222, 0, 0.58333], 87: [0, 0.68333, 0.13889, 0, 0.94445], 88: [0, 0.68333, 0.07847, 0.08334, 0.82847], 89: [0, 0.68333, 0.22222, 0, 0.58056], 90: [0, 0.68333, 0.07153, 0.08334, 0.68264], 97: [0, 0.43056, 0, 0, 0.52859], 98: [0, 0.69444, 0, 0, 0.42917], 99: [0, 0.43056, 0, 0.05556, 0.43276], 100: [0, 0.69444, 0, 0.16667, 0.52049], 101: [0, 0.43056, 0, 0.05556, 0.46563], 102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959], 103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697], 104: [0, 0.69444, 0, 0, 0.57616], 105: [0, 0.65952, 0, 0, 0.34451], 106: [0.19444, 0.65952, 0.05724, 0, 0.41181], 107: [0, 0.69444, 0.03148, 0, 0.5206], 108: [0, 0.69444, 0.01968, 0.08334, 0.29838], 109: [0, 0.43056, 0, 0, 0.87801], 110: [0, 0.43056, 0, 0, 0.60023], 111: [0, 0.43056, 0, 0.05556, 0.48472], 112: [0.19444, 0.43056, 0, 0.08334, 0.50313], 113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641], 114: [0, 0.43056, 0.02778, 0.05556, 0.45116], 115: [0, 0.43056, 0, 0.05556, 0.46875], 116: [0, 0.61508, 0, 0.08334, 0.36111], 117: [0, 0.43056, 0, 0.02778, 0.57246], 118: [0, 0.43056, 0.03588, 0.02778, 0.48472], 119: [0, 0.43056, 0.02691, 0.08334, 0.71592], 120: [0, 0.43056, 0, 0.02778, 0.57153], 121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028], 122: [0, 0.43056, 0.04398, 0.05556, 0.46505], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68333, 0.13889, 0.08334, 0.61528], 916: [0, 0.68333, 0, 0.16667, 0.83334], 920: [0, 0.68333, 0.02778, 0.08334, 0.76278], 923: [0, 0.68333, 0, 0.16667, 0.69445], 926: [0, 0.68333, 0.07569, 0.08334, 0.74236], 928: [0, 0.68333, 0.08125, 0.05556, 0.83125], 931: [0, 0.68333, 0.05764, 0.08334, 0.77986], 933: [0, 0.68333, 0.13889, 0.05556, 0.58333], 934: [0, 0.68333, 0, 0.08334, 0.66667], 936: [0, 0.68333, 0.11, 0.05556, 0.61222], 937: [0, 0.68333, 0.05017, 0.08334, 0.7724], 945: [0, 0.43056, 37e-4, 0.02778, 0.6397], 946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563], 947: [0.19444, 0.43056, 0.05556, 0, 0.51773], 948: [0, 0.69444, 0.03785, 0.05556, 0.44444], 949: [0, 0.43056, 0, 0.08334, 0.46632], 950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375], 951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653], 952: [0, 0.69444, 0.02778, 0.08334, 0.46944], 953: [0, 0.43056, 0, 0.05556, 0.35394], 954: [0, 0.43056, 0, 0, 0.57616], 955: [0, 0.69444, 0, 0, 0.58334], 956: [0.19444, 0.43056, 0, 0.02778, 0.60255], 957: [0, 0.43056, 0.06366, 0.02778, 0.49398], 958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375], 959: [0, 0.43056, 0, 0.05556, 0.48472], 960: [0, 0.43056, 0.03588, 0, 0.57003], 961: [0.19444, 0.43056, 0, 0.08334, 0.51702], 962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285], 963: [0, 0.43056, 0.03588, 0, 0.57141], 964: [0, 0.43056, 0.1132, 0.02778, 0.43715], 965: [0, 0.43056, 0.03588, 0.02778, 0.54028], 966: [0.19444, 0.43056, 0, 0.08334, 0.65417], 967: [0.19444, 0.43056, 0, 0.05556, 0.62569], 968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139], 969: [0, 0.43056, 0.03588, 0, 0.62245], 977: [0, 0.69444, 0, 0.08334, 0.59144], 981: [0.19444, 0.69444, 0, 0.08334, 0.59583], 982: [0, 0.43056, 0.02778, 0, 0.82813], 1009: [0.19444, 0.43056, 0, 0.08334, 0.51702], 1013: [0, 0.43056, 0, 0.05556, 0.4059], 57649: [0, 0.43056, 0, 0.02778, 0.32246], 57911: [0.19444, 0.43056, 0, 0.08334, 0.38403] }, "SansSerif-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.36667], 34: [0, 0.69444, 0, 0, 0.55834], 35: [0.19444, 0.69444, 0, 0, 0.91667], 36: [0.05556, 0.75, 0, 0, 0.55], 37: [0.05556, 0.75, 0, 0, 1.02912], 38: [0, 0.69444, 0, 0, 0.83056], 39: [0, 0.69444, 0, 0, 0.30556], 40: [0.25, 0.75, 0, 0, 0.42778], 41: [0.25, 0.75, 0, 0, 0.42778], 42: [0, 0.75, 0, 0, 0.55], 43: [0.11667, 0.61667, 0, 0, 0.85556], 44: [0.10556, 0.13056, 0, 0, 0.30556], 45: [0, 0.45833, 0, 0, 0.36667], 46: [0, 0.13056, 0, 0, 0.30556], 47: [0.25, 0.75, 0, 0, 0.55], 48: [0, 0.69444, 0, 0, 0.55], 49: [0, 0.69444, 0, 0, 0.55], 50: [0, 0.69444, 0, 0, 0.55], 51: [0, 0.69444, 0, 0, 0.55], 52: [0, 0.69444, 0, 0, 0.55], 53: [0, 0.69444, 0, 0, 0.55], 54: [0, 0.69444, 0, 0, 0.55], 55: [0, 0.69444, 0, 0, 0.55], 56: [0, 0.69444, 0, 0, 0.55], 57: [0, 0.69444, 0, 0, 0.55], 58: [0, 0.45833, 0, 0, 0.30556], 59: [0.10556, 0.45833, 0, 0, 0.30556], 61: [-0.09375, 0.40625, 0, 0, 0.85556], 63: [0, 0.69444, 0, 0, 0.51945], 64: [0, 0.69444, 0, 0, 0.73334], 65: [0, 0.69444, 0, 0, 0.73334], 66: [0, 0.69444, 0, 0, 0.73334], 67: [0, 0.69444, 0, 0, 0.70278], 68: [0, 0.69444, 0, 0, 0.79445], 69: [0, 0.69444, 0, 0, 0.64167], 70: [0, 0.69444, 0, 0, 0.61111], 71: [0, 0.69444, 0, 0, 0.73334], 72: [0, 0.69444, 0, 0, 0.79445], 73: [0, 0.69444, 0, 0, 0.33056], 74: [0, 0.69444, 0, 0, 0.51945], 75: [0, 0.69444, 0, 0, 0.76389], 76: [0, 0.69444, 0, 0, 0.58056], 77: [0, 0.69444, 0, 0, 0.97778], 78: [0, 0.69444, 0, 0, 0.79445], 79: [0, 0.69444, 0, 0, 0.79445], 80: [0, 0.69444, 0, 0, 0.70278], 81: [0.10556, 0.69444, 0, 0, 0.79445], 82: [0, 0.69444, 0, 0, 0.70278], 83: [0, 0.69444, 0, 0, 0.61111], 84: [0, 0.69444, 0, 0, 0.73334], 85: [0, 0.69444, 0, 0, 0.76389], 86: [0, 0.69444, 0.01528, 0, 0.73334], 87: [0, 0.69444, 0.01528, 0, 1.03889], 88: [0, 0.69444, 0, 0, 0.73334], 89: [0, 0.69444, 0.0275, 0, 0.73334], 90: [0, 0.69444, 0, 0, 0.67223], 91: [0.25, 0.75, 0, 0, 0.34306], 93: [0.25, 0.75, 0, 0, 0.34306], 94: [0, 0.69444, 0, 0, 0.55], 95: [0.35, 0.10833, 0.03056, 0, 0.55], 97: [0, 0.45833, 0, 0, 0.525], 98: [0, 0.69444, 0, 0, 0.56111], 99: [0, 0.45833, 0, 0, 0.48889], 100: [0, 0.69444, 0, 0, 0.56111], 101: [0, 0.45833, 0, 0, 0.51111], 102: [0, 0.69444, 0.07639, 0, 0.33611], 103: [0.19444, 0.45833, 0.01528, 0, 0.55], 104: [0, 0.69444, 0, 0, 0.56111], 105: [0, 0.69444, 0, 0, 0.25556], 106: [0.19444, 0.69444, 0, 0, 0.28611], 107: [0, 0.69444, 0, 0, 0.53056], 108: [0, 0.69444, 0, 0, 0.25556], 109: [0, 0.45833, 0, 0, 0.86667], 110: [0, 0.45833, 0, 0, 0.56111], 111: [0, 0.45833, 0, 0, 0.55], 112: [0.19444, 0.45833, 0, 0, 0.56111], 113: [0.19444, 0.45833, 0, 0, 0.56111], 114: [0, 0.45833, 0.01528, 0, 0.37222], 115: [0, 0.45833, 0, 0, 0.42167], 116: [0, 0.58929, 0, 0, 0.40417], 117: [0, 0.45833, 0, 0, 0.56111], 118: [0, 0.45833, 0.01528, 0, 0.5], 119: [0, 0.45833, 0.01528, 0, 0.74445], 120: [0, 0.45833, 0, 0, 0.5], 121: [0.19444, 0.45833, 0.01528, 0, 0.5], 122: [0, 0.45833, 0, 0, 0.47639], 126: [0.35, 0.34444, 0, 0, 0.55], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0, 0, 0.55], 176: [0, 0.69444, 0, 0, 0.73334], 180: [0, 0.69444, 0, 0, 0.55], 184: [0.17014, 0, 0, 0, 0.48889], 305: [0, 0.45833, 0, 0, 0.25556], 567: [0.19444, 0.45833, 0, 0, 0.28611], 710: [0, 0.69444, 0, 0, 0.55], 711: [0, 0.63542, 0, 0, 0.55], 713: [0, 0.63778, 0, 0, 0.55], 728: [0, 0.69444, 0, 0, 0.55], 729: [0, 0.69444, 0, 0, 0.30556], 730: [0, 0.69444, 0, 0, 0.73334], 732: [0, 0.69444, 0, 0, 0.55], 733: [0, 0.69444, 0, 0, 0.55], 915: [0, 0.69444, 0, 0, 0.58056], 916: [0, 0.69444, 0, 0, 0.91667], 920: [0, 0.69444, 0, 0, 0.85556], 923: [0, 0.69444, 0, 0, 0.67223], 926: [0, 0.69444, 0, 0, 0.73334], 928: [0, 0.69444, 0, 0, 0.79445], 931: [0, 0.69444, 0, 0, 0.79445], 933: [0, 0.69444, 0, 0, 0.85556], 934: [0, 0.69444, 0, 0, 0.79445], 936: [0, 0.69444, 0, 0, 0.85556], 937: [0, 0.69444, 0, 0, 0.79445], 8211: [0, 0.45833, 0.03056, 0, 0.55], 8212: [0, 0.45833, 0.03056, 0, 1.10001], 8216: [0, 0.69444, 0, 0, 0.30556], 8217: [0, 0.69444, 0, 0, 0.30556], 8220: [0, 0.69444, 0, 0, 0.55834], 8221: [0, 0.69444, 0, 0, 0.55834] }, "SansSerif-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.05733, 0, 0.31945], 34: [0, 0.69444, 316e-5, 0, 0.5], 35: [0.19444, 0.69444, 0.05087, 0, 0.83334], 36: [0.05556, 0.75, 0.11156, 0, 0.5], 37: [0.05556, 0.75, 0.03126, 0, 0.83334], 38: [0, 0.69444, 0.03058, 0, 0.75834], 39: [0, 0.69444, 0.07816, 0, 0.27778], 40: [0.25, 0.75, 0.13164, 0, 0.38889], 41: [0.25, 0.75, 0.02536, 0, 0.38889], 42: [0, 0.75, 0.11775, 0, 0.5], 43: [0.08333, 0.58333, 0.02536, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0.01946, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0.13164, 0, 0.5], 48: [0, 0.65556, 0.11156, 0, 0.5], 49: [0, 0.65556, 0.11156, 0, 0.5], 50: [0, 0.65556, 0.11156, 0, 0.5], 51: [0, 0.65556, 0.11156, 0, 0.5], 52: [0, 0.65556, 0.11156, 0, 0.5], 53: [0, 0.65556, 0.11156, 0, 0.5], 54: [0, 0.65556, 0.11156, 0, 0.5], 55: [0, 0.65556, 0.11156, 0, 0.5], 56: [0, 0.65556, 0.11156, 0, 0.5], 57: [0, 0.65556, 0.11156, 0, 0.5], 58: [0, 0.44444, 0.02502, 0, 0.27778], 59: [0.125, 0.44444, 0.02502, 0, 0.27778], 61: [-0.13, 0.37, 0.05087, 0, 0.77778], 63: [0, 0.69444, 0.11809, 0, 0.47222], 64: [0, 0.69444, 0.07555, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0.08293, 0, 0.66667], 67: [0, 0.69444, 0.11983, 0, 0.63889], 68: [0, 0.69444, 0.07555, 0, 0.72223], 69: [0, 0.69444, 0.11983, 0, 0.59722], 70: [0, 0.69444, 0.13372, 0, 0.56945], 71: [0, 0.69444, 0.11983, 0, 0.66667], 72: [0, 0.69444, 0.08094, 0, 0.70834], 73: [0, 0.69444, 0.13372, 0, 0.27778], 74: [0, 0.69444, 0.08094, 0, 0.47222], 75: [0, 0.69444, 0.11983, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0.08094, 0, 0.875], 78: [0, 0.69444, 0.08094, 0, 0.70834], 79: [0, 0.69444, 0.07555, 0, 0.73611], 80: [0, 0.69444, 0.08293, 0, 0.63889], 81: [0.125, 0.69444, 0.07555, 0, 0.73611], 82: [0, 0.69444, 0.08293, 0, 0.64584], 83: [0, 0.69444, 0.09205, 0, 0.55556], 84: [0, 0.69444, 0.13372, 0, 0.68056], 85: [0, 0.69444, 0.08094, 0, 0.6875], 86: [0, 0.69444, 0.1615, 0, 0.66667], 87: [0, 0.69444, 0.1615, 0, 0.94445], 88: [0, 0.69444, 0.13372, 0, 0.66667], 89: [0, 0.69444, 0.17261, 0, 0.66667], 90: [0, 0.69444, 0.11983, 0, 0.61111], 91: [0.25, 0.75, 0.15942, 0, 0.28889], 93: [0.25, 0.75, 0.08719, 0, 0.28889], 94: [0, 0.69444, 0.0799, 0, 0.5], 95: [0.35, 0.09444, 0.08616, 0, 0.5], 97: [0, 0.44444, 981e-5, 0, 0.48056], 98: [0, 0.69444, 0.03057, 0, 0.51667], 99: [0, 0.44444, 0.08336, 0, 0.44445], 100: [0, 0.69444, 0.09483, 0, 0.51667], 101: [0, 0.44444, 0.06778, 0, 0.44445], 102: [0, 0.69444, 0.21705, 0, 0.30556], 103: [0.19444, 0.44444, 0.10836, 0, 0.5], 104: [0, 0.69444, 0.01778, 0, 0.51667], 105: [0, 0.67937, 0.09718, 0, 0.23889], 106: [0.19444, 0.67937, 0.09162, 0, 0.26667], 107: [0, 0.69444, 0.08336, 0, 0.48889], 108: [0, 0.69444, 0.09483, 0, 0.23889], 109: [0, 0.44444, 0.01778, 0, 0.79445], 110: [0, 0.44444, 0.01778, 0, 0.51667], 111: [0, 0.44444, 0.06613, 0, 0.5], 112: [0.19444, 0.44444, 0.0389, 0, 0.51667], 113: [0.19444, 0.44444, 0.04169, 0, 0.51667], 114: [0, 0.44444, 0.10836, 0, 0.34167], 115: [0, 0.44444, 0.0778, 0, 0.38333], 116: [0, 0.57143, 0.07225, 0, 0.36111], 117: [0, 0.44444, 0.04169, 0, 0.51667], 118: [0, 0.44444, 0.10836, 0, 0.46111], 119: [0, 0.44444, 0.10836, 0, 0.68334], 120: [0, 0.44444, 0.09169, 0, 0.46111], 121: [0.19444, 0.44444, 0.10836, 0, 0.46111], 122: [0, 0.44444, 0.08752, 0, 0.43472], 126: [0.35, 0.32659, 0.08826, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0.06385, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.73752], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0.04169, 0, 0.23889], 567: [0.19444, 0.44444, 0.04169, 0, 0.26667], 710: [0, 0.69444, 0.0799, 0, 0.5], 711: [0, 0.63194, 0.08432, 0, 0.5], 713: [0, 0.60889, 0.08776, 0, 0.5], 714: [0, 0.69444, 0.09205, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0.09483, 0, 0.5], 729: [0, 0.67937, 0.07774, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.73752], 732: [0, 0.67659, 0.08826, 0, 0.5], 733: [0, 0.69444, 0.09205, 0, 0.5], 915: [0, 0.69444, 0.13372, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0.07555, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0.12816, 0, 0.66667], 928: [0, 0.69444, 0.08094, 0, 0.70834], 931: [0, 0.69444, 0.11983, 0, 0.72222], 933: [0, 0.69444, 0.09031, 0, 0.77778], 934: [0, 0.69444, 0.04603, 0, 0.72222], 936: [0, 0.69444, 0.09031, 0, 0.77778], 937: [0, 0.69444, 0.08293, 0, 0.72222], 8211: [0, 0.44444, 0.08616, 0, 0.5], 8212: [0, 0.44444, 0.08616, 0, 1], 8216: [0, 0.69444, 0.07816, 0, 0.27778], 8217: [0, 0.69444, 0.07816, 0, 0.27778], 8220: [0, 0.69444, 0.14205, 0, 0.5], 8221: [0, 0.69444, 316e-5, 0, 0.5] }, "SansSerif-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.31945], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.75834], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.65556, 0, 0, 0.5], 49: [0, 0.65556, 0, 0, 0.5], 50: [0, 0.65556, 0, 0, 0.5], 51: [0, 0.65556, 0, 0, 0.5], 52: [0, 0.65556, 0, 0, 0.5], 53: [0, 0.65556, 0, 0, 0.5], 54: [0, 0.65556, 0, 0, 0.5], 55: [0, 0.65556, 0, 0, 0.5], 56: [0, 0.65556, 0, 0, 0.5], 57: [0, 0.65556, 0, 0, 0.5], 58: [0, 0.44444, 0, 0, 0.27778], 59: [0.125, 0.44444, 0, 0, 0.27778], 61: [-0.13, 0.37, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0, 0, 0.66667], 67: [0, 0.69444, 0, 0, 0.63889], 68: [0, 0.69444, 0, 0, 0.72223], 69: [0, 0.69444, 0, 0, 0.59722], 70: [0, 0.69444, 0, 0, 0.56945], 71: [0, 0.69444, 0, 0, 0.66667], 72: [0, 0.69444, 0, 0, 0.70834], 73: [0, 0.69444, 0, 0, 0.27778], 74: [0, 0.69444, 0, 0, 0.47222], 75: [0, 0.69444, 0, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0, 0, 0.875], 78: [0, 0.69444, 0, 0, 0.70834], 79: [0, 0.69444, 0, 0, 0.73611], 80: [0, 0.69444, 0, 0, 0.63889], 81: [0.125, 0.69444, 0, 0, 0.73611], 82: [0, 0.69444, 0, 0, 0.64584], 83: [0, 0.69444, 0, 0, 0.55556], 84: [0, 0.69444, 0, 0, 0.68056], 85: [0, 0.69444, 0, 0, 0.6875], 86: [0, 0.69444, 0.01389, 0, 0.66667], 87: [0, 0.69444, 0.01389, 0, 0.94445], 88: [0, 0.69444, 0, 0, 0.66667], 89: [0, 0.69444, 0.025, 0, 0.66667], 90: [0, 0.69444, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.28889], 93: [0.25, 0.75, 0, 0, 0.28889], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.35, 0.09444, 0.02778, 0, 0.5], 97: [0, 0.44444, 0, 0, 0.48056], 98: [0, 0.69444, 0, 0, 0.51667], 99: [0, 0.44444, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.51667], 101: [0, 0.44444, 0, 0, 0.44445], 102: [0, 0.69444, 0.06944, 0, 0.30556], 103: [0.19444, 0.44444, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.51667], 105: [0, 0.67937, 0, 0, 0.23889], 106: [0.19444, 0.67937, 0, 0, 0.26667], 107: [0, 0.69444, 0, 0, 0.48889], 108: [0, 0.69444, 0, 0, 0.23889], 109: [0, 0.44444, 0, 0, 0.79445], 110: [0, 0.44444, 0, 0, 0.51667], 111: [0, 0.44444, 0, 0, 0.5], 112: [0.19444, 0.44444, 0, 0, 0.51667], 113: [0.19444, 0.44444, 0, 0, 0.51667], 114: [0, 0.44444, 0.01389, 0, 0.34167], 115: [0, 0.44444, 0, 0, 0.38333], 116: [0, 0.57143, 0, 0, 0.36111], 117: [0, 0.44444, 0, 0, 0.51667], 118: [0, 0.44444, 0.01389, 0, 0.46111], 119: [0, 0.44444, 0.01389, 0, 0.68334], 120: [0, 0.44444, 0, 0, 0.46111], 121: [0.19444, 0.44444, 0.01389, 0, 0.46111], 122: [0, 0.44444, 0, 0, 0.43472], 126: [0.35, 0.32659, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.66667], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0, 0, 0.23889], 567: [0.19444, 0.44444, 0, 0, 0.26667], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.63194, 0, 0, 0.5], 713: [0, 0.60889, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.67937, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.66667], 732: [0, 0.67659, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.69444, 0, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0, 0, 0.66667], 928: [0, 0.69444, 0, 0, 0.70834], 931: [0, 0.69444, 0, 0, 0.72222], 933: [0, 0.69444, 0, 0, 0.77778], 934: [0, 0.69444, 0, 0, 0.72222], 936: [0, 0.69444, 0, 0, 0.77778], 937: [0, 0.69444, 0, 0, 0.72222], 8211: [0, 0.44444, 0.02778, 0, 0.5], 8212: [0, 0.44444, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5] }, "Script-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.7, 0.22925, 0, 0.80253], 66: [0, 0.7, 0.04087, 0, 0.90757], 67: [0, 0.7, 0.1689, 0, 0.66619], 68: [0, 0.7, 0.09371, 0, 0.77443], 69: [0, 0.7, 0.18583, 0, 0.56162], 70: [0, 0.7, 0.13634, 0, 0.89544], 71: [0, 0.7, 0.17322, 0, 0.60961], 72: [0, 0.7, 0.29694, 0, 0.96919], 73: [0, 0.7, 0.19189, 0, 0.80907], 74: [0.27778, 0.7, 0.19189, 0, 1.05159], 75: [0, 0.7, 0.31259, 0, 0.91364], 76: [0, 0.7, 0.19189, 0, 0.87373], 77: [0, 0.7, 0.15981, 0, 1.08031], 78: [0, 0.7, 0.3525, 0, 0.9015], 79: [0, 0.7, 0.08078, 0, 0.73787], 80: [0, 0.7, 0.08078, 0, 1.01262], 81: [0, 0.7, 0.03305, 0, 0.88282], 82: [0, 0.7, 0.06259, 0, 0.85], 83: [0, 0.7, 0.19189, 0, 0.86767], 84: [0, 0.7, 0.29087, 0, 0.74697], 85: [0, 0.7, 0.25815, 0, 0.79996], 86: [0, 0.7, 0.27523, 0, 0.62204], 87: [0, 0.7, 0.27523, 0, 0.80532], 88: [0, 0.7, 0.26006, 0, 0.94445], 89: [0, 0.7, 0.2939, 0, 0.70961], 90: [0, 0.7, 0.24037, 0, 0.8212], 160: [0, 0, 0, 0, 0.25] }, "Size1-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.35001, 0.85, 0, 0, 0.45834], 41: [0.35001, 0.85, 0, 0, 0.45834], 47: [0.35001, 0.85, 0, 0, 0.57778], 91: [0.35001, 0.85, 0, 0, 0.41667], 92: [0.35001, 0.85, 0, 0, 0.57778], 93: [0.35001, 0.85, 0, 0, 0.41667], 123: [0.35001, 0.85, 0, 0, 0.58334], 125: [0.35001, 0.85, 0, 0, 0.58334], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.72222, 0, 0, 0.55556], 732: [0, 0.72222, 0, 0, 0.55556], 770: [0, 0.72222, 0, 0, 0.55556], 771: [0, 0.72222, 0, 0, 0.55556], 8214: [-99e-5, 0.601, 0, 0, 0.77778], 8593: [1e-5, 0.6, 0, 0, 0.66667], 8595: [1e-5, 0.6, 0, 0, 0.66667], 8657: [1e-5, 0.6, 0, 0, 0.77778], 8659: [1e-5, 0.6, 0, 0, 0.77778], 8719: [0.25001, 0.75, 0, 0, 0.94445], 8720: [0.25001, 0.75, 0, 0, 0.94445], 8721: [0.25001, 0.75, 0, 0, 1.05556], 8730: [0.35001, 0.85, 0, 0, 1], 8739: [-599e-5, 0.606, 0, 0, 0.33333], 8741: [-599e-5, 0.606, 0, 0, 0.55556], 8747: [0.30612, 0.805, 0.19445, 0, 0.47222], 8748: [0.306, 0.805, 0.19445, 0, 0.47222], 8749: [0.306, 0.805, 0.19445, 0, 0.47222], 8750: [0.30612, 0.805, 0.19445, 0, 0.47222], 8896: [0.25001, 0.75, 0, 0, 0.83334], 8897: [0.25001, 0.75, 0, 0, 0.83334], 8898: [0.25001, 0.75, 0, 0, 0.83334], 8899: [0.25001, 0.75, 0, 0, 0.83334], 8968: [0.35001, 0.85, 0, 0, 0.47222], 8969: [0.35001, 0.85, 0, 0, 0.47222], 8970: [0.35001, 0.85, 0, 0, 0.47222], 8971: [0.35001, 0.85, 0, 0, 0.47222], 9168: [-99e-5, 0.601, 0, 0, 0.66667], 10216: [0.35001, 0.85, 0, 0, 0.47222], 10217: [0.35001, 0.85, 0, 0, 0.47222], 10752: [0.25001, 0.75, 0, 0, 1.11111], 10753: [0.25001, 0.75, 0, 0, 1.11111], 10754: [0.25001, 0.75, 0, 0, 1.11111], 10756: [0.25001, 0.75, 0, 0, 0.83334], 10758: [0.25001, 0.75, 0, 0, 0.83334] }, "Size2-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.65002, 1.15, 0, 0, 0.59722], 41: [0.65002, 1.15, 0, 0, 0.59722], 47: [0.65002, 1.15, 0, 0, 0.81111], 91: [0.65002, 1.15, 0, 0, 0.47222], 92: [0.65002, 1.15, 0, 0, 0.81111], 93: [0.65002, 1.15, 0, 0, 0.47222], 123: [0.65002, 1.15, 0, 0, 0.66667], 125: [0.65002, 1.15, 0, 0, 0.66667], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1], 732: [0, 0.75, 0, 0, 1], 770: [0, 0.75, 0, 0, 1], 771: [0, 0.75, 0, 0, 1], 8719: [0.55001, 1.05, 0, 0, 1.27778], 8720: [0.55001, 1.05, 0, 0, 1.27778], 8721: [0.55001, 1.05, 0, 0, 1.44445], 8730: [0.65002, 1.15, 0, 0, 1], 8747: [0.86225, 1.36, 0.44445, 0, 0.55556], 8748: [0.862, 1.36, 0.44445, 0, 0.55556], 8749: [0.862, 1.36, 0.44445, 0, 0.55556], 8750: [0.86225, 1.36, 0.44445, 0, 0.55556], 8896: [0.55001, 1.05, 0, 0, 1.11111], 8897: [0.55001, 1.05, 0, 0, 1.11111], 8898: [0.55001, 1.05, 0, 0, 1.11111], 8899: [0.55001, 1.05, 0, 0, 1.11111], 8968: [0.65002, 1.15, 0, 0, 0.52778], 8969: [0.65002, 1.15, 0, 0, 0.52778], 8970: [0.65002, 1.15, 0, 0, 0.52778], 8971: [0.65002, 1.15, 0, 0, 0.52778], 10216: [0.65002, 1.15, 0, 0, 0.61111], 10217: [0.65002, 1.15, 0, 0, 0.61111], 10752: [0.55001, 1.05, 0, 0, 1.51112], 10753: [0.55001, 1.05, 0, 0, 1.51112], 10754: [0.55001, 1.05, 0, 0, 1.51112], 10756: [0.55001, 1.05, 0, 0, 1.11111], 10758: [0.55001, 1.05, 0, 0, 1.11111] }, "Size3-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.95003, 1.45, 0, 0, 0.73611], 41: [0.95003, 1.45, 0, 0, 0.73611], 47: [0.95003, 1.45, 0, 0, 1.04445], 91: [0.95003, 1.45, 0, 0, 0.52778], 92: [0.95003, 1.45, 0, 0, 1.04445], 93: [0.95003, 1.45, 0, 0, 0.52778], 123: [0.95003, 1.45, 0, 0, 0.75], 125: [0.95003, 1.45, 0, 0, 0.75], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1.44445], 732: [0, 0.75, 0, 0, 1.44445], 770: [0, 0.75, 0, 0, 1.44445], 771: [0, 0.75, 0, 0, 1.44445], 8730: [0.95003, 1.45, 0, 0, 1], 8968: [0.95003, 1.45, 0, 0, 0.58334], 8969: [0.95003, 1.45, 0, 0, 0.58334], 8970: [0.95003, 1.45, 0, 0, 0.58334], 8971: [0.95003, 1.45, 0, 0, 0.58334], 10216: [0.95003, 1.45, 0, 0, 0.75], 10217: [0.95003, 1.45, 0, 0, 0.75] }, "Size4-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [1.25003, 1.75, 0, 0, 0.79167], 41: [1.25003, 1.75, 0, 0, 0.79167], 47: [1.25003, 1.75, 0, 0, 1.27778], 91: [1.25003, 1.75, 0, 0, 0.58334], 92: [1.25003, 1.75, 0, 0, 1.27778], 93: [1.25003, 1.75, 0, 0, 0.58334], 123: [1.25003, 1.75, 0, 0, 0.80556], 125: [1.25003, 1.75, 0, 0, 0.80556], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.825, 0, 0, 1.8889], 732: [0, 0.825, 0, 0, 1.8889], 770: [0, 0.825, 0, 0, 1.8889], 771: [0, 0.825, 0, 0, 1.8889], 8730: [1.25003, 1.75, 0, 0, 1], 8968: [1.25003, 1.75, 0, 0, 0.63889], 8969: [1.25003, 1.75, 0, 0, 0.63889], 8970: [1.25003, 1.75, 0, 0, 0.63889], 8971: [1.25003, 1.75, 0, 0, 0.63889], 9115: [0.64502, 1.155, 0, 0, 0.875], 9116: [1e-5, 0.6, 0, 0, 0.875], 9117: [0.64502, 1.155, 0, 0, 0.875], 9118: [0.64502, 1.155, 0, 0, 0.875], 9119: [1e-5, 0.6, 0, 0, 0.875], 9120: [0.64502, 1.155, 0, 0, 0.875], 9121: [0.64502, 1.155, 0, 0, 0.66667], 9122: [-99e-5, 0.601, 0, 0, 0.66667], 9123: [0.64502, 1.155, 0, 0, 0.66667], 9124: [0.64502, 1.155, 0, 0, 0.66667], 9125: [-99e-5, 0.601, 0, 0, 0.66667], 9126: [0.64502, 1.155, 0, 0, 0.66667], 9127: [1e-5, 0.9, 0, 0, 0.88889], 9128: [0.65002, 1.15, 0, 0, 0.88889], 9129: [0.90001, 0, 0, 0, 0.88889], 9130: [0, 0.3, 0, 0, 0.88889], 9131: [1e-5, 0.9, 0, 0, 0.88889], 9132: [0.65002, 1.15, 0, 0, 0.88889], 9133: [0.90001, 0, 0, 0, 0.88889], 9143: [0.88502, 0.915, 0, 0, 1.05556], 10216: [1.25003, 1.75, 0, 0, 0.80556], 10217: [1.25003, 1.75, 0, 0, 0.80556], 57344: [-499e-5, 0.605, 0, 0, 1.05556], 57345: [-499e-5, 0.605, 0, 0, 1.05556], 57680: [0, 0.12, 0, 0, 0.45], 57681: [0, 0.12, 0, 0, 0.45], 57682: [0, 0.12, 0, 0, 0.45], 57683: [0, 0.12, 0, 0, 0.45] }, "Typewriter-Regular": { 32: [0, 0, 0, 0, 0.525], 33: [0, 0.61111, 0, 0, 0.525], 34: [0, 0.61111, 0, 0, 0.525], 35: [0, 0.61111, 0, 0, 0.525], 36: [0.08333, 0.69444, 0, 0, 0.525], 37: [0.08333, 0.69444, 0, 0, 0.525], 38: [0, 0.61111, 0, 0, 0.525], 39: [0, 0.61111, 0, 0, 0.525], 40: [0.08333, 0.69444, 0, 0, 0.525], 41: [0.08333, 0.69444, 0, 0, 0.525], 42: [0, 0.52083, 0, 0, 0.525], 43: [-0.08056, 0.53055, 0, 0, 0.525], 44: [0.13889, 0.125, 0, 0, 0.525], 45: [-0.08056, 0.53055, 0, 0, 0.525], 46: [0, 0.125, 0, 0, 0.525], 47: [0.08333, 0.69444, 0, 0, 0.525], 48: [0, 0.61111, 0, 0, 0.525], 49: [0, 0.61111, 0, 0, 0.525], 50: [0, 0.61111, 0, 0, 0.525], 51: [0, 0.61111, 0, 0, 0.525], 52: [0, 0.61111, 0, 0, 0.525], 53: [0, 0.61111, 0, 0, 0.525], 54: [0, 0.61111, 0, 0, 0.525], 55: [0, 0.61111, 0, 0, 0.525], 56: [0, 0.61111, 0, 0, 0.525], 57: [0, 0.61111, 0, 0, 0.525], 58: [0, 0.43056, 0, 0, 0.525], 59: [0.13889, 0.43056, 0, 0, 0.525], 60: [-0.05556, 0.55556, 0, 0, 0.525], 61: [-0.19549, 0.41562, 0, 0, 0.525], 62: [-0.05556, 0.55556, 0, 0, 0.525], 63: [0, 0.61111, 0, 0, 0.525], 64: [0, 0.61111, 0, 0, 0.525], 65: [0, 0.61111, 0, 0, 0.525], 66: [0, 0.61111, 0, 0, 0.525], 67: [0, 0.61111, 0, 0, 0.525], 68: [0, 0.61111, 0, 0, 0.525], 69: [0, 0.61111, 0, 0, 0.525], 70: [0, 0.61111, 0, 0, 0.525], 71: [0, 0.61111, 0, 0, 0.525], 72: [0, 0.61111, 0, 0, 0.525], 73: [0, 0.61111, 0, 0, 0.525], 74: [0, 0.61111, 0, 0, 0.525], 75: [0, 0.61111, 0, 0, 0.525], 76: [0, 0.61111, 0, 0, 0.525], 77: [0, 0.61111, 0, 0, 0.525], 78: [0, 0.61111, 0, 0, 0.525], 79: [0, 0.61111, 0, 0, 0.525], 80: [0, 0.61111, 0, 0, 0.525], 81: [0.13889, 0.61111, 0, 0, 0.525], 82: [0, 0.61111, 0, 0, 0.525], 83: [0, 0.61111, 0, 0, 0.525], 84: [0, 0.61111, 0, 0, 0.525], 85: [0, 0.61111, 0, 0, 0.525], 86: [0, 0.61111, 0, 0, 0.525], 87: [0, 0.61111, 0, 0, 0.525], 88: [0, 0.61111, 0, 0, 0.525], 89: [0, 0.61111, 0, 0, 0.525], 90: [0, 0.61111, 0, 0, 0.525], 91: [0.08333, 0.69444, 0, 0, 0.525], 92: [0.08333, 0.69444, 0, 0, 0.525], 93: [0.08333, 0.69444, 0, 0, 0.525], 94: [0, 0.61111, 0, 0, 0.525], 95: [0.09514, 0, 0, 0, 0.525], 96: [0, 0.61111, 0, 0, 0.525], 97: [0, 0.43056, 0, 0, 0.525], 98: [0, 0.61111, 0, 0, 0.525], 99: [0, 0.43056, 0, 0, 0.525], 100: [0, 0.61111, 0, 0, 0.525], 101: [0, 0.43056, 0, 0, 0.525], 102: [0, 0.61111, 0, 0, 0.525], 103: [0.22222, 0.43056, 0, 0, 0.525], 104: [0, 0.61111, 0, 0, 0.525], 105: [0, 0.61111, 0, 0, 0.525], 106: [0.22222, 0.61111, 0, 0, 0.525], 107: [0, 0.61111, 0, 0, 0.525], 108: [0, 0.61111, 0, 0, 0.525], 109: [0, 0.43056, 0, 0, 0.525], 110: [0, 0.43056, 0, 0, 0.525], 111: [0, 0.43056, 0, 0, 0.525], 112: [0.22222, 0.43056, 0, 0, 0.525], 113: [0.22222, 0.43056, 0, 0, 0.525], 114: [0, 0.43056, 0, 0, 0.525], 115: [0, 0.43056, 0, 0, 0.525], 116: [0, 0.55358, 0, 0, 0.525], 117: [0, 0.43056, 0, 0, 0.525], 118: [0, 0.43056, 0, 0, 0.525], 119: [0, 0.43056, 0, 0, 0.525], 120: [0, 0.43056, 0, 0, 0.525], 121: [0.22222, 0.43056, 0, 0, 0.525], 122: [0, 0.43056, 0, 0, 0.525], 123: [0.08333, 0.69444, 0, 0, 0.525], 124: [0.08333, 0.69444, 0, 0, 0.525], 125: [0.08333, 0.69444, 0, 0, 0.525], 126: [0, 0.61111, 0, 0, 0.525], 127: [0, 0.61111, 0, 0, 0.525], 160: [0, 0, 0, 0, 0.525], 176: [0, 0.61111, 0, 0, 0.525], 184: [0.19445, 0, 0, 0, 0.525], 305: [0, 0.43056, 0, 0, 0.525], 567: [0.22222, 0.43056, 0, 0, 0.525], 711: [0, 0.56597, 0, 0, 0.525], 713: [0, 0.56555, 0, 0, 0.525], 714: [0, 0.61111, 0, 0, 0.525], 715: [0, 0.61111, 0, 0, 0.525], 728: [0, 0.61111, 0, 0, 0.525], 730: [0, 0.61111, 0, 0, 0.525], 770: [0, 0.61111, 0, 0, 0.525], 771: [0, 0.61111, 0, 0, 0.525], 776: [0, 0.61111, 0, 0, 0.525], 915: [0, 0.61111, 0, 0, 0.525], 916: [0, 0.61111, 0, 0, 0.525], 920: [0, 0.61111, 0, 0, 0.525], 923: [0, 0.61111, 0, 0, 0.525], 926: [0, 0.61111, 0, 0, 0.525], 928: [0, 0.61111, 0, 0, 0.525], 931: [0, 0.61111, 0, 0, 0.525], 933: [0, 0.61111, 0, 0, 0.525], 934: [0, 0.61111, 0, 0, 0.525], 936: [0, 0.61111, 0, 0, 0.525], 937: [0, 0.61111, 0, 0, 0.525], 8216: [0, 0.61111, 0, 0, 0.525], 8217: [0, 0.61111, 0, 0, 0.525], 8242: [0, 0.61111, 0, 0, 0.525], 9251: [0.11111, 0.21944, 0, 0, 0.525] } }, Fe = { slant: [0.25, 0.25, 0.25], space: [0, 0, 0], stretch: [0, 0, 0], shrink: [0, 0, 0], xHeight: [0.431, 0.431, 0.431], quad: [1, 1.171, 1.472], extraSpace: [0, 0, 0], num1: [0.677, 0.732, 0.925], num2: [0.394, 0.384, 0.387], num3: [0.444, 0.471, 0.504], denom1: [0.686, 0.752, 1.025], denom2: [0.345, 0.344, 0.532], sup1: [0.413, 0.503, 0.504], sup2: [0.363, 0.431, 0.404], sup3: [0.289, 0.286, 0.294], sub1: [0.15, 0.143, 0.2], sub2: [0.247, 0.286, 0.4], supDrop: [0.386, 0.353, 0.494], subDrop: [0.05, 0.071, 0.1], delim1: [2.39, 1.7, 1.98], delim2: [1.01, 1.157, 1.42], axisHeight: [0.25, 0.25, 0.25], defaultRuleThickness: [0.04, 0.049, 0.049], bigOpSpacing1: [0.111, 0.111, 0.111], bigOpSpacing2: [0.166, 0.166, 0.166], bigOpSpacing3: [0.2, 0.2, 0.2], bigOpSpacing4: [0.6, 0.611, 0.611], bigOpSpacing5: [0.1, 0.143, 0.143], sqrtRuleThickness: [0.04, 0.04, 0.04], ptPerEm: [10, 10, 10], doubleRuleSep: [0.2, 0.2, 0.2], arrayRuleWidth: [0.04, 0.04, 0.04], fboxsep: [0.3, 0.3, 0.3], fboxrule: [0.04, 0.04, 0.04] }, Or = { \u00C5: "A", \u00D0: "D", \u00DE: "o", \u00E5: "a", \u00F0: "d", \u00FE: "o", \u0410: "A", \u0411: "B", \u0412: "B", \u0413: "F", \u0414: "A", \u0415: "E", \u0416: "K", \u0417: "3", \u0418: "N", \u0419: "N", \u041A: "K", \u041B: "N", \u041C: "M", \u041D: "H", \u041E: "O", \u041F: "N", \u0420: "P", \u0421: "C", \u0422: "T", \u0423: "y", \u0424: "O", \u0425: "X", \u0426: "U", \u0427: "h", \u0428: "W", \u0429: "W", \u042A: "B", \u042B: "X", \u042C: "B", \u042D: "3", \u042E: "X", \u042F: "R", \u0430: "a", \u0431: "b", \u0432: "a", \u0433: "r", \u0434: "y", \u0435: "e", \u0436: "m", \u0437: "e", \u0438: "n", \u0439: "n", \u043A: "n", \u043B: "n", \u043C: "m", \u043D: "n", \u043E: "o", \u043F: "n", \u0440: "p", \u0441: "c", \u0442: "o", \u0443: "y", \u0444: "b", \u0445: "x", \u0446: "n", \u0447: "n", \u0448: "w", \u0449: "w", \u044A: "a", \u044B: "m", \u044C: "a", \u044D: "e", \u044E: "m", \u044F: "r" };
function _1(r, e) {
  C0[r] = e;
}
function hr(r, e, t) {
  if (!C0[e]) throw new Error("Font metrics not found for font: " + e + ".");
  var a = r.charCodeAt(0), n = C0[e][a];
  if (!n && r[0] in Or && (a = Or[r[0]].charCodeAt(0), n = C0[e][a]), !n && t === "text" && qa(a) && (n = C0[e][77]), n) return { depth: n[0], height: n[1], italic: n[2], skew: n[3], width: n[4] };
}
var pt = {};
function ei(r) {
  var e;
  if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !pt[e]) {
    var t = pt[e] = { cssEmPerMu: Fe.quad[e] / 18 };
    for (var a in Fe) Fe.hasOwnProperty(a) && (t[a] = Fe[a][e]);
  }
  return pt[e];
}
var Z = { math: {}, text: {} };
function s(r, e, t, a, n, i) {
  Z[r][n] = { font: e, group: t, replace: a }, i && a && (Z[r][a] = Z[r][n]);
}
var l = "math", w = "text", h = "main", p = "ams", K = "accent-token", R = "bin", c0 = "close", ge = "inner", E = "mathord", a0 = "op-token", g0 = "open", Be = "punct", v = "rel", F0 = "spacing", b = "textord";
s(l, h, v, "\u2261", "\\equiv", true);
s(l, h, v, "\u227A", "\\prec", true);
s(l, h, v, "\u227B", "\\succ", true);
s(l, h, v, "\u223C", "\\sim", true);
s(l, h, v, "\u22A5", "\\perp");
s(l, h, v, "\u2AAF", "\\preceq", true);
s(l, h, v, "\u2AB0", "\\succeq", true);
s(l, h, v, "\u2243", "\\simeq", true);
s(l, h, v, "\u2223", "\\mid", true);
s(l, h, v, "\u226A", "\\ll", true);
s(l, h, v, "\u226B", "\\gg", true);
s(l, h, v, "\u224D", "\\asymp", true);
s(l, h, v, "\u2225", "\\parallel");
s(l, h, v, "\u22C8", "\\bowtie", true);
s(l, h, v, "\u2323", "\\smile", true);
s(l, h, v, "\u2291", "\\sqsubseteq", true);
s(l, h, v, "\u2292", "\\sqsupseteq", true);
s(l, h, v, "\u2250", "\\doteq", true);
s(l, h, v, "\u2322", "\\frown", true);
s(l, h, v, "\u220B", "\\ni", true);
s(l, h, v, "\u221D", "\\propto", true);
s(l, h, v, "\u22A2", "\\vdash", true);
s(l, h, v, "\u22A3", "\\dashv", true);
s(l, h, v, "\u220B", "\\owns");
s(l, h, Be, ".", "\\ldotp");
s(l, h, Be, "\u22C5", "\\cdotp");
s(l, h, Be, "\u22C5", "\xB7");
s(w, h, b, "\u22C5", "\xB7");
s(l, h, b, "#", "\\#");
s(w, h, b, "#", "\\#");
s(l, h, b, "&", "\\&");
s(w, h, b, "&", "\\&");
s(l, h, b, "\u2135", "\\aleph", true);
s(l, h, b, "\u2200", "\\forall", true);
s(l, h, b, "\u210F", "\\hbar", true);
s(l, h, b, "\u2203", "\\exists", true);
s(l, h, b, "\u2207", "\\nabla", true);
s(l, h, b, "\u266D", "\\flat", true);
s(l, h, b, "\u2113", "\\ell", true);
s(l, h, b, "\u266E", "\\natural", true);
s(l, h, b, "\u2663", "\\clubsuit", true);
s(l, h, b, "\u2118", "\\wp", true);
s(l, h, b, "\u266F", "\\sharp", true);
s(l, h, b, "\u2662", "\\diamondsuit", true);
s(l, h, b, "\u211C", "\\Re", true);
s(l, h, b, "\u2661", "\\heartsuit", true);
s(l, h, b, "\u2111", "\\Im", true);
s(l, h, b, "\u2660", "\\spadesuit", true);
s(l, h, b, "\xA7", "\\S", true);
s(w, h, b, "\xA7", "\\S");
s(l, h, b, "\xB6", "\\P", true);
s(w, h, b, "\xB6", "\\P");
s(l, h, b, "\u2020", "\\dag");
s(w, h, b, "\u2020", "\\dag");
s(w, h, b, "\u2020", "\\textdagger");
s(l, h, b, "\u2021", "\\ddag");
s(w, h, b, "\u2021", "\\ddag");
s(w, h, b, "\u2021", "\\textdaggerdbl");
s(l, h, c0, "\u23B1", "\\rmoustache", true);
s(l, h, g0, "\u23B0", "\\lmoustache", true);
s(l, h, c0, "\u27EF", "\\rgroup", true);
s(l, h, g0, "\u27EE", "\\lgroup", true);
s(l, h, R, "\u2213", "\\mp", true);
s(l, h, R, "\u2296", "\\ominus", true);
s(l, h, R, "\u228E", "\\uplus", true);
s(l, h, R, "\u2293", "\\sqcap", true);
s(l, h, R, "\u2217", "\\ast");
s(l, h, R, "\u2294", "\\sqcup", true);
s(l, h, R, "\u25EF", "\\bigcirc", true);
s(l, h, R, "\u2219", "\\bullet", true);
s(l, h, R, "\u2021", "\\ddagger");
s(l, h, R, "\u2240", "\\wr", true);
s(l, h, R, "\u2A3F", "\\amalg");
s(l, h, R, "&", "\\And");
s(l, h, v, "\u27F5", "\\longleftarrow", true);
s(l, h, v, "\u21D0", "\\Leftarrow", true);
s(l, h, v, "\u27F8", "\\Longleftarrow", true);
s(l, h, v, "\u27F6", "\\longrightarrow", true);
s(l, h, v, "\u21D2", "\\Rightarrow", true);
s(l, h, v, "\u27F9", "\\Longrightarrow", true);
s(l, h, v, "\u2194", "\\leftrightarrow", true);
s(l, h, v, "\u27F7", "\\longleftrightarrow", true);
s(l, h, v, "\u21D4", "\\Leftrightarrow", true);
s(l, h, v, "\u27FA", "\\Longleftrightarrow", true);
s(l, h, v, "\u21A6", "\\mapsto", true);
s(l, h, v, "\u27FC", "\\longmapsto", true);
s(l, h, v, "\u2197", "\\nearrow", true);
s(l, h, v, "\u21A9", "\\hookleftarrow", true);
s(l, h, v, "\u21AA", "\\hookrightarrow", true);
s(l, h, v, "\u2198", "\\searrow", true);
s(l, h, v, "\u21BC", "\\leftharpoonup", true);
s(l, h, v, "\u21C0", "\\rightharpoonup", true);
s(l, h, v, "\u2199", "\\swarrow", true);
s(l, h, v, "\u21BD", "\\leftharpoondown", true);
s(l, h, v, "\u21C1", "\\rightharpoondown", true);
s(l, h, v, "\u2196", "\\nwarrow", true);
s(l, h, v, "\u21CC", "\\rightleftharpoons", true);
s(l, p, v, "\u226E", "\\nless", true);
s(l, p, v, "\uE010", "\\@nleqslant");
s(l, p, v, "\uE011", "\\@nleqq");
s(l, p, v, "\u2A87", "\\lneq", true);
s(l, p, v, "\u2268", "\\lneqq", true);
s(l, p, v, "\uE00C", "\\@lvertneqq");
s(l, p, v, "\u22E6", "\\lnsim", true);
s(l, p, v, "\u2A89", "\\lnapprox", true);
s(l, p, v, "\u2280", "\\nprec", true);
s(l, p, v, "\u22E0", "\\npreceq", true);
s(l, p, v, "\u22E8", "\\precnsim", true);
s(l, p, v, "\u2AB9", "\\precnapprox", true);
s(l, p, v, "\u2241", "\\nsim", true);
s(l, p, v, "\uE006", "\\@nshortmid");
s(l, p, v, "\u2224", "\\nmid", true);
s(l, p, v, "\u22AC", "\\nvdash", true);
s(l, p, v, "\u22AD", "\\nvDash", true);
s(l, p, v, "\u22EA", "\\ntriangleleft");
s(l, p, v, "\u22EC", "\\ntrianglelefteq", true);
s(l, p, v, "\u228A", "\\subsetneq", true);
s(l, p, v, "\uE01A", "\\@varsubsetneq");
s(l, p, v, "\u2ACB", "\\subsetneqq", true);
s(l, p, v, "\uE017", "\\@varsubsetneqq");
s(l, p, v, "\u226F", "\\ngtr", true);
s(l, p, v, "\uE00F", "\\@ngeqslant");
s(l, p, v, "\uE00E", "\\@ngeqq");
s(l, p, v, "\u2A88", "\\gneq", true);
s(l, p, v, "\u2269", "\\gneqq", true);
s(l, p, v, "\uE00D", "\\@gvertneqq");
s(l, p, v, "\u22E7", "\\gnsim", true);
s(l, p, v, "\u2A8A", "\\gnapprox", true);
s(l, p, v, "\u2281", "\\nsucc", true);
s(l, p, v, "\u22E1", "\\nsucceq", true);
s(l, p, v, "\u22E9", "\\succnsim", true);
s(l, p, v, "\u2ABA", "\\succnapprox", true);
s(l, p, v, "\u2246", "\\ncong", true);
s(l, p, v, "\uE007", "\\@nshortparallel");
s(l, p, v, "\u2226", "\\nparallel", true);
s(l, p, v, "\u22AF", "\\nVDash", true);
s(l, p, v, "\u22EB", "\\ntriangleright");
s(l, p, v, "\u22ED", "\\ntrianglerighteq", true);
s(l, p, v, "\uE018", "\\@nsupseteqq");
s(l, p, v, "\u228B", "\\supsetneq", true);
s(l, p, v, "\uE01B", "\\@varsupsetneq");
s(l, p, v, "\u2ACC", "\\supsetneqq", true);
s(l, p, v, "\uE019", "\\@varsupsetneqq");
s(l, p, v, "\u22AE", "\\nVdash", true);
s(l, p, v, "\u2AB5", "\\precneqq", true);
s(l, p, v, "\u2AB6", "\\succneqq", true);
s(l, p, v, "\uE016", "\\@nsubseteqq");
s(l, p, R, "\u22B4", "\\unlhd");
s(l, p, R, "\u22B5", "\\unrhd");
s(l, p, v, "\u219A", "\\nleftarrow", true);
s(l, p, v, "\u219B", "\\nrightarrow", true);
s(l, p, v, "\u21CD", "\\nLeftarrow", true);
s(l, p, v, "\u21CF", "\\nRightarrow", true);
s(l, p, v, "\u21AE", "\\nleftrightarrow", true);
s(l, p, v, "\u21CE", "\\nLeftrightarrow", true);
s(l, p, v, "\u25B3", "\\vartriangle");
s(l, p, b, "\u210F", "\\hslash");
s(l, p, b, "\u25BD", "\\triangledown");
s(l, p, b, "\u25CA", "\\lozenge");
s(l, p, b, "\u24C8", "\\circledS");
s(l, p, b, "\xAE", "\\circledR");
s(w, p, b, "\xAE", "\\circledR");
s(l, p, b, "\u2221", "\\measuredangle", true);
s(l, p, b, "\u2204", "\\nexists");
s(l, p, b, "\u2127", "\\mho");
s(l, p, b, "\u2132", "\\Finv", true);
s(l, p, b, "\u2141", "\\Game", true);
s(l, p, b, "\u2035", "\\backprime");
s(l, p, b, "\u25B2", "\\blacktriangle");
s(l, p, b, "\u25BC", "\\blacktriangledown");
s(l, p, b, "\u25A0", "\\blacksquare");
s(l, p, b, "\u29EB", "\\blacklozenge");
s(l, p, b, "\u2605", "\\bigstar");
s(l, p, b, "\u2222", "\\sphericalangle", true);
s(l, p, b, "\u2201", "\\complement", true);
s(l, p, b, "\xF0", "\\eth", true);
s(w, h, b, "\xF0", "\xF0");
s(l, p, b, "\u2571", "\\diagup");
s(l, p, b, "\u2572", "\\diagdown");
s(l, p, b, "\u25A1", "\\square");
s(l, p, b, "\u25A1", "\\Box");
s(l, p, b, "\u25CA", "\\Diamond");
s(l, p, b, "\xA5", "\\yen", true);
s(w, p, b, "\xA5", "\\yen", true);
s(l, p, b, "\u2713", "\\checkmark", true);
s(w, p, b, "\u2713", "\\checkmark");
s(l, p, b, "\u2136", "\\beth", true);
s(l, p, b, "\u2138", "\\daleth", true);
s(l, p, b, "\u2137", "\\gimel", true);
s(l, p, b, "\u03DD", "\\digamma", true);
s(l, p, b, "\u03F0", "\\varkappa");
s(l, p, g0, "\u250C", "\\@ulcorner", true);
s(l, p, c0, "\u2510", "\\@urcorner", true);
s(l, p, g0, "\u2514", "\\@llcorner", true);
s(l, p, c0, "\u2518", "\\@lrcorner", true);
s(l, p, v, "\u2266", "\\leqq", true);
s(l, p, v, "\u2A7D", "\\leqslant", true);
s(l, p, v, "\u2A95", "\\eqslantless", true);
s(l, p, v, "\u2272", "\\lesssim", true);
s(l, p, v, "\u2A85", "\\lessapprox", true);
s(l, p, v, "\u224A", "\\approxeq", true);
s(l, p, R, "\u22D6", "\\lessdot");
s(l, p, v, "\u22D8", "\\lll", true);
s(l, p, v, "\u2276", "\\lessgtr", true);
s(l, p, v, "\u22DA", "\\lesseqgtr", true);
s(l, p, v, "\u2A8B", "\\lesseqqgtr", true);
s(l, p, v, "\u2251", "\\doteqdot");
s(l, p, v, "\u2253", "\\risingdotseq", true);
s(l, p, v, "\u2252", "\\fallingdotseq", true);
s(l, p, v, "\u223D", "\\backsim", true);
s(l, p, v, "\u22CD", "\\backsimeq", true);
s(l, p, v, "\u2AC5", "\\subseteqq", true);
s(l, p, v, "\u22D0", "\\Subset", true);
s(l, p, v, "\u228F", "\\sqsubset", true);
s(l, p, v, "\u227C", "\\preccurlyeq", true);
s(l, p, v, "\u22DE", "\\curlyeqprec", true);
s(l, p, v, "\u227E", "\\precsim", true);
s(l, p, v, "\u2AB7", "\\precapprox", true);
s(l, p, v, "\u22B2", "\\vartriangleleft");
s(l, p, v, "\u22B4", "\\trianglelefteq");
s(l, p, v, "\u22A8", "\\vDash", true);
s(l, p, v, "\u22AA", "\\Vvdash", true);
s(l, p, v, "\u2323", "\\smallsmile");
s(l, p, v, "\u2322", "\\smallfrown");
s(l, p, v, "\u224F", "\\bumpeq", true);
s(l, p, v, "\u224E", "\\Bumpeq", true);
s(l, p, v, "\u2267", "\\geqq", true);
s(l, p, v, "\u2A7E", "\\geqslant", true);
s(l, p, v, "\u2A96", "\\eqslantgtr", true);
s(l, p, v, "\u2273", "\\gtrsim", true);
s(l, p, v, "\u2A86", "\\gtrapprox", true);
s(l, p, R, "\u22D7", "\\gtrdot");
s(l, p, v, "\u22D9", "\\ggg", true);
s(l, p, v, "\u2277", "\\gtrless", true);
s(l, p, v, "\u22DB", "\\gtreqless", true);
s(l, p, v, "\u2A8C", "\\gtreqqless", true);
s(l, p, v, "\u2256", "\\eqcirc", true);
s(l, p, v, "\u2257", "\\circeq", true);
s(l, p, v, "\u225C", "\\triangleq", true);
s(l, p, v, "\u223C", "\\thicksim");
s(l, p, v, "\u2248", "\\thickapprox");
s(l, p, v, "\u2AC6", "\\supseteqq", true);
s(l, p, v, "\u22D1", "\\Supset", true);
s(l, p, v, "\u2290", "\\sqsupset", true);
s(l, p, v, "\u227D", "\\succcurlyeq", true);
s(l, p, v, "\u22DF", "\\curlyeqsucc", true);
s(l, p, v, "\u227F", "\\succsim", true);
s(l, p, v, "\u2AB8", "\\succapprox", true);
s(l, p, v, "\u22B3", "\\vartriangleright");
s(l, p, v, "\u22B5", "\\trianglerighteq");
s(l, p, v, "\u22A9", "\\Vdash", true);
s(l, p, v, "\u2223", "\\shortmid");
s(l, p, v, "\u2225", "\\shortparallel");
s(l, p, v, "\u226C", "\\between", true);
s(l, p, v, "\u22D4", "\\pitchfork", true);
s(l, p, v, "\u221D", "\\varpropto");
s(l, p, v, "\u25C0", "\\blacktriangleleft");
s(l, p, v, "\u2234", "\\therefore", true);
s(l, p, v, "\u220D", "\\backepsilon");
s(l, p, v, "\u25B6", "\\blacktriangleright");
s(l, p, v, "\u2235", "\\because", true);
s(l, p, v, "\u22D8", "\\llless");
s(l, p, v, "\u22D9", "\\gggtr");
s(l, p, R, "\u22B2", "\\lhd");
s(l, p, R, "\u22B3", "\\rhd");
s(l, p, v, "\u2242", "\\eqsim", true);
s(l, h, v, "\u22C8", "\\Join");
s(l, p, v, "\u2251", "\\Doteq", true);
s(l, p, R, "\u2214", "\\dotplus", true);
s(l, p, R, "\u2216", "\\smallsetminus");
s(l, p, R, "\u22D2", "\\Cap", true);
s(l, p, R, "\u22D3", "\\Cup", true);
s(l, p, R, "\u2A5E", "\\doublebarwedge", true);
s(l, p, R, "\u229F", "\\boxminus", true);
s(l, p, R, "\u229E", "\\boxplus", true);
s(l, p, R, "\u22C7", "\\divideontimes", true);
s(l, p, R, "\u22C9", "\\ltimes", true);
s(l, p, R, "\u22CA", "\\rtimes", true);
s(l, p, R, "\u22CB", "\\leftthreetimes", true);
s(l, p, R, "\u22CC", "\\rightthreetimes", true);
s(l, p, R, "\u22CF", "\\curlywedge", true);
s(l, p, R, "\u22CE", "\\curlyvee", true);
s(l, p, R, "\u229D", "\\circleddash", true);
s(l, p, R, "\u229B", "\\circledast", true);
s(l, p, R, "\u22C5", "\\centerdot");
s(l, p, R, "\u22BA", "\\intercal", true);
s(l, p, R, "\u22D2", "\\doublecap");
s(l, p, R, "\u22D3", "\\doublecup");
s(l, p, R, "\u22A0", "\\boxtimes", true);
s(l, p, v, "\u21E2", "\\dashrightarrow", true);
s(l, p, v, "\u21E0", "\\dashleftarrow", true);
s(l, p, v, "\u21C7", "\\leftleftarrows", true);
s(l, p, v, "\u21C6", "\\leftrightarrows", true);
s(l, p, v, "\u21DA", "\\Lleftarrow", true);
s(l, p, v, "\u219E", "\\twoheadleftarrow", true);
s(l, p, v, "\u21A2", "\\leftarrowtail", true);
s(l, p, v, "\u21AB", "\\looparrowleft", true);
s(l, p, v, "\u21CB", "\\leftrightharpoons", true);
s(l, p, v, "\u21B6", "\\curvearrowleft", true);
s(l, p, v, "\u21BA", "\\circlearrowleft", true);
s(l, p, v, "\u21B0", "\\Lsh", true);
s(l, p, v, "\u21C8", "\\upuparrows", true);
s(l, p, v, "\u21BF", "\\upharpoonleft", true);
s(l, p, v, "\u21C3", "\\downharpoonleft", true);
s(l, h, v, "\u22B6", "\\origof", true);
s(l, h, v, "\u22B7", "\\imageof", true);
s(l, p, v, "\u22B8", "\\multimap", true);
s(l, p, v, "\u21AD", "\\leftrightsquigarrow", true);
s(l, p, v, "\u21C9", "\\rightrightarrows", true);
s(l, p, v, "\u21C4", "\\rightleftarrows", true);
s(l, p, v, "\u21A0", "\\twoheadrightarrow", true);
s(l, p, v, "\u21A3", "\\rightarrowtail", true);
s(l, p, v, "\u21AC", "\\looparrowright", true);
s(l, p, v, "\u21B7", "\\curvearrowright", true);
s(l, p, v, "\u21BB", "\\circlearrowright", true);
s(l, p, v, "\u21B1", "\\Rsh", true);
s(l, p, v, "\u21CA", "\\downdownarrows", true);
s(l, p, v, "\u21BE", "\\upharpoonright", true);
s(l, p, v, "\u21C2", "\\downharpoonright", true);
s(l, p, v, "\u21DD", "\\rightsquigarrow", true);
s(l, p, v, "\u21DD", "\\leadsto");
s(l, p, v, "\u21DB", "\\Rrightarrow", true);
s(l, p, v, "\u21BE", "\\restriction");
s(l, h, b, "\u2018", "`");
s(l, h, b, "$", "\\$");
s(w, h, b, "$", "\\$");
s(w, h, b, "$", "\\textdollar");
s(l, h, b, "%", "\\%");
s(w, h, b, "%", "\\%");
s(l, h, b, "_", "\\_");
s(w, h, b, "_", "\\_");
s(w, h, b, "_", "\\textunderscore");
s(l, h, b, "\u2220", "\\angle", true);
s(l, h, b, "\u221E", "\\infty", true);
s(l, h, b, "\u2032", "\\prime");
s(l, h, b, "\u25B3", "\\triangle");
s(l, h, b, "\u0393", "\\Gamma", true);
s(l, h, b, "\u0394", "\\Delta", true);
s(l, h, b, "\u0398", "\\Theta", true);
s(l, h, b, "\u039B", "\\Lambda", true);
s(l, h, b, "\u039E", "\\Xi", true);
s(l, h, b, "\u03A0", "\\Pi", true);
s(l, h, b, "\u03A3", "\\Sigma", true);
s(l, h, b, "\u03A5", "\\Upsilon", true);
s(l, h, b, "\u03A6", "\\Phi", true);
s(l, h, b, "\u03A8", "\\Psi", true);
s(l, h, b, "\u03A9", "\\Omega", true);
s(l, h, b, "A", "\u0391");
s(l, h, b, "B", "\u0392");
s(l, h, b, "E", "\u0395");
s(l, h, b, "Z", "\u0396");
s(l, h, b, "H", "\u0397");
s(l, h, b, "I", "\u0399");
s(l, h, b, "K", "\u039A");
s(l, h, b, "M", "\u039C");
s(l, h, b, "N", "\u039D");
s(l, h, b, "O", "\u039F");
s(l, h, b, "P", "\u03A1");
s(l, h, b, "T", "\u03A4");
s(l, h, b, "X", "\u03A7");
s(l, h, b, "\xAC", "\\neg", true);
s(l, h, b, "\xAC", "\\lnot");
s(l, h, b, "\u22A4", "\\top");
s(l, h, b, "\u22A5", "\\bot");
s(l, h, b, "\u2205", "\\emptyset");
s(l, p, b, "\u2205", "\\varnothing");
s(l, h, E, "\u03B1", "\\alpha", true);
s(l, h, E, "\u03B2", "\\beta", true);
s(l, h, E, "\u03B3", "\\gamma", true);
s(l, h, E, "\u03B4", "\\delta", true);
s(l, h, E, "\u03F5", "\\epsilon", true);
s(l, h, E, "\u03B6", "\\zeta", true);
s(l, h, E, "\u03B7", "\\eta", true);
s(l, h, E, "\u03B8", "\\theta", true);
s(l, h, E, "\u03B9", "\\iota", true);
s(l, h, E, "\u03BA", "\\kappa", true);
s(l, h, E, "\u03BB", "\\lambda", true);
s(l, h, E, "\u03BC", "\\mu", true);
s(l, h, E, "\u03BD", "\\nu", true);
s(l, h, E, "\u03BE", "\\xi", true);
s(l, h, E, "\u03BF", "\\omicron", true);
s(l, h, E, "\u03C0", "\\pi", true);
s(l, h, E, "\u03C1", "\\rho", true);
s(l, h, E, "\u03C3", "\\sigma", true);
s(l, h, E, "\u03C4", "\\tau", true);
s(l, h, E, "\u03C5", "\\upsilon", true);
s(l, h, E, "\u03D5", "\\phi", true);
s(l, h, E, "\u03C7", "\\chi", true);
s(l, h, E, "\u03C8", "\\psi", true);
s(l, h, E, "\u03C9", "\\omega", true);
s(l, h, E, "\u03B5", "\\varepsilon", true);
s(l, h, E, "\u03D1", "\\vartheta", true);
s(l, h, E, "\u03D6", "\\varpi", true);
s(l, h, E, "\u03F1", "\\varrho", true);
s(l, h, E, "\u03C2", "\\varsigma", true);
s(l, h, E, "\u03C6", "\\varphi", true);
s(l, h, R, "\u2217", "*", true);
s(l, h, R, "+", "+");
s(l, h, R, "\u2212", "-", true);
s(l, h, R, "\u22C5", "\\cdot", true);
s(l, h, R, "\u2218", "\\circ", true);
s(l, h, R, "\xF7", "\\div", true);
s(l, h, R, "\xB1", "\\pm", true);
s(l, h, R, "\xD7", "\\times", true);
s(l, h, R, "\u2229", "\\cap", true);
s(l, h, R, "\u222A", "\\cup", true);
s(l, h, R, "\u2216", "\\setminus", true);
s(l, h, R, "\u2227", "\\land");
s(l, h, R, "\u2228", "\\lor");
s(l, h, R, "\u2227", "\\wedge", true);
s(l, h, R, "\u2228", "\\vee", true);
s(l, h, b, "\u221A", "\\surd");
s(l, h, g0, "\u27E8", "\\langle", true);
s(l, h, g0, "\u2223", "\\lvert");
s(l, h, g0, "\u2225", "\\lVert");
s(l, h, c0, "?", "?");
s(l, h, c0, "!", "!");
s(l, h, c0, "\u27E9", "\\rangle", true);
s(l, h, c0, "\u2223", "\\rvert");
s(l, h, c0, "\u2225", "\\rVert");
s(l, h, v, "=", "=");
s(l, h, v, ":", ":");
s(l, h, v, "\u2248", "\\approx", true);
s(l, h, v, "\u2245", "\\cong", true);
s(l, h, v, "\u2265", "\\ge");
s(l, h, v, "\u2265", "\\geq", true);
s(l, h, v, "\u2190", "\\gets");
s(l, h, v, ">", "\\gt", true);
s(l, h, v, "\u2208", "\\in", true);
s(l, h, v, "\uE020", "\\@not");
s(l, h, v, "\u2282", "\\subset", true);
s(l, h, v, "\u2283", "\\supset", true);
s(l, h, v, "\u2286", "\\subseteq", true);
s(l, h, v, "\u2287", "\\supseteq", true);
s(l, p, v, "\u2288", "\\nsubseteq", true);
s(l, p, v, "\u2289", "\\nsupseteq", true);
s(l, h, v, "\u22A8", "\\models");
s(l, h, v, "\u2190", "\\leftarrow", true);
s(l, h, v, "\u2264", "\\le");
s(l, h, v, "\u2264", "\\leq", true);
s(l, h, v, "<", "\\lt", true);
s(l, h, v, "\u2192", "\\rightarrow", true);
s(l, h, v, "\u2192", "\\to");
s(l, p, v, "\u2271", "\\ngeq", true);
s(l, p, v, "\u2270", "\\nleq", true);
s(l, h, F0, "\xA0", "\\ ");
s(l, h, F0, "\xA0", "\\space");
s(l, h, F0, "\xA0", "\\nobreakspace");
s(w, h, F0, "\xA0", "\\ ");
s(w, h, F0, "\xA0", " ");
s(w, h, F0, "\xA0", "\\space");
s(w, h, F0, "\xA0", "\\nobreakspace");
s(l, h, F0, "", "\\nobreak");
s(l, h, F0, "", "\\allowbreak");
s(l, h, Be, ",", ",");
s(l, h, Be, ";", ";");
s(l, p, R, "\u22BC", "\\barwedge", true);
s(l, p, R, "\u22BB", "\\veebar", true);
s(l, h, R, "\u2299", "\\odot", true);
s(l, h, R, "\u2295", "\\oplus", true);
s(l, h, R, "\u2297", "\\otimes", true);
s(l, h, b, "\u2202", "\\partial", true);
s(l, h, R, "\u2298", "\\oslash", true);
s(l, p, R, "\u229A", "\\circledcirc", true);
s(l, p, R, "\u22A1", "\\boxdot", true);
s(l, h, R, "\u25B3", "\\bigtriangleup");
s(l, h, R, "\u25BD", "\\bigtriangledown");
s(l, h, R, "\u2020", "\\dagger");
s(l, h, R, "\u22C4", "\\diamond");
s(l, h, R, "\u22C6", "\\star");
s(l, h, R, "\u25C3", "\\triangleleft");
s(l, h, R, "\u25B9", "\\triangleright");
s(l, h, g0, "{", "\\{");
s(w, h, b, "{", "\\{");
s(w, h, b, "{", "\\textbraceleft");
s(l, h, c0, "}", "\\}");
s(w, h, b, "}", "\\}");
s(w, h, b, "}", "\\textbraceright");
s(l, h, g0, "{", "\\lbrace");
s(l, h, c0, "}", "\\rbrace");
s(l, h, g0, "[", "\\lbrack", true);
s(w, h, b, "[", "\\lbrack", true);
s(l, h, c0, "]", "\\rbrack", true);
s(w, h, b, "]", "\\rbrack", true);
s(l, h, g0, "(", "\\lparen", true);
s(l, h, c0, ")", "\\rparen", true);
s(w, h, b, "<", "\\textless", true);
s(w, h, b, ">", "\\textgreater", true);
s(l, h, g0, "\u230A", "\\lfloor", true);
s(l, h, c0, "\u230B", "\\rfloor", true);
s(l, h, g0, "\u2308", "\\lceil", true);
s(l, h, c0, "\u2309", "\\rceil", true);
s(l, h, b, "\\", "\\backslash");
s(l, h, b, "\u2223", "|");
s(l, h, b, "\u2223", "\\vert");
s(w, h, b, "|", "\\textbar", true);
s(l, h, b, "\u2225", "\\|");
s(l, h, b, "\u2225", "\\Vert");
s(w, h, b, "\u2225", "\\textbardbl");
s(w, h, b, "~", "\\textasciitilde");
s(w, h, b, "\\", "\\textbackslash");
s(w, h, b, "^", "\\textasciicircum");
s(l, h, v, "\u2191", "\\uparrow", true);
s(l, h, v, "\u21D1", "\\Uparrow", true);
s(l, h, v, "\u2193", "\\downarrow", true);
s(l, h, v, "\u21D3", "\\Downarrow", true);
s(l, h, v, "\u2195", "\\updownarrow", true);
s(l, h, v, "\u21D5", "\\Updownarrow", true);
s(l, h, a0, "\u2210", "\\coprod");
s(l, h, a0, "\u22C1", "\\bigvee");
s(l, h, a0, "\u22C0", "\\bigwedge");
s(l, h, a0, "\u2A04", "\\biguplus");
s(l, h, a0, "\u22C2", "\\bigcap");
s(l, h, a0, "\u22C3", "\\bigcup");
s(l, h, a0, "\u222B", "\\int");
s(l, h, a0, "\u222B", "\\intop");
s(l, h, a0, "\u222C", "\\iint");
s(l, h, a0, "\u222D", "\\iiint");
s(l, h, a0, "\u220F", "\\prod");
s(l, h, a0, "\u2211", "\\sum");
s(l, h, a0, "\u2A02", "\\bigotimes");
s(l, h, a0, "\u2A01", "\\bigoplus");
s(l, h, a0, "\u2A00", "\\bigodot");
s(l, h, a0, "\u222E", "\\oint");
s(l, h, a0, "\u222F", "\\oiint");
s(l, h, a0, "\u2230", "\\oiiint");
s(l, h, a0, "\u2A06", "\\bigsqcup");
s(l, h, a0, "\u222B", "\\smallint");
s(w, h, ge, "\u2026", "\\textellipsis");
s(l, h, ge, "\u2026", "\\mathellipsis");
s(w, h, ge, "\u2026", "\\ldots", true);
s(l, h, ge, "\u2026", "\\ldots", true);
s(l, h, ge, "\u22EF", "\\@cdots", true);
s(l, h, ge, "\u22F1", "\\ddots", true);
s(l, h, b, "\u22EE", "\\varvdots");
s(w, h, b, "\u22EE", "\\varvdots");
s(l, h, K, "\u02CA", "\\acute");
s(l, h, K, "\u02CB", "\\grave");
s(l, h, K, "\xA8", "\\ddot");
s(l, h, K, "~", "\\tilde");
s(l, h, K, "\u02C9", "\\bar");
s(l, h, K, "\u02D8", "\\breve");
s(l, h, K, "\u02C7", "\\check");
s(l, h, K, "^", "\\hat");
s(l, h, K, "\u20D7", "\\vec");
s(l, h, K, "\u02D9", "\\dot");
s(l, h, K, "\u02DA", "\\mathring");
s(l, h, E, "\uE131", "\\@imath");
s(l, h, E, "\uE237", "\\@jmath");
s(l, h, b, "\u0131", "\u0131");
s(l, h, b, "\u0237", "\u0237");
s(w, h, b, "\u0131", "\\i", true);
s(w, h, b, "\u0237", "\\j", true);
s(w, h, b, "\xDF", "\\ss", true);
s(w, h, b, "\xE6", "\\ae", true);
s(w, h, b, "\u0153", "\\oe", true);
s(w, h, b, "\xF8", "\\o", true);
s(w, h, b, "\xC6", "\\AE", true);
s(w, h, b, "\u0152", "\\OE", true);
s(w, h, b, "\xD8", "\\O", true);
s(w, h, K, "\u02CA", "\\'");
s(w, h, K, "\u02CB", "\\`");
s(w, h, K, "\u02C6", "\\^");
s(w, h, K, "\u02DC", "\\~");
s(w, h, K, "\u02C9", "\\=");
s(w, h, K, "\u02D8", "\\u");
s(w, h, K, "\u02D9", "\\.");
s(w, h, K, "\xB8", "\\c");
s(w, h, K, "\u02DA", "\\r");
s(w, h, K, "\u02C7", "\\v");
s(w, h, K, "\xA8", '\\"');
s(w, h, K, "\u02DD", "\\H");
s(w, h, K, "\u25EF", "\\textcircled");
var Fa = { "--": true, "---": true, "``": true, "''": true };
s(w, h, b, "\u2013", "--", true);
s(w, h, b, "\u2013", "\\textendash");
s(w, h, b, "\u2014", "---", true);
s(w, h, b, "\u2014", "\\textemdash");
s(w, h, b, "\u2018", "`", true);
s(w, h, b, "\u2018", "\\textquoteleft");
s(w, h, b, "\u2019", "'", true);
s(w, h, b, "\u2019", "\\textquoteright");
s(w, h, b, "\u201C", "``", true);
s(w, h, b, "\u201C", "\\textquotedblleft");
s(w, h, b, "\u201D", "''", true);
s(w, h, b, "\u201D", "\\textquotedblright");
s(l, h, b, "\xB0", "\\degree", true);
s(w, h, b, "\xB0", "\\degree");
s(w, h, b, "\xB0", "\\textdegree", true);
s(l, h, b, "\xA3", "\\pounds");
s(l, h, b, "\xA3", "\\mathsterling", true);
s(w, h, b, "\xA3", "\\pounds");
s(w, h, b, "\xA3", "\\textsterling", true);
s(l, p, b, "\u2720", "\\maltese");
s(w, p, b, "\u2720", "\\maltese");
var $r = '0123456789/@."';
for (var ft = 0; ft < $r.length; ft++) {
  var Pr = $r.charAt(ft);
  s(l, h, b, Pr, Pr);
}
var Gr = '0123456789!@*()-=+";:?/.,';
for (var vt = 0; vt < Gr.length; vt++) {
  var Ur = Gr.charAt(vt);
  s(w, h, b, Ur, Ur);
}
var Qe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var gt = 0; gt < Qe.length; gt++) {
  var He = Qe.charAt(gt);
  s(l, h, E, He, He), s(w, h, b, He, He);
}
s(l, p, b, "C", "\u2102");
s(w, p, b, "C", "\u2102");
s(l, p, b, "H", "\u210D");
s(w, p, b, "H", "\u210D");
s(l, p, b, "N", "\u2115");
s(w, p, b, "N", "\u2115");
s(l, p, b, "P", "\u2119");
s(w, p, b, "P", "\u2119");
s(l, p, b, "Q", "\u211A");
s(w, p, b, "Q", "\u211A");
s(l, p, b, "R", "\u211D");
s(w, p, b, "R", "\u211D");
s(l, p, b, "Z", "\u2124");
s(w, p, b, "Z", "\u2124");
s(l, h, E, "h", "\u210E");
s(w, h, E, "h", "\u210E");
var I;
for (var o0 = 0; o0 < Qe.length; o0++) {
  var _ = Qe.charAt(o0);
  I = String.fromCharCode(55349, 56320 + o0), s(l, h, E, _, I), s(w, h, b, _, I), I = String.fromCharCode(55349, 56372 + o0), s(l, h, E, _, I), s(w, h, b, _, I), I = String.fromCharCode(55349, 56424 + o0), s(l, h, E, _, I), s(w, h, b, _, I), I = String.fromCharCode(55349, 56580 + o0), s(l, h, E, _, I), s(w, h, b, _, I), I = String.fromCharCode(55349, 56684 + o0), s(l, h, E, _, I), s(w, h, b, _, I), I = String.fromCharCode(55349, 56736 + o0), s(l, h, E, _, I), s(w, h, b, _, I), I = String.fromCharCode(55349, 56788 + o0), s(l, h, E, _, I), s(w, h, b, _, I), I = String.fromCharCode(55349, 56840 + o0), s(l, h, E, _, I), s(w, h, b, _, I), I = String.fromCharCode(55349, 56944 + o0), s(l, h, E, _, I), s(w, h, b, _, I), o0 < 26 && (I = String.fromCharCode(55349, 56632 + o0), s(l, h, E, _, I), s(w, h, b, _, I), I = String.fromCharCode(55349, 56476 + o0), s(l, h, E, _, I), s(w, h, b, _, I));
}
I = "\u{1D55C}";
s(l, h, E, "k", I);
s(w, h, b, "k", I);
for (var Q0 = 0; Q0 < 10; Q0++) {
  var V0 = Q0.toString();
  I = String.fromCharCode(55349, 57294 + Q0), s(l, h, E, V0, I), s(w, h, b, V0, I), I = String.fromCharCode(55349, 57314 + Q0), s(l, h, E, V0, I), s(w, h, b, V0, I), I = String.fromCharCode(55349, 57324 + Q0), s(l, h, E, V0, I), s(w, h, b, V0, I), I = String.fromCharCode(55349, 57334 + Q0), s(l, h, E, V0, I), s(w, h, b, V0, I);
}
var Ft = "\xD0\xDE\xFE";
for (var bt = 0; bt < Ft.length; bt++) {
  var Oe = Ft.charAt(bt);
  s(l, h, E, Oe, Oe), s(w, h, b, Oe, Oe);
}
var Ht = { mathClass: "mathbf", textClass: "textbf", font: "Main-Bold" }, Vr = { mathClass: "mathnormal", textClass: "textit", font: "Math-Italic" }, Xr = { mathClass: "boldsymbol", textClass: "boldsymbol", font: "Main-BoldItalic" }, ti = { mathClass: "mathscr", textClass: "textscr", font: "Script-Regular" }, ee = { mathClass: "", textClass: "", font: "" }, Yr = { mathClass: "mathfrak", textClass: "textfrak", font: "Fraktur-Regular" }, Wr = { mathClass: "mathbb", textClass: "textbb", font: "AMS-Regular" }, jr = { mathClass: "mathboldfrak", textClass: "textboldfrak", font: "Fraktur-Regular" }, Ot = { mathClass: "mathsf", textClass: "textsf", font: "SansSerif-Regular" }, $t = { mathClass: "mathboldsf", textClass: "textboldsf", font: "SansSerif-Bold" }, Zr = { mathClass: "mathitsf", textClass: "textitsf", font: "SansSerif-Italic" }, Pt = { mathClass: "mathtt", textClass: "texttt", font: "Typewriter-Regular" }, Kr = [Ht, Ht, Vr, Vr, Xr, Xr, ti, ee, ee, ee, Yr, Yr, Wr, Wr, jr, jr, Ot, Ot, $t, $t, Zr, Zr, ee, ee, Pt, Pt], ri = [Ht, ee, Ot, $t, Pt], ai = (r) => {
  var e = r.charCodeAt(0), t = r.charCodeAt(1), a = (e - 55296) * 1024 + (t - 56320) + 65536;
  if (119808 <= a && a < 120484) {
    var n = Math.floor((a - 119808) / 26);
    return Kr[n];
  } else if (120782 <= a && a <= 120831) {
    var i = Math.floor((a - 120782) / 10);
    return ri[i];
  } else {
    if (a === 120485 || a === 120486) return Kr[0];
    if (120486 < a && a < 120782) return ee;
    throw new z("Unsupported character: " + r);
  }
}, rt = function(e, t, a) {
  if (Z[a][e]) {
    var n = Z[a][e].replace;
    n && (e = n);
  }
  return { value: e, metrics: hr(e, t, a) };
}, u0 = function(e, t, a, n, i) {
  var o = rt(e, t, a), u = o.metrics;
  e = o.value;
  var c;
  if (u) {
    var d = u.italic;
    (a === "text" || n && n.font === "mathit") && (d = 0), c = new v0(e, u.height, u.depth, d, u.skew, u.width, i);
  } else typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + a + "'")), c = new v0(e, 0, 0, 0, 0, 0, i);
  if (n) {
    c.maxFontSize = n.sizeMultiplier, n.style.isTight() && c.classes.push("mtight");
    var f = n.getColor();
    f && (c.style.color = f);
  }
  return c;
}, cr = function(e, t, a, n) {
  return n === void 0 && (n = []), a.font === "boldsymbol" && rt(e, "Main-Bold", t).metrics ? u0(e, "Main-Bold", t, a, n.concat(["mathbf"])) : e === "\\" || Z[t][e].font === "main" ? u0(e, "Main-Regular", t, a, n) : u0(e, "AMS-Regular", t, a, n.concat(["amsrm"]));
}, ni = function(e, t, a) {
  return a !== "textord" && rt(e, "Math-BoldItalic", t).metrics ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" } : { fontName: "Main-Bold", fontClass: "mathbf" };
}, at = function(e, t) {
  var a = e.type === "mathord" ? "mathord" : "textord", n = e.mode, i = e.text, o = ["mord"], { font: u, fontFamily: c, fontWeight: d, fontShape: f } = t, g = n === "math" || n === "text" && !!u, x = g ? u : c, y = "", S = "";
  if (i.charCodeAt(0) === 55349) {
    var M = ai(i);
    y = M.font, S = M[n + "Class"];
  }
  if (y) return u0(i, y, n, t, o.concat(S));
  if (x) {
    var C, D;
    if (x === "boldsymbol") {
      var q = ni(i, n, a);
      C = q.fontName, D = [q.fontClass];
    } else g ? (C = Gt[u].fontName, D = [u]) : (C = $e(c, d, f), D = [c, d, f]);
    if (rt(i, C, n).metrics) return u0(i, C, n, t, o.concat(D));
    if (Fa.hasOwnProperty(i) && C.slice(0, 10) === "Typewriter") {
      for (var N = [], F = 0; F < i.length; F++) N.push(u0(i[F], C, n, t, o.concat(D)));
      return H0(N);
    }
  }
  if (a === "mathord") return u0(i, "Math-Italic", n, t, o.concat(["mathnormal"]));
  if (a === "textord") {
    var O = Z[n][i] && Z[n][i].font;
    if (O === "ams") {
      var H = $e("amsrm", d, f);
      return u0(i, H, n, t, o.concat("amsrm", d, f));
    } else if (O === "main" || !O) {
      var G = $e("textrm", d, f);
      return u0(i, G, n, t, o.concat(d, f));
    } else {
      var Y = $e(O, d, f);
      return u0(i, Y, n, t, o.concat(Y, d, f));
    }
  } else throw new Error("unexpected type: " + a + " in makeOrd");
}, ii = (r, e) => {
  if (Y0(r.classes) !== Y0(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize || r.italic !== 0 && r.hasClass("mathnormal")) return false;
  if (r.classes.length === 1) {
    var t = r.classes[0];
    if (t === "mbin" || t === "mord") return false;
  }
  for (var a of Object.keys(r.style)) if (r.style[a] !== e.style[a]) return false;
  for (var n of Object.keys(e.style)) if (r.style[n] !== e.style[n]) return false;
  return true;
}, Ha = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], a = r[e + 1];
    t instanceof v0 && a instanceof v0 && ii(t, a) && (t.text += a.text, t.height = Math.max(t.height, a.height), t.depth = Math.max(t.depth, a.depth), t.italic = a.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, mr = function(e) {
  for (var t = 0, a = 0, n = 0, i = 0; i < e.children.length; i++) {
    var o = e.children[i];
    o.height > t && (t = o.height), o.depth > a && (a = o.depth), o.maxFontSize > n && (n = o.maxFontSize);
  }
  e.height = t, e.depth = a, e.maxFontSize = n;
}, k = function(e, t, a, n) {
  var i = new ve(e, t, a, n);
  return mr(i), i;
}, j0 = (r, e, t, a) => new ve(r, e, t, a), me = function(e, t, a) {
  var n = k([e], [], t);
  return n.height = Math.max(a || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), n.style.borderBottomWidth = T(n.height), n.maxFontSize = 1, n;
}, si = function(e, t, a, n) {
  var i = new tt(e, t, a, n);
  return mr(i), i;
}, H0 = function(e) {
  var t = new fe(e);
  return mr(t), t;
}, de = function(e, t) {
  return e instanceof fe ? k([], [e], t) : e;
}, li = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, a = [t[0]], n = -t[0].shift - t[0].elem.depth, i = n, o = 1; o < t.length; o++) {
      var u = -t[o].shift - i - t[o].elem.depth, c = u - (t[o - 1].elem.height + t[o - 1].elem.depth);
      i = i + u, a.push({ type: "kern", size: c }), a.push(t[o]);
    }
    return { children: a, depth: n };
  }
  var d;
  if (e.positionType === "top") {
    for (var f = e.positionData, g = 0; g < e.children.length; g++) {
      var x = e.children[g];
      f -= x.type === "kern" ? x.size : x.elem.height + x.elem.depth;
    }
    d = f;
  } else if (e.positionType === "bottom") d = -e.positionData;
  else {
    var y = e.children[0];
    if (y.type !== "elem") throw new Error('First child must have type "elem".');
    if (e.positionType === "shift") d = -y.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline") d = -y.elem.depth;
    else throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return { children: e.children, depth: d };
}, V = function(e, t) {
  for (var { children: a, depth: n } = li(e), i = 0, o = 0; o < a.length; o++) {
    var u = a[o];
    if (u.type === "elem") {
      var c = u.elem;
      i = Math.max(i, c.maxFontSize, c.height);
    }
  }
  i += 2;
  var d = k(["pstrut"], []);
  d.style.height = T(i);
  for (var f = [], g = n, x = n, y = n, S = 0; S < a.length; S++) {
    var M = a[S];
    if (M.type === "kern") y += M.size;
    else {
      var C = M.elem, D = M.wrapperClasses || [], q = M.wrapperStyle || {}, N = k(D, [d, C], void 0, q);
      N.style.top = T(-i - y - C.depth), M.marginLeft && (N.style.marginLeft = M.marginLeft), M.marginRight && (N.style.marginRight = M.marginRight), f.push(N), y += C.height + C.depth;
    }
    g = Math.min(g, y), x = Math.max(x, y);
  }
  var F = k(["vlist"], f);
  F.style.height = T(x);
  var O;
  if (g < 0) {
    var H = k([], []), G = k(["vlist"], [H]);
    G.style.height = T(-g);
    var Y = k(["vlist-s"], [new v0("\u200B")]);
    O = [k(["vlist-r"], [F, Y]), k(["vlist-r"], [G])];
  } else O = [k(["vlist-r"], [F])];
  var U = k(["vlist-t"], O);
  return O.length === 2 && U.classes.push("vlist-t2"), U.height = x, U.depth = -g, U;
}, Oa = (r, e) => {
  var t = k(["mspace"], [], e), a = J(r, e);
  return t.style.marginRight = T(a), t;
}, $e = (r, e, t) => {
  var a, n;
  switch (r) {
    case "amsrm":
      a = "AMS";
      break;
    case "textrm":
      a = "Main";
      break;
    case "textsf":
      a = "SansSerif";
      break;
    case "texttt":
      a = "Typewriter";
      break;
    default:
      a = r;
  }
  return e === "textbf" && t === "textit" ? n = "BoldItalic" : e === "textbf" ? n = "Bold" : t === "textit" ? n = "Italic" : n = "Regular", a + "-" + n;
}, Gt = { mathbf: { variant: "bold", fontName: "Main-Bold" }, mathrm: { variant: "normal", fontName: "Main-Regular" }, textit: { variant: "italic", fontName: "Main-Italic" }, mathit: { variant: "italic", fontName: "Main-Italic" }, mathnormal: { variant: "italic", fontName: "Math-Italic" }, mathsfit: { variant: "sans-serif-italic", fontName: "SansSerif-Italic" }, mathbb: { variant: "double-struck", fontName: "AMS-Regular" }, mathcal: { variant: "script", fontName: "Caligraphic-Regular" }, mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" }, mathscr: { variant: "script", fontName: "Script-Regular" }, mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" }, mathtt: { variant: "monospace", fontName: "Typewriter-Regular" } }, $a = { vec: ["vec", 0.471, 0.714], oiintSize1: ["oiintSize1", 0.957, 0.499], oiintSize2: ["oiintSize2", 1.472, 0.659], oiiintSize1: ["oiiintSize1", 1.304, 0.499], oiiintSize2: ["oiiintSize2", 1.98, 0.659] }, Pa = function(e, t) {
  var [a, n, i] = $a[e], o = new W0(a), u = new N0([o], { width: T(n), height: T(i), style: "width:" + T(n), viewBox: "0 0 " + 1e3 * n + " " + 1e3 * i, preserveAspectRatio: "xMinYMin" }), c = j0(["overlay"], [u], t);
  return c.height = i, c.style.height = T(i), c.style.width = T(n), c;
}, Q = { number: 3, unit: "mu" }, J0 = { number: 4, unit: "mu" }, q0 = { number: 5, unit: "mu" }, oi = { mord: { mop: Q, mbin: J0, mrel: q0, minner: Q }, mop: { mord: Q, mop: Q, mrel: q0, minner: Q }, mbin: { mord: J0, mop: J0, mopen: J0, minner: J0 }, mrel: { mord: q0, mop: q0, mopen: q0, minner: q0 }, mopen: {}, mclose: { mop: Q, mbin: J0, mrel: q0, minner: Q }, mpunct: { mord: Q, mop: Q, mrel: q0, mopen: Q, mclose: Q, mpunct: Q, minner: Q }, minner: { mord: Q, mop: Q, mbin: J0, mrel: q0, mopen: Q, mpunct: Q, minner: Q } }, ui = { mord: { mop: Q }, mop: { mord: Q, mop: Q }, mbin: {}, mrel: {}, mopen: {}, mclose: { mop: Q }, mpunct: {}, minner: { mop: Q } }, Ga = {}, Ae = {}, Te = {};
function B(r) {
  for (var { type: e, names: t, htmlBuilder: a, mathmlBuilder: n } = r, i = 0; i < t.length; ++i) Ga[t[i]] = r;
  e && (a && (Ae[e] = a), n && (Te[e] = n));
}
function ae(r) {
  var { type: e, htmlBuilder: t, mathmlBuilder: a } = r;
  t && (Ae[e] = t), a && (Te[e] = a);
}
var Je = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, t0 = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, hi = /* @__PURE__ */ new Set(["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]), ci = /* @__PURE__ */ new Set(["rightmost", "mrel", "mclose", "mpunct"]), mi = { display: L.DISPLAY, text: L.TEXT, script: L.SCRIPT, scriptscript: L.SCRIPTSCRIPT }, di = { mord: "mord", mop: "mop", mbin: "mbin", mrel: "mrel", mopen: "mopen", mclose: "mclose", mpunct: "mpunct", minner: "minner" }, i0 = function(e, t, a, n) {
  n === void 0 && (n = [null, null]);
  for (var i = [], o = 0; o < e.length; o++) {
    var u = X(e[o], t);
    if (u instanceof fe) {
      var c = u.children;
      i.push(...c);
    } else i.push(u);
  }
  if (Ha(i), !a) return i;
  var d = t;
  if (e.length === 1) {
    var f = e[0];
    f.type === "sizing" ? d = t.havingSize(f.size) : f.type === "styling" && (d = t.havingStyle(mi[f.style]));
  }
  var g = k([n[0] || "leftmost"], [], t), x = k([n[1] || "rightmost"], [], t), y = a === "root";
  return Ut(i, (S, M) => {
    var C = M.classes[0], D = S.classes[0];
    C === "mbin" && ci.has(D) ? M.classes[0] = "mord" : D === "mbin" && hi.has(C) && (S.classes[0] = "mord");
  }, { node: g }, x, y), Ut(i, (S, M) => {
    var C, D, q = Xt(M), N = Xt(S), F = q && N ? S.hasClass("mtight") ? (C = ui[q]) == null ? void 0 : C[N] : (D = oi[q]) == null ? void 0 : D[N] : null;
    if (F) return Oa(F, d);
  }, { node: g }, x, y), i;
}, Ut = function(e, t, a, n, i) {
  n && e.push(n);
  for (var o = 0; o < e.length; o++) {
    var u = e[o], c = Ua(u);
    if (c) {
      Ut(c.children, t, a, null, i);
      continue;
    }
    var d = !u.hasClass("mspace");
    if (d) {
      var f = t(u, a.node);
      f && (a.insertAfter ? a.insertAfter(f) : (e.unshift(f), o++));
    }
    d ? a.node = u : i && u.hasClass("newline") && (a.node = k(["leftmost"])), a.insertAfter = /* @__PURE__ */ ((g) => (x) => {
      e.splice(g + 1, 0, x), o++;
    })(o);
  }
  n && e.pop();
}, Ua = function(e) {
  return e instanceof fe || e instanceof tt || e instanceof ve && e.hasClass("enclosing") ? e : null;
}, Vt = function(e, t) {
  var a = Ua(e);
  if (a) {
    var n = a.children;
    if (n.length) {
      if (t === "right") return Vt(n[n.length - 1], "right");
      if (t === "left") return Vt(n[0], "left");
    }
  }
  return e;
}, Xt = function(e, t) {
  if (!e) return null;
  t && (e = Vt(e, t));
  var a = e.classes[0];
  return di[a] || null;
}, Me = function(e, t) {
  var a = ["nulldelimiter"].concat(e.baseSizingClasses());
  return k(t.concat(a));
}, X = function(e, t, a) {
  if (!e) return k();
  if (Ae[e.type]) {
    var n = Ae[e.type](e, t);
    if (a && t.size !== a.size) {
      n = k(t.sizingClasses(a), [n], t);
      var i = t.sizeMultiplier / a.sizeMultiplier;
      n.height *= i, n.depth *= i;
    }
    return n;
  } else throw new z("Got group of unknown type: '" + e.type + "'");
};
function Pe(r, e) {
  var t = k(["base"], r, e), a = k(["strut"]);
  return a.style.height = T(t.height + t.depth), t.depth && (a.style.verticalAlign = T(-t.depth)), t.children.unshift(a), t;
}
function Yt(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
  var a = i0(r, e, "root"), n;
  a.length === 2 && a[1].hasClass("tag") && (n = a.pop());
  for (var i = [], o = [], u = 0; u < a.length; u++) if (o.push(a[u]), a[u].hasClass("mbin") || a[u].hasClass("mrel") || a[u].hasClass("allowbreak")) {
    for (var c = false; u < a.length - 1 && a[u + 1].hasClass("mspace") && !a[u + 1].hasClass("newline"); ) u++, o.push(a[u]), a[u].hasClass("nobreak") && (c = true);
    c || (i.push(Pe(o, e)), o = []);
  } else a[u].hasClass("newline") && (o.pop(), o.length > 0 && (i.push(Pe(o, e)), o = []), i.push(a[u]));
  o.length > 0 && i.push(Pe(o, e));
  var d;
  t ? (d = Pe(i0(t, e, true), e), d.classes = ["tag"], i.push(d)) : n && i.push(n);
  var f = k(["katex-html"], i);
  if (f.setAttribute("aria-hidden", "true"), d) {
    var g = d.children[0];
    g.style.height = T(f.height + f.depth), f.depth && (g.style.verticalAlign = T(-f.depth));
  }
  return f;
}
function Va(r) {
  return new fe(r);
}
class A {
  constructor(e, t, a) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = a || [];
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = Y0(this.classes));
    for (var a = 0; a < this.children.length; a++) if (this.children[a] instanceof r0 && this.children[a + 1] instanceof r0) {
      for (var n = this.children[a].toText() + this.children[++a].toText(); this.children[a + 1] instanceof r0; ) n += this.children[++a].toText();
      e.appendChild(new r0(n).toNode());
    } else e.appendChild(this.children[a].toNode());
    return e;
  }
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += l0(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + l0(Y0(this.classes)) + '"'), e += ">";
    for (var a = 0; a < this.children.length; a++) e += this.children[a].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class r0 {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  toNode() {
    return document.createTextNode(this.text);
  }
  toMarkup() {
    return l0(this.toText());
  }
  toText() {
    return this.text;
  }
}
class Xa {
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = "\u200A" : e >= 0.1666 && e <= 0.1667 ? this.character = "\u2009" : e >= 0.2222 && e <= 0.2223 ? this.character = "\u2005" : e >= 0.2777 && e <= 0.2778 ? this.character = "\u2005\u200A" : e >= -0.05556 && e <= -0.05555 ? this.character = "\u200A\u2063" : e >= -0.1667 && e <= -0.1666 ? this.character = "\u2009\u2063" : e >= -0.2223 && e <= -0.2222 ? this.character = "\u205F\u2063" : e >= -0.2778 && e <= -0.2777 ? this.character = "\u2005\u2063" : this.character = null;
  }
  toNode() {
    if (this.character) return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", T(this.width)), e;
  }
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + T(this.width) + '"/>';
  }
  toText() {
    return this.character ? this.character : " ";
  }
}
var pi = /* @__PURE__ */ new Set(["\\imath", "\\jmath"]), fi = /* @__PURE__ */ new Set(["mrow", "mtable"]), y0 = function(e, t, a) {
  return Z[t][e] && Z[t][e].replace && e.charCodeAt(0) !== 55349 && !(Fa.hasOwnProperty(e) && a && (a.fontFamily && a.fontFamily.slice(4, 6) === "tt" || a.font && a.font.slice(4, 6) === "tt")) && (e = Z[t][e].replace), new r0(e);
}, dr = function(e) {
  return e.length === 1 ? e[0] : new A("mrow", e);
}, vi = { mathit: "italic", boldsymbol: (r) => r.type === "textord" ? "bold" : "bold-italic", mathbf: "bold", mathbb: "double-struck", mathsfit: "sans-serif-italic", mathfrak: "fraktur", mathscr: "script", mathcal: "script", mathsf: "sans-serif", mathtt: "monospace" }, pr = (r, e) => {
  if (r.mode === "text") {
    if (e.fontFamily === "texttt") return "monospace";
    if (e.fontFamily === "textsf") return e.fontShape === "textit" && e.fontWeight === "textbf" ? "sans-serif-bold-italic" : e.fontShape === "textit" ? "sans-serif-italic" : e.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
    if (e.fontShape === "textit" && e.fontWeight === "textbf") return "bold-italic";
    if (e.fontShape === "textit") return "italic";
    if (e.fontWeight === "textbf") return "bold";
  }
  var t = e.font;
  if (!t || t === "mathnormal") return null;
  var a = r.mode, n = vi[t];
  if (n) return typeof n == "function" ? n(r) : n;
  var i = r.text;
  if (pi.has(i)) return null;
  if (Z[a][i]) {
    var o = Z[a][i].replace;
    o && (i = o);
  }
  var u = Gt[t].fontName;
  return hr(i, u, a) ? Gt[t].variant : null;
};
function xt(r) {
  if (!r) return false;
  if (r.type === "mi" && r.children.length === 1) {
    var e = r.children[0];
    return e instanceof r0 && e.text === ".";
  } else if (r.type === "mo" && r.children.length === 1 && r.getAttribute("separator") === "true" && r.getAttribute("lspace") === "0em" && r.getAttribute("rspace") === "0em") {
    var t = r.children[0];
    return t instanceof r0 && t.text === ",";
  } else return false;
}
var b0 = function(e, t, a) {
  if (e.length === 1) {
    var n = j(e[0], t);
    return a && n instanceof A && n.type === "mo" && (n.setAttribute("lspace", "0em"), n.setAttribute("rspace", "0em")), [n];
  }
  for (var i = [], o, u = 0; u < e.length; u++) {
    var c = j(e[u], t);
    if (c instanceof A && o instanceof A) {
      if (c.type === "mtext" && o.type === "mtext" && c.getAttribute("mathvariant") === o.getAttribute("mathvariant")) {
        o.children.push(...c.children);
        continue;
      } else if (c.type === "mn" && o.type === "mn") {
        o.children.push(...c.children);
        continue;
      } else if (xt(c) && o.type === "mn") {
        o.children.push(...c.children);
        continue;
      } else if (c.type === "mn" && xt(o)) c.children = [...o.children, ...c.children], i.pop();
      else if ((c.type === "msup" || c.type === "msub") && c.children.length >= 1 && (o.type === "mn" || xt(o))) {
        var d = c.children[0];
        d instanceof A && d.type === "mn" && (d.children = [...o.children, ...d.children], i.pop());
      } else if (o.type === "mi" && o.children.length === 1) {
        var f = o.children[0];
        if (f instanceof r0 && f.text === "\u0338" && (c.type === "mo" || c.type === "mi" || c.type === "mn")) {
          var g = c.children[0];
          g instanceof r0 && g.text.length > 0 && (g.text = g.text.slice(0, 1) + "\u0338" + g.text.slice(1), i.pop());
        }
      }
    }
    i.push(c), o = c;
  }
  return i;
}, Z0 = function(e, t, a) {
  return dr(b0(e, t, a));
}, j = function(e, t) {
  if (!e) return new A("mrow");
  if (Te[e.type]) return Te[e.type](e, t);
  throw new z("Got group of unknown type: '" + e.type + "'");
};
function Qr(r, e, t, a, n) {
  var i = b0(r, t), o;
  i.length === 1 && i[0] instanceof A && fi.has(i[0].type) ? o = i[0] : o = new A("mrow", i);
  var u = new A("annotation", [new r0(e)]);
  u.setAttribute("encoding", "application/x-tex");
  var c = new A("semantics", [o, u]), d = new A("math", [c]);
  d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), a && d.setAttribute("display", "block");
  var f = n ? "katex" : "katex-mathml";
  return k([f], [d]);
}
var gi = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]], Jr = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488], _r = function(e, t) {
  return t.size < 2 ? e : gi[e - 1][t.size - 1];
};
class E0 {
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || E0.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = Jr[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  extend(e) {
    var t = { style: this.style, size: this.size, textSize: this.textSize, color: this.color, phantom: this.phantom, font: this.font, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontShape: this.fontShape, maxSize: this.maxSize, minRuleThickness: this.minRuleThickness };
    return Object.assign(t, e), new E0(t);
  }
  havingStyle(e) {
    return this.style === e ? this : this.extend({ style: e, size: _r(this.textSize, e) });
  }
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({ style: this.style.text(), size: e, textSize: e, sizeMultiplier: Jr[e - 1] });
  }
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = _r(E0.BASESIZE, e);
    return this.size === t && this.textSize === E0.BASESIZE && this.style === e ? this : this.extend({ style: e, size: t });
  }
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({ style: this.style.text(), size: e });
  }
  withColor(e) {
    return this.extend({ color: e });
  }
  withPhantom() {
    return this.extend({ phantom: true });
  }
  withFont(e) {
    return this.extend({ font: e });
  }
  withTextFontFamily(e) {
    return this.extend({ fontFamily: e, font: "" });
  }
  withTextFontWeight(e) {
    return this.extend({ fontWeight: e, font: "" });
  }
  withTextFontShape(e) {
    return this.extend({ fontShape: e, font: "" });
  }
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  baseSizingClasses() {
    return this.size !== E0.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + E0.BASESIZE] : [];
  }
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = ei(this.size)), this._fontMetrics;
  }
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
E0.BASESIZE = 6;
var Ya = function(e) {
  return new E0({ style: e.displayMode ? L.DISPLAY : L.TEXT, maxSize: e.maxSize, minRuleThickness: e.minRuleThickness });
}, Wa = function(e, t) {
  if (t.displayMode) {
    var a = ["katex-display"];
    t.leqno && a.push("leqno"), t.fleqn && a.push("fleqn"), e = k(a, [e]);
  }
  return e;
}, bi = function(e, t, a) {
  var n = Ya(a), i;
  if (a.output === "mathml") return Qr(e, t, n, a.displayMode, true);
  if (a.output === "html") {
    var o = Yt(e, n);
    i = k(["katex"], [o]);
  } else {
    var u = Qr(e, t, n, a.displayMode, false), c = Yt(e, n);
    i = k(["katex"], [u, c]);
  }
  return Wa(i, a);
}, xi = function(e, t, a) {
  var n = Ya(a), i = Yt(e, n), o = k(["katex"], [i]);
  return Wa(o, a);
}, yi = { widehat: "^", widecheck: "\u02C7", widetilde: "~", utilde: "~", overleftarrow: "\u2190", underleftarrow: "\u2190", xleftarrow: "\u2190", overrightarrow: "\u2192", underrightarrow: "\u2192", xrightarrow: "\u2192", underbrace: "\u23DF", overbrace: "\u23DE", underbracket: "\u23B5", overbracket: "\u23B4", overgroup: "\u23E0", undergroup: "\u23E1", overleftrightarrow: "\u2194", underleftrightarrow: "\u2194", xleftrightarrow: "\u2194", Overrightarrow: "\u21D2", xRightarrow: "\u21D2", overleftharpoon: "\u21BC", xleftharpoonup: "\u21BC", overrightharpoon: "\u21C0", xrightharpoonup: "\u21C0", xLeftarrow: "\u21D0", xLeftrightarrow: "\u21D4", xhookleftarrow: "\u21A9", xhookrightarrow: "\u21AA", xmapsto: "\u21A6", xrightharpoondown: "\u21C1", xleftharpoondown: "\u21BD", xrightleftharpoons: "\u21CC", xleftrightharpoons: "\u21CB", xtwoheadleftarrow: "\u219E", xtwoheadrightarrow: "\u21A0", xlongequal: "=", xtofrom: "\u21C4", xrightleftarrows: "\u21C4", xrightequilibrium: "\u21CC", xleftequilibrium: "\u21CB", "\\cdrightarrow": "\u2192", "\\cdleftarrow": "\u2190", "\\cdlongequal": "=" }, nt = function(e) {
  var t = new A("mo", [new r0(yi[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, wi = { overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"], "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"], xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"], "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"], Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"], xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"], xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"], overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"], overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"], xlongequal: [["longequal"], 0.888, 334, "xMinYMin"], "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"], xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"], xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"], overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548], underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548], underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522], xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560], xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716], xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716], xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522], xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522], overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], overbracket: [["leftbracketover", "rightbracketover"], 1.6, 440], underbracket: [["leftbracketunder", "rightbracketunder"], 1.6, 410], overgroup: [["leftgroup", "rightgroup"], 0.888, 342], undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342], xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522], xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528], xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901], xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716], xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716] }, ki = /* @__PURE__ */ new Set(["widehat", "widecheck", "widetilde", "utilde"]), it = function(e, t) {
  function a() {
    var u = 4e5, c = e.label.slice(1);
    if (ki.has(c) && "base" in e) {
      var d = e.base.type === "ordgroup" ? e.base.body.length : 1, f, g, x;
      if (d > 5) c === "widehat" || c === "widecheck" ? (f = 420, u = 2364, x = 0.42, g = c + "4") : (f = 312, u = 2340, x = 0.34, g = "tilde4");
      else {
        var y = [1, 1, 2, 2, 3, 3][d];
        c === "widehat" || c === "widecheck" ? (u = [0, 1062, 2364, 2364, 2364][y], f = [0, 239, 300, 360, 420][y], x = [0, 0.24, 0.3, 0.3, 0.36, 0.42][y], g = c + y) : (u = [0, 600, 1033, 2339, 2340][y], f = [0, 260, 286, 306, 312][y], x = [0, 0.26, 0.286, 0.3, 0.306, 0.34][y], g = "tilde" + y);
      }
      var S = new W0(g), M = new N0([S], { width: "100%", height: T(x), viewBox: "0 0 " + u + " " + f, preserveAspectRatio: "none" });
      return { span: j0([], [M], t), minWidth: 0, height: x };
    } else {
      var C = [], D = wi[c];
      if (!D) throw new Error('No SVG data for "' + c + '".');
      var [q, N, F] = D, O = F / 1e3, H = q.length, G, Y;
      if (H === 1) {
        if (D.length !== 4) throw new Error('Expected 4-tuple for single-path SVG data "' + c + '".');
        G = ["hide-tail"], Y = [D[3]];
      } else if (H === 2) G = ["halfarrow-left", "halfarrow-right"], Y = ["xMinYMin", "xMaxYMin"];
      else if (H === 3) G = ["brace-left", "brace-center", "brace-right"], Y = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else throw new Error(`Correct katexImagesData or update code here to support
                    ` + H + " children.");
      for (var U = 0; U < H; U++) {
        var m0 = new W0(q[U]), p0 = new N0([m0], { width: "400em", height: T(O), viewBox: "0 0 " + u + " " + F, preserveAspectRatio: Y[U] + " slice" }), e0 = j0([G[U]], [p0], t);
        if (H === 1) return { span: e0, minWidth: N, height: O };
        e0.style.height = T(O), C.push(e0);
      }
      return { span: k(["stretchy"], C, t), minWidth: N, height: O };
    }
  }
  var { span: n, minWidth: i, height: o } = a();
  return n.height = o, n.style.height = T(o), i > 0 && (n.style.minWidth = T(i)), n;
}, Si = function(e, t, a, n, i) {
  var o, u = e.height + e.depth + a + n;
  if (/fbox|color|angl/.test(t)) {
    if (o = k(["stretchy", t], [], i), t === "fbox") {
      var c = i.color && i.getColor();
      c && (o.style.borderColor = c);
    }
  } else {
    var d = [];
    /^[bx]cancel$/.test(t) && d.push(new Lt({ x1: "0", y1: "0", x2: "100%", y2: "100%", "stroke-width": "0.046em" })), /^x?cancel$/.test(t) && d.push(new Lt({ x1: "0", y1: "100%", x2: "100%", y2: "0", "stroke-width": "0.046em" }));
    var f = new N0(d, { width: "100%", height: T(u) });
    o = j0([], [f], i);
  }
  return o.height = u, o.style.height = T(u), o;
}, zi = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 }, Ai = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 };
function Ti(r) {
  return r in zi;
}
function $(r, e) {
  if (!r || r.type !== e) throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function st(r) {
  var e = lt(r);
  if (!e) throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function lt(r) {
  return r && (r.type === "atom" || Ai.hasOwnProperty(r.type)) ? r : null;
}
var ja = (r) => {
  if (r instanceof v0) return r;
  if (J1(r) && r.children.length === 1) return ja(r.children[0]);
}, Za = (r, e) => {
  var t, a, n;
  r && r.type === "supsub" ? (a = $(r.base, "accent"), t = a.base, r.base = t, n = Q1(X(r, e)), r.base = a) : (a = $(r, "accent"), t = a.base);
  var i = X(t, e.havingCrampedStyle()), o = a.isShifty && L0(t), u = 0;
  if (o) {
    var c, d;
    u = (c = (d = ja(i)) == null ? void 0 : d.skew) != null ? c : 0;
  }
  var f = a.label === "\\c", g = f ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), x;
  if (a.isStretchy) x = it(a, e), x = V({ positionType: "firstBaseline", children: [{ type: "elem", elem: i }, { type: "elem", elem: x, wrapperClasses: ["svg-align"], wrapperStyle: u > 0 ? { width: "calc(100% - " + T(2 * u) + ")", marginLeft: T(2 * u) } : void 0 }] });
  else {
    var y, S;
    a.label === "\\vec" ? (y = Pa("vec", e), S = $a.vec[1]) : (y = at({ type: "textord", mode: a.mode, text: a.label }, e), y = K1(y), y.italic = 0, S = y.width, f && (g += y.depth)), x = k(["accent-body"], [y]);
    var M = a.label === "\\textcircled";
    M && (x.classes.push("accent-full"), g = i.height);
    var C = u;
    M || (C -= S / 2), x.style.left = T(C), a.label === "\\textcircled" && (x.style.top = ".2em"), x = V({ positionType: "firstBaseline", children: [{ type: "elem", elem: i }, { type: "kern", size: -g }, { type: "elem", elem: x }] });
  }
  var D = k(["mord", "accent"], [x], e);
  return n ? (n.children[0] = D, n.height = Math.max(D.height, n.height), n.classes[0] = "mord", n) : D;
}, Mi = (r, e) => {
  var t = r.isStretchy ? nt(r.label) : new A("mo", [y0(r.label, r.mode)]), a = new A("mover", [j(r.base, e), t]);
  return a.setAttribute("accent", "true"), a;
}, Ci = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
B({ type: "accent", names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"], numArgs: 1, handler: (r, e) => {
  var t = Je(e[0]), a = !Ci.test(r.funcName), n = !a || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
  return { type: "accent", mode: r.parser.mode, label: r.funcName, isStretchy: a, isShifty: n, base: t };
}, htmlBuilder: Za, mathmlBuilder: Mi });
B({ type: "accent", names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"], numArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["primitive"], handler: (r, e) => {
  var t = e[0], a = r.parser.mode;
  return a === "math" && (r.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + r.funcName + " works only in text mode"), a = "text"), { type: "accent", mode: a, label: r.funcName, isStretchy: false, isShifty: true, base: t };
} });
B({ type: "accentUnder", names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"], numArgs: 1, handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = e[0];
  return { type: "accentUnder", mode: t.mode, label: a, base: n };
}, htmlBuilder: (r, e) => {
  var t = X(r.base, e), a = it(r, e), n = r.label === "\\utilde" ? 0.12 : 0, i = V({ positionType: "top", positionData: t.height, children: [{ type: "elem", elem: a, wrapperClasses: ["svg-align"] }, { type: "kern", size: n }, { type: "elem", elem: t }] });
  return k(["mord", "accentunder"], [i], e);
}, mathmlBuilder: (r, e) => {
  var t = nt(r.label), a = new A("munder", [j(r.base, e), t]);
  return a.setAttribute("accentunder", "true"), a;
} });
var Ge = (r) => {
  var e = new A("mpadded", r ? [r] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
B({ type: "xArrow", names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium", "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"], numArgs: 1, numOptionalArgs: 1, handler(r, e, t) {
  var { parser: a, funcName: n } = r;
  return { type: "xArrow", mode: a.mode, label: n, body: e[0], below: t[0] };
}, htmlBuilder(r, e) {
  var t = e.style, a = e.havingStyle(t.sup()), n = de(X(r.body, a, e), e), i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
  n.classes.push(i + "-arrow-pad");
  var o;
  r.below && (a = e.havingStyle(t.sub()), o = de(X(r.below, a, e), e), o.classes.push(i + "-arrow-pad"));
  var u = it(r, e), c = -e.fontMetrics().axisHeight + 0.5 * u.height, d = -e.fontMetrics().axisHeight - 0.5 * u.height - 0.111;
  (n.depth > 0.25 || r.label === "\\xleftequilibrium") && (d -= n.depth);
  var f;
  if (o) {
    var g = -e.fontMetrics().axisHeight + o.height + 0.5 * u.height + 0.111;
    f = V({ positionType: "individualShift", children: [{ type: "elem", elem: n, shift: d }, { type: "elem", elem: u, shift: c, wrapperClasses: ["svg-align"] }, { type: "elem", elem: o, shift: g }] });
  } else f = V({ positionType: "individualShift", children: [{ type: "elem", elem: n, shift: d }, { type: "elem", elem: u, shift: c, wrapperClasses: ["svg-align"] }] });
  return k(["mrel", "x-arrow"], [f], e);
}, mathmlBuilder(r, e) {
  var t = nt(r.label);
  t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
  var a;
  if (r.body) {
    var n = Ge(j(r.body, e));
    if (r.below) {
      var i = Ge(j(r.below, e));
      a = new A("munderover", [t, i, n]);
    } else a = new A("mover", [t, n]);
  } else if (r.below) {
    var o = Ge(j(r.below, e));
    a = new A("munder", [t, o]);
  } else a = Ge(), a = new A("mover", [t, a]);
  return a;
} });
function Bi(r, e) {
  var t = i0(r.body, e, true);
  return k([r.mclass], t, e);
}
function Di(r, e) {
  var t, a = b0(r.body, e);
  return r.mclass === "minner" ? t = new A("mpadded", a) : r.mclass === "mord" ? r.isCharacterBox ? (t = a[0], t.type = "mi") : t = new A("mi", a) : (r.isCharacterBox ? (t = a[0], t.type = "mo") : t = new A("mo", a), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : (r.mclass === "mopen" || r.mclass === "mclose") && (t.attributes.lspace = "0em", t.attributes.rspace = "0em")), t;
}
B({ type: "mclass", names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], numArgs: 1, primitive: true, handler(r, e) {
  var { parser: t, funcName: a } = r, n = e[0];
  return { type: "mclass", mode: t.mode, mclass: "m" + a.slice(5), body: t0(n), isCharacterBox: L0(n) };
}, htmlBuilder: Bi, mathmlBuilder: Di });
var ot = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
B({ type: "mclass", names: ["\\@binrel"], numArgs: 2, handler(r, e) {
  var { parser: t } = r;
  return { type: "mclass", mode: t.mode, mclass: ot(e[0]), body: t0(e[1]), isCharacterBox: L0(e[1]) };
} });
B({ type: "mclass", names: ["\\stackrel", "\\overset", "\\underset"], numArgs: 2, handler(r, e) {
  var { parser: t, funcName: a } = r, n = e[1], i = e[0], o;
  a !== "\\stackrel" ? o = ot(n) : o = "mrel";
  var u = { type: "op", mode: n.mode, limits: true, alwaysHandleSupSub: true, parentIsSupSub: false, symbol: false, suppressBaseShift: a !== "\\stackrel", body: t0(n) }, c = a === "\\underset" ? { type: "supsub", mode: i.mode, base: u, sub: i } : { type: "supsub", mode: i.mode, base: u, sup: i };
  return { type: "mclass", mode: t.mode, mclass: o, body: [c], isCharacterBox: L0(c) };
} });
B({ type: "pmb", names: ["\\pmb"], numArgs: 1, allowedInText: true, handler(r, e) {
  var { parser: t } = r;
  return { type: "pmb", mode: t.mode, mclass: ot(e[0]), body: t0(e[0]) };
}, htmlBuilder(r, e) {
  var t = i0(r.body, e, true), a = k([r.mclass], t, e);
  return a.style.textShadow = "0.02em 0.01em 0.04px", a;
}, mathmlBuilder(r, e) {
  var t = b0(r.body, e), a = new A("mstyle", t);
  return a.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), a;
} });
var Ri = { ">": "\\\\cdrightarrow", "<": "\\\\cdleftarrow", "=": "\\\\cdlongequal", A: "\\uparrow", V: "\\downarrow", "|": "\\Vert", ".": "no arrow" }, ea = () => ({ type: "styling", body: [], mode: "math", style: "display", resetFont: true }), ta = (r) => r.type === "textord" && r.text === "@", qi = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function Ei(r, e, t) {
  var a = Ri[r];
  switch (a) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(a, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var n = t.callFunction("\\\\cdleft", [e[0]], []), i = { type: "atom", text: a, mode: "math", family: "rel" }, o = t.callFunction("\\Big", [i], []), u = t.callFunction("\\\\cdright", [e[1]], []), c = { type: "ordgroup", mode: "math", body: [n, o, u] };
      return t.callFunction("\\\\cdparent", [c], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var d = { type: "textord", text: "\\Vert", mode: "math" };
      return t.callFunction("\\Big", [d], []);
    }
    default:
      return { type: "textord", text: " ", mode: "math" };
  }
}
function Ii(r) {
  var e = [];
  for (r.gullet.beginGroup(), r.gullet.macros.set("\\cr", "\\\\\\relax"), r.gullet.beginGroup(); ; ) {
    e.push(r.parseExpression(false, "\\\\")), r.gullet.endGroup(), r.gullet.beginGroup();
    var t = r.fetch().text;
    if (t === "&" || t === "\\\\") r.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else throw new z("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var a = [], n = [a], i = 0; i < e.length; i++) {
    for (var o = e[i], u = ea(), c = 0; c < o.length; c++) if (!ta(o[c])) u.body.push(o[c]);
    else {
      a.push(u), c += 1;
      var d = st(o[c]).text, f = new Array(2);
      if (f[0] = { type: "ordgroup", mode: "math", body: [] }, f[1] = { type: "ordgroup", mode: "math", body: [] }, !"=|.".includes(d)) if ("<>AV".includes(d)) for (var g = 0; g < 2; g++) {
        for (var x = true, y = c + 1; y < o.length; y++) {
          if (qi(o[y], d)) {
            x = false, c = y;
            break;
          }
          if (ta(o[y])) throw new z("Missing a " + d + " character to complete a CD arrow.", o[y]);
          f[g].body.push(o[y]);
        }
        if (x) throw new z("Missing a " + d + " character to complete a CD arrow.", o[c]);
      }
      else throw new z('Expected one of "<>AV=|." after @', o[c]);
      var S = Ei(d, f, r), M = { type: "styling", body: [S], mode: "math", style: "display", resetFont: true };
      a.push(M), u = ea();
    }
    i % 2 === 0 ? a.push(u) : a.shift(), a = [], n.push(a);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var C = new Array(n[0].length).fill({ type: "align", align: "c", pregap: 0.25, postgap: 0.25 });
  return { type: "array", mode: "math", body: n, arraystretch: 1, addJot: true, rowGaps: [null], cols: C, colSeparationType: "CD", hLinesBeforeRow: new Array(n.length + 1).fill([]) };
}
B({ type: "cdlabel", names: ["\\\\cdleft", "\\\\cdright"], numArgs: 1, handler(r, e) {
  var { parser: t, funcName: a } = r;
  return { type: "cdlabel", mode: t.mode, side: a.slice(4), label: e[0] };
}, htmlBuilder(r, e) {
  var t = e.havingStyle(e.style.sup()), a = de(X(r.label, t, e), e);
  return a.classes.push("cd-label-" + r.side), a.style.bottom = T(0.8 - a.depth), a.height = 0, a.depth = 0, a;
}, mathmlBuilder(r, e) {
  var t = new A("mrow", [j(r.label, e)]);
  return t = new A("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new A("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
} });
B({ type: "cdlabelparent", names: ["\\\\cdparent"], numArgs: 1, handler(r, e) {
  var { parser: t } = r;
  return { type: "cdlabelparent", mode: t.mode, fragment: e[0] };
}, htmlBuilder(r, e) {
  var t = de(X(r.fragment, e), e);
  return t.classes.push("cd-vert-arrow"), t;
}, mathmlBuilder(r, e) {
  return new A("mrow", [j(r.fragment, e)]);
} });
B({ type: "textord", names: ["\\@char"], numArgs: 1, allowedInText: true, handler(r, e) {
  for (var { parser: t } = r, a = $(e[0], "ordgroup"), n = a.body, i = "", o = 0; o < n.length; o++) {
    var u = $(n[o], "textord");
    i += u.text;
  }
  var c = parseInt(i), d;
  if (isNaN(c)) throw new z("\\@char has non-numeric argument " + i);
  if (c < 0 || c >= 1114111) throw new z("\\@char with invalid code point " + i);
  return c <= 65535 ? d = String.fromCharCode(c) : (c -= 65536, d = String.fromCharCode((c >> 10) + 55296, (c & 1023) + 56320)), { type: "textord", mode: t.mode, text: d };
} });
var Ni = (r, e) => {
  var t = i0(r.body, e.withColor(r.color), false);
  return H0(t);
}, Li = (r, e) => {
  var t = b0(r.body, e.withColor(r.color)), a = new A("mstyle", t);
  return a.setAttribute("mathcolor", r.color), a;
};
B({ type: "color", names: ["\\textcolor"], numArgs: 2, allowedInText: true, argTypes: ["color", "original"], handler(r, e) {
  var { parser: t } = r, a = $(e[0], "color-token").color, n = e[1];
  return { type: "color", mode: t.mode, color: a, body: t0(n) };
}, htmlBuilder: Ni, mathmlBuilder: Li });
B({ type: "color", names: ["\\color"], numArgs: 1, allowedInText: true, argTypes: ["color"], handler(r, e) {
  var { parser: t, breakOnTokenText: a } = r, n = $(e[0], "color-token").color;
  t.gullet.macros.set("\\current@color", n);
  var i = t.parseExpression(true, a);
  return { type: "color", mode: t.mode, color: n, body: i };
} });
B({ type: "cr", names: ["\\\\"], numArgs: 0, numOptionalArgs: 0, allowedInText: true, handler(r, e, t) {
  var { parser: a } = r, n = a.gullet.future().text === "[" ? a.parseSizeGroup(true) : null, i = !a.settings.displayMode || !a.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
  return { type: "cr", mode: a.mode, newLine: i, size: n && $(n, "size").value };
}, htmlBuilder(r, e) {
  var t = k(["mspace"], [], e);
  return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = T(J(r.size, e)))), t;
}, mathmlBuilder(r, e) {
  var t = new A("mspace");
  return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", T(J(r.size, e)))), t;
} });
var Wt = { "\\global": "\\global", "\\long": "\\\\globallong", "\\\\globallong": "\\\\globallong", "\\def": "\\gdef", "\\gdef": "\\gdef", "\\edef": "\\xdef", "\\xdef": "\\xdef", "\\let": "\\\\globallet", "\\futurelet": "\\\\globalfuture" }, Ka = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e)) throw new z("Expected a control sequence", r);
  return e;
}, Fi = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, Qa = (r, e, t, a) => {
  var n = r.gullet.macros.get(t.text);
  n == null && (t.noexpand = true, n = { tokens: [t], numArgs: 0, unexpandable: !r.gullet.isExpandable(t.text) }), r.gullet.macros.set(e, n, a);
};
B({ type: "internal", names: ["\\global", "\\long", "\\\\globallong"], numArgs: 0, allowedInText: true, handler(r) {
  var { parser: e, funcName: t } = r;
  e.consumeSpaces();
  var a = e.fetch();
  if (Wt[a.text]) return (t === "\\global" || t === "\\\\globallong") && (a.text = Wt[a.text]), $(e.parseFunction(), "internal");
  throw new z("Invalid token after macro prefix", a);
} });
B({ type: "internal", names: ["\\def", "\\gdef", "\\edef", "\\xdef"], numArgs: 0, allowedInText: true, primitive: true, handler(r) {
  var { parser: e, funcName: t } = r, a = e.gullet.popToken(), n = a.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(n)) throw new z("Expected a control sequence", a);
  for (var i = 0, o, u = [[]]; e.gullet.future().text !== "{"; ) if (a = e.gullet.popToken(), a.text === "#") {
    if (e.gullet.future().text === "{") {
      o = e.gullet.future(), u[i].push("{");
      break;
    }
    if (a = e.gullet.popToken(), !/^[1-9]$/.test(a.text)) throw new z('Invalid argument number "' + a.text + '"');
    if (parseInt(a.text) !== i + 1) throw new z('Argument number "' + a.text + '" out of order');
    i++, u.push([]);
  } else {
    if (a.text === "EOF") throw new z("Expected a macro definition");
    u[i].push(a.text);
  }
  var { tokens: c } = e.gullet.consumeArg();
  return o && c.unshift(o), (t === "\\edef" || t === "\\xdef") && (c = e.gullet.expandTokens(c), c.reverse()), e.gullet.macros.set(n, { tokens: c, numArgs: i, delimiters: u }, t === Wt[t]), { type: "internal", mode: e.mode };
} });
B({ type: "internal", names: ["\\let", "\\\\globallet"], numArgs: 0, allowedInText: true, primitive: true, handler(r) {
  var { parser: e, funcName: t } = r, a = Ka(e.gullet.popToken());
  e.gullet.consumeSpaces();
  var n = Fi(e);
  return Qa(e, a, n, t === "\\\\globallet"), { type: "internal", mode: e.mode };
} });
B({ type: "internal", names: ["\\futurelet", "\\\\globalfuture"], numArgs: 0, allowedInText: true, primitive: true, handler(r) {
  var { parser: e, funcName: t } = r, a = Ka(e.gullet.popToken()), n = e.gullet.popToken(), i = e.gullet.popToken();
  return Qa(e, a, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(n), { type: "internal", mode: e.mode };
} });
var ke = function(e, t, a) {
  var n = Z.math[e] && Z.math[e].replace, i = hr(n || e, t, a);
  if (!i) throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, fr = function(e, t, a, n) {
  var i = a.havingBaseStyle(t), o = k(n.concat(i.sizingClasses(a)), [e], a), u = i.sizeMultiplier / a.sizeMultiplier;
  return o.height *= u, o.depth *= u, o.maxFontSize = i.sizeMultiplier, o;
}, Ja = function(e, t, a) {
  var n = t.havingBaseStyle(a), i = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = T(i), e.height -= i, e.depth += i;
}, Hi = function(e, t, a, n, i, o) {
  var u = u0(e, "Main-Regular", i, n), c = fr(u, t, n, o);
  return Ja(c, n, t), c;
}, Oi = function(e, t, a, n) {
  return u0(e, "Size" + t + "-Regular", a, n);
}, _a = function(e, t, a, n, i, o) {
  var u = Oi(e, t, i, n), c = fr(k(["delimsizing", "size" + t], [u], n), L.TEXT, n, o);
  return a && Ja(c, n, L.TEXT), c;
}, yt = function(e, t, a) {
  var n;
  t === "Size1-Regular" ? n = "delim-size1" : n = "delim-size4";
  var i = k(["delimsizinginner", n], [k([], [u0(e, t, a)])]);
  return { type: "elem", elem: i };
}, wt = function(e, t, a) {
  var n = C0["Size4-Regular"][e.charCodeAt(0)] ? C0["Size4-Regular"][e.charCodeAt(0)][4] : C0["Size1-Regular"][e.charCodeAt(0)][4], i = new W0("inner", U1(e, Math.round(1e3 * t))), o = new N0([i], { width: T(n), height: T(t), style: "width:" + T(n), viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * t), preserveAspectRatio: "xMinYMin" }), u = j0([], [o], a);
  return u.height = t, u.style.height = T(t), u.style.width = T(n), { type: "elem", elem: u };
}, jt = 8e-3, Ue = { type: "kern", size: -1 * jt }, $i = /* @__PURE__ */ new Set(["|", "\\lvert", "\\rvert", "\\vert"]), Pi = /* @__PURE__ */ new Set(["\\|", "\\lVert", "\\rVert", "\\Vert"]), en = function(e, t, a, n, i, o) {
  var u, c, d, f, g = "", x = 0;
  u = d = f = e, c = null;
  var y = "Size1-Regular";
  e === "\\uparrow" ? d = f = "\u23D0" : e === "\\Uparrow" ? d = f = "\u2016" : e === "\\downarrow" ? u = d = "\u23D0" : e === "\\Downarrow" ? u = d = "\u2016" : e === "\\updownarrow" ? (u = "\\uparrow", d = "\u23D0", f = "\\downarrow") : e === "\\Updownarrow" ? (u = "\\Uparrow", d = "\u2016", f = "\\Downarrow") : $i.has(e) ? (d = "\u2223", g = "vert", x = 333) : Pi.has(e) ? (d = "\u2225", g = "doublevert", x = 556) : e === "[" || e === "\\lbrack" ? (u = "\u23A1", d = "\u23A2", f = "\u23A3", y = "Size4-Regular", g = "lbrack", x = 667) : e === "]" || e === "\\rbrack" ? (u = "\u23A4", d = "\u23A5", f = "\u23A6", y = "Size4-Regular", g = "rbrack", x = 667) : e === "\\lfloor" || e === "\u230A" ? (d = u = "\u23A2", f = "\u23A3", y = "Size4-Regular", g = "lfloor", x = 667) : e === "\\lceil" || e === "\u2308" ? (u = "\u23A1", d = f = "\u23A2", y = "Size4-Regular", g = "lceil", x = 667) : e === "\\rfloor" || e === "\u230B" ? (d = u = "\u23A5", f = "\u23A6", y = "Size4-Regular", g = "rfloor", x = 667) : e === "\\rceil" || e === "\u2309" ? (u = "\u23A4", d = f = "\u23A5", y = "Size4-Regular", g = "rceil", x = 667) : e === "(" || e === "\\lparen" ? (u = "\u239B", d = "\u239C", f = "\u239D", y = "Size4-Regular", g = "lparen", x = 875) : e === ")" || e === "\\rparen" ? (u = "\u239E", d = "\u239F", f = "\u23A0", y = "Size4-Regular", g = "rparen", x = 875) : e === "\\{" || e === "\\lbrace" ? (u = "\u23A7", c = "\u23A8", f = "\u23A9", d = "\u23AA", y = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (u = "\u23AB", c = "\u23AC", f = "\u23AD", d = "\u23AA", y = "Size4-Regular") : e === "\\lgroup" || e === "\u27EE" ? (u = "\u23A7", f = "\u23A9", d = "\u23AA", y = "Size4-Regular") : e === "\\rgroup" || e === "\u27EF" ? (u = "\u23AB", f = "\u23AD", d = "\u23AA", y = "Size4-Regular") : e === "\\lmoustache" || e === "\u23B0" ? (u = "\u23A7", f = "\u23AD", d = "\u23AA", y = "Size4-Regular") : (e === "\\rmoustache" || e === "\u23B1") && (u = "\u23AB", f = "\u23A9", d = "\u23AA", y = "Size4-Regular");
  var S = ke(u, y, i), M = S.height + S.depth, C = ke(d, y, i), D = C.height + C.depth, q = ke(f, y, i), N = q.height + q.depth, F = 0, O = 1;
  if (c !== null) {
    var H = ke(c, y, i);
    F = H.height + H.depth, O = 2;
  }
  var G = M + N + F, Y = Math.max(0, Math.ceil((t - G) / (O * D))), U = G + Y * O * D, m0 = n.fontMetrics().axisHeight;
  a && (m0 *= n.sizeMultiplier);
  var p0 = U / 2 - m0, e0 = [];
  if (g.length > 0) {
    var be = U - M - N, A0 = Math.round(U * 1e3), w0 = V1(g, Math.round(be * 1e3)), O0 = new W0(g, w0), ne = T(x / 1e3), ie = T(A0 / 1e3), mt = new N0([O0], { width: ne, height: ie, viewBox: "0 0 " + x + " " + A0 }), $0 = j0([], [mt], n);
    $0.height = A0 / 1e3, $0.style.width = ne, $0.style.height = ie, e0.push({ type: "elem", elem: $0 });
  } else {
    if (e0.push(yt(f, y, i)), e0.push(Ue), c === null) {
      var P0 = U - M - N + 2 * jt;
      e0.push(wt(d, P0, n));
    } else {
      var xe = (U - M - N - F) / 2 + 2 * jt;
      e0.push(wt(d, xe, n)), e0.push(Ue), e0.push(yt(c, y, i)), e0.push(Ue), e0.push(wt(d, xe, n));
    }
    e0.push(Ue), e0.push(yt(u, y, i));
  }
  var k0 = n.havingBaseStyle(L.TEXT), De = V({ positionType: "bottom", positionData: p0, children: e0 });
  return fr(k(["delimsizing", "mult"], [De], k0), L.TEXT, n, o);
}, kt = 80, St = 0.08, zt = function(e, t, a, n, i) {
  var o = G1(e, n, a), u = new W0(e, o), c = new N0([u], { width: "400em", height: T(t), viewBox: "0 0 400000 " + a, preserveAspectRatio: "xMinYMin slice" });
  return j0(["hide-tail"], [c], i);
}, Gi = function(e, t) {
  var a = t.havingBaseSizing(), n = sn("\\surd", e * a.sizeMultiplier, nn, a), i = a.sizeMultiplier, o = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), u, c, d, f, g;
  return n.type === "small" ? (f = 1e3 + 1e3 * o + kt, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), c = (1 + o + St) / i, d = (1 + o) / i, u = zt("sqrtMain", c, f, o, t), u.style.minWidth = "0.853em", g = 0.833 / i) : n.type === "large" ? (f = (1e3 + kt) * Se[n.size], d = (Se[n.size] + o) / i, c = (Se[n.size] + o + St) / i, u = zt("sqrtSize" + n.size, c, f, o, t), u.style.minWidth = "1.02em", g = 1 / i) : (c = e + o + St, d = e + o, f = Math.floor(1e3 * e + o) + kt, u = zt("sqrtTall", c, f, o, t), u.style.minWidth = "0.742em", g = 1.056), u.height = d, u.style.height = T(c), { span: u, advanceWidth: g, ruleWidth: (t.fontMetrics().sqrtRuleThickness + o) * i };
}, tn = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"]), Ui = /* @__PURE__ */ new Set(["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1"]), rn = /* @__PURE__ */ new Set(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]), Se = [0, 1.2, 1.8, 2.4, 3], an = function(e, t, a, n, i) {
  if (e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle"), tn.has(e) || rn.has(e)) return _a(e, t, false, a, n, i);
  if (Ui.has(e)) return en(e, Se[t], false, a, n, i);
  throw new z("Illegal delimiter: '" + e + "'");
}, Vi = [{ type: "small", style: L.SCRIPTSCRIPT }, { type: "small", style: L.SCRIPT }, { type: "small", style: L.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }], Xi = [{ type: "small", style: L.SCRIPTSCRIPT }, { type: "small", style: L.SCRIPT }, { type: "small", style: L.TEXT }, { type: "stack" }], nn = [{ type: "small", style: L.SCRIPTSCRIPT }, { type: "small", style: L.SCRIPT }, { type: "small", style: L.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }, { type: "stack" }], Yi = function(e) {
  if (e.type === "small") return "Main-Regular";
  if (e.type === "large") return "Size" + e.size + "-Regular";
  if (e.type === "stack") return "Size4-Regular";
  var t = e.type;
  throw new Error("Add support for delim type '" + t + "' here.");
}, sn = function(e, t, a, n) {
  for (var i = Math.min(2, 3 - n.style.size), o = i; o < a.length; o++) {
    var u = a[o];
    if (u.type === "stack") break;
    var c = ke(e, Yi(u), "math"), d = c.height + c.depth;
    if (u.type === "small") {
      var f = n.havingBaseStyle(u.style);
      d *= f.sizeMultiplier;
    }
    if (d > t) return u;
  }
  return a[a.length - 1];
}, Zt = function(e, t, a, n, i, o) {
  e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle");
  var u;
  rn.has(e) ? u = Vi : tn.has(e) ? u = nn : u = Xi;
  var c = sn(e, t, u, n);
  return c.type === "small" ? Hi(e, c.style, a, n, i, o) : c.type === "large" ? _a(e, c.size, a, n, i, o) : en(e, t, a, n, i, o);
}, At = function(e, t, a, n, i, o) {
  var u = n.fontMetrics().axisHeight * n.sizeMultiplier, c = 901, d = 5 / n.fontMetrics().ptPerEm, f = Math.max(t - u, a + u), g = Math.max(f / 500 * c, 2 * f - d);
  return Zt(e, g, true, n, i, o);
}, ra = { "\\bigl": { mclass: "mopen", size: 1 }, "\\Bigl": { mclass: "mopen", size: 2 }, "\\biggl": { mclass: "mopen", size: 3 }, "\\Biggl": { mclass: "mopen", size: 4 }, "\\bigr": { mclass: "mclose", size: 1 }, "\\Bigr": { mclass: "mclose", size: 2 }, "\\biggr": { mclass: "mclose", size: 3 }, "\\Biggr": { mclass: "mclose", size: 4 }, "\\bigm": { mclass: "mrel", size: 1 }, "\\Bigm": { mclass: "mrel", size: 2 }, "\\biggm": { mclass: "mrel", size: 3 }, "\\Biggm": { mclass: "mrel", size: 4 }, "\\big": { mclass: "mord", size: 1 }, "\\Big": { mclass: "mord", size: 2 }, "\\bigg": { mclass: "mord", size: 3 }, "\\Bigg": { mclass: "mord", size: 4 } }, Wi = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27E8", "\\rangle", "\u27E9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."]);
function aa(r) {
  return "isMiddle" in r;
}
function ut(r, e) {
  var t = lt(r);
  if (t && Wi.has(t.text)) return t;
  throw t ? new z("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new z("Invalid delimiter type '" + r.type + "'", r);
}
B({ type: "delimsizing", names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"], numArgs: 1, argTypes: ["primitive"], handler: (r, e) => {
  var t = ut(e[0], r);
  return { type: "delimsizing", mode: r.parser.mode, size: ra[r.funcName].size, mclass: ra[r.funcName].mclass, delim: t.text };
}, htmlBuilder: (r, e) => r.delim === "." ? k([r.mclass]) : an(r.delim, r.size, e, r.mode, [r.mclass]), mathmlBuilder: (r) => {
  var e = [];
  r.delim !== "." && e.push(y0(r.delim, r.mode));
  var t = new A("mo", e);
  r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
  var a = T(Se[r.size]);
  return t.setAttribute("minsize", a), t.setAttribute("maxsize", a), t;
} });
function na(r) {
  if (!r.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
B({ type: "leftright-right", names: ["\\right"], numArgs: 1, primitive: true, handler: (r, e) => {
  var t = r.parser.gullet.macros.get("\\current@color");
  if (t && typeof t != "string") throw new z("\\current@color set to non-string in \\right");
  return { type: "leftright-right", mode: r.parser.mode, delim: ut(e[0], r).text, color: t };
} });
B({ type: "leftright", names: ["\\left"], numArgs: 1, primitive: true, handler: (r, e) => {
  var t = ut(e[0], r), a = r.parser;
  ++a.leftrightDepth;
  var n = a.parseExpression(false);
  --a.leftrightDepth, a.expect("\\right", false);
  var i = $(a.parseFunction(), "leftright-right");
  return { type: "leftright", mode: a.mode, body: n, left: t.text, right: i.delim, rightColor: i.color };
}, htmlBuilder: (r, e) => {
  na(r);
  for (var t = i0(r.body, e, true, ["mopen", "mclose"]), a = 0, n = 0, i = false, o = 0; o < t.length; o++) {
    var u = t[o];
    aa(u) ? i = true : (a = Math.max(t[o].height, a), n = Math.max(t[o].depth, n));
  }
  a *= e.sizeMultiplier, n *= e.sizeMultiplier;
  var c;
  if (r.left === "." ? c = Me(e, ["mopen"]) : c = At(r.left, a, n, e, r.mode, ["mopen"]), t.unshift(c), i) for (var d = 1; d < t.length; d++) {
    var f = t[d];
    if (aa(f)) {
      var g = f.isMiddle;
      t[d] = At(g.delim, a, n, g.options, r.mode, []);
    }
  }
  var x;
  if (r.right === ".") x = Me(e, ["mclose"]);
  else {
    var y = r.rightColor ? e.withColor(r.rightColor) : e;
    x = At(r.right, a, n, y, r.mode, ["mclose"]);
  }
  return t.push(x), k(["minner"], t, e);
}, mathmlBuilder: (r, e) => {
  na(r);
  var t = b0(r.body, e);
  if (r.left !== ".") {
    var a = new A("mo", [y0(r.left, r.mode)]);
    a.setAttribute("fence", "true"), t.unshift(a);
  }
  if (r.right !== ".") {
    var n = new A("mo", [y0(r.right, r.mode)]);
    n.setAttribute("fence", "true"), r.rightColor && n.setAttribute("mathcolor", r.rightColor), t.push(n);
  }
  return dr(t);
} });
B({ type: "middle", names: ["\\middle"], numArgs: 1, primitive: true, handler: (r, e) => {
  var t = ut(e[0], r);
  if (!r.parser.leftrightDepth) throw new z("\\middle without preceding \\left", t);
  return { type: "middle", mode: r.parser.mode, delim: t.text };
}, htmlBuilder: (r, e) => {
  var t;
  return r.delim === "." ? t = Me(e, []) : (t = an(r.delim, 1, e, r.mode, []), t.isMiddle = { delim: r.delim, options: e }), t;
}, mathmlBuilder: (r, e) => {
  var t = r.delim === "\\vert" || r.delim === "|" ? y0("|", "text") : y0(r.delim, r.mode), a = new A("mo", [t]);
  return a.setAttribute("fence", "true"), a.setAttribute("lspace", "0.05em"), a.setAttribute("rspace", "0.05em"), a;
} });
var ji = (r, e) => {
  var t = de(X(r.body, e), e), a = r.label.slice(1), n = e.sizeMultiplier, i, o, u = L0(r.body);
  if (a === "sout") i = k(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / n, o = -0.5 * e.fontMetrics().xHeight;
  else if (a === "phase") {
    var c = J({ number: 0.6, unit: "pt" }, e), d = J({ number: 0.35, unit: "ex" }, e), f = e.havingBaseSizing();
    n = n / f.sizeMultiplier;
    var g = t.height + t.depth + c + d;
    t.style.paddingLeft = T(g / 2 + c);
    var x = Math.floor(1e3 * g * n), y = $1(x), S = new N0([new W0("phase", y)], { width: "400em", height: T(x / 1e3), viewBox: "0 0 400000 " + x, preserveAspectRatio: "xMinYMin slice" });
    i = j0(["hide-tail"], [S], e), i.style.height = T(g), o = t.depth + c + d;
  } else {
    /cancel/.test(a) ? u || t.classes.push("cancel-pad") : a === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var M, C, D = 0;
    /box/.test(a) ? (D = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness), M = e.fontMetrics().fboxsep + (a === "colorbox" ? 0 : D), C = M) : a === "angl" ? (D = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), M = 4 * D, C = Math.max(0, 0.25 - t.depth)) : (M = u ? 0.2 : 0, C = M), i = Si(t, a, M, C, e), /fbox|boxed|fcolorbox/.test(a) ? (i.style.borderStyle = "solid", i.style.borderWidth = T(D)) : a === "angl" && D !== 0.049 && (i.style.borderTopWidth = T(D), i.style.borderRightWidth = T(D)), o = t.depth + C, r.backgroundColor && (i.style.backgroundColor = r.backgroundColor, r.borderColor && (i.style.borderColor = r.borderColor));
  }
  var q;
  if (r.backgroundColor) q = V({ positionType: "individualShift", children: [{ type: "elem", elem: i, shift: o }, { type: "elem", elem: t, shift: 0 }] });
  else {
    var N = /cancel|phase/.test(a) ? ["svg-align"] : [];
    q = V({ positionType: "individualShift", children: [{ type: "elem", elem: t, shift: 0 }, { type: "elem", elem: i, shift: o, wrapperClasses: N }] });
  }
  return /cancel/.test(a) && (q.height = t.height, q.depth = t.depth), /cancel/.test(a) && !u ? k(["mord", "cancel-lap"], [q], e) : k(["mord"], [q], e);
}, Zi = (r, e) => {
  var t, a = new A(r.label.includes("colorbox") ? "mpadded" : "menclose", [j(r.body, e)]);
  switch (r.label) {
    case "\\cancel":
      a.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      a.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      a.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      a.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      a.setAttribute("notation", "box");
      break;
    case "\\angl":
      a.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, a.setAttribute("width", "+" + 2 * t + "pt"), a.setAttribute("height", "+" + 2 * t + "pt"), a.setAttribute("lspace", t + "pt"), a.setAttribute("voffset", t + "pt"), r.label === "\\fcolorbox") {
        var n = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
        a.setAttribute("style", "border: " + T(n) + " solid " + r.borderColor);
      }
      break;
    case "\\xcancel":
      a.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return r.backgroundColor && a.setAttribute("mathbackground", r.backgroundColor), a;
};
B({ type: "enclose", names: ["\\colorbox"], numArgs: 2, allowedInText: true, argTypes: ["color", "hbox"], handler(r, e, t) {
  var { parser: a, funcName: n } = r, i = $(e[0], "color-token").color, o = e[1];
  return { type: "enclose", mode: a.mode, label: n, backgroundColor: i, body: o };
}, htmlBuilder: ji, mathmlBuilder: Zi });
B({ type: "enclose", names: ["\\fcolorbox"], numArgs: 3, allowedInText: true, argTypes: ["color", "color", "hbox"], handler(r, e, t) {
  var { parser: a, funcName: n } = r, i = $(e[0], "color-token").color, o = $(e[1], "color-token").color, u = e[2];
  return { type: "enclose", mode: a.mode, label: n, backgroundColor: o, borderColor: i, body: u };
} });
B({ type: "enclose", names: ["\\fbox"], numArgs: 1, argTypes: ["hbox"], allowedInText: true, handler(r, e) {
  var { parser: t } = r;
  return { type: "enclose", mode: t.mode, label: "\\fbox", body: e[0] };
} });
B({ type: "enclose", names: ["\\cancel", "\\bcancel", "\\xcancel", "\\phase"], numArgs: 1, handler(r, e) {
  var { parser: t, funcName: a } = r, n = e[0];
  return { type: "enclose", mode: t.mode, label: a, body: n };
} });
B({ type: "enclose", names: ["\\sout"], numArgs: 1, allowedInText: true, handler(r, e) {
  var { parser: t, funcName: a } = r;
  t.mode === "math" && t.settings.reportNonstrict("mathVsSout", "LaTeX's \\sout works only in text mode");
  var n = e[0];
  return { type: "enclose", mode: t.mode, label: a, body: n };
} });
B({ type: "enclose", names: ["\\angl"], numArgs: 1, argTypes: ["hbox"], allowedInText: false, handler(r, e) {
  var { parser: t } = r;
  return { type: "enclose", mode: t.mode, label: "\\angl", body: e[0] };
} });
var ln = {};
function B0(r) {
  for (var { type: e, names: t, props: a, handler: n, htmlBuilder: i, mathmlBuilder: o } = r, u = { type: e, numArgs: a.numArgs || 0, allowedInText: false, numOptionalArgs: 0, handler: n }, c = 0; c < t.length; ++c) ln[t[c]] = u;
  i && (Ae[e] = i), o && (Te[e] = o);
}
var on = {};
function m(r, e) {
  on[r] = e;
}
class d0 {
  constructor(e, t, a) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = a;
  }
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new d0(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class f0 {
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  range(e, t) {
    return new f0(t, d0.range(this, e));
  }
}
function ia(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; ) r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var ht = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode) throw new z("{" + r.envName + "} can be used only in display mode.");
}, Ki = /* @__PURE__ */ new Set(["gather", "gather*"]);
function vr(r) {
  if (!r.includes("ed")) return !r.includes("*");
}
function K0(r, e, t) {
  var { hskipBeforeAndAfter: a, addJot: n, cols: i, arraystretch: o, colSeparationType: u, autoTag: c, singleRow: d, emptySingleRow: f, maxNumCols: g, leqno: x } = e;
  if (r.gullet.beginGroup(), d || r.gullet.macros.set("\\cr", "\\\\\\relax"), !o) {
    var y = r.gullet.expandMacroAsText("\\arraystretch");
    if (y == null) o = 1;
    else if (o = parseFloat(y), !o || o < 0) throw new z("Invalid \\arraystretch: " + y);
  }
  r.gullet.beginGroup();
  var S = [], M = [S], C = [], D = [], q = c != null ? [] : void 0;
  function N() {
    c && r.gullet.macros.set("\\@eqnsw", "1", true);
  }
  function F() {
    q && (r.gullet.macros.get("\\df@tag") ? (q.push(r.subparse([new f0("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, true)) : q.push(!!c && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (N(), D.push(ia(r)); ; ) {
    var O = r.parseExpression(false, d ? "\\end" : "\\\\");
    r.gullet.endGroup(), r.gullet.beginGroup();
    var H = { type: "ordgroup", mode: r.mode, body: O };
    t && (H = { type: "styling", mode: r.mode, style: t, resetFont: true, body: [H] }), S.push(H);
    var G = r.fetch().text;
    if (G === "&") {
      if (g && S.length === g) {
        if (d || u) throw new z("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (G === "\\end") {
      F(), S.length === 1 && H.type === "styling" && H.body.length === 1 && H.body[0].type === "ordgroup" && H.body[0].body.length === 0 && (M.length > 1 || !f) && M.pop(), D.length < M.length + 1 && D.push([]);
      break;
    } else if (G === "\\\\") {
      r.consume();
      var Y = void 0;
      r.gullet.future().text !== " " && (Y = r.parseSizeGroup(true)), C.push(Y ? Y.value : null), F(), D.push(ia(r)), S = [], M.push(S), N();
    } else throw new z("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), { type: "array", mode: r.mode, addJot: n, arraystretch: o, body: M, cols: i, rowGaps: C, hskipBeforeAndAfter: a, hLinesBeforeRow: D, colSeparationType: u, tags: q, leqno: x };
}
function gr(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var D0 = function(e, t) {
  var a, n, i = e.body.length, o = e.hLinesBeforeRow, u = 0, c = new Array(i), d = [], f = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness), g = 1 / t.fontMetrics().ptPerEm, x = 5 * g;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var y = t.havingStyle(L.SCRIPT).sizeMultiplier;
    x = 0.2778 * (y / t.sizeMultiplier);
  }
  var S = e.colSeparationType === "CD" ? J({ number: 3, unit: "ex" }, t) : 12 * g, M = 3 * g, C = e.arraystretch * S, D = 0.7 * C, q = 0.3 * C, N = 0;
  function F(Ie) {
    for (var Ne = 0; Ne < Ie.length; ++Ne) Ne > 0 && (N += 0.25), d.push({ pos: N, isDashed: Ie[Ne] });
  }
  for (F(o[0]), a = 0; a < e.body.length; ++a) {
    var O = e.body[a], H = D, G = q;
    u < O.length && (u = O.length);
    var Y = { cells: new Array(O.length), height: 0, depth: 0, pos: 0 };
    for (n = 0; n < O.length; ++n) {
      var U = X(O[n], t);
      G < U.depth && (G = U.depth), H < U.height && (H = U.height), Y.cells[n] = U;
    }
    var m0 = e.rowGaps[a], p0 = 0;
    m0 && (p0 = J(m0, t), p0 > 0 && (p0 += q, G < p0 && (G = p0), p0 = 0)), e.addJot && a < e.body.length - 1 && (G += M), Y.height = H, Y.depth = G, N += H, Y.pos = N, N += G + p0, c[a] = Y, F(o[a + 1]);
  }
  var e0 = N / 2 + t.fontMetrics().axisHeight, be = e.cols || [], A0 = [], w0, O0, ne = [];
  if (e.tags && e.tags.some((Ie) => Ie)) for (a = 0; a < i; ++a) {
    var ie = c[a], mt = ie.pos - e0, $0 = e.tags[a], P0 = void 0;
    $0 === true ? P0 = k(["eqn-num"], [], t) : $0 === false ? P0 = k([], [], t) : P0 = k([], i0($0, t, true), t), P0.depth = ie.depth, P0.height = ie.height, ne.push({ type: "elem", elem: P0, shift: mt });
  }
  for (n = 0, O0 = 0; n < u || O0 < be.length; ++n, ++O0) {
    for (var xe, k0 = be[O0], De = true; ((kr = k0) == null ? void 0 : kr.type) === "separator"; ) {
      var kr;
      if (De || (w0 = k(["arraycolsep"], []), w0.style.width = T(t.fontMetrics().doubleRuleSep), A0.push(w0)), k0.separator === "|" || k0.separator === ":") {
        var zn = k0.separator === "|" ? "solid" : "dashed", se = k(["vertical-separator"], [], t);
        se.style.height = T(N), se.style.borderRightWidth = T(f), se.style.borderRightStyle = zn, se.style.margin = "0 " + T(-f / 2);
        var Sr = N - e0;
        Sr && (se.style.verticalAlign = T(-Sr)), A0.push(se);
      } else throw new z("Invalid separator type: " + k0.separator);
      O0++, k0 = be[O0], De = false;
    }
    if (!(n >= u)) {
      var le = void 0;
      if (n > 0 || e.hskipBeforeAndAfter) {
        var zr, Ar;
        le = (zr = (Ar = k0) == null ? void 0 : Ar.pregap) != null ? zr : x, le !== 0 && (w0 = k(["arraycolsep"], []), w0.style.width = T(le), A0.push(w0));
      }
      var Tr = [];
      for (a = 0; a < i; ++a) {
        var Re = c[a], qe = Re.cells[n];
        if (qe) {
          var An = Re.pos - e0;
          qe.depth = Re.depth, qe.height = Re.height, Tr.push({ type: "elem", elem: qe, shift: An });
        }
      }
      var Tn = V({ positionType: "individualShift", children: Tr }), Mn = k(["col-align-" + (((xe = k0) == null ? void 0 : xe.align) || "c")], [Tn]);
      if (A0.push(Mn), n < u - 1 || e.hskipBeforeAndAfter) {
        var Mr, Cr;
        le = (Mr = (Cr = k0) == null ? void 0 : Cr.postgap) != null ? Mr : x, le !== 0 && (w0 = k(["arraycolsep"], []), w0.style.width = T(le), A0.push(w0));
      }
    }
  }
  var Ee = k(["mtable"], A0);
  if (d.length > 0) {
    for (var Cn = me("hline", t, f), Bn = me("hdashline", t, f), dt = [{ type: "elem", elem: Ee, shift: 0 }]; d.length > 0; ) {
      var Br = d.pop(), Dr = Br.pos - e0;
      Br.isDashed ? dt.push({ type: "elem", elem: Bn, shift: Dr }) : dt.push({ type: "elem", elem: Cn, shift: Dr });
    }
    Ee = V({ positionType: "individualShift", children: dt });
  }
  if (ne.length === 0) return k(["mord"], [Ee], t);
  var Dn = V({ positionType: "individualShift", children: ne }), Rn = k(["tag"], [Dn], t);
  return H0([Ee, Rn]);
}, Qi = { c: "center ", l: "left ", r: "right " }, R0 = function(e, t) {
  for (var a = [], n = new A("mtd", [], ["mtr-glue"]), i = new A("mtd", [], ["mml-eqn-num"]), o = 0; o < e.body.length; o++) {
    for (var u = e.body[o], c = [], d = 0; d < u.length; d++) c.push(new A("mtd", [j(u[d], t)]));
    e.tags && e.tags[o] && (c.unshift(n), c.push(n), e.leqno ? c.unshift(i) : c.push(i)), a.push(new A("mtr", c));
  }
  var f = new A("mtable", a), g = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  f.setAttribute("rowspacing", T(g));
  var x = "", y = "";
  if (e.cols && e.cols.length > 0) {
    var S = e.cols, M = "", C = false, D = 0, q = S.length;
    S[0].type === "separator" && (x += "top ", D = 1), S[S.length - 1].type === "separator" && (x += "bottom ", q -= 1);
    for (var N = D; N < q; N++) {
      var F = S[N];
      F.type === "align" ? (y += Qi[F.align], C && (M += "none "), C = true) : F.type === "separator" && C && (M += F.separator === "|" ? "solid " : "dashed ", C = false);
    }
    f.setAttribute("columnalign", y.trim()), /[sd]/.test(M) && f.setAttribute("columnlines", M.trim());
  }
  if (e.colSeparationType === "align") {
    for (var O = e.cols || [], H = "", G = 1; G < O.length; G++) H += G % 2 ? "0em " : "1em ";
    f.setAttribute("columnspacing", H.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? f.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? f.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? f.setAttribute("columnspacing", "0.5em") : f.setAttribute("columnspacing", "1em");
  var Y = "", U = e.hLinesBeforeRow;
  x += U[0].length > 0 ? "left " : "", x += U[U.length - 1].length > 0 ? "right " : "";
  for (var m0 = 1; m0 < U.length - 1; m0++) Y += U[m0].length === 0 ? "none " : U[m0][0] ? "dashed " : "solid ";
  return /[sd]/.test(Y) && f.setAttribute("rowlines", Y.trim()), x !== "" && (f = new A("menclose", [f]), f.setAttribute("notation", x.trim())), e.arraystretch && e.arraystretch < 1 && (f = new A("mstyle", [f]), f.setAttribute("scriptlevel", "1")), f;
}, un = function(e, t) {
  e.envName.includes("ed") || ht(e);
  var a = [], n = e.envName === "split", i = K0(e.parser, { cols: a, addJot: true, autoTag: n ? void 0 : vr(e.envName), emptySingleRow: true, colSeparationType: e.envName.includes("at") ? "alignat" : "align", maxNumCols: n ? 2 : void 0, leqno: e.parser.settings.leqno }, "display"), o = 0, u = 0, c = { type: "ordgroup", mode: e.mode, body: [] };
  if (t[0] && t[0].type === "ordgroup") {
    for (var d = "", f = 0; f < t[0].body.length; f++) {
      var g = $(t[0].body[f], "textord");
      d += g.text;
    }
    o = Number(d), u = o * 2;
  }
  var x = !u;
  i.body.forEach(function(C) {
    for (var D = 1; D < C.length; D += 2) {
      var q = $(C[D], "styling"), N = $(q.body[0], "ordgroup");
      N.body.unshift(c);
    }
    if (x) u < C.length && (u = C.length);
    else {
      var F = C.length / 2;
      if (o < F) throw new z("Too many math in a row: " + ("expected " + o + ", but got " + F), C[0]);
    }
  });
  for (var y = 0; y < u; ++y) {
    var S = "r", M = 0;
    y % 2 === 1 ? S = "l" : y > 0 && x && (M = 1), a[y] = { type: "align", align: S, pregap: M, postgap: 0 };
  }
  return i.colSeparationType = x ? "align" : "alignat", i;
};
B0({ type: "array", names: ["array", "darray"], props: { numArgs: 1 }, handler(r, e) {
  var t = lt(e[0]), a = t ? [e[0]] : $(e[0], "ordgroup").body, n = a.map(function(o) {
    var u = st(o), c = u.text;
    if ("lcr".includes(c)) return { type: "align", align: c };
    if (c === "|") return { type: "separator", separator: "|" };
    if (c === ":") return { type: "separator", separator: ":" };
    throw new z("Unknown column alignment: " + c, o);
  }), i = { cols: n, hskipBeforeAndAfter: true, maxNumCols: n.length };
  return K0(r.parser, i, gr(r.envName));
}, htmlBuilder: D0, mathmlBuilder: R0 });
B0({ type: "array", names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"], props: { numArgs: 0 }, handler(r) {
  var e = { matrix: null, pmatrix: ["(", ")"], bmatrix: ["[", "]"], Bmatrix: ["\\{", "\\}"], vmatrix: ["|", "|"], Vmatrix: ["\\Vert", "\\Vert"] }[r.envName.replace("*", "")], t = "c", a = { hskipBeforeAndAfter: false, cols: [{ type: "align", align: t }] };
  if (r.envName.charAt(r.envName.length - 1) === "*") {
    var n = r.parser;
    if (n.consumeSpaces(), n.fetch().text === "[") {
      if (n.consume(), n.consumeSpaces(), t = n.fetch().text, !"lcr".includes(t)) throw new z("Expected l or c or r", n.nextToken);
      n.consume(), n.consumeSpaces(), n.expect("]"), n.consume(), a.cols = [{ type: "align", align: t }];
    }
  }
  var i = K0(r.parser, a, gr(r.envName)), o = Math.max(0, ...i.body.map((u) => u.length));
  return i.cols = new Array(o).fill({ type: "align", align: t }), e ? { type: "leftright", mode: r.mode, body: [i], left: e[0], right: e[1], rightColor: void 0 } : i;
}, htmlBuilder: D0, mathmlBuilder: R0 });
B0({ type: "array", names: ["smallmatrix"], props: { numArgs: 0 }, handler(r) {
  var e = { arraystretch: 0.5 }, t = K0(r.parser, e, "script");
  return t.colSeparationType = "small", t;
}, htmlBuilder: D0, mathmlBuilder: R0 });
B0({ type: "array", names: ["subarray"], props: { numArgs: 1 }, handler(r, e) {
  var t = lt(e[0]), a = t ? [e[0]] : $(e[0], "ordgroup").body, n = a.map(function(u) {
    var c = st(u), d = c.text;
    if ("lc".includes(d)) return { type: "align", align: d };
    throw new z("Unknown column alignment: " + d, u);
  });
  if (n.length > 1) throw new z("{subarray} can contain only one column");
  var i = { cols: n, hskipBeforeAndAfter: false, arraystretch: 0.5 }, o = K0(r.parser, i, "script");
  if (o.body.length > 0 && o.body[0].length > 1) throw new z("{subarray} can contain only one column");
  return o;
}, htmlBuilder: D0, mathmlBuilder: R0 });
B0({ type: "array", names: ["cases", "dcases", "rcases", "drcases"], props: { numArgs: 0 }, handler(r) {
  var e = { arraystretch: 1.2, cols: [{ type: "align", align: "l", pregap: 0, postgap: 1 }, { type: "align", align: "l", pregap: 0, postgap: 0 }] }, t = K0(r.parser, e, gr(r.envName));
  return { type: "leftright", mode: r.mode, body: [t], left: r.envName.includes("r") ? "." : "\\{", right: r.envName.includes("r") ? "\\}" : ".", rightColor: void 0 };
}, htmlBuilder: D0, mathmlBuilder: R0 });
B0({ type: "array", names: ["align", "align*", "aligned", "split"], props: { numArgs: 0 }, handler: un, htmlBuilder: D0, mathmlBuilder: R0 });
B0({ type: "array", names: ["gathered", "gather", "gather*"], props: { numArgs: 0 }, handler(r) {
  Ki.has(r.envName) && ht(r);
  var e = { cols: [{ type: "align", align: "c" }], addJot: true, colSeparationType: "gather", autoTag: vr(r.envName), emptySingleRow: true, leqno: r.parser.settings.leqno };
  return K0(r.parser, e, "display");
}, htmlBuilder: D0, mathmlBuilder: R0 });
B0({ type: "array", names: ["alignat", "alignat*", "alignedat"], props: { numArgs: 1 }, handler: un, htmlBuilder: D0, mathmlBuilder: R0 });
B0({ type: "array", names: ["equation", "equation*"], props: { numArgs: 0 }, handler(r) {
  ht(r);
  var e = { autoTag: vr(r.envName), emptySingleRow: true, singleRow: true, maxNumCols: 1, leqno: r.parser.settings.leqno };
  return K0(r.parser, e, "display");
}, htmlBuilder: D0, mathmlBuilder: R0 });
B0({ type: "array", names: ["CD"], props: { numArgs: 0 }, handler(r) {
  return ht(r), Ii(r.parser);
}, htmlBuilder: D0, mathmlBuilder: R0 });
m("\\nonumber", "\\gdef\\@eqnsw{0}");
m("\\notag", "\\nonumber");
B({ type: "text", names: ["\\hline", "\\hdashline"], numArgs: 0, allowedInText: true, allowedInMath: true, handler(r, e) {
  throw new z(r.funcName + " valid only within array environment");
} });
var sa = ln;
B({ type: "environment", names: ["\\begin", "\\end"], numArgs: 1, argTypes: ["text"], handler(r, e) {
  var { parser: t, funcName: a } = r, n = e[0];
  if (n.type !== "ordgroup") throw new z("Invalid environment name", n);
  for (var i = "", o = 0; o < n.body.length; ++o) i += $(n.body[o], "textord").text;
  if (a === "\\begin") {
    if (!sa.hasOwnProperty(i)) throw new z("No such environment: " + i, n);
    var u = sa[i], { args: c, optArgs: d } = t.parseArguments("\\begin{" + i + "}", u), f = { mode: t.mode, envName: i, parser: t }, g = u.handler(f, c, d);
    t.expect("\\end", false);
    var x = t.nextToken, y = $(t.parseFunction(), "environment");
    if (y.name !== i) throw new z("Mismatch: \\begin{" + i + "} matched by \\end{" + y.name + "}", x);
    return g;
  }
  return { type: "environment", mode: t.mode, name: i, nameGroup: n };
} });
var Ji = (r, e) => {
  var t = r.font, a = e.withFont(t);
  return X(r.body, a);
}, _i = (r, e) => {
  var t = r.font, a = e.withFont(t);
  return j(r.body, a);
}, la = { "\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak" };
B({ type: "font", names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathsfit", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], numArgs: 1, allowedInArgument: true, handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = Je(e[0]), i = a in la ? la[a] : a;
  return { type: "font", mode: t.mode, font: i.slice(1), body: n };
}, htmlBuilder: Ji, mathmlBuilder: _i });
B({ type: "mclass", names: ["\\boldsymbol", "\\bm"], numArgs: 1, handler: (r, e) => {
  var { parser: t } = r, a = e[0];
  return { type: "mclass", mode: t.mode, mclass: ot(a), body: [{ type: "font", mode: t.mode, font: "boldsymbol", body: a }], isCharacterBox: L0(a) };
} });
B({ type: "font", names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"], numArgs: 0, allowedInText: true, handler: (r, e) => {
  var { parser: t, funcName: a, breakOnTokenText: n } = r, { mode: i } = t, o = t.parseExpression(true, n);
  return { type: "font", mode: i, font: "math" + a.slice(1), body: { type: "ordgroup", mode: t.mode, body: o } };
} });
var es = (r, e) => {
  var t = e.style, a = t.fracNum(), n = t.fracDen(), i;
  i = e.havingStyle(a);
  var o = X(r.numer, i, e);
  if (r.continued) {
    var u = 8.5 / e.fontMetrics().ptPerEm, c = 3.5 / e.fontMetrics().ptPerEm;
    o.height = o.height < u ? u : o.height, o.depth = o.depth < c ? c : o.depth;
  }
  i = e.havingStyle(n);
  var d = X(r.denom, i, e), f, g, x;
  r.hasBarLine ? (r.barSize ? (g = J(r.barSize, e), f = me("frac-line", e, g)) : f = me("frac-line", e), g = f.height, x = f.height) : (f = null, g = 0, x = e.fontMetrics().defaultRuleThickness);
  var y, S, M;
  t.size === L.DISPLAY.size ? (y = e.fontMetrics().num1, g > 0 ? S = 3 * x : S = 7 * x, M = e.fontMetrics().denom1) : (g > 0 ? (y = e.fontMetrics().num2, S = x) : (y = e.fontMetrics().num3, S = 3 * x), M = e.fontMetrics().denom2);
  var C;
  if (f) {
    var q = e.fontMetrics().axisHeight;
    y - o.depth - (q + 0.5 * g) < S && (y += S - (y - o.depth - (q + 0.5 * g))), q - 0.5 * g - (d.height - M) < S && (M += S - (q - 0.5 * g - (d.height - M)));
    var N = -(q - 0.5 * g);
    C = V({ positionType: "individualShift", children: [{ type: "elem", elem: d, shift: M }, { type: "elem", elem: f, shift: N }, { type: "elem", elem: o, shift: -y }] });
  } else {
    var D = y - o.depth - (d.height - M);
    D < S && (y += 0.5 * (S - D), M += 0.5 * (S - D)), C = V({ positionType: "individualShift", children: [{ type: "elem", elem: d, shift: M }, { type: "elem", elem: o, shift: -y }] });
  }
  i = e.havingStyle(t), C.height *= i.sizeMultiplier / e.sizeMultiplier, C.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var F;
  t.size === L.DISPLAY.size ? F = e.fontMetrics().delim1 : t.size === L.SCRIPTSCRIPT.size ? F = e.havingStyle(L.SCRIPT).fontMetrics().delim2 : F = e.fontMetrics().delim2;
  var O, H;
  return r.leftDelim == null ? O = Me(e, ["mopen"]) : O = Zt(r.leftDelim, F, true, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? H = k([]) : r.rightDelim == null ? H = Me(e, ["mclose"]) : H = Zt(r.rightDelim, F, true, e.havingStyle(t), r.mode, ["mclose"]), k(["mord"].concat(i.sizingClasses(e)), [O, k(["mfrac"], [C]), H], e);
}, ts = (r, e) => {
  var t = new A("mfrac", [j(r.numer, e), j(r.denom, e)]);
  if (!r.hasBarLine) t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var a = J(r.barSize, e);
    t.setAttribute("linethickness", T(a));
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var n = [];
    if (r.leftDelim != null) {
      var i = new A("mo", [new r0(r.leftDelim.replace("\\", ""))]);
      i.setAttribute("fence", "true"), n.push(i);
    }
    if (n.push(t), r.rightDelim != null) {
      var o = new A("mo", [new r0(r.rightDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), n.push(o);
    }
    return dr(n);
  }
  return t;
}, hn = (r, e) => {
  if (!e) return r;
  var t = { type: "styling", mode: r.mode, style: e, body: [r] };
  return t;
};
B({ type: "genfrac", names: ["\\cfrac", "\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"], numArgs: 2, allowedInArgument: true, handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = e[0], i = e[1], o, u = null, c = null;
  switch (a) {
    case "\\cfrac":
    case "\\dfrac":
    case "\\frac":
    case "\\tfrac":
      o = true;
      break;
    case "\\\\atopfrac":
      o = false;
      break;
    case "\\dbinom":
    case "\\binom":
    case "\\tbinom":
      o = false, u = "(", c = ")";
      break;
    case "\\\\bracefrac":
      o = false, u = "\\{", c = "\\}";
      break;
    case "\\\\brackfrac":
      o = false, u = "[", c = "]";
      break;
    default:
      throw new Error("Unrecognized genfrac command");
  }
  var d = a === "\\cfrac", f = null;
  return d || a.startsWith("\\d") ? f = "display" : a.startsWith("\\t") && (f = "text"), hn({ type: "genfrac", mode: t.mode, numer: n, denom: i, continued: d, hasBarLine: o, leftDelim: u, rightDelim: c, barSize: null }, f);
}, htmlBuilder: es, mathmlBuilder: ts });
B({ type: "infix", names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"], numArgs: 0, infix: true, handler(r) {
  var { parser: e, funcName: t, token: a } = r, n;
  switch (t) {
    case "\\over":
      n = "\\frac";
      break;
    case "\\choose":
      n = "\\binom";
      break;
    case "\\atop":
      n = "\\\\atopfrac";
      break;
    case "\\brace":
      n = "\\\\bracefrac";
      break;
    case "\\brack":
      n = "\\\\brackfrac";
      break;
    default:
      throw new Error("Unrecognized infix genfrac command");
  }
  return { type: "infix", mode: e.mode, replaceWith: n, token: a };
} });
var oa = ["display", "text", "script", "scriptscript"], ua = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
B({ type: "genfrac", names: ["\\genfrac"], numArgs: 6, allowedInArgument: true, argTypes: ["math", "math", "size", "text", "math", "math"], handler(r, e) {
  var { parser: t } = r, a = e[4], n = e[5], i = Je(e[0]), o = i.type === "atom" && i.family === "open" ? ua(i.text) : null, u = Je(e[1]), c = u.type === "atom" && u.family === "close" ? ua(u.text) : null, d = $(e[2], "size"), f, g = null;
  d.isBlank ? f = true : (g = d.value, f = g.number > 0);
  var x = null, y = e[3];
  if (y.type === "ordgroup") {
    if (y.body.length > 0) {
      var S = $(y.body[0], "textord");
      x = oa[Number(S.text)];
    }
  } else y = $(y, "textord"), x = oa[Number(y.text)];
  return hn({ type: "genfrac", mode: t.mode, numer: a, denom: n, continued: false, hasBarLine: f, barSize: g, leftDelim: o, rightDelim: c }, x);
} });
B({ type: "infix", names: ["\\above"], numArgs: 1, argTypes: ["size"], infix: true, handler(r, e) {
  var { parser: t, funcName: a, token: n } = r;
  return { type: "infix", mode: t.mode, replaceWith: "\\\\abovefrac", size: $(e[0], "size").value, token: n };
} });
B({ type: "genfrac", names: ["\\\\abovefrac"], numArgs: 3, argTypes: ["math", "size", "math"], handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = e[0], i = $(e[1], "infix").size;
  if (!i) throw new Error("\\\\abovefrac expected size, but got " + String(i));
  var o = e[2], u = i.number > 0;
  return { type: "genfrac", mode: t.mode, numer: n, denom: o, continued: false, hasBarLine: u, barSize: i, leftDelim: null, rightDelim: null };
} });
var cn = (r, e) => {
  var t = e.style, a, n;
  r.type === "supsub" ? (a = r.sup ? X(r.sup, e.havingStyle(t.sup()), e) : X(r.sub, e.havingStyle(t.sub()), e), n = $(r.base, "horizBrace")) : n = $(r, "horizBrace");
  var i = X(n.base, e.havingBaseStyle(L.DISPLAY)), o = it(n, e), u;
  if (n.isOver ? u = V({ positionType: "firstBaseline", children: [{ type: "elem", elem: i }, { type: "kern", size: 0.1 }, { type: "elem", elem: o, wrapperClasses: ["svg-align"] }] }) : u = V({ positionType: "bottom", positionData: i.depth + 0.1 + o.height, children: [{ type: "elem", elem: o, wrapperClasses: ["svg-align"] }, { type: "kern", size: 0.1 }, { type: "elem", elem: i }] }), a) {
    var c = k(["minner", n.isOver ? "mover" : "munder"], [u], e);
    n.isOver ? u = V({ positionType: "firstBaseline", children: [{ type: "elem", elem: c }, { type: "kern", size: 0.2 }, { type: "elem", elem: a }] }) : u = V({ positionType: "bottom", positionData: c.depth + 0.2 + a.height + a.depth, children: [{ type: "elem", elem: a }, { type: "kern", size: 0.2 }, { type: "elem", elem: c }] });
  }
  return k(["minner", n.isOver ? "mover" : "munder"], [u], e);
}, rs = (r, e) => {
  var t = nt(r.label);
  return new A(r.isOver ? "mover" : "munder", [j(r.base, e), t]);
};
B({ type: "horizBrace", names: ["\\overbrace", "\\underbrace", "\\overbracket", "\\underbracket"], numArgs: 1, handler(r, e) {
  var { parser: t, funcName: a } = r;
  return { type: "horizBrace", mode: t.mode, label: a, isOver: a.includes("\\over"), base: e[0] };
}, htmlBuilder: cn, mathmlBuilder: rs });
B({ type: "href", names: ["\\href"], numArgs: 2, argTypes: ["url", "original"], allowedInText: true, handler: (r, e) => {
  var { parser: t } = r, a = e[1], n = $(e[0], "url").url;
  return t.settings.isTrusted({ command: "\\href", url: n }) ? { type: "href", mode: t.mode, href: n, body: t0(a) } : t.formatUnsupportedCmd("\\href");
}, htmlBuilder: (r, e) => {
  var t = i0(r.body, e, false);
  return si(r.href, [], t, e);
}, mathmlBuilder: (r, e) => {
  var t = Z0(r.body, e);
  return t instanceof A || (t = new A("mrow", [t])), t.setAttribute("href", r.href), t;
} });
B({ type: "href", names: ["\\url"], numArgs: 1, argTypes: ["url"], allowedInText: true, handler: (r, e) => {
  var { parser: t } = r, a = $(e[0], "url").url;
  if (!t.settings.isTrusted({ command: "\\url", url: a })) return t.formatUnsupportedCmd("\\url");
  for (var n = [], i = 0; i < a.length; i++) {
    var o = a[i];
    o === "~" && (o = "\\textasciitilde"), n.push({ type: "textord", mode: "text", text: o });
  }
  var u = { type: "text", mode: t.mode, font: "\\texttt", body: n };
  return { type: "href", mode: t.mode, href: a, body: t0(u) };
} });
B({ type: "hbox", names: ["\\hbox"], numArgs: 1, argTypes: ["text"], allowedInText: true, primitive: true, handler(r, e) {
  var { parser: t } = r;
  return { type: "hbox", mode: t.mode, body: t0(e[0]) };
}, htmlBuilder(r, e) {
  var t = i0(r.body, e.withFont(""), false);
  return H0(t);
}, mathmlBuilder(r, e) {
  return new A("mrow", b0(r.body, e.withFont("")));
} });
B({ type: "html", names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"], numArgs: 2, argTypes: ["raw", "original"], allowedInText: true, handler: (r, e) => {
  var { parser: t, funcName: a, token: n } = r, i = $(e[0], "raw").string, o = e[1];
  t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
  var u, c = {};
  switch (a) {
    case "\\htmlClass":
      c.class = i, u = { command: "\\htmlClass", class: i };
      break;
    case "\\htmlId":
      c.id = i, u = { command: "\\htmlId", id: i };
      break;
    case "\\htmlStyle":
      c.style = i, u = { command: "\\htmlStyle", style: i };
      break;
    case "\\htmlData": {
      for (var d = i.split(","), f = 0; f < d.length; f++) {
        var g = d[f], x = g.indexOf("=");
        if (x < 0) throw new z("\\htmlData key/value '" + g + "' missing equals sign");
        var y = g.slice(0, x), S = g.slice(x + 1);
        c["data-" + y.trim()] = S;
      }
      u = { command: "\\htmlData", attributes: c };
      break;
    }
    default:
      throw new Error("Unrecognized html command");
  }
  return t.settings.isTrusted(u) ? { type: "html", mode: t.mode, attributes: c, body: t0(o) } : t.formatUnsupportedCmd(a);
}, htmlBuilder: (r, e) => {
  var t = i0(r.body, e, false), a = ["enclosing"];
  r.attributes.class && a.push(...r.attributes.class.trim().split(/\s+/));
  var n = k(a, t, e);
  for (var i in r.attributes) i !== "class" && r.attributes.hasOwnProperty(i) && n.setAttribute(i, r.attributes[i]);
  return n;
}, mathmlBuilder: (r, e) => Z0(r.body, e) });
B({ type: "htmlmathml", names: ["\\html@mathml"], numArgs: 2, allowedInArgument: true, allowedInText: true, handler: (r, e) => {
  var { parser: t } = r;
  return { type: "htmlmathml", mode: t.mode, html: t0(e[0]), mathml: t0(e[1]) };
}, htmlBuilder: (r, e) => {
  var t = i0(r.html, e, false);
  return H0(t);
}, mathmlBuilder: (r, e) => Z0(r.mathml, e) });
var Tt = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return { number: +e, unit: "bp" };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t) throw new z("Invalid size: '" + e + "' in \\includegraphics");
  var a = { number: +(t[1] + t[2]), unit: t[3] };
  if (!Ea(a)) throw new z("Invalid unit: '" + a.unit + "' in \\includegraphics.");
  return a;
};
B({ type: "includegraphics", names: ["\\includegraphics"], numArgs: 1, numOptionalArgs: 1, argTypes: ["raw", "url"], allowedInText: false, handler: (r, e, t) => {
  var { parser: a } = r, n = { number: 0, unit: "em" }, i = { number: 0.9, unit: "em" }, o = { number: 0, unit: "em" }, u = "";
  if (t[0]) for (var c = $(t[0], "raw").string, d = c.split(","), f = 0; f < d.length; f++) {
    var g = d[f].split("=");
    if (g.length === 2) {
      var x = g[1].trim();
      switch (g[0].trim()) {
        case "alt":
          u = x;
          break;
        case "width":
          n = Tt(x);
          break;
        case "height":
          i = Tt(x);
          break;
        case "totalheight":
          o = Tt(x);
          break;
        default:
          throw new z("Invalid key: '" + g[0] + "' in \\includegraphics.");
      }
    }
  }
  var y = $(e[0], "url").url;
  return u === "" && (u = y, u = u.replace(/^.*[\\/]/, ""), u = u.substring(0, u.lastIndexOf("."))), a.settings.isTrusted({ command: "\\includegraphics", url: y }) ? { type: "includegraphics", mode: a.mode, alt: u, width: n, height: i, totalheight: o, src: y } : a.formatUnsupportedCmd("\\includegraphics");
}, htmlBuilder: (r, e) => {
  var t = J(r.height, e), a = 0;
  r.totalheight.number > 0 && (a = J(r.totalheight, e) - t);
  var n = 0;
  r.width.number > 0 && (n = J(r.width, e));
  var i = { height: T(t + a) };
  n > 0 && (i.width = T(n)), a > 0 && (i.verticalAlign = T(-a));
  var o = new j1(r.src, r.alt, i);
  return o.height = t, o.depth = a, o;
}, mathmlBuilder: (r, e) => {
  var t = new A("mglyph", []);
  t.setAttribute("alt", r.alt);
  var a = J(r.height, e), n = 0;
  if (r.totalheight.number > 0 && (n = J(r.totalheight, e) - a, t.setAttribute("valign", T(-n))), t.setAttribute("height", T(a + n)), r.width.number > 0) {
    var i = J(r.width, e);
    t.setAttribute("width", T(i));
  }
  return t.setAttribute("src", r.src), t;
} });
B({ type: "kern", names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"], numArgs: 1, argTypes: ["size"], primitive: true, allowedInText: true, handler(r, e) {
  var { parser: t, funcName: a } = r, n = $(e[0], "size");
  if (t.settings.strict) {
    var i = a[1] === "m", o = n.value.unit === "mu";
    i ? (o || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " supports only mu units, " + ("not " + n.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " works only in math mode")) : o && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " doesn't support mu units");
  }
  return { type: "kern", mode: t.mode, dimension: n.value };
}, htmlBuilder(r, e) {
  return Oa(r.dimension, e);
}, mathmlBuilder(r, e) {
  var t = J(r.dimension, e);
  return new Xa(t);
} });
B({ type: "lap", names: ["\\mathllap", "\\mathrlap", "\\mathclap"], numArgs: 1, allowedInText: true, handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = e[0];
  return { type: "lap", mode: t.mode, alignment: a.slice(5), body: n };
}, htmlBuilder: (r, e) => {
  var t;
  r.alignment === "clap" ? (t = k([], [X(r.body, e)]), t = k(["inner"], [t], e)) : t = k(["inner"], [X(r.body, e)]);
  var a = k(["fix"], []), n = k([r.alignment], [t, a], e), i = k(["strut"]);
  return i.style.height = T(n.height + n.depth), n.depth && (i.style.verticalAlign = T(-n.depth)), n.children.unshift(i), n = k(["thinbox"], [n], e), k(["mord", "vbox"], [n], e);
}, mathmlBuilder: (r, e) => {
  var t = new A("mpadded", [j(r.body, e)]);
  if (r.alignment !== "rlap") {
    var a = r.alignment === "llap" ? "-1" : "-0.5";
    t.setAttribute("lspace", a + "width");
  }
  return t.setAttribute("width", "0px"), t;
} });
B({ type: "styling", names: ["\\(", "$"], numArgs: 0, allowedInText: true, allowedInMath: false, handler(r, e) {
  var { funcName: t, parser: a } = r, n = a.mode;
  a.switchMode("math");
  var i = t === "\\(" ? "\\)" : "$", o = a.parseExpression(false, i);
  return a.expect(i), a.switchMode(n), { type: "styling", mode: a.mode, style: "text", resetFont: true, body: o };
} });
B({ type: "text", names: ["\\)", "\\]"], numArgs: 0, allowedInText: true, allowedInMath: false, handler(r, e) {
  throw new z("Mismatched " + r.funcName);
} });
var ha = (r, e) => {
  switch (e.style.size) {
    case L.DISPLAY.size:
      return r.display;
    case L.TEXT.size:
      return r.text;
    case L.SCRIPT.size:
      return r.script;
    case L.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
B({ type: "mathchoice", names: ["\\mathchoice"], numArgs: 4, primitive: true, handler: (r, e) => {
  var { parser: t } = r;
  return { type: "mathchoice", mode: t.mode, display: t0(e[0]), text: t0(e[1]), script: t0(e[2]), scriptscript: t0(e[3]) };
}, htmlBuilder: (r, e) => {
  var t = ha(r, e), a = i0(t, e, false);
  return H0(a);
}, mathmlBuilder: (r, e) => {
  var t = ha(r, e);
  return Z0(t, e);
} });
var mn = (r, e, t, a, n, i, o) => {
  r = k([], [r]);
  var u = t && L0(t), c, d;
  if (e) {
    var f = X(e, a.havingStyle(n.sup()), a);
    d = { elem: f, kern: Math.max(a.fontMetrics().bigOpSpacing1, a.fontMetrics().bigOpSpacing3 - f.depth) };
  }
  if (t) {
    var g = X(t, a.havingStyle(n.sub()), a);
    c = { elem: g, kern: Math.max(a.fontMetrics().bigOpSpacing2, a.fontMetrics().bigOpSpacing4 - g.height) };
  }
  var x;
  if (d && c) {
    var y = a.fontMetrics().bigOpSpacing5 + c.elem.height + c.elem.depth + c.kern + r.depth + o;
    x = V({ positionType: "bottom", positionData: y, children: [{ type: "kern", size: a.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: c.elem, marginLeft: T(-i) }, { type: "kern", size: c.kern }, { type: "elem", elem: r }, { type: "kern", size: d.kern }, { type: "elem", elem: d.elem, marginLeft: T(i) }, { type: "kern", size: a.fontMetrics().bigOpSpacing5 }] });
  } else if (c) {
    var S = r.height - o;
    x = V({ positionType: "top", positionData: S, children: [{ type: "kern", size: a.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: c.elem, marginLeft: T(-i) }, { type: "kern", size: c.kern }, { type: "elem", elem: r }] });
  } else if (d) {
    var M = r.depth + o;
    x = V({ positionType: "bottom", positionData: M, children: [{ type: "elem", elem: r }, { type: "kern", size: d.kern }, { type: "elem", elem: d.elem, marginLeft: T(i) }, { type: "kern", size: a.fontMetrics().bigOpSpacing5 }] });
  } else return r;
  var C = [x];
  if (c && i !== 0 && !u) {
    var D = k(["mspace"], [], a);
    D.style.marginRight = T(i), C.unshift(D);
  }
  return k(["mop", "op-limits"], C, a);
}, dn = /* @__PURE__ */ new Set(["\\smallint"]), pn = (r, e) => {
  var t, a, n = false, i;
  r.type === "supsub" ? (t = r.sup, a = r.sub, i = $(r.base, "op"), n = true) : i = $(r, "op");
  var o = e.style, u = false;
  o.size === L.DISPLAY.size && i.symbol && !dn.has(i.name) && (u = true);
  var c, d;
  if (i.symbol) {
    var f = u ? "Size2-Regular" : "Size1-Regular", g = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (g = i.name.slice(1), i.name = g === "oiint" ? "\\iint" : "\\iiint"), c = u0(i.name, f, "math", e, ["mop", "op-symbol", u ? "large-op" : "small-op"]), d = c.italic, g.length > 0) {
      var x = Pa(g + "Size" + (u ? "2" : "1"), e);
      c = V({ positionType: "individualShift", children: [{ type: "elem", elem: c, shift: 0 }, { type: "elem", elem: x, shift: u ? 0.08 : 0 }] }), i.name = "\\" + g, c.classes.unshift("mop"), c.italic = d;
    }
  } else if (i.body) {
    var y = i0(i.body, e, true);
    y.length === 1 && y[0] instanceof v0 ? (c = y[0], c.classes[0] = "mop") : c = k(["mop"], y, e);
  } else {
    for (var S = [], M = 1; M < i.name.length; M++) S.push(cr(i.name[M], i.mode, e));
    c = k(["mop"], S, e);
  }
  var C = 0, D = 0;
  if ((c instanceof v0 || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift) {
    var q;
    C = (c.height - c.depth) / 2 - e.fontMetrics().axisHeight, D = (q = c.italic) != null ? q : 0;
  }
  return n ? mn(c, t, a, e, o, D, C) : (C && (c.style.position = "relative", c.style.top = T(C)), c);
}, as = (r, e) => {
  var t;
  if (r.symbol) t = new A("mo", [y0(r.name, r.mode)]), dn.has(r.name) && t.setAttribute("largeop", "false");
  else if (r.body) t = new A("mo", b0(r.body, e));
  else {
    t = new A("mi", [new r0(r.name.slice(1))]);
    var a = new A("mo", [y0("\u2061", "text")]);
    r.parentIsSupSub ? t = new A("mrow", [t, a]) : t = Va([t, a]);
  }
  return t;
}, ns = { "\u220F": "\\prod", "\u2210": "\\coprod", "\u2211": "\\sum", "\u22C0": "\\bigwedge", "\u22C1": "\\bigvee", "\u22C2": "\\bigcap", "\u22C3": "\\bigcup", "\u2A00": "\\bigodot", "\u2A01": "\\bigoplus", "\u2A02": "\\bigotimes", "\u2A04": "\\biguplus", "\u2A06": "\\bigsqcup" };
B({ type: "op", names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220F", "\u2210", "\u2211", "\u22C0", "\u22C1", "\u22C2", "\u22C3", "\u2A00", "\u2A01", "\u2A02", "\u2A04", "\u2A06"], numArgs: 0, handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = a;
  return n.length === 1 && (n = ns[n]), { type: "op", mode: t.mode, limits: true, parentIsSupSub: false, symbol: true, name: n };
}, htmlBuilder: pn, mathmlBuilder: as });
B({ type: "op", names: ["\\mathop"], numArgs: 1, primitive: true, handler: (r, e) => {
  var { parser: t } = r, a = e[0];
  return { type: "op", mode: t.mode, limits: false, parentIsSupSub: false, symbol: false, body: t0(a) };
} });
var is = { "\u222B": "\\int", "\u222C": "\\iint", "\u222D": "\\iiint", "\u222E": "\\oint", "\u222F": "\\oiint", "\u2230": "\\oiiint" };
B({ type: "op", names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], numArgs: 0, handler(r) {
  var { parser: e, funcName: t } = r;
  return { type: "op", mode: e.mode, limits: false, parentIsSupSub: false, symbol: false, name: t };
} });
B({ type: "op", names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"], numArgs: 0, handler(r) {
  var { parser: e, funcName: t } = r;
  return { type: "op", mode: e.mode, limits: true, parentIsSupSub: false, symbol: false, name: t };
} });
B({ type: "op", names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222B", "\u222C", "\u222D", "\u222E", "\u222F", "\u2230"], numArgs: 0, allowedInArgument: true, handler(r) {
  var { parser: e, funcName: t } = r, a = t;
  return a.length === 1 && (a = is[a]), { type: "op", mode: e.mode, limits: false, parentIsSupSub: false, symbol: true, name: a };
} });
var fn = (r, e) => {
  var t, a, n = false, i;
  r.type === "supsub" ? (t = r.sup, a = r.sub, i = $(r.base, "operatorname"), n = true) : i = $(r, "operatorname");
  var o;
  if (i.body.length > 0) {
    for (var u = i.body.map((g) => {
      var x = "text" in g ? g.text : void 0;
      return typeof x == "string" ? { type: "textord", mode: g.mode, text: x } : g;
    }), c = i0(u, e.withFont("mathrm"), true), d = 0; d < c.length; d++) {
      var f = c[d];
      f instanceof v0 && (f.text = f.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    o = k(["mop"], c, e);
  } else o = k(["mop"], [], e);
  return n ? mn(o, t, a, e, e.style, 0, 0) : o;
}, ss = (r, e) => {
  for (var t = b0(r.body, e.withFont("mathrm")), a = true, n = 0; n < t.length; n++) {
    var i = t[n];
    if (!(i instanceof Xa)) if (i instanceof A) switch (i.type) {
      case "mi":
      case "mn":
      case "mspace":
      case "mtext":
        break;
      case "mo": {
        var o = i.children[0];
        i.children.length === 1 && o instanceof r0 ? o.text = o.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : a = false;
        break;
      }
      default:
        a = false;
    }
    else a = false;
  }
  if (a) {
    var u = t.map((f) => f.toText()).join("");
    t = [new r0(u)];
  }
  var c = new A("mi", t);
  c.setAttribute("mathvariant", "normal");
  var d = new A("mo", [y0("\u2061", "text")]);
  return r.parentIsSupSub ? new A("mrow", [c, d]) : Va([c, d]);
};
B({ type: "operatorname", names: ["\\operatorname@", "\\operatornamewithlimits"], numArgs: 1, handler: (r, e) => {
  var { parser: t, funcName: a } = r, n = e[0];
  return { type: "operatorname", mode: t.mode, body: t0(n), alwaysHandleSupSub: a === "\\operatornamewithlimits", limits: false, parentIsSupSub: false };
}, htmlBuilder: fn, mathmlBuilder: ss });
m("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
ae({ type: "ordgroup", htmlBuilder(r, e) {
  return r.semisimple ? H0(i0(r.body, e, false)) : k(["mord"], i0(r.body, e, true), e);
}, mathmlBuilder(r, e) {
  return Z0(r.body, e, true);
} });
B({ type: "overline", names: ["\\overline"], numArgs: 1, handler(r, e) {
  var { parser: t } = r, a = e[0];
  return { type: "overline", mode: t.mode, body: a };
}, htmlBuilder(r, e) {
  var t = X(r.body, e.havingCrampedStyle()), a = me("overline-line", e), n = e.fontMetrics().defaultRuleThickness, i = V({ positionType: "firstBaseline", children: [{ type: "elem", elem: t }, { type: "kern", size: 3 * n }, { type: "elem", elem: a }, { type: "kern", size: n }] });
  return k(["mord", "overline"], [i], e);
}, mathmlBuilder(r, e) {
  var t = new A("mo", [new r0("\u203E")]);
  t.setAttribute("stretchy", "true");
  var a = new A("mover", [j(r.body, e), t]);
  return a.setAttribute("accent", "true"), a;
} });
B({ type: "phantom", names: ["\\phantom"], numArgs: 1, allowedInText: true, handler: (r, e) => {
  var { parser: t } = r, a = e[0];
  return { type: "phantom", mode: t.mode, body: t0(a) };
}, htmlBuilder: (r, e) => {
  var t = i0(r.body, e.withPhantom(), false);
  return H0(t);
}, mathmlBuilder: (r, e) => {
  var t = b0(r.body, e);
  return new A("mphantom", t);
} });
m("\\hphantom", "\\smash{\\phantom{#1}}");
B({ type: "vphantom", names: ["\\vphantom"], numArgs: 1, allowedInText: true, handler: (r, e) => {
  var { parser: t } = r, a = e[0];
  return { type: "vphantom", mode: t.mode, body: a };
}, htmlBuilder: (r, e) => {
  var t = k(["inner"], [X(r.body, e.withPhantom())]), a = k(["fix"], []);
  return k(["mord", "rlap"], [t, a], e);
}, mathmlBuilder: (r, e) => {
  var t = b0(t0(r.body), e), a = new A("mphantom", t), n = new A("mpadded", [a]);
  return n.setAttribute("width", "0px"), n;
} });
B({ type: "raisebox", names: ["\\raisebox"], numArgs: 2, argTypes: ["size", "hbox"], allowedInText: true, handler(r, e) {
  var { parser: t } = r, a = $(e[0], "size").value, n = e[1];
  return { type: "raisebox", mode: t.mode, dy: a, body: n };
}, htmlBuilder(r, e) {
  var t = X(r.body, e), a = J(r.dy, e);
  return V({ positionType: "shift", positionData: -a, children: [{ type: "elem", elem: t }] });
}, mathmlBuilder(r, e) {
  var t = new A("mpadded", [j(r.body, e)]), a = r.dy.number + r.dy.unit;
  return t.setAttribute("voffset", a), t;
} });
B({ type: "internal", names: ["\\relax"], numArgs: 0, allowedInText: true, allowedInArgument: true, handler(r) {
  var { parser: e } = r;
  return { type: "internal", mode: e.mode };
} });
B({ type: "rule", names: ["\\rule"], numArgs: 2, numOptionalArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["size", "size", "size"], handler(r, e, t) {
  var { parser: a } = r, n = t[0], i = $(e[0], "size"), o = $(e[1], "size");
  return { type: "rule", mode: a.mode, shift: n && $(n, "size").value, width: i.value, height: o.value };
}, htmlBuilder(r, e) {
  var t = k(["mord", "rule"], [], e), a = J(r.width, e), n = J(r.height, e), i = r.shift ? J(r.shift, e) : 0;
  return t.style.borderRightWidth = T(a), t.style.borderTopWidth = T(n), t.style.bottom = T(i), t.width = a, t.height = n + i, t.depth = -i, t.maxFontSize = n * 1.125 * e.sizeMultiplier, t;
}, mathmlBuilder(r, e) {
  var t = J(r.width, e), a = J(r.height, e), n = r.shift ? J(r.shift, e) : 0, i = e.color && e.getColor() || "black", o = new A("mspace");
  o.setAttribute("mathbackground", i), o.setAttribute("width", T(t)), o.setAttribute("height", T(a));
  var u = new A("mpadded", [o]);
  return n >= 0 ? u.setAttribute("height", T(n)) : (u.setAttribute("height", T(n)), u.setAttribute("depth", T(-n))), u.setAttribute("voffset", T(n)), u;
} });
function vn(r, e, t) {
  for (var a = i0(r, e, false), n = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < a.length; i++) {
    var o = a[i].classes.indexOf("sizing");
    o < 0 ? Array.prototype.push.apply(a[i].classes, e.sizingClasses(t)) : a[i].classes[o + 1] === "reset-size" + e.size && (a[i].classes[o + 1] = "reset-size" + t.size), a[i].height *= n, a[i].depth *= n;
  }
  return H0(a);
}
var ca = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], ls = (r, e) => {
  var t = e.havingSize(r.size);
  return vn(r.body, t, e);
};
B({ type: "sizing", names: ca, numArgs: 0, allowedInText: true, handler: (r, e) => {
  var { breakOnTokenText: t, funcName: a, parser: n } = r, i = n.parseExpression(false, t);
  return { type: "sizing", mode: n.mode, size: ca.indexOf(a) + 1, body: i };
}, htmlBuilder: ls, mathmlBuilder: (r, e) => {
  var t = e.havingSize(r.size), a = b0(r.body, t), n = new A("mstyle", a);
  return n.setAttribute("mathsize", T(t.sizeMultiplier)), n;
} });
B({ type: "smash", names: ["\\smash"], numArgs: 1, numOptionalArgs: 1, allowedInText: true, handler: (r, e, t) => {
  var { parser: a } = r, n = false, i = false, o = t[0] && $(t[0], "ordgroup");
  if (o) for (var u, c = 0; c < o.body.length; ++c) {
    var d = o.body[c];
    if (u = st(d).text, u === "t") n = true;
    else if (u === "b") i = true;
    else {
      n = false, i = false;
      break;
    }
  }
  else n = true, i = true;
  var f = e[0];
  return { type: "smash", mode: a.mode, body: f, smashHeight: n, smashDepth: i };
}, htmlBuilder: (r, e) => {
  var t = k([], [X(r.body, e)]);
  if (!r.smashHeight && !r.smashDepth) return t;
  if (r.smashHeight && (t.height = 0), r.smashDepth && (t.depth = 0), r.smashHeight && r.smashDepth) return k(["mord", "smash"], [t], e);
  if (t.children) for (var a = 0; a < t.children.length; a++) r.smashHeight && (t.children[a].height = 0), r.smashDepth && (t.children[a].depth = 0);
  var n = V({ positionType: "firstBaseline", children: [{ type: "elem", elem: t }] });
  return k(["mord"], [n], e);
}, mathmlBuilder: (r, e) => {
  var t = new A("mpadded", [j(r.body, e)]);
  return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
} });
B({ type: "sqrt", names: ["\\sqrt"], numArgs: 1, numOptionalArgs: 1, handler(r, e, t) {
  var { parser: a } = r, n = t[0], i = e[0];
  return { type: "sqrt", mode: a.mode, body: i, index: n };
}, htmlBuilder(r, e) {
  var t = X(r.body, e.havingCrampedStyle());
  t.height === 0 && (t.height = e.fontMetrics().xHeight), t = de(t, e);
  var a = e.fontMetrics(), n = a.defaultRuleThickness, i = n;
  e.style.id < L.TEXT.id && (i = e.fontMetrics().xHeight);
  var o = n + i / 4, u = t.height + t.depth + o + n, { span: c, ruleWidth: d, advanceWidth: f } = Gi(u, e), g = c.height - d;
  g > t.height + t.depth + o && (o = (o + g - t.height - t.depth) / 2);
  var x = c.height - t.height - o - d;
  t.style.paddingLeft = T(f);
  var y = V({ positionType: "firstBaseline", children: [{ type: "elem", elem: t, wrapperClasses: ["svg-align"] }, { type: "kern", size: -(t.height + x) }, { type: "elem", elem: c }, { type: "kern", size: d }] });
  if (r.index) {
    var S = e.havingStyle(L.SCRIPTSCRIPT), M = X(r.index, S, e), C = 0.6 * (y.height - y.depth), D = V({ positionType: "shift", positionData: -C, children: [{ type: "elem", elem: M }] }), q = k(["root"], [D]);
    return k(["mord", "sqrt"], [q, y], e);
  } else return k(["mord", "sqrt"], [y], e);
}, mathmlBuilder(r, e) {
  var { body: t, index: a } = r;
  return a ? new A("mroot", [j(t, e), j(a, e)]) : new A("msqrt", [j(t, e)]);
} });
var Kt = { display: L.DISPLAY, text: L.TEXT, script: L.SCRIPT, scriptscript: L.SCRIPTSCRIPT };
function os(r) {
  return r in Kt;
}
B({ type: "styling", names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], numArgs: 0, allowedInText: true, primitive: true, handler(r, e) {
  var { breakOnTokenText: t, funcName: a, parser: n } = r, i = n.parseExpression(true, t), o = a.slice(1, a.length - 5);
  if (!os(o)) throw new Error("Unknown style: " + o);
  return { type: "styling", mode: n.mode, style: o, body: i };
}, htmlBuilder(r, e) {
  var t = Kt[r.style], a = e.havingStyle(t);
  return r.resetFont && (a = a.withFont("")), vn(r.body, a, e);
}, mathmlBuilder(r, e) {
  var t = Kt[r.style], a = e.havingStyle(t);
  r.resetFont && (a = a.withFont(""));
  var n = b0(r.body, a), i = new A("mstyle", n), o = { display: ["0", "true"], text: ["0", "false"], script: ["1", "false"], scriptscript: ["2", "false"] }, u = o[r.style];
  return i.setAttribute("scriptlevel", u[0]), i.setAttribute("displaystyle", u[1]), i;
} });
var us = function(e, t) {
  var a = e.base;
  if (a) if (a.type === "op") {
    var n = a.limits && (t.style.size === L.DISPLAY.size || a.alwaysHandleSupSub);
    return n ? pn : null;
  } else if (a.type === "operatorname") {
    var i = a.alwaysHandleSupSub && (t.style.size === L.DISPLAY.size || a.limits);
    return i ? fn : null;
  } else {
    if (a.type === "accent") return L0(a.base) ? Za : null;
    if (a.type === "horizBrace") {
      var o = !e.sub;
      return o === a.isOver ? cn : null;
    } else return null;
  }
  else return null;
};
ae({ type: "supsub", htmlBuilder(r, e) {
  var t = us(r, e);
  if (t) return t(r, e);
  var { base: a, sup: n, sub: i } = r, o = X(a, e), u, c, d = e.fontMetrics(), f = 0, g = 0, x = a && L0(a);
  if (n) {
    var y = e.havingStyle(e.style.sup());
    u = X(n, y, e), x || (f = o.height - y.fontMetrics().supDrop * y.sizeMultiplier / e.sizeMultiplier);
  }
  if (i) {
    var S = e.havingStyle(e.style.sub());
    c = X(i, S, e), x || (g = o.depth + S.fontMetrics().subDrop * S.sizeMultiplier / e.sizeMultiplier);
  }
  var M;
  e.style === L.DISPLAY ? M = d.sup1 : e.style.cramped ? M = d.sup3 : M = d.sup2;
  var C = e.sizeMultiplier, D = T(0.5 / d.ptPerEm / C), q = null;
  if (c) {
    var N = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
    if (o instanceof v0 || N) {
      var F;
      q = T(-((F = o.italic) != null ? F : 0));
    }
  }
  var O;
  if (u && c) {
    f = Math.max(f, M, u.depth + 0.25 * d.xHeight), g = Math.max(g, d.sub2);
    var H = d.defaultRuleThickness, G = 4 * H;
    if (f - u.depth - (c.height - g) < G) {
      g = G - (f - u.depth) + c.height;
      var Y = 0.8 * d.xHeight - (f - u.depth);
      Y > 0 && (f += Y, g -= Y);
    }
    var U = [{ type: "elem", elem: c, shift: g, marginRight: D, marginLeft: q }, { type: "elem", elem: u, shift: -f, marginRight: D }];
    O = V({ positionType: "individualShift", children: U });
  } else if (c) {
    g = Math.max(g, d.sub1, c.height - 0.8 * d.xHeight);
    var m0 = [{ type: "elem", elem: c, marginLeft: q, marginRight: D }];
    O = V({ positionType: "shift", positionData: g, children: m0 });
  } else if (u) f = Math.max(f, M, u.depth + 0.25 * d.xHeight), O = V({ positionType: "shift", positionData: -f, children: [{ type: "elem", elem: u, marginRight: D }] });
  else throw new Error("supsub must have either sup or sub.");
  var p0 = Xt(o, "right") || "mord";
  return k([p0], [o, k(["msupsub"], [O])], e);
}, mathmlBuilder(r, e) {
  var t = false, a, n;
  r.base && r.base.type === "horizBrace" && (n = !!r.sup, n === r.base.isOver && (t = true, a = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = true);
  var i = [j(r.base, e)];
  r.sub && i.push(j(r.sub, e)), r.sup && i.push(j(r.sup, e));
  var o;
  if (t) o = a ? "mover" : "munder";
  else if (r.sub) if (r.sup) {
    var d = r.base;
    d && d.type === "op" && d.limits && e.style === L.DISPLAY || d && d.type === "operatorname" && d.alwaysHandleSupSub && (e.style === L.DISPLAY || d.limits) ? o = "munderover" : o = "msubsup";
  } else {
    var c = r.base;
    c && c.type === "op" && c.limits && (e.style === L.DISPLAY || c.alwaysHandleSupSub) || c && c.type === "operatorname" && c.alwaysHandleSupSub && (c.limits || e.style === L.DISPLAY) ? o = "munder" : o = "msub";
  }
  else {
    var u = r.base;
    u && u.type === "op" && u.limits && (e.style === L.DISPLAY || u.alwaysHandleSupSub) || u && u.type === "operatorname" && u.alwaysHandleSupSub && (u.limits || e.style === L.DISPLAY) ? o = "mover" : o = "msup";
  }
  return new A(o, i);
} });
ae({ type: "atom", htmlBuilder(r, e) {
  return cr(r.text, r.mode, e, ["m" + r.family]);
}, mathmlBuilder(r, e) {
  var t = new A("mo", [y0(r.text, r.mode)]);
  if (r.family === "bin") {
    var a = pr(r, e);
    a === "bold-italic" && t.setAttribute("mathvariant", a);
  } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
  return t;
} });
var gn = { mi: "italic", mn: "normal", mtext: "normal" };
ae({ type: "mathord", htmlBuilder(r, e) {
  return at(r, e);
}, mathmlBuilder(r, e) {
  var t = new A("mi", [y0(r.text, r.mode, e)]), a = pr(r, e) || "italic";
  return a !== gn[t.type] && t.setAttribute("mathvariant", a), t;
} });
ae({ type: "textord", htmlBuilder(r, e) {
  return at(r, e);
}, mathmlBuilder(r, e) {
  var t = y0(r.text, r.mode, e), a = pr(r, e) || "normal", n;
  return r.mode === "text" ? n = new A("mtext", [t]) : /[0-9]/.test(r.text) ? n = new A("mn", [t]) : r.text === "\\prime" ? n = new A("mo", [t]) : n = new A("mi", [t]), a !== gn[n.type] && n.setAttribute("mathvariant", a), n;
} });
var Mt = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" }, Ct = { " ": {}, "\\ ": {}, "~": { className: "nobreak" }, "\\space": {}, "\\nobreakspace": { className: "nobreak" } };
ae({ type: "spacing", htmlBuilder(r, e) {
  if (Ct.hasOwnProperty(r.text)) {
    var t = Ct[r.text].className || "";
    if (r.mode === "text") {
      var a = at(r, e);
      return a.classes.push(t), a;
    } else return k(["mspace", t], [cr(r.text, r.mode, e)], e);
  } else {
    if (Mt.hasOwnProperty(r.text)) return k(["mspace", Mt[r.text]], [], e);
    throw new z('Unknown type of space "' + r.text + '"');
  }
}, mathmlBuilder(r, e) {
  var t;
  if (Ct.hasOwnProperty(r.text)) t = new A("mtext", [new r0("\xA0")]);
  else {
    if (Mt.hasOwnProperty(r.text)) return new A("mspace");
    throw new z('Unknown type of space "' + r.text + '"');
  }
  return t;
} });
var ma = () => {
  var r = new A("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
ae({ type: "tag", mathmlBuilder(r, e) {
  var t = new A("mtable", [new A("mtr", [ma(), new A("mtd", [Z0(r.body, e)]), ma(), new A("mtd", [Z0(r.tag, e)])])]);
  return t.setAttribute("width", "100%"), t;
} });
var da = { "\\text": void 0, "\\textrm": "textrm", "\\textsf": "textsf", "\\texttt": "texttt", "\\textnormal": "textrm" }, pa = { "\\textbf": "textbf", "\\textmd": "textmd" }, hs = { "\\textit": "textit", "\\textup": "textup" }, fa = (r, e) => {
  var t = r.font;
  if (t) {
    if (da[t]) return e.withTextFontFamily(da[t]);
    if (pa[t]) return e.withTextFontWeight(pa[t]);
    if (t === "\\emph") return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(hs[t]);
};
B({ type: "text", names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup", "\\emph"], numArgs: 1, argTypes: ["text"], allowedInArgument: true, allowedInText: true, handler(r, e) {
  var { parser: t, funcName: a } = r, n = e[0];
  return { type: "text", mode: t.mode, body: t0(n), font: a };
}, htmlBuilder(r, e) {
  var t = fa(r, e), a = i0(r.body, t, true);
  return k(["mord", "text"], a, t);
}, mathmlBuilder(r, e) {
  var t = fa(r, e);
  return Z0(r.body, t);
} });
B({ type: "underline", names: ["\\underline"], numArgs: 1, allowedInText: true, handler(r, e) {
  var { parser: t } = r;
  return { type: "underline", mode: t.mode, body: e[0] };
}, htmlBuilder(r, e) {
  var t = X(r.body, e), a = me("underline-line", e), n = e.fontMetrics().defaultRuleThickness, i = V({ positionType: "top", positionData: t.height, children: [{ type: "kern", size: n }, { type: "elem", elem: a }, { type: "kern", size: 3 * n }, { type: "elem", elem: t }] });
  return k(["mord", "underline"], [i], e);
}, mathmlBuilder(r, e) {
  var t = new A("mo", [new r0("\u203E")]);
  t.setAttribute("stretchy", "true");
  var a = new A("munder", [j(r.body, e), t]);
  return a.setAttribute("accentunder", "true"), a;
} });
B({ type: "vcenter", names: ["\\vcenter"], numArgs: 1, argTypes: ["original"], allowedInText: false, handler(r, e) {
  var { parser: t } = r;
  return { type: "vcenter", mode: t.mode, body: e[0] };
}, htmlBuilder(r, e) {
  var t = X(r.body, e), a = e.fontMetrics().axisHeight, n = 0.5 * (t.height - a - (t.depth + a));
  return V({ positionType: "shift", positionData: n, children: [{ type: "elem", elem: t }] });
}, mathmlBuilder(r, e) {
  var t = new A("mpadded", [j(r.body, e)], ["vcenter"]);
  return new A("mrow", [t]);
} });
B({ type: "verb", names: ["\\verb"], numArgs: 0, allowedInText: true, handler(r, e, t) {
  throw new z("\\verb ended by end of line instead of matching delimiter");
}, htmlBuilder(r, e) {
  for (var t = va(r), a = [], n = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
    var o = t[i];
    o === "~" && (o = "\\textasciitilde"), a.push(u0(o, "Typewriter-Regular", r.mode, n, ["mord", "texttt"]));
  }
  return k(["mord", "text"].concat(n.sizingClasses(e)), Ha(a), n);
}, mathmlBuilder(r, e) {
  var t = new r0(va(r)), a = new A("mtext", [t]);
  return a.setAttribute("mathvariant", "monospace"), a;
} });
var va = (r) => r.body.replace(/ /g, r.star ? "\u2423" : "\xA0"), X0 = Ga, bn = `[ \r
	]`, cs = "\\\\[a-zA-Z@]+", ms = "\\\\[^\uD800-\uDFFF]", ds = "(" + cs + ")" + bn + "*", ps = `\\\\(
|[ \r	]+
?)[ \r	]*`, Qt = "[\u0300-\u036F]", fs = new RegExp(Qt + "+$"), vs = "(" + bn + "+)|" + (ps + "|") + "([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + (Qt + "*") + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (Qt + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + ds) + ("|" + ms + ")");
class ga {
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(vs, "g"), this.catcodes = { "%": 14, "~": 13 };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length) return new f0("EOF", new d0(this, t, t));
    var a = this.tokenRegex.exec(e);
    if (a === null || a.index !== t) throw new z("Unexpected character: '" + e[t] + "'", new f0(e[t], new d0(this, t, t + 1)));
    var n = a[6] || a[3] || (a[2] ? "\\ " : " ");
    if (this.catcodes[n] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new f0(n, new d0(this, t, this.tokenRegex.lastIndex));
  }
}
class gs {
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
  }
  beginGroup() {
    this.undefStack.push({});
  }
  endGroup() {
    if (this.undefStack.length === 0) throw new z("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var t in e) e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  endGroups() {
    for (; this.undefStack.length > 0; ) this.endGroup();
  }
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  set(e, t, a) {
    if (a === void 0 && (a = false), a) {
      for (var n = 0; n < this.undefStack.length; n++) delete this.undefStack[n][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var bs = on;
m("\\noexpand", function(r) {
  var e = r.popToken();
  return r.isExpandable(e.text) && (e.noexpand = true, e.treatAsRelax = true), { tokens: [e], numArgs: 0 };
});
m("\\expandafter", function(r) {
  var e = r.popToken();
  return r.expandOnce(true), { tokens: [e], numArgs: 0 };
});
m("\\@firstoftwo", function(r) {
  var e = r.consumeArgs(2);
  return { tokens: e[0], numArgs: 0 };
});
m("\\@secondoftwo", function(r) {
  var e = r.consumeArgs(2);
  return { tokens: e[1], numArgs: 0 };
});
m("\\@ifnextchar", function(r) {
  var e = r.consumeArgs(3);
  r.consumeSpaces();
  var t = r.future();
  return e[0].length === 1 && e[0][0].text === t.text ? { tokens: e[1], numArgs: 0 } : { tokens: e[2], numArgs: 0 };
});
m("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
m("\\TextOrMath", function(r) {
  var e = r.consumeArgs(2);
  return r.mode === "text" ? { tokens: e[0], numArgs: 0 } : { tokens: e[1], numArgs: 0 };
});
var ba = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
m("\\char", function(r) {
  var e = r.popToken(), t, a = 0;
  if (e.text === "'") t = 8, e = r.popToken();
  else if (e.text === '"') t = 16, e = r.popToken();
  else if (e.text === "`") if (e = r.popToken(), e.text[0] === "\\") a = e.text.charCodeAt(1);
  else {
    if (e.text === "EOF") throw new z("\\char` missing argument");
    a = e.text.charCodeAt(0);
  }
  else t = 10;
  if (t) {
    if (a = ba[e.text], a == null || a >= t) throw new z("Invalid base-" + t + " digit " + e.text);
    for (var n; (n = ba[r.future().text]) != null && n < t; ) a *= t, a += n, r.popToken();
  }
  return "\\@char{" + a + "}";
});
var br = (r, e, t, a) => {
  var n = r.consumeArg().tokens;
  if (n.length !== 1) throw new z("\\newcommand's first argument must be a macro name");
  var i = n[0].text, o = r.isDefined(i);
  if (o && !e) throw new z("\\newcommand{" + i + "} attempting to redefine " + (i + "; use \\renewcommand"));
  if (!o && !t) throw new z("\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand");
  var u = 0;
  if (n = r.consumeArg().tokens, n.length === 1 && n[0].text === "[") {
    for (var c = "", d = r.expandNextToken(); d.text !== "]" && d.text !== "EOF"; ) c += d.text, d = r.expandNextToken();
    if (!c.match(/^\s*[0-9]+\s*$/)) throw new z("Invalid number of arguments: " + c);
    u = parseInt(c), n = r.consumeArg().tokens;
  }
  return o && a || r.macros.set(i, { tokens: n, numArgs: u }), "";
};
m("\\newcommand", (r) => br(r, false, true, false));
m("\\renewcommand", (r) => br(r, true, false, false));
m("\\providecommand", (r) => br(r, true, true, true));
m("\\message", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
m("\\errmessage", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
m("\\show", (r) => {
  var e = r.popToken(), t = e.text;
  return console.log(e, r.macros.get(t), X0[t], Z.math[t], Z.text[t]), "";
});
m("\\bgroup", "{");
m("\\egroup", "}");
m("~", "\\nobreakspace");
m("\\lq", "`");
m("\\rq", "'");
m("\\aa", "\\r a");
m("\\AA", "\\r A");
m("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xA9}");
m("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
m("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}");
m("\u212C", "\\mathscr{B}");
m("\u2130", "\\mathscr{E}");
m("\u2131", "\\mathscr{F}");
m("\u210B", "\\mathscr{H}");
m("\u2110", "\\mathscr{I}");
m("\u2112", "\\mathscr{L}");
m("\u2133", "\\mathscr{M}");
m("\u211B", "\\mathscr{R}");
m("\u212D", "\\mathfrak{C}");
m("\u210C", "\\mathfrak{H}");
m("\u2128", "\\mathfrak{Z}");
m("\\Bbbk", "\\Bbb{k}");
m("\\llap", "\\mathllap{\\textrm{#1}}");
m("\\rlap", "\\mathrlap{\\textrm{#1}}");
m("\\clap", "\\mathclap{\\textrm{#1}}");
m("\\mathstrut", "\\vphantom{(}");
m("\\underbar", "\\underline{\\text{#1}}");
m("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');
m("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}");
m("\\ne", "\\neq");
m("\u2260", "\\neq");
m("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}");
m("\u2209", "\\notin");
m("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}");
m("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}");
m("\u225A", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}");
m("\u225B", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}");
m("\u225D", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}");
m("\u225E", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}");
m("\u225F", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}");
m("\u27C2", "\\perp");
m("\u203C", "\\mathclose{!\\mkern-0.8mu!}");
m("\u220C", "\\notni");
m("\u231C", "\\ulcorner");
m("\u231D", "\\urcorner");
m("\u231E", "\\llcorner");
m("\u231F", "\\lrcorner");
m("\xA9", "\\copyright");
m("\xAE", "\\textregistered");
m("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
m("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
m("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
m("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
m("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
m("\u22EE", "\\vdots");
m("\\varGamma", "\\mathit{\\Gamma}");
m("\\varDelta", "\\mathit{\\Delta}");
m("\\varTheta", "\\mathit{\\Theta}");
m("\\varLambda", "\\mathit{\\Lambda}");
m("\\varXi", "\\mathit{\\Xi}");
m("\\varPi", "\\mathit{\\Pi}");
m("\\varSigma", "\\mathit{\\Sigma}");
m("\\varUpsilon", "\\mathit{\\Upsilon}");
m("\\varPhi", "\\mathit{\\Phi}");
m("\\varPsi", "\\mathit{\\Psi}");
m("\\varOmega", "\\mathit{\\Omega}");
m("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
m("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
m("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
m("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
m("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
m("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
m("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
m("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var xa = { ",": "\\dotsc", "\\not": "\\dotsb", "+": "\\dotsb", "=": "\\dotsb", "<": "\\dotsb", ">": "\\dotsb", "-": "\\dotsb", "*": "\\dotsb", ":": "\\dotsb", "\\DOTSB": "\\dotsb", "\\coprod": "\\dotsb", "\\bigvee": "\\dotsb", "\\bigwedge": "\\dotsb", "\\biguplus": "\\dotsb", "\\bigcap": "\\dotsb", "\\bigcup": "\\dotsb", "\\prod": "\\dotsb", "\\sum": "\\dotsb", "\\bigotimes": "\\dotsb", "\\bigoplus": "\\dotsb", "\\bigodot": "\\dotsb", "\\bigsqcup": "\\dotsb", "\\And": "\\dotsb", "\\longrightarrow": "\\dotsb", "\\Longrightarrow": "\\dotsb", "\\longleftarrow": "\\dotsb", "\\Longleftarrow": "\\dotsb", "\\longleftrightarrow": "\\dotsb", "\\Longleftrightarrow": "\\dotsb", "\\mapsto": "\\dotsb", "\\longmapsto": "\\dotsb", "\\hookrightarrow": "\\dotsb", "\\doteq": "\\dotsb", "\\mathbin": "\\dotsb", "\\mathrel": "\\dotsb", "\\relbar": "\\dotsb", "\\Relbar": "\\dotsb", "\\xrightarrow": "\\dotsb", "\\xleftarrow": "\\dotsb", "\\DOTSI": "\\dotsi", "\\int": "\\dotsi", "\\oint": "\\dotsi", "\\iint": "\\dotsi", "\\iiint": "\\dotsi", "\\iiiint": "\\dotsi", "\\idotsint": "\\dotsi", "\\DOTSX": "\\dotsx" }, xs = /* @__PURE__ */ new Set(["bin", "rel"]);
m("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in xa ? e = xa[t] : (t.slice(0, 4) === "\\not" || t in Z.math && xs.has(Z.math[t].group)) && (e = "\\dotsb"), e;
});
var xr = { ")": true, "]": true, "\\rbrack": true, "\\}": true, "\\rbrace": true, "\\rangle": true, "\\rceil": true, "\\rfloor": true, "\\rgroup": true, "\\rmoustache": true, "\\right": true, "\\bigr": true, "\\biggr": true, "\\Bigr": true, "\\Biggr": true, $: true, ";": true, ".": true, ",": true };
m("\\dotso", function(r) {
  var e = r.future().text;
  return e in xr ? "\\ldots\\," : "\\ldots";
});
m("\\dotsc", function(r) {
  var e = r.future().text;
  return e in xr && e !== "," ? "\\ldots\\," : "\\ldots";
});
m("\\cdots", function(r) {
  var e = r.future().text;
  return e in xr ? "\\@cdots\\," : "\\@cdots";
});
m("\\dotsb", "\\cdots");
m("\\dotsm", "\\cdots");
m("\\dotsi", "\\!\\cdots");
m("\\dotsx", "\\ldots\\,");
m("\\DOTSI", "\\relax");
m("\\DOTSB", "\\relax");
m("\\DOTSX", "\\relax");
m("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
m("\\,", "\\tmspace+{3mu}{.1667em}");
m("\\thinspace", "\\,");
m("\\>", "\\mskip{4mu}");
m("\\:", "\\tmspace+{4mu}{.2222em}");
m("\\medspace", "\\:");
m("\\;", "\\tmspace+{5mu}{.2777em}");
m("\\thickspace", "\\;");
m("\\!", "\\tmspace-{3mu}{.1667em}");
m("\\negthinspace", "\\!");
m("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
m("\\negthickspace", "\\tmspace-{5mu}{.277em}");
m("\\enspace", "\\kern.5em ");
m("\\enskip", "\\hskip.5em\\relax");
m("\\quad", "\\hskip1em\\relax");
m("\\qquad", "\\hskip2em\\relax");
m("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
m("\\tag@paren", "\\tag@literal{({#1})}");
m("\\tag@literal", (r) => {
  if (r.macros.get("\\df@tag")) throw new z("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
m("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
m("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
m("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
m("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
m("\\newline", "\\\\\\relax");
m("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var xn = T(C0["Main-Regular"][84][1] - 0.7 * C0["Main-Regular"][65][1]);
m("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + xn + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
m("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + xn + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
m("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
m("\\@hspace", "\\hskip #1\\relax");
m("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
m("\\ordinarycolon", ":");
m("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
m("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
m("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
m("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
m("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
m("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
m("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
m("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
m("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
m("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
m("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
m("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
m("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
m("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
m("\u2237", "\\dblcolon");
m("\u2239", "\\eqcolon");
m("\u2254", "\\coloneqq");
m("\u2255", "\\eqqcolon");
m("\u2A74", "\\Coloneqq");
m("\\ratio", "\\vcentcolon");
m("\\coloncolon", "\\dblcolon");
m("\\colonequals", "\\coloneqq");
m("\\coloncolonequals", "\\Coloneqq");
m("\\equalscolon", "\\eqqcolon");
m("\\equalscoloncolon", "\\Eqqcolon");
m("\\colonminus", "\\coloneq");
m("\\coloncolonminus", "\\Coloneq");
m("\\minuscolon", "\\eqcolon");
m("\\minuscoloncolon", "\\Eqcolon");
m("\\coloncolonapprox", "\\Colonapprox");
m("\\coloncolonsim", "\\Colonsim");
m("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}");
m("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
m("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
m("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
m("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
m("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
m("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
m("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
m("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
m("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}");
m("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}");
m("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}");
m("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}");
m("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}");
m("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}");
m("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}");
m("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}");
m("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}");
m("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}");
m("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228A}");
m("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2ACB}");
m("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228B}");
m("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2ACC}");
m("\\imath", "\\html@mathml{\\@imath}{\u0131}");
m("\\jmath", "\\html@mathml{\\@jmath}{\u0237}");
m("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}");
m("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}");
m("\u27E6", "\\llbracket");
m("\u27E7", "\\rrbracket");
m("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}");
m("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}");
m("\u2983", "\\lBrace");
m("\u2984", "\\rBrace");
m("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}");
m("\u29B5", "\\minuso");
m("\\darr", "\\downarrow");
m("\\dArr", "\\Downarrow");
m("\\Darr", "\\Downarrow");
m("\\lang", "\\langle");
m("\\rang", "\\rangle");
m("\\uarr", "\\uparrow");
m("\\uArr", "\\Uparrow");
m("\\Uarr", "\\Uparrow");
m("\\N", "\\mathbb{N}");
m("\\R", "\\mathbb{R}");
m("\\Z", "\\mathbb{Z}");
m("\\alef", "\\aleph");
m("\\alefsym", "\\aleph");
m("\\Alpha", "\\mathrm{A}");
m("\\Beta", "\\mathrm{B}");
m("\\bull", "\\bullet");
m("\\Chi", "\\mathrm{X}");
m("\\clubs", "\\clubsuit");
m("\\cnums", "\\mathbb{C}");
m("\\Complex", "\\mathbb{C}");
m("\\Dagger", "\\ddagger");
m("\\diamonds", "\\diamondsuit");
m("\\empty", "\\emptyset");
m("\\Epsilon", "\\mathrm{E}");
m("\\Eta", "\\mathrm{H}");
m("\\exist", "\\exists");
m("\\harr", "\\leftrightarrow");
m("\\hArr", "\\Leftrightarrow");
m("\\Harr", "\\Leftrightarrow");
m("\\hearts", "\\heartsuit");
m("\\image", "\\Im");
m("\\infin", "\\infty");
m("\\Iota", "\\mathrm{I}");
m("\\isin", "\\in");
m("\\Kappa", "\\mathrm{K}");
m("\\larr", "\\leftarrow");
m("\\lArr", "\\Leftarrow");
m("\\Larr", "\\Leftarrow");
m("\\lrarr", "\\leftrightarrow");
m("\\lrArr", "\\Leftrightarrow");
m("\\Lrarr", "\\Leftrightarrow");
m("\\Mu", "\\mathrm{M}");
m("\\natnums", "\\mathbb{N}");
m("\\Nu", "\\mathrm{N}");
m("\\Omicron", "\\mathrm{O}");
m("\\plusmn", "\\pm");
m("\\rarr", "\\rightarrow");
m("\\rArr", "\\Rightarrow");
m("\\Rarr", "\\Rightarrow");
m("\\real", "\\Re");
m("\\reals", "\\mathbb{R}");
m("\\Reals", "\\mathbb{R}");
m("\\Rho", "\\mathrm{P}");
m("\\sdot", "\\cdot");
m("\\sect", "\\S");
m("\\spades", "\\spadesuit");
m("\\sub", "\\subset");
m("\\sube", "\\subseteq");
m("\\supe", "\\supseteq");
m("\\Tau", "\\mathrm{T}");
m("\\thetasym", "\\vartheta");
m("\\weierp", "\\wp");
m("\\Zeta", "\\mathrm{Z}");
m("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
m("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
m("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
m("\\bra", "\\mathinner{\\langle{#1}|}");
m("\\ket", "\\mathinner{|{#1}\\rangle}");
m("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
m("\\Bra", "\\left\\langle#1\\right|");
m("\\Ket", "\\left|#1\\right\\rangle");
var yn = (r) => (e) => {
  var t = e.consumeArg().tokens, a = e.consumeArg().tokens, n = e.consumeArg().tokens, i = e.consumeArg().tokens, o = e.macros.get("|"), u = e.macros.get("\\|");
  e.macros.beginGroup();
  var c = (g) => (x) => {
    r && (x.macros.set("|", o), n.length && x.macros.set("\\|", u));
    var y = g;
    if (!g && n.length) {
      var S = x.future();
      S.text === "|" && (x.popToken(), y = true);
    }
    return { tokens: y ? n : a, numArgs: 0 };
  };
  e.macros.set("|", c(false)), n.length && e.macros.set("\\|", c(true));
  var d = e.consumeArg().tokens, f = e.expandTokens([...i, ...d, ...t]);
  return e.macros.endGroup(), { tokens: f.reverse(), numArgs: 0 };
};
m("\\bra@ket", yn(false));
m("\\bra@set", yn(true));
m("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
m("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
m("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
m("\\angln", "{\\angl n}");
m("\\blue", "\\textcolor{##6495ed}{#1}");
m("\\orange", "\\textcolor{##ffa500}{#1}");
m("\\pink", "\\textcolor{##ff00af}{#1}");
m("\\red", "\\textcolor{##df0030}{#1}");
m("\\green", "\\textcolor{##28ae7b}{#1}");
m("\\gray", "\\textcolor{gray}{#1}");
m("\\purple", "\\textcolor{##9d38bd}{#1}");
m("\\blueA", "\\textcolor{##ccfaff}{#1}");
m("\\blueB", "\\textcolor{##80f6ff}{#1}");
m("\\blueC", "\\textcolor{##63d9ea}{#1}");
m("\\blueD", "\\textcolor{##11accd}{#1}");
m("\\blueE", "\\textcolor{##0c7f99}{#1}");
m("\\tealA", "\\textcolor{##94fff5}{#1}");
m("\\tealB", "\\textcolor{##26edd5}{#1}");
m("\\tealC", "\\textcolor{##01d1c1}{#1}");
m("\\tealD", "\\textcolor{##01a995}{#1}");
m("\\tealE", "\\textcolor{##208170}{#1}");
m("\\greenA", "\\textcolor{##b6ffb0}{#1}");
m("\\greenB", "\\textcolor{##8af281}{#1}");
m("\\greenC", "\\textcolor{##74cf70}{#1}");
m("\\greenD", "\\textcolor{##1fab54}{#1}");
m("\\greenE", "\\textcolor{##0d923f}{#1}");
m("\\goldA", "\\textcolor{##ffd0a9}{#1}");
m("\\goldB", "\\textcolor{##ffbb71}{#1}");
m("\\goldC", "\\textcolor{##ff9c39}{#1}");
m("\\goldD", "\\textcolor{##e07d10}{#1}");
m("\\goldE", "\\textcolor{##a75a05}{#1}");
m("\\redA", "\\textcolor{##fca9a9}{#1}");
m("\\redB", "\\textcolor{##ff8482}{#1}");
m("\\redC", "\\textcolor{##f9685d}{#1}");
m("\\redD", "\\textcolor{##e84d39}{#1}");
m("\\redE", "\\textcolor{##bc2612}{#1}");
m("\\maroonA", "\\textcolor{##ffbde0}{#1}");
m("\\maroonB", "\\textcolor{##ff92c6}{#1}");
m("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
m("\\maroonD", "\\textcolor{##ca337c}{#1}");
m("\\maroonE", "\\textcolor{##9e034e}{#1}");
m("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
m("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
m("\\purpleC", "\\textcolor{##aa87ff}{#1}");
m("\\purpleD", "\\textcolor{##7854ab}{#1}");
m("\\purpleE", "\\textcolor{##543b78}{#1}");
m("\\mintA", "\\textcolor{##f5f9e8}{#1}");
m("\\mintB", "\\textcolor{##edf2df}{#1}");
m("\\mintC", "\\textcolor{##e0e5cc}{#1}");
m("\\grayA", "\\textcolor{##f6f7f7}{#1}");
m("\\grayB", "\\textcolor{##f0f1f2}{#1}");
m("\\grayC", "\\textcolor{##e3e5e6}{#1}");
m("\\grayD", "\\textcolor{##d6d8da}{#1}");
m("\\grayE", "\\textcolor{##babec2}{#1}");
m("\\grayF", "\\textcolor{##888d93}{#1}");
m("\\grayG", "\\textcolor{##626569}{#1}");
m("\\grayH", "\\textcolor{##3b3e40}{#1}");
m("\\grayI", "\\textcolor{##21242c}{#1}");
m("\\kaBlue", "\\textcolor{##314453}{#1}");
m("\\kaGreen", "\\textcolor{##71B307}{#1}");
var wn = { "^": true, _: true, "\\limits": true, "\\nolimits": true };
class ys {
  constructor(e, t, a) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new gs(bs, t.macros), this.mode = a, this.stack = [];
  }
  feed(e) {
    this.lexer = new ga(e, this.settings);
  }
  switchMode(e) {
    this.mode = e;
  }
  beginGroup() {
    this.macros.beginGroup();
  }
  endGroup() {
    this.macros.endGroup();
  }
  endGroups() {
    this.macros.endGroups();
  }
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  popToken() {
    return this.future(), this.stack.pop();
  }
  pushToken(e) {
    this.stack.push(e);
  }
  pushTokens(e) {
    this.stack.push(...e);
  }
  scanArgument(e) {
    var t, a, n;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[") return null;
      t = this.popToken(), { tokens: n, end: a } = this.consumeArg(["]"]);
    } else ({ tokens: n, start: t, end: a } = this.consumeArg());
    return this.pushToken(new f0("EOF", a.loc)), this.pushTokens(n), new f0("", d0.range(t, a));
  }
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ") this.stack.pop();
      else break;
    }
  }
  consumeArg(e) {
    var t = [], a = e && e.length > 0;
    a || this.consumeSpaces();
    var n = this.future(), i, o = 0, u = 0;
    do {
      if (i = this.popToken(), t.push(i), i.text === "{") ++o;
      else if (i.text === "}") {
        if (--o, o === -1) throw new z("Extra }", i);
      } else if (i.text === "EOF") throw new z("Unexpected end of input in a macro argument, expected '" + (e && a ? e[u] : "}") + "'", i);
      if (e && a) if ((o === 0 || o === 1 && e[u] === "{") && i.text === e[u]) {
        if (++u, u === e.length) {
          t.splice(-u, u);
          break;
        }
      } else u = 0;
    } while (o !== 0 || a);
    return n.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), { tokens: t, start: n, end: i };
  }
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1) throw new z("The length of delimiters doesn't match the number of args!");
      for (var a = t[0], n = 0; n < a.length; n++) {
        var i = this.popToken();
        if (a[n] !== i.text) throw new z("Use of the macro doesn't match its definition", i);
      }
    }
    for (var o = [], u = 0; u < e; u++) o.push(this.consumeArg(t && t[u + 1]).tokens);
    return o;
  }
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand) throw new z("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  expandOnce(e) {
    var t = this.popToken(), a = t.text, n = t.noexpand ? null : this._getExpansion(a);
    if (n == null || e && n.unexpandable) {
      if (e && n == null && a[0] === "\\" && !this.isDefined(a)) throw new z("Undefined control sequence: " + a);
      return this.pushToken(t), false;
    }
    this.countExpansion(1);
    var i = n.tokens, o = this.consumeArgs(n.numArgs, n.delimiters);
    if (n.numArgs) {
      i = i.slice();
      for (var u = i.length - 1; u >= 0; --u) {
        var c = i[u];
        if (c.text === "#") {
          if (u === 0) throw new z("Incomplete placeholder at end of macro body", c);
          if (c = i[--u], c.text === "#") i.splice(u + 1, 1);
          else if (/^[1-9]$/.test(c.text)) i.splice(u, 2, ...o[+c.text - 1]);
          else throw new z("Not a valid argument number", c);
        }
      }
    }
    return this.pushTokens(i), i.length;
  }
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  expandNextToken() {
    for (; ; ) if (this.expandOnce() === false) {
      var e = this.stack.pop();
      return e.treatAsRelax && (e.text = "\\relax"), e;
    }
  }
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new f0(e)]) : void 0;
  }
  expandTokens(e) {
    var t = [], a = this.stack.length;
    for (this.pushTokens(e); this.stack.length > a; ) if (this.expandOnce(true) === false) {
      var n = this.stack.pop();
      n.treatAsRelax && (n.noexpand = false, n.treatAsRelax = false), t.push(n);
    }
    return this.countExpansion(t.length), t;
  }
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((a) => a.text).join("");
  }
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null) return t;
    if (e.length === 1) {
      var a = this.lexer.catcodes[e];
      if (a != null && a !== 13) return;
    }
    var n = typeof t == "function" ? t(this) : t;
    if (typeof n == "string") {
      var i = 0;
      if (n.includes("#")) for (var o = n.replace(/##/g, ""); o.includes("#" + (i + 1)); ) ++i;
      for (var u = new ga(n, this.settings), c = [], d = u.lex(); d.text !== "EOF"; ) c.push(d), d = u.lex();
      c.reverse();
      var f = { tokens: c, numArgs: i };
      return f;
    }
    return n;
  }
  isDefined(e) {
    return this.macros.has(e) || X0.hasOwnProperty(e) || Z.math.hasOwnProperty(e) || Z.text.hasOwnProperty(e) || wn.hasOwnProperty(e);
  }
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : X0.hasOwnProperty(e) && !X0[e].primitive;
  }
}
var ya = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Ve = Object.freeze({ "\u208A": "+", "\u208B": "-", "\u208C": "=", "\u208D": "(", "\u208E": ")", "\u2080": "0", "\u2081": "1", "\u2082": "2", "\u2083": "3", "\u2084": "4", "\u2085": "5", "\u2086": "6", "\u2087": "7", "\u2088": "8", "\u2089": "9", "\u2090": "a", "\u2091": "e", "\u2095": "h", "\u1D62": "i", "\u2C7C": "j", "\u2096": "k", "\u2097": "l", "\u2098": "m", "\u2099": "n", "\u2092": "o", "\u209A": "p", "\u1D63": "r", "\u209B": "s", "\u209C": "t", "\u1D64": "u", "\u1D65": "v", "\u2093": "x", "\u1D66": "\u03B2", "\u1D67": "\u03B3", "\u1D68": "\u03C1", "\u1D69": "\u03D5", "\u1D6A": "\u03C7", "\u207A": "+", "\u207B": "-", "\u207C": "=", "\u207D": "(", "\u207E": ")", "\u2070": "0", "\xB9": "1", "\xB2": "2", "\xB3": "3", "\u2074": "4", "\u2075": "5", "\u2076": "6", "\u2077": "7", "\u2078": "8", "\u2079": "9", "\u1D2C": "A", "\u1D2E": "B", "\u1D30": "D", "\u1D31": "E", "\u1D33": "G", "\u1D34": "H", "\u1D35": "I", "\u1D36": "J", "\u1D37": "K", "\u1D38": "L", "\u1D39": "M", "\u1D3A": "N", "\u1D3C": "O", "\u1D3E": "P", "\u1D3F": "R", "\u1D40": "T", "\u1D41": "U", "\u2C7D": "V", "\u1D42": "W", "\u1D43": "a", "\u1D47": "b", "\u1D9C": "c", "\u1D48": "d", "\u1D49": "e", "\u1DA0": "f", "\u1D4D": "g", \u02B0: "h", "\u2071": "i", \u02B2: "j", "\u1D4F": "k", \u02E1: "l", "\u1D50": "m", \u207F: "n", "\u1D52": "o", "\u1D56": "p", \u02B3: "r", \u02E2: "s", "\u1D57": "t", "\u1D58": "u", "\u1D5B": "v", \u02B7: "w", \u02E3: "x", \u02B8: "y", "\u1DBB": "z", "\u1D5D": "\u03B2", "\u1D5E": "\u03B3", "\u1D5F": "\u03B4", "\u1D60": "\u03D5", "\u1D61": "\u03C7", "\u1DBF": "\u03B8" }), Bt = { "\u0301": { text: "\\'", math: "\\acute" }, "\u0300": { text: "\\`", math: "\\grave" }, "\u0308": { text: '\\"', math: "\\ddot" }, "\u0303": { text: "\\~", math: "\\tilde" }, "\u0304": { text: "\\=", math: "\\bar" }, "\u0306": { text: "\\u", math: "\\breve" }, "\u030C": { text: "\\v", math: "\\check" }, "\u0302": { text: "\\^", math: "\\hat" }, "\u0307": { text: "\\.", math: "\\dot" }, "\u030A": { text: "\\r", math: "\\mathring" }, "\u030B": { text: "\\H" }, "\u0327": { text: "\\c" } }, wa = { \u00E1: "a\u0301", \u00E0: "a\u0300", \u00E4: "a\u0308", \u01DF: "a\u0308\u0304", \u00E3: "a\u0303", \u0101: "a\u0304", \u0103: "a\u0306", \u1EAF: "a\u0306\u0301", \u1EB1: "a\u0306\u0300", \u1EB5: "a\u0306\u0303", \u01CE: "a\u030C", \u00E2: "a\u0302", \u1EA5: "a\u0302\u0301", \u1EA7: "a\u0302\u0300", \u1EAB: "a\u0302\u0303", \u0227: "a\u0307", \u01E1: "a\u0307\u0304", \u00E5: "a\u030A", \u01FB: "a\u030A\u0301", \u1E03: "b\u0307", \u0107: "c\u0301", \u1E09: "c\u0327\u0301", \u010D: "c\u030C", \u0109: "c\u0302", \u010B: "c\u0307", \u00E7: "c\u0327", \u010F: "d\u030C", \u1E0B: "d\u0307", \u1E11: "d\u0327", \u00E9: "e\u0301", \u00E8: "e\u0300", \u00EB: "e\u0308", \u1EBD: "e\u0303", \u0113: "e\u0304", \u1E17: "e\u0304\u0301", \u1E15: "e\u0304\u0300", \u0115: "e\u0306", \u1E1D: "e\u0327\u0306", \u011B: "e\u030C", \u00EA: "e\u0302", \u1EBF: "e\u0302\u0301", \u1EC1: "e\u0302\u0300", \u1EC5: "e\u0302\u0303", \u0117: "e\u0307", \u0229: "e\u0327", \u1E1F: "f\u0307", \u01F5: "g\u0301", \u1E21: "g\u0304", \u011F: "g\u0306", \u01E7: "g\u030C", \u011D: "g\u0302", \u0121: "g\u0307", \u0123: "g\u0327", \u1E27: "h\u0308", \u021F: "h\u030C", \u0125: "h\u0302", \u1E23: "h\u0307", \u1E29: "h\u0327", \u00ED: "i\u0301", \u00EC: "i\u0300", \u00EF: "i\u0308", \u1E2F: "i\u0308\u0301", \u0129: "i\u0303", \u012B: "i\u0304", \u012D: "i\u0306", \u01D0: "i\u030C", \u00EE: "i\u0302", \u01F0: "j\u030C", \u0135: "j\u0302", \u1E31: "k\u0301", \u01E9: "k\u030C", \u0137: "k\u0327", \u013A: "l\u0301", \u013E: "l\u030C", \u013C: "l\u0327", \u1E3F: "m\u0301", \u1E41: "m\u0307", \u0144: "n\u0301", \u01F9: "n\u0300", \u00F1: "n\u0303", \u0148: "n\u030C", \u1E45: "n\u0307", \u0146: "n\u0327", \u00F3: "o\u0301", \u00F2: "o\u0300", \u00F6: "o\u0308", \u022B: "o\u0308\u0304", \u00F5: "o\u0303", \u1E4D: "o\u0303\u0301", \u1E4F: "o\u0303\u0308", \u022D: "o\u0303\u0304", \u014D: "o\u0304", \u1E53: "o\u0304\u0301", \u1E51: "o\u0304\u0300", \u014F: "o\u0306", \u01D2: "o\u030C", \u00F4: "o\u0302", \u1ED1: "o\u0302\u0301", \u1ED3: "o\u0302\u0300", \u1ED7: "o\u0302\u0303", \u022F: "o\u0307", \u0231: "o\u0307\u0304", \u0151: "o\u030B", \u1E55: "p\u0301", \u1E57: "p\u0307", \u0155: "r\u0301", \u0159: "r\u030C", \u1E59: "r\u0307", \u0157: "r\u0327", \u015B: "s\u0301", \u1E65: "s\u0301\u0307", \u0161: "s\u030C", \u1E67: "s\u030C\u0307", \u015D: "s\u0302", \u1E61: "s\u0307", \u015F: "s\u0327", \u1E97: "t\u0308", \u0165: "t\u030C", \u1E6B: "t\u0307", \u0163: "t\u0327", \u00FA: "u\u0301", \u00F9: "u\u0300", \u00FC: "u\u0308", \u01D8: "u\u0308\u0301", \u01DC: "u\u0308\u0300", \u01D6: "u\u0308\u0304", \u01DA: "u\u0308\u030C", \u0169: "u\u0303", \u1E79: "u\u0303\u0301", \u016B: "u\u0304", \u1E7B: "u\u0304\u0308", \u016D: "u\u0306", \u01D4: "u\u030C", \u00FB: "u\u0302", \u016F: "u\u030A", \u0171: "u\u030B", \u1E7D: "v\u0303", \u1E83: "w\u0301", \u1E81: "w\u0300", \u1E85: "w\u0308", \u0175: "w\u0302", \u1E87: "w\u0307", \u1E98: "w\u030A", \u1E8D: "x\u0308", \u1E8B: "x\u0307", \u00FD: "y\u0301", \u1EF3: "y\u0300", \u00FF: "y\u0308", \u1EF9: "y\u0303", \u0233: "y\u0304", \u0177: "y\u0302", \u1E8F: "y\u0307", \u1E99: "y\u030A", \u017A: "z\u0301", \u017E: "z\u030C", \u1E91: "z\u0302", \u017C: "z\u0307", \u00C1: "A\u0301", \u00C0: "A\u0300", \u00C4: "A\u0308", \u01DE: "A\u0308\u0304", \u00C3: "A\u0303", \u0100: "A\u0304", \u0102: "A\u0306", \u1EAE: "A\u0306\u0301", \u1EB0: "A\u0306\u0300", \u1EB4: "A\u0306\u0303", \u01CD: "A\u030C", \u00C2: "A\u0302", \u1EA4: "A\u0302\u0301", \u1EA6: "A\u0302\u0300", \u1EAA: "A\u0302\u0303", \u0226: "A\u0307", \u01E0: "A\u0307\u0304", \u00C5: "A\u030A", \u01FA: "A\u030A\u0301", \u1E02: "B\u0307", \u0106: "C\u0301", \u1E08: "C\u0327\u0301", \u010C: "C\u030C", \u0108: "C\u0302", \u010A: "C\u0307", \u00C7: "C\u0327", \u010E: "D\u030C", \u1E0A: "D\u0307", \u1E10: "D\u0327", \u00C9: "E\u0301", \u00C8: "E\u0300", \u00CB: "E\u0308", \u1EBC: "E\u0303", \u0112: "E\u0304", \u1E16: "E\u0304\u0301", \u1E14: "E\u0304\u0300", \u0114: "E\u0306", \u1E1C: "E\u0327\u0306", \u011A: "E\u030C", \u00CA: "E\u0302", \u1EBE: "E\u0302\u0301", \u1EC0: "E\u0302\u0300", \u1EC4: "E\u0302\u0303", \u0116: "E\u0307", \u0228: "E\u0327", \u1E1E: "F\u0307", \u01F4: "G\u0301", \u1E20: "G\u0304", \u011E: "G\u0306", \u01E6: "G\u030C", \u011C: "G\u0302", \u0120: "G\u0307", \u0122: "G\u0327", \u1E26: "H\u0308", \u021E: "H\u030C", \u0124: "H\u0302", \u1E22: "H\u0307", \u1E28: "H\u0327", \u00CD: "I\u0301", \u00CC: "I\u0300", \u00CF: "I\u0308", \u1E2E: "I\u0308\u0301", \u0128: "I\u0303", \u012A: "I\u0304", \u012C: "I\u0306", \u01CF: "I\u030C", \u00CE: "I\u0302", \u0130: "I\u0307", \u0134: "J\u0302", \u1E30: "K\u0301", \u01E8: "K\u030C", \u0136: "K\u0327", \u0139: "L\u0301", \u013D: "L\u030C", \u013B: "L\u0327", \u1E3E: "M\u0301", \u1E40: "M\u0307", \u0143: "N\u0301", \u01F8: "N\u0300", \u00D1: "N\u0303", \u0147: "N\u030C", \u1E44: "N\u0307", \u0145: "N\u0327", \u00D3: "O\u0301", \u00D2: "O\u0300", \u00D6: "O\u0308", \u022A: "O\u0308\u0304", \u00D5: "O\u0303", \u1E4C: "O\u0303\u0301", \u1E4E: "O\u0303\u0308", \u022C: "O\u0303\u0304", \u014C: "O\u0304", \u1E52: "O\u0304\u0301", \u1E50: "O\u0304\u0300", \u014E: "O\u0306", \u01D1: "O\u030C", \u00D4: "O\u0302", \u1ED0: "O\u0302\u0301", \u1ED2: "O\u0302\u0300", \u1ED6: "O\u0302\u0303", \u022E: "O\u0307", \u0230: "O\u0307\u0304", \u0150: "O\u030B", \u1E54: "P\u0301", \u1E56: "P\u0307", \u0154: "R\u0301", \u0158: "R\u030C", \u1E58: "R\u0307", \u0156: "R\u0327", \u015A: "S\u0301", \u1E64: "S\u0301\u0307", \u0160: "S\u030C", \u1E66: "S\u030C\u0307", \u015C: "S\u0302", \u1E60: "S\u0307", \u015E: "S\u0327", \u0164: "T\u030C", \u1E6A: "T\u0307", \u0162: "T\u0327", \u00DA: "U\u0301", \u00D9: "U\u0300", \u00DC: "U\u0308", \u01D7: "U\u0308\u0301", \u01DB: "U\u0308\u0300", \u01D5: "U\u0308\u0304", \u01D9: "U\u0308\u030C", \u0168: "U\u0303", \u1E78: "U\u0303\u0301", \u016A: "U\u0304", \u1E7A: "U\u0304\u0308", \u016C: "U\u0306", \u01D3: "U\u030C", \u00DB: "U\u0302", \u016E: "U\u030A", \u0170: "U\u030B", \u1E7C: "V\u0303", \u1E82: "W\u0301", \u1E80: "W\u0300", \u1E84: "W\u0308", \u0174: "W\u0302", \u1E86: "W\u0307", \u1E8C: "X\u0308", \u1E8A: "X\u0307", \u00DD: "Y\u0301", \u1EF2: "Y\u0300", \u0178: "Y\u0308", \u1EF8: "Y\u0303", \u0232: "Y\u0304", \u0176: "Y\u0302", \u1E8E: "Y\u0307", \u0179: "Z\u0301", \u017D: "Z\u030C", \u1E90: "Z\u0302", \u017B: "Z\u0307", \u03AC: "\u03B1\u0301", \u1F70: "\u03B1\u0300", \u1FB1: "\u03B1\u0304", \u1FB0: "\u03B1\u0306", \u03AD: "\u03B5\u0301", \u1F72: "\u03B5\u0300", \u03AE: "\u03B7\u0301", \u1F74: "\u03B7\u0300", \u03AF: "\u03B9\u0301", \u1F76: "\u03B9\u0300", \u03CA: "\u03B9\u0308", \u0390: "\u03B9\u0308\u0301", \u1FD2: "\u03B9\u0308\u0300", \u1FD1: "\u03B9\u0304", \u1FD0: "\u03B9\u0306", \u03CC: "\u03BF\u0301", \u1F78: "\u03BF\u0300", \u03CD: "\u03C5\u0301", \u1F7A: "\u03C5\u0300", \u03CB: "\u03C5\u0308", \u03B0: "\u03C5\u0308\u0301", \u1FE2: "\u03C5\u0308\u0300", \u1FE1: "\u03C5\u0304", \u1FE0: "\u03C5\u0306", \u03CE: "\u03C9\u0301", \u1F7C: "\u03C9\u0300", \u038E: "\u03A5\u0301", \u1FEA: "\u03A5\u0300", \u03AB: "\u03A5\u0308", \u1FE9: "\u03A5\u0304", \u1FE8: "\u03A5\u0306", \u038F: "\u03A9\u0301", \u1FFA: "\u03A9\u0300" };
class ct {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new ys(e, t, this.mode), this.settings = t, this.leftrightDepth = 0, this.nextToken = null;
  }
  expect(e, t) {
    if (t === void 0 && (t = true), this.fetch().text !== e) throw new z("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  consume() {
    this.nextToken = null;
  }
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(false);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new f0("}")), this.gullet.pushTokens(e);
    var a = this.parseExpression(false);
    return this.expect("}"), this.nextToken = t, a;
  }
  parseExpression(e, t) {
    for (var a = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var n = this.fetch();
      if (ct.endOfExpression.has(n.text) || t && n.text === t || e && X0[n.text] && X0[n.text].infix) break;
      var i = this.parseAtom(t);
      if (i) {
        if (i.type === "internal") continue;
      } else break;
      a.push(i);
    }
    return this.mode === "text" && this.formLigatures(a), this.handleInfixNodes(a);
  }
  handleInfixNodes(e) {
    for (var t = -1, a, n = 0; n < e.length; n++) {
      var i = e[n];
      if (i.type === "infix") {
        if (t !== -1) throw new z("only one infix operator per group", i.token);
        t = n, a = i.replaceWith;
      }
    }
    if (t !== -1 && a) {
      var o, u, c = e.slice(0, t), d = e.slice(t + 1);
      c.length === 1 && c[0].type === "ordgroup" ? o = c[0] : o = { type: "ordgroup", mode: this.mode, body: c }, d.length === 1 && d[0].type === "ordgroup" ? u = d[0] : u = { type: "ordgroup", mode: this.mode, body: d };
      var f;
      return a === "\\\\abovefrac" ? f = this.callFunction(a, [o, e[t], u], []) : f = this.callFunction(a, [o, u], []), [f];
    } else return e;
  }
  handleSupSubscript(e) {
    var t = this.fetch(), a = t.text;
    this.consume(), this.consumeSpaces();
    var n;
    do {
      var i;
      n = this.parseGroup(e);
    } while (((i = n) == null ? void 0 : i.type) === "internal");
    if (!n) throw new z("Expected group after '" + a + "'", t);
    return n;
  }
  formatUnsupportedCmd(e) {
    for (var t = [], a = 0; a < e.length; a++) t.push({ type: "textord", mode: "text", text: e[a] });
    var n = { type: "text", mode: this.mode, body: t }, i = { type: "color", mode: this.mode, color: this.settings.errorColor, body: [n] };
    return i;
  }
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if ((t == null ? void 0 : t.type) === "internal" || this.mode === "text") return t;
    for (var a, n; ; ) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (t && t.type === "op") t.limits = i.text === "\\limits", t.alwaysHandleSupSub = true;
        else if (t && t.type === "operatorname") t.alwaysHandleSupSub && (t.limits = i.text === "\\limits");
        else throw new z("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (a) throw new z("Double superscript", i);
        a = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (n) throw new z("Double subscript", i);
        n = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (a) throw new z("Double superscript", i);
        var o = { type: "textord", mode: this.mode, text: "\\prime" }, u = [o];
        for (this.consume(); this.fetch().text === "'"; ) u.push(o), this.consume();
        this.fetch().text === "^" && u.push(this.handleSupSubscript("superscript")), a = { type: "ordgroup", mode: this.mode, body: u };
      } else if (Ve[i.text]) {
        var c = ya.test(i.text), d = [];
        for (d.push(new f0(Ve[i.text])), this.consume(); ; ) {
          var f = this.fetch().text;
          if (!Ve[f] || ya.test(f) !== c) break;
          d.unshift(new f0(Ve[f])), this.consume();
        }
        var g = this.subparse(d);
        c ? n = { type: "ordgroup", mode: "math", body: g } : a = { type: "ordgroup", mode: "math", body: g };
      } else break;
    }
    return a && n ? { type: "supsub", mode: this.mode, base: t, sup: a, sub: n } : a ? { type: "supsub", mode: this.mode, base: t, sup: a } : n ? { type: "supsub", mode: this.mode, base: t, sub: n } : t;
  }
  parseFunction(e, t) {
    var a = this.fetch(), n = a.text, i = X0[n];
    if (!i) return null;
    if (this.consume(), t && t !== "atom" && !i.allowedInArgument) throw new z("Got function '" + n + "' with no arguments" + (t ? " as " + t : ""), a);
    if (this.mode === "text" && !i.allowedInText) throw new z("Can't use function '" + n + "' in text mode", a);
    if (this.mode === "math" && i.allowedInMath === false) throw new z("Can't use function '" + n + "' in math mode", a);
    var { args: o, optArgs: u } = this.parseArguments(n, i);
    return this.callFunction(n, o, u, a, e);
  }
  callFunction(e, t, a, n, i) {
    var o = { funcName: e, parser: this, token: n, breakOnTokenText: i }, u = X0[e];
    if (u && u.handler) return u.handler(o, t, a);
    throw new z("No function handler for " + e);
  }
  parseArguments(e, t) {
    var a, n = (a = t.numOptionalArgs) != null ? a : 0, i = t.numArgs + n;
    if (i === 0) return { args: [], optArgs: [] };
    for (var o = [], u = [], c = 0; c < i; c++) {
      var d, f = (d = t.argTypes) == null ? void 0 : d[c], g = c < n;
      ("primitive" in t && t.primitive && f == null || t.type === "sqrt" && c === 1 && u[0] == null) && (f = "primitive");
      var x = this.parseGroupOfType("argument to '" + e + "'", f, g);
      if (g) u.push(x);
      else if (x != null) o.push(x);
      else throw new z("Null argument, please report this as a bug");
    }
    return { args: o, optArgs: u };
  }
  parseGroupOfType(e, t, a) {
    switch (t) {
      case "color":
        return this.parseColorGroup(a);
      case "size":
        return this.parseSizeGroup(a);
      case "url":
        return this.parseUrlGroup(a);
      case "math":
      case "text":
        return this.parseArgumentGroup(a, t);
      case "hbox": {
        var n = this.parseArgumentGroup(a, "text");
        return n != null ? { type: "styling", mode: n.mode, body: [n], style: "text", resetFont: true } : null;
      }
      case "raw": {
        var i = this.parseStringGroup(a);
        return i != null ? { type: "raw", mode: "text", string: i.text } : null;
      }
      case "primitive": {
        if (a) throw new z("A primitive argument cannot be optional");
        var o = this.parseGroup(e);
        if (o == null) throw new z("Expected group as " + e, this.fetch());
        return o;
      }
      case "original":
      case void 0:
        return this.parseArgumentGroup(a);
      default:
        throw new z("Unknown group type as " + e, this.fetch());
    }
  }
  consumeSpaces() {
    for (; this.fetch().text === " "; ) this.consume();
  }
  parseStringGroup(e) {
    var t = this.gullet.scanArgument(e);
    if (t == null) return null;
    for (var a = "", n; (n = this.fetch()).text !== "EOF"; ) a += n.text, this.consume();
    return this.consume(), t.text = a, t;
  }
  parseRegexGroup(e, t) {
    for (var a = this.fetch(), n = a, i = "", o; (o = this.fetch()).text !== "EOF" && e.test(i + o.text); ) n = o, i += n.text, this.consume();
    if (i === "") throw new z("Invalid " + t + ": '" + a.text + "'", a);
    return a.range(n, i);
  }
  parseColorGroup(e) {
    var t = this.parseStringGroup(e);
    if (t == null) return null;
    var a = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!a) throw new z("Invalid color: '" + t.text + "'", t);
    var n = a[0];
    return /^[0-9a-f]{6}$/i.test(n) && (n = "#" + n), { type: "color-token", mode: this.mode, color: n };
  }
  parseSizeGroup(e) {
    var t, a = false;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup(e), !t) return null;
    !e && t.text.length === 0 && (t.text = "0pt", a = true);
    var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!n) throw new z("Invalid size: '" + t.text + "'", t);
    var i = { number: +(n[1] + n[2]), unit: n[3] };
    if (!Ea(i)) throw new z("Invalid unit: '" + i.unit + "'", t);
    return { type: "size", mode: this.mode, value: i, isBlank: a };
  }
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup(e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null) return null;
    var a = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return { type: "url", mode: this.mode, url: a };
  }
  parseArgumentGroup(e, t) {
    var a = this.gullet.scanArgument(e);
    if (a == null) return null;
    var n = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var i = this.parseExpression(false, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var o = { type: "ordgroup", mode: this.mode, loc: a.loc, body: i };
    return t && this.switchMode(n), o;
  }
  parseGroup(e, t) {
    var a = this.fetch(), n = a.text, i;
    if (n === "{" || n === "\\begingroup") {
      this.consume();
      var o = n === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var u = this.parseExpression(false, o), c = this.fetch();
      this.expect(o), this.gullet.endGroup(), i = { type: "ordgroup", mode: this.mode, loc: d0.range(a, c), body: u, semisimple: n === "\\begingroup" || void 0 };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && n[0] === "\\" && !wn.hasOwnProperty(n)) {
      if (this.settings.throwOnError) throw new z("Undefined control sequence: " + n, a);
      i = this.formatUnsupportedCmd(n), this.consume();
    }
    return i;
  }
  formLigatures(e) {
    for (var t = e.length - 1, a = 0; a < t; ++a) {
      var n = e[a];
      if (n.type === "textord") {
        var i = n.text, o = e[a + 1];
        if (!(!o || o.type !== "textord")) {
          if (i === "-" && o.text === "-") {
            var u = e[a + 2];
            a + 1 < t && u && u.type === "textord" && u.text === "-" ? (e.splice(a, 3, { type: "textord", mode: "text", loc: d0.range(n, u), text: "---" }), t -= 2) : (e.splice(a, 2, { type: "textord", mode: "text", loc: d0.range(n, o), text: "--" }), t -= 1);
          }
          (i === "'" || i === "`") && o.text === i && (e.splice(a, 2, { type: "textord", mode: "text", loc: d0.range(n, o), text: i + i }), t -= 1);
        }
      }
    }
  }
  parseSymbol() {
    var e = this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var a = t.slice(5), n = a.charAt(0) === "*";
      if (n && (a = a.slice(1)), a.length < 2 || a.charAt(0) !== a.slice(-1)) throw new z(`\\verb assertion failed --
                    please report what input caused this bug`);
      return a = a.slice(1, -1), { type: "verb", mode: "text", body: a, star: n };
    }
    wa.hasOwnProperty(t[0]) && !Z[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = wa[t[0]] + t.slice(1));
    var i = fs.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "\u0131" : t === "j" && (t = "\u0237"));
    var o;
    if (Z[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Ft.includes(t) && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var u = Z[this.mode][t].group, c = d0.range(e), d;
      Ti(u) ? d = { type: "atom", mode: this.mode, family: u, loc: c, text: t } : d = { type: u, mode: this.mode, loc: c, text: t }, o = d;
    } else if (t.charCodeAt(0) >= 128) this.settings.strict && (qa(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), o = { type: "textord", mode: "text", loc: d0.range(e), text: t };
    else return null;
    if (this.consume(), i) for (var f = 0; f < i[0].length; f++) {
      var g = i[0][f];
      if (!Bt[g]) throw new z("Unknown accent ' " + g + "'", e);
      var x = Bt[g][this.mode] || Bt[g].text;
      if (!x) throw new z("Accent " + g + " unsupported in " + this.mode + " mode", e);
      o = { type: "accent", mode: this.mode, loc: d0.range(e), label: x, isStretchy: false, isShifty: true, base: o };
    }
    return o;
  }
}
ct.endOfExpression = /* @__PURE__ */ new Set(["}", "\\endgroup", "\\end", "\\right", "&"]);
var yr = function(e, t) {
  if (!(typeof e == "string" || e instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
  var a = new ct(e, t);
  delete a.gullet.macros.current["\\df@tag"];
  var n = a.parse();
  if (delete a.gullet.macros.current["\\current@color"], delete a.gullet.macros.current["\\color"], a.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode) throw new z("\\tag works only in display equations");
    n = [{ type: "tag", mode: "text", body: n, tag: a.subparse([new f0("\\df@tag")]) }];
  }
  return n;
}, kn = function(e, t, a) {
  t.textContent = "";
  var n = wr(e, a).toNode();
  t.appendChild(n);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), kn = function() {
  throw new z("KaTeX doesn't work in quirks mode.");
});
var ws = function(e, t) {
  var a = wr(e, t).toMarkup();
  return a;
}, ks = function(e, t) {
  var a = new lr(t);
  return yr(e, a);
}, Sn = function(e, t, a) {
  if (a.throwOnError || !(e instanceof z)) throw e;
  var n = k(["katex-error"], [new v0(t)]);
  return n.setAttribute("title", e.toString()), n.setAttribute("style", "color:" + a.errorColor), n;
}, wr = function(e, t) {
  var a = new lr(t);
  try {
    var n = yr(e, a);
    return bi(n, e, a);
  } catch (i) {
    return Sn(i, e, a);
  }
}, Ss = function(e, t) {
  var a = new lr(t);
  try {
    var n = yr(e, a);
    return xi(n, e, a);
  } catch (i) {
    return Sn(i, e, a);
  }
}, zs = "0.17.0", As = { Span: ve, Anchor: tt, SymbolNode: v0, SvgNode: N0, PathNode: W0, LineNode: Lt }, Ts = { version: zs, render: kn, renderToString: ws, ParseError: z, SETTINGS_SCHEMA: Et, __parse: ks, __renderToDomTree: wr, __renderToHTMLTree: Ss, __setFontMetrics: _1, __defineSymbol: s, __defineFunction: B, __defineMacro: m, __domTree: As };
export {
  W as g,
  Ts as k
};
