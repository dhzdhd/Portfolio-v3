const website = 'https://www.dhzdhd.dev';
const feedTitle = 'dhzdhd blog';
const feedDescription = 'Blogs and guides from dhzdhd.';
const feedLink = 'https://www.dhzdhd.dev/blog';
const feedUpdated = new Date();

export interface XMLPayload {
    title: string;
    description: string;
    date: string;
    slug: string;
    author: string;
    published: boolean;
    tags: string[];
    content: string;
}

export const xml = (posts: XMLPayload[]) => `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>${feedTitle}</title>
    <link href="${feedLink}/rss.xml" rel="self"/>
    <link href="${feedLink}"/>
    <id>${feedLink}/</id>
    <updated>${feedUpdated.toISOString()}</updated>
    <author>
      <name>dhzdhd</name>
    </author>
    <subtitle>${feedDescription}</subtitle>
    <generator>JavaScript</generator>
${posts.map((post: XMLPayload) => `    <entry>
        <title>${post.title}</title>
        <link href="${website}/blog/${post.slug}/"/>
        <id>${website}/blog/${post.slug}/</id>
        <updated>${post.date}</updated>
        <published>${post.date}</published>
        <content type="html"><![CDATA[${post.content}]]></content>
      </entry>`
).join('\n')}
  </feed>`;