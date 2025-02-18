import { xml, type XMLPayload } from '$lib/rss';
import path from 'path';
import matter from 'gray-matter';

export const prerender = true;

export async function GET() {
    const files = import.meta.glob('../../../posts/*.svx', { query: '?raw', eager: true });

    const posts = (
        await Promise.all(
            Object.entries(files).map(async ([fileName, post]: any) => {
                const doc = post.default;

                const { data, content } = matter(doc as string);

                data.slug = path.basename(fileName, '.svx');
                data.content = content
                return data as XMLPayload;
            })
        )
    )

    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml'
    };

    const body = xml(posts);

    return new Response(body, { headers });
}