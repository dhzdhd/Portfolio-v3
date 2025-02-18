import moment from "moment";
import { create } from "xmlbuilder2";

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
    content: any;
}

const parseDate = (date: string): string => {
    return moment(date, 'YYYY-MM-DD').toISOString();
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
        <updated>${parseDate(post.date)}</updated>
        <published>${parseDate(post.date)}</published>
        <content type="html"><![CDATA[${post.content}]]></content>
      </entry>`
).join('\n')}
  </feed>`;

const BLOG_URL = "https://www.dhzdhd.dev/blog";

async function getRssXml(): Promise<string> {
    const rssUrl = `${BLOG_URL}/rss.xml`;
    const root = create({ version: '1.0', encoding: 'utf-8' })
        .ele('feed', {
            xmlns: 'http://www.w3.org/2005/Atom',
        })
        .ele('title').txt("dhzdhd Blog").up()
        .ele('link', { href: BLOG_URL }).up()
        .ele('link', { rel: 'self', href: rssUrl }).up()
        .ele('updated').txt(new Date().toISOString()).up()
        .ele('id').txt(BLOG_URL).up()
        .ele('author')
        .ele('name').txt('dhzdhd').up()
        .up()

    return root.end();
}