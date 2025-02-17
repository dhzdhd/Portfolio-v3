import fs from 'fs'
import { xml, type XMLPayload } from '$lib/rss';
import path from 'path';
import matter from 'gray-matter';
import { log } from 'console';

export const prerender = true;

export async function GET() {
    const fileNames = await fs.promises.readdir('src/posts');

    log(fileNames);

    const posts = (
        await Promise.all(
            fileNames.map(async (fileName: string) => {
                const doc = await fs.promises.readFile(`src/posts/${fileName}`, 'utf8');

                const { data } = matter(doc);

                data.slug = path.basename(fileName, '.svx');
                return data as XMLPayload;
            })
        )
    )

    log(posts);

    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml'
    };

    const body = xml(posts);

    return new Response(body, { headers });
}