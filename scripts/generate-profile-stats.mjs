import { writeFile } from 'node:fs/promises';

const token = process.env.GITHUB_TOKEN;
if (!token) throw new Error('GITHUB_TOKEN is required');

const login = 'wilkinsantana';
const query = `
  query ProfileStats($login: String!) {
    user(login: $login) {
      followers { totalCount }
      repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
        totalCount
        nodes {
          languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
            edges { size node { name color } }
          }
        }
      }
      contributionsCollection {
        contributionCalendar { totalContributions }
      }
    }
  }
`;

const response = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    authorization: `Bearer ${token}`,
    'content-type': 'application/json',
    'user-agent': 'wilkinsantana-profile-stats',
  },
  body: JSON.stringify({ query, variables: { login } }),
});
if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
const payload = await response.json();
if (payload.errors?.length) throw new Error(payload.errors.map(error => error.message).join('; '));

const user = payload.data.user;
const languageTotals = new Map();
for (const repository of user.repositories.nodes) {
  for (const edge of repository.languages.edges) {
    const previous = languageTotals.get(edge.node.name) ?? { size: 0, color: edge.node.color ?? '#7c6aff' };
    previous.size += edge.size;
    languageTotals.set(edge.node.name, previous);
  }
}

const languages = [...languageTotals.entries()]
  .map(([name, value]) => ({ name, ...value }))
  .sort((a, b) => b.size - a.size)
  .slice(0, 4);
const totalLanguageSize = languages.reduce((sum, language) => sum + language.size, 0) || 1;

const escapeXml = value => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');
const number = value => new Intl.NumberFormat('en-US').format(value);

let languageRows = '';
let languageBars = '';
let barX = 0;
languages.forEach((language, index) => {
  const rowY = 72 + index * 36;
  languageRows += `<circle cx="31" cy="${rowY}" r="6" fill="${escapeXml(language.color)}"/><text x="49" y="${rowY + 5}" fill="#e6e6f0" font-size="15">${escapeXml(language.name)}</text>`;
  const width = index === languages.length - 1
    ? 790 - barX
    : Math.round((language.size / totalLanguageSize) * 790);
  languageBars += `<rect x="${barX}" y="22" width="${Math.max(1, width)}" height="18" fill="${escapeXml(language.color)}"/>`;
  barX += width;
});

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="330" viewBox="0 0 1200 330" role="img" aria-labelledby="title desc">
<title id="title">Wilkin Santana's GitHub activity</title>
<desc id="desc">${number(user.repositories.totalCount)} public repositories, ${number(user.contributionsCollection.contributionCalendar.totalContributions)} contributions this year, and ${number(user.followers.totalCount)} followers.</desc>
<defs><linearGradient id="panel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#151525"/><stop offset="1" stop-color="#0d0d0d"/></linearGradient><linearGradient id="accent" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7c6aff"/><stop offset="1" stop-color="#a89cff"/></linearGradient><clipPath id="bar"><rect width="790" height="18" y="22" rx="9"/></clipPath></defs>
<rect width="1200" height="330" rx="20" fill="#08080d"/><rect x="1" y="1" width="1198" height="328" rx="19" fill="none" stroke="#292943"/>
<text x="40" y="48" fill="#fff" font-family="Inter,Segoe UI,sans-serif" font-size="24" font-weight="700">GitHub activity</text><text x="1160" y="46" text-anchor="end" fill="#72728d" font-family="Inter,Segoe UI,sans-serif" font-size="13">AUTOMATICALLY REFRESHED</text>
<g font-family="Inter,Segoe UI,sans-serif">
<g transform="translate(40 76)"><rect width="250" height="112" rx="14" fill="url(#panel)" stroke="#292943"/><text x="22" y="35" fill="#8b8ba7" font-size="13" font-weight="600">PUBLIC REPOSITORIES</text><text x="22" y="84" fill="#fff" font-size="40" font-weight="750">${number(user.repositories.totalCount)}</text></g>
<g transform="translate(310 76)"><rect width="250" height="112" rx="14" fill="url(#panel)" stroke="#292943"/><text x="22" y="35" fill="#8b8ba7" font-size="13" font-weight="600">CONTRIBUTIONS THIS YEAR</text><text x="22" y="84" fill="#fff" font-size="40" font-weight="750">${number(user.contributionsCollection.contributionCalendar.totalContributions)}</text></g>
<g transform="translate(580 76)"><rect width="250" height="112" rx="14" fill="url(#panel)" stroke="#292943"/><text x="22" y="35" fill="#8b8ba7" font-size="13" font-weight="600">FOLLOWERS</text><text x="22" y="84" fill="#fff" font-size="40" font-weight="750">${number(user.followers.totalCount)}</text></g>
<g transform="translate(850 76)"><rect width="310" height="214" rx="14" fill="url(#panel)" stroke="#292943"/><text x="22" y="35" fill="#8b8ba7" font-size="13" font-weight="600">MOST-USED LANGUAGES</text>${languageRows}</g>
</g>
<g transform="translate(40 218)"><text fill="#8b8ba7" font-family="Inter,Segoe UI,sans-serif" font-size="13" font-weight="600">LANGUAGE DISTRIBUTION</text><g clip-path="url(#bar)">${languageBars}</g><text y="70" fill="#72728d" font-family="Inter,Segoe UI,sans-serif" font-size="13">Public repositories and owned code • generated from the GitHub API</text></g>
<rect x="40" y="308" width="1120" height="3" rx="1.5" fill="url(#accent)"/>
</svg>`;

await writeFile(new URL('../assets/profile-stats.svg', import.meta.url), svg);
