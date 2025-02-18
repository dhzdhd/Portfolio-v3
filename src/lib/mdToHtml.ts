import { unified } from "unified"
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype'
import rehypeStringify from "rehype-stringify";
import remarkToc from "remark-toc";

export const mdToHtml = async (content: string) => {
    return await unified()
        .use(remarkParse)
        .use(remarkToc)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(content)
}